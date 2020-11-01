import React, { useState } from 'react'
import { Button, Form, Modal, Card } from "react-bootstrap"
import { useSelector } from 'react-redux'
import { selectAuth, selectUser, selectAdmin } from '../../features/auth/authSlice'
import { getPosts, submitPost, removePost, sendEmails, submitComment, getRelatedComments, commentNotification } from '../../UserFunctions';
import shortid from 'shortid'
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css'
import { useEffect } from 'react';

export default function Post() {
    const [ postHeader, setPostHeader ] = useState('')
    const [ postContent, setPostContent ] = useState('')
    const [ result, setResult ] = useState([])
    const [ fetchedComments, setFetchedComments ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)
    const [ showAddComment, setShowAddComment ] = useState(false)
    const [ showComments, setShowComments ] = useState(false)
    const [ showPostForm, setShowPostForm ] = useState(false)
    const [ commentContent, setCommentContent ] = useState('')
    const [ relatedPost, setRelatedPost ] = useState('')
    const isAuthenticated = useSelector(selectAuth)
    const postCreator = useSelector(selectUser)
    const isAdmin = useSelector(selectAdmin)
    const creatorName = postCreator.firstName + " " + postCreator.lastName

    useEffect(() => {
        fetchPosts()
    }, []);

    const handleAddCommentClose = () => setShowAddComment(false)
    const handleAddCommentShow = () => setShowAddComment(true)

    const handleShowCommentsClose = () => setShowComments(false)
    const handleShowCommentsShow = () => setShowComments(true)

    const handleShowPostFormClose = () => setShowPostForm(false)
    const handleShowPostFormShow = () => setShowPostForm(true)

    /*
     * Posts the given post to the database
     */
    function onSubmit(e) {
        e.preventDefault()
        setIsLoading(true)
        const post = { postHeader, postContent, creatorName, postId: shortid.generate() }
        submitPost(post).finally(() => {
            setIsLoading(false)
            window.location.reload()
        })
        sendEmails(postCreator.email)
    }

    /*
     * Submits comment to the database. Attribute with related postId is added to the comment, to
     * find the releated post for rendering.
     */
    function postComment() {
        setShowAddComment(false)
        var comment = {
            content: commentContent,
            creator: creatorName,
            post: relatedPost 
        }
        submitComment(comment) 
        commentNotification(comment)
    }

    /*
     * Returns array of all posts, fetched from the database
     */
    function fetchPosts() {
        getPosts().then((res) => setResult(res.reverse()))
    }

    function fetchComments(post) {
        getRelatedComments(post).then((res) => setFetchedComments(res.reverse()))
    }

    const postForm = (
        <React.Fragment>
            <Button id="createPostBtn" variant="primary" onClick={handleShowPostFormShow}>Neuer Spruch</Button>

            <Modal show={showPostForm} onHide={handleShowPostFormClose}>
                <Modal.Header closeButton> 
                <Modal.Title>Einen neuen Spruch verfassen</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="postForm" autoComplete="off">
                        <Form.Group>
                            <Form.Control
                                id="postHeader" required
                                placeholder="Spruch-Überschrift"
                                onChange={e => setPostHeader(e.target.value)}
                                value={postHeader}
                            />
                        </Form.Group>
                        <Form.Group>
                            <textarea 
                                id="postContent" required
                                className="form-control" 
                                aria-label="With textarea"
                                placeholder="Inhalt"
                                onChange={e => setPostContent(e.target.value)}
                                value={postContent}
                            />
                        </Form.Group> 
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleShowPostFormClose}>
                    Schließen
                </Button>
                <Button disabled={isLoading} variant="primary" onClick={onSubmit}>
                    Post veröffentlichen
                </Button>
                </Modal.Footer>
            </Modal>
 
            <Modal show={showAddComment} onHide={handleAddCommentClose}>
                <Modal.Header closeButton> 
                <Modal.Title>Neuen Kommentar verfassen</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group>
                        <Form.Label>Inhalt</Form.Label>
                        <Form.Control 
                            value={commentContent} 
                            onChange={e => setCommentContent(e.target.value)} 
                            as="textarea" rows={4} 
                        />
                    </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleAddCommentClose}>
                    Schließen
                </Button>
                <Button variant="primary" onClick={postComment}>
                    Kommentieren
                </Button>
                </Modal.Footer>
            </Modal>
            
            <Modal show={showComments} onHide={handleShowCommentsClose}>
                <Modal.Header closeButton> 
                <Modal.Title>Kommentare</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        fetchedComments.length === 0 ? <p>Es gibt noch keine Kommentare</p> :
                        fetchedComments.map(comment => 
                            <Card id="comment" style={{ width: '25rem' }}>
                                <Card.Body>
                                    <Card.Title>{'Kommentar von ' + comment.creator}</Card.Title>
                                    <Card.Text>{comment.content}</Card.Text>
                                </Card.Body>
                            </Card>
                    )}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleShowCommentsClose}>
                    Schließen
                </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );

    return(
        <div id="container">
            {isAuthenticated && postForm}
            {
                result.length && <ul>
                    {result.map(res => 
                        <div id="postContainer">
                            {isAdmin && <Button onClick={e => removePost(e.target.name).then(() => window.location.reload())} type="submit" id="removePostBtn" name={res._id} variant="danger" size="sm">Spruch löschen</Button>}
                            <div id="headerCard" class="card-body">
                                {res.postHeader + " (veröffentlicht von " + res.creatorName + ")"}
                            </div>
                            <div class="card-body">
                                {res.postContent}
                            </div>
                            <div class="card-body">
                                {"veröffentlicht: " + res.created.split('T')[0] + (res.creatorName === "Julian Hummel" ? " (admin)" : " (user)")}
                            </div>
                            <div class="card-body">
                                {isAuthenticated && <Button onClick={() => {
                                        fetchComments(res.postId)
                                        handleShowCommentsShow()
                                    }}
                                    variant="link">
                                        Kommentare anzeigen
                                </Button>}

                                {isAuthenticated && <Button onClick={() => {
                                        setRelatedPost(res.postId)
                                        handleAddCommentShow()
                                    }}
                                    variant="link">
                                        Kommentieren
                                </Button>}
                            </div>
                        </div>
                    )}
                </ul>
            }
        </div> 
            
    )
}
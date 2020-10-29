import React, { useState } from 'react'
import { Button, Form } from "react-bootstrap"
import { useSelector } from 'react-redux'
import { selectAuth, selectUser, selectAdmin } from '../../features/auth/authSlice'
import { getPosts, submitPost, removePost } from '../../UserFunctions';
import shortid from 'shortid'
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css'
import { useEffect } from 'react';

export default function Post() {
    const [ postHeader, setPostHeader ] = useState('')
    const [ postContent, setPostContent ] = useState('')
    const [ result, setResult ] = useState([])
    const isAuthenticated = useSelector(selectAuth)
    const postCreator = useSelector(selectUser)
    const isAdmin = useSelector(selectAdmin)
    const creatorName = postCreator.firstName + " " + postCreator.lastName

    useEffect(() => {
        fetchPosts()
    }, []);

    /*
     * Posts the given post to the database
     */
    function onSubmit() {
        const post = { postHeader, postContent, creatorName, postId: shortid.generate() }
        submitPost(post)
    }

    /*
     * Returns array of all posts, fetched from the database
     */
    function fetchPosts() {
        getPosts().then((res) => setResult(res.reverse()))
    }

    const postForm = (
        <Form id="postForm" onSubmit={onSubmit} autoComplete="off">
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
            <Button type="submit" id="submitBtn" size="sm">Spruch veröffentlichen</Button>
        </Form>
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
                                {"veröffentlicht: " + res.created.split('T')[0]}
                            </div>
                        </div>
                    )}
                </ul>
            }
        </div> 
            
    )
}
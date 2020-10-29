import React from 'react'
import classnames from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { selectText, selectType } from '../../features/flashMesssage/flashMessageSlice'
import { deleteFlashMessage } from '../../features/flashMesssage/flashMessageSlice'
import './style.css'

export default function FlashMessage() {
    const text = useSelector(selectText)
    const type = useSelector(selectType)
    const dispatch = useDispatch()

    function onClick() {
        dispatch(deleteFlashMessage())
    }

    return(
        <div id="message" className={classnames('alert', {
            'alert-success': type === 'success',
            'alert-danger': type === 'error'
        })}>
            {text && <button onClick={onClick} className="close"><span>&times;</span></button>}
            {text}
        </div>
    )
}
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function NoteItemBody({ id, title, body, createdAt }) {
  return (
    <div className='note-item__body'>
      <h3 className='note-item__title'>
        <Link className='note-item__titleLink' to={`/note/${id}`}>{title}</Link>
      </h3>
      <p className='note-item__created'>{createdAt}</p>
      <p className='note-item__overview'>{body}</p>
    </div>
  )
}

NoteItemBody.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
}

export default NoteItemBody;


import React from 'react'
import PropTypes from 'prop-types'

function NoteDetail({ id, title, body, createdAt, imageUrl }) {
  return (
    <div className='note-detail'>
      <img className='note-detail__img' src={imageUrl} alt="" />
      <h2 className='note-detail__title'>{title}</h2>
      <p className='note-detail__createdAt'>{createdAt}</p>
      <p className='note-detail__body'>{body}</p>
    </div>
  )
}

NoteDetail.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default NoteDetail;


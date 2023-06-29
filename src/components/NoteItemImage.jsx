import React from 'react'
import imageDefault from '../../public/images/defaultNote.jpg'

function NoteItemImage() {
  return (
    <div className='note-item__image'>
      <img src={imageDefault} alt="note avatar" />
    </div>
  )
}

export default NoteItemImage;


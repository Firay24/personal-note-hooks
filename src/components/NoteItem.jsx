import React from 'react'
import PropTypes from 'prop-types'
import NoteItemImage from './NoteItemImage'
import NoteItemBody from './NoteItemBody'
import DeleteButton from './DeleteButton'
import ArchieveButton from './ArchieveButton'
import UnarchieveButton from './UnarchieveButton'
import { useLocation } from 'react-router-dom'

function NoteItem({title, createdAt, body, id, onDelete, onArchieve, onUnarchieve}) {
  const location = useLocation();
  let buttonUse;

  if (location.pathname === '/') {
    buttonUse = <ArchieveButton id={id} onArchieve={onArchieve} />
  } else if (location.pathname === '/archieve') {
    buttonUse = <UnarchieveButton id={id} onUnarchieve={onUnarchieve} />
  } 

  return (
    <div className='note-item'>
      <NoteItemImage />
      <NoteItemBody title={title} createdAt={createdAt} body={body} id={id} />
      <div className='note-item__button'>
        <DeleteButton id={id} onDelete={onDelete} />
        {buttonUse}
      </div>
    </div>
  )
}

NoteItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchieve: PropTypes.func,
  onUnarchieve: PropTypes.func,
}

export default NoteItem;


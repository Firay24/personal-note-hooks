import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchieve, onUnarchieve }) {
  return (
    <div className='note-list'>
      {
        notes.map((note) => (
            <NoteItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchieve = {onArchieve}
            onUnarchieve = {onUnarchieve}
            {...note} />
        ))
      }
    </div>
  )
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchieve: PropTypes.func,
    onUnarchieve: PropTypes.func,
}

export default NoteList;


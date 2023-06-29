import React from 'react'
import PropTypes from 'prop-types'

function ArchieveButton({ id, onArchieve }) {
  return (
    <button className='note-item__archieve' onClick={() => onArchieve(id)}>Arsipkan</button>
  )
}

ArchieveButton.propTypes = {
    id: PropTypes.string.isRequired,
    onArchieve: PropTypes.func.isRequired,
}

export default ArchieveButton;

import React from 'react'
import PropTypes from 'prop-types'

function UnarchieveButton({ id, onUnarchieve }) {
  return (
    <button className='note-item__unarchieve' onClick={() => onUnarchieve(id)}>Tampilkan</button>
  )
}

UnarchieveButton.propTypes = {
    id:PropTypes.string.isRequired,
    onUnarchieve: PropTypes.func.isRequired,
}

export default UnarchieveButton


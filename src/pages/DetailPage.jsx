import React, { useState } from 'react'
import { getNote } from '../utils/api'
import NoteDetail from '../components/NoteDetail';
import { useParams } from 'react-router-dom';

function DetailPage() {
  const [note, setNote] = useState({ error: false, data: null })
  const { id } = useParams()

  const getDetailNote = async (id) => {
    const result = await getNote(id)
    setNote(result)
  }

  getDetailNote(id)

  const {error, data} = note
  
  return (
    <div>
      <NoteDetail {...data} />
    </div>
  )
}

export default DetailPage

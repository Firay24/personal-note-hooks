import React, { useEffect, useState } from 'react'
import NoteList from '../components/NoteList'
import { getActiveNotes, deleteNote, archiveNote } from '../utils/api'
import NotFoundNote from '../components/NotFoundNote'
import SearchBar from '../components/SearchBar'
import { useSearchParams } from 'react-router-dom'

function HomePage() {
  const [notes, setNotes] = useState({ error: false, data: [] })
  const [searchParams, setSearchParams] = useSearchParams()
  const [keyword, setKeyword] = useState(searchParams.get('keyword') || '')

  useEffect(() => {
    const fetchData = async () => {
      const result = await getActiveNotes();
      setNotes(result);
    };

    fetchData();
  },[])

  const {error, data} = notes

  const onDeleteHandler = async(id) => {
    if (confirm('Apakah anda yakin menghapus catatan ini?')) {
      await deleteNote(id)
      const result = await getActiveNotes();
      setNotes(result);
    }
  }

  const onArchieveHandler = async (id) => {
    await archiveNote(id)
    const result = await getActiveNotes()
    setNotes(result)
  }

  const changeSearchParams = (key) => {
    setSearchParams(key)
  }

  const onKeywordChangeHandler = (key) => {
    setKeyword(key)
    changeSearchParams(key)
  }

  const notesFilter = data.filter((note) => {
    return note.title.toLowerCase().includes(
      keyword.toLowerCase()
    )
  })

  let main 
  if (notesFilter.length === 0) {
    main = <NotFoundNote />
  } else {
    main = <NoteList notes={notesFilter} onDelete={onDeleteHandler} onArchieve={onArchieveHandler} />
  }

  return (
    <div className='main-homePage'>
      <div className='head-homePage'>
        <h2>Daftar Catatan</h2>
        <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      </div>
      {main}
    </div>
  )
}

export default HomePage

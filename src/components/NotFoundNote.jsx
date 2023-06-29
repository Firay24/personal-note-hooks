import React from 'react'
import { BsFillExclamationCircleFill } from "react-icons/bs";

export default function NotFoundNote() {
  return (
    <div className='not-found__note'>
        <BsFillExclamationCircleFill className='not-found__noteIcon' />
        <p>Catatan tidak ditemukan</p>
    </div>
  )
}

import React from 'react'
import { useNavigate } from 'react-router-dom';
import CreateNote from '../components/CreateNote'
import { addNote } from '../utils/api';

function CreatePage() {
    const navigate = useNavigate()

    const onAddNoteHandler = async (title, body) => {
        const { error } = await addNote(title, body)

        if (!error) {
            alert('Selamat catatan berhasil ditambahkan. Silahkan ke Home untuk melihat catatan baru anda!!')
            navigate('/')
        }
        
    }

    return (
        <div className='main-createPage'>
            <h2>Tambahkan Catatan</h2>
            <CreateNote addNote={onAddNoteHandler} />
        </div>
    )
}

export default CreatePage


// export class CreatePage extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             notes: getActiveNotes()
//         }

//         this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
//     }

//     onAddNoteHandler(title, body) {
//         addNote(title, body)
//         this.setState(() => {
//             return {
//                 notes: getActiveNotes(),
//             }
//         })
//         alert('Selamat catatan berhasil ditambahkan. Silahkan ke Home untuk melihat catatan baru anda!!')
//     }

//     render() {
//         return (
//         <div className='main-createPage'>
//             <h2>Tambahkan Catatan</h2>
//             <CreateNote addNote={this.onAddNoteHandler} />
//         </div>
//         )
//     }
// }

// export default CreatePage;

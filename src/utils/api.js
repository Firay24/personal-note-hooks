import { func } from "prop-types"

const BASE_URL = 'https://notes-api.dicoding.dev/v1'

// memperoleh nilai access token yang disimpan di local storrage
function getAccessToken() {
    return localStorage.getItem('accessToken')
}

// menyimpan access token ke local storage
function putAccessToken(accessToken) {
    return localStorage.setItem('accessToken', accessToken)
}

// melakukan fungsi untuk melakukan akses data menggunakan token
async function fetchWithToken(url, options = {}) {
    return fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${getAccessToken()}`
        }
    })
}

// proses login, jika berhasil akan mengembalikan access token
async function login({ email, password }) {
    const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })

    const responseJson = await response.json()
    if(responseJson.status !== 'success') {
        alert(responseJson.message)
        return {error: true, data: null}
    }

    return {error: false, data: responseJson.data}

}

// mendaftar akun
async function register({ name, email, password }) {
    const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    })

    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
        alert(responseJson.message)
        return {error: true}
    }

    return {error: false}

}

// memperoleh pengguna setelah login 
async function getUserLogged() {
    const response = await fetchWithToken(`${BASE_URL}/users/me`)
    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
        return {error: true, data: null}
    }

    return {error: false, data: responseJson.data}

}

// menambahkan catatan baru
async function addNote({ title, body }) {
    const response = await fetchWithToken(`${BASE_URL}/notes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, body })
    })

    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
        alert(responseJson.message)
        return {error: true, data: null}
    }

    return {error: false, data: responseJson.data}

}

// memperoleh catatan non archived
async function getActiveNotes() {
    const response = await fetchWithToken(`${BASE_URL}/notes`)
    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
        alert(responseJson.message)
        return {error: true, data: []}
    }

    return {error: false, data: responseJson.data}

}

// memperoleh catatan archived
async function getArchivedNotes() {
    const response = await fetchWithToken(`${BASE_URL}/notes/archived`)
    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
        alert(responseJson.message)
        return {error: true, data: []}
    }

    return {error: false, data: responseJson.data}

}

// memperoleh detail catatan
async function getNote(id) {
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}`)
    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
        alert(responseJson.message)
        return {error: true, data: null}
    }

    return {error: true, data: responseJson.data}
}

// menambahkan archieve note
async function archiveNote(id) {
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}/archive`, {
        method: 'POST'
    })

    const responseJson = await response.json()

    if (responseJson.statue !== 'success') {
        alert(responseJson.message)
        return {error: true}
    }

    return {error:false}

}

// membatalkan archieve note
async function unarchiveNote(id) {
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}/unarchive`, {
        method: 'POST'
    })

    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
        alert(responseJson.message)
        return {error:true}
    }

    return {error:false}

}

// menghapus catatan
async function deleteNote(id) {
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}`, {
        method: 'DELETE'
    })
    
    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
        alert(responseJson.message)
        return {error:true}
    }

    return {error:false}

}

// function editNote({ id, title, body }) {
//     const notes = 
//     const noteToEdit = notes.find((note) => note.id === id);
//     noteToEdit.title = title;
//     noteToEdit.body = body;
  
//     notes = notes.map((note) => {
//       if (note.id === id) {
//         return note;
//       }
//       return note;
//     });
//   }

export {
    getAccessToken,
    putAccessToken,
    login,
    register,
    getUserLogged,
    addNote,
    getNote,
    getActiveNotes,
    getArchivedNotes,
    archiveNote,
    unarchiveNote,
    deleteNote
}
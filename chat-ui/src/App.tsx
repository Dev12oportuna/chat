import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPage from './pages/UserPage'
import AdminPage from './pages/AdminPage';

function App() {
  
  

  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/user' element={<UserPage/>} />
        <Route path="/admin" element={<AdminPage/>}/>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App


    //socket.emit('message', message)
  //console.log(socket)
    //console.log(message)
    /* const data = {
      message: message,
      tipomsg: "operario-soporte",
      id_destino:102, 
      id_origen:14, 
      idgrupo:89 
    } */

    //socket.emit('join', {"id_user_monitoreo": 14, "id_destino":102 })
    //socket.emit('join', {"id_user_monitoreo": 14})
    //axios.post("https://oportuna.red/Wms_Oportuna/funciones/update_chat", data )
    //socket.emit('join', {"id_user_monitoreo": 14, "id_destino":102 })
    //socket.emit("nuevo_mensaje", {"para":14, "msg":message})
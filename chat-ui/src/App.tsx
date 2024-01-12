import { useEffect, useState } from "react"
import io from "socket.io-client"
import axios from "axios"

const socket = io("https://chat.oportuna.red/")
//const socket = io("http://localhost:1882")
//const socket = io("http://localhost:3000")



function App() {
  
  const [message, setMessage] = useState("")
  
  
/*   useEffect(()=>{
  
    socket.on("connect", () => {
      console.log("Conectado al servidor de chat.");
    });

    socket.on('message_back', message_back => {
      console.log(message_back)
    })

  },[])  */


  const handleSubmit = (e: any) => {
    e.preventDefault();
    //socket.emit('message', message)
    socket.emit('join', {id_user_monitoreo: 14, id_sede_monitoreo:102, id_aliado_monitoreo: 89 })
    console.log(socket)
    console.log(message)
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
  
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="write message" onChange={(e)=> setMessage(e.target.value) }/>
        <button>send</button>

      </form>
    </div>
  )
}

export default App


///////////////////////////////////////////////// USANDO COMPONENTEDIDMOUNT//////////////////////////////////////////////////////////////////
/* import React, { Component } from "react";
import io from "socket.io-client";

class App extends Component {
  componentDidMount() {
    const socket = io("https://chat.oportuna.red/");

    socket.on("connect", () => {
      console.log("Conectado al servidor de chat.");
    });

    

    socket.emit("join", {
      id_user_monitoreo: 14,
      id_sede_monitoreo: 102,
      id_aliado_monitoreo: 89,
    });

    console.log(socket)
  
  }



  handleSubmit = (e: any) => {
    e.preventDefault();
    
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Escribe tu mensaje"
            onChange={(e) => this.setState({ message: e.target.value })}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default App; */
import { useEffect, useState } from "react"
import io from "socket.io-client"
import axios from "axios"

//const socket = io("https://chat.oportuna.red/")
const socket = io("http://localhost:1882")
//const socket = io("http://localhost:3000")
interface Message {
destino: string,
estado: string,
id: number,
msg: string,
nombresede: string,
nomdestino: string,
nomorigen: string,
origen: string,
time: number,
tipo: string,
user: string
}


const UserPage = () => {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  
  
  useEffect(()=>{
    
    
    socket.on("connect", () => {
      console.log(socket.id)
      console.log("Conectado al servidor de chat.");
      socket.emit('join', {id_user_monitoreo: 60, id_sede_monitoreo:117, id_aliado_monitoreo: 121 })

    });

    socket.on('chat', message_back => {
      console.log("Recibe chat***");
      console.log(message_back)
      setMessages(message_back)
      
     /*  socket.on('thread', message => {
        console.log(message)
        
      }) */
      
    })

    
    return () => {
      socket.off('connect'),
      socket.off('chat')
    }
    
  },[]) 
  
  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    socket.emit('nuevo_mensaje',{para:'117',msg:message})
    //socket.emit('messages', message)
    
  }

  return (
    
    <div>
      <div>
        <h1>User</h1>
      </div>
      
      <ul style={{listStyle:'none', padding: 0}}>
        {
          messages.map((message, i) => {
            const msgClass = message.tipo === 'soporte-operario' ? 'admin-msg': 'user-msg';

            return (
  
            <li key={i} style={{textAlign: message.tipo === 'soporte-operario' ? 'right' : 'left'}}>
              <div className={msgClass}>

              {message.msg +" - "+message.nomorigen}
              </div>
            </li>
            )
            } 
          )
            
        }
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="write message" onChange={(e)=> setMessage(e.target.value) }/>
        <button>send</button>

      </form>
    </div>
  )
}

export default UserPage
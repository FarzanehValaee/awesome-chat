import React,{useContext,useState} from 'react';
import add from '../assets/img/add.png';
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from "../contex/ChatContext";
import ProfileModal from '../components/ProfileModal';
import SidebarModal from './SidebarModal';

export default function Chat() {
  const { data } = useContext(ChatContext);
  const [show,setShow] = useState(true);
  const handleOpen=()=>{
    console.log(show);
    setShow(!show);
    console.log(show);
  }
  return (
    <div className="chat">
      <div className="chatInfo">
        
        <span>
         <ProfileModal 
            displayName={data.user?.displayName} 
            data={data.user}
            />
        </span>
      <div className="chatIcons">
              <SidebarModal />
      </div>
      </div>
      <Messages />
      <Input/>
    </div>
  )
}

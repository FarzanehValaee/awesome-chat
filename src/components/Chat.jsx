import React,{useContext} from 'react';
import cam from '../assets/img/cam.png';
import add from '../assets/img/add.png';
import more from '../assets/img/more.png';
import Messages from './Messages';
import Input from './Input';
import { auth } from '../firebase';
import { ChatContext } from "../contex/ChatContext";
import ProfileModal from '../components/ProfileModal';


export default function Chat() {
  const { data } = useContext(ChatContext);
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
            <img src={cam} alt="" />
            <img src={add} alt="" />
            <img src={more} alt="" />
          </div>
      </div>
      <Messages />
      <Input/>
    </div>
  )
}

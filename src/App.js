import { useState} from 'react';
import Modal from './components/Modal/Modal';
import { Neon, Neonmd, Neonsm } from './styles';
import { socket } from "./socket";

function App() {
  const [open, setOpen] = useState(false);
  const [connect, setConnect] = useState(false);
  const toggle = () => setOpen(!open);
  const pull = () => setConnect(true);
  const runSocket = () => socket.connect();

  return (
    <div className="App">
      <Neon onClick={toggle} >Show chat</Neon>
      <Neonmd onClick={pull} >Сonnect</Neonmd>
      <Neonsm onClick={runSocket} >Socket</Neonsm>
      <Modal open={open} toggle={toggle} connect={connect}/>
    </div>
  );
}

export default App;

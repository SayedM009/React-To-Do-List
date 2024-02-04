import Container from "./Container"
import FormCm from "./FormCm"
import ButtonsCn from "./BttonsCn"
import ListingCm from "./ListingCm"
import {useState} from "react"


export default function App() {

  // Contorl of To Do Tasks
  const [toDoTasks, setToDoTasks] = useState([])

  // Contorl of Complated Tasks
  const [complatedTasks, setComplatedTasks] = useState([])

  // Toggle Green Color Between To Do Button & Complated Button if Anyone of Them Clicked
  const [isGreen, setIsGreen] = useState(false);

  return <>
    <h1 className="header">My To-Do-List</h1>
    {/* Main Container */}
    <Container>
      <div className="main-container">
        {/* Form Container */}
        <FormCm tasks={toDoTasks} onSetTasks={setToDoTasks}/>
        {/* Buttons Container */}
        <ButtonsCn green={isGreen} onSetGreen={setIsGreen} />
        {/* Pending Container */}
        <ListingCm tDTasks={toDoTasks} onSetTDTasks={setToDoTasks} green={isGreen} cMTasks={complatedTasks} onSetCMTasks={setComplatedTasks}/>
      </div>
    </Container>
  </>
}


import Container from "./Container"
import Button from "./Button"
import { useState } from "react"

export default function FormCm({tasks, onSetTasks}) {

    // Title Input Controlled
    const [title, setTtile] = useState("")

    // Description Input Controlled
    const [des, setDes] = useState("")

    // Handle Adding Tasks
    function handleAddingTasks() {
        if (!title) return
        if (!des) return
        const newTask = {
            title: title,
            description: des,
            complated: false,
            complatedTime:0
        }

        // Add New Task To Tasks
        onSetTasks([...tasks, newTask])

        // Set Title Input
        setTtile("")

        // Set Description Input
        setDes("")
    }

    return <Container>
        <div className="form-container">
            {/* Title Container */}
            <Container>
                <div>
                    <label className="label">Title : </label>
                    <input className="input" type="text" placeholder="What's the title of to do?" value={title} onChange={(e)=> setTtile(e.target.value)}></input>
                </div>
            </Container>

            {/* Description Container */}
            <Container>
                <div>
                    <label className="label">Description : </label>
                    <input className="input" type="text" placeholder="What's the description of to do?" value={des} onChange={(e)=> setDes(e.target.value)}></input>
                </div>
            </Container>
            <Button>
                <button className="btn form-btn" onClick={handleAddingTasks}>Add</button>
            </Button>
        </div>
    </Container>
}
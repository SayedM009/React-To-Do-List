import Container from "./Container";

export default function ListingCm({tDTasks, onSetTDTasks, green,cMTasks, onSetCMTasks}) {
    return <Container>
        <div>
            {!green ?  tDTasks.map((task,i) => <ToDo showTs={tDTasks} onSetShowingTasks={onSetTDTasks} onSetCMTasks={onSetCMTasks} taskInfo={task} cMTasks={cMTasks} key={i}/>) 
            : 
            cMTasks.map((task,i) => <ToDo showTs={tDTasks}  onSetCMTasks={onSetCMTasks} taskInfo={task} cMTasks={cMTasks} key={i}/>)}
            
        </div>
    </Container>
}

function ToDo({showTs ,onSetShowingTasks, taskInfo,  onSetCMTasks, cMTasks}) {

    const date = new Date()


    // Handle Complated Task
    function handleComplatedTask(e) {
        // Updating Selected Task
        const updatingTask = showTs.map(task => task.title === e ? {...task, complated: true} : task)
        
        // Adding Complated Task To Complate Section
        onSetCMTasks([...cMTasks, ...updatingTask.filter(task => task.complated === true)])

        // Removing From Showing Tasks & Updating
        onSetShowingTasks(updatingTask.filter(task => task.complated === false))
    }

    // Handle Remove Task
    function handleRemoveTask(e) {

        if (taskInfo.complated) {
            onSetCMTasks(cMTasks.filter(task => task.title !== e))
        } else {
            onSetShowingTasks(showTs.filter(task => task.title !== e))
        }
    }

    return <Container>
        
        <div className="to-do-thing"> 
            <div>
                <h3 style={{margin:"0"}} className="title-clr">{taskInfo.title}</h3>
                <p style={{color:"#BBB"}}>{taskInfo.description}</p>
                {/* Displaying Time & Date Of Complated Task */}
                {taskInfo.complated ? <p>{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</p> : ""}
            </div>
            <div>
                <button className="icon" value={taskInfo.title} onClick={(e) => handleRemoveTask(e.target.value)}>🗑️</button>
                { taskInfo.complated ?  "": <button className="icon" onClick={(e) => handleComplatedTask(e.target.value)} value={taskInfo.title} >✔️</button>}
            </div>
        </div>
    </Container>
}
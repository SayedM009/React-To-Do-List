import Button from "./Button";
import Container from "./Container";

export default function ButtonsCn({green, onSetGreen}) {
    

    // Handle To Do Button 
    function handleToDoBtn() {
        onSetGreen(false)
    }
    
    // Handle complated Button 
    function handleComplatedoBtn() {
        onSetGreen(true)
    }
    return <Container>
        <div className="btns-container">
            {/* To Do Button */}
            <Button>
                <button className={!green? "btn to-do-btn" : "btn complated-btn"} onClick={handleToDoBtn}>To Do</button>
            </Button>

            {/* Complated Button */}
            <Button>
                <button className={green? "btn to-do-btn" : "btn complated-btn"} onClick={handleComplatedoBtn} >Complated</button>
            </Button>
        </div>
    </Container>
}
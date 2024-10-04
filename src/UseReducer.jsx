
import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react";
import { Container,Row,Col } from "react-bootstrap";


function usereducerfunc(state,action)
{
    switch (action.type) {
        case "Increment":
            return {count : state.count+1 , color : "Blue" , backgroundColor : "Black"};
        
        case "Decrement":
            return {count : state.count-1 , color : "White" , backgroundColor : "Blue"};

        case "Reset":
            return {count : 0, color : "Blue" , backgroundColor : "red"};

        default:
            throw Error("Error");
    }
}

const initialize = {count:0,color:"",backgroundColor:"Gray"};

function Sampleprgm()
{
    const [state,dispatch] = useReducer(usereducerfunc,initialize);

    return(
        <>
            <Container className="border mt-5">
                <Row>
                    <Col className="p-5" style={{backgroundColor : state.backgroundColor}}>
                    <h3 style={{color : state.color}}>{state.count}</h3>
                    <button onClick={()=>dispatch({type : "Increment"})}>Increment</button>
                    <button onClick={()=>dispatch({type : "Decrement"})}>Decrement</button>
                    <button onClick={()=>dispatch({type : "Reset"})}>Reset</button>  
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Sampleprgm;


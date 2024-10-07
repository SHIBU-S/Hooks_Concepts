
import { useReducer, useState } from "react";
import { Container,Row,Col } from "react-bootstrap";


function usereducerfunc(state,action)
{
    switch (action.type) {
        case "Increment":
            return {count : state.count+1 , color : "Blue" , backgroundColor : "Black"};
        
        case "Decrement":
            return {count : state.count-1 , color : "White" , backgroundColor : "brown"};

        case "Reset":
            return {count : 0 , color : "yellow" , backgroundColor : "red"};

        default:
            throw Error("Error");
    }
}


const initialize = {count:0,color:"",backgroundColor:"Gray"};


function Sampleprgm()
{
    const [state,dispatch] = useReducer(usereducerfunc,initialize);
    const [result,setresult] = useState("");

    function incremented(){
        dispatch({type : "Increment"});
        setresult(`Incremented : ${state.count+1}`);
    }
    function decremented(){
        dispatch({type : "Decrement"});
        setresult(`Decremented : ${state.count-1}`);
    }
    function reset(){
        dispatch({type : "Reset"});
        setresult(`Reset : ${state.count = 0}`);
    }

    return(
        <>
            <Container className="mt-5">
                <Row>
                    <h2 style={{color : "green"}}>UseReducer Hooks Concept</h2>
                    <Col className="p-5" style={{backgroundColor : state.backgroundColor}}>
                        <h3 style={{color : state.color}}>{state.count}</h3>
                        <button onClick={incremented}>Increment</button>
                        <button onClick={decremented}>Decrement</button>
                        <button onClick={reset}>Reset</button>  
                    </Col>

                    <Col>
                        <p className="p-4 rounded-5" style={{backgroundColor : state.backgroundColor, color : state.color}}>{result}</p>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default Sampleprgm;


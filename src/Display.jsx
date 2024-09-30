import { Container,Row,Col } from "react-bootstrap";
import { useContext } from "react";
import { userContext } from "./Storage";


function Display()
{
    const {display,displaypwd,displayemail,displaygender,displayphno} = useContext(userContext);
    return(
        <>
           <Container className="mt-5 text-start">
                <Row className="p-3">
                    <Col className="bg-primary">
                        <div><h2 style={{color:"red"}}>Details!!</h2></div>
                        <div style={{color:"white"}}>
                            <h6>{display}</h6>
                            <h6>{displaypwd}</h6>
                            <h6>{displayemail}</h6>
                            <h6>{displayphno}</h6>
                            <h6>{displaygender}</h6>
                        </div>
                    </Col>

                    <Col></Col>
                </Row>
            </Container>
        </>
    )
    
}

export default Display;
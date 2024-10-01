import { Container,Row,Col } from "react-bootstrap";
import { useContext } from "react";
import { userContext } from "./Storage";
import Update from "./Update";


function Display()
{
    const {display,displaypwd,displayemail,displaygender,displayphno,updatenum} = useContext(userContext);
    return(
        <>
           <Container className="mt-5 text-start">
                <Row className="p-3 gap-4">
                    <Col className="bg-primary form">
                        <div><h3 style={{color:"yellow"}}>Submitted Details!!</h3></div>
                        <div style={{color:"white"}}>
                            <h6>{display}</h6>
                            <h6>{displaypwd}</h6>
                            <h6>{displayemail}</h6>
                            <h6>{displayphno}</h6>
                            <h6>{displaygender}</h6>
                        </div>
                    </Col>

                    <Col className="bg-primary form">
                        <div>
                            <Update/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
    
}

export default Display;
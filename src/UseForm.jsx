
import { useForm } from "react-hook-form";
import { Container, Row, Col, FormControl } from "react-bootstrap";

function UseForm() {
    const { register, handleSubmit, formState:{errors} } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    console.log(errors);

    const validatingtype = {
        firstName : {required : "FirstName is required"},
        LastName : {required : "Lastname is required",
                    minLength : {value : 1 , message : "Lastname must be in single letter"}
        },
        Password : {required : "Password is required",
                    minLength : {value : 8 , message : "Password must be atleast 8 characters"}
                    },
        Email : {required : "Email is required"}
    }

    return (
        <Container className="p-3" style={{backgroundColor:"skyblue"}}>
            <h2 style={{color:"green"}}>Form Validation(UseForm)</h2>
            
            <form onSubmit={handleSubmit(onSubmit)}>
            <Row className="d-flex">
                <Col>
                    First Name: <input type="text" {...register('firstName', validatingtype.firstName )} /> <br />
                       <p style={{color:"red"}}>{errors?.firstName && errors.firstName.message}</p>
                </Col>
                <Col>    
                    Last Name : <input type="text" {...register('LastName', validatingtype.LastName )} /> <br />
                        <p style={{color:"red"}}>{errors?.LastName && errors.LastName.message}</p>
                </Col>
            </Row>

            <Row className="d-flex">
                <Col>
                    Enter Password : <input type="password" {...register("Password", validatingtype.Password )} /> <br />
                    <p style={{color:"red"}}>{errors?.Password && errors.Password.message}</p>
                </Col>
                <Col>    
                    Enter Email : <input type="email" {...register('Email', validatingtype.Email )} /> <br />
                    <p style={{color:"red"}}>{errors?.Email && errors.Email.message}</p>
                </Col>
            </Row>

            <Row>
                <Col>
                    <button type="submit">Submit</button>
                </Col>
            </Row>
            </form>
        </Container>
    );
}

export default UseForm;

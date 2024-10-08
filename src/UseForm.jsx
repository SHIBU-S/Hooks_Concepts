
import { useForm } from "react-hook-form";
import { Container, Row, Col } from "react-bootstrap";

function UseForm() {
    const { register, handleSubmit, formState:{errors} } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    console.log(errors);

    const validatingtype = {
        firstName : {required : "FirstName is required",
                     pattern : {value : /^([a-zA-Z]{2,30})$/ , message : "Firtname must be in alphabetic & (2-30 length)"}
                    },
        LastName : {required : "Lastname is required",
                    maxLength : {value : 1 , message : "Lastname must be in single letter"},
                    },
        Password : {required : "Password is required",
                    maxLength : {value : 8 , message : "Password must be in exact 8 characters"},
                    pattern : {value : /^[A-Za-z]\w{7,14}$/ , message : "Password is Invalid"}
                    },
        Email :  {required : "Email is required",
                  pattern : {value : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ , message : "Email is Invalid"}
                 },
        Phoneno :  {required : "Phone is required",
                  pattern : {value : /^\d{10}$/ , message : "Phone number is invalid"}      
                 },
        SelectOptions : {required : "State is required",
                },
        gender : {required : "Gender is required"},
        address : {required : "Address is required",
                  minLength : {value : 10, message : "Address must be longer than 10 characters"},
                  maxLength : {value : 100, message : "Address must be exact 100 characters"}
                },
        termscheck : {required : "Please agree before submitting"}
    }

    return (
        <Container className="p-3 mb-5 rounded-4 form" style={{backgroundColor:"skyblue"}}>
            <h2 style={{color:"green"}}>Form Validation(UseForm)</h2>
            
            <form onSubmit={handleSubmit(onSubmit)}>
            <Row className="mt-3">
                <Col>
                    First Name: <input type="text" placeholder="firstname.." {...register('firstName', validatingtype.firstName )} /> <br />
                       <p style={{color:"red"}}>{errors?.firstName && errors.firstName.message}</p>
                </Col>
                <Col>    
                    Last Name : <input type="text" placeholder="lastname.." {...register('LastName', validatingtype.LastName )} /> <br />
                        <p style={{color:"red"}}>{errors?.LastName && errors.LastName.message}</p>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col>
                    Choose Gender : <input type="radio" {...register("Gender", validatingtype.gender)}/> Male
                             <input type="radio" {...register("Gender", validatingtype.gender)}/> Female
                        <p style={{color:"red"}}>{errors?.Gender && errors.Gender.message}</p>
                </Col>
                <Col>
                    Enter Address : <input type="text" placeholder="address.." {...register("Address", validatingtype.address)} />
                    <p style={{color:"red"}}>{errors?.Address && errors.Address.message}</p>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col>
                    Enter Password : <input type="password" placeholder="password.." {...register("Password", validatingtype.Password )} /> <br />
                    <p style={{color:"red"}}>{errors?.Password && errors.Password.message}</p>
                </Col>
                <Col>    
                    Enter Email : <input type="email" placeholder="email.." {...register('Email', validatingtype.Email )} /> <br />
                    <p style={{color:"red"}}>{errors?.Email && errors.Email.message}</p>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col>
                    Enter Phone Number : <input type="number" placeholder="phone.." {...register("Phone", validatingtype.Phoneno )} /> <br />
                    <p style={{color:"red"}}>{errors?.Phone && errors.Phone.message}</p>
                </Col>
                <Col>
                    Select your State : <select {...register("Selectoptions", validatingtype.SelectOptions)}>
                                            <option value="">---Select your State---</option>
                                            <option value="Kerala">Kerala</option>
                                            <option value="Tamilnadu">Tamilnadu</option>
                                            <option value="Karnataka">Karnataka</option>
                                        </select>
                    <p style={{color:"red"}}>{errors?.Selectoptions && errors.Selectoptions.message}</p>
                </Col>
            </Row>

            <Row>
                <Col lg={5}>
                    <input type="checkbox" {...register("Termscheck", validatingtype.termscheck)} />
                    Agree to terms and conditions
                    <p style={{color:"red"}}>{errors?.Termscheck && errors.Termscheck.message}</p>
                </Col>
            </Row>

            <Row>
                <Col>
                    <button type="submit" className="btn btn-primary p-2 rounded-5" style={{width : "30%"}}>Submit</button>
                </Col>
            </Row>
            <div class="row mt-1 ">
                    <div class="col">
                        <p class="">Already have an account <a href="#" class="text-decoration-none">Sign In</a></p>
                    </div>
                </div>
            </form>
        </Container>
    );
}

export default UseForm;

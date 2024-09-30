import { useState } from "react";
import { useContext } from "react";
import {userContext} from './Storage';
import Display from './Display';
import { Container,Row,Col } from "react-bootstrap";


function Form(){
    const [name,setname] = useState("");
    const [password,setpassword] = useState("");
    const [email,setemail] = useState("");
    const [phno,setphno] = useState("");
    const [gender,setgender] = useState("");


    const [namecolor,setnamecolor] = useState({color:""});
    const [passwordcolor,setpasswordcolor] = useState({color:""});
    const [emailcolor,setemailcolor] = useState({color:""});
    const [phnocolor,setphnocolor] = useState({color:""});

    const {nameresult,setnameresult,passwordresult,setpasswordresult,emailresult,setemailresult,phnoresult,setphnoresult,genderresult,setgenderresult,  
        display,setdisplay,setdisplaypwd,setdisplayemail,setdisplaygender,setdisplayphno} = useContext(userContext);

    return(
        <>
           <Container className="border form">
                <Row className=" p-3 bg-primary text-white ">
                    <Col><h1>Login</h1></Col>
                </Row>

                <Row className="bg-info-subtle pt-4">
                    <Col>
                        Enter Name : <input type="text" placeholder="enter your name.." onChange={(name)=>setname(name.target.value)}></input>  
                        <p style={namecolor}>{nameresult}</p>
                    </Col>

                    <Col>
                        Enter Password : <input type="password" placeholder="enter your password.." onChange={(password)=>setpassword(password.target.value)}></input> 
                        <p style={passwordcolor}>{passwordresult}</p>
                    </Col>
                </Row>

                <Row className="bg-info-subtle pt-4">
                    <Col>
                        Enter Email : <input type="email" placeholder="enter your email.." onChange={(email)=>setemail(email.target.value)}></input>  
                        <p style={emailcolor}>{emailresult}</p>
                    </Col>

                    <Col>
                        Enter Phone number : <input type="number" placeholder="phone number" onChange={(phno)=>setphno(phno.target.value)} />
                        <p style={phnocolor}>{phnoresult}</p>
                    </Col>
                </Row>

                <Row className="bg-info-subtle pt-4">
                    <Col>
                        Gender : <input type="radio" /> Male
                        <input type="radio" /> Female
                    </Col>
                </Row>

                <Row className="bg-info-subtle pt-4 pb-4">
                    <Col>
                        <button class="btn btn-primary" style={{width:"30%"}} onClick={submit} type="button">Button</button>
                    </Col>
                </Row>
            </Container>
            
            <Display/>
            
        </>
    )

    function submit()
    {
        let pattern1=/^([a-zA-Z]{2,30})$/;
        if(name==="")
        {
            setnameresult("Please Enter your name");
            setnamecolor({color:"Red"});
        }
        else if(!pattern1.test(name))
        {
            setnameresult("Invalid name");
            setnamecolor({color:"Red"});
        }
        else
        {
            setnameresult(`Your Name is : ${name}`);
            setnamecolor({color:"Green"});
            setdisplay(`Name : ${name}`);
        }


        let pattern2=/^[A-Za-z]\w{7,14}$/;
        if(password==="")
        {
            setpasswordresult("Please Enter your password");
            setpasswordcolor({color:"Red"});
        }
        else if(!pattern2.test(password))
        {
            setpasswordresult("Invalid password");
            setpasswordcolor({color:"Red"}); 
        }
        else
        {
            setpasswordresult(`Your Password is : ${password}`);
            setpasswordcolor({color:"Green"});
            setdisplaypwd(`Password : ${password}`);
        }


        let pattern3=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;;
        if(email==="")
        {
            setemailresult("Please Enter your email");
            setemailcolor({color:"Red"});
        }
        else if(!pattern3.test(email))
        {
            setemailresult("Invalid email");
            setemailcolor({color:"Red"});
        }
        else
        {
            setemailresult(`Your Email is : ${email}`);
            setemailcolor({color:"Green"});
            setdisplayemail(`Email : ${email}`);
        }


        let pattern4 = /^\d{10}$/;
        if(phno==="")
        {
            setphnoresult("Please enter your phone number");
            setphnocolor({color:"red"});
        }
        else if(!pattern4.test(phno))
        {
            setphnoresult("Invalid number");
            setphnocolor({color:"red"});
        }
        else
        {
            setphnoresult(`Your Phone Number is : ${phno}`);
            setphnocolor({color:"Green"});
            setdisplayphno(`Phone Number : ${phno}`);
        }
    }
}






// function Form(){

//     const [inputvalue,setinputvalue] = useState({name:"",password:"",email:""});

//     const [color,setcolor] = useState("");

//     const {nameresult,setnameresult,passwordresult,setpasswordresult,emailresult,setemailresult,genderresult,setgenderresult} = useContext(userContext);

//     return(
//         <>
//             Enter Name : <input type="text" placeholder="enter your name.." value={inputvalue.name} onChange={(name)=>setinputvalue(name.target.value)}></input>  
//                 <p style={{color}}>{nameresult}</p>
//                 <button onClick={submit}>Submit</button>
//         </>
//     )

//     function submit()
//     {
//         let pattern1=/^([a-zA-Z]{2,30})$/;
//         if(inputvalue.name==="")
//         {
//             setnameresult("Please Enter your name");
//             setcolor("Red");
//         }
//         else if(!pattern1.test(inputvalue.name))
//         {
//             setnameresult("Invalid name");
//             setcolor("Red");
//         }
//         else
//         {
//             setnameresult(`Your Name is : ${inputvalue.name}`);
//         }


//     }
// }


    
    export default Form;



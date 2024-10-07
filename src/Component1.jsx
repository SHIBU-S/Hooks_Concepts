import { useState } from "react";
import { userContext } from "./Storage";
import Form from "./Form";


function Component1(){

    const [nameresult,setnameresult] = useState("");
    const [passwordresult,setpasswordresult] = useState("");
    const [emailresult,setemailresult] = useState("");
    const [genderresult,setgenderresult] = useState("");
    const [phnoresult,setphnoresult] = useState("");

    const [phno,setphno] = useState("");

    const [display,setdisplay] = useState("");
    const [displaypwd,setdisplaypwd] = useState("");
    const [displayemail,setdisplayemail] = useState("");
    const [displaygender,setdisplaygender] = useState("");
    const [displayphno,setdisplayphno] = useState("");

    return(
        <>
            <h2 style={{color : "green"}}>UseContext Hooks Concept</h2>
            <userContext.Provider value={{nameresult,setnameresult,passwordresult,setpasswordresult,emailresult,setemailresult,genderresult,setgenderresult,phnoresult,setphnoresult, display,setdisplay,displaypwd,setdisplaypwd,displayemail,setdisplayemail,displaygender,setdisplaygender,displayphno,setdisplayphno, phno,setphno}}>
            <h3>Hello {display} {phno} ... Welcoming You</h3>
                <Form/>
            </userContext.Provider>
           
        </>
    )
}

export default Component1;

import { useState } from "react";
import { userContext } from "./Storage";
import Form from "./Form";


function Component1(){

    const [nameresult,setnameresult] = useState("");
    const [passwordresult,setpasswordresult] = useState("");
    const [emailresult,setemailresult] = useState("");
    const [genderresult,setgenderresult] = useState("");
    const [phnoresult,setphnoresult] = useState("");

    const [display,setdisplay] = useState("");
    const [displaypwd,setdisplaypwd] = useState("");
    const [displayemail,setdisplayemail] = useState("");
    const [displaygender,setdisplaygender] = useState("");
    const [displayphno,setdisplayphno] = useState("");

    return(
        <>
            <h3>Hello ... Welcome You All</h3>
            <userContext.Provider value={{nameresult,setnameresult,passwordresult,setpasswordresult,emailresult,setemailresult,genderresult,setgenderresult,phnoresult,setphnoresult, display,setdisplay,displaypwd,setdisplaypwd,displayemail,setdisplayemail,displaygender,setdisplaygender,displayphno,setdisplayphno}}>
                <Form/>
            </userContext.Provider>
           
        </>
    )
}

export default Component1;

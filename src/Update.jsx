
// import { useState, useContext } from "react";
// import { userContext } from "./Storage";

// function Update() {
//     const [updatenum, setupdatenum] = useState("");
//     const { setphno } = useContext(userContext);

//     return (
//         <>
//             <h4 className="text-danger">Update Phone number</h4>
//             <h6 className="text-light">Enter Phone Number :</h6>
//             <input 
//                 type="number" 
//                 placeholder="phone number" 
//                 onChange={(update) => setupdatenum(update.target.value)} 
//                 value={updatenum} 
//             />
//             <p className="text-light">{updatenum}</p>
//             <button onClick={updatephno}>Update</button>
//         </>
//     );

//     function updatephno() {
//         setphno(updatenum);
//     }
// }

// export default Update;


import { useState, useContext } from "react";
import { userContext } from "./Storage";

function Update() 
{
    const [updatenum, setupdatenum] = useState("");
    const { phno, setphno, setdisplayphno } = useContext(userContext);

    return (
        <>
            <h4 className="text-danger">Update Phone number</h4>
            <h6 className="text-light">Enter Phone Number :</h6>
            <input
                type="number"
                placeholder="phone number"
                onChange={(update) => setupdatenum(update.target.value)}
            />
            <p className="text-light">{updatenum}</p>
            <button onClick={updatephno}>Update</button>
        </>
    );

    function updatephno() 
    {
        setphno(updatenum);
        setdisplayphno(`Phone Number : ${updatenum}`);
    }
}

export default Update;
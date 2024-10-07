import { Container, Row, Col } from "react-bootstrap";
import jsonDatas from "./JSONdatas";
import { useReducer, useState } from "react";
import myFunction from "./UseReducerFunc";

const initialState = jsonDatas;

function UseReducerTask() {
    const [state, dispatch] = useReducer(myFunction, initialState);

    const [formData, setFormData] = useState({
        Id: '',
        Name: '',
        Age: '',
        State: ''
    });
    const [del,setdel] = useState("");
    const [searchedname,setsearchedname] = useState("");
    const [filteredname,setfilteredname] = useState("");


    // function handleChange(e)
    // {
    //     const NAME = e.target.name;
    //     const VALUE = e.target.value;
    //     setFormData((prevState) => {    return{ ...prevState, [NAME]: VALUE }   });
    // };


    function addDetails() 
    {
        if (formData.Id && formData.Name && formData.Age && formData.State) {
            dispatch({
                type : "AddDetails",
                newdetails : ({ ...formData })
            });
        }
        else{
            alert("Please enter your full details!!");
        }
    };

    function deleteDetails()
    {
        if(del)
        {
            dispatch({
                type : "DelDetails",
                delname : del
            });
        }
        else
        {
            alert("Please enter a name to delete!!");
        }
    }

    function searchname()
    {
        if(searchedname)
        {
            dispatch({
                type : "Searchname",
                search : searchedname
            });
        }
        else
        {
            alert("Please enter a name to search!!");
        }
    }

    function filtername()
    {
        if(filteredname)
        {
            dispatch({
                type : "Filtername",
                filter : filteredname
            });
        }
        else
        {
            alert("Please enter a name to filter!!");
        }
    }

    function sortAtoZ(){
        dispatch({
            type : "SortAtoZ"
        });
    }

    function sortZtoA(){
        dispatch({
            type : "sortZtoA"
        });
    }
 


    return (
        <>
            <Container fluid >
                <h2 style={{ color: "green" }}>UseReducer Hooks(Task)</h2>
                <Row>
                    <Col>
                        {/* ID: <input type="number" name="Id" value={formData.Id} onChange={handleChange} placeholder="id.." />
                        Name: <input type="text" name="Name" value={formData.Name} onChange={handleChange} placeholder="name.." />
                        Age: <input type="number" name="Age" value={formData.Age} onChange={handleChange} placeholder="age.." />
                        State: <input type="text" name="State" value={formData.State} onChange={handleChange} placeholder="state.." />
                            <button onClick={addDetails}>Add Details</button> */}

                        ID :    <input type="number" onChange={(e)=>setFormData((previousState)=>{return {...previousState,Id:e.target.value}})} placeholder="id.." />
                        Name :  <input type="text"   onChange={(e)=>setFormData((previousState)=>{return {...previousState,Name:e.target.value}})} placeholder="name.." />
                        Age :   <input type="number" onChange={(e)=>setFormData((previousState)=>{return {...previousState,Age:e.target.value}})} placeholder="age.." />
                        State : <input type="text"   onChange={(e)=>setFormData((previousState)=>{return {...previousState,State:e.target.value}})} placeholder="state.." />
                            <button onClick={addDetails}>Add Details</button>
                    </Col>
                </Row>
<br />
                <Row>
                    <Col>
                        Enter Name : <input type="text" onChange={(delsearchedname)=>setdel(delsearchedname.target.value)}/>
                            <button onClick={deleteDetails}>Delete Details</button>
                    </Col>

                    <Col>
                        Enter Name/State : <input type="text" onChange={(searchedname)=>setsearchedname(searchedname.target.value)} />
                            <button onClick={searchname}>Search Name</button>
                    </Col>

                    <Col>
                        Enter Name : <input type="text" onChange={(filteredname)=>setfilteredname(filteredname.target.value)} />
                            <button onClick={filtername}>Filter Name</button>
                    </Col>
                </Row>
<br />
                <Row>
                    <Col>
                            <button onClick={sortAtoZ}>Sort(AtoZ)</button>
                    </Col>
                    <Col>
                            <button onClick={sortZtoA}>Sort(ZtoA)</button>
                    </Col>
                </Row>
            </Container>

            <br />

            <table className="mb-5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>STATE</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((data) => (
                        <tr>
                            <td>{data.Id}</td>
                            <td>{data.Name}</td>
                            <td>{data.Age}</td>
                            <td>{data.State}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default UseReducerTask;




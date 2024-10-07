import UseReducerTask from "./UseReducerTask";

function myFunction(state, action) 
{
    switch (action.type) 
    {
        case "AddDetails":
            return [...state, action.newdetails];

        case "DelDetails":
            return state.filter((deleted)=> deleted.Name.toLowerCase() !== action.delname.toLowerCase());

        case "Searchname":
            return state.filter((searched)=>searched.Name.toLowerCase().includes(action.search.toLowerCase()));

        case "Filtername":
            return state.filter((filtered)=>filtered.Name.toLowerCase() === action.filter.toLowerCase());
        
        default:
            return state;
    }
}


export default myFunction;
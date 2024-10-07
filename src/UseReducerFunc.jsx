
function myFunction(state, action) 
{
    switch (action.type) 
    {
        case "AddDetails":
            return [...state, action.newdetails];

        case "DelDetails":
            return state.filter((deleted)=> deleted.Name.toLowerCase() !== action.delname.toLowerCase());

        case "Searchname":
            return state.filter((searched)=> searched.Name.toLowerCase().includes(action.search.toLowerCase()) || searched.State.toLowerCase().includes(action.search.toLowerCase()));

        case "Filtername":
            return state.filter((filtered)=> filtered.Name.toLowerCase() === action.filter.toLowerCase());

        case "SortAtoZ":
            return [...state].sort((a, b) => a.Name.localeCompare(b.Name));
            // return [...state].sort((a,b) => a.Name-b.Name);

        case "sortZtoA":
            return [...state].sort((a,b) => b.Name.localeCompare(a.Name));
            // return [...state].sort((a,b) => b.Name-a.Name);
        
        default:
            return state;
    }
}


export default myFunction;
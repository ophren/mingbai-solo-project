import './unique.css'
import List from '../list/list.js'

// pass all descriptions
function RenderUnique ({descriptions, queriedTerm}) {

    const query = {value: queriedTerm, type: "unique"}

    return ( 
        <div id="container">
            <List descriptions = {descriptions} keyword = {query}></List>
        </div>
    );
}

export default RenderUnique;
import './unique.css'
import List from '../list/list.js'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


// pass all descriptions
function RenderUnique ({descriptions, setDescriptions, queriedTerm, location}) {
    var query = {};

    if (location.search) {
        var searched = location.search;
        query= {value: searched.slice(2), type: "unique"}
    }

    else {
        query = {value: queriedTerm, type: "unique"}
    }

    return ( 
        <>
            <div id="top">
            <Link to = "/"><img src="mingbai.png" id="mingbai_logo"></img></Link>
            </div>
            <div id="container">
                <List descriptions = {descriptions} setDescriptions = {setDescriptions} keyword = {query}></List>
            </div>
        </>
    );
}

export default RenderUnique;
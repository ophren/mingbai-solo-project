import './Cs_event.css';
import List from '../list/list.js'

function Cs_event ({descriptions, cs}) {

    return (
        <div>
            <div id="welcome_phrase">Here is the list of CS descriptions, sorted by relevance!</div>
            <div id="welcome_phrase_2">Feel free to upvote them!</div>
            <List descriptions = {descriptions} keyword = {cs}></List>
        </div>
    );
}

export default Cs_event;
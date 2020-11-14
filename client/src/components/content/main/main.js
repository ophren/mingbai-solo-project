import './main.css';
// import { useState } from 'react';
// import RenderUnique from '../../render_unique/unique.js'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function Main ({setQueriedTerm}) {

    // const [query, setQuery] = useState('');

    //SEEMS TO WORK BUT NEEDS DOUBLE-CHECK
   function handleChange (e) {
        setQueriedTerm(e.target.value);
        // setQuery(e.target.value);
        // e.preventDefault();
    }

    // function handleSubmit (e) {
    //     console.log("query is " + query);
    //     e.preventDefault();
    // }


    return (
        
        <div>
                
            <form id="search-area">     
                <input id="searchbar" placeholder="" onChange={handleChange}></input>
                <Link to="/unique"><button type="submit" id="search-btn">Go</button></Link>
            </form>
                

            <div id="catchphrase-area">
                <div id="catchphrase">The first open-source database for <span id="simple"><span id="s">s</span><span id="i">i</span><span id="m">m</span><span id="p">p</span><span id="l">l</span><span id="e">e</span></span> definitions</div>
            </div>


            <div id="subcontent">            
            
                <div className="box">
                    <div id="box-title">One concept, many approaches</div>
                    <div id="box-content">Think of Mingbai as dictionary where every term is described in five different ways instead of one. The more definitions you read, the deeper your understanding of a concept becomes. </div>
                </div>

                <div className="box">
                    <div id="box-title">Concept definitions made simple</div>
                    <div id="box-content">Stop racking your brain on verbose explanations and technical literature! All our definitions are clear and easy-to-grasp, so that even complete beginners can understand them.</div>
                </div>

                <div className="box">
                    <div id="box-title">Quick access to the right information</div>
                    <div id="box-content">Because all the best definitions of a term are gathered on a same page, you will no longer waste hours browsing websites to find the explanation you are looking for. They are all in one place!</div>
                </div>
            
            </div> 

            <div id="screenshot-area">
                <div id="screenshot"></div>
            </div>
        </div>
    )
}

export default Main;
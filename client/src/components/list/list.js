// The list component is the central element for rendering elements from the database.
// It renders either a list of definitions based on the selected category (ex. chemistry) 
// or based on the selected term (ex. proton) from the searc bar. 

import './list.css'
import ApiService from '../../apiService/ApiService.js'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function List ({descriptions, setDescriptions, keyword}) {

    function updateDescriptions (id, dir) {

        ApiService.updateDescriptionVote(id, dir)
            .then (() => {
                setDescriptions(descriptions => {
                    const updatedDescriptions = descriptions.map(description => {
                        
                        if(description._id === id) {
                            const result = Object.assign({}, description)
                            if (dir === "up") {result.votes++;}
                            else {result.votes--;}
                                
                            return result;
                      
                        }
                        return description;
                    })
                 
                return updatedDescriptions; 
            })  
        });      
    }

    function isFoundTest (descriptions, keyword) {

        var isFound = false;

        descriptions.map (description => 
            description.conceptName === keyword.value? isFound = true : null,
            console.log(isFound)
            )

        return isFound;
    }
    
     
    // the list component can either render a list of definitions from the same subject (from sidebar, ex: chemistry)
    // or from a unique query search from the search bar (ex: neutron)

    var isUniqueTerm = true;
    if (keyword.type === "category") {
        isUniqueTerm = false;
    }

    // if the user clicked on a category (ex. biology), List.js will render all the biology definitions
    if (!isUniqueTerm) {
        var arr_concept_names = [];

        for (var i=0; i<descriptions.length; i++) {
            arr_concept_names.push(descriptions[i].conceptName);
        }

        const distinctConceptNames = [...new Set (arr_concept_names)].sort();

        return (
            <div id="all-boxes">
             {distinctConceptNames.map (conceptName =>
             
                    (
                        <Link to={`/unique?=${conceptName}`} style={{ textDecoration: 'none' }}>
                            <div id="concept-name-box">
                                <div id="concept-name-in-list">{conceptName}</div> 
                            </div>
                        </Link>
                    
                    ))}
            </div>
        );
    }


    
     // if unique term coming from search bar on main page
    if (isUniqueTerm) {

        descriptions.sort((a,b)=> (b.votes)- (a.votes));

        var found = isFoundTest (descriptions, keyword);
        
        return (
         
            <>
            {
            found === true ? 
                
                descriptions.map (description =>
                    description.conceptName === keyword.value ? 
                    
                    (
                    
                    
                    <div id="concept-box" key={description._id}>
                        
                        <div id="concept-name">{description.conceptName}</div> 
                        <div id="concept-description">{description.conceptDescription}</div> 
                        <div id="upvote-btn-zone">
                            <button id="upvote-btn" onClick={() => updateDescriptions(description._id, 'up')}>+</button>
                            <button id="downvote-btn" onClick={() => updateDescriptions(description._id, 'down')}>-</button>
                        </div>
                    <div id="votes">({description.votes})</div> 
                    </div>
                    )
                    : null
                    
                )
            
            : 
                <>   
                    <img src="notfound.svg" id="not-found-img"/>
                    <div id="term-not-found">Sorry, we could not find any definition for this term!</div>
                </>
            
            

    
        
            }
         
            </>
        );
    }
}

export default List;
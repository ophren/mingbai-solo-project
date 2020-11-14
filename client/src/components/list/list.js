// The list component is the central element for rendering elements from the database.
// It renders either a list of definitions based on the selected category (ex. chemistry) 
// or based on the selected term (ex. proton) from the searc bar. 

import './list.css'

function List ({descriptions, keyword}) {
    
    // the list component can either render a list of definitions from the same subject (from sidebar, ex: chemistry)
    // or from a unique query search from the search bar (ex: neutron)

    var isUniqueTerm = true;
    if (keyword.type === "category") {
        isUniqueTerm = false;
    }

    // if the user clicked on a category (ex. biology), List.js will render all the biology definitions
    if (!isUniqueTerm) {
        return (
            <>
             {descriptions.map (description =>
                    description.conceptCategory === keyword.value ? 
                
                    <div id="concept-box">
                        <div id="concept-name">{description.conceptName}</div> 
                        <div>{description.conceptDescription}</div> 
                        <br/><br/>
                    </div>
                    
              
                : null
             )}
            </>
        );
    }

     // if unique term coming from search bar on main page
    if (isUniqueTerm) {
        return (
            <>
             {descriptions.map (description =>
                    description.conceptName === keyword.value ? 
                
                    <div id="concept-box">
                        <div id="concept-name">{description.conceptName}</div> 
                        <div>{description.conceptDescription}</div> 
                    </div>
              
                : null
             )}
            </>
        );
    }
}

export default List;
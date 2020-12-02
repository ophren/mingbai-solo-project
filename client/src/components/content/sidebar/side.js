import './side.css'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function Side () {

    //CHECK SWITCH FOR ROUTES

    return (

    <>
        <div className="sidescroll">
        
            <div id="side">
                
                <div id="category-title">Browse a subject</div>

                <div className="side-category">
                    <img src="art.svg" className= "logo-img" alt="Art logo"></img>
                    <div id="art">Art</div>
                </div>

           
                <div className="side-category">
                    <img src="biology.svg" className= "logo-img" alt="Biology logo"></img>
                    <div id="biology">Biology</div>
                </div>


                <div className="side-category">
                    <img src="chemistry.svg" className= "logo-img" alt="Chemistry logo"></img>
                    <div id="chemistry">Chemistry</div>
                </div>

                <Link to="/cs" style={{ textDecoration: 'none' }}>
                <div className="side-category">
                    <img src="computer.svg" className= "logo-img" alt="Computer Science logo"></img>
                    <div id="computer-science">Computer Science</div>
                </div>
                </Link>

                <div className="side-category">
                    <img src="maths.svg" className= "logo-img" alt="Maths logo"></img>
                    <div id="maths">Mathematics</div>
                </div>
                <div className="side-category">
                    <img src="art.svg" className= "logo-img" alt="Art logo"></img>
                    <div id="art">Art</div>
                </div>

           
                <div className="side-category">
                    <img src="biology.svg" className= "logo-img" alt="Biology logo"></img>
                    <div id="biology">Biology</div>
                </div>


                <div className="side-category">
                    <img src="chemistry.svg" className= "logo-img" alt="Chemistry logo"></img>
                    <div id="chemistry">Chemistry</div>
                </div>

                <div className="side-category">
                    <img src="computer.svg" className= "logo-img" alt="Computer Science logo"></img>
                    <div id="computer-science">Hacking</div>
                </div>

                <div className="side-category">
                    <img src="maths.svg" className= "logo-img" alt="Maths logo"></img>
                    <div id="maths">Mathematics</div>
                </div>
                <div className="side-category">
                    <img src="art.svg" className= "logo-img" alt="Art logo"></img>
                    <div id="art">Art</div>
                </div>

           
                <div className="side-category">
                    <img src="biology.svg" className= "logo-img" alt="Biology logo"></img>
                    <div id="biology">Biology</div>
                </div>


                <div className="side-category">
                    <img src="chemistry.svg" className= "logo-img" alt="Chemistry logo"></img>
                    <div id="chemistry">Chemistry</div>
                </div>

                <div className="side-category">
                    <img src="computer.svg" className= "logo-img" alt="Computer Science logo"></img>
                    <div id="computer-science">Computer Science</div>
                </div>

                <div className="side-category">
                    <img src="maths.svg" className= "logo-img" alt="Maths logo"></img>
                    <div id="maths">Mathematics</div>
                </div>
            </div>
        </div>
    </>
    )

}

export default Side;
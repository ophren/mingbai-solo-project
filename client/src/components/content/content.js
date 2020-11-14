import './content.css';
import Side from './sidebar/side.js'
import Main from './main/main.js'

function Content ({setQueriedTerm}) {

    return (
        <div id="content">
            <Side></Side>
            <Main setQueriedTerm = {setQueriedTerm}></Main>
        </div>
    )
}

export default Content;
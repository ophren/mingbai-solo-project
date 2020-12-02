import './modal.css';
import { useState } from 'react';

function Modal ({ setShowModal, createNewDescription }) {

    // ?
    const arrayOfConcepts = [];

    const [conceptCategory, setConceptCategory] = useState('');
    const [conceptName, setConceptName] = useState('');
    const [conceptDescription, setConceptDescription] = useState('');
    const votes = 0;

    function handleChange (e) {

        if (e.target.id === "category") {
            setConceptCategory(e.target.value);
        }
    
        if (e.target.id === "concept_title") {
            setConceptName(e.target.value);
        }
    
        if (e.target.id === "concept_description") {
            setConceptDescription(e.target.value);
            
        }
      }

    function handleSubmit(e) {
        e.preventDefault();
        
        createNewDescription({conceptCategory, conceptName, conceptDescription, votes});
        
        setConceptCategory('');
        setConceptName('');
        setConceptDescription('');

        setShowModal (false);
      }

    function closeModal () {
        setShowModal (false);
    }

    return (
        <div id="modal-main">
            
            <form id="modal" onSubmit = {handleSubmit}>
                 
            <select id="categories">
                <option value="cs" onClick={handleChange}>Computer Science</option>
                <option value="bio" onClick={handleChange}>Biology</option>
            </select>

                <input id="concept_title" placeholder="Concept name" onChange={handleChange}></input>
                <input id="concept_description" onChange={handleChange}></input>
                <button type="submit" id="submit-btn">Submit</button> 
                <div id="close_text" onClick = {closeModal}>close</div>
            </form>
        </div>

        );
}

export default Modal;
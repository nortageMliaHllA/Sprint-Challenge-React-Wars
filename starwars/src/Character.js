import React from 'react';
import './components/StarWars.css';

const Character = (props) => {
    return (
        <div className= "card-container">
            <div className="attr">
                <div className= "char-name attr">{props.obj.name}</div> 
                <div><h2>Height: </h2> <span className= "char-height attr">{props.obj.height}</span></div>
                <div><h2>Mass: </h2> <span className= "char-mass attr">{props.obj.mass}</span></div> 
                <div><h2>Hair Color: </h2> <span className= "char-hair-color attr">{props.obj.hair_color}</span></div>
                <div><h2>Skin Color: </h2> <span className= "char-skin-color attr">{props.obj.skin_color}</span></div>
                <div><h2>Eye Color: </h2> <span className= "char-eye-color attr">{props.obj.eye_color}</span></div>
                <div><h2>DOB</h2> <span className= "char-birth-year attr">{props.obj.birth_year}</span></div>
                <div><h2>Gender</h2> <span className= "char-gender attr">{props.obj.gender}</span></div> 
            </div>
        </div>
    )
}


export default Character;
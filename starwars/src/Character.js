import React from 'react';
import './components/StarWars.css';

const Character = (props) => {
    return (
        <div className= "card-container">
            <div className="attr">
                <div className= "char-name attr">{props.obj.name}</div> 
                <div className= "char-height attr">{props.obj.height}</div>
                <div className= "char-mass attr">{props.obj.mass}</div> 
                <div className= "char-hair-color attr">{props.obj.hair_color}</div>
                <div className= "char-skin-color attr">{props.obj.skin_color}</div>
                <div className= "char-eye-color attr">{props.obj.eye_color}</div>
                <div className= "char-birth-year attr">{props.obj.birth_year}</div>
                <div className= "char-gender attr">{props.obj.gender}</div> 
            </div>
        </div>
    )
}


export default Character;
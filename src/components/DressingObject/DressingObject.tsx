import React from 'react';
import cl from './DressingObject.module.css'
import headPeople from '../../img/BodyParts/headPeople.png'
import bodyPeople from '../../img/BodyParts/bodyPeople.png'
import legsPeople from '../../img/BodyParts/LegsPeople.png'


const DressingObject = () => {
    return (
        <div className={cl.dressingContainer} >
            <div className={cl.imgPeople}>
                <img className={cl.imgPeopleHead} src={headPeople}/>
                <img className={cl.imgPeopleBody} src={bodyPeople}/>
                <img className={cl.imgPeopleLegs}  src={legsPeople}/>
            </div>
        </div>
    );
};

export default DressingObject;
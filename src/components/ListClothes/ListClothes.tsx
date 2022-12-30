import React from 'react';
import cl from './ListClothes.module.css'
import hair from '../../img/clothes/GirlPurpureHair.png'
import dress from '../../img/clothes/GirlPurpuleDress.png'
import shoes from '../../img/clothes/GirlPuprpuleShoes.png'

const ListClothes = () => {
    return (
        <div className={cl.clothesContainer}>
            <img className={cl.clothesHair} src={hair}/>
            <img className={cl.clothesDress} src={dress}/>
            <img className={cl.clothesShoes} src={shoes}/>
        </div>
    );
};

export default ListClothes;
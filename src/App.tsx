import React from 'react';
import cl from './App.module.css'
import DressingObject from "./components/DressingObject/DressingObject";
import ListClothes from "./components/ListClothes/ListClothes";

const App = () => {
    return (
        <div className={cl.appWrapper} >
            <DressingObject/>
            <ListClothes/>
        </div>
    );
};

export default App;
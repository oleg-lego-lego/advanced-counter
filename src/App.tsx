import React, {useState} from 'react';
import {Button} from "./components/Button";
import s from "./App.module.css"

function App() {
    let [count, setCount] = useState(0)

    const onClickIncHandler = () => {
        setCount(++count)
    }

    const onClickResetHandler = () => {
        setCount(0)
    }
    return (
        <div className={s.app}>
            <div className={s.currentValue}>
                <h1>{count}</h1>
                <h1>{count}</h1>
                <h1>{count}</h1>
                <Button callBack={onClickIncHandler} name={'inc'}/>
                <Button callBack={onClickResetHandler} name={'reset'}/>
                <Button callBack={onClickResetHandler} name={'reset'}/>
            </div>
        </div>
    );
}

export default App;

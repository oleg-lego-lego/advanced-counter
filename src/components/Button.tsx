import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    name: string
    callBack: () => void
}

export const Button = (props: ButtonPropsType) => {
    const callBackHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={callBackHandler} className={s.button}>{props.name}</button>
    );
};


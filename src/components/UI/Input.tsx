import React from "react";
import classes from './Input.module.scss';

type Props = {
    type?: string
    label: string
    onChange: (e:  React.ChangeEvent<HTMLInputElement>) => void
    value: string
}

const Input: React.FC<Props> = (props) => {

    const inputType = props.type || 'text';
    const cls = [classes.Input];
    const htmlFor = `${inputType}-${Math.random()}`;

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input type={inputType}
                   id={htmlFor}
                   value={props.value}
                   onChange={props.onChange}
            />
        </div>
    )
}

export default Input;
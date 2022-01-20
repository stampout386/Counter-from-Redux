import {ChangeEvent, useState} from "react";
import s from './SuperInput.module.css'
import {TextField} from "@material-ui/core";

type SuperInput = {
    title: string
    defaultValue: number
    getValue: (value: number) => void
    style: boolean
}

export const SuperInput = (props: SuperInput) => {

    const [value, setValue] = useState<number>(props.defaultValue)

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.currentTarget.value))
        props.getValue(Number(e.currentTarget.value))
    }

    const inputStyle = `${s.standart} ${props.style ? s.error : ''}`

    return (
        <div>
            {/*<span>{props.title}</span>*/}
            <TextField
                error={props.style}
                value={value} onChange={onChangeCallback}
                id="outlined-number"
                label={props.title}
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            {/*<input value={value} type={'number'} onChange={onChangeCallback} className={inputStyle}/>*/}
        </div>
    );
}
import {SuperButton} from "../SuperButton/SuperButton";
import {SuperInput} from "./SuperInput/SuperInput";
import {useState} from "react";

type CounterSettingType = {
    titleButtonSet: string
    startValue: number
    maxValue: number
    valueHandler: (startValue: number, maxValue: number) => void
    errorHandler: (error: string) => void
}

export const CounterSetting = (props: CounterSettingType) => {

    const [startValue, setStartValue] = useState<number>(props.startValue)
    const [maxValue, setMaxValue] = useState<number>(props.maxValue)
    const [styleError, setStyleError] = useState<boolean>(false)

    const minValueHandler = (value: number) => {
        setStartValue(value)
        if (value < maxValue) {
            setStyleError(false)
            props.errorHandler('Enter values and press \'set\'')
        } else {
            setStyleError(true)
            props.errorHandler('Incorrect value!')
        }
    }
    const maxValueHandler = (value: number) => {
        setMaxValue(value)
        if (value > startValue) {
            setStyleError(false)
            props.errorHandler('Enter values and press \'set\'')
        } else {
            setStyleError(true)
            props.errorHandler('Incorrect value!')
        }
    }
    const valueHandler = () => {
        props.valueHandler(startValue, maxValue)
        setStyleError(false)
        props.errorHandler('')
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }


    return (
        <div>
            <SuperInput title={'MAX VALUE'} defaultValue={props.maxValue} getValue={maxValueHandler} style={styleError}/>
            <SuperInput title={'START VALUE'} defaultValue={props.startValue} getValue={minValueHandler} style={styleError}/>
            <SuperButton title={props.titleButtonSet} onClick={valueHandler}
                         disabled={styleError}/>
        </div>
    )
}
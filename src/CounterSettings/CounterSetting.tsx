import {SuperButton} from "../SuperButton/SuperButton";
import {SuperInput} from "./SuperInput/SuperInput";
import s from './CounterSetting.module.css'

type CounterSettingType = {
    startValue: number
    maxValue: number
    maxValueHandler: (valueMax: number) => void
    minValueHandler: (valueStart: number) => void
    valueHandlerClick: () => void
    error: boolean
}

export const CounterSetting = (props: CounterSettingType) => {


    return (
        <div className={s.settings}>
            <SuperInput title={'MAX VALUE'} defaultValue={props.maxValue} getValue={props.maxValueHandler}
                        style={props.error}/>
            <SuperInput title={'START VALUE'} defaultValue={props.startValue} getValue={props.minValueHandler}
                        style={props.error}/>
            <div className={s.button}>
                <SuperButton title={'Set'} onClick={props.valueHandlerClick}
                             disabled={props.error}/>
            </div>
        </div>
    )
}
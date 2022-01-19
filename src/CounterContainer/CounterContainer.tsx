import s from './CounterContainer.module.css'
import {SuperButton} from "../SuperButton/SuperButton";
import {Counter} from "../Counter/Counter";

type CounterContainerPropsType = {
    endValue: number
    counterState: number
    titleButtonInc: string
    titleButtonReset: string
    onClickInc: () => void
    onClickReset: () => void
    disabledReset: boolean;
    disabledInc: boolean;
    error: string

}

export function CounterContainer(props: CounterContainerPropsType) {
    return (
        <div className={s.container}>
            <div className={s.counter}>
                <Counter counterValue={props.counterState} endValue={props.endValue} error={props.error}/>
            </div>

            <div className={s.buttons}>
                <div className={s.button}>
                    <SuperButton title={props.titleButtonInc} onClick={props.onClickInc}
                                 disabled={props.disabledInc}/>
                </div>
                <div className={s.button}>
                    <SuperButton title={props.titleButtonReset} onClick={props.onClickReset}
                                 disabled={props.disabledReset}/>
                </div>

            </div>

        </div>

    )
}
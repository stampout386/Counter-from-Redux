import s from './Counter.module.css'

type CounterPropsType = {
    endValue: number
    counterValue: number
    error: string
}

export function Counter(props: CounterPropsType) {


    return (
        <div className={props.counterValue === props.endValue ? `${s.color}` : props.error=== 'Incorrect value!' || props.error=== 'Enter values and press \'set\''? '':''}>
                {props.error === 'Incorrect value!' ? 'Incorrect value!': props.error === '' ? props.counterValue :  'Enter values and press \'set\''}
        </div>

        // <div className={props.counterState === props.endValue ? `${s.color}` : ''}>{props.counterState}</div>
    )
}
import React, {useEffect, useState} from 'react';

import './App.css';
import {CounterContainer} from "./CounterContainer/CounterContainer";
import {CounterSetting} from "./CounterSettings/CounterSetting";

function App() {

    const startValueAsString = localStorage.getItem('startValue');
    const maxValueAsString = localStorage.getItem('maxValue');

    let [startValue, setStartValue] = useState<number>(startValueAsString ? JSON.parse(startValueAsString) : 0)
    let [maxValue, setMaxValue] = useState<number>(maxValueAsString ? JSON.parse(maxValueAsString) : 5)
    let [counterValue, setCounterValue] = useState<number>(startValue)
    const [error, setError] = useState<string>('')


    const onClickInc = () => {
        const newCounterState = counterValue + 1;
        setCounterValue(newCounterState)
    }
    const onClickReset = () => {
        setCounterValue(startValue)
    }

    const disabledInc = counterValue === maxValue || error !== '';
    const disabledReset = counterValue === startValue || error !== '';
    console.log(disabledInc);
    console.log(disabledReset);


    const valueHandler = (startValue: number, maxValue: number) => {
        setStartValue(startValue)
        setMaxValue(maxValue)
        setCounterValue(startValue)
    }
    const errorHandler = (error: string) => {
        setError(error)
    }

    return (
        <div className="App">
            <CounterSetting
                titleButtonSet={'Set'}
                valueHandler={valueHandler}
                startValue={startValue}
                maxValue={maxValue}
                errorHandler={errorHandler}
            />

            <CounterContainer
                error={error}
                endValue={maxValue}
                counterState={counterValue}
                titleButtonInc={'Inc'}
                titleButtonReset={'Reset'}
                onClickInc={onClickInc}
                onClickReset={onClickReset}
                disabledInc={disabledInc}
                disabledReset={disabledReset}
            />
        </div>
    );
}


export default App;

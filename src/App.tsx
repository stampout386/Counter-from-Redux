import React, {useState} from 'react';

import './App.css';
import {CounterContainer} from "./CounterContainer/CounterContainer";
import {CounterSetting} from "./CounterSettings/CounterSetting";
import {Grid} from "@material-ui/core";
import {Paper} from "@mui/material";

function App() {

    const startValueAsString = localStorage.getItem('startValue');
    const maxValueAsString = localStorage.getItem('maxValue');

    let [startValue, setStartValue] = useState<number>(startValueAsString ? JSON.parse(startValueAsString) : 0)
    let [maxValue, setMaxValue] = useState<number>(maxValueAsString ? JSON.parse(maxValueAsString) : 5)
    let [counterValue, setCounterValue] = useState<number>(startValue)
    const [error, setError] = useState<string>('')
    const errorBoolean = error === 'Incorrect value!';


    const minValueHandler = (value: number) => {
        setStartValue(value)
        if (value < maxValue && value > -1) {
            setError('Enter values and press \'set\'')
        } else {
            setError('Incorrect value!')
        }
    }

    const maxValueHandler = (value: number) => {
        setMaxValue(value)
        if (value > startValue && value > -1) {
            setError('Enter values and press \'set\'')
        } else {
            setError('Incorrect value!')
        }
    }

    const valueHandlerClick = () => {
        setStartValue(startValue)
        setMaxValue(maxValue)
        setCounterValue(startValue)
        setError('')
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }


    const onClickInc = () => {
        const newCounterState = counterValue + 1;
        setCounterValue(newCounterState)
    }
    const onClickReset = () => {
        setCounterValue(startValue)
    }

    const disabledInc = counterValue === maxValue || error !== '';
    const disabledReset = counterValue === startValue || error !== '';


    return (
        <div className='App'>
            <Grid container spacing={5}>
                <Grid item>

                    <Paper elevation={3}>
                        <CounterSetting
                            startValue={startValue}
                            maxValue={maxValue}
                            maxValueHandler={maxValueHandler}
                            minValueHandler={minValueHandler}
                            valueHandlerClick={valueHandlerClick}
                            error={errorBoolean}
                        />
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper elevation={3}>
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
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}


export default App;

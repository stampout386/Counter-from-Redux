import React, {useState} from 'react';

import './App.css';
import {CounterContainer} from "./CounterContainer/CounterContainer";
import {CounterSetting} from "./CounterSettings/CounterSetting";
import {Grid} from "@material-ui/core";
import {Paper} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {setCounterValueAC, setErrorAC, setMaxValueAC, setStartValueAC} from "./redux/counterReducer";


function App() {


    // let [startValue, setStartValue] = useState<number>(startValueAsString ? JSON.parse(startValueAsString) : 0)
    // // let [maxValue, setMaxValue] = useState<number>(maxValueAsString ? JSON.parse(maxValueAsString) : 5)
    // let [counterValue, setCounterValue] = useState<number>(startValue)
    // const [error, setError] = useState<string>('')


    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue);
    const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue);
    const error = useSelector<AppRootStateType, string>(state => state.counter.error);
    const counterValue = useSelector<AppRootStateType, number>(state => state.counter.counterValue);

    const dispatch = useDispatch()

    const errorBoolean = error === 'Incorrect value!';

    const minValueHandler = (value: number) => {
        dispatch(setStartValueAC(value));
        if (value < maxValue && value > -1) {
            dispatch(setErrorAC('Enter values and press \'set\''))
        } else {
            dispatch(setErrorAC('Incorrect value!'))

        }
    }

    const maxValueHandler = (value: number) => {
        dispatch(setMaxValueAC(value))

        if (value > startValue && value > -1) {
            dispatch(setErrorAC('Enter values and press \'set\''))
        } else {
            dispatch(setErrorAC('Incorrect value!'))
        }
    }

    const valueHandlerClick = () => {
        dispatch(setStartValueAC(startValue));
        dispatch(setMaxValueAC(maxValue))

        dispatch(setCounterValueAC(startValue))
        dispatch(setErrorAC(''))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }


    const onClickInc = () => {
        const newCounterState = counterValue + 1;
        dispatch(setCounterValueAC(newCounterState))

    }
    const onClickReset = () => {
        dispatch(setCounterValueAC(startValue))

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

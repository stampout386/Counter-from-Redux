const startValueAsString = localStorage.getItem('startValue');
const maxValueAsString = localStorage.getItem('maxValue');

let startValue = (startValueAsString ? JSON.parse(startValueAsString) : 0);
let maxValue = (maxValueAsString ? JSON.parse(maxValueAsString) : 5)

const initialState = {
    startValue: startValue,
    maxValue: maxValue,
    counterValue: startValue,
    error: '',

}

export type initialStateType = {
    startValue: number,
    maxValue: number,
    counterValue: number,
    error: string,
}

const SET_START_VALUE = 'SET_START_VALUE';
const SET_MAX_VALUE = 'SET_MAX_VALUE';
const SET_ERROR = 'SET_ERROR';
const SET_COUNTER_VALUE = 'SET_COUNTER_VALUE';

export const counterReducer = (state: initialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_START_VALUE: {
            return {...state, startValue: action.value}
        }
        case SET_MAX_VALUE : {
            return {...state, maxValue: action.value}
        }
        case SET_ERROR: {
            // @ts-ignore
            return {...state, error: action.error}
        }
        case SET_COUNTER_VALUE: {
            return {...state, counterValue: action.value}
        }
        default:
            return state
    }
}


export const setStartValueAC = (value: number) => {
    return {
        type: SET_START_VALUE,
        value
    }
}
export const setMaxValueAC = (value: number) => {
    return {
        type: SET_MAX_VALUE,
        value
    } as const
}
export const setErrorAC = (error: string) => {
    return {
        type: SET_ERROR,
        error

    } as const
}
export const setCounterValueAC = (value: number) => {
    return {
        type: SET_COUNTER_VALUE,
        value
    } as const
}

type ActionType = |
    ReturnType<typeof setStartValueAC> |
    ReturnType<typeof setMaxValueAC> |
    ReturnType<typeof setErrorAC> |
    ReturnType<typeof setCounterValueAC>
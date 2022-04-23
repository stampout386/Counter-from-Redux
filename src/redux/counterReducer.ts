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

export const counterReducer = (state: initialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_START_VALUE: {
            return {...state, startValue: action.value}
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

export type setStartValueType = ReturnType<typeof setStartValueAC>


type ActionType = setStartValueType
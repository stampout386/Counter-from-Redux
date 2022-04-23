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

type initialStateType = {
    startValue: number,
    maxValue: number,
    counterValue: number,
    error: string,
}


export const counterReducer = (state: initialStateType = initialState, action: any) => {
    switch (action) {

    }
}
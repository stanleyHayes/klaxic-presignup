import {
    GET_QUESTION_REQUEST,
    GET_QUESTIONS_FAILURE,
    GET_QUESTIONS_SUCCESS,
    GET_QUESTION,
    ANSWER_QUESTION_FAILURE,
    ANSWER_QUESTION_REQUEST,
    ANSWER_QUESTION_SUCCESS,
    SUBMIT_QUESTIONS_FAILURE,
    SUBMIT_QUESTIONS_REQUEST,
    SUBMIT_QUESTIONS_SUCCESS
} from "./interview-types";

const question = {
    title: 'Lorem Ipsum',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
}


const INITIAL_STATE = {
    currentQuestion: {},
    questions: [question, question, question, question, question, question, question],
    error: null
}

const interviewReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case GET_QUESTION:

            return {
                ...state,
                currentQuestion: state.questions[action.payload - 1]
            }


        default:
            return state;
    }
}

export default interviewReducer;

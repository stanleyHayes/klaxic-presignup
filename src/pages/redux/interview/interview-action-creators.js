import {
    GET_QUESTIONS_FAILURE,
    GET_QUESTIONS_REQUEST,
    GET_QUESTION,
    GET_QUESTIONS_SUCCESS
} from "./interview-types";

import axios from "axios";

const getQuestionsRequest = () => {
    return {
        type: GET_QUESTIONS_REQUEST
    }
}

const getQuestionsSuccess = questions => {
    return {
        type: GET_QUESTIONS_SUCCESS,
        payload: questions
    }
}

const getQuestionsFailure = error => {
    return {
        type: GET_QUESTIONS_FAILURE,
        payload: error
    }
}

export const getQuestions = () => {
    return dispatch => {
        dispatch(getQuestionsRequest());
        axios({
            method: 'get',
            url: `http://localhost:5000/api/v1/questions`,
        }).then(response => {
            dispatch(getQuestionsSuccess(response.data.data));
        }).catch(error => {
            dispatch(getQuestionsFailure(error.response.data.error));
        })
    }
}

export const getQuestion = index => {
    return{
        type: GET_QUESTION,
        payload: index
    }
}


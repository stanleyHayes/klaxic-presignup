import React, {useEffect} from "react";
import "../../App.css";
import {useHistory, useParams} from "react-router-dom";
import {connect, useDispatch} from "react-redux";
import {Button, Container, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {getQuestion} from "../redux/interview/interview-action-creators";

function InterviewQuestionsPage({question, questions}) {

    const dispatch = useDispatch();
    const {question_number} = useParams();
    const history = useHistory();
    const useStyles = makeStyles({
        button: {
            paddingTop: 16,
            paddingBottom: 16,
            color: "white",
            backgroundColor: "green",
            marginTop: 16
        },
        buttonContainer: {
            display: "flex",
            justifyContent: "center"
        }
    });
    const classes = useStyles();

    const handleClick = event => {
        event.preventDefault();

        if (parseInt(question_number, 10) === questions.length) {
            history.push(`/interview/success`);
            return;
        }

        history.push(`/interview/questions/${parseInt(question_number, 10) + 1}`);
    }

    useEffect(function () {
        dispatch(getQuestion(question_number));
    }, [dispatch, question_number])

    return (
        <div className="container justify-content-center">
            <Container>
                <Typography gutterBottom={true} className="white-text" variant="h1" align="center">
                    {question_number < 10 ? `0${question_number}` : question_number} / {questions.length}
                </Typography>

                <Typography className="white-text" gutterBottom={true} variant="h2" align="center">
                    {question.title}
                </Typography>

                <Typography className="grey-text" gutterBottom={true} variant="h6" align="center">
                    {question.description}
                </Typography>

                <Typography className="grey-text" gutterBottom={true} variant="subtitle1" align="center">
                    Response
                </Typography>

                <div className={classes.buttonContainer}>
                    <Button
                        onClick={handleClick}
                        className={classes.button}
                        size="large"
                        variant="contained">
                        {parseInt(question_number, 10) === questions.length ? "Finish" : "Next"}
                    </Button>
                </div>

            </Container>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        question: state.interview.currentQuestion,
        questions: state.interview.questions
    }
}

export default connect(mapStateToProps)(InterviewQuestionsPage);

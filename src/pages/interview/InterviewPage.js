import React from "react";
import "../../App.css";
import {Container, Typography, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {useHistory} from "react-router-dom";

function InterviewPage() {

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

        history.push('/interview/questions/1');
    }

    return (
        <div className="container justify-content-center">
            <div>
                <Container>
                    <Typography gutterBottom={true} variant="h2" className="font-weight-normal white-text" align="center">Lorem Ipsum</Typography>

                    <Typography gutterBottom={true} variant="h6" align="center" className="grey-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua
                    </Typography>

                    <div className={classes.buttonContainer}>
                        <Button
                            onClick={handleClick}
                            className={classes.button}
                            size="large"
                            variant="contained">
                            Proceed to Interview
                        </Button>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default InterviewPage;

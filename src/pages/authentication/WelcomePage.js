import React from "react";
import {makeStyles} from "@material-ui/styles";
import "../../App.css";
import {useHistory} from "react-router-dom";

import {Typography, Container, Grid, Button} from "@material-ui/core";

function WelcomePage() {

    const useStyles = makeStyles({

        gridItem: {
            flexGrow: 1,
            paddingTop: 24,
            paddingBottom: 24
        },
        gridContainer: {
            minHeight: "100%",
            padding: 16
        },
        container: {
            minHeight: "100%"
        },
        root: {},
        mainText: {
            color: "white"
        },
        secondaryText: {
            color: "#888888"
        },
        button: {
            paddingTop: 16,
            paddingBottom: 16,
            color: "white",
            backgroundColor: "green",
            marginTop: 16
        },
        input: {
            paddingTop: 8,
            paddingBottom: 8,
            borderRadius: 16
        },
        marginVerticalSmall: {
            marginBottom: 8,
            marginTop: 8
        },
        marginVerticalMedium: {
            marginBottom: 16,
            marginTop: 16
        },
        marginVerticalLarge: {
            marginBottom: 32,
            marginTop: 32
        },
        marginVerticalHuge: {
            marginBottom: 64,
            marginTop: 64
        }
    });
    const classes = useStyles();

    const history = useHistory();

    const handleBusinessSignUp = event => {
        event.preventDefault();
        history.push('/business/personal');
    }
    const handleIndividualSignUp = event => {
        event.preventDefault();
        history.push('/individual/personal');
    }

    return (
        <div className="container">
            <Container>
                <Typography variant="h2" align="center" className={`${classes.mainText} ${classes.marginVerticalHuge}`}>Lorem Ipsum</Typography>

                <Typography align="center" variant="h6" className={`${classes.secondaryText} ${classes.marginVerticalLarge}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut
                    labore et dolore magna aliqua
                </Typography>

                <Typography align="center" variant="h6" className={`${classes.secondaryText} ${classes.marginVerticalLarge}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut
                    labore et dolore magna aliqua
                </Typography>

                <Grid container={true} spacing={5}>
                    <Grid item={true} xs={12} md={6}>
                        <Typography align="center" variant="h4" className={`${classes.mainText} ${classes.marginVerticalMedium}`}>Lorem Ipsum</Typography>
                        <Typography align="center" variant="h6" className={`${classes.secondaryText} ${classes.marginVerticalSmall}`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut
                            labore et dolore magna aliqua
                        </Typography>

                        <Button
                            onClick={handleIndividualSignUp}
                            fullWidth={true}
                            className={`${classes.button} ${classes.marginVerticalSmall}`}                            size="large"
                            variant="contained">Sign Up as an Individual</Button>

                    </Grid>
                    <Grid item={true} xs={12} md={6}>
                        <Typography align="center" variant="h4" className={`${classes.mainText} ${classes.marginVerticalMedium}`}>Lorem Ipsum</Typography>
                        <Typography align="center" variant="h6" className={`${classes.secondaryText} ${classes.marginVerticalSmall}`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut
                            labore et dolore magna aliqua
                        </Typography>

                        <Button
                            onClick={handleBusinessSignUp}
                            fullWidth={true}
                            className={`${classes.button} ${classes.marginVerticalSmall}`}
                            size="large"
                            variant="contained">Sign Up as a Business</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default WelcomePage;

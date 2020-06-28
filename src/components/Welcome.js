import React from "react";
import {Typography, Grid, Container, Avatar, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {Link} from "react-router-dom";

function Welcome() {

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
            color: "white",
            textTransform: "uppercase",
            fontWeight: 300
        },
        secondaryText: {
            color: "#cccccc"
        },
        button: {
            paddingTop: 16,
            paddingBottom: 16,
            color: "white",
            backgroundColor: "green",
            marginTop: 16
        },
        avatar: {
            width: 200,
            height: 200
        },
        avatarContainer: {
            display: "flex",
            justifyContent: "center"
        },
        marginBottomSmall: {
            marginBottom: 8
        },
        marginBottomMedium: {
            marginBottom: 16
        },
        marginBottomLarge: {
            marginBottom: 32
        },
        link: {
            color: "white",
            textDecoration: "none"
        }
    });

    const classes = useStyles();


    return (
        <div>
            <Container>
                <Grid className={`${classes.marginBottomLarge}`} container={true} spacing={2} justify="center">
                    <Grid item={true} xs={12} md={6}>
                        <div className={classes.avatarContainer}>
                            <Avatar
                                className={classes.avatar}
                                alt="KLAXIC Logo"
                                src={`${process.env.PUBLIC_URL}/background.jpg`}/>
                        </div>
                    </Grid>
                    <Grid item={true} xs={12} md={6}>
                        <div className={classes.avatarContainer}>
                            <Avatar
                                className={classes.avatar}
                                alt="KLAXIC Logo"
                                src={`${process.env.PUBLIC_URL}/background.jpg`}/>
                        </div>
                    </Grid>
                </Grid>

                <Typography
                    className={`${classes.marginBottomLarge} ${classes.mainText}`}
                    align="center" variant="h3">
                    Welcome to Klaxic Social Community
                </Typography>

                <Typography
                    className={`${classes.marginBottomMedium} ${classes.secondaryText}`}
                    align="center"
                    variant="subtitle1">
                    Connect with the Klaxicans in your community to discover yourself and your indelible skills to help
                    in the development of your district community and your corporate world whiles involve yourself in
                    our Community Development Surveys, Projects and Developments and be Rewarded Economically
                </Typography>

                <Typography
                    className={`${classes.marginBottomMedium} ${classes.secondaryText}`}
                    align="center"
                    variant="subtitle1">
                    Logon to your dashboard and continue developing and increasing your community network for your
                    klaxic
                    Surveys to develop your district or sign up to start discovering yourself and the ineffaceable
                    developmental skills through our new members’ orientation training & development.
                </Typography>

                <Grid container={true} spacing={3} justify="center">
                    <Grid item={true} xs={12} md={4}>
                        <Button
                            variant="outlined"
                            size="large"
                            fullWidth={true}
                            className={`${classes.button}`}>
                            <Link className={classes.link} to={"/"}>
                                Read more
                            </Link>
                        </Button>
                    </Grid>

                    <Grid item={true} xs={12} md={4}>
                        <Button
                            variant="outlined"
                            fullWidth={true}
                            size="large"
                            className={`${classes.button}`}>
                            <Link className={classes.link} to="/login">
                                Login
                            </Link>
                        </Button>
                    </Grid>

                    <Grid item={true} xs={12} md={4}>
                        <Button
                            variant="outlined"
                            fullWidth={true}
                            size="large"
                            className={`${classes.button}`}>
                            <Link className={classes.link} to="/register/membership">
                                Register
                            </Link>
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Welcome;

import React from "react";
import {Typography, Avatar, Grid, Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import "../App.css";

function LanguageSetup() {

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
            width: 250,
            height: 250
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
        }
    });

    const classes = useStyles();

    return (
        <div
            className={`padding-vertical-huge`}>
            <Container>
                <div
                    className={`${classes.avatarContainer}  ${classes.marginBottomLarge}`}>
                    <Avatar
                        className={classes.avatar}
                        alt="KLAXIC Logo"
                        src={`${process.env.PUBLIC_URL}/background.jpg`}/>
                </div>
                <Typography
                    className={`${classes.marginBottomMedium} ${classes.secondaryText}`}
                    variant="h6"
                    align="center">
                    Select your preferred Language
                </Typography>
            </Container>
        </div>
    )
}

export default LanguageSetup;

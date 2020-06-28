import React, {useState} from "react";
import "../../App.css";
import {Button, Grid, Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import LanguageSetup from "../../components/LanguageSetup";
import Welcome from "../../components/Welcome";

function LandingPage() {

    const [page, setPage] = useState(0);

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
        avatar: {
            width: "70%",
            height: "70%"
        },
        avatarContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    });

    const classes = useStyles();

    const handlePreviousClick = e => {
        e.preventDefault();
        setPage(page => page - 1)
    }

    const handleNextClick = e => {
        e.preventDefault();
        setPage(page => page + 1)
    }

    const getPage = index => {
        switch (index) {
            case 0:
                return <LanguageSetup/>

            case 1:
                return <Welcome/>

            default:
                return <LanguageSetup/>
        }
    }
    return (
        <div className="container">
            <Container>
                <Grid
                    container={true}
                    spacing={4}
                    justify="center">
                    <Grid item={true} xs={12} md={8}>
                        {getPage(page)}
                    </Grid>

                    <Grid item={true} xs={5}>
                        <Button
                            variant="outlined"
                            onClick={handlePreviousClick}
                            size="large"
                            fullWidth={true}
                            disabled={page === 0}
                            className={`${classes.button}`}>
                            Previous
                        </Button>

                    </Grid>

                    <Grid item={true} xs={5}>
                        <Button
                            disabled={page === 1}
                            variant="contained"
                            fullWidth={true}
                            onClick={handleNextClick}
                            size="large"
                            className={`${classes.button}`}>
                            Next
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default LandingPage;

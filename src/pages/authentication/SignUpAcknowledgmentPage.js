import React from "react";
import "../../App.css";
import {Grid, Container, Typography} from "@material-ui/core";

function SignUpAcknowledgmentPage() {

    return (
        <div className="container">
            <Container>
                <Grid container={true} justify="center">
                    <Grid item={true} xs={12} md={8} lg={6}>
                        <Typography className="white-text" variant="h2" align="center">Register Success</Typography>
                        <Typography className="grey-text" align="center" variant="h6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut
                            labore et dolore magna aliqua
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default SignUpAcknowledgmentPage;

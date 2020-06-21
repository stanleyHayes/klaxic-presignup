import React from "react";
import {Grid, Card, CardContent, Typography, TextField, Button, Container} from "@material-ui/core";
import "../../App.css";
import {makeStyles} from "@material-ui/styles";

function SignUpPage() {

    const useStyles = makeStyles({
        gridItem: {
            flexGrow: 1,
            paddingTop: 24,
            paddingBottom: 24
        },
        gridContainer: {
            minHeight: "100%",
            padding: 32
        },
        container: {
            minHeight: "100%"
        },
        root: {

        },
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
        }
    });

    const classes = useStyles();

    return (
        <div className="container">
            <Container className={classes.container}>
                <Grid container={true} justify="center" spacing={5} className={classes.gridContainer}>
                    <Grid item={true} xs={10} md={4} className={classes.gridItem}>
                        <div className="description-container">
                            <Typography variant="h2" className={classes.mainText}>Lorem Ipsum</Typography>
                            <Typography variant="h6" className={classes.secondaryText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua
                            </Typography>
                        </div>
                    </Grid>

                    <Grid item={true} xs={10} md={4}>
                        <Card elevation={1} raised={true} variant="elevation">
                            <CardContent>
                                <Typography variant="caption">First Name</Typography>
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    fullWidth={true}
                                    required={true}
                                    margin="dense"
                                    placeholder="Enter first name"
                                    name="firstname"
                                    label="First Name"
                                />

                                <Typography variant="caption">Email</Typography>
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    fullWidth={true}
                                    required={true}
                                    margin="dense"
                                    placeholder="Enter email"
                                    name="email"
                                    label="Email"
                                />

                                <Typography variant="caption">Profession</Typography>
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    fullWidth={true}
                                    required={true}
                                    margin="dense"
                                    placeholder="Enter profession"
                                    name="profession"
                                    label="Profession"
                                />

                                <Typography variant="caption">Community Name</Typography>
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    fullWidth={true}
                                    required={true}
                                    margin="dense"
                                    placeholder="Enter your community name"
                                    name="community_name"
                                    label="Community Name"
                                />

                                <Typography variant="caption">Mobile Number</Typography>
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    fullWidth={true}
                                    required={true}
                                    margin="dense"
                                    placeholder="Enter phone number (+233270048319)"
                                    name="mobile_number"
                                    label="Mobile Number"
                                />

                                <Typography variant="caption">Username</Typography>
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    fullWidth={true}
                                    required={true}
                                    margin="dense"
                                    placeholder="Enter username"
                                    name="username"
                                    label="Username"
                                />

                                <Typography variant="caption">District</Typography>
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    fullWidth={true}
                                    required={true}
                                    margin="dense"
                                    placeholder="Enter your district name"
                                    name="district"
                                    label="District"
                                />

                                <Typography variant="caption">Password</Typography>
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    fullWidth={true}
                                    required={true}
                                    margin="dense"
                                    placeholder="Enter password"
                                    name="password"
                                    label="Password"
                                />

                                <Typography variant="caption">Confirm Password</Typography>
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    fullWidth={true}
                                    required={true}
                                    margin="dense"
                                    placeholder="Confirm password"
                                    name="confirm_password"
                                    label="Confirm Password"
                                />

                                <Button
                                    fullWidth={true}
                                    className={classes.button}
                                    size="large"
                                    variant="contained">Sign Up</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default SignUpPage;

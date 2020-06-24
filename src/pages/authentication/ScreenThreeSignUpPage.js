import React, {useState} from "react";
import {Grid, Card, CardContent, Typography, TextField, Button, Container, LinearProgress} from "@material-ui/core";
import "../../App.css";
import {makeStyles} from "@material-ui/styles";
import {connect, useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {signUp} from "../redux/authentication/auth-action-creators";
import validator from "validator";


function ScreenThreeSignUpPage({loading, storedUser}) {

    const dispatch = useDispatch();
    const history = useHistory();

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
        }
    });
    const classes = useStyles();

    const [user, setUser] = useState({...storedUser});
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState({});

    const {
        email,
        username,
        password
    } = user;

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    }

    const handlePrevious = event => {
        event.preventDefault();
        history.push('/location');
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email) {
            setError({...error, email: "Email required"});
            return;
        } else if (!validator.isEmail(email)) {
            setError({...error, email: "Invalid email"});
            return;
        } else {
            setError({...error, email: null});
        }

        if (!username) {
            setError({...error, username: "Username required"});
            return;
        } else {
            setError({...error, username: ""});
        }

        if (!password) {
            setError({...error, password: "Password required"});
            return;
        } else {
            setError({...error, password: ""});
        }

        if (!confirmPassword) {
            setError({...error, confirm_password: "Confirm password required"});
            return;
        } else {
            setError({...error, confirm_password: ""});
        }

        if (password !== confirmPassword) {
            setError({...error, password: "Password mismatch", confirm_password: "Password mismatch"});
            return;
        } else {
            setError({...error, password: "", confirm_password: ""});
        }

        dispatch(signUp(user, history));
    }

    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    return (
        <div className="container">
            <Container className={classes.container}>
                <Grid container={true} justify="center" spacing={5} className={classes.gridContainer}>
                    <Grid item={true} xs={12} md={4} className={classes.gridItem}>
                        <div className="description-container">

                            <Typography variant="h2" className={classes.mainText}>Lorem Ipsum</Typography>

                            <Typography variant="h6" className={classes.secondaryText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore magna aliqua
                            </Typography>

                            <Typography variant="h6" className={classes.secondaryText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore magna aliqua
                            </Typography>
                        </div>
                    </Grid>

                    <Grid item={true} xs={12} md={4}>
                        <Card elevation={1} raised={true} variant="elevation">
                            {loading && <LinearProgress variant="query" />}
                            <CardContent>

                                <Typography variant="subtitle2">Email</Typography>
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    fullWidth={true}
                                    required={true}
                                    margin="dense"
                                    value={email}
                                    placeholder="Enter email"
                                    name="email"
                                    label="Email"
                                    onChange={handleChange}
                                    helperText={error.email}
                                    error={Boolean(error.email)}
                                />

                                <Typography variant="subtitle2">Username</Typography>
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    fullWidth={true}
                                    required={true}
                                    margin="dense"
                                    placeholder="Enter username"
                                    name="username"
                                    value={username}
                                    label="Username"
                                    onChange={handleChange}
                                    helperText={error.username}
                                    error={Boolean(error.username)}
                                />


                                <Typography variant="subtitle2">Password</Typography>
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    fullWidth={true}
                                    required={true}
                                    value={password}
                                    margin="dense"
                                    placeholder="Enter password"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    onChange={handleChange}
                                    helperText={error.password}
                                    error={Boolean(error.password)}
                                />

                                <Typography variant="subtitle2">Confirm Password</Typography>
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    fullWidth={true}
                                    required={true}
                                    margin="dense"
                                    type="password"
                                    onChange={handleConfirmPasswordChange}
                                    value={confirmPassword}
                                    placeholder="Confirm password"
                                    name="confirm_password"
                                    label="Confirm Password"
                                    helperText={error.confirm_password}
                                    error={Boolean(error.confirm_password)}
                                />

                                <Grid container={true} spacing={3}>
                                    <Grid item={true} xs={6}>
                                        <Button
                                            onClick={handlePrevious}
                                            fullWidth={true}
                                            className={classes.button}
                                            size="large"
                                            variant="contained">Previous</Button>
                                    </Grid>
                                    <Grid item={true} xs={6}>
                                        <Button
                                            onClick={handleSubmit}
                                            fullWidth={true}
                                            className={classes.button}
                                            size="large"
                                            variant="contained">Proceed</Button>
                                    </Grid>
                                </Grid>

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        storedUser: state.user.user
    }
}

export default connect(mapStateToProps) (ScreenThreeSignUpPage);

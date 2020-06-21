import React, {useState} from "react";
import {Grid, Card, CardContent, Typography, TextField, Button, Container, LinearProgress} from "@material-ui/core";
import "../../App.css";
import {makeStyles} from "@material-ui/styles";
import {connect, useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {signUp} from "../redux/authentication/auth-action-creators";

function SignUpPage({loading}) {

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

    const [user, setUser] = useState({});
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState({});

    const {
        first_name, email,
        mobile_number,
        profession,
        hometown_or_community_name,
        district_assembly,
        state_or_region,
        username,
        password
    } = user;

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!first_name) {
            setError({...error, first_name: "First name required"});
            return;
        } else {
            setError({...error, first_name: null});
        }

        if (!email) {
            setError({...error, email: "Email required"});
            return;
        } else {
            setError({...error, email: null});
        }

        if (!mobile_number) {
            setError({...error, mobile_number: "Mobile number required"});
            return;
        } else {
            setError({...error, mobile_number: ""});
        }

        if (!profession) {
            setError({...error, profession: "Profession required"});
            return;
        } else {
            setError({...error, profession: ""});
        }

        if (!hometown_or_community_name) {
            setError({...error, hometown_or_community_name: "First name required"});
            return;
        } else {
            setError({...error, hometown_or_community_name: ""});
        }

        if (!district_assembly) {
            setError({...error, district_assembly: "District name required"});
            return;
        } else {
            setError({...error, district_assembly: ""});
        }

        if (!state_or_region) {
            setError({...error, state_or_region: "State or Region required"});
            return;
        } else {
            setError({...error, state_or_region: ""});
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
                                <Typography variant="subtitle2">First Name</Typography>
                                <TextField
                                    onChange={handleChange}
                                    size="small"
                                    variant="outlined"
                                    fullWidth={true}
                                    required={true}
                                    margin="dense"
                                    value={first_name}
                                    placeholder="Enter first name"
                                    name="first_name"
                                    label="First Name"
                                    helperText={error.first_name}
                                    error={Boolean(error.first_name)}
                                />

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

                                <Typography variant="subtitle2">Mobile Number</Typography>
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    fullWidth={true}
                                    required={true}
                                    margin="dense"
                                    value={mobile_number}
                                    placeholder="Enter phone number (+233270048319)"
                                    name="mobile_number"
                                    label="Mobile Number"
                                    onChange={handleChange}
                                    helperText={error.mobile_number}
                                    error={Boolean(error.mobile_number)}
                                />


                                <Typography variant="subtitle2">Profession</Typography>
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    fullWidth={true}
                                    required={true}
                                    margin="dense"
                                    value={profession}
                                    placeholder="Enter profession"
                                    name="profession"
                                    label="Profession"
                                    onChange={handleChange}
                                    helperText={error.profession}
                                    error={Boolean(error.profession)}
                                />

                                <Typography variant="subtitle2">Community Name</Typography>
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    fullWidth={true}
                                    required={true}
                                    value={hometown_or_community_name}
                                    margin="dense"
                                    placeholder="Enter your community name"
                                    name="hometown_or_community_name"
                                    label="Community Name"
                                    onChange={handleChange}
                                    helperText={error.hometown_or_community_name}
                                    error={Boolean(error.hometown_or_community_name)}
                                />

                                <Typography variant="subtitle2">District</Typography>
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    fullWidth={true}
                                    required={true}
                                    margin="dense"
                                    value={district_assembly}
                                    placeholder="Enter your district name"
                                    name="district_assembly"
                                    label="District"
                                    onChange={handleChange}
                                    helperText={error.district_assembly}
                                    error={Boolean(error.district_assembly)}
                                />

                                <Typography variant="subtitle2">State</Typography>
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    fullWidth={true}
                                    required={true}
                                    margin="dense"
                                    value={state_or_region}
                                    placeholder="Enter your state or region"
                                    name="state_or_region"
                                    label="State"
                                    onChange={handleChange}
                                    helperText={error.state_or_region}
                                    error={Boolean(error.state_or_region)}
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
                                    onChange={handleConfirmPasswordChange}
                                    value={confirmPassword}
                                    placeholder="Confirm password"
                                    name="confirm_password"
                                    label="Confirm Password"
                                    helperText={error.confirm_password}
                                    error={Boolean(error.confirm_password)}
                                />

                                <Button
                                    onClick={handleSubmit}
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

const mapStateToProps = state => {
    return {
        loading: state.auth.loading
    }
}

export default connect(mapStateToProps) (SignUpPage);

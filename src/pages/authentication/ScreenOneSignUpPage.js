import React, {useState} from "react";
import {Grid, Card, CardContent, Typography, TextField, Button, Container, Select, MenuItem} from "@material-ui/core";
import "../../App.css";
import {makeStyles} from "@material-ui/styles";
import {connect, useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {updateUser} from "../redux/users/users-action-creators";

function ScreenOneSignUpPage({storedUser}) {

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

    const [user, setUser] = useState({...storedUser, "work_status": "EMPLOYED", "gender": "MALE"});
    const [error, setError] = useState({});

    const {
        first_name,
        email,
        mobile_number,
        profession,
        work_status,
        gender
    } = user;


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

        dispatch(updateUser(user, history, '/location'));
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

                                {/*{Working status}*/}

                                <div className="margin-bottom-small">
                                    <Typography gutterBottom={true} variant="subtitle2">Work Status</Typography>
                                    <Select
                                        margin="dense"
                                        fullWidth={true}
                                        variant="outlined"
                                        name="work_status"
                                        value={work_status}
                                        onChange={handleChange}>
                                        <MenuItem value="EMPLOYED">Gainfully Employed</MenuItem>
                                        <MenuItem value="UNEMPLOYED">Unemployed</MenuItem>
                                        <MenuItem value="SEARCHING">Searching for job</MenuItem>
                                    </Select>
                                </div>


                                <div className="margin-bottom-small">
                                    <Typography variant="subtitle2" gutterBottom={true}>Gender</Typography>
                                    <Select
                                        margin="dense"
                                        fullWidth={true}
                                        variant="outlined"
                                        name="gender"
                                        value={gender}
                                        onChange={handleChange}>
                                        <MenuItem value="MALE">Male</MenuItem>
                                        <MenuItem value="FEMALE">Female</MenuItem>
                                    </Select>
                                </div>
                                {/*{Gender}*/}

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


                                <Button
                                    onClick={handleSubmit}
                                    fullWidth={true}
                                    className={classes.button}
                                    size="large"
                                    variant="contained">
                                    Next
                                </Button>
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
        storedUser: state.user.user
    }
}

export default connect(mapStateToProps) (ScreenOneSignUpPage);

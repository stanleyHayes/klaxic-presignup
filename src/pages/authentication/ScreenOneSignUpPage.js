import React, {useState} from "react";
import {Grid, Card, CardContent, Typography, TextField, Button, Container, Select, MenuItem} from "@material-ui/core";
import "../../App.css";
import {makeStyles} from "@material-ui/styles";
import {connect, useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {updateUser} from "../redux/users/users-action-creators";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider , DatePicker} from '@material-ui/pickers';

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
        },
        input: {
            paddingTop: 8,
            paddingBottom: 8,
            borderRadius: 16
        }
    });
    const classes = useStyles();

    const [user, setUser] = useState({...storedUser, "gender": "MALE", date_of_birth: new Date()});
    const [error, setError] = useState({});

    const {
        first_name,
        nick_name,
        date_of_birth,
        gender,
        last_name
    } = user;

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!first_name) {
            setError({...error, first_name: "First name required"});
            return;
        } else {
            setError({...error, first_name: null});
        }

        if (!last_name) {
            setError({...error, last_name: "Last name required"});
            return;
        } else {
            setError({...error, last_name: null});
        }

        dispatch(updateUser(user, history, '/individual/location'));
    }

    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const handleDateChange = date_of_birth => {

        console.log(date_of_birth)
        setUser({...user, date_of_birth: date_of_birth})
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

                                <Typography variant="subtitle2">Surname</Typography>
                                <TextField
                                    onChange={handleChange}
                                    size="small"
                                    variant="outlined"
                                    fullWidth={true}
                                    required={true}
                                    margin="dense"
                                    value={last_name}
                                    placeholder="Enter surname"
                                    name="last_name"
                                    label="Surname"
                                    helperText={error.last_name}
                                    error={Boolean(error.last_name)}
                                />

                                <Typography variant="subtitle2">Nick Name</Typography>
                                <TextField
                                    onChange={handleChange}
                                    size="small"
                                    variant="outlined"
                                    fullWidth={true}
                                    required={true}
                                    margin="dense"
                                    value={nick_name}
                                    placeholder="Enter nickname"
                                    name="nick_name"
                                    label="Nick Name"
                                />

                                {/*{Gender}*/}


                                {/*{Working status}*/}

                                {/*<div className="margin-bottom-small">*/}
                                {/*    <Typography gutterBottom={true} variant="subtitle2">Work Status</Typography>*/}
                                {/*    <Select*/}
                                {/*        margin="dense"*/}
                                {/*        fullWidth={true}*/}
                                {/*        variant="outlined"*/}
                                {/*        name="work_status"*/}
                                {/*        value={work_status}*/}
                                {/*        onChange={handleChange}>*/}
                                {/*        <MenuItem value="EMPLOYED">Gainfully Employed</MenuItem>*/}
                                {/*        <MenuItem value="UNEMPLOYED">Unemployed</MenuItem>*/}
                                {/*        <MenuItem value="SEARCHING">Searching for job</MenuItem>*/}
                                {/*    </Select>*/}
                                {/*</div>*/}


                                <div>
                                    <Typography variant="subtitle2" gutterBottom={true}>Date of birth</Typography>

                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <DatePicker
                                            format="dd/MMM/yyyy"
                                            inputVariant="outlined"
                                            placeholder="Date of Birth"
                                            fullWidth={true}
                                            margin="dense"
                                            name="date_of_birth"
                                            value={date_of_birth}
                                            onChange={handleDateChange}
                                            maxDate={new Date()}
                                        />
                                    </MuiPickersUtilsProvider>
                                </div>

                                <div className="margin-bottom-small">
                                    <Typography variant="subtitle2" gutterBottom={true}>Gender Type</Typography>
                                    <Select
                                        margin="dense"
                                        fullWidth={true}
                                        variant="outlined"
                                        name="gender"
                                        value={gender}
                                        onChange={handleChange}>
                                        <MenuItem value="MALE">Male</MenuItem>
                                        <MenuItem value="FEMALE">Female</MenuItem>
                                        <MenuItem value="TRANSGENDER_MALE">Transgender Male</MenuItem>
                                        <MenuItem value="TRANSGENDER_FEMALE">Transgender Female</MenuItem>
                                    </Select>
                                </div>

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

export default connect(mapStateToProps)(ScreenOneSignUpPage);

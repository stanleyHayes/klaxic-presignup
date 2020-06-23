import React, {useState} from "react";
import {Grid, Card, CardContent, Typography, TextField, Button, Container, Select, MenuItem} from "@material-ui/core";
import "../../App.css";
import {makeStyles} from "@material-ui/styles";
import {connect, useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {updateUser} from "../redux/users/users-action-creators";
import countryList from "react-select-country-list";


function ScreenTwoSignUpPage({storedUser}) {

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

    const [countries] = useState(countryList().getData());
    const [user, setUser] = useState({...storedUser, nationality: ""});
    const [error, setError] = useState({});

    const {
        nationality,
        hometown_or_community_name,
        district_assembly,
        state_or_region,
        zipcode
    } = user;


    const handleSubmit = (event) => {
        event.preventDefault();

        if (!zipcode) {
            setError({...error, zipcode: "Zipcode required"});
            return;
        } else {
            setError({...error, zipcode: ""});
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

        if (!nationality) {
            setError({...error, nationality: "Country required"});
            return;
        } else {
            setError({...error, nationality: ""});
        }

        dispatch(updateUser(user, history, '/account'));
    }

    const handlePrevious = event => {
        event.preventDefault();
        history.push('/');
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

                                <Typography variant="subtitle2">Municipal/District/LGA</Typography>
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    fullWidth={true}
                                    required={true}
                                    margin="dense"
                                    value={district_assembly}
                                    placeholder="Enter your district name"
                                    name="district_assembly"
                                    label="Municipal/District/LGA"
                                    onChange={handleChange}
                                    helperText={error.district_assembly}
                                    error={Boolean(error.district_assembly)}
                                />

                                <Typography variant="subtitle2">Zipcode</Typography>
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    fullWidth={true}
                                    required={true}
                                    margin="dense"
                                    value={zipcode}
                                    placeholder="Enter your zipcode"
                                    name="zipcode"
                                    label="Zipcode"
                                    onChange={handleChange}
                                    helperText={error.zipcode}
                                    error={Boolean(error.zipcode)}
                                />

                                <Typography variant="subtitle2">State/Region/Province</Typography>
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


                                <Typography variant="subtitle2">Country</Typography>
                                <Select
                                    name="nationality"
                                    fullWidth={true}
                                    variant="outlined"
                                    margin="dense"
                                    onChange={handleChange}>
                                    {
                                        (countries.map((country) => {
                                            return (
                                                <MenuItem
                                                    key={country.label}
                                                    value={country.value}>
                                                    {country.label}
                                                </MenuItem>
                                            )
                                        }))
                                    }
                                </Select>

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
                                            variant="contained">Next</Button>
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
        storedUser: state.user.user
    }
}


export default connect(mapStateToProps)(ScreenTwoSignUpPage);

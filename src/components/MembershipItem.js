import React from "react";
import {
    CardContent,
    Card,
    CardActions,
    Divider,
    Typography,
    List,
    ListItem,
    ListItemText,
    Button
} from "@material-ui/core";
import {ArrowRight} from "@material-ui/icons";

function MembershipItem({type, fee, benefits, handleSelectedPlan}) {

    const handleClick = () => {
        handleSelectedPlan({type, fee, benefits});
    }

    return (
        <Card variant="elevation" elevation={1} raised={true}>
            <CardContent>
                <Typography align="center" variant="h2">{type}</Typography>
                <Typography align="center" gutterBottom={true} variant="subtitle1">Membership</Typography>
                <Divider variant="middle"/>
                <Typography align="center" gutterBottom={true} variant="h6">Entrance fee ${fee}</Typography>
                <Divider variant="middle"/>
                <List>
                    {benefits.map((benefit, index) => {
                        return (
                            <ListItem divider={index !== benefits.length - 1} key={index} dense={true}>
                                <ListItemText primary={benefit.title} secondary={`$ ${benefit.amount}`}/>
                            </ListItem>
                        )
                    })}
                </List>
            </CardContent>
            <Divider variant="fullWidth"/>
            <CardActions>
                <Button variant="text" size="large" fullWidth={true} endIcon={<ArrowRight/>}>Learn more</Button>
            </CardActions>
            <Divider variant="fullWidth"/>
            <CardActions>
                <Button onClick={handleClick} variant="outlined" size="large" fullWidth={true} endIcon={<ArrowRight/>}>Select Plan</Button>
            </CardActions>
        </Card>
    )
}

export default MembershipItem;

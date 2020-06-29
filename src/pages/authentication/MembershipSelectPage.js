import React, {useState} from "react";
import "../../App.css";
import {Container, Typography, Grid, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import MembershipItem from "../../components/MembershipItem";

function MembershipSelectPage() {

    const [selectedPlan, setSelectedPlan] = useState();

    const handleSelectedPlan = plan => {
        setSelectedPlan(plan);
    }

    const membershipTypes = [
        {
            fee: 5,
            type: "Zinc",
            benefits: [
                {
                    title: "Monthly Salary",
                    amount: 20
                },
                {
                    title: "Legal Aid/ Grant",
                    amount: 20
                },
                {
                    title: "Interest Free Loans",
                    amount: 20
                },
                {
                    title: "Housing / Rent Grant",
                    amount: 20
                },
                {
                    title: "Transport / Fuel Grant",
                    amount: 20
                },
                {
                    title: "M-Weekly Feeding Grant",
                    amount: 20
                },
                {
                    title: "Clothing & C-Regalia Grant",
                    amount: 20
                },
                {
                    title: "Data & Communication Grant",
                    amount: 20
                },
                {
                    title: "Life & Health Insurance Grants",
                    amount: 20
                },
                {
                    title: "Community Development Grant",
                    amount: 20
                }
            ]
        },
        {
            fee: 10,
            type: "Bronze",
            benefits: [
                {
                    title: "Monthly Salary",
                    amount: 20
                },
                {
                    title: "Legal Aid/ Grant",
                    amount: 20
                },
                {
                    title: "Interest Free Loans",
                    amount: 20
                },
                {
                    title: "Housing / Rent Grant",
                    amount: 20
                },
                {
                    title: "Transport / Fuel Grant",
                    amount: 20
                },
                {
                    title: "M-Weekly Feeding Grant",
                    amount: 20
                },
                {
                    title: "Clothing & C-Regalia Grant",
                    amount: 20
                },
                {
                    title: "Data & Communication Grant",
                    amount: 20
                },
                {
                    title: "Life & Health Insurance Grants",
                    amount: 20
                },
                {
                    title: "Community Development Grant",
                    amount: 20
                }
            ]
        },
        {
            fee: 20,
            type: "Silver",
            benefits: [
                {
                    title: "Monthly Salary",
                    amount: 20
                },
                {
                    title: "Legal Aid/ Grant",
                    amount: 20
                },
                {
                    title: "Interest Free Loans",
                    amount: 20
                },
                {
                    title: "Housing / Rent Grant",
                    amount: 20
                },
                {
                    title: "Transport / Fuel Grant",
                    amount: 20
                },
                {
                    title: "M-Weekly Feeding Grant",
                    amount: 20
                },
                {
                    title: "Clothing & C-Regalia Grant",
                    amount: 20
                },
                {
                    title: "Data & Communication Grant",
                    amount: 20
                },
                {
                    title: "Life & Health Insurance Grants",
                    amount: 20
                },
                {
                    title: "Community Development Grant",
                    amount: 20
                }
            ]
        },
        {
            fee: 40,
            type: "Gold",
            benefits: [
                {
                    title: "Monthly Salary",
                    amount: 20
                },
                {
                    title: "Legal Aid/ Grant",
                    amount: 20
                },
                {
                    title: "Interest Free Loans",
                    amount: 20
                },
                {
                    title: "Housing / Rent Grant",
                    amount: 20
                },
                {
                    title: "Transport / Fuel Grant",
                    amount: 20
                },
                {
                    title: "M-Weekly Feeding Grant",
                    amount: 20
                },
                {
                    title: "Clothing & C-Regalia Grant",
                    amount: 20
                },
                {
                    title: "Data & Communication Grant",
                    amount: 20
                },
                {
                    title: "Life & Health Insurance Grants",
                    amount: 20
                },
                {
                    title: "Community Development Grant",
                    amount: 20
                }
            ]
        },
        {
            fee: 40,
            type: "Platinum",
            benefits: [
                {
                    title: "Monthly Salary",
                    amount: 20
                },
                {
                    title: "Legal Aid/ Grant",
                    amount: 20
                },
                {
                    title: "Interest Free Loans",
                    amount: 20
                },
                {
                    title: "Housing / Rent Grant",
                    amount: 20
                },
                {
                    title: "Transport / Fuel Grant",
                    amount: 20
                },
                {
                    title: "M-Weekly Feeding Grant",
                    amount: 20
                },
                {
                    title: "Clothing & C-Regalia Grant",
                    amount: 20
                },
                {
                    title: "Data & Communication Grant",
                    amount: 20
                },
                {
                    title: "Life & Health Insurance Grants",
                    amount: 20
                },
                {
                    title: "Community Development Grant",
                    amount: 20
                }
            ]
        },
        {
            fee: 60,
            type: "Diamond",
            benefits: [
                {
                    title: "Monthly Salary",
                    amount: 20
                },
                {
                    title: "Legal Aid/ Grant",
                    amount: 20
                },
                {
                    title: "Interest Free Loans",
                    amount: 20
                },
                {
                    title: "Housing / Rent Grant",
                    amount: 20
                },
                {
                    title: "Transport / Fuel Grant",
                    amount: 20
                },
                {
                    title: "M-Weekly Feeding Grant",
                    amount: 20
                },
                {
                    title: "Clothing & C-Regalia Grant",
                    amount: 20
                },
                {
                    title: "Data & Communication Grant",
                    amount: 20
                },
                {
                    title: "Life & Health Insurance Grants",
                    amount: 20
                },
                {
                    title: "Community Development Grant",
                    amount: 20
                }
            ]
        },
        {
            fee: 80,
            type: "Royal",
            benefits: [
                {
                    title: "Monthly Salary",
                    amount: 20
                },
                {
                    title: "Legal Aid/ Grant",
                    amount: 20
                },
                {
                    title: "Interest Free Loans",
                    amount: 20
                },
                {
                    title: "Housing / Rent Grant",
                    amount: 20
                },
                {
                    title: "Transport / Fuel Grant",
                    amount: 20
                },
                {
                    title: "M-Weekly Feeding Grant",
                    amount: 20
                },
                {
                    title: "Clothing & C-Regalia Grant",
                    amount: 20
                },
                {
                    title: "Data & Communication Grant",
                    amount: 20
                },
                {
                    title: "Life & Health Insurance Grants",
                    amount: 20
                },
                {
                    title: "Community Development Grant",
                    amount: 20
                }
            ]
        },
        {
            fee: 100,
            type: "Supreme",
            benefits: [
                {
                    title: "Monthly Salary",
                    amount: 20
                },
                {
                    title: "Legal Aid/ Grant",
                    amount: 20
                },
                {
                    title: "Interest Free Loans",
                    amount: 20
                },
                {
                    title: "Housing / Rent Grant",
                    amount: 20
                },
                {
                    title: "Transport / Fuel Grant",
                    amount: 20
                },
                {
                    title: "M-Weekly Feeding Grant",
                    amount: 20
                },
                {
                    title: "Clothing & C-Regalia Grant",
                    amount: 20
                },
                {
                    title: "Data & Communication Grant",
                    amount: 20
                },
                {
                    title: "Life & Health Insurance Grants",
                    amount: 20
                },
                {
                    title: "Community Development Grant",
                    amount: 20
                }
            ]
        }
    ];


    const useStyles = makeStyles({

        mainText: {
            color: "white",
            fontWeight: 300
        },
        secondaryText: {
            color: "#cccccc"
        },
        button: {
            paddingTop: 16,
            paddingBottom: 16,
            color: "white",
            marginTop: 16
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

    console.log(selectedPlan);

    return (
        <div className="container padding-vertical-huge">
            <Container>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/background.jpg`} alt="Membership" className="responsive-img"/>
                </div>
                <div className={"margin-top-medium"}>
                    <Typography className={classes.mainText} gutterBottom={true} variant="h3" align="center">
                        KlaxicClub4u Membership
                    </Typography>
                    <Typography
                        className={classes.secondaryText}
                        gutterBottom={true}
                        variant="subtitle1">
                        Our Membership is open to all and you must be endorsed by a Klaxican in your Community. If there
                        isn’t a Klaxican in your Community and wish to start Club Unit in your Community then please
                        click on Klaxican Application to start your Membership Interview now, but remember your
                        membership is subjected to approval.
                    </Typography>

                    <Typography
                        className={classes.secondaryText}
                        gutterBottom={true}
                        variant="subtitle1">
                        We encourage participation from all who seek a to support Klaxic Community Development Agenda /
                        Initiative and want to be part of our trained Community Change Makers Professionals (CCM
                        Professionals) regardless of religious background, race, ethnicity, gender, socioeconomic
                        status, ability, age, sexual orientation and gender identity.
                    </Typography>
                </div>

                <div className={"margin-top-medium"}>
                    <Typography
                        gutterBottom={true}
                        className={classes.secondaryText}
                        variant="subtitle2"
                        align="center">
                        Selected Plan
                    </Typography>
                    {selectedPlan ? (
                        <div>
                            <Typography
                                className={classes.mainText}
                                variant="h2"
                                align="center">
                                {selectedPlan.type}
                            </Typography>
                            <Typography
                                className={classes.secondaryText}
                                variant="h6"
                                align="center">
                                Great choice Stanley your {selectedPlan.type} Membership in KlaxicClub4u, would cost you
                                $ {selectedPlan.fee} Monthly and shall be taken from your KlaxicSuvey wallet at the nd of every Month of the Gregoria calendar
                            </Typography>
                            <Button variant="outlined" size="large" className={classes.button}>Proceed</Button>
                        </div>
                    ) : (
                        <div>
                            <Typography
                                className={classes.secondaryText}
                                variant="h6"
                                align="center">
                                No selected plan
                            </Typography>
                        </div>
                    )}
                </div>

                <div className={"margin-top-medium"}>
                    <Grid container={true} justify="center" spacing={3}>
                        {
                            membershipTypes.map((membershipType, index) => {
                                return (
                                    <Grid item={true} xs={12} md={6} lg={4} key={index}>
                                        <MembershipItem
                                            handleSelectedPlan={handleSelectedPlan}
                                            type={membershipType.type}
                                            benefits={membershipType.benefits}
                                            fee={membershipType.fee}/>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </div>
            </Container>
        </div>
    )
}

export default MembershipSelectPage;

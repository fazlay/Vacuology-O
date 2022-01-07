import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Paper,
    Skeleton,
    Typography,
} from "@mui/material";
import { propsToClassKey } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";

const CardSkeleton = () => {

    return (
        <>
            <Grid item xs={12} sm={4}>
                <Paper elevation={0} sx={{ m: 3 }}>



                    <Skeleton variant="rectangular" width={210} height={118} />

                    <Skeleton variant="h5" animation="wave" />
                    <Skeleton variant="h6" animation="wave" />
                    <Skeleton variant="body2" animation="wave" />






                </Paper>
            </Grid>
        </>
    );
};

export default CardSkeleton;

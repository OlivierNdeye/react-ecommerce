import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Cart from "./Cart"

const Header = () => {
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
            <Typography variant='h3'>
                Dio Shopping
            </Typography>
            <Link to="/">
                <Button color="primary">Home</Button>
            </Link>
            <Link to="/contato">
                <Button color="primary">Contato</Button>
            </Link>
            <Cart />   

            
        </Grid>
    )
}

    
export default Header
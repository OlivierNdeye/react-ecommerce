import { Grid, Typography } from "@mui/material";
import { Paper, Button} from "@mui/material";
import { makeStyles } from "@mui/styles"
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import cartActions from "./store/actions/cart";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center'
  },
}));


const Card = (name, price, image, children, product) => {
  const classes = useStyles();
  const cart = useSelector(state => state.cart.value)
  const dispatch = useDispatch();
  
 
  return(
    <Grid item xs={3}>
        <Paper className={classes.paper}>
            <Grid container direction='column'>
                <Grid item>
                <img width="140px" src={product.image} alt={product.name_product}/>
                <Typography variant='h6'>
                    {children}
                </Typography>
                <Typography variant='subtitle1'>
                    R$ {product.price.toFixed(2)}
                </Typography>
                </Grid>
            
            <Button 
                variant="contained"
                onClick={()=>dispatch(cartActions.Add(cart, product))}
            >
                Adicionar
            </Button>
            </Grid>
        </Paper>
    </Grid>
)
}

export default Card;
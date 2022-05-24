import React from "react";
import { connect } from "react-redux";
import { Paper, Grid, Typography, List } from '@mui/material';
import { makeStyles } from "@mui/styles";
import Item from '../components/Item'
import Card from "../components/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '5px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center'
  },
}));

const HomePage = ({ products }) => {
  const classes = useStyles();

  const categorys = products.map(
    category => {
      const container = { }
      container['id'] = category.id_categorys;
      container['name'] = category.name_categorys;

      return container
    }
  )

  console.log(categorys)

return ( 
      <Grid>
        <Grid container spacing={3} className={classes.root}>
              <Grid item xs={3}>
                <Paper
                 className={classes.paper}>
                  <Typography variant='h5'>
                    Categorias
                  </Typography>
                  <List>

                  {categorys.map(
                    category => {
                      return( 
                            <Item
                              key = {category.id}
                              name = {category.name}

                            />
                      )
                    }
                  )}
                        <Item
                          ItemName="Times Nacionais"
                          ItemDetails="3"
                        />
                      <Item 
                          ItemName="Times Internacionais"
                          ItemDetails="4"
                        />
                        <Item 
                          ItemName="Times Históricos"
                          ItemDetails="5"
                        />
                  </List>
                </Paper>
              </Grid>
          </Grid>
          <Grid container xs={9} spacing={3} className={classes.root}>
                  {products.map(item => {
                    return(
                      <Card key={item.id_product} name={item.name} price={item.price} image={item.image}>
                        {item.name_product} 
                      </Card> 
                    )
              })}

          </Grid>
      </Grid>
   )
}

const mapStateToProps = state => ({
  products: state.products
})

export default connect(mapStateToProps)(HomePage)
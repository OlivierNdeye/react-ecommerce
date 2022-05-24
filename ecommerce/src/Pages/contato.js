import React from 'react';
import { Grid, Button, TextField } from '@mui/material';

const Contatos = (props) => {

  return (
    <>
      <div className="col-sm-12 col-xl-6 mt-1">
        <a href={props.url} role="button" className="btn btn-primary btn-lg btn-block"
            target="_blank" rel="noreferrer">
                <img src={props.img}/> {props.children}
        </a>
      </div>
    </>
  )
}

export default Contatos
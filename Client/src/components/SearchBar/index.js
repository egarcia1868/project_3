import React from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

function SearchBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <Paper className={classes.paper}>Search BoardGameGeeks</Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.paper}>Search My List</Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.paper}>Search Friends List</Paper>
            </Grid>
        </Grid>
        </div>
    )
}

export default SearchBar;
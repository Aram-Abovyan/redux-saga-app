import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);
  const url = 'https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=';

  const handleClick = (categoryId) => () => {
    dispatch({
      
      type: 'IMAGES_ADDED_ASYNC',
      payload: {
        id: categoryId,
        url: url + categoryId,
      }
    
    });

    dispatch({
      type: 'CURRENT_CATEGORY_ADDED',
      payload: {id: categoryId},
    })
  }

  useEffect(() => {
    dispatch({type: 'CATEGORIES_ADDED_ASYNC'})
  }, []);

  const categoryList = categories.map(({ id, name }) => (
    <Grid
      item
      xs={12}
      key={id}
    >
      <Button
        color="inherit"
        onClick={handleClick(id)}
      >
        {name}
      </Button>
    </Grid>
  ));

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Grid
          container
          justify="center"
          spacing={1}
        >
          <Toolbar>
            {categoryList}
          </Toolbar>
        </Grid>
      </AppBar>
    </div>
  );
}

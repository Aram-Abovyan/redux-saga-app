import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from './Button';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { IMAGES_URL } from '../api/urls';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
  },
}));

export default function ImageList() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const url = IMAGES_URL;
  const images = useSelector(state => state.images);
  const currentCategoryId = useSelector(state => state.currentCategory.id);

  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
    dispatch({
      type: 'MORE_IMAGES_ADDED_ASYNC',
      payload: {
        url: url + currentCategoryId,
      },
    });
  };

  useEffect(() => {
    dispatch({
      type: 'IMAGES_ADDED_ASYNC',
      payload: {
        id: currentCategoryId,
        url: url + currentCategoryId,
      }
    });
  }, []);

  return (
    <>
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {images.map((image) => (
            <GridListTile key={uuidv4()} cols={1}>
              <img src={image.url} alt={image.url} />
            </GridListTile>
          ))}
        </GridList>
      </div>
      <Button
        toggle={toggle}
        onClick={handleClick}
      >
        More
      </Button>
    </>
  );
}

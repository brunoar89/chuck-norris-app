import React, { useEffect } from 'react';
import { fetchCategory } from 'store/category/actions';
import { push } from 'connected-react-router';
import { useSelector, useDispatch } from 'react-redux';
import {
  Avatar,
  CircularProgress,
  Container,
  CssBaseline,
  IconButton,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import RefreshIcon from '@material-ui/icons/Refresh';
import makeStyles from './style';

const Category = ({ match }) => {
  const classes = makeStyles();

  const { params } = match;

  const [category, loading] = useSelector(state => [
    state.category.find,
    state.category.loading,
  ])

  const on = useDispatch();

  useEffect(() => {
    on(fetchCategory({ category: params.category }));
  }, [on, params.category]);

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar
          src="https://www.pngitem.com/pimgs/m/157-1579721_chuck-norris-by-chuck-norris-hd-png-download.png"
          className={classes.avatar} 
        />
        <IconButton onClick={() => on(push('/'))}>
          <HomeIcon fontSize="large" />
        </IconButton>
        <blockquote className={classes.blockquote}>
          { loading ? <CircularProgress color="inherit" /> : category.value}
        </blockquote>
        <IconButton onClick={() => on(fetchCategory(params.category))}>
          <RefreshIcon fontSize="large" />
        </IconButton>
      </div>
    </Container>
  );
};

export default Category;

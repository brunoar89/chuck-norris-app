import React, { useEffect } from 'react';
import { fetchCategories } from 'store/category/actions';
import { push } from 'connected-react-router';
import { useSelector, useDispatch } from 'react-redux';
import {
  Avatar,
  Box,
  Chip,
  CircularProgress,
  Container,
  CssBaseline,
  Typography,
} from '@material-ui/core';
import makeStyles from './style';

const Home = () => {
  const classes = makeStyles();

  const [categories, loading] = useSelector(state => [
    state.category.collection,
    state.category.loading,
  ])

  const on = useDispatch();

  useEffect(() => {
    on(fetchCategories());
  }, [on]);

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar
          src="https://www.pngitem.com/pimgs/m/157-1579721_chuck-norris-by-chuck-norris-hd-png-download.png"
          className={classes.avatar} 
        />
        <Typography variant="h4" align="center" gutterBottom>
          É o ser mais cabra-macho de todas as <strike>galáxias</strike> multirealidades já criadas.
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Para cada categoria uma revelação, clique e descubra!
        </Typography>
        {
          loading
            ? <CircularProgress color="inherit" />
            : (
              <Box width="100%" align="center">
                {categories.map(category => (
                  <Chip
                    label={category}
                    className={classes.chip}
                    key={category}
                    onClick={() => on(push(`/random/${category}`))}
                  />
                ))}
              </Box>
          )
        }
      </div>
    </Container>
  );
};

export default Home;

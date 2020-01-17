import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    height: 200,
    marginBottom: 16,
    width: 200,
  },
  chip: {
    marginRight: 8,
    marginBottom: 8,
  }
}));
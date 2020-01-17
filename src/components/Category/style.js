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
  blockquote: {
    fontSize: '1.4em',
    fontStyle: 'italic',
    color: '#383133',
    padding: '1.2em 30px 1.2em 75px',
    borderLeft: '8px solid #393133',
    lineHeight: 1.6,
    position: 'relative',
    background: '#f7f7f7',
    '&::before': {
      content: '"\\201C"',
      color: '#383133',
      fontSize: '4em',
      position: 'absolute',
      left: 10,
      top: -10,
    },
    '&::after': {
      content: '',
    },
  },
}));


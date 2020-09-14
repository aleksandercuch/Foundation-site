import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  navLink: {
    textDecoration: false,
  },
  contactImage: {
    minWidth:360,
  },
  large: {
    margin: 20,
    width: 70,
    height: 70,
  },
  popover: {
		pointerEvents: 'none',
	},
	paper: {
		padding: 2,
	},
});

export default useStyles;

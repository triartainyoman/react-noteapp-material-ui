import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";

const Create = () => {
  const useStyles = makeStyles({
    btn: {
      fontSize: 60,
      backgroundColor: "violet",
      "&:hover": {
        backgroundColor: "blue",
      },
    },
    title: {
      textDecoration: "underline",
    },
  });

  const classes = useStyles();

  return (
    <Container>
      <Typography
        className={classes.title}
        color="textSecondary"
        variant="h6"
        component="h2"
        noWrap
        gutterBottom
      >
        Crate a New Note
      </Typography>

      <Button
        className={classes.btn}
        type="submit"
        color="secondary"
        variant="contained"
        disableElevation
        // startIcon={<SendIcon />}
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
    </Container>
  );
};

export default Create;

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import SendIcon from "@material-ui/icons/Send";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const Create = () => {
  return (
    <Container>
      {/* <Typography variant="h1" color="primary" align="center">
        Create a New Note
      </Typography> */}

      <Typography
        color="textSecondary"
        variant="h6"
        component="h2"
        noWrap
        gutterBottom
      >
        Crate a New Note
      </Typography>

      <Button
        onClick={() => {
          console.log("You Clicked");
        }}
        type="submit"
        color="secondary"
        variant="contained"
        disableElevation
        // startIcon={<SendIcon />}
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>

      {/* <br />
      <AcUnitIcon />
      <AcUnitIcon color="secondary" fontSize="large" />
      <AcUnitIcon color="secondary" fontSize="small" />
      <AcUnitIcon color="action" fontSize="small" />
      <AcUnitIcon color="error" fontSize="small" />
      <AcUnitIcon color="disabled" fontSize="small" /> */}
    </Container>
  );
};

export default Create;

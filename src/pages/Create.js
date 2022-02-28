import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

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
      >
        Submit
      </Button>

      {/* <Button type="submit" disableElevation>
        Submit
      </Button>
      <Button type="submit" variant="outlined" disableElevation>
        Submit
      </Button>

      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}
    </Container>
  );
};

export default Create;

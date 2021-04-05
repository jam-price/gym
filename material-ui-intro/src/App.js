import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";

// material ui dependencies
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  TextField,
  makeStyles,
  ThemeProvider,
  createMuiTheme,
  Typography,
  Container,
  Paper,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  
} from "@material-ui/core";
import { orange, purple } from "@material-ui/core/colors";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import MenuIcon from "@material-ui/icons/Menu";
import "fontsource-roboto";

// vars
// Makes style objects that you can apply to specific elements
const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #333, #999)",
    border: 0,
    borderRadius: 15,
    color: "white",
    padding: "0 30px",
  },
});

// Creates an overall theme that can be applied to the app of individual elements
const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 40,
    },
  },
  palette: {
    primary: {
      main: purple[400],
    },
    secondary: {
      main: orange[200],
    },
  },
});

// components
// Creates a new component that is styled according to the above style vars. You could make the text dynamic in this function
function ButtonStyled() {
  const classes = useStyles();

  return <Button className={classes.root}>This is the styled Button</Button>;
}

// Example of a stateful function component that stores whether a checkbox is checked or not
function CheckboxExample() {
  const [checked, setChecked] = useState(true);
  console.log(checked);

  return (
    <div>
    {/* Form control adds a label to the form */}
      <FormControlLabel
      // Control prop specifies what control element to be rendered i.e. Radio/Switch/Checkbox
        control={
          <Checkbox
            checked={checked}
            // You can set the standard icon and the icon when checked to different things
            icon={<DeleteIcon />}
            checkedIcon={<SaveIcon />}
            // sets state to true or false by targeting the event elements checked key pairing value
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
          />
        }
        label="Testing Checkbox"
      />
    </div>
  );
}

function App() {
  return (
    // Theme container adds theme to whatever it encapsulates based on the useStyle/makeStyle pattern above
    <ThemeProvider theme={theme}>
    {/* Container provides sizing for you whole app */}
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
          <AppBar color='primary'>
            <Toolbar>
              <IconButton>
              <MenuIcon/>
              </IconButton>
              <Typography variant='h6'>
                MUI Theming
              </Typography>
              <Button>
                Log In
              </Button>
            </Toolbar>
          </AppBar>
          {/* Typography allows you to add specific type styles to indvidual elements. You can specify what type of element you want the Div/container to be */}
            <Typography variant="h2" component='div'>Welcome to my app!</Typography>
            <Typography variant="body1">
              Learning how to use Material-ui
            </Typography>
            <ButtonStyled>A change</ButtonStyled>
            <TextField
              id="text-input"
              variant="outlined"
              color="secondary"
              type="email"
              label="Email"
              placeholder="something@email.com"
            />
            {/* Grid container with Grid items inside which can hold various Papers */}
            <Grid style={{paddingTop: 100}} container spacing={3} justify='center'>
            {/* Responsive design with max 12 columns
              The below will be 12 columns wide with 100% width when xs size and 6 when md size */}
              <Grid item xs={12} md={6}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
              <Grid item>
              {/* Papers are similar to Cards? */}
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
            </Grid>

            <CheckboxExample />
            {/* A group of buttons... could be used for Navs or other linked buttons */}
            <ButtonGroup variant="outlined">
              <Button endIcon={<SaveIcon />} color="secondary">
                This is a nice button
              </Button>
              <Button endIcon={<DeleteIcon />} color="primary">
                Delete
              </Button>
            </ButtonGroup>

            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;

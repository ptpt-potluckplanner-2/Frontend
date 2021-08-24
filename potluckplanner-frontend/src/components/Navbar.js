import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
// import { axiosWithAuth } from "../utils/axiosWithAuth";




const useStyles = makeStyles(theme => ({
    "@global": {
      body: {
        backgroundColor: theme.palette.common.white
      }
    },
    appBar: {
      borderBottom: `2px solid black`,
      backgroundImage: `url(https://lightspree-houston.imgix.net/2018/11/Banner_Thanksgiving-Potluck.jpg?auto=compress&fit=crop&fm=pjpg&h=400&ixlib=php-3.3.0&q=85&w=2000&wpsize=header-image-fh&s=a01878068e5dbaceedda24f48a1026c4)`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`
    },
    toolbarTitle: {
      flexGrow: 1,
      fontWeight: 900,
      color: "#333453"
    },
    link: {
      margin: theme.spacing(6, 1.5)
    }
  }));


  

export default function Navbar(props) {
  const classes = useStyles();

  const {push} = useHistory();

  
//   const logout = e => {
//     e.preventDefault();

//     axiosWithAuth().get(``)
//       .then(res => {
//         console.log(res.data);
//         push("/login");
//       })
//       .catch(err => console.error("Could not Logout: ", err.message));
//   }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          ></Typography>
          <nav>
              <RouterLink style={{ textDecoration: "none" }} to="/signup">
                <Button
                  href="#"
                  color="primary"
                  variant="contained"
                  className={classes.link}
                >
                  Sign Up
                </Button>
              </RouterLink>
              <RouterLink style={{ textDecoration: "none" }} to="/login">
                <Button
                  href="#"
                  color="primary"
                  variant="contained"
                  className={classes.link}
                >
                  Login
                </Button>
              {/* <RouterLink style={{ textDecoration: "none"}} to="/login" >
                <Button onClick={logout} href="#" color="primary" variant="contained" className={classes.link}>
                  Logout
                </Button>
              </RouterLink> */}
              </RouterLink> 
              <RouterLink style={{ textDecoration: "none" }} to="/about">
                <Button
                  href="#"
                  color="primary"
                  variant="contained"
                  className={classes.link}
                >
                  About
                </Button>
                </RouterLink>
                <RouterLink style={{ textDecoration: "none" }} to="/itemlist">
                <Button
                  href="#"
                  color="primary"
                  variant="contained"
                  className={classes.link}
                >
                  Products
                </Button>
              </RouterLink>
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
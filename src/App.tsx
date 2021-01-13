import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Publication from './Publication'
import ClipboardJS from "clipboard"
import { createStyles, makeStyles, Theme, useTheme, Avatar } from '@material-ui/core'

import News from "./News"
import About from "./About"
import Masthead from "./Masthead"

new ClipboardJS('.btn')

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://m-yaghini.github.io/">
        Mohammad Yaghini
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    avatar: {
      "&.MuiAvatar-root": {
        height: "auto",
        width: theme.spacing(20),
        // paddingTop: "10px"
      },
    },
    large: {
      width: theme.spacing(12),
      // height: theme.spacing(7),
    }
  }));

export default function App() {
  const theme = useTheme()
  const classes = useStyles()

  return (
    <Container maxWidth="md">
      <Masthead />
      <Grid container direction="row" spacing={1}>
        <Grid item container direction="row" spacing={3}>
          <Grid item xs={12} sm={8}>
            <About />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              News
            </Typography>
            <News />
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h4" component="h1" gutterBottom>
            Pre-prints
          </Typography>
          <Grid container
            direction="column">
            <Grid item>
              <Publication bibkey={"disp-vuln"} />
              <Publication bibkey={"human"} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h4" component="h1" gutterBottom>
            Publications
          </Typography>
          <Grid container
            direction="column">
            <Grid item>
              <Publication bibkey={"non-discr"} />
              <Publication bibkey={"energy-aware"} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Copyright />
    </Container >

  );
}
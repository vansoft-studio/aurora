/* This is Table MenuBar  */
/* importing menubar icons and tools */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import NavigationIcon from '@material-ui/icons/Navigation'
import MenuIcon from '@material-ui/icons/Menu'
import { Grid } from '@material-ui/core'
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  icon: {
    margin: theme.spacing(2)
  },
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  chip: {
    margin: theme.spacing(1)
  }
}))
/* function call Button AppBar */
export default function MenuBar () {
  const classes = useStyles()
  return (
    <Grid className={classes.root}>
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='Menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h8' className={classes.title}>
            Employee
          </Typography>
          <Fab color='primary' aria-label='Add' size='small' className={classes.fab}>
            <AddIcon />
          </Fab>
          <Fab color='secondary' aria-label='Edit' size='small' className={classes.fab}>
            <i class='material-icons'>edit</i>
          </Fab>
          <Fab variant='extended' aria-label='Delete' size='small' className={classes.fab}>
            <NavigationIcon className={classes.extendedIcon} />
            Extended
          </Fab>
          <Fab disabled aria-label='Delete' fontSize='small' className={classes.fab}>
            <DeleteIcon />
          </Fab>
        </Toolbar>
      </AppBar>
    </Grid>
  )
}

import React from "react";
// import Autocomplete from "@react-google-maps/api/src/components/places/Autocomplete";
import {AppBar, Toolbar, Typography, InputBase, Box} from "@material-ui/core";
import {Search } from  '@material-ui/icons'
import useStyles from './styles'
const Header = () => {
    const classes=useStyles()
    return (
        <div>
            <AppBar position={"static"}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h5" className={classes.title}>
                        Houssam Guide Travel
                    </Typography>
                    <Box display={'flex'}>
                        <Typography variant="h6" className={classes.title}>
                            Explore New Places
                        </Typography>
                        {/*<Autocomplete>*/}
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <Search/>
                                    <InputBase placeholder={'Search...'} classes={{root:classes.inputRoot,input:classes.inputInput}}/>

                                </div>
                            </div>
                        {/*</Autocomplete>*/}
                    </Box>
                </Toolbar>
            </AppBar>
        </div>)
}
export default Header

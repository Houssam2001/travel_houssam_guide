import React, {useState} from "react";
import {Autocomplete} from "@react-google-maps/api";
import {AppBar, Toolbar, Typography, InputBase, Box} from "@material-ui/core";
import {SearchRounded } from  '@material-ui/icons'
import useStyles from './styles'
const Header = ({setCoordinates}) => {
    const classes=useStyles()
    const [autocomplete,setAutocomplete]=useState()
    const onLoad = (autoC) =>
setAutocomplete(autoC)

    const onPlaceChanged=()=>{
        const lat=autocomplete.getPlaces().geometry.location.lat()
        const lng=autocomplete.getPlaces().geometry.location.lng()
        setCoordinates({lat,lng})
    }
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
                        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchRounded/>
                                </div>
                                <InputBase placeholder={'Search...'} classes={{root:classes.inputRoot,input:classes.inputInput}}/>
                            </div>
                        </Autocomplete>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>)
}
export default Header

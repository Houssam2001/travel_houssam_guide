import React from "react";
import GoogleMapReact from 'google-map-react'
import {Typography,Paper,useMediaQuery} from "@material-ui/core";
import {LocationOnOutlined} from "@material-ui/icons";
import {Rating} from "@material-ui/lab";
import useStyle from './styles'
const Map = (
    setCoordinates ,setBounds ,coordinates,
) => {
    const classes = useStyle()
    const  isMobile = useMediaQuery('(min-width:600px)')
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
            bootstrapURLKeys={{key:'AIzaSyCG0300rijWIBH2J1Wx0c_6M1pOzj0lxVM'}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50,50,50,50]}
            options={''}
            onChange={(e)=>{
                setCoordinates({lat:e.lat,lang:e.lang})
            }}
            onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    );
}
export default Map

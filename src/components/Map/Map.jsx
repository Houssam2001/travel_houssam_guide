import React from "react";
import GoogleMapReact from 'google-map-react'
import {Typography, Paper, useMediaQuery, CardMedia} from "@material-ui/core";
import {LocationOnOutlined} from "@material-ui/icons";
import {Rating} from "@material-ui/lab";
import useStyle from './styles'

const Map = ({setCoordinates, setBounds, coords, places,setChildClick}) => {
    const classes = useStyle()
    const isDesktop = useMediaQuery('(min-width:600px)')
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyCG0300rijWIBH2J1Wx0c_6M1pOzj0lxVM'}}
                defaultCenter={coords}
                center={coords}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}

                onChange={(e) => {
                    setCoordinates({lat: e.center.lat, lng: e.center.lng})
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                }}
                onChildClick={(child)=>setChildClick(child)}
            >
                {places?.map((place, i) => (
                    <div
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                    >
                        {!isDesktop ? (
                            <LocationOnOutlined color={"primary"} fontSize={"large"}/>

                        ) : (<Paper elevation={3} className={classes.paper}>
                            <Typography gutterBottom variant={"subtitle2"}>
                                {place.name}
                            </Typography>

                            <img className={classes.pointer}
                                 alt={place.name}
                                 src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}/>
                            <Rating size={"small"} value={Number(place.rating)} readOnly/>
                        </Paper>)

                        }
                    </div>
                ))}

            </GoogleMapReact>
        </div>
    );
}
export default Map;

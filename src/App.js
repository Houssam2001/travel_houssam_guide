import React, {useState} from "react";
import {CssBaseline, Grid} from "@material-ui/core";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";
import {getPlacesData} from "./api";
import {useEffect} from "react";

const App = () => {
    const [places, setPlaces] = useState([])
    const [coordinates, setCoordinates] = useState({})
    const [isloading, setIsLoading] = useState(false)
    const [bounds, setBounds] = useState({})
    const [childClicked, setChildClick] = useState(null)
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude})
        })
    }, []);
    useEffect(() => {
        setIsLoading(true)
        getPlacesData(bounds.ne,bounds.sw)
            .then((data) => {
                setPlaces(data)
                setIsLoading(false)
            })
    }, [coordinates,bounds])
    return (
        <>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <List places={places}
                          childClicked={childClicked}
                          isLoading={isloading}
                    />
                </Grid>

                <Grid item xs={12} md={8}>
                    <Map
                        coords={coordinates}
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        places={places}
                        setChildClick={setChildClick}
                    />
                </Grid>

            </Grid>
        </>
    )
}
export default App

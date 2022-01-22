import React, {useState} from "react";
import {CssBaseline, Grid} from "@material-ui/core";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";
import {getPlacesData} from "./api";
import {useEffect} from "react";

const App = () => {
    const [places, setPlaces] = useState([])
    const [filterplaces, setFilterPlaces] = useState([])
    const [coordinates, setCoordinates] = useState({})
    const [isloading, setIsLoading] = useState(false)
    const [bounds, setBounds] = useState({})
    const [type, setType] = useState('restaurants')
    const [rating, setRating] = useState('')
    const [childClicked, setChildClick] = useState(null)
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude})
        })
    }, []);
    useEffect(() => {
        const filtredPlaces = places.filter((place) => place.rating > rating)
        setFilterPlaces(filtredPlaces)
    }, [rating])
    useEffect(() => {
        setIsLoading(true)
        getPlacesData(type, bounds.ne, bounds.sw)
            .then((data) => {
                setPlaces(data)
                setFilterPlaces([])
                setIsLoading(false)
            })
    }, [type, coordinates, bounds])
    return (
        <>
            <CssBaseline/>
            <Header
            setCoordinates={setCoordinates}
            />
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <List places={filterplaces.length?filterplaces:places}
                          childClicked={childClicked}
                          isLoading={isloading}
                          type={type}
                          setType={setType}
                          rating={rating}
                          setRating={setRating}
                    />
                </Grid>

                <Grid item xs={12} md={8}>
                    <Map
                        coords={coordinates}
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        places={filterplaces.length?filterplaces:places}
                        setChildClick={setChildClick}
                    />
                </Grid>

            </Grid>
        </>
    )
}
export default App

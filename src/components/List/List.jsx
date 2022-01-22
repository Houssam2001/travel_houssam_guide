import React from "react";
import {useState, useEffect, createRef} from "react";
import {CircularProgress, Typography, InputLabel, Grid, MenuItem, FormControl, Select} from "@material-ui/core";
import useStyles from './styles'
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({places, childClicked, isLoading}) => {
    const [elRef, setRef] = useState([])
    useEffect(() => {
        const ref = Array(places.length).fill().map((_, i) => {
            return elRef[i] || createRef()
        })
        setRef(ref)
    }, [places])
    const classes = useStyles()
    const [type, SetType] = useState('restaurants')
    const [rating, SetRating] = useState('')
    return (
        <div className={classes.container}>
            <Typography variant='h4'>Restaurants , Hotels & Attractions</Typography>
            {isLoading ? (<div className={classes.loading}>
                <CircularProgress size={'5'}/>
            </div>) : (
                <>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Type</InputLabel>
                        <Select value={type} onChange={(e) => {
                            SetType(e.target.value)
                        }}>
                            <MenuItem value='restaurants'>Restaurants</MenuItem>
                            <MenuItem value='hotels'>Hotels</MenuItem>
                            <MenuItem value='attractions'>Attractions</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Rating</InputLabel>
                        <Select value={rating} onChange={(e) => {
                            SetRating(e.target.value)
                        }}>
                            <MenuItem value={0}>All</MenuItem>
                            <MenuItem value={3}>Above 3.0</MenuItem>
                            <MenuItem value={4}>Above 4.0</MenuItem>
                            <MenuItem value={4.5}>Above 4.5</MenuItem>
                            <MenuItem value={5}>above 5.0</MenuItem>

                        </Select>
                    </FormControl>
                    <Grid container spacing={3} className={classes.list}>
                        {places?.map((place, i) => (
                            <Grid ref={elRef[i]} item key={i} xs={12}>
                                <PlaceDetails place={place}
                                              selected={Number(childClicked) === i}
                                              refprops={elRef[i]}
                                />
                            </Grid>
                        ))}
                    </Grid>

                </>
            )
            }</div>
    )
}
export default List

import React from "react";
import {useState} from "react";
import {CircularProgress, Typography, InputLabel, Grid, MenuItem, FormControl, Select} from "@material-ui/core";
import useStyles from './styles'
import PlaceDetails from "../PlaceDetails/PlaceDetails";
const List = () => {
    const classes = useStyles()
    const [type, SetType] = useState('restaurants')
    const [rating, SetRating] = useState('')
    const Places = [
        {name: 'Cool Place'},
        {name: 'Best Couscous'},
        {name: 'Best Tagine'},
    ]
    return (
        <div className={classes.container}>
            <Typography variant='h4'>Restaurants , Hotels & Attractions</Typography>
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
                {Places?.map((place,i)=>(
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
export default List

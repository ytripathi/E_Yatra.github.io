import React, {useState, useEffect, createRef} from "react";
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from '@material-ui/core'
import useStyles from './styles.js'
import PlaceDetails from '../PlaceDetails/PlaceDetails'

const List = ({places, childClicked, isLoading, type, setType, rating, setRating})=>{
    const classes = useStyles();
    
    const [elRefs, setElRefs] = useState([]);

    // to match the clicked on the Map in the List
    useEffect(() => {
        setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
      }, [places]);
    
    return(
        <div className={classes.container}>
            <Typography variant="h4">
               Resturant, Hotels & Attractions around you.
               </Typography>

    { isLoading ? (
                   <div className={classes.loading}>
                       <CircularProgress size="5rem" />
                   </div>
               ) : (
              <>
           
            {/* Form options */}
            <FormControl className={classes.formControl}>
               <InputLabel>Type</InputLabel>
               <Select value={type} onChange={(e) => setType(e.target.value)}>
                   <MenuItem value="Restaurants">Restaurants</MenuItem>
                   <MenuItem value="Hotels">Hotels</MenuItem>
                   <MenuItem value="Attractions">Attractions</MenuItem>
               </Select>
            </FormControl>

            {/* Rating options */}
            <FormControl className={classes.formControl}>
               <InputLabel>Rating</InputLabel>
               <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                   <MenuItem value={0}>All</MenuItem>
                   <MenuItem value={3}>Above 3.0</MenuItem>
                   <MenuItem value={4}>Above 4.0</MenuItem>
                   <MenuItem value={4.5}>Above 4.5</MenuItem>
               </Select>
            </FormControl>

            
            <Grid container spacing={3} className={classes.list}>
              {places?.map((place,i) => (
                  <Grid ref={elRefs[i]} item key={i} xs={12}>
                    <PlaceDetails
                       place={place}
                       selected={Number(childClicked === i)}
                       refProp={elRefs[i]}
                     />
                  </Grid>
              ))}
            </Grid>
              </>
    )};

        </div>
    );
}

export default List;
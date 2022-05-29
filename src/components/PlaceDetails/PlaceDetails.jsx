import React from "react";
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyle from './styles.js'

const PlaceDetails = ({place, selected, refProp}) => {
   const classes = useStyle();

   if(selected) refProp?.current?.scrollIntoView( {behavior:'smooth', block:'start'} );

   return (
      <Card elevation={6}>
          <CardMedia
            style={{height:350}}
            image={place.photo ? place.photo.image.large.url : 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.gqindia.com%2Fphotos%2F5e2eeafd7df8190008b4f942%2Fmaster%2Fpass%2Fmumbai-restaurants-open-for-24-hours.jpg&imgrefurl=https%3A%2F%2Fwww.gqindia.com%2Flive-well%2Fcontent%2Fmumbai-24-hours-these-mumbai-restaurants-will-be-open-for-your-midnight-cravings&tbnid=QwNWdstbyLoXlM&vet=12ahUKEwjjj6DEwLz3AhXBi9gFHeSeCNUQMygaegUIARCLAg..i&docid=jWAeue3rp_bYxM&w=1920&h=1080&q=restaurant&ved=2ahUKEwjjj6DEwLz3AhXBi9gFHeSeCNUQMygaegUIARCLAg#imgrc=QwNWdstbyLoXlM&imgdii=7PFIr8ceRyolaM'}
             title={place.name}
          />

         <CardContent>

           <Typography gutterBottom variant="h5"> {place.name} </Typography>

             <Box display="flex" justifyContent="space-between">
               <Rating value={Number(place.rating)} readOnly />    
               <Typography variant="subtitle1">out of {place.num_reviews} reviews</Typography>
             </Box>

             <Box display="flex" justifyContent="space-between">
              <Typography component="legend">Price</Typography>
              <Typography gutterBottom variant="subtitle1">
               {place.price_level}
              </Typography>
            </Box>

             <Box display="flex" justifyContent="space-between">
               <Typography variant="subtitle1">Ranking</Typography>
               <Typography variant="subtitle1">{place.ranking}</Typography>
             </Box>

             {/* If Resturant have got any award */}
             {place?.awards?.map((award) => (
                <Box my={1} display="flex" jsutifyContent="space-between" alignItem="centre">
                  <img src={award.image.small} alt={award.display_name} />
                  <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                </Box>
             ))}

             {/* Type of cuisine of Resturant */}
             {place?.cuisine?.map(({name}) => (
                <Chip key={name} size="small" label={name} className={classes.chip}  />
             ))}

             {/*Address of Resturant */}
              {place?.address && (
                 <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
                  <LocationOnIcon/> {place.address}
                 </Typography>
              )}

              {/*Address of Resturant */}
              {place?.phone && (
                 <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.spacing}>
                  <PhoneIcon/> {place.phone}
                 </Typography>
              )}

              {/*Buttons to lead to the website of the resturant */}
              <CardActions>
                 <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                  Travel N Fun!
                 </Button>
                 <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                  Website
                 </Button>
              </CardActions>



         </CardContent>

      </Card>
   );
}

export default PlaceDetails;
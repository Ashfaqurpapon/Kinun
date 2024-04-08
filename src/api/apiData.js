import React, { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Typography';

const Swr = () => {
    const [products, setProducts] = useState([]); // State to store products array

    useEffect(() => {
        // Fetch data when component mounts
        fetch('http://192.168.1.89:4444/admin/products')
            .then(response => {
                // Check if the response is successful (status code 200)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Parse the JSON response
                return response.json();
            })
            .then(jsonResponse => {
                // Update the products state with fetched data
                setProducts(jsonResponse);
            })
            .catch(error => {
                // Handle any errors that occurred during the fetch
                console.error('Fetch error:', error);
            });
    }, []); // Empty dependency array to run effect only once

    return (
        <div>


            {products.map(product => (

                <li key={product.id}>


                    
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={product.imageURL}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {product.price}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                </li>
           
    ))
}
           
           
        </div >
    );
}

export default Swr;

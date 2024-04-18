import React, { useState, useEffect } from 'react';


const Swr = () => {
    const [products, setProducts] = useState([]); // State to store products array

    useEffect(() => {
        // Fetch data when component mounts
        fetch('http://192.168.1.29:4444/admin/Products')
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

    return products;

};
export default Swr;

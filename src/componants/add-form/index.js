import React, { useState } from 'react';
import Swr from '../../api/apiData';

const AddForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        imageURL: '',
        price: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        console.log(formData);
        e.preventDefault();
        
        fetch('https://darajapp.onrender.com/admin/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Optionally, you can handle the response here
        })
        .catch(error => {
            console.error('Error:', error);
            // Optionally, you can handle errors here
        });
       
    };

    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Key 1:</label>
                <input 
                    type="text" 
                    id="key1" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                />
                <br />
                <label htmlFor="imageURL">Key 2:</label>
                <input 
                    type="text" 
                    id="key2" 
                    name="imageURL" 
                    value={formData.imageURL} 
                    onChange={handleChange} 
                />
                <br />
                <label htmlFor="price">Key 3:</label>
                <input 
                    type="text" 
                    id="key3" 
                    name="price" 
                    value={formData.price} 
                    onChange={handleChange} 
                />
                <br />
                <button type="submit">Submit</button>
                
            </form>
            
        </div>
       
    );
    
};

export default AddForm;

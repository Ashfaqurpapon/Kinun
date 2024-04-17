import React, { useState} from 'react';

const addForm = () => {
    const [formData, setFormData] = useState({
        key1: '',
        key2: '',
        key3: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch('https://example.com/api/data', {
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
                <label htmlFor="key1">Key 1:</label>
                <input 
                    type="text" 
                    id="key1" 
                    name="key1" 
                    value={formData.key1} 
                    onChange={handleChange} 
                />
                <br />
                <label htmlFor="key2">Key 2:</label>
                <input 
                    type="text" 
                    id="key2" 
                    name="key2" 
                    value={formData.key2} 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    id="key3" 
                    name="key3" 
                    value={formData.key3} 
                    onChange={handleChange} 
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default addForm;

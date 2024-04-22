import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Typography';
import Swr from '../../api/apiData';

const ItemCard = ({ products }) => {
    const handleRemove = (productId) => {
        console.log(productId);
        fetch('https://darajapp.onrender.com/admin/deleteProduct/:id', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productId }),
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
            {products.map(product => (
                <li key={product.id}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="Product Image"
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
                            <button onClick={() => handleRemove(product.id)}>Remove</button>
                        </CardActions>
                    </Card>
                </li>
            ))}
        </div>
    );
}

export default ItemCard;
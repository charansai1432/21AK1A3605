// src/components/AllProducts.js

import { useState, useEffect } from 'react';
import axios from 'axios';
import FilterSortOptions from './FilterSortOptions';
import { Grid, Card, CardContent, Typography, Container } from '@mui/material';

function AllProducts() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('Laptop');
    const [company, setCompany] = useState('AMZ');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000);
    const [rating, setRating] = useState(0);
    const [sortOption, setSortOption] = useState('');

    useEffect(() => {
        const fetchProducts = () => {
            let url = `http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=10&minPrice=${minPrice}&maxPrice=${maxPrice}`;
            axios.get(url)
                .then(response => {
                    let data = response.data;
                    
                    data = data.filter(product => product.rating >= rating);
                    
                    if (sortOption) {
                        data.sort((a, b) => {
                            if (sortOption === 'price') {
                                return a.price - b.price;
                            } else if (sortOption === 'rating') {
                                return b.rating - a.rating;
                            } else if (sortOption === 'discount') {
                                return b.discount - a.discount;
                            }
                            return 0;
                        });
                    }
                    setProducts(data);
                })
                .catch(error => console.error('Error fetching data:', error));
        };

        fetchProducts();
    }, [category, company, minPrice, maxPrice, rating, sortOption]);

    return (
        <Container>
            <FilterSortOptions
                category={category}
                setCategory={setCategory}
                company={company}
                setCompany={setCompany}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                rating={rating}
                setRating={setRating}
                sortOption={sortOption}
                setSortOption={setSortOption}
            />
            <Grid container spacing={4} style={{ marginTop: 20 }}>
                {products.map(product => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">{product.name}</Typography>
                                <Typography variant="subtitle1" color="textSecondary">{product.company}</Typography>
                                <Typography variant="body2" color="textSecondary">{product.category}</Typography>
                                <Typography variant="h6">${product.price}</Typography>
                                <Typography variant="body2">Rating: {product.rating}</Typography>
                                <Typography variant="body2">Discount: {product.discount}%</Typography>
                                <Typography variant="body2">Availability: {product.availability}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default AllProducts;

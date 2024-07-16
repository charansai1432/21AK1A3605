// src/components/FilterSortOptions.js

import { Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

function FilterSortOptions({ category, setCategory, company, setCompany, minPrice, setMinPrice, maxPrice, setMaxPrice, rating, setRating, sortOption, setSortOption, fetchProducts }) {
    return (
        <div>
            <FormControl>
                <InputLabel>Category</InputLabel>
                <Select value={category} onChange={e => setCategory(e.target.value)}>
                    <MenuItem value="Laptop">Laptop</MenuItem>
                    <MenuItem value="Phone">Phone</MenuItem>
                    <MenuItem value="Computer">Computer</MenuItem>
                    <MenuItem value="TV">TV</MenuItem>
                    <MenuItem value="Earphone">Earphone</MenuItem>
                    <MenuItem value="Tablet">Tablet</MenuItem>
                    <MenuItem value="Charger">Charger</MenuItem>
                    <MenuItem value="Mouse">Mouse</MenuItem>
                    <MenuItem value="Keypad">Keypad</MenuItem>
                    <MenuItem value="Bluetooth">Bluetooth</MenuItem>
                    <MenuItem value="pendrive">Pendrive</MenuItem>
                    <MenuItem value="Remote">Remote</MenuItem>
                    <MenuItem value="Speaker">Speaker</MenuItem>
                    <MenuItem value="Headset">Headset</MenuItem>
                    <MenuItem value="PC">PC</MenuItem>
                    
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel>Company</InputLabel>
                <Select value={company} onChange={e => setCompany(e.target.value)}>
                    <MenuItem value="AMZ">AMZ</MenuItem>
                    <MenuItem value="FLP">FLP</MenuItem>
                    <MenuItem value="SNP">SNP</MenuItem>
                    <MenuItem value="MYN">MYN</MenuItem>
                    <MenuItem value="AZO">AZO</MenuItem>
               
                </Select>
            </FormControl>
            <TextField label="Min Price" type="number" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
            <TextField label="Max Price" type="number" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
            <TextField label="Rating" type="number" value={rating} onChange={e => setRating(e.target.value)} />
            <FormControl>
                <InputLabel>Sort By</InputLabel>
                <Select value={sortOption} onChange={e => setSortOption(e.target.value)}>
                    <MenuItem value="price">Price</MenuItem>
                    <MenuItem value="rating">Rating</MenuItem>
                    <MenuItem value="discount">Discount</MenuItem>
                </Select>
            </FormControl>
            <Button onClick={fetchProducts}>Apply Filters</Button>
        </div>
    );
}

export default FilterSortOptions;

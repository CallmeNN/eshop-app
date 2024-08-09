import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function MuiTextField({ label = "", variant = "filled", sx='', ...props }) {
    return (
        <TextField
            label={label}
            variant={variant}
            placeholder='Search...'
            InputProps={{
                endAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
            sx={{
                '& .MuiInputBase-input':{
                    p: 2,
                    width:340,
                },
                
                '& .MuiInputBase-root': {
                    color: '#9ba4d8',
                },
                '& .MuiInputBase-root .css-9mc7sf-MuiInputAdornment-root': {
                    color: '#9ba4d8',
                    mt:0
                    // pb: '4px'
                
                },
                
                    display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
         
                
                ...sx
            }}
            {...props}
        />
    );
}

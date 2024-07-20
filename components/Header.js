import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Menu, MenuItem, Box } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#f5f5f5' }}> {/* Light grey background for AppBar */}
      <Container>
        <Toolbar>
          {/* Title and Courses Button with Dropdown */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 'bold' }}> {/* Blue color and bold font */}
              accredian
            </Typography>
            <Button
              color="primary"
              onClick={handleClick}
              sx={{ 
                backgroundColor: '#1976d2', // Blue background for Courses button
                color: '#fff', // White text
                ml: 2, // Margin-left for spacing
                '&:hover': {
                  backgroundColor: '#155a8a', // Darker blue on hover
                },
                display: 'flex',
                alignItems: 'center',
              }}
              endIcon={<ArrowDropDownIcon />} // Dropdown arrow icon
            >
              Courses
            </Button>
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              sx: {
                mt: 1,
                bgcolor: '#fff', // White background for dropdown
                border: '1px solid #ddd', // Light border for dropdown
              },
            }}
          >
           <MenuItem onClick={handleClose}>Professional Certificate Program in Product Management</MenuItem>
            <MenuItem onClick={handleClose}>PG Certificate Program in Strategic Management</MenuItem>
            <MenuItem onClick={handleClose}>Professional Certificate Program in Data Science</MenuItem>
            <MenuItem onClick={handleClose}>Executive Program in Product Management</MenuItem>
          </Menu>

          {/* Buttons aligned to the right */}
          <Box sx={{ display: 'flex', gap: 2, ml: 'auto' }}>
            <Button color="inherit" sx={{ color: '#333' }}>Refer & Earn</Button> {/* Dark grey text */}
            <Button color="inherit" sx={{ color: '#333' }}>Resources</Button> {/* Dark grey text */}
            <Button color="inherit" sx={{ color: '#333' }}>About Us</Button> {/* Dark grey text */}
            <Button
              color="inherit"
              sx={{ 
                borderColor: '#9e9e9e', 
                color: '#9e9e9e' // Grey color for Login button
              }}
              variant="outlined"
            >
              Login
            </Button>
            <Button
              color="inherit"
              sx={{
                backgroundColor: '#1976d2', // Blue background for Try for Free button
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#155a8a', // Darker blue on hover
                },
              }}
              variant="contained"
            >
              Try for Free
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import heroImage from '../asset/hero-image.png'; // Importing image directly

const HeroSection = ({ onReferNow }) => {
  return (
    <Box sx={{ backgroundColor: '#f0f4ff', py: 6 }}>
      {/* Outer Container with padding */}
      <Container
        sx={{
          maxWidth: 'lg', // Set the maximum width for the outer container
          px: { xs: 2, md: 4 }, // Padding on left and right sides
          mx: 'auto', // Center horizontally
        }}
      >
        {/* Inner Container for spacing control */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection={{ xs: 'column', md: 'row' }} // Responsive layout
          textAlign={{ xs: 'center', md: 'left' }}
        >
          {/* Left side content */}
          <Box
            flex={1}
            sx={{
              mb: { xs: 4, md: 0 },
              mr: { md: 2 }, // Reduced margin-right to bring text closer to image
              maxWidth: { md: '50%' }, // Ensure it doesn't stretch too much
            }}
          >
            <EmojiEventsIcon sx={{ fontSize: 80, color: '#3f51b5' }} />
            <Typography variant="h2" gutterBottom>
              Let’s Learn
            </Typography>
            <Typography variant="h2" gutterBottom>
              & Earn
            </Typography>
            <Typography variant="h5" gutterBottom>
              Get a chance to win up to{' '}
              <Typography
                component="span"
                sx={{
                  fontWeight: 'bold',
                  color: 'blue',
                  fontSize: '2rem', // Adjust the font size as needed
                }}
              >
                Rs. 15,000
              </Typography>
            </Typography>
            <Button variant="contained" color="primary" onClick={onReferNow}>
              Refer Now
            </Button>
          </Box>

          {/* Right side image */}
          <Box
            flex={1}
            display="flex"
            justifyContent="center"
            sx={{
              pl: { md: 2 }, // Padding-left to align closely with text
              maxWidth: { md: '50%' }, // Ensure image doesn't stretch too much
            }}
          >
            <img
              src={heroImage}
              alt="Hero"
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '100%', // Ensure the image scales correctly within its container
                borderRadius: '8px',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;

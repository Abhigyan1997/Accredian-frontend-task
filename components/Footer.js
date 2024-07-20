import React from 'react';
import { Container, Typography, Box, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: '#000', color: '#fff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Accedian
            </Typography>
            <Typography variant="body2">
              Accedian provides industry-leading solutions for network and application performance management.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit" underline="none">
                Privacy Policy
              </Link>
              <br />
              <Link href="#" color="inherit" underline="none">
                Terms of Service
              </Link>
              <br />
              <Link href="#" color="inherit" underline="none">
                Contact Us
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: <Link href="mailto:support@accedian.com" color="inherit" underline="none">support@accedian.com</Link>
              <br />
              Phone: +1 (800) 123-4567
              <br />
              Address: 1234 Network Street, Suite 100, Tech City, TC 12345
            </Typography>
          </Grid>
        </Grid>
        <Box textAlign="center" mt={4}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Accedian. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

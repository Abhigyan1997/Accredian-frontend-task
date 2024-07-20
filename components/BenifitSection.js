import React from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';

const benefits = [
  { title: 'Submit referrals easily via our website or attach resume', icon: '📝' },
  { title: 'Earn rewards once your referrals join Accedian programs', icon: '💰' },
  { title: 'Both parties receive a bonus after the program is completed', icon: '🎁' }
];

const BenefitsSection = ({ onReferNow }) => {
  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          How Do I Refer?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {benefits.map((benefit, index) => (
            <Grid item xs={12} md={4} key={index} textAlign="center">
              <Box>
                <Typography variant="h1">{benefit.icon}</Typography>
                <Typography variant="h6">{benefit.title}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box textAlign="center" mt={4}>
          <Button variant="contained" color="primary" onClick={onReferNow}>
            Refer Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default BenefitsSection;

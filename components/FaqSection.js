import React from 'react';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  { question: 'Do I need to have prior Product Management experience to enroll in the program?', answer: 'No, this program is designed to include all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.' },
  { question: 'What is the minimum system configuration required?', answer: 'You will need a computer with at least 4GB of RAM, a 2GHz processor, and a stable internet connection.' }
];

const FaqSection = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default FaqSection;

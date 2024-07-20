import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ReferFormModal from './ReferFormModal'; // Import the modal component

const referralPrograms = [
  { program: 'Professional Certificate Program in Product Management', referrerBonus: '₹ 7,000', refereeBonus: '₹ 5,000' },
  { program: 'PG Certificate Program in Strategic Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
  { program: 'Professional Certificate Program in Data Science', referrerBonus: '₹ 15,000', refereeBonus: '₹ 10,000' },
  { program: 'Executive Program in Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
];

const StyledTable = styled(Table)(({ theme }) => ({
  '& th': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  '& td': {
    backgroundColor: theme.palette.background.paper,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const ReferralBenefitsSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <Box sx={{ py: 6, backgroundColor: '#f0f4ff' }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          What Are The Referral Benefits?
        </Typography>
        <TableContainer component={Paper} elevation={3} sx={{ borderRadius: 2 }}>
          <StyledTable>
            <TableHead>
              <TableRow>
                <StyledTableCell>Programs</StyledTableCell>
                <StyledTableCell>Referrer Bonus</StyledTableCell>
                <StyledTableCell>Referee Bonus</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {referralPrograms.map((program, index) => (
                <TableRow key={index} sx={{ '&:nth-of-type(even)': { backgroundColor: '#e3f2fd' }, '&:hover': { backgroundColor: '#bbdefb' } }}>
                  <StyledTableCell>{program.program}</StyledTableCell>
                  <StyledTableCell>{program.referrerBonus}</StyledTableCell>
                  <StyledTableCell>{program.refereeBonus}</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </TableContainer>
        <Box textAlign="center" mt={4}>
          <Button variant="contained" color="primary" onClick={handleOpenModal}>
            Refer Now
          </Button>
        </Box>
      </Container>
      <ReferFormModal open={modalOpen} handleClose={handleCloseModal} />
    </Box>
  );
};

export default ReferralBenefitsSection;

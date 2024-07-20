import React, { useState } from 'react';
import { CssBaseline } from '@mui/material';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenifitSection';
import FaqSection from './components/FaqSection';
import ReferFormModal from './components/ReferFormModal';
import Footer from './components/Footer';
import ReferralBenefitsSection from './components//ReferalbenifitSection';

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <CssBaseline />
      <Header />
      <HeroSection onReferNow={handleOpen} />
      <BenefitsSection onReferNow={handleOpen} />
      <ReferralBenefitsSection />
      <FaqSection />
      <ReferFormModal open={open} handleClose={handleClose} />
      <Footer />
    </div>
  );
}

export default App;

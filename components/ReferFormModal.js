import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, IconButton, MenuItem, Select, FormControl, InputLabel, CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

// Define some example courses
const courses = [
  'Professional Certificate Program in Product Management',
  'PG Certificate Program in Strategic Management',
  'Professional Certificate Program in Data Science',
  'Executive Program in Product Management'
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const ReferFormModal = ({ open, handleClose }) => {
  const [formValues, setFormValues] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
    course: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.referrerName = formValues.referrerName ? '' : 'This field is required.';
    tempErrors.referrerEmail = formValues.referrerEmail ? '' : 'This field is required.';
    tempErrors.refereeName = formValues.refereeName ? '' : 'This field is required.';
    tempErrors.refereeEmail = formValues.refereeEmail ? '' : 'This field is required.';
    tempErrors.course = formValues.course ? '' : 'Please select a course.';
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      setMessage('');
      try {
        const response = await axios.post('http://13.232.208.221/api/referrals', formValues);

        if (response.status === 201) {
          setMessage('Referral submitted successfully!');
          // Reset form values
          setFormValues({
            referrerName: '',
            referrerEmail: '',
            refereeName: '',
            refereeEmail: '',
            course: ''
          });
          // Close the modal after a successful submission
          setTimeout(() => handleClose(), 2000); // Optional: wait 2 seconds to show the success message before closing
        } else {
          setMessage('Failed to submit referral.');
        }
      } catch (error) {
        setMessage('Error submitting referral. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
          Referral Form
        </Typography>
        {message && (
          <Typography color={message.includes('successfully') ? 'success.main' : 'error.main'} gutterBottom>
            {message}
          </Typography>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Your Name"
            name="referrerName"
            value={formValues.referrerName}
            onChange={handleChange}
            error={!!errors.referrerName}
            helperText={errors.referrerName}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Your Email"
            name="referrerEmail"
            value={formValues.referrerEmail}
            onChange={handleChange}
            error={!!errors.referrerEmail}
            helperText={errors.referrerEmail}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Friend's Name"
            name="refereeName"
            value={formValues.refereeName}
            onChange={handleChange}
            error={!!errors.refereeName}
            helperText={errors.refereeName}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Friend's Email"
            name="refereeEmail"
            value={formValues.refereeEmail}
            onChange={handleChange}
            error={!!errors.refereeEmail}
            helperText={errors.refereeEmail}
          />
          <FormControl fullWidth margin="normal" error={!!errors.course}>
            <InputLabel id="course-label">Select Course</InputLabel>
            <Select
              labelId="course-label"
              name="course"
              value={formValues.course}
              onChange={handleChange}
              label="Select Course"
            >
              {courses.map((course, index) => (
                <MenuItem key={index} value={course}>{course}</MenuItem>
              ))}
            </Select>
            {errors.course && <Typography color="error">{errors.course}</Typography>}
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            disabled={loading}
            startIcon={loading ? <CircularProgress size={24} /> : null}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ReferFormModal;

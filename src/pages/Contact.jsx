import React, { useEffect, useState } from 'react';
import { usePageTitle } from '../contexts/PageTitleContext';
import { Container, Typography, TextField, Button, Box, Link } from '@mui/material';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().min(10).required()
});

const Contact = () => {
  const { setTitle } = usePageTitle();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setTitle('Contact');
  }, [setTitle]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await schema.validate(formData, { abortEarly: false });
      alert('Form submitted!');
      setErrors({});
    } catch (err) {
      const newErrors = {};
      err.inner.forEach(error => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <Container sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h4" sx={{ textAlign: 'center', color: '#0077cc', mb: 4 }}>Contact Me</Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          margin="normal"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          variant="outlined"
          sx={{ borderRadius: '8px' }}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          margin="normal"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          variant="outlined"
          sx={{ borderRadius: '8px' }}
        />
        <TextField
          fullWidth
          label="Message"
          name="message"
          margin="normal"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          error={!!errors.message}
          helperText={errors.message}
          variant="outlined"
          sx={{ borderRadius: '8px' }}
        />
        <Button type="submit" variant="contained" sx={{ mt: 2, borderRadius: '8px' }}>
          Send
        </Button>
      </Box>
      {/* Contact Information Section */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body1">You can also reach me at:</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          <strong>Phone:</strong> +92 300 1234567
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          <strong>Email:</strong> 
          <Link href="mailto:bsai23045@itu.edu.pk" color="primary">
            bsai23045@itu.edu.pk
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Contact;

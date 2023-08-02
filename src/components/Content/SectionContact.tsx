import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './style.module.css';



export default function SectionContact() {
  const validationSchema = Yup.object({
    name: Yup.string()
    .required('Name is required')
    .max(25, 'Name is too long')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field ')
    ,
    email: Yup.string().email('Format email tidak valid').required('Email is required').max(55, 'Email is too long'),
    phone: Yup.string().
    required('Phone is required')
    .max(14, 'Phone is too long')
    .matches(/^[0-9]+$/, 'Only numbers are allowed for this field ')
    ,
    company: Yup.string().required('Company is required').max(55, 'Company is too long'),
    message: Yup.string().required('Message is required')
    .test('no-html', 'HTML tags are not allowed', (value) => {
      if (value) {
        const regex = /((?=(a+))\2)+$/;
        return !regex.test(value);
      }
      return true;
    }),
    
  });
    
    return(
        <Container
            sx={{
              width: '100%',
              maxWidth: {xs: '90%', md: '90%'},
            }}
          >
            <Typography variant='h2' component='h1' fontWeight={700} color='#CFCFCF' gutterBottom
              sx={{
                position: 'relative',
                pl: {xs: 0, lg: 15},
                pt: {xs: 0, md: 15},
                mb: {xs: 5, md: 5},
                mt: {xs: 0, md: 0},
                fontSize: {xs: '3rem', md: '3.75rem'},
                '&::after': {
                  content: '""',
                  display: 'inline-block',
                  position: 'relative',
                  top: '-40px', 
                  left: {xs: '0', md: '23px'},
                  width: {xs: '25px', md: '35px'},
                  height: {xs: '25px', md: '35px'},
                  borderRadius: '50%',
                  backgroundColor: '#25D366',
                  border: '1px solid #CFCFCF',
                  marginLeft: '5px',
                }
              }}
            >
              Contact
              </Typography>
              <Box>
                <Grid container spacing={{xs:0, md:5, lg:12}}>
                  <Grid xs={12} md={6} order={{xs: 2, md: 1}}
                    sx={{
                      zIndex: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        mb: 4,
                      }}
                    >
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.526082968869!2d106.6984069758048!3d-6.194099560685185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f924c806a279%3A0x64b6da9c1b1bd8e3!2sPT%20Solusi%20Pembayaran%20Elektronik%20(Head%20Office)!5e0!3m2!1sid!2sid!4v1685497878746!5m2!1sid!2sid" width="100%" height="450" style={{border:0, borderRadius: '10px'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </Box>
                    <Typography variant='h6' component='p' gutterBottom
                      sx={{
                        fontWeight: 700,
                      }}
                    >
                      Our HQ
                    </Typography>
                    <Typography variant='body1' component='p' sx={{width: {xs: '100%', md: '90%', lg: '50%'}}}>
                    Ruko Great Wall, Jl. Green Lake City Boulevard No.17-20, RT.005/RW.008, Petir, Kec. Cipondoh, Kota Tangerang, Banten 15147
                    </Typography>
                    <Typography variant='body1' component='p'
                      sx={{
                        my: 2,
                      }}
                    >
                      (8612) 890723984723 ext. 509
                    </Typography>
                    <Typography variant='body1' component='a' href='#wappinID'
                      sx={{
                        color: 'success.main',
                      }}
                    >
                      info@wappin.id
                    </Typography>
                  </Grid>
                  <Grid xs={12} md={6} order={{xs: 1, md: 2}}
                    sx={{
                        zIndex: 1,
                        mb: {xs: 5, md: 0},
                    }}
                  >
                    <Box
                        
                    >
                        <Typography variant="h4" component="h2" align="center" mb={3}
                            sx={{
                              fontSize: {xs: '1.5rem', md: '2.5rem'},
                            }}
                        >
                            Request For Demo
                        </Typography>

                        <Formik
                          initialValues={{ name: '', email: '', phone: '', company: '', message: '' }}
                          validationSchema={validationSchema}
                          // onSubmit={handleSubmit}
                          onSubmit={(values, { setValues }) => {
                            const capitalizedValues = {
                              ...values,
                              name: values.name.charAt(0).toUpperCase().trim() + values.name.slice(1).trim(),
                              phone: values.phone.charAt(0) !== '0' && values.phone.charAt(0) === '8' ? '+62' + values.phone : '+62' + values.phone.slice(1),
                              message: values.message.trim(),
                              
                            };

                            console.log(capitalizedValues);
                                                        
                            // Reset the form values
                            setValues({
                              name: '',
                              email: '',
                              phone: '',
                              company: '',
                              message: '',
                            });
                          }}
                        >
                          <Form>
                            <Stack spacing={5}>
                              <Box>
                                <label htmlFor="name">Name</label>
                                <Field as={TextField}
                                name="name"
                                type="name"
                                fullWidth
                                variant="outlined"
                                size="small"
                                margin="none"
                                sx={{mt: 1}}
                                />
                                <ErrorMessage className={styles.errorMessage} name="name" component="span" />
                              </Box>
                              <Box>
                                <label htmlFor="email">Email Address</label>
                                <Field as={TextField}
                                name="email"
                                type="text"
                                fullWidth
                                variant="outlined"
                                size="small"
                                margin="none"
                                sx={{mt: 1}}
                                />
                                <ErrorMessage className={styles.errorMessage} name="email" component="span" />
                              </Box>
                              <Box>
                                <label htmlFor="phone">Phone</label>
                                <Field as={TextField}
                                name="phone"
                                type="phone"
                                fullWidth
                                variant="outlined"
                                size="small"
                                margin="none"
                                sx={{mt: 1}}
                                />
                              <ErrorMessage className={styles.errorMessage} name="phone" component="span" />
                              </Box>
                              <Box>
                                <label htmlFor="company">Company</label>
                                <Field as={TextField}
                                name="company"
                                type="company"
                                fullWidth
                                variant="outlined"
                                size="small"
                                margin="none"
                                sx={{mt: 1}}
                                />
                                <ErrorMessage className={styles.errorMessage} name="company" component="span" />
                              </Box>
                              <Box>
                                <label htmlFor="message">Message</label>
                                <Field as={TextField}
                                label="Message"
                                name="message"
                                multiline
                                rows={4}
                                fullWidth
                                variant="outlined"
                                size="small"
                                margin="none"
                                sx={{mt: 1}}
                                />
                                <ErrorMessage className={styles.errorMessage} name="message" component="span" />
                              </Box>
                            </Stack>
                            <Button variant="contained" type='submit'
                              sx={{
                                  backgroundColor: '#0cebeb',
                                  backgroundImage: 'linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)',
                                  mt: {xs: 3, md: 5},
                                  fontSize: '1rem',
                                  fontWeight: '500',
                                  textTransform: 'capitalize',
                                  color: 'common.white',
                                  padding: '10px 0',
                                  minWidth: {xs: '100%', md: '170px'},
                              }}
                            >Submit</Button>
                          </Form>
                        </Formik>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
          </Container>
    )
}

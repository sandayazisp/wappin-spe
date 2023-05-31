import { Box, Button, Container, Typography } from '@mui/material'
export default function SectionProduct() {
    return(
        <Container
            sx={{
              width: '100%',
              maxWidth: {xs: '100%', md: '90%'},
              position: 'relative',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                
              }}
            >
               <Typography variant='h2' component='h1' fontWeight={700} color='#CFCFCF'
              sx={{
                
                position: 'absolute',
                top: 0,
                left: 0,
                pl: 20,
                pt: 10,
                '&::after': {
                  content: '""',
                  display: 'inline-block',
                  position: 'relative',
                  top: '-40px', 
                  left: '23px',
                  width: '35px',
                  height: '35px',
                  borderRadius: '50%',
                  backgroundColor: '#25D366',
                  border: '1px solid #CFCFCF',
                  marginLeft: '5px',
                }
              }}
            >
              Product
            </Typography>
              <img
                src='/Assets/Group 177@2x.png'
                alt='Wappin'
                loading="lazy"
                width='100%'
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '5%',
                  right: '10%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  zIndex: 1,
                }}
              >
              <Typography variant='h3' component='h3'
                
              >
                All Projects. One Platform.
              </Typography>
              <Button variant="contained" href="#learnmore"
                  sx={{
                      backgroundColor: '#0cebeb',
                      backgroundImage: 'linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)',
                      mt: 4,
                      fontSize: '1rem',
                      fontWeight: '500',
                      textTransform: 'capitalize',
                      color: 'common.white',
                      padding: '10px 0',
                      minWidth: '170px',
                  }}
              >Try Now</Button>
              </Box>
            </Box>
          </Container>
    )
};

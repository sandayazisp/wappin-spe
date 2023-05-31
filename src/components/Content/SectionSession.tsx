import { Box, Button, Typography } from '@mui/material'
import Image from 'next/legacy/image'

export default function SectionSession() {
    return(
        <Box
            sx={{
              width: '100%',
              position: 'relative',
              mt: 10,
              height: '700px',    
              display: { xs: 'none', md: 'block'},        
            }}
          >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                }}
              >
                <Image
                  src={'/Assets/Group 179@2x.png'}
                  alt='Wappin'
                  objectFit='cover'
                  layout='fill'
                  objectPosition={'right'}
                />
              <Box
                sx={{
                  zIndex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: { xs: 'end', md: 'center'},
                  alignItems: 'center',
                  position: 'relative',
                  width: { xs: '100%', md: '50%'},
                  height: '100%',
                  textAlign: { xs: 'center', md: 'left'}
                }}
              >
              <Typography variant='h3' component='h1' 
                sx={{
                  color: 'common.white',
                }}
              >
                Never miss your session.
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
          </Box>
    )
};

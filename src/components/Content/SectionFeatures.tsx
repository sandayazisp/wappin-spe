import { Box, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Image from 'next/legacy/image'

export default function SectionFeatures() {
    return(
        <Box
            sx={{
              width: '100%',
              height: '100%',
              position: 'relative',
            }}
          >
            <Container
              sx={{
                width: '100%',
                maxWidth: {xs: '100%', md: '90%'},
                height: '100%',
                position: 'relative',
              }}
            >
              <Typography variant='h2' component='h1' fontWeight={700} color='#CFCFCF' gutterBottom
              sx={{
                position: 'relative',
                pl: 20,
                pt: 10,
                mb: 5,
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
              Features
            </Typography>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  bgcolor: '#FDFDFD',
                borderRadius: '10px',
                // bgcolor: 'red',
                border: '1px solid #E5E5E5',
                boxShadow: '-1px 9px 14px 4px rgba(0,0,0,0.06)',
                pb: 20, 
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    pt: 15,
                    pl: 5,
                  }}
                >
                  <Grid container spacing={0} 
                >
                  <Grid xs={3}
                    sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  
                  >
                    <Box
                      sx={{
                        // border: '0 1px solid #E5E5E5',
                        bgcolor: '#FDFDFD',
                        borderRadius: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '350px',
                        width: '60%',
                        boxShadow: '0px 20px 17px 2px rgba(0,0,0,0.03)',
                        border: 'none'
                      }}
                    >
                      <img
                        src='/Assets/Group 129@2x.png'
                        alt='Wappin'
                        loading="lazy"
                        width='50%'
                        
                      />
                      <Typography variant='body1' component='p'
                        sx={{
                          mt: 4,

                        }}
                      >
                        Notification
                      </Typography>
                    </Box> 
                  </Grid>
                  <Grid xs={3}
                    sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  
                  >
                    <Box
                      sx={{
                        // border: '0 1px solid #E5E5E5',
                        bgcolor: '#FDFDFD',
                        borderRadius: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        width: '60%',
                        alignItems: 'center',
                        minHeight: '350px',
                        boxShadow: '0px 20px 17px 2px rgba(0,0,0,0.03)',
                        border: 'none'
                      }}
                    >
                      <img
                        src='/Assets/Group 175@2x.png'
                        alt='Wappin'
                        loading="lazy"
                        width='50%'
                        
                      />
                      <Typography variant='body1' component='p'
                        sx={{
                          mt: 4,

                        }}
                      >
                        Chat (Bot)
                      </Typography>
                    </Box> 
                  </Grid>
                  <Grid xs={3}
                    sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  
                  >
                    <Box
                      sx={{
                        // border: '0 1px solid #E5E5E5',
                        width: '60%',
                        bgcolor: '#FDFDFD',
                        borderRadius: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '350px',
                        boxShadow: '0px 20px 17px 2px rgba(0,0,0,0.03)',
                        border: 'none'
                      }}
                    >
                      <img
                        src='/Assets/Group 88@2x.png'
                        alt='Wappin'
                        loading="lazy"
                        width='50%'
                        
                      />
                      <Typography variant='body1' component='p'
                        sx={{
                          mt: 4,

                        }}
                      >
                        Schedule Messages
                      </Typography>
                    </Box> 
                  </Grid>
                  <Grid xs={3}
                    sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  
                  >
                    <Box
                      sx={{
                        // border: '0 1px solid #E5E5E5',
                        width: '60%',
                        bgcolor: '#FDFDFD',
                        borderRadius: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '350px',
                        boxShadow: '0px 20px 17px 2px rgba(0,0,0,0.03)',
                        border: 'none'
                      }}
                    >
                      <img
                        src='/Assets/Group 130@2x.png'
                        alt='Wappin'
                        loading="lazy"
                        width='50%'
                        
                      />
                      <Typography variant='body1' component='p'
                        sx={{
                          mt: 4,

                        }}
                      >
                        Chat Panel
                      </Typography>
                    </Box> 
                  </Grid>
                  
                </Grid>
                <Typography variant='h2' component='h1' fontWeight={700} color='#CFCFCF' gutterBottom
                sx={{
                  position: 'relative',
                  pl: 15,
                  pt: 15,
                  mb: 5,
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
                Our Client
                </Typography>
                <Box
                  sx={{
                      px: 5,
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      
                  }}
                >
                  <Grid container spacing={2}
                    sx={{
                      width: '100%',
                      pt: 7,
                    }}
                  >
                    <Grid xs={4}
                      sx={{
                        display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      zIndex: 1,
                      }}
                    >
                      <img
                        src='/Assets/INNOVATIVE@2x.png'
                        alt='Wappin'
                        loading="lazy"
                        width='20%'
                        
                      />
                    </Grid>
                    <Grid xs={4}
                      sx={{
                        display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      zIndex: 1,
                      
                      }}
                    >
                      <img
                        src='/Assets/ARITECHNO@2x.png'
                        alt='Wappin'
                        loading="lazy"
                        width='20%'
                        
                      />
                    </Grid>
                    <Grid xs={4}
                      sx={{
                        display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      zIndex: 1,
                      }}
                    >
                      <img
                        src='/Assets/LIQUIDROP@2x.png'
                        alt='Wappin'
                        loading="lazy"
                        width='20%'
                        
                      />
                    </Grid>
                    <Grid xs={4}
                      sx={{
                        display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      zIndex: 1,
                      mt: 10
                      }}
                    >
                      <img
                        src='/Assets/VISIONNER@2x.png'
                        alt='Wappin'
                        loading="lazy"
                        width='20%'
                        
                      />
                    </Grid>
                    <Grid xs={4}
                      sx={{
                        display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      zIndex: 1,
                      mt: 10
                      }}
                    >
                      <img
                        src='/Assets/CHATMEETING@2x.png'
                        alt='Wappin'
                        loading="lazy"
                        width='20%'
                        
                      />
                    </Grid>
                    <Grid xs={4}
                      sx={{
                        display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      zIndex: 1,
                      mt: 10
                      }}
                    >
                      <img
                        src='/Assets/DIAMONDO@2x.png'
                        alt='Wappin'
                        loading="lazy"
                        width='20%'
                        
                      />
                    </Grid>
                  </Grid>
                </Box>
                </Box>
              </Box>
            </Container>
              <Box
                  sx={{
                    width: '100%',
                    position: 'absolute',
                    bottom: '77px',
                    left: 0,
                    height: '420px',
                  }}
                >
                <Image
                  src={'/Assets/Mask Group 4@2x.png'}
                  alt='Wappin'
                  objectPosition={'bottom'}
                  objectFit='cover'
                  layout='fill'
                />
            </Box>
          </Box>
    )
};

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
              mt: {xs: 15, md: 0},
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
                pl: {xs: 0, lg: 20},
                pt: {xs: 0, md: 10},
                mb: 5,
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
              Features
            </Typography>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  bgcolor: {xs: 'transparent', md: '#FDFDFD'},
                borderRadius: '10px',
                // bgcolor: 'red',
                border: {xs: 'none', md: '1px solid #E5E5E5'},
                boxShadow: {xs: 'none', md: '-1px 9px 14px 4px rgba(0,0,0,0.06)'},
                pb: 20, 
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    pt: {xs: 0, md: 15},
                    pl: {xs: 0, md: 5},
                  }}
                >
                  <Grid container spacing={0} rowSpacing={{xs: 0, md: 10}}  
                >
                  <Grid xs={12} md={6} lg={3} 
                    sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  
                  >
                    <Box
                      sx={{
                        bgcolor: '#FDFDFD',
                        borderRadius: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '350px',
                        width: {xs: '70%', md: '60%'},
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
                  <Grid xs={12} md={6} lg={3} 
                    sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    my: {xs: 10, md: 0}
                  }}
                  
                  >
                    <Box
                      sx={{
                        bgcolor: '#FDFDFD',
                        borderRadius: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        width: {xs: '70%', md: '60%'},
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
                  <Grid xs={12} md={6} lg={3}
                    sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  
                  >
                    <Box
                      sx={{
                        width: {xs: '70%', md: '60%'},
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
                  <Grid xs={12} md={6} lg={3} 
                    sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: {xs: 10, md: 0}
                  }}
                  
                  >
                    <Box
                      sx={{
                        width: {xs: '70%', md: '60%'},
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
                  pl: {xs: 0, lg: 15},
                  pt: {xs: 0, md: 15},
                  mb: {xs: 5, md: 5},
                  mt: {xs: 15, md: 0},
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
                Our Client
                </Typography>
                <Box
                  sx={{
                      px: {xs: 3, md: 5},
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      
                  }}
                >
                  <Grid container spacing={2} rowSpacing={{xs: 8, md: 0}}
                    sx={{
                      width: '100%',
                      pt: 7,
                    }}
                  >
                    <Grid xs={6} md={4} 
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1,
                        // width: '100%',
                        // height: '100%',
                        }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          width: {xs: '110px', md: '190px'},
                          height: {xs: '78px', md: '155px'},
                          // zIndex: 3,
                        }}
                      >
                        <Image 
                          src='/Assets/INNOVATIVE@2x.png'
                          alt='Wappin'
                          layout='fill'
                        />
                      </Box>
                      
                    </Grid>
                    <Grid xs={6} md={4}
                      sx={{
                        display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      zIndex: 1,
                      
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          // width: {xs: '100%', md: '40%'},
                          // height: {xs: '80px', md: '100px'},
                          width: {xs: '110px', md: '190px'},
                          height: {xs: '78px', md: '155px'},
                        }}
                      >
                        <Image 
                          src='/Assets/ARITECHNO@2x.png'
                          alt='Wappin'
                          // width={190}
                          // height={155}
                          layout='fill'
                        />
                      </Box>
                      
                    </Grid>
                    <Grid xs={6} md={4}
                      sx={{
                        display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      zIndex: 1,
                      }}
                    >
                       <Box
                        sx={{
                          position: 'relative',
                          // width: {xs: '100%', md: '40%'},
                          // height: {xs: '80px', md: '100px'},
                          width: {xs: '110px', md: '190px'},
                          height: {xs: '78px', md: '155px'},
                        }}
                      >
                        <Image 
                          src='/Assets/LIQUIDROP@2x.png'
                          alt='Wappin'                          
                          layout='fill'
                        />
                      </Box>
                    </Grid>
                    <Grid xs={6} md={4}
                      sx={{
                        display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      zIndex: 1,
                      mt: {xs: 0, md: 10}
                      }}
                    >
                       <Box
                        sx={{
                          position: 'relative',
                          // width: {xs: '100%', md: '40%'},
                          // height: {xs: '80px', md: '100px'},
                          width: {xs: '110px', md: '190px'},
                          height: {xs: '78px', md: '155px'},
                        }}
                      >
                        <Image 
                          src='/Assets/VISIONNER@2x.png'
                          alt='Wappin'
                          layout='fill'
                        />
                      </Box>
                    </Grid>
                    <Grid xs={6} md={4}
                      sx={{
                        display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      zIndex: 1,
                      mt: {sx:0, md:10}
                      }}
                    >
                       <Box
                        sx={{
                          position: 'relative',
                          // width: {xs: '100%', md: '40%'},
                          // height: {xs: '80px', md: '100px'},
                          width: {xs: '110px', md: '190px'},
                          height: {xs: '78px', md: '155px'},
                        }}
                      >
                        <Image 
                          src='/Assets/CHATMEETING@2x.png'
                          alt='Wappin'
                          layout='fill'
                        />
                      </Box>
                    </Grid>
                    <Grid xs={6} md={4}
                      sx={{
                        display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      zIndex: 1,
                      mt: {sx:0, md:10}
                      }}
                    >
                       <Box
                        sx={{
                          position: 'relative',
                          // width: {xs: '100%', md: '40%'},
                          // height: {xs: '80px', md: '100px'},
                          width: {xs: '110px', md: '190px'},
                          height: {xs: '78px', md: '155px'},
                        }}
                      >
                        <Image 
                          src='/Assets/DIAMONDO@2x.png'
                          alt='Wappin'
                          layout='fill'
                        />
                      </Box>
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
                    bottom: {xs: '4%', lg: '6%', xl: '6%'},
                    left: 0,
                    height: '100%',
                    maxHeight: {xs: '19%', sm:'19%', md: '28%', lg: '35%', xl: '35%'},
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

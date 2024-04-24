import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import LinkIcon from '@mui/icons-material/Link';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import DatasetLinkedIcon from '@mui/icons-material/DatasetLinked';

const items = [
  {
    icon: <LinkIcon />,
    title: 'Seamless EHR/EMR Integration',
    description:
      'Our API facilitates a flawless connection with your existing Electronic Health Records (EHR) system, ensuring that every aspect of patient management from scheduling to care is efficiently streamlined.',
  },
  {
    icon: <AutoAwesomeIcon />,
    title: 'Customizable Booking Interface',
    description:
      'Adapt the booking process to fit the unique branding and workflow of your healthcare practice, enhancing both staff and patient experience with an interface that feels both personal and professional.',
  },
  {
    icon: <EqualizerIcon />,
    title: 'Advanced Analytics and Tracking',
    description:
      'Utilize powerful tracking tools to monitor booking sources and patient pathways, providing valuable insights that help refine your operational strategies and improve patient engagement.',
  },
  {
    icon: <DatasetLinkedIcon />,
    title: 'Automated Data Management',
    description:
      ' Our system automatically records every detail of appointments, significantly reducing the burden of manual data entry and minimizing the risk of errors.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Dedicated Support and Ongoing Enhancements',
    description:
      'Enjoy the reassurance of continuous expert support and regular system updates, keeping your booking solution at the cutting edge of healthcare management technology.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Enhanced Security and Compliance:',
    description:
      'Our system ensures top-level security and adherence to healthcare regulations like HIPAA. With robust encryption and secure data handling, we protect patient information and maintain trust.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#003366',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            Highlights
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
Experience enhanced efficiency and integration with our advanced booking system, designed specifically for healthcare practices. Key features include:

          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: '#090e10',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
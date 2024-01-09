import React from "react";
import { ExternalLink } from '@/shared';
import { Box, Typography } from '@mui/material';

const Page = () => {
  return (
    <Box
      className='mx-auto mt-[150px] max-w-[600px] py-[10px] text-center text-black shadow-md hover:shadow-lg'
      data-testid='NotFound-div'
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: 'secondary.dark',
          mb: 3,
        }}
      >
        <Typography fontSize='16px' fontWeight="bold" color='#1976d2'>
          Alaa Mohammad
        </Typography>
        <Typography color='#ff9800'>
          Frontend Developer | React - JavaScript - TypeScript - Next.js - Test
          Automation | Software Developer
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <ExternalLink
          url='https://www.linkedin.com/in/alaa-mohammad-767622199/'
          title='LinkedIn'
        />
        <ExternalLink
          url='https://www.xing.com/profile/alaa_mohammad8/cv'
          title='Xing'
        />
        <ExternalLink url='https://github.com/alaa-m1' title='GitHub' />
      </Box>
    </Box>
  );
};
export default Page;

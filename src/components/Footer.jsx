import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../../assets/images/Logo 2.png";

const Footer = () => {
  return (
    <Box bgcolor="#fff3f4">
      <Stack alignItems="center" pt="15px">
        <img src={Logo} alt="logo" width="150px" />
        <Typography variant="h6" pb="10px" mt="10px">
          Master Every Workout, Every Day💪
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;

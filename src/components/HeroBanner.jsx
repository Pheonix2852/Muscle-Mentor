import { Box, Typography, Button } from "@mui/material";
import GymImage from "../assets/images/Gym.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#ff2625" fontSize="50px" className="heading">
        Fitness Club
      </Typography>
      <Typography
        className="tagline"
        sx={{ fontSize: { lg: "50px", xs: "40px" } }}
        fontFamily="sans-serif"
      >
        Master Every Workout, Everyday
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4} fontFamily="Gotham">
        Check out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="/exercises"
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        color="#ff2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="143px"
        mt="85px"
        textAlign="center"
        className="heading"
      >
        MUSCLE MENTOR
      </Typography>
      <img src={GymImage} alt="banner" className="hero-banner-img"></img>
    </Box>
  );
};

export default HeroBanner;

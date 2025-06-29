import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../../assets/icons/gym.png";

const bodyPartImages = {
  all: "../assets/icons/all.png",
  back: "../assets/icons/back.png",
  cardio: "../assets/icons/cardio.png",
  chest: "../assets/icons/chest.png",
  "lower arms": "../assets/icons/lower_arms.png",
  "lower legs": "../assets/icons/lower_legs.png",
  neck: "../assets/icons/neck.png",
  shoulders: "../assets/icons/shoulder.png",
  "upper arms": "../assets/icons/upper_arms.png",
  "upper legs": "../assets/icons/upper_legs.png",
  waist: "../assets/icons/waist.png",
};

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #FF2625" : "",
        background: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={bodyPartImages[item]}
        alt={item}
        style={{ width: "60px", height: "60px" }}
      />{" "}
      <Typography
        fontSize="24px"
        color="#3a1212"
        textTransform="capitalize"
        className="normal-2"
      >
        {" "}
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;

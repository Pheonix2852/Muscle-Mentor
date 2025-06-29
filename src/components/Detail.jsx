import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BodyPartImage from "../../assets/icons/body-part.png";
import TargetImage from "../../assets/icons/target.png";
import EquipmentImage from "../../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  // Log the exerciseDetail to inspect its shape
  console.log(exerciseDetail);

  // Destructure only if exerciseDetail exists
  const { bodyPart, gifUrl, name, target, equipment, instructions } =
    exerciseDetail || {};

  const extraDetail = [
    { icon: BodyPartImage, name: bodyPart },
    { icon: TargetImage, name: target },
    { icon: EquipmentImage, name: equipment },
  ];

  // Add a condition to ensure instructions is an array before mapping
  const renderInstructions =
    instructions && Array.isArray(instructions)
      ? instructions.map((instruction, index) => (
          <Typography key={index} variant="body1" sx={{ fontWeight: "normal" }}>
            {index + 1}. {instruction}
          </Typography>
        ))
      : null;

  return (
    <Stack>
      <Stack
        gap="60px"
        sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
      >
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "normal", textTransform: "capitalize" }}
          >
            {name}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "normal" }}>
            Exercises keep your body fit and healthy.{" "}
            <span style={{ fontWeight: "bold", textTransform: "capitalize" }}>
              {name}
            </span>{" "}
            is one of the best exercises to target your{" "}
            <span style={{ fontWeight: "bold" }}>{target}</span> muscles. It
            will help you to gain mood and energy.
          </Typography>
          {extraDetail.map((item) => (
            <Stack
              key={item.name}
              direction="row"
              gap="24px"
              alignItems="center"
            >
              <Button
                sx={{
                  background: "#fff2db",
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                }}
              >
                <img
                  src={item.icon}
                  alt={bodyPart}
                  style={{ height: "50px", width: "50px" }}
                />
              </Button>
              <Typography textTransform="capitalize" variant="h6">
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Stack>
        <Typography variant="h5" sx={{ fontWeight: "bold", pb: "15px" }}>
          Instructions:
        </Typography>
        <Stack sx={{ gap: "10px", pl: "20px" }}>{renderInstructions}</Stack>
      </Stack>
    </Stack>
  );
};

export default Detail;

import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "2px",
            color: "#fff",
            background: "#ffa9a9",
            fontWeight: "bold",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
          className="normal"
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            fontWeight: "bold",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
          className="normal"
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        className="normal-2"
        ml="21px"
        color="#000"
        mt="11px"
        pb="10px"
        fontSize="25px"
        textTransform="capitalize"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;

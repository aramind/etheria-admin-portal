import { Slider, Typography } from "@mui/material";
import { amber, cyan, red, teal } from "@mui/material/colors";
import React from "react";

const difficultySliderConstants = {
  MIN_DIFFICULTY: 1,
  MAX_DIFFICULTY: 5,
  STEP_DIFFICULTY: 1,
  MARKS_DIFFICULTY: [
    {
      value: 1,
      label: "EASY",
    },
    {
      value: 2,
      label: "MODERATE",
    },
    {
      value: 3,
      label: "INTERMEDIATE",
    },
    {
      value: 4,
      label: "DIFFICULT",
    },
    {
      value: 5,
      label: "ADVANCED",
    },
  ],
};

const DifficultySlider = ({ field }) => {
  return (
    <Slider
      aria-label="Difficulty"
      value={field.value}
      onChange={(e, newValue) => field.onChange(newValue)}
      //   orientation="vertical"
      valueLabelDisplay="auto"
      l
      shiftStep={difficultySliderConstants.STEP_DIFFICULTY}
      min={difficultySliderConstants.MIN_DIFFICULTY}
      max={difficultySliderConstants.MAX_DIFFICULTY}
      marks={difficultySliderConstants.MARKS_DIFFICULTY.map((mark) => ({
        ...mark,
        label: (
          <Typography
            fontWeight={field.value === mark.value ? "bold" : "normal"}
            color={field.value === mark.value ? "primary.dark" : "font.gray"}
            fontSize={{
              xs: field.value === mark.value ? "0.8rem" : "0.7rem",
              md: field.value === mark.value ? "1rem" : "0.8rem",
            }}
            sx={{
              fontFamily: "Abel",
            }}
            l
          >
            {mark.label}
          </Typography>
        ),
      }))}
      sx={{
        "& .MuiSlider-track": {
          backgroundColor: "primary.semi",
          border: 0,
          height: "0.2rem", // Set the thickness of the track
        },
        "& .MuiSlider-rail": {
          backgroundColor: "info.light", // Set the color of the rail
          height: "0.2rem", // Set the thickness of the rail
        },
        "& .MuiSlider-thumb": {
          //   backgroundColor: "transparent",
          width: "1.2rem",
          height: "1.2rem",
        },
      }}
    />
  );
};

export default DifficultySlider;

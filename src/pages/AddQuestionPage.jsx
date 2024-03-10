import { Box, Container, Divider, Stack } from "@mui/material";
import React from "react";
import useStyles from "../hooks/useStyles";
import ElevatedSectionWrapper from "../wrappers/ElevatedSectionWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import LabelledSelect from "../components/form/LabelledSelect";
import SimpleSelect from "../components/SimpleSelect";
import constants from "../components/configs/constants";
import ControlledSimpleSelect from "../components/form/ControlledSimpleSelect";
import FormActionsContainer from "../containers/FormActionsContainer";
import FormActionButton from "../components/form/FormActionButton";
import questionSchema from "../schemas/question";
import ControlledChipMultiSelect from "../components/form/ControlledChipMultiSelect";
import ControlledChipMultiAutoComp from "../components/form/ControlledChipMultiAutoComp";
import DifficultySlider from "../components/form/DifficultySlider";
import FormInputLabel from "../components/form/FormInputLabel";

const AddQuestionPage = () => {
  const styles = useStyles();

  // form related
  const { register, handleSubmit, formState, reset, control } = useForm({
    resolver: zodResolver(questionSchema),
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log(data);
    console.log("Submitting question...", data);
  };

  const onError = (err) => {
    console.log("Error submitting question", err);
  };

  // handlers todo
  const handleClear = () => {
    console.log("handling clear");
  };
  const handleUpload = () => {
    console.log("handling clear");
  };

  return (
    <Container maxWidth="xl" sx={styles.mainContainer} disableGutters="true">
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <Stack spacing={1.5}>
          <Stack spacing={1.5} direction={{ xs: "column", md: "row" }}>
            <Stack spacing={1.5} flex={{ xs: 1, md: "50%" }}>
              <ElevatedSectionWrapper>
                <Box width={{ xs: 1 }} minWidth="300px">
                  <ControlledSimpleSelect
                    name="database"
                    id="add-question-database"
                    control={control}
                    label="database"
                    options={constants.DATABASES}
                  />
                </Box>
              </ElevatedSectionWrapper>
              <ElevatedSectionWrapper>
                <Stack spacing={1.5}>
                  {/* <ControlledChipMultiSelect
                    name="courses"
                    control={control}
                    id="controlled-multi-select"
                    label="course(s)"
                    options={constants.COURSES}
                  /> */}
                  <ControlledChipMultiAutoComp
                    name="courses"
                    control={control}
                    id="controlled-multi-auto-comp"
                    label="course(s)"
                    options={constants.COURSES}
                    free={false}
                    // chipColor={teal["A100"]}

                    textTransform="uppercase"
                  />

                  {/* <ControlledChipMultiSelect
                    name="subjects"
                    control={control}
                    id="controlled-multi-select"
                    label="subject(s)"
                    options={constants.SUBJECTS}
                  /> */}
                  <ControlledChipMultiAutoComp
                    name="subjects"
                    control={control}
                    id="controlled-multi-auto-comp"
                    label="subject(s)"
                    options={constants.SUBJECTS}
                    free={false}
                    // chipColor={amber["A100"]}
                    textTransform="uppercase"
                  />
                  {/* <ControlledChipMultiSelect
                    name="topics"
                    control={control}
                    id="controlled-multi-select"
                    label="select topic(s)"
                    options={constants.TOPICS}
                  /> */}
                  <ControlledChipMultiAutoComp
                    name="topics"
                    control={control}
                    id="controlled-multi-auto-comp"
                    label="topic(s)"
                    options={constants.TOPICS}
                    free={false}
                    // chipColor={cyan["A100"]}
                    textTransform="capitalize"
                  />
                </Stack>
              </ElevatedSectionWrapper>
              <ElevatedSectionWrapper>
                <ControlledChipMultiAutoComp
                  name="tags"
                  control={control}
                  id="controlled-multi-select"
                  label="select tag(s)"
                  options={constants.TAGS}
                  free={true}
                  // chipColor="transparent"
                  // chipColor={lime["A100"]}
                />
              </ElevatedSectionWrapper>
            </Stack>
            <Stack spacing={1.5} flex={{ xs: 1, md: "50%" }}>
              <ElevatedSectionWrapper>
                <FormInputLabel label="difficulty" />
                <Controller
                  id="difficulty-slider"
                  name="difficulty"
                  control={control}
                  defaultValue={3}
                  render={({ field }) => (
                    <Box sx={{ width: "100%", px: 5 }}>
                      <DifficultySlider field={field} />
                    </Box>
                  )}
                />
              </ElevatedSectionWrapper>
            </Stack>
          </Stack>
        </Stack>
        <br />
        <FormActionsContainer>
          <FormActionButton
            label="clear"
            onClickHandler={handleClear}
            variant="outlined"
          />
          <FormActionButton
            label="upload"
            onClickHandler={handleUpload}
            variant="outlined"
          />
          <FormActionButton type="submit" label="save" variant="contained" />
        </FormActionsContainer>
      </form>
    </Container>
  );
};

export default AddQuestionPage;

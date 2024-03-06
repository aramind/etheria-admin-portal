import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import useStyles from "../hooks/useStyles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import userSchema from "../schemas/user";
import ElevatedSectionWrapper from "../wrappers/ElevatedSectionWrapper";
import FormInputLabel from "../components/form/FormInputLabel";
import LabelledTextField from "../components/form/LabelledTextField";
import genInitialPassword from "../utils/login/genInitialPassword";
import SimpleSelect from "../components/SimpleSelect";

const AddUser = () => {
  const styles = useStyles();

  const roles = ["admin", "editor", "viewer"];
  //   form
  const { register, control, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(userSchema),
    mode: "onTouched",
  });

  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("Creating user...", data);
  };

  const onError = (err) => {
    console.log("ERROR creating user", err);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
      <Box sx={{ width: 1 }}>
        {/* <ElevatedSectionWrapper>
          <FormInputLabel label="Add new Users" />
        </ElevatedSectionWrapper>
        <br /> */}
        <ElevatedSectionWrapper>
          <Stack gap={4}>
            <Stack direction="row" spacing={2}>
              <Box flex="50%">
                <LabelledTextField
                  label="name"
                  id="name"
                  error={!!errors.name}
                  register={register}
                />
              </Box>
              <Box classname>
                <FormInputLabel label="role" />
                {/* <LabelledTextField
                  label="role"
                  id="role"
                  error={!!errors.role}
                  register={register}
                /> */}
                <SimpleSelect />
              </Box>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Box flex="50%">
                <LabelledTextField
                  label="username"
                  id="username"
                  error={!!errors.name}
                  register={register}
                />
              </Box>
              <Box flex="50%">
                <LabelledTextField
                  label="password"
                  id="password"
                  error={!!errors.password}
                  register={register}
                  defaultValue={genInitialPassword()}
                />
              </Box>
            </Stack>
          </Stack>
        </ElevatedSectionWrapper>
      </Box>
    </form>
  );
};

export default AddUser;

import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, TextField, useTheme } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { createMail } from "../../../api/firestore";
import SubmitFormButton from "./SubmitFormButton";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const ContactForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();
  const theme = useTheme();

  const onSubmit = async (data: FormData) => {
    // Handle form submission logic here, such as sending the form data to a server
    console.log(data);
    const { name, email, message } = data;
    await createMail(name, email, message);
    reset();
    navigate("/thankyou");
  };

  const inputProps = {
    sx: {
      "& label.Mui-focused": {
        color: "black",
      },
      "& label": {
        color: "black",
        fontSize: "20px",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        fontSize: "20px",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "black",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "black",
          borderWidth: "1px",
        },
        "&:hover fieldset": {
          borderColor: "black",
          borderWidth: "2px",
        },
        "&.Mui-focused fieldset": {
          borderColor: "black",
        },
      },
    },
  };

  return (
    <form
      style={{
        width: "100%",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                fullWidth
                error={!!errors.name}
                helperText={errors.name?.message}
                {...inputProps}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
                {...inputProps}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="message"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Message"
                fullWidth
                multiline
                rows={4}
                error={!!errors.message}
                helperText={errors.message?.message}
                {...inputProps}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <SubmitFormButton>Submit</SubmitFormButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;

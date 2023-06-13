import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { PALETTE } from "../../constants/palette";


const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: PALETTE.bgTwo,
  minHeight: "100vh",
  // alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  backgroundColor: PALETTE.bgTwo,
  // height: "100vh",
  alignItems: "start",
  justifyContent: "center",
  display: "flex",
  
}));

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));



  return (
    <Wrapper>
     
   
    </Wrapper>
  );
};

export default Contact;

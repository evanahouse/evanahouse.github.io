// import { Button } from "@mui/material";
// import { styled } from "@mui/system";
// import { PDFDownloadLink } from "@react-pdf/renderer";
// // import MyPDF from "../../assets/images/evanHouseResume.pdf"; // Import your PDF component
// import { PALETTE } from "../../constants/palette";
// import useIsMobile from "../../hooks/useIsMobile";

// interface StyledButtonProps {
//   showButton: boolean;
//   children?: React.ReactNode;
// }

// const StyledButton = styled(Button)(({ theme }) => ({
//   marginTop: theme.spacing(2),
//   alignSelf: "left",
//   marginLeft: "auto",
//   marginRight: "auto",
//   display: "block",
//   opacity: 0,
//   transition: "opacity 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
//   backgroundColor: PALETTE.bgOne,
//   typography: "h1",
//   "&:hover": {
//     backgroundColor: PALETTE.bgThree,
//     color: PALETTE.bgTwo,
//   },
// }));

// const DonwloadResumeButton = ({ showButton, children }: StyledButtonProps) => {
//   const { isMobile } = useIsMobile();
//   const [loading, setLoading] = useState(false);

// //   const handleDownload = () => {
// //     setLoading(true);
// //     // Simulate a delay to show the loading state
// //     setTimeout(() => {
// //       setLoading(false);
// //     }, 2000);
// //   };

//   return (
//     <PDFDownloadLink document={<MyPDF />} fileName="resume.pdf">
//       {({ blob, url, loading, error }) => (
//         <StyledButton
//           variant="contained"
//           disabled={loading || loading} // Disable the button while loading is true
//           onClick={handleDownload}
//           sx={{
//             opacity: showButton ? 1 : 0,
//             typography: isMobile ? "h6" : "h3",
//           }}
//         >
//           {loading ? "Generating PDF..." : children}
//         </StyledButton>
//       )}
//     </PDFDownloadLink>
//   );
// };

// export default DonwloadResumeButton;

import { Typography } from "@mui/material";

interface EducationItemProps {
    title: string;
    subtitle: string;
    timeline: string;
}

const EducationItem = ({title, subtitle, timeline}: EducationItemProps) => {
  return (
    <>
     
      <Typography
        variant="h5"
        
      >
        {title} <br />
      </Typography>
      <Typography
        variant="h6"
       
      >
        {subtitle} <br />
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontSize: "1.25rem",
          fontStyle: "italic",
        }}
      >
        {timeline}
        <br />
      </Typography>
    </>
  );
};

export default EducationItem;


import { Typography } from "@mui/material";
import useIsMobile from "../../hooks/useIsMobile";

interface EducationItemProps {
  title: string;
  subtitle: string;
  timeline: string;
}

const EducationItem = ({ title, subtitle, timeline }: EducationItemProps) => {
  const { isMobile } = useIsMobile();

  return (
    <>
      <Typography variant={isMobile ? "h6" : "h5"}>
        {title} <br />
      </Typography>
      <Typography variant="h6">
        {subtitle} <br />
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontSize: isMobile ? "0.9rem" : "1.25rem",
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

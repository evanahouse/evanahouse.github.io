import { Typography } from "@mui/material";
interface ExperienceItemProps {
  title: string;
  timeline: string;
  googleLink?: string;
  iosLink?: string;
  description: any;
  otherExperience?: boolean;
}

const ExperienceItem = ({
  title,
  timeline,
  googleLink,
  iosLink,
  description,
  otherExperience,
}: ExperienceItemProps) => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          textDecoration: "underline",
        }}
      >
        {title} <br />
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
      {!otherExperience && (
        <Typography
          variant="h6"
          sx={{
            fontSize: "1.25rem",
          }}
        >
          {" "}
          <a href={googleLink} target="_blank" rel="noopener noreferrer">
            Google Play
          </a>{" "}
          |{" "}
          <a href={iosLink} target="_blank" rel="noopener noreferrer">
            App Store
          </a>{" "}
          <br />
        </Typography>
      )}

      <Typography
        variant="h6"
        sx={{
          fontSize: "1.25rem",
        }}
      >
        {description.map((item: any) => {
          //return item and line break
          return (
            <>
              {item}
              <br />
            </>
          );
        })}
      </Typography>
    </>
  );
};

export default ExperienceItem;

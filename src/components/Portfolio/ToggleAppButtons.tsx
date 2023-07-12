import { Container, ToggleButton, ToggleButtonGroup } from "@mui/material";
import useIsMobile from "../../hooks/useIsMobile";

interface ToggleAppButtonsProps {
  selectedApp: string;
  handleAppChange: (event: any, newApp: string) => void;
}
const ToggleAppButtons = ({
  selectedApp,
  handleAppChange,
}: ToggleAppButtonsProps) => {
  const { isMobile } = useIsMobile();

  return (
    <Container
      sx={{
        height: isMobile ? "10%" : 50,
        display: "flex",
        justifyContent: "center",
        marginBottom: isMobile ? 2 : 10,
      }}
    >
      <ToggleButtonGroup
        value={selectedApp}
        exclusive
        onChange={handleAppChange}
      >
        <ToggleButton
          value="scatterbrainz"
          sx={{
            fontSize: isMobile ? ".75rem" : "1.5rem",
          }}
        >
          ScatterBrainz
        </ToggleButton>
        <ToggleButton
          sx={{
            fontSize: isMobile ? ".75rem" : "1.5rem",
          }}
          value="onebook"
        >
          OneBook
        </ToggleButton>
        <ToggleButton
          sx={{
            fontSize: isMobile ? ".75rem" : "1.5rem",
          }}
          value="othermind"
        >
          Other Mind
        </ToggleButton>
      </ToggleButtonGroup>
    </Container>
  );
};

export default ToggleAppButtons;


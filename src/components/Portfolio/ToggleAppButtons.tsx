import { Container, ToggleButton, ToggleButtonGroup } from "@mui/material";
import useIsMobile from "../../hooks/useIsMobile";

interface ToggleAppButtonsProps {
  selectedApp: string;
  handleAppChange: (
    event: any,
    newApp: "scatterbrainz" | "onebook" | "othermind"
  ) => void;
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
        marginBottom: isMobile ? 2 : 2,
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
            fontSize: isMobile ? ".75rem" : "1.25rem",
          }}
          //disabled if scatterbrainz is selected
          disabled={selectedApp === "scatterbrainz"}
        >
          ScatterBrainz
        </ToggleButton>
        <ToggleButton
          sx={{
            fontSize: isMobile ? ".75rem" : "1.25rem",
          }}
          disabled={selectedApp === "onebook"}
          value="onebook"
        >
          OneBook
        </ToggleButton>
        {/* <ToggleButton
          sx={{
            fontSize: isMobile ? ".75rem" : "1.5rem",
          }}
          value="othermind"
        >
          Other Mind
        </ToggleButton> */}
      </ToggleButtonGroup>
    </Container>
  );
};

export default ToggleAppButtons;

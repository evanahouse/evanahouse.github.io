import EvanHouseResume from "../../assets/images/evanHouseResume.pdf";
import MainActionButton from "../Home/components/MainActionButton";

const DownloadPDFButton = () => {
  const handleButtonClick = async () => {
    try {
      const response = await fetch(EvanHouseResume);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "evanHouseResume.pdf";
      link.click();
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <MainActionButton downloadAction={handleButtonClick} showButton={true}>Download Resume </MainActionButton>
  );
};

export default DownloadPDFButton;

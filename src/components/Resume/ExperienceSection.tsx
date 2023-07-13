import { Box, Container, Paper, Typography } from "@mui/material";
import useIsMobile from "../../hooks/useIsMobile";
import ExperienceItem from "./ExperienceItem";

const ExperienceSection = () => {
  const { isMobile } = useIsMobile();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        width: isMobile ? "100%" : "100%",
      }}
    >
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant={isMobile ?  "h6" : "h4"} gutterBottom>
          Experience
        </Typography>
        <ExperienceItem
          title="React Native Engineer, ScatterBrainz, New York, NY"
          timeline="January 2023 - Present"
          googleLink="https://play.google.com/store/apps/details?id=com.scatterbrainz.dev&hl=en_US&gl=US"
          iosLink="https://apps.apple.com/us/app/scatterbrainz/id1671936756"
          description={[
            "•Led app's end-to-end development, from client consultation to deployment on Google Play Store and Apple App Store Connect, ensuring timely delivery within strict project timelines.",
            "•Developed robust push notification delivery system utilizing OneSignal SDK, integrating Google Cloud Tasks to schedule future notifications.",
            "•Configured in-app purchases with RevenueCat, enabling seamless subscription management for users.",
            "•Employed Firebase Authentication to secure user registration and login functionalities.",
            "•Developed and deployed Firebase Cloud Functions for orchestrating serverless APIs and background tasks.",
          ]}
        />
        <Box sx={{ marginBottom: "2rem" }} /> {/* Spacer */}
        <ExperienceItem
          title="React Native Engineer, OneBook, St. Petersburg, FL"
          timeline="April 2022 - Present"
          googleLink="https://play.google.com/store/apps/details?id=com.onebook.dev&hl=en_US&gl=US"
          iosLink="https://apps.apple.com/us/app/onebook/id6443838662"
          description={[
            "•Utilized Stripe API to handle multi-party payments between users, service professionals, and client.",
            "•Integrated OneSignal notification service to deliver personalized push and email notifications to user base.",
            "•Built custom availability calendar for streamlining booking of service professionals in client’s locale.",
            "•Designed user-friendly job board where both clients and service professionals can manage appointments.",
          ]}
        />
        <Box sx={{ marginBottom: "2rem" }} /> {/* Spacer */}
        <ExperienceItem
          title="Junior React Native Engineer, Other Mind Inc., Malibu, CA"
          timeline="September 2021 - April 2022"
          googleLink="https://play.google.com/store/apps/details?id=com.othermind.om"
          iosLink="https://apps.apple.com/gb/app/other-mind/id1598691101"
          description={[
            "•Architected bi-directional in-app messaging with image, video, and real-time location sharing.",
            "•Collaborated with designers and produced Adobe XD mockups to ensure production-ready feature delivery.",
            "•Participated in code reviews with senior developers to improve code quality, maintainability, and performance.",
          ]}
        />
        <Box sx={{ marginBottom: "2rem" }} /> {/* Spacer */}
        <ExperienceItem
          title="Other Experience"
          timeline="June 2016 - December 2020"
          description={[
            "While at Virginia Tech, I developed and refined an innovative ocean wave energy harvester prototype, generating sustainable energy. As a Manufacturing Engineer with Boman Precision Technologies, I optimized machine shop equipment, leveraging CNC programming techniques to enhance product quality and reduce setup time. I pursued my passion for music as a Professional Drummer, touring nationally with renowned acts and collaborating with recording artists as a session drummer. While a Program Mentor at Rite of Passage Journeys, I led youth wilderness expeditions in the Hoh Rainforest. As an entrepreneur, I founded and operated a thriving residential window cleaning and home services company.",
          ]}
          otherExperience
        />
      </Paper>
    </Container>
  );
};

export default ExperienceSection;

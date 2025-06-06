import { Grid2 as Grid, Box, Typography } from "@mui/material";
import { SimpleDialog } from "../../../components/dialogs/SimpleDialog";
import { TechnologyChips } from "../TechnologyChips";
import { ProjectCategory, ProjectData } from "../types";
import { ProjectPreviewCard } from "./ProjectPreviewCard";
import { useState } from "react";
import { useIsMobileWidth } from "../../../hooks/useIsMobileWidth";
import { HorizontalImageList } from "../../../components/imageDisplay/HorizontalImageList";

interface AppData extends ProjectData {
  appImages: string[];
}

const data: AppData[] = [
  {
    appImages: [
      "/projectAssets/apps/alchemy/img1.png",
      "/projectAssets/apps/alchemy/img2.png",
      "/projectAssets/apps/alchemy/img3.png",
      "/projectAssets/apps/alchemy/img4.png",
      "/projectAssets/apps/alchemy/img5.png",
    ],
    title: "Web: Alchemy Employee Tool",
    description:
      "The Alchemy Web App is a tool for instant feedback, coaching, and career development designated for use by internal employees",
    details: `
    This is an internal initiative that I have led and developed from the ground up for the last 2 years. During this time, I have worn many hats and collaborated across various departments, including:

    - IT (for data security and compliance)
    - HR (for compliance)
    - UI/UX (for low and high fidelity designs, usability interviews)
    - Dev Team (architecture design, planning, and implementation)

    Implementation-wise, we follow a feature-driven design with a focus on reusable components. 
    <a href="https://neudesic.github.io/alchemy/?path=/docs/features-managers-my-direct-reports--docs" target="_blank">This storybook</a> provides a high-level overview of how we structure our components and features.

    We also adhere to a rigid structure and documentation due to the project being innersource, allowing any internal employee to contribute. Documentation includes:

    - PR Templates
    - Feature Wikis
    - ADRs
    - READMEs
    - SPIKE Docs
    `,
    image: "/projectAssets/apps/alchemy/image.png",
    category: ProjectCategory.APPS,
    technologies: [
      "React",
      "Azure Static Web App",
      "Typescript",
      "Vite v5",
      "Vitest",
      "Storybook v8",
      "React Query",
      "Firebase Hosting",
      "Docker",
      "MUI",
    ],
  },
  {
    appImages: [
      "/projectAssets/apps/homepro/homepage.png",
      "/projectAssets/apps/homepro/img2.png",
      "/projectAssets/apps/homepro/img3.png",
      "/projectAssets/apps/homepro/img4.png",
      "/projectAssets/apps/homepro/img5.png",
      "/projectAssets/apps/homepro/img6.png",
      "/projectAssets/apps/homepro/img7.png",
      "/projectAssets/apps/homepro/img8.png",
    ],
    title: "Mobile: HomePro App",
    description:
      "The Knock HomePro app empowers our network of Agents with the technology to deliver thorough home visit reports in real-time.",
    details: `
    The Knock HomePro app is a tool designed specifically for Knock Certified Agents. It empowers our network of Agents with the technology to deliver thorough home visit reports in real-time. With the HomePro app, these agents can price our customers’ homes quickly and accurately, and pinpoint any home preparations that will optimize the home’s value on the market.

    In my role, I led and contributed to the technical development, testing, and deployment of this mobile app alongside two other developers.

    Key highlights of my contributions include the integration of push notifications, real-time chat functionality, and the development of a Mortgage Calculator UI, among other features.
    `,
    image: "/projectAssets/apps/homepro/image.png",
    category: ProjectCategory.APPS,
    technologies: [
      "React Native",
      "GraphQL",
      "Javascript",
      "React Native CodePush",
      "CircleCI",
      "Fastlane",
      "React Native Paper",
      "iOS",
      "Android",
      "Redux Toolkit",
      "Jest",
      "DETOX (E2E Test Framework)",
      "BugSnag (Bug Reporting)",
      "Lottie",
      "Auth0",
    ],
  },
  {
    appImages: [
      "/projectAssets/apps/wedding/img1.png",
      "/projectAssets/apps/wedding/img2.png",
      "/projectAssets/apps/wedding/img3.png",
      "/projectAssets/apps/wedding/img4.png",
      "/projectAssets/apps/wedding/img5.png",
    ],
    title: "Web: My Wedding App",
    description:
      "I gamified my own wedding by creating a mobile friendly web application where attendees can take unique personalized photos from their perspectives.",
    details: `
    From my experience attending medium to large-sized weddings, I sometimes feel a bit awkward or unsure about what to do as a guest. While I understand that the day is not about the attendees, I can’t help but wonder if there’s a way to make the experience more engaging from guests' perspective rather than solely through the lens of the professional photographers.

    In this day and age, everyone has a phone, so <b>for my own wedding in 2023</b>, I created a mobile-friendly web app that allows guests to contribute to the experience. Alongside the beautiful, professionally staged photos, I wanted to capture the more candid, family-centered moments, giving attendees a way to view the wedding through each other’s eyes.

    At any point during the wedding, guests are encouraged to pull out their phones and capture any photos they’d like. Upon submission, these photos are automatically uploaded to a private Google Drive account I’ve set up specifically for the event.

    <b>Technical Details:</b>
    - The app is accessible via custom QR codes (now discontinued) placed strategically around the wedding venue, making it easy for guests to participate.

    - A Google API service account is used to manage and organize all submitted photos securely.

    - For younger guests, I’ve added a fun Dad Joke generator to keep things light and entertaining.
    `,
    image: "/projectAssets/apps/wedding/image.png",
    category: ProjectCategory.APPS,
    technologies: [
      "React",
      "Google Drive API",
      "Chakra UI",
      "Redux",
      "Azure App Service",
      "Express.js",
      "axios",
    ],
  },
  {
    appImages: [
      "/projectAssets/apps/poolsuite/img1.png",
      "/projectAssets/apps/poolsuite/img2.png",
      "/projectAssets/apps/poolsuite/img3.png",
      "/projectAssets/apps/poolsuite/img4.png",
      "/projectAssets/apps/poolsuite/img5.png",
    ],
    title: "Mobile: Poolsuite FM",
    description:
      "Poolsuite FM is the retro inspired ultra-summer music player. Built with React Native and seamless integrationg with SoundCloud",

    details: `
    I was recruited by my former CTO to help rewrite a music app using the latest version of React Native (0.68 at the time). 
    The opportunity was exciting, and I enjoyed collaborating with him to rebuild the app. 

    While the app's functionality was relatively straightforward, customizing the UI proved to be more complex. 
    Creating a smooth and visually appealing music player was a challenge. 
    I had to learn how to use <a href="https://github.com/doublesymmetry/react-native-track-player">React-Native-Track-Player</a> and create custom waveform bars using <a href="https://d3js.org/d3-array">D3 libraries</a>.
    `,
    image: "/projectAssets/apps/poolsuite/image.png",
    category: ProjectCategory.APPS,
    technologies: [
      "React Native",
      "D3.js",
      "Expo",
      "react-native-track-player",
      "react-native-reanimated",
      "Notion",
      "Contentful",
      "Flipper",
      "SoundCloud",
      "axios",
    ],
  },
  {
    appImages: [
      "/projectAssets/apps/events/img1.jpeg",
      "/projectAssets/apps/events/img2.webp",
      "/projectAssets/apps/events/img3.png",
      "/projectAssets/apps/events/img4.jpeg",
    ],
    title: "Mobile: White-label Events App",
    description:
      "White-label native iOS app for seamless communication and collaboration at events, enabling customer-centric engagement from any device, anytime, anywhere.",
    details: `
    The app enhances event management, providing companies worldwide with a seamless tool for hosting conferences (typically 1-3 days) to ensure smooth operations and an outstanding attendee experience. We've partnered with prominent clients, including Meta and the Game Developers Conference (GDC).
    
    Since taking ownership of the iOS app in 2019, I have managed, updated, and enhanced key features such as:
    - Offline storage with CoreData\n
    - Bluetooth geofencing using Gimbal\n
    - Custom build process that integrates with our internal API to apply client-specific branding and labels for each deployment\n
    `,
    image: "/projectAssets/apps/events/image.webp",
    category: ProjectCategory.APPS,
    technologies: [
      "iOS",
      "Objective-C",
      "Fastlane",
      "Gimbal SDK",
      "Amazon SNS",
      "Ruby",
    ],
  },
  {
    appImages: [
      "/projectAssets/apps/piedmontese-beef/img1.png",
      "/projectAssets/apps/piedmontese-beef/img2.png",
      "/projectAssets/apps/piedmontese-beef/img3.png",
      "/projectAssets/apps/piedmontese-beef/img4.png",
      "/projectAssets/apps/piedmontese-beef/img5.png",
    ],
    title: "Mobile: Piedmontese Beef App",
    description:
      "Mobile app created with Xamarin Native, where users can browse Piedmontese products, nutritional information, cookbooks and more.",
    details: `
    The Piedmontese Beef Mobile App was developed to enhance customer engagement and retention among both existing and new users. The project was executed by a dedicated team comprising myself, 1 other developer and one designer. The technology stack was strategically selected to align with the company's core technologies and existing Web API infrastructure.

The team successfully delivered the Minimum Viable Product (MVP) within a three-month timeframe.

    `,
    image: "/projectAssets/apps/piedmontese-beef/appicon.webp",
    category: ProjectCategory.APPS,
    technologies: ["Xamarin", "Xamarin.iOS", "Fastlane", ".NET 6"],
  },
];

export const AppsPreview = () => {
  const [selectedApp, setSelectedApp] = useState<AppData | null>(null);
  const isMobileWidth = useIsMobileWidth();

  const handleCloseDialog = () => {
    setSelectedApp(null);
  };
  return (
    <>
      {data.map((appData, i) => {
        return (
          <ProjectPreviewCard
            ctaTitle={"View Details"}
            key={i}
            onClick={() => {
              setSelectedApp(appData);
            }}
            maxPreviewChip={2}
            showPreviewChips
            {...appData}
          />
        );
      })}
      <SimpleDialog
        open={!!selectedApp}
        onClose={handleCloseDialog}
        title={selectedApp?.title || ""}
        maxWidth="xl"
      >
        {selectedApp && (
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Box
                position="relative"
                height={isMobileWidth ? "400px" : "600px"}
                width="100%"
              >
                <HorizontalImageList images={selectedApp.appImages} />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  p: 2,
                  overflowY: isMobileWidth ? "inherit" : "auto",
                  height: "600px",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Technologies Used
                </Typography>
                <Box
                  sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, pb: 2 }}
                >
                  <TechnologyChips technologies={selectedApp.technologies} />
                </Box>
                <Typography variant="h6">Summary</Typography>
                <Typography
                  variant="body1"
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{
                    __html: selectedApp.details ?? "",
                  }}
                ></Typography>
              </Box>
            </Grid>
          </Grid>
        )}
      </SimpleDialog>
    </>
  );
};

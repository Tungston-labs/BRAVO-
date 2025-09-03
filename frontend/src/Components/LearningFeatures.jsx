// import React from "react";
// import { 
//   Container, 
//   Background, 
//   Title, 
//   Grid, 
//   Feature, 
//   IconWrapper, 
//   TextWrapper, 
//   Heading, 
//   Paragraph 
// } from "./LearningFeatures.styles";

// // Import SVGs
// import customizedIcon from "../assets/customized.svg";
// import curriculumIcon from "../assets/curriculum.svg";
// import fluencyIcon from "../assets/fluency.svg";
// import onlineIcon from "../assets/online.svg";
// import smallBatchesIcon from "../assets/smallbatches.svg";
// import oneOnOneIcon from "../assets/oneon.svg";

// const LearningFeatures = () => {
//   return (
//     <Container>
//       <Background /> {/* Background is handled in style.js */}
//       <Title>Tailored Learning for Every Student</Title>
//       <Grid>
//         <Feature>
//           <IconWrapper>
//             <img src={customizedIcon} alt="Customized Programs" />
//           </IconWrapper>
//           <TextWrapper>
//             <Heading>Customized Programs for Every Learner.</Heading>
//             <Paragraph>
//               Every learner is different — that’s why our programs are designed 
//               to match your unique goals and learning style.
//             </Paragraph>
//           </TextWrapper>
//         </Feature>

//         <Feature>
//           <IconWrapper>
//             <img src={curriculumIcon} alt="Curriculum Coaching" />
//           </IconWrapper>
//           <TextWrapper>
//             <Heading>Curriculum–Based Coaching</Heading>
//             <Paragraph>
//               Master every topic with expert guidance aligned to CBSE, ICSE, 
//               IGCSE & State Board.
//             </Paragraph>
//           </TextWrapper>
//         </Feature>

//         <Feature>
//           <IconWrapper>
//             <img src={fluencyIcon} alt="Fluency" />
//           </IconWrapper>
//           <TextWrapper>
//             <Heading>Fluency & Real-Life Communication</Heading>
//             <Paragraph>
//               Speak French with confidence through interactive activities, 
//               role-plays, and real conversations.
//             </Paragraph>
//           </TextWrapper>
//         </Feature>

//         <Feature>
//           <IconWrapper>
//             <img src={onlineIcon} alt="Online & Offline" />
//           </IconWrapper>
//           <TextWrapper>
//             <Heading>Online & Offline Classes</Heading>
//             <Paragraph>
//               Learn from home or join our vibrant classrooms — your choice, 
//               your comfort.
//             </Paragraph>
//           </TextWrapper>
//         </Feature>

//         <Feature>
//           <IconWrapper>
//             <img src={smallBatchesIcon} alt="Small Batches" />
//           </IconWrapper>
//           <TextWrapper>
//             <Heading>Small Batches. Big Attention.</Heading>
//             <Paragraph>
//               We keep class sizes small to ensure individual support and faster 
//               progress.
//             </Paragraph>
//           </TextWrapper>
//         </Feature>

//         <Feature>
//           <IconWrapper>
//             <img src={oneOnOneIcon} alt="One-on-One" />
//           </IconWrapper>
//           <TextWrapper>
//             <Heading>Dedicated One-on-One Classes</Heading>
//             <Paragraph>
//               Personalized tutoring with a dedicated instructor for a fully 
//               customized and impactful learning experience.
//             </Paragraph>
//           </TextWrapper>
//         </Feature>
//       </Grid>
//     </Container>
//   );
// };

// export default LearningFeatures;


import React from "react";
import { 
  Container, 
  Background, 
  Title, 
  Grid, 
  Feature, 
  IconWrapper, 
  TextWrapper, 
  Heading, 
  Paragraph 
} from "./LearningFeatures.styles";

// Import SVGs
import customizedIcon from "../assets/customized.svg";
import curriculumIcon from "../assets/curriculum.svg";
import fluencyIcon from "../assets/fluency.svg";
import onlineIcon from "../assets/online.svg";
import smallBatchesIcon from "../assets/smallbatches.svg";
import oneOnOneIcon from "../assets/oneon.svg";

const LearningFeatures = () => {
  return (
    <Container>
      <Background /> {/* Background handled in style.js */}
      <Title>Tailored Learning for Every Student</Title>
      <Grid>
        <Feature>
          <IconWrapper>
            <img src={customizedIcon} alt="Customized Programs" />
          </IconWrapper>
          <TextWrapper>
            <Heading>Customized Programs for Every Learner.</Heading>
            <Paragraph>
              Every learner is different — that’s why our programs are designed 
              to match your unique goals and learning style.
            </Paragraph>
          </TextWrapper>
        </Feature>

        <Feature>
          <IconWrapper>
            <img src={onlineIcon} alt="Online & Offline" />
          </IconWrapper>
          <TextWrapper>
            <Heading>Online & Offline Classes</Heading>
            <Paragraph>
              Learn from home or join our vibrant classrooms — your choice, 
              your comfort.
            </Paragraph>
          </TextWrapper>
        </Feature>

        <Feature>
          <IconWrapper>
            <img src={curriculumIcon} alt="Curriculum Coaching" />
          </IconWrapper>
          <TextWrapper>
            <Heading>Curriculum–Based Coaching</Heading>
            <Paragraph>
              Master every topic with expert guidance aligned to CBSE, ICSE, 
              IGCSE & State Board.
            </Paragraph>
          </TextWrapper>
        </Feature>

        <Feature>
          <IconWrapper>
            <img src={smallBatchesIcon} alt="Small Batches" />
          </IconWrapper>
          <TextWrapper>
            <Heading>Small Batches. Big Attention.</Heading>
            <Paragraph>
              We keep class sizes small to ensure individual support and faster 
              progress.
            </Paragraph>
          </TextWrapper>
        </Feature>

        <Feature>
          <IconWrapper>
            <img src={fluencyIcon} alt="Fluency" />
          </IconWrapper>
          <TextWrapper>
            <Heading>Fluency & Real-Life Communication</Heading>
            <Paragraph>
              Speak French with confidence through interactive activities, 
              role-plays, and real conversations.
            </Paragraph>
          </TextWrapper>
        </Feature>

        <Feature>
          <IconWrapper>
            <img src={oneOnOneIcon} alt="One-on-One" />
          </IconWrapper>
          <TextWrapper>
            <Heading>Dedicated One-on-One Classes</Heading>
            <Paragraph>
              Personalized tutoring with a dedicated instructor for a fully 
              customized and impactful learning experience.
            </Paragraph>
          </TextWrapper>
        </Feature>
      </Grid>
    </Container>
  );
};

export default LearningFeatures;


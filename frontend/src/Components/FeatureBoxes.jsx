// // FeatureBoxes.jsx
// import React from 'react';
// import {
//   Container,
//   Box,
//   TextContent,
//   Title,
//   Description,
//   ImagePlaceholder,
// } from './FeatureBoxes.styles';

// // Importing local images
// import coachingImage from '../assets/coaching.png';
// import classesImage from '../assets/classess.png';
// import instructorImage from '../assets/instructor.png';

// const features = [
//   {
//     title: 'Complete French Coaching – KG to Degree',
//     description:
//       "We are proud to be one of the few institutions that provide comprehensive French learning for all academic levels. Whether you're starting fresh in kindergarten or preparing for university exams, Bravo Education is your one-stop destination for structured and high-quality French language training.",
//     image: coachingImage,
//     imageAlt: 'Coaching illustration',
//   },
//   {
//     title: 'Syllabus-Aligned, Customized Classes',
//     description:
//       "Our programs are specifically designed for CBSE French, ICSE French, State Board French, IGCSE French, and University curricula. We don’t use one-size-fits-all materials—each student receives training that aligns with their exact academic needs, helping them score better and understand deeper.",
//     image: classesImage,
//     imageAlt: 'Classes illustration',
//   },
//   {
//     title: 'Friendly, Experienced Instructors',
//     description:
//       "Our expert French tutors are not only fluent in French but are also trained in modern teaching methods. With years of experience in handling learners of different ages, our instructors ensure that each student feels supported, motivated, and confident in their learning journey.",
//     image: instructorImage,
//     imageAlt: 'Instructor illustration',
//   },
// ];

// const FeatureBoxes = () => {
//   return (
//     <Container>
//       {features.map((feature, index) => (
//         <Box key={index}>
//           <TextContent>
//             <Title>{feature.title}</Title>
//             <Description>{feature.description}</Description>
//           </TextContent>
//           <ImagePlaceholder>
//             <img
//               src={feature.image}
//               alt={feature.imageAlt}
//               style={{ width: '100%', height: 'auto' }}
//             />
//           </ImagePlaceholder>
//         </Box>
//       ))}
//     </Container>
//   );
// };

// export default FeatureBoxes;



// FeatureBoxes.jsx
import React from 'react';
import {
  Container,
  Box,
  TextContent,
  Title,
  Description,
  ImagePlaceholder,
} from './FeatureBoxes.styles';

// Importing local images
import coachingImage from '../assets/coaching.png';
import classesImage from '../assets/classess.png';
import instructorImage from '../assets/instructor.png';

const features = [
  {
    title: 'Complete French Coaching – KG to Degree',
    description:
      "We are proud to be one of the few institutions that provide comprehensive French learning for all academic levels. Whether you're starting fresh in kindergarten or preparing for university exams, Bravo Education is your one-stop destination for structured and high-quality French language training.",
    image: coachingImage,
    imageAlt: 'Coaching illustration',
  },
  {
    title: 'Syllabus-Aligned, Customized Classes',
    description:
      "Our programs are specifically designed for CBSE French, ICSE French, State Board French, IGCSE French, and University curricula. We don’t use one-size-fits-all materials—each student receives training that aligns with their exact academic needs, helping them score better and understand deeper.",
    image: classesImage,
    imageAlt: 'Classes illustration',
  },
  {
    title: 'Friendly, Experienced Instructors',
    description:
      "Our expert French tutors are not only fluent in French but are also trained in modern teaching methods. With years of experience in handling learners of different ages, our instructors ensure that each student feels supported, motivated, and confident in their learning journey.",
    image: instructorImage,
    imageAlt: 'Instructor illustration',
  },
];

const FeatureBoxes = () => {
  return (
    <Container>
      {features.map((feature, index) => (
        <Box key={index}>
          <TextContent>
            <Title>{feature.title}</Title>
            <Description>{feature.description}</Description>
          </TextContent>
          <ImagePlaceholder>
            <img
              src={feature.image}
              alt={feature.imageAlt}
            />
          </ImagePlaceholder>
        </Box>
      ))}
    </Container>
  );
};

export default FeatureBoxes;

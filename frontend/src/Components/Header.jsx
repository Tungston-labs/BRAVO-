// import React from "react";
// import {
//   HeroWrapper,
//   ContentWrapper,
//   Title,
//   Subtitle,
//   RegisterButton,
//   BackgroundImage,
// } from "./Header.styles";

// import Background from "../assets/background1.png"; // Import your single background image

// const Header = () => {
//   return (
//     <HeroWrapper>
//       <BackgroundImage bg={Background} /> {/* Background as prop */}
//       <ContentWrapper>
//         <div>
//           <Title>
//             Bravo Education <br /> French Classes
//           </Title>
//           <Subtitle>
//             From Kindergarten to Degree – Learn French the Smart Way.
//           </Subtitle>
//           <RegisterButton>Register now</RegisterButton>
//         </div>
//       </ContentWrapper>
//     </HeroWrapper>
//   );
// };

// export default Header;


// Header.jsx
import React from "react";
import {
  HeroWrapper,
  ContentWrapper,
  Title,
  Subtitle,
  RegisterButton,
  BackgroundImage,
} from "./Header.styles";

import Background from "../assets/background1.png"; // desktop background
import BackgroundMbl from "../assets/background1-mbl.png"; // mobile background

const Header = () => {
  return (
    <HeroWrapper>
      <BackgroundImage bg={Background} bgMbl={BackgroundMbl} /> {/* background as prop */}
      <ContentWrapper>
        <div>
          <Title>
            Bravo Education <br /> French Classes
          </Title>
          <Subtitle>
            From Kindergarten to Degree – Learn French the Smart Way.
          </Subtitle>
          <RegisterButton>Register now</RegisterButton>
        </div>
      </ContentWrapper>
    </HeroWrapper>
  );
};

export default Header;

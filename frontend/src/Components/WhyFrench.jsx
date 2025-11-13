import React from "react";
import {
  SectionWrapper,
  SectionTitle,
  SectionDesc,
  ItemsWrapper,
  ItemCard,
  ItemIcon,
  ItemText,
} from "./WhyFrench.styles";

import GraduateIcon from "../assets/graduate.svg";
import JobsIcon from "../assets/jobs.svg";
import CommunicationIcon from "../assets/communication.svg";
import BrainIcon from "../assets/brain.svg";

const WhyFrench = () => {
  return (
    <SectionWrapper>
      <SectionTitle>Why Learn French?</SectionTitle>
      <SectionDesc>
        French is more than a language – it’s a gateway to the world. Spoken
        across 29 countries and used by over 300 million people, it unlocks
        global careers, education, and cultural experiences. At Bravo Education,
        we help you harness the power of French through expert coaching from KG
        to Degree level, turning your learning into lifelong opportunities.
      </SectionDesc>

      <ItemsWrapper>
        <ItemCard>
          <ItemIcon>
            <img src={GraduateIcon} alt="Universities" />
          </ItemIcon>
          <ItemText>International universities and scholarships</ItemText>
        </ItemCard>

        <ItemCard>
          <ItemIcon>
            <img src={JobsIcon} alt="Jobs" />
          </ItemIcon>
          <ItemText>
            Global job markets in hospitality, aviation, diplomacy, and business
          </ItemText>
        </ItemCard>

        <ItemCard>
          <ItemIcon>
            <img src={CommunicationIcon} alt="Communication" />
          </ItemIcon>
          <ItemText>
            Better communication while traveling or studying abroad
          </ItemText>
        </ItemCard>

        <ItemCard>
          <ItemIcon>
            <img src={BrainIcon} alt="Brain Function" />
          </ItemIcon>
          <ItemText>
            Improved brain function, memory, and creativity
          </ItemText>
        </ItemCard>
      </ItemsWrapper>
    </SectionWrapper>
  );
};

export default WhyFrench;

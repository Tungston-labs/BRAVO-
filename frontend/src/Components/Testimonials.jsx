import React, { useEffect, useMemo, useState, useCallback } from "react";
import {
  Section,
  Inner,
  Heading,
  SubHeading,
  Rail,
  ReviewCard,
  ProfileContainer,
  ProfileImage,
  Stars,
  Name,
  Quote,
  Text,
  ArrowLeft,
  ArrowRight,
} from "./Testimonials.styles";

import { TbArrowBigLeftLinesFilled, TbArrowBigRightLinesFilled } from "react-icons/tb";

import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import profile4 from "../assets/profile4.png";
import profile5 from "../assets/profile5.png";
import profile6 from "../assets/profile6.png";
import profile7 from "../assets/profile7.png";
import profile8 from "../assets/profile8.png";
import profile9 from "../assets/profile9.png";


const testimonialsData = [
  {
    id: 1,
    name: "Thoufeeq Haneefa",
    image: profile1,
    review:
      "I had an excellent experience with BRAVO EDUCATION. The personal attention given to each student is commendable. The quality of courses offered is top-notch and the faculty members are experts in their respective fields. I would highly recommend BRAVO EDUCATION to anyone looking for coaching services.",
  },
  {
    id: 2,
    name: "Abdul Ahad",
    image: profile2,
    review:
      "Bravo Education is an excellent coaching center that offers high specialization and a relevant curriculum for competitive exams. The center also provides extracurricular activities to ensure overall development. With their top-notch facilities and experienced faculty, Bravo Education is the perfect choice for students aiming for success.",
  },
  {
    id: 3,
    name: "Bipin",
    image: profile3,
    review:
      "BRAVO EDUCATION is a highly specialized coaching center that excels in providing top-notch education. The expert faculty and comprehensive study materials make it stand out. The personalized attention and focused approach ensure excellent results. I highly recommend BRAVO EDUCATION for anyone seeking quality coaching.",
  },
  {
    id: 4,
    name: "karthika",
    image: profile4,
    review:
      "Bravo Education is an exceptional coaching center that offers top-quality courses. The highly experienced faculty ensures that students receive the best guidance and support. Their commitment to excellence sets them apart from other coaching centers, making them a top choice for those seeking academic success.",
  },
  {
    id: 5,
    name: "safar iqbal",
    image: profile5,
    review:
      "This tuition life exposes us to new experience and things that we were not familiar with earlier. This is an exciting adventure and a transformative period in one’s life.",
  },
  {
    id: 6,
    name: "Faisal K K",
    image: profile6,
    review:
      "My daughter is learning French from Bravo Education, and we are very happy with the classes. Her teacher, Alfa ma'am, is excellent — very kind, supportive, and experienced. She explains everything clearly, and my daughter has improved a lot in both speaking and understanding French. The tuition is flexible and perfect for school-level and exam preparation. Highly recommended for anyone looking for good French tuition!",
  },
  {
    id: 7,
    name: "febiya fathima",
    image: profile7,
    review:
      "Excellent language classes for French at Bravo Education! The faculty is highly experienced and expert in their teaching. I have learned so much and would highly recommend their classes to anyone looking to improve their French skills.",
  },
  {
    id: 8,
    name: "Sajin James P S",
    image: profile8,
    review:
      "As a beginner, I was intimidated by the thought of learning French. But the instructor made me feel at ease, and the class was structured in a way that made sense to me. I'm now able to hold basic conversations and understand French media. C'est super!",
  },
  {
    id: 9,
    name: "Deepthi Satheesan",
    image: profile9,
    review:
      "My daughter thoroughly enjoyed the French tuition classes! The tutor is patient, knowledgeable, and explains everything in detail, making learning fun and effective. Highly recommend for anyone looking to learn French!",
  },
];

const mod = (n, m) => ((n % m) + m) % m;

const Testimonials = () => {
  const defaultCenterIndex = Math.max(
    0,
    testimonialsData.findIndex((t) => t.id === 2)
  );
  const [centerIndex, setCenterIndex] = useState(
    defaultCenterIndex === -1 ? 1 : defaultCenterIndex
  );
  const total = testimonialsData.length;

  const leftIndex = useMemo(() => mod(centerIndex - 1, total), [centerIndex, total]);
  const rightIndex = useMemo(() => mod(centerIndex + 1, total), [centerIndex, total]);

  const visible = useMemo(
    () => [testimonialsData[leftIndex], testimonialsData[centerIndex], testimonialsData[rightIndex]],
    [leftIndex, centerIndex, rightIndex]
  );

  const handleKey = useCallback(
    (e) => {
      if (e.key === "ArrowLeft") setCenterIndex((i) => mod(i - 1, total));
      if (e.key === "ArrowRight") setCenterIndex((i) => mod(i + 1, total));
    },
    [total]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <Section>
      <Inner>
        <Heading>Testimonials</Heading>
        <SubHeading>
          Discover what our students have to say about their journey and how we
          helped them take the next step toward their dreams.
        </SubHeading>

        <ArrowLeft onClick={() => setCenterIndex((i) => mod(i - 1, total))}>
          <TbArrowBigLeftLinesFilled size={44} />
        </ArrowLeft>

        <Rail aria-live="polite">
          {visible.map((t, i) => {
            const isCenter = i === 1;
            const onClick = () => {
              if (i === 0) setCenterIndex((idx) => mod(idx - 1, total));
              if (i === 2) setCenterIndex((idx) => mod(idx + 1, total));
            };

            return (
              <ReviewCard
                key={t.id}
                active={isCenter}
                role="button"
                tabIndex={0}
                onClick={onClick}
                aria-pressed={isCenter}
                aria-label={`${t.name} testimonial ${isCenter ? "(active)" : ""}`}
              >
                <ProfileContainer active={isCenter}>
                  <ProfileImage src={t.image} alt={t.name} />
                </ProfileContainer>

                <Stars active={isCenter}>★★★★★</Stars>
                <Name>{t.name}</Name>
                <Quote>❝</Quote>
                <Text>{t.review}</Text>
              </ReviewCard>
            );
          })}
        </Rail>

        <ArrowRight onClick={() => setCenterIndex((i) => mod(i + 1, total))}>
          <TbArrowBigRightLinesFilled size={44} />
        </ArrowRight>
      </Inner>
    </Section>
  );
};

export default Testimonials;

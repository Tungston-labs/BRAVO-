import React from "react";
import { BannerWrapper, BannerContent, BannerItem, StarIcon } from "./ScrollingBanner.styles";
import { MdStars } from "react-icons/md";

const ScrollingBanner = () => {
    return (
        <BannerWrapper>
            <BannerContent>
                <BannerItem>Professional French Coaching for ICSE, CBSE & IGCSE
                </BannerItem>
                <StarIcon><MdStars /></StarIcon>
                <BannerItem>Expert-Led Online and Offline French Classes
                </BannerItem>
                <StarIcon><MdStars /></StarIcon>
                <BannerItem>Master French for Career, Travel, and Education</BannerItem>
                <StarIcon><MdStars /></StarIcon>
            </BannerContent>

            <BannerContent>
                <BannerItem>Join Bravo Education and Excel in French Fluency</BannerItem>
                <StarIcon><MdStars /></StarIcon>
                <BannerItem>Personalized One-on-One French Training
                </BannerItem>
                <StarIcon><MdStars /></StarIcon>
                <BannerItem>Enhance Communication Skills and Exam Performance</BannerItem>
                <StarIcon><MdStars /></StarIcon>
            </BannerContent>
        </BannerWrapper>
    );
};

export default ScrollingBanner;

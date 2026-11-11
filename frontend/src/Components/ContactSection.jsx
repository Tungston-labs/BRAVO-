import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import {
  SectionContainer,
  ContentWrapper,
  LeftContent,
  Title,
  Description,
  FormBox,
  Input,
  TextArea,
  Button,
} from "./ContactSection.styles";

const ContactSection = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    source: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/contact/",
        formData
      );

      if (response.status === 200 && response.data.success) {
        await Swal.fire({
          icon: "success",
          title: "Message Sent",
          text: "We'll get back to you shortly!",
          confirmButtonColor: "#002654",
        });

        setFormData(initialFormData);
      }

    } catch (err) {
      console.error("Contact API Error:", err);

      Swal.fire({
        icon: "error",
        title: "Oops!",
        text:
          err.response?.data?.error ||
          "Unable to send your message. Please try again later.",
        confirmButtonColor: "#002654",
      });

    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionContainer>
      <ContentWrapper>

        <LeftContent>
          <Title>Ready to Get Started?</Title>

          <Description>
            We're excited to welcome you to the Bravo family!
            <br />
            Start your French journey today with our free trial
            class, explore your ideal course, and let's learn the
            language of opportunity together.
          </Description>
        </LeftContent>

        <FormBox as="form" onSubmit={handleSubmit}>

          <Input
            type="text"
            name="firstName"
            placeholder="First Name:"
            value={formData.firstName}
            onChange={handleChange}
            required
            autoComplete="off"
          />

          <Input
            type="text"
            name="lastName"
            placeholder="Last Name:"
            value={formData.lastName}
            onChange={handleChange}
            required
            autoComplete="off"
          />

          <Input
            type="email"
            name="email"
            placeholder="Email Address:"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="off"
          />

          <Input
            type="text"
            name="source"
            placeholder="How did you hear about us?"
            value={formData.source}
            onChange={handleChange}
            autoComplete="off"
          />

          <TextArea
            name="message"
            placeholder="Your Message/Query:"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            autoComplete="off"
          />

          <Button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </Button>

        </FormBox>

      </ContentWrapper>
    </SectionContainer>
  );
};

export default ContactSection;
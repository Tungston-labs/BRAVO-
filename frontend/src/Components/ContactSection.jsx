import React, { useState } from "react";
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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    source: "",
    message: "",
  });

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
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.firstName + " " + formData.lastName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message + "\nSource: " + formData.source);

    const response = await fetch("/sendmail.php", {
      method: "POST",
      body: formDataToSend,
    });

    const result = await response.text();

    if (result === "success") {
      Swal.fire({
        icon: "success",
        title: "Message Sent ",
        text: "We’ll get back to you shortly!",
        confirmButtonColor: "#0a1a3b",
      });

      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        source: "",
        message: "",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Failed to send email. Try again.",
        confirmButtonColor: "#d33",
      });
    }
  } catch (err) {
    console.error(err);
    Swal.fire({
      icon: "warning",
      title: "Something went wrong ",
      text: "Please try again later.",
      confirmButtonColor: "#f39c12",
    });
  } finally {
    setLoading(false);
  }
};


  return (
    <SectionContainer>
      <ContentWrapper>
        {/* Left Side */}
        <LeftContent>
          <Title>Ready to Get Started ?</Title>
          <Description>
            We’re excited to welcome you to the Bravo family! <br />
            Start your French journey today with our free trial class, explore
            your ideal course, and let’s learn the language of opportunity
            together.
          </Description>
        </LeftContent>

        {/* Right Side - Form */}
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

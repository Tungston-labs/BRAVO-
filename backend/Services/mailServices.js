const transporter = require("../Config/mailConfig");

const sendContactMail = async ({
  firstName,
  lastName,
  company,
  email,
  companySize,
  source,
  message,
}) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "New Contact Form Submission - Bravo",
    html: `
      <h3>New Enquiry Received:</h3>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company Size:</strong> ${companySize}</p>
      <p><strong>Heard about us via:</strong> ${source}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendContactMail;
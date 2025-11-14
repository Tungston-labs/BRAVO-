const transporter = require("../Config/mailConfig");

exports.sendContactEmail = async (req, res) => {
  console.log("📩 Incoming body:", req.body);

  const { firstName, lastName, email, source, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Submission -Bravo ${firstName} ${lastName}`,
    html: `
      <h3>New Enquiry Received:</h3>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Heard about us via:</strong> ${source}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully ✅" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email ❌" });
  }
};

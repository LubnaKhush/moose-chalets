import nodemailer from "nodemailer";
import multer from "multer";

// Set up multer to handle file uploads
const upload = multer({
  storage: multer.memoryStorage(), // Store files in memory
});

// Create a Next.js API handler
const handler = async (req, res) => {
  if (req.method === "POST") {
    upload.single("attachment")(req, res, async (err) => {
      if (err) {
        return res.status(500).json({ error: "File upload failed" });
      }

      const {
        name,
        email,
        phone,
        documentNumber,
        subject,
        message,
        paymentMethod,
        guestCount,
        mattressOption,
        date,
      } = req.body;

      const attachment = req.file;

      // Create a transporter for sending emails
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Prepare email options for admin
      const adminMailOptions = {
        from: process.env.EMAIL_USER,
        to: "lubna.shamsher@gmail.com", // Change to your email address
        subject: subject || "New Inquiry Received",
        text: `Hello, my name is ${name}. I can be reached at ${phone}. My document number is ${documentNumber}. ${message} I would like to pay by ${paymentMethod}, and I will be traveling with ${guestCount} guests. ${mattressOption} The date of my reservation is ${date}.`,
        html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
      <h2 style="color: #0056b3;">New Inquiry Details</h2>
      <p>Hello, my name is <strong>${name}</strong>. I can be reached at <strong>${phone}</strong>. My document number is <strong>${documentNumber}</strong>.</p>
      <p>Sender Message: ${message}</p>
      <p>I would like to pay by <strong>${paymentMethod}</strong>, and I will be traveling with <strong>${guestCount}</strong> guests, mattress ${
          mattressOption ? " needed " : "not needed"
        } The date of my reservation is <strong>${date}</strong>.</p>
      <p>Email: ${email}</p>
    </div>
  `,
        attachments: attachment
          ? [
              {
                filename: attachment.originalname,
                content: attachment.buffer,
                contentType: attachment.mimetype,
              },
            ]
          : [],
      };

      // Prepare email options for client
      const clientMailOptions = { 
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Your Submission Details",
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
            <h2 style="color: #0056b3;">Your Submission Details</h2>
            <p>Hello <strong>${name}</strong>,</p>
            <p>Thank you for your submission! Here are the details we received:</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Document Number:</strong> ${documentNumber}</p>
            <p><strong>Message:</strong> ${message}</p>
            <p><strong>Payment Mode:</strong> ${paymentMethod}</p>
            <p><strong>Guest Count:</strong> ${guestCount}</p>
            <p><strong>Mattress :</strong> ${
              mattressOption || "not needed"
            }</p>
            <p><strong>Date:</strong> ${date}</p>
          </div>
        `,
        attachments: attachment
          ? [
              {
                filename: attachment.originalname,
                content: attachment.buffer,
                contentType: attachment.mimetype,
              },
            ]
          : [],
      };

      try {
        // Send both emails in parallel
        await Promise.all([
          transporter.sendMail(adminMailOptions),
          transporter.sendMail(clientMailOptions),
        ]);
        return res.status(200).json({ message: "Emails sent successfully!" });
      } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: "Failed to send email" });
      }
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

// Disable body parsing for file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;

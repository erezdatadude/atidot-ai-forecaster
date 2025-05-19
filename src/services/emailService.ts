
import emailjs from 'emailjs-com';

// Initialize EmailJS with your User ID
export const initEmailJS = () => {
  // Replace this with your actual EmailJS User ID from Account > API Keys
  emailjs.init("YOUR_USER_ID_HERE");
};

export interface EmailData {
  name: string;
  company: string;
  email: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: "info@atidot.ai",
      from_name: data.name,
      from_company: data.company,
      from_email: data.email,
      subject: "Contact Request from ATIDOT.ai website",
    };
    
    await emailjs.send(
      "YOUR_SERVICE_ID_HERE", // Replace with your EmailJS service ID
      "YOUR_TEMPLATE_ID_HERE", // Replace with your EmailJS template ID
      templateParams
    );
    
    console.log("Email sent successfully");
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

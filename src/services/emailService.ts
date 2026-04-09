
import emailjs from 'emailjs-com';

// Initialize EmailJS with your User ID
export const initEmailJS = () => {
  // This is your actual EmailJS Public Key from the screenshot
  emailjs.init("Iyqv8b4fIdxbE4zUc");
};

export interface EmailData {
  name: string;
  company: string;
  email: string;
  message?: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: "info@atidot.ai",
      from_name: data.name,
      from_company: data.company,
      from_email: data.email,
      subject: "Contact Request from ATIDOT.ai website",
      message: data.message || "Request for demonstration",
    };
    
    const result = await emailjs.send(
      "service_1p980cj", // Your EmailJS service ID
      "template_xuepj6b", // Your EmailJS template ID
      templateParams
    );
    
    console.log("Email sent successfully", result);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

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
    
    // We need to ensure we're using the correct service ID and template ID
    // Since I don't see these in the screenshots, I'll keep the existing ones
    // but you should verify these are correct in your EmailJS dashboard
    const result = await emailjs.send(
      "service_1p980cj", // Verify this is your correct EmailJS service ID
      "template_xuepj6b", // Verify this is your correct EmailJS template ID
      templateParams
    );
    
    console.log("Email sent successfully", result);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

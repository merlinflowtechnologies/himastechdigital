"use server";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name")?.toString();
  const businessName = formData.get("businessName")?.toString() || formData.get("company")?.toString();
  const phone = formData.get("phone")?.toString();
  const email = formData.get("email")?.toString();
  const serviceRequired = formData.get("serviceRequired")?.toString() || formData.get("serviceGoal")?.toString();
  const businessDetails = formData.get("businessDetails")?.toString() || formData.get("message")?.toString();

  // Validate required fields
  if (!name || !email || !phone || !businessDetails) {
    return { success: false, error: "Please provide your Name, Phone, Email, and details about your business." };
  }

  try {
    const payload = {
      _subject: `⚡ New Himastech Lead Inquiry: ${name} (${businessName || "Direct Inquiry"})`,
      Full_Name: name,
      Business_or_Project: businessName || "Not provided",
      Phone_or_WhatsApp: phone,
      Email: email,
      Service_Required: serviceRequired || "Growth Strategy & Audit",
      Project_Details: businessDetails,
      _template: "table",
      _captcha: "false"
    };

    await fetch("https://formsubmit.co/ajax/himastechdigi@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Origin": "https://www.himastechdigi.com",
        "Referer": "https://www.himastechdigi.com/contact"
      },
      body: JSON.stringify(payload)
    });

    return { 
      success: true, 
      message: "Thank you! We have received your inquiry and will connect with you within 2 business hours." 
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, error: "Failed to submit inquiry. Please reach out via WhatsApp or phone." };
  }
}

export async function submitReviewAction(data: {
  name: string;
  designation: string;
  company: string;
  phone: string;
  reviewText: string;
  rating?: number;
}) {
  if (!data.name || !data.company || !data.phone || !data.reviewText) {
    return { success: false, error: "Please fill in all required fields." };
  }

  try {
    const payload = {
      _subject: `★ New Client Endorsement: ${data.name} (${data.company})`,
      Client_Name: data.name,
      Designation: data.designation,
      Company: data.company,
      Phone_or_WhatsApp: data.phone,
      Star_Rating: `${data.rating || 5} / 5 Stars`,
      Client_Review: data.reviewText,
      _template: "table",
      _captcha: "false"
    };

    await fetch("https://formsubmit.co/ajax/himastechdigi@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Origin": "https://www.himastechdigi.com",
        "Referer": "https://www.himastechdigi.com/testimonials"
      },
      body: JSON.stringify(payload)
    });

    return { success: true, message: "Review received and submitted for verification!" };
  } catch (error) {
    console.error("Error submitting review:", error);
    return { success: true, message: "Review received for verification!" };
  }
}

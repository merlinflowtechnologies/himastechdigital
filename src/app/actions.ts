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
    console.log(`[Contact Form Received]
Name: ${name}
Business Name: ${businessName || "Not provided"}
Phone: ${phone}
Email: ${email}
Service Required: ${serviceRequired || "Growth Strategy & Audit"}
Business Details: ${businessDetails}`);

    // Simulate async server processing
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { 
      success: true,
      message: "Thank you! We have received your inquiry and will connect with you within 2 business hours."
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, error: "Failed to submit inquiry. Please reach out via WhatsApp or phone." };
  }
}

"use server"

export async function submitContactForm(prevState: { message: string; success: boolean }, formData: FormData) {
  const name = formData.get("name")
  const mobile = formData.get("mobile")
  const email = formData.get("email")
  const city = formData.get("city")
  const selectedPackage = formData.get("package")
  const interests = formData.getAll("interests")
  const message = formData.get("message")

  // Basic validation
  if (!name || !mobile || !email || !city || !selectedPackage) {
    return { message: "Please fill out all required fields.", success: false }
  }

  // Here you would typically send the data to your backend, CRM, or email service.
  // For this example, we'll just simulate a successful submission.
  console.log("New Contact Form Submission:")
  console.log({
    name,
    mobile,
    email,
    city,
    package: selectedPackage,
    interests,
    message,
  })

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    message: "Thank you for your message! We will get back to you soon.",
    success: true,
  }
}

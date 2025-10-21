import { useState } from "react";
import emailjs from "@emailjs/browser";

export const useEmailJS = () => {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const SERVICE_ID = "service_ghvv8ac";
    const TEMPLATE_ID_CONTACT = "template_5qm552z";
    const TEMPLATE_ID_THANKYOU = "template_1l50e9u";
    const PUBLIC_KEY = "FNPeTPaJFoFKCKS1A";

    const sendEmail = async (data) => {
        try {
            setLoading(true);
            setStatus(null);

            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID_CONTACT,
                {
                    from_name: data.name,
                    from_email: data.email,
                    message: data.message,
                },
                PUBLIC_KEY
            );

            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID_THANKYOU,
                {
                    to_name: data.name,
                    to_email: data.email,
                    message_html: `
  <div style="font-family: 'Segoe UI', sans-serif; line-height: 1.7; color: #333;">
    <p>Hi <strong>${data.name}</strong>! 🌸</p>

    <p><em>I truly appreciate you taking the time to reach out to me.</em></p>

    <p>Your message means a lot, and I want to let you know that I’ve received it successfully.</p>

    <p><em>I’ll review your message carefully and get back to you as soon as possible — usually within the next <strong>24 hours</strong>.</em></p>

    <p>
      In the meantime, feel free to explore my 
      <a href="https://github.com/Datgau" style="color: #3b82f6; text-decoration: none;">Github</a> 
      or connect with me on 
      <a href="https://www.linkedin.com/in/%C4%91%E1%BA%A1t-nguy%E1%BB%85n-809823327/" style="color: #3b82f6; text-decoration: none;">LinkedIn</a> 
      if you’d like to see more of my work or stay updated on what I’m doing.
    </p>

    <p>Thank you again for your trust and interest. I’m looking forward to chatting with you soon!</p>

    <p style="margin-top: 20px;">
      <strong>Warm regards,</strong><br/>
      <em>Dat Nguyen</em> 🌸
    </p>
  </div>
`,
                },
                PUBLIC_KEY
            );
            setStatus("success");
            return "success";
        } catch (error) {
            console.error("EmailJS error:", error);
            setStatus("error");
            return "error";
        } finally {
            setLoading(false);
        }
    };

    const sendSubscribe = async (email) => {
        try {
            setLoading(true);
            setStatus(null);

            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID_THANKYOU,
                {
                    to_name: "Subscriber",
                    to_email: email,
                    message_html: `
  <div style="font-family: 'Segoe UI', sans-serif; line-height: 1.7; color: #333;">
    <p><strong>Hello there!</strong> 📬</p>
    <p><em>Thank you for subscribing to my updates.</em></p>
    <p>
      You’ll now be the first to know when I share 
      <strong>new projects</strong> or <strong>articles</strong>!
    </p>

    <p>
      Stay tuned — more exciting things are on the way. 
      I really appreciate your interest and support.
    </p>

    <p style="margin-top: 20px;">
      <strong>Best wishes,</strong><br/>
      <em>Dat Nguyen</em> 🚀
    </p>
  </div>
`,

                },
                PUBLIC_KEY
            );

            setStatus("success");
        } catch (error) {
            console.error("Subscribe error:", error);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return { sendEmail, sendSubscribe, loading, status };
};

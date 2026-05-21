import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";


export const sendEmail = async form => {
  try {
    await emailjs.sendForm(
      "service_37s19zf",
      "template_zk9baqe",
      form.current,
      "owwhrSj8M7Mwqz3Ez",
    );

    toast.success("Message sent successfully 🚀");

    form.current.reset();
  } catch (error) {
    toast.error("Failed to send message ❌");
  }
};

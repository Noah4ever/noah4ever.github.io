import { HiOutlineMail as Email } from "react-icons/hi";
import "@styles/contact.scss";

export default function Contact() {
  const email = "noah.thiering@web.de";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
  };

  return (
    <div className="contact-container">
      <button className="contact-button" onClick={copyToClipboard}>
        Copy Email <Email />
      </button>
    </div>
  );
}

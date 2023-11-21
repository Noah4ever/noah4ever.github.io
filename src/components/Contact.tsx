import "@styles/contact.scss";
import React from "react";
import { HiMail as Email, HiCheckCircle as Check } from "react-icons/hi";

export default function Contact() {
  const [copied, setCopied] = React.useState(false);
  const email = "noah.thiering@web.de";

  const copyToClipboard = () => {
    setCopied(true);
    navigator.clipboard.writeText(email);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="contact-container">
      <button className="contact-button" onClick={copyToClipboard}>
        Copy Email{" "}
        <span className="contact-button-icon">
          {copied ? <Check /> : <Email />}
        </span>
      </button>
    </div>
  );
}

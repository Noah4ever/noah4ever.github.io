import {
  HiOutlineMail as Email,
  HiClipboardCopy as Copied,
} from "react-icons/hi";
import "@styles/contact.scss";

export default function Contact() {
  const email = "noah.thiering@web.de";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    const copiedButton = document.querySelector(
      ".contact-button-copied"
    ) as HTMLElement;
    copiedButton.style.display = "flex";

    setTimeout(function () {
      copiedButton.style.display = "none";
    }, 1500);
  };

  return (
    <div className="contact-container">
      <button className="contact-button" onClick={copyToClipboard}>
        Copy Email <Email />
      </button>
      <div className="contact-button-copied">
        <Copied />
      </div>
    </div>
  );
}

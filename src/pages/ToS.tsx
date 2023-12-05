import React from "react";
import "@styles/tos.scss";

export default function ToS() {
  return (
    <div className="tos-container">
      <a href="/">Back</a>
      <h2>Terms of Service</h2>
      <p>
        By accessing and using thiering.org, you agree to the following terms
        and conditions:
      </p>
      <ol className="tos-list">
        <li>
          <h3>Use of the Website</h3>
          <p>
            You agree to use the Website for lawful purposes and in a way that
            does not infringe upon the rights of others or restrict or inhibit
            their use and enjoyment of the Website.
          </p>
        </li>
        <li>
          <h3>Content</h3>
          <p>
            All content provided on the Website is for informational purposes
            only. The content may be subject to change without notice.
          </p>
        </li>
        <li>
          <h3>Data Collection</h3>
          <p>
            thiering.org does not use cookies or collect any personal data from
            users. Your privacy is important to me, and I do not engage in any
            tracking or data collection activities.
          </p>
        </li>
        <li>
          <h3>Third-Party Links</h3>
          <p>
            The Website may contain links to third-party websites. thiering.org
            is not responsible for the content or privacy practices of these
            websites. I encourage you to review the terms and privacy policies
            of any third-party websites you visit.
          </p>
        </li>
        <li>
          <h3>Changes to Terms</h3>
          <p>
            thiering.org reserves the right to modify these terms at any time.
            Changes will be effective immediately upon posting. By continuing to
            use the Website after changes are posted, you accept the updated
            terms.
          </p>
        </li>
        <li>
          <h3>Contact Information</h3>
          <p>
            If you have any questions or concerns about these terms, please
            contact me at noah.thiering@web.de.
          </p>
        </li>
      </ol>
    </div>
  );
}

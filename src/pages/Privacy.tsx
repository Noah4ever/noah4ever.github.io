import React from "react";
import "@styles/privacy.scss";
import { LocalStorageController } from "@/utils/PersistanceController";

export default function Privacy() {
  const persistance = new LocalStorageController();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-container">
      <a href="/">Back</a>
      <h1>Privacy Policy for thiering.org</h1>
      <p>Effective Date: 01.12.2023</p>
      <ol className="privacy-list">
        <li>
          <h2>Introduction</h2>
          <p>
            Welcome my personal website. This Privacy Policy is designed to help
            you understand how your personal information is collected and used
            when you visit <a href="/">https://thiering.org</a>.
          </p>
        </li>
        <li>
          <h2>Cookies</h2>
          <p>
            I do not use cookies or any other tracking technologies to track or
            collect personal information from the Website.
          </p>
        </li>
        <li>
          <h2>Sharing Your Personal Information</h2>
          <p>I do not share your personal information with third parties.</p>
        </li>
        <li>
          <h2>Changes to This Privacy Policy</h2>
          <p>
            I may update this Privacy Policy from time to time to reflect
            changes to my practices or for other operational, legal, or
            regulatory reasons.
          </p>
        </li>
        <li>
          <h2>Color Theme Preferences</h2>
          <p>
            The Website allows users to customize their experience by selecting
            a preferred color theme. This customization is achieved through the
            use of a browser feature that locally stores non-personal
            information on the user's device. The following information is
            collected and stored:
          </p>
          <p>Selected Color Theme: {persistance.load("color-scheme")}</p>
          <p>
            This information is saved on the user's device using browser storage
            mechanisms such as local storage or cookies. It is important to note
            that this information is non-personal and does not identify the user
            individually.
          </p>
        </li>
        <li>
          <h2>Purpose of Storing Color Theme Preferences</h2>
          <p>
            The storage of color theme preferences is solely for the purpose of
            enhancing user experience. By saving this non-personal information
            locally on the user's device, I aim to provide a consistent and
            personalized visual experience during subsequent visits to the
            Website.
          </p>
        </li>
        <li>
          <h2>User Control</h2>
          <p>
            Users have the option to change their color theme preferences at any
            time through the provided customization options on the Website.
            Additionally, users can clear their browser storage to reset color
            theme preferences.
          </p>
        </li>
        <li>
          <h2>No Sharing of Color Theme Preferences</h2>
          <p>
            I do not share or transfer the stored color theme preferences with
            any third parties. The information is strictly used for the purpose
            of enhancing the user's interaction with the Website.
          </p>
        </li>
        <li>
          <h2>Security Measures</h2>
          <p>
            While color theme preferences are stored locally on the user's
            device, I take reasonable measures to secure this non-personal
            information. However, as with any online data storage, it is
            important to note that no method is entirely foolproof.
          </p>
        </li>
        <li>
          <h2>Changes to Color Theme Preferences Policy</h2>
          <p>
            Any changes to the policy regarding the storage of color theme
            preferences will be updated in this Privacy Policy. Users are
            encouraged to review this policy periodically for any updates.
          </p>
        </li>
        <li>
          <h2>Contact Me</h2>
          <p>
            For more information about our privacy practices, if you have
            questions, or if you would like to make a complaint, please contact
            us at: noah.thiering@web.de.
          </p>
        </li>
      </ol>
    </div>
  );
}

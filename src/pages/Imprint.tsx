import React from "react";
import "@styles/imprint.scss";

export default function Imprint() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="imprint-container">
      <a href="/">Back</a>
      <h2>Imprint</h2>

      <p>
        Person responsible for content according to § 55 Abs. 2 RStV (German
        Interstate Broadcasting Agreement):
      </p>
      <p>Noah Thiering</p>
      <p>Hauptstrasse 64, 28857, Syke</p>

      <h3>Contact:</h3>
      <p>Email: noah.thiering@web.de</p>

      <h3>Disclaimer:</h3>
      <p>
        <h4>Liability for Content</h4>
        The content of our pages was created with great care. However, we cannot
        assume any liability for the accuracy, completeness, and timeliness of
        the content.
      </p>
      <p>
        <h4>Liability for Links</h4>
        Our site contains links to external websites over which we have no
        control. Therefore, we cannot accept any responsibility for their
        content.
      </p>
      <p>
        <h4>Copyright</h4>
        The content and works on these pages created by the site operators are
        subject to German copyright law. The reproduction, editing,
        distribution, and any kind of use outside the limits of copyright law
        require the written consent of the respective author or creator.
      </p>
    </div>
  );
}

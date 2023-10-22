import NoahPNG from "@assets/noah.png";
import "@styles/blob-image.scss";

export default function BlobImage() {
  const pathToAnimateTo = (
    <path
      fill="#FF0066"
      d="M48.8,-28.2C61.9,-5.5,70.2,19.9,61.3,35.6C52.4,51.2,26.2,57.1,7.3,52.8C-11.5,48.6,-23,34.2,-33.3,17.8C-43.6,1.4,-52.6,-17.1,-46.9,-35.5C-41.2,-53.9,-20.6,-72.2,-1.4,-71.5C17.9,-70.7,35.7,-50.8,48.8,-28.2Z"
      transform="translate(100 100)"
    />
  );

  return (
    <div className="image-container">
      <svg viewBox="0 10 170 170" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="image-blob-gradient">
            <stop offset="0%" />
            <stop offset="100%" />
          </linearGradient>
          <clipPath id="image-blob-clip">
            <path
              d="M37,-45.9C43.2,-30.8,40.3,-15.4,38.2,-2.1C36.1,11.3,35,22.5,28.8,35.3C22.5,48,11.3,62.1,-5.3,67.4C-21.8,72.7,-43.6,69,-59.1,56.3C-74.7,43.6,-84.1,21.8,-83,1C-82,-19.7,-70.6,-39.4,-55,-54.6C-39.4,-69.7,-19.7,-80.2,-2.2,-78.1C15.4,-75.9,30.8,-61.1,37,-45.9Z"
              transform="translate(100 100)"
            />
          </clipPath>
        </defs>
        <path
          d="M37,-45.9C43.2,-30.8,40.3,-15.4,38.2,-2.1C36.1,11.3,35,22.5,28.8,35.3C22.5,48,11.3,62.1,-5.3,67.4C-21.8,72.7,-43.6,69,-59.1,56.3C-74.7,43.6,-84.1,21.8,-83,1C-82,-19.7,-70.6,-39.4,-55,-54.6C-39.4,-69.7,-19.7,-80.2,-2.2,-78.1C15.4,-75.9,30.8,-61.1,37,-45.9Z"
          transform="translate(100 100)"
        />
        <image
          x="8"
          y="20"
          width="150"
          height="150"
          href={NoahPNG}
          clipPath="url(#image-blob-clip)"
        />
      </svg>
    </div>
  );
}

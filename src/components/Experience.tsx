import "@styles/components/experience.scss";
import { useTranslation } from "react-i18next";

export interface ExperienceItem {
  id: string;
  titleKey: string;
  companyKey: string;
  iconUrl: string;
  yearFrom: string;
  yearTo: string;
}

const experiences: ExperienceItem[] = [
  {
    id: "uni-bremen",
    titleKey: "home.about.experience.uniBremen.title",
    companyKey: "home.about.experience.uniBremen.company",
    iconUrl: "logos/uni-bremen.png",
    yearFrom: "2025",
    yearTo: "today",
  },
  {
    id: "rheinmetall-work",
    titleKey: "home.about.experience.rheinmetallWork.title",
    companyKey: "home.about.experience.rheinmetallWork.company",
    iconUrl: "logos/rheinmetall.png",
    yearFrom: "2024",
    yearTo: "today",
  },
  {
    id: "rheinmetall-app",
    titleKey: "home.about.experience.rheinmetallApp.title",
    companyKey: "home.about.experience.rheinmetallApp.company",
    iconUrl: "logos/rheinmetall.png",
    yearFrom: "2021",
    yearTo: "2024",
  },
  {
    id: "bbs-app",
    titleKey: "home.about.experience.bbsApp.title",
    companyKey: "home.about.experience.bbsApp.company",
    iconUrl: "logos/bbs-syke.jpg",
    yearFrom: "2019",
    yearTo: "2021",
  },
];

export default function Experience() {
  const { t } = useTranslation();

  return (
    <div className="about-container experience-container blur-container">
      <h3>{t("home.about.experienceTitle", "Experience & Education")}</h3>
      <ul className="experience-list">
        {experiences.map((item) => (
          <li key={item.id} className="experience-item">
            <div className="experience-icon">
              <img src={item.iconUrl} alt={`${t(item.companyKey)} logo`} />
            </div>
            <div className="experience-details">
              <h4 className="experience-title">{t(item.titleKey)}</h4>
              <div className="experience-company">{t(item.companyKey)}</div>
              <div className="experience-dates">
                {item.yearFrom} -{" "}
                {item.yearTo === "today"
                  ? t("home.about.today", "today")
                  : item.yearTo}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from "react";
import "./ExperienceCard.css";
import { style } from "glamor";


function ExperienceCard(props) {
  const experience = props.experience;
  const theme = props.theme;

  const button_visit = style({
    textDecoration: "none",
    color: "rgba(255, 255, 255, 1)",
    background: `${theme.accentColor}`,
    padding: "15px 15px",
    marginTop: "25px",
    borderRadius: "4px",
    borderWidth: "0px",
    marginBottom: "20px",
    width: "200px",
    height: "50px",
    fontWeight: "bold",
    fontFamily: "Google Sans Regular",
    fontSize: "17px",
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 2px 10px ${theme.accentColor}`,
    },
  });

  return (
    <div
      className="experience-card"
      style={{
        border: `1px solid ${experience["color"]}`,
        backgroundColor: theme.imageDark,
      }}
    >
      <div className="experience-card-logo-div">
        <img
          className="experience-card-logo"
          src={require(`../../assests/images/${experience["logo_path"]}`)}
          alt=""
        />
      </div>
      <div className="experience-card-body-div">
        <div className="experience-card-header-div">
          <div className="experience-card-heading-left">
            <h3 className="experience-card-title" style={{ color: theme.text }}>
              {experience["title"]}
            </h3>
            <p
              className="experience-card-company"
              style={{ color: theme.secondaryText }}
            >
              <a
                href={experience["company_url"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience["company"]}
              </a>
            </p>
          </div>
          <div className="experience-card-heading-right">
            <p
              className="experience-card-duration"
              style={{ color: theme.secondaryText }}
            >
              {experience["duration"]}
            </p>
            <p
              className="experience-card-location"
              style={{ color: theme.secondaryText }}
            >
              {experience["location"]}
            </p>
          </div>
        </div>
        <p
          className="experience-card-description"
          style={{ color: theme.text }}
        >
          {experience["description"]}
        </p>
        <a
              href={experience["letter"]}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", textAlign: "center", display:'flex', justifyContent:'center' }}
            >
              <p
                {...button_visit}
                style={{
                  textDecoration: "none",
                  float: "right",
                  backgroundColor: theme.accentColor,
                }}
              >
                Check Letter
              </p>
            </a>
      </div>
    </div>
  );
}

export default ExperienceCard;

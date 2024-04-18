import React from "react";
import NavBar from "../Components/NavBar";
import Persona from "../Components/Persona";
import teamData from "./Team.json"; // Importing the team data

const Team = () => {
  const teams = {
    "Faculty": teamData.Faculties,
    "Core": teamData.Core,
    "Content": teamData.Content,
    "Design": teamData.Design,
    "Marketing": teamData.Marketing,
    "SocialMedia": teamData["Social Media"],
    "Management": teamData.Management,
    "Technical": teamData.Technical,
    "Spokesperson": teamData.Spokesperson,
    "Ambassadors": teamData.Ambassadors
  };

  return (
    <div>
      <NavBar />
      <img
        style={{
          width: '100vw',  //full screen
          position: 'absolute',
          zIndex: 2,
        }}
        className="animate__animated animate__fadeInDown absolute top-[11rem] left-0 object-contain"
        src="/team_banner.png"
      />
     {Object.entries(teams).map(([teamName, teamMembers], index) => (
  <div key={teamName} style={{ marginTop: index === 0 ? "30rem" : "8rem", textAlign: "center" }}>
    {/* Render the team name header image */}
    <img src={`/${teamName}.png`} alt={teamName} style={{ width: "50%" }} />
    {/* Render the team members in a grid with 3 columns */}
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginLeft: "10rem" }}>
      {teamMembers.members.map((member, index) => (
        <div key={index} style={{ width: "20%", padding: "1.5rem" }}>
          <Persona name={member.name} pos={member.position} imgUrl={member.link} />
        </div>
      ))}
    </div>
  </div>
))}
    </div>
  );
};

export default Team;

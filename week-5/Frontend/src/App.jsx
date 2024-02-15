import { useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BusinessCard from "./components/BusinessCard";
const contacts = [
  {
    name: "Diganta",
    description: "Programmer",
    interests: ["Ionic", "Open Source", "Web Dev"],
    linkedin: "https://www.linkedin.com/in/diganta-mandal-4294a324a/",
    twitter: "https://twitter.com/Diganta66560190",
  },
  {
    name: "Ramesh",
    description: "Web Developer",
    interests: ["Photography", "Filming", "Music"],
    linkedin: "fkjsfn.com",
    twitter: "cskfn.com",
  },
];

function App() {
  return (
    <div>
      {contacts?.map((contact, index) => (
        <React.Fragment key={index}>
          <BusinessCard
            name={contact.name}
            description={contact.description}
            interests={contact.interests}
            linkedin={contact.linkedin}
            twitter={contact.twitter}
          />
          <br />
        </React.Fragment>
      ))}
    </div>
  );
}

export default App;

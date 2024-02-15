import React from "react";

function BusinessCard(props) {
  return (
    <div className="card">
      <h2 className="name">{props.name}</h2>
      <p className="description">{props.description}</p>
      <h3 className="interestTitle">Interests</h3>
      <ul>
        {props.interests.map((interest, index) => (
          <li key={index} className="interestItem">
            {interest}
          </li>
        ))}
      </ul>
      <div className="socialLinks">
        <a className="link" href={props.linkedin}>
          LinkedIn
        </a>
        <a className="link" href={props.twitter}>
          Twitter
        </a>
      </div>
    </div>
  );
}
export default BusinessCard;

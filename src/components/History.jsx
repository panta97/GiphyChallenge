import React from "react";

export default function History({ userHistory }) {
  return (
    <div>
      User History
      <ul>
        {userHistory.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

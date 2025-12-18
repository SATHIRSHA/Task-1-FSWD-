import React, { useState } from "react";

export default function Poll() {
  const [votes, setVotes] = useState({
    react: 0,
    ai: 0,
    iot: 0
  });

  const vote = (option) => {
    setVotes({ ...votes, [option]: votes[option] + 1 });
  };

  const total = votes.react + votes.ai + votes.iot;

  return (
    <>
      {/* CSS INSIDE POLL FILE */}
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(120deg, #ff9a9e, #fad0c4);
        }

        .poll-box {
          width: 360px;
          margin: 70px auto;
          background: white;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
          text-align: center;
        }

        .poll-box h1 {
          color: #ff416c;
        }

        .poll-box h3 {
          color: #333;
        }

        .btn {
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          color: white;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .btn:hover {
          transform: scale(1.05);
        }

        .react {
          background: #61dafb;
          color: #000;
        }

        .ai {
          background: #6a11cb;
        }

        .iot {
          background: #11998e;
        }

        .result {
          margin-top: 20px;
          background: #f2f2f2;
          padding: 15px;
          border-radius: 10px;
        }

        .result p {
          margin: 6px 0;
          font-weight: bold;
        }
      `}</style>

      <div className="poll-box">
        <h1>📊 Live Classroom Poll</h1>
        <h3>Which subject do you like most?</h3>

        <button className="btn react" onClick={() => vote("react")}>
          React ⚛️
        </button>

        <button className="btn ai" onClick={() => vote("ai")}>
          Artificial Intelligence 🤖
        </button>

        <button className="btn iot" onClick={() => vote("iot")}>
          Internet of Things 🌐
        </button>

        <div className="result">
          <p>React Votes: {votes.react}</p>
          <p>AI Votes: {votes.ai}</p>
          <p>IoT Votes: {votes.iot}</p>
          <p>Total Votes: {total}</p>
        </div>
      </div>
    </>
  );
}

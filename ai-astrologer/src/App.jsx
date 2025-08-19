import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    tob: "",
    place: "",
    question: "",
  });
  const [prediction, setPrediction] = useState("");
  const [answer, setAnswer] = useState("");

  // Zodiac data
  const zodiacSigns = [
    { sign: "Capricorn", start: [12, 22], end: [1, 19] },
    { sign: "Aquarius", start: [1, 20], end: [2, 18] },
    { sign: "Pisces", start: [2, 19], end: [3, 20] },
    { sign: "Aries", start: [3, 21], end: [4, 19] },
    { sign: "Taurus", start: [4, 20], end: [5, 20] },
    { sign: "Gemini", start: [5, 21], end: [6, 20] },
    { sign: "Cancer", start: [6, 21], end: [7, 22] },
    { sign: "Leo", start: [7, 23], end: [8, 22] },
    { sign: "Virgo", start: [8, 23], end: [9, 22] },
    { sign: "Libra", start: [9, 23], end: [10, 22] },
    { sign: "Scorpio", start: [10, 23], end: [11, 21] },
    { sign: "Sagittarius", start: [11, 22], end: [12, 21] },
  ];

  const predictions = {
    Aries: "🔥 Energy flows strongly. A great day to begin something new.",
    Taurus: "🌿 Patience brings rewards. Focus on financial stability.",
    Gemini: "💬 Conversations open doors. Stay curious.",
    Cancer: "🌙 Emotional balance matters. Nurture loved ones.",
    Leo: "☀️ Your charm shines. Express creativity today.",
    Virgo: "📖 Small steps lead to progress. Organize your thoughts.",
    Libra: "⚖️ Balance is key. Partnerships bring opportunities.",
    Scorpio: "🦂 Transformation awaits. Release what no longer serves you.",
    Sagittarius: "🏹 Adventure calls. Explore new paths.",
    Capricorn: "⛰ Discipline pays off. Keep working steadily.",
    Aquarius: "🌌 Innovation sparks. Think differently.",
    Pisces: "💫 Your intuition is powerful. Trust it.",
  };

  // Handle Prediction
  const handleSubmit = () => {
    if (!formData.dob || !formData.name || !formData.place) {
      setPrediction("⚠️ Please fill in all birth details to get a prediction.");
      return;
    }

    const [year, month, day] = formData.dob.split("-").map(Number);
    let zodiac = "Unknown";
    for (let z of zodiacSigns) {
      if (
        (month === z.start[0] && day >= z.start[1]) ||
        (month === z.end[0] && day <= z.end[1])
      ) {
        zodiac = z.sign;
        break;
      }
    }

    setPrediction(
      `🌟 Hello ${formData.name}, born in ${formData.place} on ${formData.dob} at ${formData.tob}.\n\n` +
        `Your zodiac sign is ${zodiac}.\n\n` +
        `🔮 Prediction: ${predictions[zodiac]}`
    );
  };

  // Handle Question
  const handleQuestion = () => {
    if (!formData.question) {
      setAnswer("⚠️ Please ask a question to get guidance.");
      return;
    }

    const genericAnswers = [
      "✨ The stars suggest patience will bring clarity soon.",
      "🌌 Trust your instincts — they are guiding you correctly.",
      "🔮 Change is coming, stay open-minded.",
      "🌠 Focus on balance, and the path will reveal itself.",
    ];
    const random =
      genericAnswers[Math.floor(Math.random() * genericAnswers.length)];
    setAnswer(`📝 Question: ${formData.question}\n\n💫 Answer: ${random}`);
  };

  return (
  <div className="app">
    {/* Background + Styles */}
    <style>{`
      body { margin:0; font-family: 'Poppins', sans-serif; }
      .app {
        position: relative;
        min-height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        overflow: hidden;
      }

      .background {
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
        animation: gradientMove 15s ease infinite;
        background-size: 400% 400%;
        z-index: 0;
      }

      .stars {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px);
        background-size: 25px 25px;
        opacity: 0.25;
        animation: twinkle 6s infinite alternate;
      }

      .container {
        position: relative;
        z-index: 1;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        width: 100%;
        max-width: 1400px;
        height: 100vh;
        padding: 3rem;
      }

      .panel {
        background: rgba(255,255,255,0.08);
        backdrop-filter: blur(25px);
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 28px;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        box-shadow: 0 25px 50px rgba(0,0,0,0.6), 0 0 25px rgba(168,85,247,0.6);
        overflow-y: auto;
      }

      h1 {
        font-size: 3rem;
        text-align: center;
        font-weight: 900;
        margin-bottom: 2rem;
        background: linear-gradient(to right, #f472b6, #c084fc, #60a5fa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: bounce 2s infinite;
      }

      input, textarea {
        width: 100%;
        padding: 16px;
        border-radius: 14px;
        border: none;
        margin-bottom: 14px;
        background: rgba(255,255,255,0.2);
        color: white;
        font-size: 1.1rem;
        outline: none;
        transition: 0.3s ease;
      }
      input:focus, textarea:focus {
        box-shadow: 0 0 20px rgba(168,85,247,0.8);
        transform: scale(1.03);
      }

      button {
        width: 100%;
        padding: 16px;
        border: none;
        border-radius: 14px;
        font-weight: bold;
        font-size: 1.2rem;
        cursor: pointer;
        transition: transform 0.3s, box-shadow 0.3s;
      }
      button:hover {
        transform: scale(1.05);
        box-shadow: 0 0 25px rgba(236,72,153,0.7);
      }

      .btn-prediction {
        background: linear-gradient(to right, #ec4899, #7e22ce);
        margin-top: 10px;
      }

      .btn-question {
        background: linear-gradient(to right, #4f46e5, #9333ea);
        margin-top: 10px;
      }

      .result {
        margin-top: 1rem;
        padding: 1.5rem;
        border-radius: 18px;
        background: rgba(99,102,241,0.4);
        border: 1px solid rgba(168,85,247,0.4);
        animation: fadeIn 1s ease-in-out;
        white-space: pre-line;
      }

      @keyframes gradientMove {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(15px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes twinkle {
        from { opacity: 0.15; }
        to { opacity: 0.3; }
      }
    `}</style>

    <div className="background"></div>
    <div className="stars"></div>

    <div className="container">
      {/* Left Panel: Form */}
      <div className="panel">
        <h1>🌌 AI Astrologer</h1>
        {["name", "dob", "tob", "place"].map((field, i) => (
          <input
            key={i}
            type={field === "dob" ? "date" : field === "tob" ? "time" : "text"}
            placeholder={
              field === "name"
                ? "Enter your name"
                : field === "dob"
                ? "Date of Birth"
                : field === "tob"
                ? "Time of Birth"
                : "Place of Birth"
            }
            value={formData[field]}
            onChange={(e) =>
              setFormData({ ...formData, [field]: e.target.value })
            }
          />
        ))}
        <button className="btn-prediction" onClick={handleSubmit}>
          🔮 Get Prediction
        </button>

        <textarea
          rows="3"
          placeholder="Ask your question..."
          value={formData.question}
          onChange={(e) =>
            setFormData({ ...formData, question: e.target.value })
          }
        />
        <button className="btn-question" onClick={handleQuestion}>
          🌠 Ask Astrologer
        </button>
      </div>

      {/* Right Panel: Results */}
      <div className="panel">
        {prediction && (
          <div className="result">
            <h2>✨ Your Prediction</h2>
            <p>{prediction}</p>
          </div>
        )}
        {answer && (
          <div className="result">
            <h2>🌟 Guidance</h2>
            <p>{answer}</p>
          </div>
        )}
      </div>
    </div>
  </div>
);

}

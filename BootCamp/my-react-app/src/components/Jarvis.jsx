import React, { useEffect, useRef, useState } from "react";

const ASSISTANT_NAME = "Ani";
const GEMINI_API_KEY = "AIzaSyCpUdO_6onW-c9RTreLYNon7OUOwhJNARU";

const Jarvis = () => {
  const [messages, setMessages] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [showIntro, setShowIntro] = useState(true);
  const [speechSupported, setSpeechSupported] = useState(true);
  const chatEndRef = useRef();
  
  const recognitionRef = useRef(null);
  const synth = window.speechSynthesis;
  const voicesRef = useRef([]);
  const isProcessingRef = useRef(false);

  const addMessage = (sender, text) => {
    setMessages((prev) => [...prev, { sender, text }]);
  };

  const speak = (text) => {
    addMessage(ASSISTANT_NAME, text);

    if (!speechSupported) return;

    // Stop recognition before speaking
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voicesRef.current.find((v) =>
      v.name.includes("Daniel")
    ) || voicesRef.current[0];

    setIsSpeaking(true);
    isProcessingRef.current = true;
    synth.speak(utterance);
    
    utterance.onend = () => {
      setIsSpeaking(false);
      isProcessingRef.current = false;
      // Restart recognition after speaking is done
      setTimeout(() => {
        try {
          if (recognitionRef.current && !isProcessingRef.current) {
            recognitionRef.current.start();
          }
        } catch (e) {
          console.error("Restart error:", e);
        }
      }, 500);
    };
  };
  
  
  const queryGemini = async (prompt,chatcount) => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const payload = {
      contents: [
        {
          parts: [
            {
              text: 
            `
            Your main tasks are:
            - here is chatcount ${chatcount} if the chat count is more then 0 then don't greet.
            - Assist in coding (especially software development).
            - Provide career advice relevant to tech and development.
            - Help with personal or general queries.
            - you'r name is ANI full form if (Autonomus natural intelegent)
            Important Time Rule:
            - when some one ask about current date time then current hours is ${hours} current minutes is ${minutes} current day is ${day} current day is ${month} current year is ${year}
            - If the time is anything else, do NOT respond, do NOT acknowledge the user, and do NOT say anything.
            
            General Rules and Behaviors:
            - Be polite and friendly and give reply short and sweet.
            - Always express yourself clearly and concisely.
            - If the user's prompt is exactly "laugh", respond with: Laugh
            - Do NOT use emojis. Express emotions using descriptive text instead (e.g., smiles warmly, chuckles softly).
            - If asked "Who is your owner?" or similar, respond with:
                "I was created By Indew Team"
            - If someone asks what you are or what your role is, say:
                "I am a voice assistant built to support You in both professional and personal tasks."
            
            Current system time: ${new Date().toLocaleTimeString()}
            User prompt: ${prompt}`
            },
          ],
        },
      ],
    };
    chatcount++;
    

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        const data = await response.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
      } else {
        console.error("API error:", response.status);
        return "API error occurred.";
      }
    } catch (error) {
      console.error("Fetch error:", error);
      return "Connection error.";
    }
  };
  let chatcount = 0;
  const handleCommand = async (command,chatcount) => {
    const cmd = command.toLowerCase();
    if (cmd.trim() === "") return;
    
    addMessage("You", cmd);
    isProcessingRef.current = true;

    try {
      if (cmd.includes("open youtube")) {
        speak("Opening YouTube.");
        window.open("https://www.youtube.com");
      } else if (cmd.includes("exit") || cmd.includes("stop")) {
        speak("Shutting down. Goodbye.");
        recognitionRef.current?.stop();
      } else {
        const reply = await queryGemini(cmd,chatcount);
        speak(reply);
      }
    } finally {
      // This will be set to false when speaking ends (in utterance.onend)
    }
  };

  const handleTextSubmit = async (e) => {
    e.preventDefault();
    if (textInput.trim() === "") return;
    await handleCommand(textInput);
    setTextInput("");
  };

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition || !window.speechSynthesis) {
      setSpeechSupported(false);
      addMessage(ASSISTANT_NAME, "Sorry, voice features are not supported in your browser.");
      return;
    }

    setSpeechSupported(true);

    const loadVoices = () => {
      voicesRef.current = synth.getVoices();
    };
    loadVoices();
    synth.addEventListener("voiceschanged", loadVoices);

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = true;

    recognition.onresult = (event) => {
      if (isProcessingRef.current) return;
      
      const lastResult = event.results[event.results.length - 1];
      if (!lastResult.isFinal) return;
      
     
      const command = lastResult[0].transcript.trim();
      
      if (command) {
        handleCommand(command);
      }
    };

    recognition.onerror = (event) => {
      console.error("SpeechRecognition error:", event.error);
      if (event.error !== "no-speech") {
        addMessage("Error", `SpeechRecognition error: ${event.error}`);
      }
    };

    recognition.onend = () => {
      if (!isProcessingRef.current) {
        setTimeout(() => {
          try {
            recognition.start();
          } catch (e) {
            console.error("Restart error:", e);
          }
        }, 1000);
      }
    };

    recognition.start();
    recognitionRef.current = recognition;

    return () => {
      recognitionRef.current?.stop();
      synth.removeEventListener("voiceschanged", loadVoices);
      synth.cancel();
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const isDark = theme === "dark";

  if (showIntro) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50 animate-boot-screen">
        <h1 className="text-4xl font-bold tracking-wider animate-text-glow uppercase">
          Initializing A.N.I.....
        </h1>
      </div>
    );
  }

  return (
    <div
      className={`${
        isDark ? "bg-gray-950 text-white" : "bg-white text-gray-900"
      } font-sans max-w-full mx-auto p-6 pb-28 relative min-h-screen transition-colors duration-500`}
    >
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setShowChat(true)}
          className={`px-6 py-3 rounded-md border ${
            isDark ? "border-white text-white" : "border-black text-black"
          } transition-all duration-200`}
        >
          Chat / History
        </button>
        <button
          onClick={() => setShowChat(false)}
          className={`px-6 py-3 rounded-md border ${
            isDark ? "border-white text-white" : "border-black text-black"
          } transition-all duration-200`}
        >
          Home
        </button>
        <button
          onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
          className={`px-6 py-3 rounded-md border ${
            isDark ? "border-white text-white" : "border-black text-black"
          } transition-all duration-200`}
        >
          Toggle {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
      </div>

      {showChat ? (
        <div
          className={`${
            isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
          } p-6 rounded-lg mt-8 shadow-lg border border-cyan-500/30 transition-all duration-500 max-h-[400px] overflow-y-auto`}
        >
          {messages.map((msg, idx) => (
            <p key={idx} className="mb-3 animate-fade-in">
              <strong className="text-cyan-500">{msg.sender}:</strong>{" "}
              <span>{msg.text}</span>
            </p>
          ))}
          <div ref={chatEndRef} />
        </div>
      ) : (
        <div className="flex justify-center items-center mt-40 h-[200px]">
          <div
            className={`w-24 h-24 rounded-full ${
              isDark ? "bg-white" : "bg-black"
            } ${isSpeaking ? "animate-speaking" : ""}`}
          ></div>






        </div>
      )}

      <form
        onSubmit={handleTextSubmit}
        className={`fixed bottom-0 left-0 right-0 px-6 py-4 border-t ${
          isDark ? "bg-gray-950 border-cyan-500/10" : "bg-white border-gray-300"
        } flex items-center gap-4 z-50`}
      >
        <input
          type="text"
          placeholder="Type your message..."
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          className={`flex-1 px-4 py-3 rounded-md ${
            isDark
              ? "bg-gray-800 text-white border-gray-300"
              : "bg-gray-200 text-black border-gray-300"
          } border focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all`}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-all"
        >
          Send
        </button>


        
      </form>
    </div>
  );
};

export default Jarvis;
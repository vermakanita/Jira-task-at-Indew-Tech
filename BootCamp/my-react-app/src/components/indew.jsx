// import React from "react";
// import { useState ,useEffect ,useRef } from "react";
// const ASSISTANT_NAME = "Gamini"
// const GEMINI_API_KEY = "AIzaSyBkLthD8I8UiqtYCB2WCG2IE72nXrZAyuI"

// const Indew = () => {
//     const [messages, setMessage] =useState([]); 
//     const [textInput, setTextInput] =useState(""); 
//     const [isSpeaking, setIsSpeaking] =useState(false); 
//     const [showChat, setShowChat] =useState(false); 
//     const [theme, setTheme] = useState("dark");
//     const [showIntro, setshowIntro] =useState(true); 
//     const [speechSupporter, setSpeechSupporter] =useState(true);  
//     const chatEndRef = useRef(null);
//     const recognitionRef = useRef(null);
//     const synth = window.speechSynthesis;
//     const voiceRef = useRef(null);
//     const isProcessingRef = useRef(false);
//                                              // useStateSnippet  new thing 



//     const addMessage = (sender , text) => {     
//         setMessage((prev) => [...prev, { sender, text }]);
//     };      
    
//     const speak = (text) => {
//         addMessage(ASSISTANT_NAME, text);

//         if (!speechSupporter) return;

//         //stop reconition before speaking
//         if (recognitionRef.current) {
//             recognitionRef.current.stop();
//         }

//         const utterance = new SpeechSynthesisUtterance(text);
//         utterance.voice = voiceRef.current.find((v)=> v.name.includes("Deniel")) ||voiceRef.current[0];

//         setIsSpeaking(true);
//         isProcessingRef.current = true;
//         synth.speak(utterance);

//         utterance.onend = () => {
//             setIsSpeaking(false);
//             isProcessingRef.current = false;
//             //Restart recognition after speaking is done
//             setTimeout(() => {
//                 try{
//                     if (recognitionRef.current && !isProcessingRef.current) {
//                         recognitionRef.current.start();
//                     }
//                 }catch (error) {
//                     console.error("Error restarting recognition:", error);
//                 }
                
//             }, 5000);
//         }

//     };

//     const queryGemini = async (prompt , chatcount) => {
//         const now = new Date();
//         const year = now.getFullYear();
//         const month = now.getMonth() + 1; // Months are zero-based in JavaScript
//         const day = now.getDate();
//         const hours = now.getHours();
//         const minutes = now.getMinutes();

//         const payload = {
//             contents:[
//                 {
//                     parts:[
//                         {
//                             text:
//                             `Your main task are:
//                             -here is chatcount: ${chatcount} if the chat count is more then 0 then you are in the chat mode and you have to answer the question as a chat bot.
//                             -here is the date: ${year}-${month}-${day} ${hours}:${minutes}
//                             -here is the prompt: ${prompt}
//                             -here is the assistant name: ${ASSISTANT_NAME}
                           


                            
//                             current system date :${new Date().toLocaleDateString()}
//                             current system time :${new Date().toLocaleTimeString()}
//                             `
//                         }
//                     ]
//                 }
//             ]
             
//     };
//     console.log("Payload:", payload);
//     console.log("Chat count:", chatcount);
//     console.log("API Key:", GEMINI_API_KEY);
// // console.log("Endpoint:", `https://generativelanguage.googleleapis.com/v1beta/model/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`);

//     chatcount++;
        

//     try{
//         const response = await fetch(
//                 // `https://generativelanguage.googleleapis.com/v1beta/model/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, 
//                 // `https://generativelanguage.googleleapis.com/v1beta/model/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, 
//                 `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
                
//             {
//                 method: "POST",
//                 headers:{"Content-Type": "application/json"},
//                     // Authorization: `Bearer ${GEMINI_API_KEY}`,
//                 body: JSON.stringify(payload),
//                 },
//             );
//         // if (!response.ok) { 
//         //     const data = await response.json();
//         //     // console.error("API Response Error:", data);
//         //     return data.candidates?.[0]?.content?.parts?.[0]?.text ||"No response from Gemini";

                
//         //     }
//         //     else{
//         //         console.error("API Error:", response.status);
//         //         return "Error: Unable to fetch response from Gemini API";
//         //     }

//         if (!response.ok) { 
//             const data = await response.json();
//             console.error("API Response Error:", data);
//             return "Error: " + (data.error?.message || "No response from Gemini");
//         }
//         else {
//         const data = await response.json();
//         console.log("Gemini API success:", data);
        
//         // Adjust according to Gemini’s actual response structure
//         // return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response from Gemini";
//         return data.candidates?.[0]?.content?.parts?.[0]?.text ||"No response from Gemini";

//     }


    

//     }catch (error) {
//         console.error("Error:", error);
//         return "Error: connection error Unable to fetch response from Gemini API";
//     }
//     }



//     let chatcount = 0;
//     const handleCommand = async (command ,chatcount) => {
//         const cmd = command.toLowerCase();

//         if(cmd.trim()==="")return;

//         addMessage("kanita", cmd);
//         isProcessingRef.current = true;

//         try{
//             if (cmd.includes("open youtube")) {
//                 speak("Opening YouTube");
//                 window.open("https://www.youtube.com");


//         }
//         else if (cmd.includes("open google")) {
//                 speak("Opening Google");
//                 window.open("https://www.google.com", "_blank");
//     }else if (cmd.includes("open facebook")) {
//                 speak("Opening Facebook");
//                 window.open("https://www.facebook.com", "_blank");
//     }
//     else if (cmd.includes("open twitter")) {
//                 speak("Opening Twitter");
//                 window.open("https://www.twitter.com", "_blank");
//     }
//     else if (cmd.includes("open instagram")) {
//                 speak("Opening Instagram");
//                 window.open("https://www.instagram.com", "_blank");
//     }
//     else if (cmd.includes("open linkedin")) {
//                 speak("Opening LinkedIn");
//                 window.open("https://www.linkedin.com", "_blank");
//     }
//     else if (cmd.includes("open github")) {
//                 speak("Opening GitHub");
//                 window.open("https://www.github.com", "_blank");
//     }
//     else if (cmd.includes("open stackoverflow")) {
//                 speak("Opening Stack Overflow");
//                 window.open("https://www.stackoverflow.com", "_blank");
//     }
//     else if (cmd.includes("open reddit")) {
//                 speak("Opening Reddit");
//                 window.open("https://www.reddit.com", "_blank");
//     }
//     else if (cmd.includes("open quora")) {
//                 speak("Opening Quora");
//                 window.open("https://www.quora.com", "_blank");
//     }
//     else if (cmd.includes("open whatsapp")) {   
//                 speak("Opening WhatsApp");
//                 window.open("https://www.whatsapp.com", "_blank");
//     }
//     else if (cmd.includes("open telegram")) {
//                 speak("Opening Telegram");
//                 window.open("https://www.telegram.org", "_blank");
//     }
//     else if (cmd.includes("open discord")) {
//                 speak("Opening Discord");
//                 window.open("https://www.discord.com", "_blank");
//     }
//     else if (cmd.includes("open skype")) {
//                 speak("Opening Skype");
//                 window.open("https://www.skype.com", "_blank");
//     }
//     else if (cmd.includes("open zoom")) {
//                 speak("Opening Zoom");
//                 window.open("https://www.zoom.us", "_blank");
//     }
//     else if (cmd.includes("open microsoft teams")) {
//                 speak("Opening Microsoft Teams");
//                 window.open("https://www.microsoft.com/en-us/microsoft-teams/group-chat-software", "_blank");
//     }
//     else if (cmd.includes("open slack")) {      
//                 speak("Opening Slack");
//                 window.open("https://www.slack.com", "_blank");
//     }
//     else if (cmd.includes("open notepad")) {
//                 speak("Opening Notepad");
//                 window.open("notepad://", "_blank");
//     }
//     else if (cmd.includes("open calculator")) {
//                 speak("Opening Calculator");
//                 window.open("calculator://", "_blank");
//     }
//     else if (cmd.includes("open paint")) {
//                 speak("Opening Paint");
//                 window.open("ms-paint://", "_blank");
//     }
//     else if (cmd.includes("open word")) {
//                 speak("Opening Word");
//                 window.open("ms-word://", "_blank");
//     }
//     else if (cmd.includes("open excel")) {
//                 speak("Opening Excel");
//                 window.open("ms-excel://", "_blank");
//     }
//     else if (cmd.includes("open power point")) {    
//                 speak("Opening PowerPoint");
//                 window.open("ms-powerpoint://", "_blank");
//     }
//     else if (cmd.includes("open pdf")) {
//                 speak("Opening PDF");
//                 window.open("ms-pdf://", "_blank");
//     }
//     else if (cmd.includes("open chat gpt")) {
//                 speak("Opening Chat GPT");
//                 window.open("https://www.chatgpt.com", "_blank");
//     }
//     else if (cmd.includes("exit || close || quit || stop|| end || bye || cancel|| leave|| terminate || logout || shutdown || power off || turn off || sleep || hibernate || suspend || restart || reboot || log off || log out || sign out || sign off")) {
//                 speak("Exiting the application");
//                 recognitionRef.current.stop();

//     }
//     else{
//         const reply= await queryGemini(cmd , chatcount);
//         speak(reply);
//         addMessage(ASSISTANT_NAME, reply);

//     }
// }
// finally{
//     //this is set false when speaking ends (in utterance.onend)
// }
//     };



//     const handleTextSubmit = async(e) => {
//         e.preventDefault();
//         if (textInput.trim() === "") return;
//         await handleCommand(textInput);
//         setTextInput("");
//     };

//     useEffect(() => {
//         const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//         if (!SpeechRecognition || !window.speechSynthesis) {
//             setSpeechSupporter(false);
//             addMessage(ASSISTANT_NAME," Sorry, your browser does not support speech recognition or speech synthesis.");
//             return;
//         }
//         setSpeechSupporter(true);

//         const loadVoices = () => {
//             voiceRef.current = synth.getVoices();
//         };
//         loadVoices();
//         synth.addEventListener("voiceschanged", loadVoices);

//         const recognition = new SpeechRecognition();
//         recognition.interimResults = false;
//         recognition.lang = "en-US";
//         recognition.continuous = true;
        
//         recognition.onresult = (event) => {
//             if(isProcessingRef.current) return;

//             const lastResult = event.results[event.results.length - 1];
//             if (!lastResult.isFinal) return;


//             const command = lastResult[0].transcript.trim();

//             if(command) {
//                 handleCommand(command);
//             }
//         }

//         recognition.onerror = (event) => {
//             console.error("Speech recognition error:", event.error);
//             if(event.error !== "not-speech") {
//                 addMessage("error", `Speech recognition error: ${event.error}`);
//             }
//         };

//         recognition.onend = () =>
//         {
//             if(!isProcessingRef.current)
//             {
//                 setTimeout(() => 
//                 {
//                     try 
//                     {
//                         recognition.start();
//                     } catch (error) 
//                     {
//                         console.error("Error restarting recognition:", error);
//                     }
//                 }, 5000);
//             }
//         }
    
//     recognition.start();
//     recognitionRef.current = recognition;
//     return () =>
//     {
//         recognitionRef.current?.stop();
//         synth.removeEventListener("voiceschanged",loadVoices);
//         synth.cancel();
//     }
// },[]); 

//     useEffect(()=>
//         {
//             const timer = setTimeout(() =>setshowIntro(false),2000);
//             return ()=> clearTimeout(timer);

//         },[])


//         useEffect(()=>
//         {
//             chatEndRef.current?.scrollIntoView({behavior:"smooth"});
            
//         },[messages]);
        

    
    
//     if(showIntro){
//         return(
//             <div className="fixed inset-0 flex items-center justify-center  bg-black text-white z-50">
//                  <h1 className="text-4xl font-bold tracking-wide uppercase">Initializing Gamini </h1>
//                 </div>
    
    
//              )
//     }

//     const isDark = theme ==="dark"
//     return(
//     <div 
//         className={`${
//         (isDark ? "bg-gray-950 text-white" : " bg-white text-gray-900")} font-sans max-w-full mx-auto mx-auto p-6 pb-28 relative min-h-screen transition-color duration-500`}>

//         <div className="flex justify-center gap-4 mt-6">
//             <button onClick={()=>setShowChat(true)}
//              className={`${isDark ? "border-white text-white": "border-black text-black"}  px-6 py-3 rounded-md border    transition-all duration-200`}>
//                 Chat / History
//             </button>
//             <button 
//              onClick={()=>setShowChat(false)}
//             className={`${isDark ? "border-white text-white": "border-black text-black"}  px-6 py-3 rounded-md border    transition-color duration-500`}>Home</button>
//             {/* <button className={`${isDark ? "border-white text-white": "border-black text-black"}  px-6 py-3 rounded-md border    transition-color duration-500`} onClick={()=>setTheme((prev)=>(prev==="dark" ? "light" :"dark"))}>Light/Dark Mode</button> */}
//             <button className={`${isDark ? "border-white text-white": "border-black text-black"}  px-6 py-3 rounded-md border    transition-color duration-500`} onClick={()=>setTheme((prev)=>(prev==="dark" ? "light" :"dark"))}>{theme === "dark" ? "Light" :"Dark"} Mode</button>
    
//         </div>

//         { showChat ? (
//             <div 
//             className={`${
//                 isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
//             } p-6 rounded-lg mt-8 shadow-lg border border-cyan-500/30 transition-all`}
//             >
//                 {
//                      messages.map((msg,idx)=>(
//                         <p key={idx} className="mb-3 animation-fade-in">
//                             <strong className="text-cyan-500">{msg.sender}:</strong>{" "}
//                             <span>{msg.text}</span>
//                         </p>
//                      ))
//                 }

//                 <div ref={chatEndRef}/>
//             </div>
//         ):(
//             <div
//             className="flex justify-center items-center mt-40 h-[200px]">
//                 <div
//                 className={`w-24 rounded-full ${
//                     isDark ? "bg-white": "bg-black"
//                 } ${isSpeaking ? "animate-jarvers-pulse": ""}
//                 `}
//                 ></div> 
//         </div>
//         )
//     }

//     <form  onSubmit={handleTextSubmit}
//     className={`fixed bottom-0 left-0 right-0 px-6 py-4 border-t ${
//         isDark ? "bg-gray-950  order-cyan-500/10 " : "bg-white border-gray-300 text-black"}
//         flex items-center gap-4 z-50 `}>
//         <input
//             type="text"
//             placeholder="Type your message here..."
//             value={textInput}
//             onChange={(e)=>setTextInput(e.target.value)}
             
//             className={`flex-1 px-4 py-3 rounded-md border ${
//                 isDark ? "bg-gray-900 text-white border-gray-700" : "bg-gray-200 text-black border-gray-300"
//             } border focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-500`} />
//         <button 
//             type="submit"
//             className={`px-4 py-2 rounded-md bg-cyan-500 text-white hover:bg-cyan-600 transition-color duration-500`}>
//             Send
//         </button>
   
//     </form>
//     </div>
//     );
//     }

//     export default Indew;



































import React from "react";
import { useState ,useEffect ,useRef } from "react";
const ASSISTANT_NAME = "Gemini"
const GEMINI_API_KEY = "AIzaSyBkLthD8I8UiqtYCB2WCG2IE72nXrZAyuI"

const Indew = () => {
    const [messages, setMessage] =useState([]); 
    const [textInput, setTextInput] =useState(""); 
    const [isSpeaking, setIsSpeaking] =useState(false); 
    const [showChat, setShowChat] =useState(false); 
    const [theme, setTheme] = useState("dark");
    const [showIntro, setshowIntro] =useState(true); 
    const [speechSupporter, setSpeechSupporter] =useState(true);  
    const chatEndRef = useRef(null);
    const recognitionRef = useRef(null);
    const synth = window.speechSynthesis;
    const voiceRef = useRef(null);
    const isProcessingRef = useRef(false);
                                             // useStateSnippet  new thing 



    const addMessage = (sender , text) => {     
        setMessage((prev) => [...prev, { sender, text }]);
    };      
    
    const speak = (text) => {
        // addMessage(ASSISTANT_NAME, text);

        if (!speechSupporter) return;

        //stop reconition before speaking
        if (recognitionRef.current) {
            recognitionRef.current.stop();
        }

        const utterance = new SpeechSynthesisUtterance(text);
        const voices = voiceRef.current || [];
        // utterance.voice = voiceRef.current.find((v)=> v.name.includes("Daniel")) ||voices[0];
        utterance.voice = voices.find((v) => v.name.includes("Daniel")) || voices[0];



        setIsSpeaking(true);
        isProcessingRef.current = true;
        synth.speak(utterance);

        utterance.onend = () => {
            setIsSpeaking(false);
            isProcessingRef.current = false;
            //Restart recognition after speaking is done
            setTimeout(() => {
                try{
                    if (recognitionRef.current && !isProcessingRef.current) {
                        recognitionRef.current.start();
                    }
                }catch (error) {
                    console.error("Error restarting recognition:", error);
                }
                
            }, 5000);
        }

    };

    const queryGemini = async (prompt , chatcount) => {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1; // Months are zero-based in JavaScript
        const day = now.getDate();
        const hours = now.getHours();
        const minutes = now.getMinutes();

        const payload = {
            contents:[
                {
                    parts:[
                        {
                            text:
                            `Your main task are:
                            -here is chatcount: ${chatcount} if the chat count is more then 0 then you are in the chat mode and you have to answer the question as a chat bot.
                            -here is the date: ${year}-${month}-${day} ${hours}:${minutes}
                            -here is the prompt: ${prompt}
                            -here is the assistant name: ${ASSISTANT_NAME}
                           


                            
                            current system date :${new Date().toLocaleDateString()}
                            current system time :${new Date().toLocaleTimeString()}
                            `
                        }
                    ]
                }
            ]
             
    };
    console.log("Payload:", payload);
    console.log("Chat count:", chatcount);
    console.log("API Key:", GEMINI_API_KEY);
// console.log("Endpoint:", `https://generativelanguage.googleleapis.com/v1beta/model/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`);

    chatcount++;
        

    try{
        const response = await fetch(
                // `https://generativelanguage.googleleapis.com/v1beta/model/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, 
                // `https://generativelanguage.googleleapis.com/v1beta/model/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, 
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
                
            {
                method: "POST",
                headers:{"Content-Type": "application/json"},
                    // Authorization: `Bearer ${GEMINI_API_KEY}`,
                body: JSON.stringify(payload),
                },
            );
        // if (!response.ok) { 
        //     const data = await response.json();
        //     // console.error("API Response Error:", data);
        //     return data.candidates?.[0]?.content?.parts?.[0]?.text ||"No response from Gemini";

                
        //     }
        //     else{
        //         console.error("API Error:", response.status);
        //         return "Error: Unable to fetch response from Gemini API";
        //     }

        if (!response.ok) { 
            const data = await response.json();
            console.error("API Response Error:", data);
            return "Error: " + (data.error?.message || "No response from Gemini");
        }
        else {
        const data = await response.json();
        console.log("Gemini API success:", data);
        
        // Adjust according to Gemini’s actual response structure
        // return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response from Gemini";
        return data.candidates?.[0]?.content?.parts?.[0]?.text ||"No response from Gemini";

    }


    

    }catch (error) {
        console.error("Error:", error);
        return "Error: connection error Unable to fetch response from Gemini API";
    }
    }



    var chatcount = 0;
    const handleCommand = async (command ,chatcount) => {
        const cmd = command.toLowerCase();

        if(cmd.trim()==="")return;

        addMessage("kanita", cmd);
        isProcessingRef.current = true;

        try{
            if (cmd.includes("open youtube")) {
                speak("Opening YouTube");
                window.open("https://www.youtube.com");


        }
        else if (cmd.includes("open google")) {
    speak("Opening Google");
    window.open("https://www.google.com");
} else if (cmd.includes("Do you know Virat Kohli")) {
    speak("Yes I know Virat Kohli. He is a famous Indian cricketer and former captain of the Indian national team. He is known for his aggressive batting style and has numerous records in international cricket.");
} else if (cmd.includes("Do you know MS Dhoni")) {
    speak("Yes I know MS Dhoni. He is a former Indian cricketer and captain of the Indian national team. He is known for his calm demeanor and exceptional leadership skills, leading India to many victories, including the 2007 ICC T20 World Cup and the 2011 ICC Cricket World Cup.");
} else if (cmd.includes("Do you know Sachin Tendulkar")) {
    speak("Yes I know Sachin Tendulkar. He is a legendary Indian cricketer, widely regarded as one of the greatest batsmen in the history of cricket. He holds numerous records, including being the highest run-scorer in international cricket.");
}
else if (cmd.includes("open facebook")) {
    speak("Opening Facebook");
    window.open("https://www.facebook.com", "_blank");
}
else if (cmd.includes("open twitter")) {
    speak("Opening Twitter");
    window.open("https://www.twitter.com", "_blank");
}
else if (cmd.includes("open instagram")) {
    speak("Opening Instagram");
    window.open("https://www.instagram.com", "_blank");
}
else if (cmd.includes("open linkedin")) {
    speak("Opening LinkedIn");
    window.open("https://www.linkedin.com", "_blank");
}
else if (cmd.includes("open github")) {
    speak("Opening GitHub");
    window.open("https://www.github.com", "_blank");
}
        
    else if (cmd.includes("exit || close || quit || stop|| end || bye || cancel|| leave|| terminate || logout || shutdown || power off || turn off || sleep || hibernate || suspend || restart || reboot || log off || log out || sign out || sign off")) {
                speak("Exiting the application");
                recognitionRef.current.stop();

    }
    else{
        const reply= await queryGemini(cmd , chatcount);
        speak(reply);
        addMessage(ASSISTANT_NAME, reply);

    }
}
finally{
    // this is set false when speaking ends (in utterance.onend)
}
    };



    const handleTextSubmit = async(e) => {
        e.preventDefault();
        if (textInput.trim() === "") return;
        await handleCommand(textInput);
        setTextInput("");
    };

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition || !window.speechSynthesis) {
            setSpeechSupporter(false);
            addMessage(ASSISTANT_NAME," Sorry, your browser does not support speech recognition or speech synthesis.");
            return;
        }
        setSpeechSupporter(true);

        const loadVoices = () => {
            voiceRef.current = synth.getVoices();
        };
        loadVoices();
        synth.addEventListener("voiceschanged", loadVoices);

        const recognition = new SpeechRecognition();
        recognition.interimResults = false;
        recognition.lang = "en-US";
        recognition.continuous = true;
        
        // recognition.onresult = (event) => {
        //     if(isProcessingRef.current) return;

        //     const lastResult = event.results[event.results.length - 1];
        //     if (!lastResult.isFinal) return;


        //     const command = lastResult[0].transcript.trim();

        //     if(command) {
        //         handleCommand(command);
        //     }
        // }

        recognition.onresult = (event) => {
            if (isProcessingRef.current) return; // Prevent processing if already handling a command
        
            const lastResult = event.results[event.results.length - 1];
            if (!lastResult.isFinal) return; // Process only the final result
        
            const command = lastResult[0].transcript.trim();
        
            if (command) {
                isProcessingRef.current = true; // Set processing flag to true
                handleCommand(command).finally(() => {
                    isProcessingRef.current = false; // Reset processing flag after command is handled
                });
            }
            // if (command) {
            //     handleCommand(command);
            //   }

        };

        recognition.onerror = (event) => {
            console.error("Speech recognition error:", event.error);
            if(event.error !== "not-speech") {
                addMessage("error", `Speech recognition error: ${event.error}`);
            }
        };

        recognition.onend = () =>
        {
            if(!isProcessingRef.current)
            {
                setTimeout(() => 
                {
                    try 
                    {
                        recognition.start();
                    } catch (error) 
                    {
                        console.error("Error restarting recognition:", error);
                    }
                }, 4000);
            }
        }
    
    recognition.start();
    recognitionRef.current = recognition;
    return () =>
    {
        recognitionRef.current?.stop();
        synth.removeEventListener("voiceschanged",loadVoices);
        synth.cancel();
    }
},[]); 

    useEffect(()=>
        {
            const timer = setTimeout(() =>setshowIntro(false),2000);
            return ()=> clearTimeout(timer);

        },[])


        useEffect(()=>
        {
            chatEndRef.current?.scrollIntoView({behavior:"smooth"});
            
        },[messages]);
        

    
    
    if(showIntro){
        return(
            <div className="fixed inset-0 flex items-center justify-center  bg-black text-white z-50">
                 <h1 className="text-4xl font-bold tracking-wide uppercase">Initializing Gemini </h1>
                </div>
    
    
             )
    }

    const isDark = theme ==="dark"


 




    return(
    <div 

    
   

        className={`${
        (isDark ? "bg-gray-950 text-white" : " bg-white text-gray-900")} font-sans max-w-full mx-auto mx-auto p-6 pb-28 relative min-h-screen transition-color duration-500`}>

        <div className="flex justify-center gap-4 mt-6">
            <button onClick={()=>setShowChat(true)}
             className={`${isDark ? "border-white text-white": "border-black text-black"}  px-6 py-3 rounded-md border    transition-all duration-200`}>
                Chat / History
            </button>
            <button 
             onClick={()=>setShowChat(false)}
            className={`${isDark ? "border-white text-white": "border-black text-black"}  px-6 py-3 rounded-md border    transition-color duration-500`}>
                Home
            </button>
             

        <button
  onClick={() => {
    if (recognitionRef.current) {
      if (isSpeaking) {
        recognitionRef.current.stop();
        recognitionRef.current.onend = null;
      } else {
        recognitionRef.current.start()
        recognitionRef.current.onend = () => {
            if (!isProcessingRef.current) {
              recognitionRef.current.start();
            
            }}
      }
      setIsSpeaking((prev) => !prev);
    }
  }}
  className={`${isDark ? "border-white text-white" : "border-black text-black"} px-6 py-3 rounded-md border transition-color duration-500`}
>
  {isSpeaking ? "🛑  Stop Mic" : "🎙️ Start Mic"}
</button>
            {/* <button className={`${isDark ? "border-white text-white": "border-black text-black"}  px-6 py-3 rounded-md border    transition-color duration-500`} onClick={()=>setTheme((prev)=>(prev==="dark" ? "light" :"dark"))}>Light/Dark Mode</button> */}
            <button className={`${isDark ? "border-white text-white": "border-black text-black"}  px-6 py-3 rounded-md border    transition-color duration-500`} onClick={()=>setTheme((prev)=>(prev==="dark" ? "light" :"dark"))}>{theme === "dark" ? "Light" :"Dark"}
                 Mode</button>
            
        </div>

        { showChat ? (
            <div 
            className={`${
                isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
            } p-6 rounded-lg mt-8 shadow-lg border border-cyan-500/30 transition-all`}
            >
                {
                     messages.map((msg,idx)=>(
                        <p key={idx} className="mb-3 animation-fade-in">
                            <strong className="text-cyan-500">{msg.sender}:</strong>{" "}
                            <span>{msg.text}</span>
                        </p>
                     ))
                }

                <div ref={chatEndRef}/>
            </div>
        ):(
            <div
            className="flex justify-center items-center mt-40 h-[200px]">
                <div
                className={`w-24 rounded-full ${
                    isDark ? "bg-white": "bg-black"
                } ${isSpeaking ? "animate-jarvers-pulse": ""}
                `}
                ></div> 
                <div className={`flex justify-center items-center mt-40 h-[200px]`}>
  <div className={`w-24 h-24 rounded-full ${
      isDark ? "bg-white" : "bg-black"
    } ${isSpeaking ? "animate-speaking" : ""}`}>

  </div>
  </div>

        </div>
        )
    }

 
    <form  onSubmit={handleTextSubmit}
    className={`fixed bottom-0 left-0 right-0 px-6 py-4 border-t ${
        isDark ? "bg-gray-950  order-cyan-500/10 " : "bg-white border-gray-300 text-black"}
        flex items-center gap-4 z-50 `}>
        <input
            type="text"
            placeholder="Type your message here..."
            value={textInput}
            onChange={(e)=>setTextInput(e.target.value)}
             
            className={`flex-1 px-4 py-3 rounded-md border ${
                isDark ? "bg-gray-900 text-white border-gray-700" : "bg-gray-200 text-black border-gray-300"
            } border focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-500`} />
        <button 
            type="submit"
            className={`px-4 py-2 rounded-md bg-cyan-500 text-white hover:bg-cyan-600 transition-color duration-500`}>
            Send
        </button>
   
    </form>
    </div>
    );
    }

    export default Indew;
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
function App() {
const [page, setPage] = useState("password");
const [password, setPassword] = useState("");
const [currentPhoto, setCurrentPhoto] = useState(0);
const [opened, setOpened] = useState(false);
const galleryAudioRef = useRef(new Audio("/music/memories.mp3"));
const audioRef = useRef(new Audio("/music/birthday.mp3"));
const photos = [
"/images/photo1.jpeg",
"/images/photo2.jpeg",
"/images/photo3.jpeg",
"/images/photo4.jpeg",
"/images/photo5.jpeg",
"/images/photo6.jpeg",
"/images/photo7.jpeg",
"/images/photo8.jpeg",
"/images/photo9.jpeg",
"/images/photo10.jpeg",
];

useEffect(() => {
if (page === "gallery") {
  galleryAudioRef.current.loop = true;
galleryAudioRef.current.play();
const timer = setInterval(() => {
setCurrentPhoto((prev) => {
  if (prev < photos.length - 1) {
    return prev + 1;
  }
  return prev;
});
}, 3000);


  return () => clearInterval(timer);
}


}, [page]);

const checkPassword = () => {
if (password === "23/06/2006") {
setPage("welcome");
} else {
alert("Wrong Date of Birth!");
}
};
if (page === "final") {
  return (
    <div
      style={{
        height: "100vh",
        background: "#000",
        color: "gold",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1>🎂 HAPPY BIRTHDAY VADAKI 🎂</h1>
      <h2>✨ Have an Amazing Year Ahead ✨</h2>
      <h3>Best Wishes From Your Friend ❤️</h3>
    </div>
  );
}

if (page === "letter") {
  return (
    <div
      style={{
        height: "100vh",
        background: "#1f2937",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>💌 A Message For Vadaki 💌</h1>

      <p style={{ fontSize: "22px", maxWidth: "700px" }}>
        Dear Vadaki,
        <br /><br />
        Thank you for being such a wonderful friend.
        <br />
        May your birthday be filled with happiness,
        success and beautiful memories.
        <br /><br />
        Keep smiling and keep shining.
        <br /><br />
        🎂 Happy Birthday 🎂
      </p>

      <button
        onClick={() => setPage("final")}
        style={{
          marginTop: "30px",
          padding: "12px 25px",
        }}
      >
        Final Surprise 🎆
      </button>
    </div>
  );
}
if (page === "gallery") {
return (
<div
style={{
height: "100vh",
background: "#000",
color: "white",
display: "flex",
flexDirection: "column",
justifyContent: "center",
alignItems: "center",
}}
> <h1>📸 Beautiful Memories 📸</h1>


    <img
      src={photos[currentPhoto]}
      alt="memory"
      style={{
        width: "350px",
        height: "450px",
        objectFit: "cover",
        borderRadius: "20px",
        marginTop: "20px",
      }}
    />

    <h3 style={{ marginTop: "20px" }}>
      Photo {currentPhoto + 1} of {photos.length}
    </h3>
   {currentPhoto === photos.length - 1 && (
  <motion.button
    initial={{ opacity: 0, scale: 0.5, y: 50 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 1 }}
    onClick={() => {
  galleryAudioRef.current.pause();
  galleryAudioRef.current.currentTime = 0;
  setPage("envelope");
}}
    style={{
      marginTop: "20px",
      padding: "12px 25px",
      fontSize: "20px",
      borderRadius: "12px",
      cursor: "pointer",
    }}
  >
    Continue 💌
  </motion.button>
)}

  </div>
);
}
if (page === "envelope") {
  return (
    <div
      style={{
        height: "100vh",
        background: "#111827",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
      }}
    >
      {!opened ? (
        <>
          <div
            style={{
              width: "350px",
              height: "220px",
              background: "#f5deb3",
              borderRadius: "10px",
              position: "relative",
              boxShadow: "0 0 20px rgba(0,0,0,0.5)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "50%",
                background: "#e6c79c",
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              }}
            ></div>

            <button
              onClick={() => {
  galleryAudioRef.current.pause();
  galleryAudioRef.current.currentTime = 0;

 audioRef.current.loop = true;
audioRef.current.play();

  setOpened(true);
}}
              style={{  
                position: "absolute",
                left: "50%",
                top: "55%",
                transform: "translate(-50%, -50%)",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                border: "none",
                background: "crimson",
                color: "white",
                fontSize: "24px",
                cursor: "pointer",
              }}
            >
              💌
            </button>
          </div>

          <h2 style={{ marginTop: "30px" }}>
            Click the seal to open the letter 💌
          </h2>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            width: "600px",
            maxWidth: "90%",
            background: "#fffaf0",
            color: "black",
            padding: "40px",
            borderRadius: "15px",
            boxShadow: "0 0 25px rgba(0,0,0,0.5)",
          }}
        >
          <h1
  style={{
    textAlign: "center",
    color: "#8b0000",
    marginBottom: "30px",
  }}
>
            💌 A Letter For Vadaki 💌
          </h1>

          <p style={{ fontSize: "20px", lineHeight: "1.8" }}>
            Dear Vadaki,
            <br /><br />
            Wishing you a very Happy Birthday! 🎂✨
            <br /><br />
            Thank you for being such an amazing friend.
            May your life be filled with happiness,
            success, laughter and beautiful memories.
            <br /><br />
            Keep smiling and keep shining.
            Today is your special day and you deserve
            all the happiness in the world.
            <br /><br />
            Happy Birthday once again! 🎉🎁🎂
          </p>

          <div style={{ textAlign: "center" }}>
            <button
              onClick={() => setPage("letter")}
              style={{
                marginTop: "20px",
                padding: "12px 25px",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Continue ➜
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
if (page === "birthday") {
return (
<div
style={{
height: "100vh",
background: "#111827",
color: "white",
display: "flex",
flexDirection: "column",
justifyContent: "center",
alignItems: "center",
}}
> <h1>🎂 Happy Birthday Vishva Kanjariya R 🎉</h1> <h2>May all your dreams come true ✨</h2>


    <button
      onClick={() => setPage("gallery")}
      style={{
        marginTop: "20px",
        padding: "12px 25px",
      }}
    >
      View Memories 📸
    </button>
  </div>
);


}

if (page === "intro") {
return (
<div
style={{
height: "100vh",
background: "black",
color: "white",
display: "flex",
flexDirection: "column",
justifyContent: "center",
alignItems: "center",
}}
> <h1>✨ Someone very special is celebrating today... ✨</h1>


    <button
      onClick={() => setPage("birthday")}
      style={{
        marginTop: "20px",
        padding: "12px 25px",
        fontSize: "18px",
      }}
    >
      Continue ➜
    </button>
  </div>
);


}

if (page === "welcome") {
return (
<div
style={{
height: "100vh",
background:
"linear-gradient(135deg, #0f172a, #1e293b, #312e81)",
color: "white",
display: "flex",
flexDirection: "column",
justifyContent: "center",
alignItems: "center",
}}
>
<h1 style={{ fontSize: "40px", textAlign: "center" }}>
🎀 A Special Surprise For Vadaki 🎀 </h1>


    <button
      onClick={() => setPage("intro")}
      style={{
        marginTop: "20px",
        padding: "15px 30px",
        fontSize: "20px",
        cursor: "pointer",
      }}
    >
      Open Your Gift 🎀
    </button>
  </div>
);


}

return (
<div
style={{
height: "100vh",
display: "flex",
flexDirection: "column",
justifyContent: "center",
alignItems: "center",
}}
> <h1>🎁 A Special Surprise Awaits You</h1>


  <input
    type="text"
    placeholder="Enter Your Date of Birth"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    style={{
      padding: "12px",
      fontSize: "18px",
      marginTop: "20px",
    }}
  />

  <br />

  <button
    onClick={checkPassword}
    style={{
      padding: "12px 25px",
      fontSize: "18px",
    }}
  >
    Unlock Surprise
  </button>
</div>


);
}

export default App;

import confetti from "canvas-confetti";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import "./App.css";
import React from "react";
function App() {
const [page, setPage] = useState("password");
const [password, setPassword] = useState("");
const [showBoom, setShowBoom] = useState(false);
const [count, setCount] = useState(3);
const [showSignature, setShowSignature] = useState(false);
const [currentPhoto, setCurrentPhoto] = useState(0);
const [typedText, setTypedText] = useState("");
const [opened, setOpened] = useState(false);
const galleryAudioRef = useRef(new Audio("/music/memories.mp3"));
const audioRef = useRef(new Audio("/music/birthday.mp3"));
useEffect(() => {
  if (page === "final") {
    const interval = setInterval(() => {
     confetti({
  particleCount: 120,
  angle: 60,
  spread: 80,
  startVelocity: 90,
  origin: { x: 0, y: 0.8 }
});
confetti({
  particleCount: 200,
  spread: 360,
  startVelocity: 80,
  origin: { x: 0.5, y: 0.3 }
});

confetti({
  particleCount: 120,
  angle: 120,
  spread: 80,
  startVelocity: 70,
  origin: { x: 1, y: 0.8 }
});
    }, 1000);

    return () => clearInterval(interval);
  }
}, [page]);
useEffect(() => {
  if (page === "countdown") {
    setCount(3);

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev === 1) {
  clearInterval(timer);

  confetti({
    particleCount: 300,
    spread: 360,
    startVelocity: 70,
    origin: { x: 0.5, y: 0.5 }
  });

  setTimeout(() => {
    setPage("final");
  }, 2000);

  return "🎉";
}

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }
}, [page]);
useEffect(() => {
  if (page === "final") {
    const message = "🎂 HAPPY BIRTHDAY VADAKI 🎂";

    let index = 0;

    setTypedText("");

    const typing = setInterval(() => {
      setTypedText(message.slice(0, index + 1));
      index++;

      if (index >= message.length) {
  clearInterval(typing);

  setTimeout(() => {
    setShowSignature(true);
  }, 1000);
}
    }, 100);

    return () => clearInterval(typing);
  }
}, [page]);
const heartAnimation = {
  animation: "float 6s infinite ease-in-out",
};
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
if (password === "23062006") {
setPage("welcome");
} else {
alert("Wrong Date of Birth!");
}
};
if (page === "final") {
  return (
<>
<div
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 1,
  }}
/>
{[
  { top: "15%", left: "20%" },
  { top: "25%", left: "80%" },
  { top: "60%", left: "15%" },
  { top: "70%", left: "75%" },
].map((pos, i) => (
  <motion.div
    key={i}
    animate={{
      scale: [0, 2, 0],
      opacity: [0, 1, 0],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      delay: i,
      repeatDelay: 3,
    }}
    style={{
      position: "fixed",
      top: pos.top,
      left: pos.left,
      fontSize: "50px",
      pointerEvents: "none",
      zIndex: 999,
    }}
  >
    ✨
  </motion.div>
))}

<motion.div
  animate={{
    x: [-200, 1200],
    y: [0, 300],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    repeatDelay: 2,
  }}
  style={{
    position: "fixed",
    top: "10%",
    left: "-200px",
    fontSize: "40px",
    pointerEvents: "none",
    zIndex: 999,
  }}
>
  💫
  
</motion.div>
  {[...Array(20)].map((_, i) => (
    <div
      key={i}
      style={{
        position: "fixed",
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        color: "gold",
        fontSize: "20px",
        animation: "twinkle 2s infinite",
        animationDelay: `${Math.random() * 2}s`,
        pointerEvents: "none",
      }}
    >
      ✨
    </div>
  ))}
    <motion.div
    
  animate={{
    scale: [1, 1.05, 1]
  }}
  transition={{
    duration: 12,
    repeat: Infinity
  }}
    
      style={{
        height: "100vh",
       backgroundColor: "rgba(0,0,0,0.5)",
       backgroundBlendMode: "darken",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "gold",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
     <motion.h1
  animate={{
  opacity: 1,
  y: 0,
  scale: [1, 1.05, 1],
}}
transition={{
  duration: 3,
  repeat: Infinity,
}}
transition={{
  duration: 2,
  repeat: Infinity,
}}
style={{
textShadow: "0 0 5px #fff, 0 0 12px #ffd700"
}}
>
  {typedText}
</motion.h1>
      <h3>✨ Have an Amazing Year Ahead ✨</h3>
     
      
    <h3 style={{ color: "white" }}>
 Thank You For Being Such A Wonderful Friend ❤️
</h3>

<p
  style={{
    marginTop: "40px",
    fontSize: "22px",
    color: "white",
  }}
>
  May Your Smile Shine Brighter Every Day ✨
</p>

<p
  style={{
  fontSize: "28px",
  fontWeight: "bold",
  color: "#FFD700",
 textShadow: "0 0 10px #FFD700, 0 0 20px #FFD700"
}}
>
  <br />
 
</p>
{showSignature && (
  <motion.h1
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 2 }}
  >
    💖 From Your Favorite Loose Paiya 💖
  </motion.h1>
)}
</motion.div>
</>
  );
}

if (page === "letter") {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5 }}
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


Life becomes more meaningful when we have good friends beside us.<br /><br />

Thank you for all the laughs, memories and positive moments that you have shared.<br /><br />

One of the best things life gave me was a friend like you.<br /><br />

No matter what challenges come your way, stay strong and keep moving forward with confidence.<br /><br />

May this year bring you new opportunities, great achievements and countless reasons to smile.<br /><br />

🎂 Happy Birthday Vadaki 🎂
      </p>

      <button
       onClick={() => setPage("countdown")}
        style={{
          marginTop: "30px",
          padding: "12px 25px",
        }}
      >
        Final Surprise 🎆
      </button>
    </motion.div>
  );
}


if (page === "countdown") {
  return (
    <div
      style={{
        height: "100vh",
        background: "black",
        color: "gold",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontSize: "120px" }}>
        {count}
      </h1>

      <h2>🎆 Final Surprise Loading... 🎆</h2>
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


 <motion.img
  key={currentPhoto}
  src={photos[currentPhoto]}
  alt="memory"
  initial={{
    x: currentPhoto % 2 === 0 ? 300 : -300,
    opacity: 0,
  }}
  animate={{
    x: 0,
    opacity: 1,
  }}
  transition={{
    duration: 0.8,
  }}
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
      
{[...Array(12)].map((_, i) => (
  <div
    key={i}
    style={{
      position: "absolute",
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      color: "rgba(255,0,100,0.3)",
      fontSize: `${20 + Math.random() * 20}px`,
      animation: "float 4s infinite ease-in-out",
      animationDelay: `${Math.random() * 2}s`,
      pointerEvents: "none",
    }}
  >
    ❤️
  </div>
))}
      {!opened ? (
        <>
         <motion.div
  animate={{
    y: [0, -10, 0]
  }}
  transition={{
    duration: 2,
    repeat: Infinity
  }}
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

            <motion.button
  animate={{
    scale: [1, 1.15, 1]
  }}
  transition={{
    duration: 1,
    repeat: Infinity
  }}
              onClick={() => {
  galleryAudioRef.current.pause();
  galleryAudioRef.current.currentTime = 0;

 audioRef.current.loop = true;
audioRef.current.play();

  setOpened(true);
}}
  style={{
 position: "absolute",
left: "42%",
top: "41%",
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
          </motion.button>
          </motion.div>

          <h2 style={{ marginTop: "30px" }}>
            Click the seal to open the letter 💌
          </h2>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5 }}
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
<h1
  style={{
    color: "white",
    fontSize: "50px",
    textAlign: "center",
    animation: "zoomIn 2s ease, pulse 1.5s infinite",
  }}
>
  Today is your special day ❤️
</h1>

<p
  style={{
    color: "white",
    fontSize: "22px",
    maxWidth: "700px",
    textAlign: "center",
    lineHeight: "1.8",
    marginTop: "20px",
  }}
>
 Another beautiful year begins today.
  <br /><br />
 May every step you take bring new opportunities, unforgettable experiences and reasons to smile.
  <br /><br />
 Thank you for being such a kind and genuine friend. 
  ✨🎂💖
<br /><br />
  Wishing you a year full of achievements, adventures and wonderful moments. 🎉
</p>

<button
  onClick={() => setPage("gallery")}
  style={{
    marginTop: "30px",
    padding: "15px 30px",
    fontSize: "18px",
    border: "none",
    borderRadius: "10px",
    background: "#FFD700",
    color: "#8B0000",
    cursor: "pointer",
  }}
>
  Continue ❤️
</button>
  </div>
);


}

return (
<div
style={{
  height: "100vh",
  background: "linear-gradient(135deg, #8B0000, #C0392B, #E74C3C)",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
}}
> 
{[...Array(15)].map((_, i) => (
  <div
  key={i}
  className="heart"
  style={{
      position: "absolute",
      color: "rgba(255,255,255,0.4)",
      fontSize: `${20 + Math.random() * 20}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 2}s`,
      pointerEvents: "none",
      zIndex: 999,
      animation: "float 4s infinite ease-in-out",
      transform: "translateY(0px)",
    }}
  >
    ❤️
  </div>
))}
<div
  style={{
    width: "420px",
    background: "white",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    transform: "rotate(-3deg)",
    marginRight: "80px",
    marginLeft: "30px",
  }}
>
  <img
    src="/images/photo1.jpeg"
    alt="Birthday"
    style={{
      width: "100%",
      height: "350px",
      objectFit: "cover",
    }}
  />

  <h3
    style={{
      color: "#8B0000",
      textAlign: "center",
      marginTop: "10px",
    }}
  >
    Happy Birthday Vadaki 🎂
  </h3>
</div>
<div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "rgba(255,255,255,0.22)",
    padding: "30px",
    width: "550px",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  }}

><h1
  style={{
    color: "white",
    fontSize: "28px",
    textAlign: "center",
    lineHeight: "1.2",
    maxWidth: "450px",
    marginBottom: "25px",
    border: "none",
    borderRadius: "10px",
    width: "320px",
    
  }}
>
  🎁 A Special Surprise Awaits You
</h1>
<p
  style={{
    color: "white",
    fontSize: "18px",
    marginBottom: "25px",
  }}
>
  A beautiful surprise is waiting just for you ❤️
</p>
  
<h3 style={{ 
  color: "white",
    fontSize: "14px",
    letterSpacing: "2px",
}}>
  🔐 ENTER A PASSCODE
  
</h3>


<div
  style={{
    display: "flex",
    gap: "8px",
    marginBottom: "20px",
  }}
>
  {[...Array(8)].map((_, i) => (
    <div
      key={i}
      style={{
        width: "14px",
        height: "14px",
        border: "2px solid white",
        borderRadius: "4px",
        background: i < password.length ? "white" : "transparent",
      }}
    />
  ))}
</div>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 70px)",
    gap: "12px",
  }}
>
  {[1,2,3,4,5,6,7,8,9].map((num) => (
    
   <button
  key={num}
  onClick={() => {
    if (password.length < 8) {
      setPassword(password + num);
    }
  }}
  style={{
    width: "45px",
    height: "55px",
    borderRadius: "50%",
    border: "none",
    background: "#D98A8A",
    color: "white",
    fontSize: "20px",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  }}
>
  {num}
</button>
 ))}
 </div>

<div
  style={{
    marginTop: "12px",
     marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  }}
>
  <button
    onClick={() => {
      if (password.length < 8) {
        setPassword(password + "0");
      }
    }}
    style={{
      width: "55px",
      height: "55px",
      borderRadius: "50%",
      border: "none",
      background: "#D98A8A",
      color: "white",
      fontSize: "20px",
      cursor: "pointer",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    }}
  >
    0
  </button>
  </div>
<div
  style={{
    marginTop: "12px",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <button
  onClick={() => setPassword("")}
  style={{
    padding: "8px 15px",
    fontSize: "14px",
  }}
>
  Clear
</button>

<button
  onClick={checkPassword}
  style={{
    padding: "8px 15px",
    fontSize: "14px",
  }}
>
  Unlock
</button>
</div>
</div>
</div>

);
}
export default App;
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function supportsWebMAlpha() {
  const video = document.createElement("video");
  return video.canPlayType('video/webm; codecs="vp9"') === "probably" ||
         video.canPlayType('video/webm; codecs="vp9"') === "maybe";
}

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const [webmSupported, setWebmSupported] = useState(true);

  useEffect(() => {
    setWebmSupported(supportsWebMAlpha());
    if (!sessionStorage.getItem("splashShown")) {
      setVisible(true);
      sessionStorage.setItem("splashShown", "true");
      const timer = setTimeout(() => setVisible(false), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            background: "#F2EFE8",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <video
            autoPlay
            muted
            playsInline
            style={{
              width: "clamp(180px, 35vw, 360px)",
              height: "auto",
              mixBlendMode: webmSupported ? "normal" : "multiply",
            }}
          >
            <source src="/logo_splash.webm" type="video/webm" />
            <source src="/logo_splash.mp4" type="video/mp4" />
          </video>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

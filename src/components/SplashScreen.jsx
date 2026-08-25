import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import acaLogo from "../assets/logo_acastructure.webp";

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
          {webmSupported ? (
            /* Desktop — transparent WebM */
            <video
              autoPlay
              muted
              playsInline
              style={{ width: "clamp(180px, 35vw, 360px)", height: "auto" }}
            >
              <source src="/logo_splash.webm" type="video/webm" />
            </video>
          ) : (
            /* Mobile/Safari fallback — static logo with fade pulse */
            <motion.img
              src={acaLogo}
              alt="AcaStructure"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ width: "clamp(180px, 50vw, 320px)", height: "auto" }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

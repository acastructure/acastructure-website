import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function isSafariOrIOS() {
  const ua = navigator.userAgent;
  return /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) ||
    (/Safari/.test(ua) && !/Chrome/.test(ua));
}

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const [bgColor, setBgColor] = useState("#F2EFE8");

  useEffect(() => {
    // On Safari/iOS match the video's white background exactly
    if (isSafariOrIOS()) setBgColor("#FFFFFF");
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
            background: bgColor,
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
            style={{ width: "clamp(180px, 35vw, 360px)", height: "auto" }}
          >
            <source src="/logo_splash.webm" type="video/webm" />
            <source src="/logo_splash.mp4" type="video/mp4" />
          </video>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

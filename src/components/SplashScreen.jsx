import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function isMobile() {
  return /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
}

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(isMobile());
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
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
          }}
        >
          {mobile ? (
            /* Mobile — animated logo image, guaranteed to work */
            <motion.img
              src="/logo_splash_frame.png"
              alt="AcaStructure"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ width: "clamp(160px, 45vw, 280px)", height: "auto" }}
            />
          ) : (
            /* Desktop — full video */
            <video
              autoPlay
              muted
              playsInline
              preload="auto"
              style={{ width: "clamp(200px, 40vw, 400px)", height: "auto" }}
            >
              <source src="/logo_splash.mp4" type="video/mp4" />
              <source src="/logo_splash.webm" type="video/webm" />
            </video>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

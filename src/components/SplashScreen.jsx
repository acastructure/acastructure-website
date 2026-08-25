import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!sessionStorage.getItem("splashShown")) {
      setVisible(true);
      sessionStorage.setItem("splashShown", "true");

      // Force play on iOS — needs to be triggered after mount
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }

      const timer = setTimeout(() => setVisible(false), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Also try to play once video is ready
  const handleCanPlay = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

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
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            onCanPlay={handleCanPlay}
            style={{ width: "clamp(200px, 40vw, 400px)", height: "auto" }}
          >
            <source src="/logo_splash.mp4" type="video/mp4" />
            <source src="/logo_splash.webm" type="video/webm" />
          </video>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

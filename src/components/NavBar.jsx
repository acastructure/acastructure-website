import { Link } from "react-router-dom";
import acastructureMark from "../assets/acastructure_mark.svg";

export default function NavBar() {
  return (
    <div className="bg-ink text-paper sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={acastructureMark} alt="" className="h-16 w-auto" />
          <span className="font-display text-lg tracking-tight">AcaStructure</span>
        </Link>
        <Link
          to="/get-gradpath"
          className="font-body text-sm font-medium bg-blueprint text-ink px-5 py-2 rounded-sm hover:bg-paper transition-colors"
        >
          Get GradPath
        </Link>
      </div>
    </div>
  );
}

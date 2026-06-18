import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="contact" className="bg-paper text-charcoal border-t border-charcoal/10">
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <div>
          <h3 className="font-display text-2xl mb-3">Get in touch</h3>
          <p className="font-body text-charcoal/70 max-w-sm">
            Student, club leader, advisor, or administrator — reach out and we'll
            get back to you directly.
          </p>
        </div>
        <div className="font-mono text-sm text-charcoal/70 space-y-1 text-right">
          <p>acastructure@gmail.com</p>
          <p className="text-charcoal/40">AcaStructure LLC</p>
          <Link to="/terms" className="text-charcoal/40 hover:text-charcoal/70 underline block mt-1">
            User Agreement
          </Link>
        </div>
      </div>
    </footer>
  );
}
import { Link } from "react-router-dom";
import gradpathMark from "../assets/gradpath_mark.svg";
import edvisorMark from "../assets/edvisor_mark.svg";

export default function WhatWeBuild() {
  return (
    <section id="product" className="bg-paper text-charcoal">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-blueprint-dim mb-4">
          What We Build
        </p>
        <h2 className="font-display font-medium text-3xl md:text-4xl max-w-2xl mb-16">
          One model. Two windows into it.
        </h2>

        <div className="grid md:grid-cols-2 gap-px bg-charcoal/10">
          <div className="bg-paper p-10 flex flex-col">
            <div className="flex items-center gap-4 mb-3">
              <img src={gradpathMark} alt="" className="h-14 w-auto shrink-0" />
              <div>
                <p className="font-mono text-[11px] tracking-widest uppercase text-brass">
                  For Students
                </p>
                <h3 className="font-display text-2xl">GradPath</h3>
              </div>
            </div>
            <p className="font-body text-charcoal/70 leading-relaxed mb-8 mt-3">
              A clear, real-time view of degree progress, GE requirements, semester
              planning, and transfer articulation — built directly from official
              institution bulletins.
            </p>
            <Link
              to="/get-gradpath"
              className="font-body text-sm font-medium text-ink bg-blueprint inline-block px-5 py-2.5 rounded-sm hover:opacity-90 transition-opacity mt-auto w-fit"
            >
              Get GradPath →
            </Link>
          </div>

          <div className="bg-paper p-10 flex flex-col opacity-80">
            <div className="flex items-center gap-4 mb-3">
              <img src={edvisorMark} alt="" className="h-14 w-auto shrink-0" />
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-mono text-[11px] tracking-widest uppercase text-brass">
                    For Advisors
                  </p>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-charcoal/50 border border-charcoal/20 px-2 py-0.5 rounded-sm">
                    In development
                  </span>
                </div>
                <h3 className="font-display text-2xl">EdVisor</h3>
              </div>
            </div>
            <p className="font-body text-charcoal/70 leading-relaxed mt-3">
              The same underlying model, reshaped for advising teams — a working view
              into caseloads, requirement gaps, and where students are likely to fall
              behind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

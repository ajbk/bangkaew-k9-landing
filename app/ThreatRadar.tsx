"use client";

import { AiFillWarning } from "react-icons/ai";
import { BiSolidReport } from "react-icons/bi";
import { BsClipboardDataFill } from "react-icons/bs";
import { HiShieldCheck } from "react-icons/hi";
import { HiMiniDocumentArrowUp } from "react-icons/hi2";
import { IconContainer, Radar } from "../components/ui/radar-effect";

export default function ThreatRadar() {
  return (
    <div className="threat-radar" aria-label="Bangkaew K9 cyber threat radar">
      <div className="threat-radar-row threat-radar-row-top">
        <IconContainer
          text="DNS Risk"
          delay={0.2}
          icon={<AiFillWarning className="h-7 w-7 text-sky-300" />}
        />
        <IconContainer
          text="Phishing"
          delay={0.35}
          icon={<HiShieldCheck className="h-7 w-7 text-cyan-300" />}
        />
        <IconContainer
          text="Audit Log"
          delay={0.5}
          icon={<BiSolidReport className="h-7 w-7 text-teal-300" />}
        />
      </div>
      <div className="threat-radar-row threat-radar-row-mid">
        <IconContainer
          text="Branch LAN"
          delay={0.65}
          icon={<BsClipboardDataFill className="h-7 w-7 text-sky-300" />}
        />
        <IconContainer
          text="AI Summary"
          delay={0.8}
          icon={<HiMiniDocumentArrowUp className="h-7 w-7 text-cyan-300" />}
        />
      </div>
      <Radar className="absolute -bottom-10 left-1/2 -translate-x-1/2" />
      <div className="threat-radar-horizon" />
    </div>
  );
}

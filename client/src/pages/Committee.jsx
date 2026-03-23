

import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import rsv from '../assets/committee/rsv.jpg';
import sk from '../assets/committee/sk.jpg';
import vs from '../assets/committee/vs.jpg';
import br from '../assets/committee/br.png';
import lkm from '../assets/committee/lkm.jpg';
import sb from '../assets/committee/sb.jpg';
import nk from '../assets/committee/nk.jpg';
import rg from '../assets/committee/rg.jpg';
import ssh from '../assets/committee/ssh.png';
import aks from '../assets/committee/aks.jpeg';
import pkm from '../assets/committee/pkm.jpg';
import kv from '../assets/committee/kv.jpg';
import nr from '../assets/committee/nr.jpg';
import rcv from '../assets/committee/rcv.jpg';
import rdg from '../assets/committee/rdg.jpg';
import rms from '../assets/committee/rms.jpg';
import rps from '../assets/committee/rps.jpg';
import rs from '../assets/committee/rs.jpg';

import pk from '../assets/committee/pk.jpg';
import pkg from '../assets/committee/pkg.jpg';
import sc from '../assets/committee/sc.jpg';
import akm from '../assets/committee/akm.jpg';
import kl from '../assets/committee/kl.jpg';
import sd from '../assets/committee/sd.jpg';
import kp from '../assets/committee/kp.jpg';


import ss from '../assets/committee/ss.png';
import nt from '../assets/committee/nt.jpg';
import asks from '../assets/committee/asks.jpg';
import pkd from '../assets/committee/pkd.jpg';
import ag from '../assets/committee/ag.jpg';
import pb from '../assets/committee/pb.jpg';
import bns from '../assets/committee/bns.jpeg';

import sbs from '../assets/committee/sbs.webp';
import aksa from '../assets/committee/aksa.jpg';
import am from '../assets/committee/am.jpg';
import dk from '../assets/committee/dk.jpg';
import as_ts from '../assets/committee/technical support/ayush shrivastava.jpeg';
import ds_ts from '../assets/committee/technical support/divyansh singh.jpeg';
import pg_ts from '../assets/committee/technical support/paramita.jpeg';


const committeeData = [
  {
    roleLabel: "Patron",
    layout: "single",
    members: [
      { name: "Prof. Rama Shanker Verma", affiliation: "Director, MNNIT Allahabad", address: "Motilal Nehru National Institute of Technology Allahabad, Prayagraj – 211004, UP, India", photo: rsv, profileUrl: "https://www.mnnit.ac.in/index.php/institute/administration/director" },
    ],
  },
  {
    roleLabel: "Conference Chair",
    layout: "single",
    members: [
      { name: "Prof. L.K. Mishra", affiliation: "Dept. of Civil Engineering, MNNIT Allahabad", address: "Motilal Nehru National Institute of Technology Allahabad, Prayagraj – 211004, UP, India", photo: lkm, profileUrl: "https://mnnit.ac.in/profile/lkm" },
    ],
  },
  {
    roleLabel: "Organizing Secretaries",
    layout: "grid",
    members: [
      { name: "Prof. Rama Shanker",  affiliation: "Organizing Secretary",       address: "Dept. of Civil Engineering, MNNIT Allahabad", photo: rs, profileUrl: "https://mnnit.ac.in/profile/ramashanker" },
      { name: "Dr. Varun Singh",     affiliation: "Organizing Secretary",       address: "Dept. of Civil Engineering, MNNIT Allahabad", photo: vs, profileUrl: "https://mnnit.ac.in/profile/varun" },
      { name: "Dr. Snehal K",        affiliation: "Joint Organizing Secretary", address: "Dept. of Civil Engineering, MNNIT Allahabad", photo: sk, profileUrl: "https://mnnit.ac.in/profile/snehalk" },
      { name: "Dr. Bharat Rajan",    affiliation: "Joint Organizing Secretary", address: "Dept. of Civil Engineering, MNNIT Allahabad", photo: br, profileUrl: "https://mnnit.ac.in/profile/bharatrajan" },
    ],
  },
  {
    roleLabel: "ISHMS Representatives",
    layout: "grid",
    members: [
      { name: "Prof. Suresh Bhalla",  affiliation: "President, ISHMS",           address: "Dept. of Civil Engineering, IIT Delhi, New Delhi, India",       photo: sb, profileUrl: "" },
      { name: "Dr. Navneet Kaur",     affiliation: "Vice President, ISHMS",      address: "CSIR-Central Road Research Institute, New Delhi, India",         photo: nk, profileUrl: "" },
      { name: "Col. Rohit Gogna",     affiliation: "General Secretary, ISHMS",   address: "Founder & Chairman, Avinya Green Constructions",                 photo: rg, profileUrl: "" },
      { name: "Er. Sayed Sameer H",   affiliation: "Financial Secretary, ISHMS", address: "Dept. of Civil Engineering, IIT Delhi, New Delhi, India",        photo: ssh, profileUrl: "" },
    ],
  },
  {
    roleLabel: "Organizing Committee Members",
    layout: "grid",
    members: [
      { name: "Prof. A.K. Singh",      affiliation: "Professor", address: "Dept. of Civil Engineering, MNNIT Allahabad", photo: aks, profileUrl: "" },
      { name: "Prof. P.K. Mehta",      affiliation: "Professor", address: "Dept. of Civil Engineering, MNNIT Allahabad", photo: pkm, profileUrl: "" },
      { name: "Prof. R.M. Singh",      affiliation: "Professor", address: "Dept. of Civil Engineering, MNNIT Allahabad", photo: rms, profileUrl: "" },
      { name: "Prof. R.D. Gupta",      affiliation: "Professor", address: "Dept. of Civil Engineering, MNNIT Allahabad", photo: rdg, profileUrl: "" },
      { name: "Prof. R.C. Vaishya",    affiliation: "Professor", address: "Dept. of Civil Engineering, MNNIT Allahabad", photo: rcv, profileUrl: "" },
      { name: "Prof. R.P. Singh",      affiliation: "Professor", address: "Dept. of Civil Engineering, MNNIT Allahabad", photo: rps, profileUrl: "" },
      { name: "Prof. Kumar Venkatesh", affiliation: "Professor", address: "Dept. of Civil Engineering, MNNIT Allahabad", photo: kv, profileUrl: "" },
      { name: "Prof. Nekram Rawal",    affiliation: "Professor", address: "Dept. of Civil Engineering, MNNIT Allahabad", photo: nr, profileUrl: "" },
    ],
  },
];

const technicalData = [
  {
    roleLabel: "Technical Committee",
    layout: "grid",
    members: [
      { name: "Prof. Suresh Bhalla",         affiliation: "Professor",           address: "Dept. of Civil Engineering, IIT Delhi, New Delhi, India",                                        photo: sb, profileUrl: "" },
      { name: "Prof. Praveen Kumar",         affiliation: "Professor",           address: "Dept. of Civil Engineering, IIT Roorkee, Uttarakhand, India",                                    photo: pk, profileUrl: "" },
      { name: "Prof. Pramod Kumar Gupta",    affiliation: "Professor",           address: "Dept. of Civil Engineering, IIT Roorkee, Uttarakhand, India",                                    photo: pkg, profileUrl: "" },
      { name: "Prof. Sandeep Chaudhary",     affiliation: "Professor",           address: "Dept. of Civil Engineering, IIT Indore, Madhya Pradesh, India",                                  photo: sc, profileUrl: "" },
      { name: "Prof. Akhilesh Kumar Maurya", affiliation: "Professor",           address: "Dept. of Civil Engineering, IIT Guwahati, Assam, India",                                         photo: akm, profileUrl: "" },
      { name: "Dr. Navneet Kaur",             affiliation: "Principal Scientist", address: "CSIR-Central Road Research Institute (CSIR-CRRI), New Delhi, India",                            photo: nr, profileUrl: "" },
      { name: "Dr. K. Lakshmi",              affiliation: "Scientist",           address: "CSIR-Structural Engineering Research Centre (CSIR-SERC), Chennai, India",                        photo: kl, profileUrl: "" },
      { name: "Dr. Satish Dhandole",         affiliation: "Faculty",             address: "School of Mechanical Sciences, IIT Bhubaneswar, Odisha, India",                                  photo: sd, profileUrl: "" },
      { name: "Dr. Kumar Pallav",            affiliation: "Faculty",             address: "Cape Peninsula University of Technology, Cape Town, South Africa",                               photo: kp, profileUrl: "" },
      { name: "Prof. Rama Shanker",          affiliation: "Professor",           address: "Dept. of Civil Engineering, MNNIT Allahabad, Prayagraj, India",                                  photo: rs, profileUrl: "" },
      { name: "Dr. Varun Singh",             affiliation: "Asst. Professor",     address: "Dept. of Civil Engineering, MNNIT Allahabad, Prayagraj, India",                                  photo: vs, profileUrl: "" },
    ],
  },
];

const advisoryData = [
  {
    roleLabel: "Advisory Committee",
    layout: "grid",
    members: [
      { name: "Prof. Shivesh Sharma",         affiliation: "Professor",           address: "Dept. of Biotechnology, MNNIT Allahabad",                                    photo: ss, profileUrl: "" },
      { name: "Prof. Neeraj Tyagi",           affiliation: "Professor",           address: "Dept. of Computer Science & Engineering, MNNIT Allahabad",                   photo: nt, profileUrl: "" },
      { name: "Prof. Asheesh Kumar Singh",    affiliation: "Professor",           address: "Dept. of Electrical Engineering, MNNIT Allahabad",                           photo: asks, profileUrl: "" },
      { name: "Prof. Purnendu K. Das",        affiliation: "Ex-Professor",        address: "Marine Structures, Universities of Glasgow & Strathclyde, Glasgow, UK",      photo: pkd, profileUrl: "" },
      { name: "Prof. Ashoke Gupta (Retd.)",   affiliation: "Professor (Retired)", address: "Dept. of Civil Engineering, IIT Delhi",                                      photo: ag, profileUrl: "" },
      { name: "Prof. Pradeep Bhargava",       affiliation: "Professor",           address: "Dept. of Civil Engineering, IIT Roorkee",                                    photo: pb, profileUrl: "" },
      { name: "Prof. Bhrigu Nath Singh",      affiliation: "Vice Chancellor",     address: "Rajiv Gandhi National Aviation University (RGNAU), Amethi",                 photo: bns, profileUrl: "" },
      { name: "Prof. Shamsher Bahadur Singh", affiliation: "Professor",           address: "Dept. of Civil Engineering, BITS Pilani",                                    photo: sbs, profileUrl: "" },
      { name: "Prof. A.K. Sachan (Retd.)",    affiliation: "Professor (Retired)", address: "Dept. of Civil Engineering, MNNIT Allahabad",                               photo: aksa, profileUrl: "" },
      { name: "Prof. Alok Madan",             affiliation: "Professor",           address: "Dept. of Civil Engineering, IIT Delhi",                                      photo: am, profileUrl: "" },
      { name: "Er. Dinesh Kumar",             affiliation: "Engineer",            address: "Dept. of Water Resource & Irrigation, Uttar Pradesh",                       photo: dk, profileUrl: "" },
    ],
  },
];

const techSupportData = [
  {
    roleLabel: "Technical Support",
    layout: "grid",
    members: [
      { name: "Divyansh Singh", affiliation: "Technical Support", address: "MNNIT Allahabad", photo: ds_ts, profileUrl: "" },
      { name: "Paramita Ghosh", affiliation: "Technical Support", address: "MNNIT Allahabad", photo: pg_ts, profileUrl: "" },
      { name: "Ayush Shrivastava", affiliation: "Technical Support", address: "MNNIT Allahabad", photo: as_ts, profileUrl: "" },
    ],
  },
];

const INITIALS_PALETTE = [
  "from-purple-900 to-purple-700",
  "from-indigo-900 to-indigo-700",
  "from-violet-900 to-violet-700",
  "from-slate-800 to-slate-600",
];

function getInitials(name) {
  const skip = new Set(["Prof.", "Dr.", "Col.", "Er.", "Mr.", "Ms."]);
  return name.split(" ").filter((w) => !skip.has(w)).slice(0, 2).map((w) => w[0]).join("");
}

function PhotoCard({ member, index, size = "normal" }) {
  const [hovered,  setHovered]  = useState(false);
  const [imgError, setImgError] = useState(false);

  const showPhoto   = member.photo && !imgError;
  const gradient    = INITIALS_PALETTE[index % INITIALS_PALETTE.length];
  const heightClass = size === "large" ? "h-[380px] sm:h-[440px]" : "h-44 sm:h-52";

  const inner = (
    <div
      className={`relative w-full ${heightClass} rounded-xl overflow-hidden cursor-pointer select-none`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform:  hovered ? "translateY(-5px) scale(1.02)" : "translateY(0) scale(1)",
        transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease",
        boxShadow:  hovered
          ? "0 16px 36px rgba(139,92,246,0.28), 0 6px 12px rgba(0,0,0,0.22)"
          : "0 2px 6px rgba(0,0,0,0.14)",
      }}
    >
      {/* ── Image or gradient placeholder ── */}
      {showPhoto ? (
        <img
          src={member.photo}
          alt={member.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-top"
          style={{ transform: hovered ? "scale(1.07)" : "scale(1)", transition: "transform 0.5s ease" }}
        />
      ) : (
        <div
          className={`w-full h-full bg-gradient-to-b ${gradient} flex items-center justify-center`}
          style={{ transform: hovered ? "scale(1.07)" : "scale(1)", transition: "transform 0.5s ease" }}
        >
          <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
            <span className="text-white text-lg font-serif font-bold opacity-80">
              {getInitials(member.name)}
            </span>
          </div>
        </div>
      )}

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent"
        style={{ opacity: hovered ? 1 : 0.82, transition: "opacity 0.3s ease" }}
      />

      {/* Purple shimmer */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-purple-900/45 to-transparent"
        style={{ opacity: hovered ? 1 : 0, transition: "opacity 0.35s ease" }}
      />

      {/* VIEW PROFILE pill */}
      {member.profileUrl && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity:    hovered ? 1 : 0,
            transform:  hovered ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          <span className="px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold tracking-widest uppercase shadow-lg">
            View Profile
          </span>
        </div>
      )}

      {/* Name / affiliation / address */}
      <div
        className="absolute bottom-0 left-0 right-0 px-3 pb-3 pt-5 text-center"
        style={{
          transform:  hovered ? "translateY(-3px)" : "translateY(0)",
          transition: "transform 0.35s ease",
        }}
      >
        <p
          className="font-bold text-xs sm:text-sm leading-snug font-serif"
          style={{ color: hovered ? "#c084fc" : "#ffffff", transition: "color 0.25s ease" }}
        >
          {member.name}
        </p>
        <p className="text-white/65 text-[10px] mt-0.5 leading-tight">{member.affiliation}</p>

        {/* Address slides in on hover */}
        <div
          style={{
            maxHeight:  hovered ? "50px" : "0px",
            opacity:    hovered ? 1 : 0,
            overflow:   "hidden",
            transition: "max-height 0.4s ease, opacity 0.3s ease",
          }}
        >
          <p className="text-white/45 text-[9px] mt-1 leading-snug px-1">{member.address}</p>
        </div>
      </div>
    </div>
  );

  return member.profileUrl ? (
    <a href={member.profileUrl} target="_blank" rel="noopener noreferrer" className="block">
      {inner}
    </a>
  ) : (
    <div>{inner}</div>
  );
}


const CARD_W = "w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] md:w-[calc(25%-12px)] lg:w-[calc(20%-13px)]";

function RoleGroup({ group, startIndex = 0 }) {
  const isSingle = group.layout === "single";

  return (
    <div className="mb-14">
      {/* Purple centered role label */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-purple-400/50 dark:to-purple-600/50" />
        <h3 className="text-center text-xl md:text-2xl font-serif font-bold text-purple-600 dark:text-purple-400 tracking-tight">
          {group.roleLabel}
        </h3>
        <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-purple-400/50 dark:to-purple-600/50" />
      </div>

      {isSingle ? (
        /* Single large centered card */
        <div className="flex justify-center">
          <div className="w-64 sm:w-72">
            <PhotoCard member={group.members[0]} index={startIndex} size="large" />
          </div>
        </div>
      ) : (
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {group.members.map((member, idx) => (
            <div key={idx} className={CARD_W}>
              <PhotoCard member={member} index={startIndex + idx} size="normal" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CommitteeSection({ heroBadge, heroTitle, heroSub, groups }) {
  let runningIndex = 0;

  return (
    <div className="mb-20">
      {/* Hero Banner */}
      <div className="bg-[#172033] dark:bg-[#0d1520] py-14 md:py-20 mb-12">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2 text-purple-400 text-xs font-bold tracking-widest uppercase mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            {heroBadge}
          </div>
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-3 leading-tight">
            {heroTitle}
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-lg leading-relaxed">
            {heroSub}
          </p>
        </div>
      </div>

      {/* Role groups */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {groups.map((group, gi) => {
          const node = <RoleGroup key={gi} group={group} startIndex={runningIndex} />;
          runningIndex += group.members.length;
          return node;
        })}
      </div>
    </div>
  );
}

export default function CommitteePage() {
  return (
    <div
      id="committee"
      className="bg-[#f0ebe4] dark:bg-slate-900 transition-colors duration-300 pt-16 min-h-screen flex flex-col"
    >
      <div className="flex-grow">
        <CommitteeSection
          heroBadge="Our Team"
          heroTitle="Organizing Committee"
          heroSub="Meet the distinguished team behind SHMS-2026"
          groups={committeeData}
        />
        <CommitteeSection
          heroBadge="Expert Panel"
          heroTitle="Technical Committee"
          heroSub="Leading researchers and practitioners shaping the technical programme"
          groups={technicalData}
        />
        <CommitteeSection
          heroBadge="Advisors"
          heroTitle="Advisory Committee"
          heroSub="Eminent advisors guiding the vision of SHMS-2026"
          groups={advisoryData}
        />
        <CommitteeSection
          heroBadge="Support Team"
          heroTitle="Technical Support"
          heroSub="The talented minds providing technical excellence for SHMS-2026"
          groups={techSupportData}
        />
      </div>

      {/* Contact Section at the Bottom */}
      <div className="w-full bg-[#e8e2da] dark:bg-slate-950 py-16 md:py-24 border-t border-slate-300/40 dark:border-slate-800">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4">
            Contact
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8 text-[15px] md:text-base font-medium">
            For any queries, please contact:
          </p>
          <a
            href="mailto:shms2026@mnnit.ac.in"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-purple-300 dark:border-purple-500/40 bg-white/50 dark:bg-slate-900/50 text-purple-600 dark:text-purple-400 font-semibold text-sm md:text-base transition-all duration-300 hover:bg-purple-500 hover:text-white dark:hover:bg-purple-500 hover:border-purple-500 hover:-translate-y-1 hover:shadow-[0_10px_20px_-5px_rgba(168,85,247,0.3)] shadow-sm group"
          >
            <Mail className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            shms2026@mnnit.ac.in
          </a>
        </div>
      </div>

    </div>
  );
}
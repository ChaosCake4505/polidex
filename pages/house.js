// pages/house.js
import React, { useState, useEffect, useMemo, useRef } from "react";
import dynamic from "next/dynamic";
import Header from "../components/header";
import Footer from "../components/footer";
import HouseOddsByDistrict from "../components/HouseOddsByDistrict";
import HouseOutcomeSampler from "../components/HouseOutcomeSampler";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";

const HouseMap = dynamic(() => import("../components/housemap"), { ssr: false });
const CurrentHouseMap = dynamic(() => import("../components/currenthousemap"), { ssr: false });

const PREDICTION_COLORS = [
  { color: "#6495ed", label: "House Predictions" }, // Blue
  { color: "#E30022", label: "House Predictions" }, // Red
  { color: "#A259D9", label: "House Predictions" }, // Purple
];

// --- EDIT THESE to your model; must sum to 435 ---
const FORECAST_COUNTS = {
  safeD: 154,
  likelyD: 43,
  leanD: 11,
  tossup: 23,
  leanR: 2,
  likelyR: 26,
  safeR: 177,
};

// Colors (match your Senate styling)
const COLORS = {
  safeD:  "#1C408C",
  likelyD:"#577CCC",
  leanD:  "#8AAFFF",
  tossup: "#C26BF7",
  leanR:  "#FF9395",
  likelyR:"#FF5865",
  safeR:  "#E30022",
};

function SegBar({ counts }) {
  const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
  const seg = (key, label) => {
    const val = counts[key] || 0;
    const w = (val / total) * 100;
    return (
      <div
        key={key}
        className="h-8 flex items-center justify-center text-[11px] font-bold"
        style={{ width: `${w}%`, backgroundColor: COLORS[key] }}
        title={`${label}: ${val}`}
      >
        {w > 6 ? `${label} ${val}` : null}
      </div>
    );
  };

  return (
    <div className="relative mx-auto max-w-5xl h-8 rounded overflow-hidden mb-6 mt-2 flex">
      {seg("safeD",   "Safe D")}
      {seg("likelyD", "Likely D")}
      {seg("leanD",   "Lean D")}
      {seg("tossup",  "Tossup")}
      {seg("leanR",   "Lean R")}
      {seg("likelyR", "Likely R")}
      {seg("safeR",   "Safe R")}
      <div className="absolute top-0 bottom-0 w-0.5 bg-gray-700" style={{ left: "50%" }} />
    </div>
  );
}
// Minimal example — put this near the top of pages/house.js
const HOUSE_DISTRICT_DATA = {
  WA01: {
    candidates: [
      { name: "Suzan DelBene (D)", percent: 99 },
      { name: "Republican (R)",   percent: "<1" },
    ],
    polling: "Safe D",
  },
  WA02: {
    candidates: [
      { name: "Rick Larsen (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
    WA03: {
    candidates: [
      { name: "Marie Gluesenkamp Perez (D)", percent: 67 },
      { name: "John Braun (R)", percent: 33 },
    ],
    polling: "Lean D",
  },
    WA04: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Jerrod Sessler (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
    WA05: {
    candidates: [
      { name: "Democrat (D)", percent: 99 },
      { name: "Michael Baumgartner (R)", percent: "<1" },
    ],
    polling: "Safe R",
  },
    WA06: {
    candidates: [
      { name: "Emily Randall (D)", percent: 94 },
      { name: "Republican (R)", percent: 6 },
    ],
    polling: "Likely D",
  },
    WA07: {
    candidates: [
      { name: "Pramila Jayapal (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
    },
    WA08: {
    candidates: [
      { name: "Kim Schrier (D)", percent: 90 },
      { name: "Republican (R)", percent: 10 },
    ],
    polling: "Likely D",
  },
    WA09: {
    candidates: [
      { name: "Adam Smith (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
  WA10: {
    candidates: [
      { name: "Marilyn Strickland (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
  AK99: {
    candidates: [
      { name: "Dem Candidate (D)", percent: 50.1 },
      { name: "Nick Begich III (R)", percent: 49.9 },
    ],
    polling: "Toss-up",
  },
    OR01: {
    candidates: [
      { name: "Suzanne Bonamici (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
 OR02: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Cliff Bentz (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
    OR03: {
    candidates: [
      { name: "Maxine Dexter (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
    OR04: {
    candidates: [
      { name: "Val Hoyle (D)", percent: 90 },
      { name: "Republican (R)", percent: 10 },
    ],
    polling: "Likely D",
  },
    OR05: {
    candidates: [
      { name: "Janelle Bynum (D)", percent: 59 },
      { name: "Republican (R)", percent: 41 },
    ],
    polling: "Tossup",
  },
    OR06: {
    candidates: [
      { name: "Andrea Salinas (D)", percent: 93 },
      { name: "Republican (R)", percent: 7 },
    ],
    polling: "Likely D",
  },
      OR06: {
    candidates: [
      { name: "Andrea Salinas (D)", percent: 93 },
      { name: "Republican (R)", percent: 7 },
    ],
    polling: "Likely D",
  },
      HI01: {
    candidates: [
      { name: "Democrat (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
      HI02: {
    candidates: [
      { name: "Jill Tokuda (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
       ID01: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Russ Fulcher (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
       ID02: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Mike Simpson (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
         MT01: {
    candidates: [
      { name: "Democrat (D)", percent: 18 },
      { name: "Ryan Zinke (R)", percent: 82 },
    ],
    polling: "Likely R",
  },
         MT02: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Troy Downing (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
    WY00: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Harriet Hageman (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
      UT01: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Blake Moore (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
      UT02: {
    candidates: [
      { name: "Democrat (D)", percent: 3 },
      { name: "Celeste Maloy (R)", percent: 97 },
    ],
    polling: "Safe R",
  },
      UT03: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Mike Kennedy (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
      UT04: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Burgess Owens (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
        NV01: {
    candidates: [
      { name: "Dina Titus (D)", percent: 79 },
      { name: "Republican (R)", percent: 21 },
    ],
    polling: "Likely D",
  },
        NV02: {
    candidates: [
      { name: "Democrat (D)", percent: 2 },
      { name: "Mark Amodei (R)", percent: 98 },
    ],
    polling: "Safe R",
  },
        NV03: {
    candidates: [
      { name: "Susie Lee (D)", percent: 72 },
      { name: "Republican (R)", percent: 28 },
    ],
    polling: "Lean D",
  },
        NV04: {
    candidates: [
      { name: "Steven Horsford (D)", percent: 81 },
      { name: "Republican (R)", percent: 19 },
    ],
    polling: "Likely D",
  },
          CO01: {
    candidates: [
      { name: "Diana DeGette (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
          CO02: {
    candidates: [
      { name: "Joe Neguse (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
          CO03: {
    candidates: [
      { name: "Alex Kelloff (D)", percent: 12 },
      { name: "Jeff Hurd (R)", percent: 88 },
    ],
    polling: "Likely R",
  },
          CO04: {
    candidates: [
      { name: "Eileen Laubacher (D)", percent: 9 },
      { name: "Lauren Boebert (R)", percent: 91 },
    ],
    polling: "Likely R",
  },
          CO05: {
    candidates: [
      { name: "Jessica Killin (D)", percent: 12 },
      { name: "Jeff Crank (R)", percent: 88 },
    ],
    polling: "Likely R",
  },
          CO06: {
    candidates: [
      { name: "Jason Crow (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
          CO07: {
    candidates: [
      { name: "Brittany Pettersen (D)", percent: 98 },
      { name: "Republican (R)", percent: 2 },
    ],
    polling: "Safe D",
  },
          CO08: {
    candidates: [
      { name: "Democrat (D)", percent: 49 },
      { name: "Gabe Evans (R)", percent: 51 },
    ],
    polling: "Tossup",
  },
          NM01: {
    candidates: [
      { name: "Melanie Stansbury (D)", percent: 93 },
      { name: "Republican (R)", percent: 7 },
    ],
    polling: "Likely D",
  },
            NM02: {
    candidates: [
      { name: "Gabe Vasquez (D)", percent: 67 },
      { name: "Republican (R)", percent: 33 },
    ],
    polling: "Lean D",
  },
            NM03: {
    candidates: [
      { name: "Teresa Leger Fernández (D)", percent: 97 },
      { name: "Republican (R)", percent: 3 },
    ],
    polling: "Safe D",
  },
              AZ01: {
    candidates: [
      { name: "Democrat (D)", percent: 52 },
      { name: "David Schweikert (R)", percent: 48 },
    ],
    polling: "Safe D",
  },
              AZ02: {
    candidates: [
      { name: "Jonathan Nez (D)", percent: 97 },
      { name: "Eli Crane (R)", percent: 3 },
    ],
    polling: "Likely R",
  },
              AZ03: {
    candidates: [
      { name: "Yassamin Ansari (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
              AZ04: {
    candidates: [
      { name: "Greg Stanton (D)", percent: 87 },
      { name: "Jerone Davison (R)", percent: 13 },
    ],
    polling: "Likely D",
  },
              AZ05: {
    candidates: [
      { name: "Democrat (D)", percent: 99 },
      { name: "Republican (R)", percent: 1 },
    ],
    polling: "Safe R",
  },
              AZ06: {
    candidates: [
      { name: "JoAnna Mendoza (D)", percent: 52 },
      { name: "Juan Ciscomani (R)", percent: 48 },
    ],
    polling: "Tossup",
  },
              AZ07: {
    candidates: [
      { name: "Adelita Grijalva (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
              AZ08: {
    candidates: [
      { name: "Democrat (D)", percent: 5 },
      { name: " Abraham Hamadeh (R)", percent: 95 },
    ],
    polling: "Safe R",
  },
              AZ09: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Paul Gosar (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                ND00: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Julie Fedorchak (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                SD00: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Marty Jackley (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                  NE01: {
    candidates: [
      { name: "Democrat (D)", percent: 4 },
      { name: "Mike Flood (R)", percent: 96 },
    ],
    polling: "Safe R",
  },
                  NE02: {
    candidates: [
      { name: "Democrat (D)", percent: 68 },
      { name: "Republican (R)", percent: 32 },
    ],
    polling: "Lean D",
  },
                  NE03: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Adrian Smith (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                  KS01: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Tracey Mann (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                    KS02: {
    candidates: [
      { name: "Democrat (D)", percent: 2 },
      { name: "Derek Schmidt (R)", percent: 98 },
    ],
    polling: "Safe R",
  },
                    KS03: {
    candidates: [
      { name: "Sharice Davids (D)", percent: 92 },
      { name: "Republican (R)", percent: 8 },
    ],
    polling: "Likely D",
  },
                    KS04: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Ron Estes (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                      OK01: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Kevin Hern (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                      OK02: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Josh Brecheen (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                      OK03: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Frank Lucas (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                      OK04: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Tom Cole (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                      OK05: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Stephanie Bice (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                        AR01: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Rick Crawford (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                        AR02: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "French Hill (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                        AR03: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Steve Womack (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                        AR04: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Steve Womack (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                          LA01: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Steve Scalise (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                          LA02: {
    candidates: [
      { name: "Troy Carter (D)", percent: 99 },
      { name: "Steve Womack (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                          LA03: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Clay Higgins (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                          LA04: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Mike Johnson (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                          LA05: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Julia Letlow (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                          LA06: {
    candidates: [
      { name: "Cleo Fields (D)", percent: 83 },
      { name: "Republican (R)", percent: 17 },
    ],
    polling: "Likely D",
  },
                            MS01: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Trent Kelly (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                            MS02: {
    candidates: [
      { name: "Bennie Thompson (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                            MS03: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Michael Guest (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                            MS04: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Mike Ezell (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                              AL01: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Jerry Carl (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                              AL02: {
    candidates: [
      { name: "Shomari Figures (D)", percent: 93 },
      { name: "Republican (R)", percent: 7 },
    ],
    polling: "Safe D",
  },
                              AL03: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Mike Rogers (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                              AL04: {
    candidates: [
      { name: "Amanda Pusczek (D)", percent: "<1" },
      { name: "Robert Aderholt (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                              AL05: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Dale Strong (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                              AL06: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Gary Palmer (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                              AL07: {
    candidates: [
      { name: "Terri Sewell (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                GA01: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Republican (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                GA02: {
    candidates: [
      { name: "Sanford Bishop (D)", percent: 91 },
      { name: "Republican (R)", percent: 9 },
    ],
    polling: "Likely D",
  },
                                GA03: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Brian Jack (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                GA04: {
    candidates: [
      { name: "Hank Johnson (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                GA05: {
    candidates: [
      { name: "Nikema Williams (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                GA06: {
    candidates: [
      { name: "Lucy McBath (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                GA07: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Rich McCormick (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                GA08: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Austin Scott (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                GA09: {
    candidates: [
      { name: "Nick Alex (D)", percent: "<1" },
      { name: "Republican (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                GA10: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Republican (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                GA11: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Barry Loudermilk (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                GA12: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Rick Allen (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                GA13: {
    candidates: [
      { name: "Democrat (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                GA14: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Marjorie Taylor Greene (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                  SC01: {
    candidates: [
      { name: "Democrat (D)", percent: 2 },
      { name: "Republican (R)", percent: 98 },
    ],
    polling: "Safe R",
  },
                                  SC02: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Joe Wilson (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                  SC03: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Sheri Biggs (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                  SC04: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "William Timmons (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                  SC05: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Wes Climer (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                  SC06: {
    candidates: [
      { name: "Jim Clyburn (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe R",
  },
                                  SC07: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Russell Fry (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                    TN01: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Diana Harshbarger (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                    TN02: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Tim Burchett (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                    TN03: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Chuck Fleischmann (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                    TN04: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Scott DesJarlais (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                    TN05: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Andy Ogles (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                    TN06: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Republican (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                    TN07: {
    candidates: [
      { name: "Democrat (D)", percent: 3 },
      { name: "Republican (R)", percent: 97 },
    ],
    polling: "Safe R",
  },
                                    TN08: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "David Kustoff (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                    TN09: {
    candidates: [
      { name: "Steve Cohen (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe R",
  },
                                NC01: {
    candidates: [
      { name: "Don Davis (D)", percent: 58 },
      { name: "Republican (R)", percent: 42 },
    ],
    polling: "Tossup",
  },
                                NC02: {
    candidates: [
      { name: "Deborah Ross (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                NC03: {
    candidates: [
      { name: "Chris Schulte (D)", percent: "<1" },
      { name: "Greg Murphy (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                NC04: {
    candidates: [
      { name: "Valerie Foushee (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                NC05: {
    candidates: [
      { name: "Chuck Hubbard (D)", percent: "<1" },
      { name: "Virginia Foxx (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                NC06: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Addison McDowell (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                NC07: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "David Rouzer (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                NC08: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Mark Harris (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                NC09: {
    candidates: [
      { name: "Richard Ojeda (D)", percent: 4 },
      { name: "Richard Hudson (R)", percent: 96 },
    ],
    polling: "Safe R",
  },
                                NC10: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Pat Harrigan (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                NC11: {
    candidates: [
      { name: "Democrat (D)", percent: 9 },
      { name: "Chuck Edwards (R)", percent: 91 },
    ],
    polling: "Likely R",
  },
                                NC12: {
    candidates: [
      { name: "Alma Adams (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                NC13: {
    candidates: [
      { name: "Paul Barringer (D)", percent: 4 },
      { name: "Brad Knott (R)", percent: 96 },
    ],
    polling: "Safe R",
  },
                                NC14: {
    candidates: [
      { name: "Democrat (D)", percent: 3 },
      { name: "Tim Moore (R)", percent: 97 },
    ],
    polling: "Safe R",
  },
                                      MO01: {
    candidates: [
      { name: "Wesley Bell (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                    MO02: {
    candidates: [
      { name: "Democrat (D)", percent: 19 },
      { name: "Ann Wagner (R)", percent: 81 },
    ],
    polling: "Likely R",
  },
                                    MO03: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Bob Onder (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                    MO04: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Mark Alford (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                    MO05: {
    candidates: [
      { name: "Emanuel Cleaver (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe R",
  },
                                    MO06: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Sam Graves (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                    MO07: {
    candidates: [
      { name: "Democrat (D)", percent: "<1"  },
      { name: "Eric Burlison (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                    MO08: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Jason Smith (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                        IA01: {
    candidates: [
      { name: "Christina Bohannan (D)", percent: 47 },
      { name: "Mariannette Miller-Meeks (R)", percent: 53 },
    ],
    polling: "Tossup",
  },
                                    IA02: {
    candidates: [
      { name: "Democrat (D)", percent: 13 },
      { name: "Ashley Hinson (R)", percent: 87 },
    ],
    polling: "Likely R",
  },
                                    IA03: {
    candidates: [
      { name: "Democrat (D)", percent: 43 },
      { name: "Zach Nunn (R)", percent: 57 },
    ],
    polling: "Tossup",
  },
                                    IA04: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Republican (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                        MN01: {
    candidates: [
      { name: "Democrat (D)", percent: 5 },
      { name: "Brad Finstad (R)", percent: 95 },
    ],
    polling: "Safe R",
  },
                                    MN02: {
    candidates: [
      { name: "Democrat (D)", percent: 19 },
      { name: "Republican (R)", percent: 81 },
    ],
    polling: "Likely D",
  },
                                    MN03: {
    candidates: [
      { name: "Kelly Morrison (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                    MN04: {
    candidates: [
      { name: "Betty McCollum (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe R",
  },
                                    MN05: {
    candidates: [
      { name: "Ilhan Omar (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                    MN06: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Tom Emmer (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                    MN07: {
    candidates: [
      { name: "Democrat (D)", percent: "<1"  },
      { name: "Michelle Fischbach (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                    MN08: {
    candidates: [
      { name: "Democrat (D)", percent: 3 },
      { name: "Pete Stauber (R)", percent: 97 },
    ],
    polling: "Safe R",
  },
                                          WI01: {
    candidates: [
      { name: "Randy Bryce (D)", percent: 14 },
      { name: "Bryan Steil (R)", percent: 86 },
    ],
    polling: "Likely R",
  },
                                    WI02: {
    candidates: [
      { name: "Mark Pocan (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                    WI03: {
    candidates: [
      { name: "Rebecca Cooke (D)", percent: 51 },
      { name: "Derrick Van Orden (R)", percent: 49 },
    ],
    polling: "Tossup",
  },
                                    WI04: {
    candidates: [
      { name: "Gwen Moore (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                    WI05: {
    candidates: [
      { name: "Ilhan Omar (D)", percent: "<1" },
      { name: "Scott Fitzgerald (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                    WI06: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Glenn Grothman (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                    WI07: {
    candidates: [
      { name: "Democrat (D)", percent: "<1"  },
      { name: "Tom Tiffany (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                    WI08: {
    candidates: [
      { name: "Democrat (D)", percent: 6 },
      { name: "Tom Tiffany (R)", percent: 94 },
    ],
    polling: "Likely R",
  },
                                  MI01: {
    candidates: [
      { name: "Don Davis (D)", percent: "<1" },
      { name: "Jack Bergman (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                MI02: {
    candidates: [
      { name: "Deborah Ross (D)", percent: "<1" },
      { name: "John Moolenar (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                MI03: {
    candidates: [
      { name: "Hillary Scholten (D)", percent: 81 },
      { name: "Republican (R)", percent: 19 },
    ],
    polling: "Likely D",
  },
                                MI04: {
    candidates: [
      { name: "Jessica Swartz (D)", percent: 22 },
      { name: "Bill Huizenga (R)", percent: 78 },
    ],
    polling: "Likely R",
  },
                                MI05: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Tim Walberg (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                MI06: {
    candidates: [
      { name: "Debbie Dingell (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                MI07: {
    candidates: [
      { name: "Democrat (D)", percent: 50 },
      { name: "Tom Barrett (R)", percent: 50 },
    ],
    polling: "Tossup",
  },
                                MI08: {
    candidates: [
      { name: "Kristen McDonald Rivet (D)", percent: 76 },
      { name: "Mark Harris (R)", percent: 24 },
    ],
    polling: "Likely D",
  },
                                MI09: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Lisa McClain (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                MI10: {
    candidates: [
      { name: "Democrat (D)", percent: 33 },
      { name: "Republican (R)", percent: 67 },
    ],
    polling: "Lean R",
  },
                                MI11: {
    candidates: [
      { name: "Jeremy Moss (D)", percent: 99 },
      { name: "Republican (R)", percent: 1 },
    ],
    polling: "Safe D",
  },
                                MI12: {
    candidates: [
      { name: "Rashida Tlaib (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                MI13: {
    candidates: [
      { name: "Democrat (D)", percent: 99 },
      { name: "Brad Knott (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                          IN01: {
    candidates: [
      { name: "Frank Mrvan (D)", percent: 78 },
      { name: "Republican (R)", percent: 22 },
    ],
    polling: "Likely D",
  },
                                    IN02: {
    candidates: [
      { name: "Republican (D)", percent: "<1" },
      { name: "Rudy Yakym (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                    IN03: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Marlin Stutzman (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                    IN04: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Republican (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                    IN05: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Victoria Spartz (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                    IN06: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Jefferson Shreve (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                    IN07: {
    candidates: [
      { name: "Democrat (D)", percent: 99  },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                   IN08: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Mark Messmer (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                    IN09: {
    candidates: [
      { name: "Democrat (D)", percent: "<1"  },
      { name: "Erin Houchin (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                            KY01: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "James Comer (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                    KY02: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Brett Guthrie (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                    KY03: {
    candidates: [
      { name: "Morgan McGarvey (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                    KY04: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Republican (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                    KY05: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Hal Rogers (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                    KY06: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Ryan Dotson (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                   WV01: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Republican (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                    WV02: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Riley Moore (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                  OH01: {
    candidates: [
      { name: "Greg Landsman (D)", percent: 76 },
      { name: "Republican (R)", percent: 24 },
    ],
    polling: "Likely D",
  },
                                OH02: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "David Taylor (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                OH03: {
    candidates: [
      { name: "Joyce Beatty (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                OH04: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Jim Jordan (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                OH05: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Bob Latta (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                OH06: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Michael Rulli (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                OH07: {
    candidates: [
      { name: "Michael Eisner (D)", percent: "<1" },
      { name: "Max Miller (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                OH09: {
    candidates: [
      { name: "Marcy Kaptur (D)", percent: 52 },
      { name: "Republican (R)", percent: 48 },
    ],
    polling: "Tossup",
  },
                               OH08: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Warren Davidson (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                OH10: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Mike Turner (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                               OH11: {
    candidates: [
      { name: "Shontel Brown (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                               OH12: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Troy Balderson (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                OH13: {
    candidates: [
      { name: "Emilia Sykes (D)", percent: 53 },
      { name: "Kevin Coughlin (R)", percent: 46 },
    ],
    polling: "Tossup",
  },
                                 OH14: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "David Joyce (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                OH15: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Mike Carey (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                    VA01: {
    candidates: [
      { name: "Democrat (D)", percent: 16 },
      { name: "Rob Wittman (R)", percent: 84 },
    ],
    polling: "Likely R",
  },
                                VA02: {
    candidates: [
      { name: "Democrat (D)", percent: 42 },
      { name: "Jen Kiggans (R)", percent: 58 },
    ],
    polling: "Tossup",
  },
                                VA03: {
    candidates: [
      { name: "Bobby Scott (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                VA04: {
    candidates: [
      { name: "Jennifer McClellan (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                VA05: {
    candidates: [
      { name: "Democrat (D)", percent: 7 },
      { name: "Republican (R)", percent: 93 },
    ],
    polling: "Likely R",
  },
                                VA06: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Ben Cline (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                VA07: {
    candidates: [
      { name: "Eugene Vindman (D)", percent: 68 },
      { name: "Republican (R)", percent: 32 },
    ],
    polling: "Lean D",
  },
                                VA09: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Morgan Griffith (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                               VA08: {
    candidates: [
      { name: "Don Beyer (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                VA10: {
    candidates: [
      { name: "Suhas Subramanyam (D)", percent: 88 },
      { name: "Republican (R)", percent: 22 },
    ],
    polling: "Likely D",
  },
                               VA11: {
    candidates: [
      { name: "Democrat (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                      MD01: {
    candidates: [
      { name: "Dan Schwartz (D)", percent: "<1" },
      { name: "Andy Harris (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                MD02: {
    candidates: [
      { name: "Dan Schwartz (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                MD03: {
    candidates: [
      { name: "Sarah Elfreth (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                MD04: {
    candidates: [
      { name: "Glenn Ivey (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                MD05: {
    candidates: [
      { name: "Steny Hoyer (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                MD06: {
    candidates: [
      { name: "April McClain Delaney (D)", percent: 91 },
      { name: "Republican (R)", percent: 9 },
    ],
    polling: "Likely D",
  },
                                MD07: {
    candidates: [
      { name: "Kweisi Mfume (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                MD08: {
    candidates: [
      { name: "Jamie Raskin (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                  DE00: {
    candidates: [
      { name: "Sarah McBride (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                    VT00: {
    candidates: [
      { name: "Becca Balint (D)", percent: 99 },
      { name: "Mark Coester (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                      NH01: {
    candidates: [
      { name: "Democrat (D)", percent: 78 },
      { name: "Republican (R)", percent: 22 },
    ],
    polling: "Likely D",
  },
                                      NH02: {
    candidates: [
      { name: "Maggie Goodlander (D)", percent: 86 },
      { name: "Republican (R)", percent: 14 },
    ],
    polling: "Likely D",
  },
                                        ME01: {
    candidates: [
      { name: "Chellie Pingree (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                        ME02: {
    candidates: [
      { name: "Jared Golden (D)", percent: 49 },
      { name: "Tossup (R)", percent: 51 },
    ],
    polling: "Tossup",
  },
                                         RI01: {
    candidates: [
      { name: "Gabe Amo (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                         RI02: {
    candidates: [
      { name: "Seth Magaziner (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                           MA01: {
    candidates: [
      { name: "Richard Neal (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                           MA02: {
    candidates: [
      { name: "Jim McGovern (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                           MA03: {
    candidates: [
      { name: "Lori Trahan (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                           MA09: {
    candidates: [
      { name: "Bill Keating (D)", percent: 95 },
      { name: "Republican (R)", percent: 5 },
    ],
    polling: "Likely D",
  },
                                           MA04: {
    candidates: [
      { name: "Jake Auchincloss (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                           MA05: {
    candidates: [
      { name: "Katherine Clark (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                           MA06: {
    candidates: [
      { name: "Seth Moulton (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                           MA07: {
    candidates: [
      { name: "Ayanna Pressley (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                           MA08: {
    candidates: [
      { name: "Ayanna Pressley (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                             CT01: {
    candidates: [
      { name: "Democrat (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                             CT02: {
    candidates: [
      { name: "Joe Courtney (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                             CT03: {
    candidates: [
      { name: "Rosa DeLauro (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                             CT04: {
    candidates: [
      { name: "Jim Himes (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                             CT05: {
    candidates: [
      { name: "Jahana Hayes (D)", percent: 92 },
      { name: "Republican (R)", percent: 8 },
    ],
    polling: "Likely D",
  },
                                        NJ01: {
    candidates: [
      { name: "Donald Norcross (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                NJ02: {
    candidates: [
      { name: "Bayly Winder (D)", percent: 1 },
      { name: "Jeff Van Drew (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                NJ03: {
    candidates: [
      { name: "Herb Conaway (D)", percent: 94 },
      { name: "Republican (R)", percent: 6 },
    ],
    polling: "Likely D",
  },
                                NJ04: {
    candidates: [
      { name: "Democrat (D)", percent: "<1" },
      { name: "Chris Smith (R)", percent: 99 },
    ],
    polling: "Safe R",
  },
                                NJ05: {
    candidates: [
      { name: "Josh Gottheimer (D)", percent: 89 },
      { name: "Mary Jo-Ann Guinchard (R)", percent: 11 },
    ],
    polling: "Likely D",
  },
                                NJ06: {
    candidates: [
      { name: "Frank Pallone (D)", percent: 97 },
      { name: "Republican (R)", percent: 3 },
    ],
    polling: "Safe D",
  },
                                NJ07: {
    candidates: [
      { name: "Democrat (D)", percent: 41 },
      { name: "Tom Kean Jr. (R)", percent: 59 },
    ],
    polling: "Tossup",
  },
                                NJ08: {
    candidates: [
      { name: "Rob Menendez (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                  NJ09: {
    candidates: [
      { name: "Nellie Pou (D)", percent: 69 },
      { name: "Republican (R)", percent: 31 },
    ],
    polling: "Lean D",
  },
                                    NJ10: {
    candidates: [
      { name: "LaMonica McIver (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
                                    NJ11: {
    candidates: [
      { name: "Anna Williams (D)", percent: 95 },
      { name: "Republican (R)", percent: 5 },
    ],
    polling: "Safe D",
  },
                                    NJ12: {
    candidates: [
      { name: "Bonnie Watson Coleman (D)", percent: 99 },
      { name: "Republican (R)", percent: "<1" },
    ],
    polling: "Safe D",
  },
  PA01: {
  candidates: [
    { name: "Bob Harvie (D)", percent: 22 },
    { name: "Brian Fitzpatrick (R)", percent: 78 },
  ],
  polling: "Likely R",
},

PA02: {
  candidates: [
    { name: "Brendan Boyle (D)", percent: 99 },
    { name: "Republican (R)", percent: "<1" },
  ],
  polling: "Safe D",
},

PA03: {
  candidates: [
    { name: "Democrat (D)", percent: 99 },
    { name: "Republican (R)", percent: "<1" },
  ],
  polling: "Safe D",
},

PA04: {
  candidates: [
    { name: "Madeleine Dean (D)", percent: 99 },
    { name: "Republican (R)", percent: 1 },
  ],
  polling: "Safe D",
},

PA05: {
  candidates: [
    { name: "Mary Gay Scanlon (D)", percent: 99 },
    { name: "Republican (R)", percent: "<1" },
  ],
  polling: "Safe D",
},

PA06: {
  candidates: [
    { name: "Chrissy Houlahan (D)", percent: 96 },
    { name: "Guy Ciarrocchi (R)", percent: 4 },
  ],
  polling: "Safe D",
},

PA07: {
  candidates: [
    { name: "Democrat (D)", percent: 51 },
    { name: "Ryan Mackenzie (R)", percent: 49 },
  ],
  polling: "Tossup",
},

PA08: {
  candidates: [
    { name: "Democrat (D)", percent: 43 },
    { name: "Rob Bresnahan (R)", percent: 57 },
  ],
  polling: "Tossup",
},

PA09: {
  candidates: [
    { name: "Democrat (D)", percent: "<1"},
    { name: "Dan Meuser (R)", percent: 99 },
  ],
  polling: "Safe R",
},

PA10: {
  candidates: [
    { name: "Democrat (D)", percent: 47 },
    { name: "Scott Perry (R)", percent: 53 },
  ],
  polling: "Tossup",
},

PA11: {
  candidates: [
    { name: "Sarah Klimm (D)", percent: "<1" },
    { name: "Lloyd Smucker (R)", percent: 99 },
  ],
  polling: "Safe R",
},

PA12: {
  candidates: [
    { name: "Summer Lee (D)", percent: "<1" },
    { name: "James Hayes (R)", percent: 99 },
  ],
  polling: "Safe D",
},

PA13: {
  candidates: [
    { name: "Beth Farnham (D)", percent: "<1" },
    { name: "John Joyce (R)", percent: 99 },
  ],
  polling: "Safe R",
},

PA14: {
  candidates: [
    { name: "Democrat (D)", percent: "<1" },
    { name: "Guy Reschemthaler (R)", percent: 99 },
  ],
  polling: "Safe R",
},

PA15: {
  candidates: [
    { name: "Democrat (D)", percent: "<1" },
    { name: "Glenn Thompson (R)", percent: 99 },
  ],
  polling: "Safe R",
},

PA16: {
  candidates: [
    { name: "Democrat (D)", percent: "<1" },
    { name: "Mike Kelly (R)", percent: 99 },
  ],
  polling: "Likely R",
},

PA17: {
  candidates: [
    { name: "Chris Deluzio (D)", percent: 88 },
    { name: "Republican (R)", percent: 12 },
  ],
  polling: "Likely D",
},
IL01: {
  candidates: [
    { name: "Jonathan Jackson (D)", percent: 99 },
    { name: "Republican (R)", percent: "<1" },
  ],
  polling: "Safe D",
},

IL02: {
  candidates: [
    { name: "Democrat (D)", percent: 99 },
    { name: "Republican (R)", percent: "<1" },
  ],
  polling: "Safe D",
},

IL03: {
  candidates: [
    { name: "Delia Ramirez (D)", percent: 99 },
    { name: "Republican (R)", percent: "<1" },
  ],
  polling: "Safe D",
},

IL04: {
  candidates: [
    { name: "Jesús 'Chuy' García (D)", percent: 99 },
    { name: "Republican (R)", percent: "<1" },
  ],
  polling: "Safe D",
},

IL05: {
  candidates: [
    { name: "Mike Quigley (D)", percent: 99 },
    { name: "Republican (R)", percent: "<1" },
  ],
  polling: "Safe D",
},

IL06: {
  candidates: [
    { name: "Sean Casten (D)", percent: 83 },
    { name: "Republican (R)", percent: 17 },
  ],
  polling: "Likely D",
},

IL07: {
  candidates: [
    { name: "Democrat (D)", percent: 99 },
    { name: "Republican (R)", percent: "<1" },
  ],
  polling: "Safe D",
},

IL08: {
  candidates: [
    { name: "Democrat (D)", percent: 98 },
    { name: "Republican (R)", percent: 2 },
  ],
  polling: "Likely D",
},

IL09: {
  candidates: [
    { name: "Democrat (D)", percent: 99 },
    { name: "Republican (R)", percent: "<1" },
  ],
  polling: "Safe D",
},

IL10: {
  candidates: [
    { name: "Brad Schneider (D)", percent: 64 },
    { name: "Republican (R)", percent: "<1" },
  ],
  polling: "Safe D",
},

IL11: {
  candidates: [
    { name: "Bill Foster (D)", percent: 85 },
    { name: "Republican (R)", percent: 15},
  ],
  polling: "Likely D",
},

IL12: {
  candidates: [
    { name: "Democrat (D)", percent: "<1" },
    { name: "Mike Bost (R)", percent: 99 },
  ],
  polling: "Safe R",
},

IL13: {
  candidates: [
    { name: "Democrat (D)", percent: 99 },
    { name: "Republican (R)", percent: 1 },
  ],
  polling: "Safe D",
},

IL14: {
  candidates: [
    { name: "Lauren Underwood (D)", percent: 91 },
    { name: "James Marter (R)", percent: 9 },
  ],
  polling: "Likely D",
},

IL15: {
  candidates: [
    { name: "Democrat (D)", percent: "<1" },
    { name: "Mary Miller (R)", percent: 99 },
  ],
  polling: "Safe R",
},

IL16: {
  candidates: [
    { name: "Democrat (D)", percent: "<1" },
    { name: "Darin LaHood (R)", percent: 99 },
  ],
  polling: "Safe R",
},

IL17: {
  candidates: [
    { name: "Eric Sorensen (D)", percent: 81 },
    { name: "Republican (R)", percent: 19 },
  ],
  polling: "Likely D",
},
NY01: {
  candidates: [
    { name: "Democrat (D)", percent: 11 },
    { name: "Nick LaLota (R)", percent: 89 },
  ],
  polling: "Safe R",
},

NY02: {
  candidates: [
    { name: "Democrat (D)", percent: "<1" },
    { name: "Andrew Garbarino (R)", percent: 99 },
  ],
  polling: "Safe R",
},

NY03: {
  candidates: [
    { name: "Tom Suozzi (D)", percent: 71 },
    { name: "Republican (R)", percent: 29 },
  ],
  polling: "Lean D",
},

NY04: {
  candidates: [
    { name: "Laura Gillen (D)", percent: 67 },
    { name: "Republican (R)", percent: 33 },
  ],
  polling: "Lean D",
},

NY05: {
  candidates: [
    { name: "Gregory Meeks (D)", percent: 99 },
    { name: "Republican (R)", percent: "<1" },
  ],
  polling: "Safe D",
},

NY06: {
  candidates: [
    { name: "Grace Meng (D)", percent: 99 },
    { name: "Republican (R)", percent: "<1" },
  ],
  polling: "Safe D",
},

NY07: {
  candidates: [
    { name: "Nydia Velazquez (D)", percent: 99 },
    { name: "Republican (R)", percent: "<1" },
  ],
  polling: "Safe D",
},

NY08: {
  candidates: [
    { name: "Hakeem Jeffries (D)", percent: 99 },
    { name: "Republican (R)", percent: "<1" },
  ],
  polling: "Safe D",
},

NY09: {
  candidates: [
    { name: "Yvette Clarke (D)", percent: 99 },
    { name: "Republican (R)", percent: "<1" },
  ],
  polling: "Safe D",
},

NY10: {
  candidates: [
    { name: "Democrat (D)", percent: 99 },
    { name: "Republican (R)", percent: "<1" },
  ],
  polling: "Safe D",
},

NY11: {
  candidates: [
    { name: "Democrat (D)", percent: "<1" },
    { name: "Nicole Malliotakis (R)", percent: 99 },
  ],
  polling: "Safe R",
},

NY12: {
  candidates: [
    { name: "Democrat (D)", percent: 99 },
    { name: "Republican (R)", percent: "<1" },
  ],
  polling: "Safe D",
},

NY13: {
  candidates: [
    { name: "Adriano Espaillat (D)", percent: 99 },
    { name: "Republican (R)", percent: "<1" },
  ],
  polling: "Safe D",
},

NY14: {
  candidates: [
    { name: "Alexandria Ocasio-Cortez (D)", percent: 99 },
    { name: "Republican (R)", percent: "<1" },
  ],
  polling: "Safe D",
},

NY15: {
  candidates: [
    { name: "Democrat (D)", percent: 99 },
    { name: "Republican (R)", percent: "<1" },
  ],
  polling: "Safe D",
},

NY16: {
  candidates: [
    { name: "George Latimer (D)", percent: 99 },
    { name: "Republican (R)", percent: "<1" },
  ],
  polling: "Safe D",
},

NY17: {
  candidates: [
    { name: "Democrat (D)", percent: 42 },
    { name: "Mike Lawler (R)", percent: 58 },
  ],
  polling: "Tossup",
},

NY18: {
  candidates: [
    { name: "Pat Ryan (D)", percent: 79 },
    { name: "Republican (R)", percent: 21 },
  ],
  polling: "Likely D",
},

NY19: {
  candidates: [
    { name: "Josh Riley (D)", percent: 68 },
    { name: "Republican (R)", percent: 32 },
  ],
  polling: "Lean D",
},

NY20: {
  candidates: [
    { name: "Paul Tonko (D)", percent: 99 },
    { name: "Republican (R)", percent: "<1" },
  ],
  polling: "Safe D",
},

NY21: {
  candidates: [
    { name: "Democrat (D)", percent: "<1" },
    { name: "Republican (R)", percent: 99 },
  ],
  polling: "Safe R",
},

NY22: {
  candidates: [
    { name: "John Mannion (D)", percent: 79 },
    { name: "John Salka (R)", percent: 21 },
  ],
  polling: "Likely D",
},

NY23: {
  candidates: [
    { name: "Democrat (D)", percent: "<1" },
    { name: "Nick Langworthy (R)", percent: 99 },
  ],
  polling: "Safe R",
},

NY24: {
  candidates: [
    { name: "Democrat (D)", percent: "<1" },
    { name: "Claudia Tenney (R)", percent: 99 },
  ],
  polling: "Safe R",
},

NY25: {
  candidates: [
    { name: "Joseph Morelle (D)", percent: 99 },
    { name: "Republican (R)", percent: "<1" },
  ],
  polling: "Safe D",
},

NY26: {
  candidates: [
    { name: "Tim Kennedy (D)", percent: 99 },
    { name: "Republican (R)", percent: "<1" },
  ],
  polling: "Safe D",
},
FL01: {
  candidates: [
    { name: "Democrat (D)", percent: "<1" },
    { name: "Republican (R)", percent: 99 },
  ],
  polling: "Safe R",
},

FL02: {
  candidates: [
    { name: "Democrat (D)", percent: "<1" },
    { name: "Neal Dunn (R)", percent: 99 },
  ],
  polling: "Safe R",
},

FL03: {
  candidates: [
    { name: "Democrat (D)", percent: "<1" },
    { name: "Kat Cammack (R)", percent: 99 },
  ],
  polling: "Safe R",
},

FL04: {
  candidates: [
    { name: "Democrat (D)", percent: "<1" },
    { name: "Aaron Bean (R)", percent: 99 },
  ],
  polling: "Safe R",
},

FL05: {
  candidates: [
    { name: "Democrat (D)", percent: "<1" },
    { name: "John Rutherford (R)", percent: 99 },
  ],
  polling: "Safe R",
},

FL06: {
  candidates: [
    { name: "Democrat (D)", percent: "<1" },
    { name: "Randy Fine (R)", percent: 99 },
  ],
  polling: "Safe R",
},

FL07: {
  candidates: [
    { name: "Democrat (D)", percent: 8 },
    { name: "Cory Mills (R)", percent: 92 },
  ],
  polling: "Likely R",
},

FL08: {
  candidates: [
    { name: "Democrat (D)", percent: "<1" },
    { name: "Mike Haridopolos (R)", percent: 99 },
  ],
  polling: "Safe R",
},

FL09: {
  candidates: [
    { name: "Darren Soto (D)", percent: 87 },
    { name: "Justin Story (R)", percent: 13 },
  ],
  polling: "Likely D",
},

FL10: {
  candidates: [
    { name: "Maxwell Frost (D)", percent: 99 },
    { name: "Republican (R)", percent: "<1" },
  ],
  polling: "Safe D",
},

FL11: {
  candidates: [
    { name: "Democrat (D)", percent: "<1" },
    { name: "Daniel Webster (R)", percent: 99 },
  ],
  polling: "Safe R",
},

FL12: {
  candidates: [
    { name: "Democrat (D)", percent: "<1" },
    { name: "Gus Bilirakis (R)", percent: 99 },
  ],
  polling: "Safe R",
},

FL13: {
  candidates: [
    { name: "Democrat (D)", percent: 19 },
    { name: "Anna Paulina Luna (R)", percent: 81 },
  ],
  polling: "Likely R",
},

FL14: {
  candidates: [
    { name: "Kathy Castor (D)", percent: 99 },
    { name: "Rocky Rochford (R)", percent: "<1" },
  ],
  polling: "Safe D",
},

FL15: {
  candidates: [
    { name: "Democrat (D)", percent: "<1" },
    { name: "Laurel Lee (R)", percent: 99 },
  ],
  polling: "Safe R",
},

FL16: {
  candidates: [
    { name: "Democrat (D)", percent: "<1" },
    { name: "Vern Buchanan (R)", percent: 99 },
  ],
  polling: "Safe R",
},

FL17: {
  candidates: [
    { name: "Democrat (D)", percent: "<1" },
    { name: "Greg Steube (R)", percent: 99 },
  ],
  polling: "Safe R",
},

FL18: {
  candidates: [
    { name: "Democrat (D)", percent: "<1" },
    { name: "Scott Franklin (R)", percent: 99 },
  ],
  polling: "Safe R",
},

FL19: {
  candidates: [
    { name: "Democrat (D)", percent: "<1" },
    { name: "Republican (R)", percent: 99 },
  ],
  polling: "Safe R",
},

FL20: {
  candidates: [
    { name: "Democrat (D)", percent: 99 },
    { name: "Republican (R)", percent: "<1" },
  ],
  polling: "Safe D",
},

FL21: {
  candidates: [
    { name: "Pia Dandiya (D)", percent: 1 },
    { name: "Brian Mast (R)", percent: 99 },
  ],
  polling: "Safe R",
},

FL22: {
  candidates: [
    { name: "Lois Frankel (D)", percent: 99 },
    { name: "Republican (R)", percent: "<1" },
  ],
  polling: "Safe D",
},

FL23: {
  candidates: [
    { name: "Jared Moskowitz (D)", percent: 75 },
    { name: "Republican (R)", percent: 25 },
  ],
  polling: "Likely D",
},

FL24: {
  candidates: [
    { name: "Frederica Wilson (D)", percent: 99 },
    { name: "Republican (R)", percent: "<1" },
  ],
  polling: "Safe D",
},

FL25: {
  candidates: [
    { name: "Debbie Wasserman Schultz (D)", percent: 87 },
    { name: "Michael Carbonara (R)", percent: 13 },
  ],
  polling: "Likely D",
},

FL26: {
  candidates: [
    { name: "Democrat (D)", percent: "<1" },
    { name: "Mario Diaz-Balart (R)", percent: 99 },
  ],
  polling: "Safe R",
},

FL27: {
  candidates: [
    { name: "Democrat (D)", percent: "<1" },
    { name: "Maria Elvira Salazar (R)", percent: 99 },
  ],
  polling: "Safe R",
},

FL28: {
  candidates: [
    { name: "Democrat (D)", percent: "<1" },
    { name: "Carlos Giménez (R)", percent: 99 },
  ],
  polling: "Safe R",
},

  // add more districts here...
};

// When you render the map:
<HouseMap
  districtDataById={HOUSE_DISTRICT_DATA}
  onDistrictClick={(props, { key }) => console.log("Clicked:", key)} // helps you see the exact key
/>


  // …add more districts here
;

/* ===================== Generic Ballot (LOESS) ===================== */

const DAY_MS = 24 * 60 * 60 * 1000;

function mdISO(year, m, d) {
  const mm = String(m).padStart(2, "0");
  const dd = String(d).padStart(2, "0");
  return `${year}-${mm}-${dd}`;
}
function midISO(startISO, endISO) {
  const s = new Date(startISO).getTime();
  const e = new Date(endISO).getTime();
  const mid = new Date(Math.round((s + e) / 2));
  return mid.toISOString().slice(0, 10);
}
function fmtShortDate(iso) {
  const dt = new Date(iso);
  return dt.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

// LOESS (local linear regression with tricube kernel)
function loess(x, y, hDays = 28, w = null) {
  const n = x.length;
  const h = hDays;
  const yhat = new Array(n);

  for (let i = 0; i < n; i++) {
    const x0 = x[i];
    let sw = 0, swx = 0, swy = 0, swxx = 0, swxy = 0, count = 0;

    for (let j = 0; j < n; j++) {
      const dist = Math.abs(x[j] - x0);
      if (dist > h) continue;
      const u = dist / h;
      const k = Math.pow(1 - Math.pow(u, 3), 3); // tricube
      const base = w ? w[j] : 1;
      const wij = Math.max(0, k * base);

      sw += wij;
      swx += wij * x[j];
      swy += wij * y[j];
      swxx += wij * x[j] * x[j];
      swxy += wij * x[j] * y[j];
      count++;
    }

    if (count === 0 || sw === 0) {
      yhat[i] = y[i];
      continue;
    }
    const denom = sw * swxx - swx * swx;
    if (Math.abs(denom) < 1e-9) {
      yhat[i] = swy / sw;
    } else {
      const beta1 = (sw * swxy - swx * swy) / denom;
      const beta0 = (swy - beta1 * swx) / sw;
      yhat[i] = beta0 + beta1 * x0;
    }
  }
  return yhat;
}
function sampleTypeFactor(t) {
  const T = (t || "").toUpperCase();
  if (T === "LV") return 1.15;
  if (T === "RV") return 1.00;
  if (T === "A")  return 0.85;
  return 1.0;
}

// Polls (2025) — Pollster, startISO, endISO, sampleN, type, dem, gop
const POLLS_2025 = [
  ["Quantus Insights", mdISO(2025, 8,11), mdISO(2025, 8,13), 1000, "RV", 45, 42],
  ["Economist/YouGov", mdISO(2025, 8, 9), mdISO(2025, 8,11), 1474, "RV", 42, 40],
  ["Cygnal",           mdISO(2025, 8, 7), mdISO(2025, 8, 9), 1500, "RV", 47, 46],
  ["Economist/YouGov", mdISO(2025, 8, 1), mdISO(2025, 8, 4), 1528, "RV", 44, 38],
  ["CNBC",             mdISO(2025, 7,29), mdISO(2025, 8, 3), 1000, "A",  49, 44],
  ["Economist/YouGov", mdISO(2025, 7,25), mdISO(2025, 7,28), 1610, "RV", 43, 41],
  ["Yahoo News",       mdISO(2025, 7,24), mdISO(2025, 7,28), 1167, "RV", 46, 39],
  ["Emerson",          mdISO(2025, 7,21), mdISO(2025, 7,22), 1400, "RV", 44, 42],
  ["Wall Street Journal", mdISO(2025, 7,16), mdISO(2025, 7,20), 1500, "RV", 46, 43],
  ["Atlas Intel",      mdISO(2025, 7,13), mdISO(2025, 7,18), 1935, "A",  51, 43],
  ["Rasmussen Reports",mdISO(2025, 7,13), mdISO(2025, 7,17), 2288, "LV", 46, 42],
  ["Quantus Insights", mdISO(2025, 7,14), mdISO(2025, 7,16), 1000, "RV", 44, 42],
  ["Big Data Poll",    mdISO(2025, 7,12), mdISO(2025, 7,14), 3022, "RV", 42, 41],
  ["Cygnal",           mdISO(2025, 7, 1), mdISO(2025, 7, 2), 1500, "LV", 47, 46],
  ["Emerson",          mdISO(2025, 6,24), mdISO(2025, 6,25), 1000, "RV", 43, 40],
  ["Quantus Insights", mdISO(2025, 6, 9), mdISO(2025, 6,11), 1000, "RV", 43, 43],
  ["Cygnal",           mdISO(2025, 6, 3), mdISO(2025, 6, 4), 1500, "LV", 47, 47],
  ["Quantus Insights", mdISO(2025, 6, 1), mdISO(2025, 6, 4), 1000, "RV", 46, 45],
  ["Economist/YouGov", mdISO(2025, 5,30), mdISO(2025, 6, 2), 1436, "RV", 44, 42],
  ["Atlas Intel",      mdISO(2025, 5,21), mdISO(2025, 5,27), 3469, "A",  51, 42],
  ["Rasmussen Reports",mdISO(2025, 5,14), mdISO(2025, 5,15), 1012, "LV", 45, 44],
  ["Quantus Insights", mdISO(2025, 5, 5), mdISO(2025, 5, 7), 1000, "RV", 45, 45],
  ["Big Data Poll",    mdISO(2025, 5, 3), mdISO(2025, 5, 5), 3128, "RV", 40, 42],
  ["Newsnation",       mdISO(2025, 4,23), mdISO(2025, 4,27), 1448, "RV", 45, 40],
  ["NY Times/Siena",   mdISO(2025, 4,21), mdISO(2025, 4,24),  913, "RV", 47, 44],
  ["FOX News",         mdISO(2025, 4,18), mdISO(2025, 4,21), 1104, "RV", 49, 42],
  ["CNBC",             mdISO(2025, 4, 9), mdISO(2025, 4,13),  800, "RV", 48, 46],
  ["Economist/YouGov", mdISO(2025, 4, 5), mdISO(2025, 4, 8), 1563, "RV", 43, 42],
  ["Cygnal",           mdISO(2025, 4, 1), mdISO(2025, 4, 3), 1500, "LV", 48, 47],
  ["Wall Street Journal", mdISO(2025, 3,27), mdISO(2025, 4, 1), 1500, "RV", 44, 43],
  ["Quantus Insights", mdISO(2025, 3,25), mdISO(2025, 3,27), 1000, "RV", 45, 46],
  ["NBC News",         mdISO(2025, 3, 7), mdISO(2025, 3,11), 1000, "RV", 48, 47],
  ["Emerson",          mdISO(2025, 3, 2), mdISO(2025, 3, 3), 1000, "RV", 44, 41],
  ["Cygnal",           mdISO(2025, 2, 4), mdISO(2025, 2, 5), 1500, "LV", 46, 47],
  ["Fabrizio/Anzalone",mdISO(2025, 1,27), mdISO(2025, 2, 1), 3000, "RV", 43, 43],
];

function buildGBSeries(bwDays = 28) {
  const points = POLLS_2025.map(([pollster, s, e, n, typ, dem, gop]) => {
    const mid = midISO(s, e);
    return {
      pollster, start: s, end: e, date: mid,
      t: new Date(mid).getTime() / DAY_MS,
      dem, gop, n, typ, lead: dem - gop,
    };
  }).sort((a, b) => new Date(a.date) - new Date(b.date));

  const weights = points.map(p => Math.sqrt(p.n) * sampleTypeFactor(p.typ));
  const x = points.map(p => p.t);
  const yDem = points.map(p => p.dem);
  const yGop = points.map(p => p.gop);

  const demSmooth = loess(x, yDem, bwDays, weights);
  const gopSmooth = loess(x, yGop, bwDays, weights);

  return points.map((p, i) => ({
    ...p,
    dem_smooth: demSmooth[i],
    gop_smooth: gopSmooth[i],
  }));
}

function GenericBallotCard() {
  const data = useMemo(() => buildGBSeries(28), []);
  return (
    <div className="bg-gray-800/80 rounded-lg p-6 shadow">
      <div className="flex items-baseline justify-between mb-3">
        <h3 className="text-xl font-semibold">Generic Ballot</h3>
        <div className="text-xs text-gray-300">
          Smoothing: <span className="font-semibold">LOESS (28 days)</span>
        </div>
      </div>

      <div style={{ width: "100%", height: 420 }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 10, right: 18, bottom: 8, left: 0 }}>
            <CartesianGrid stroke="#374151" strokeDasharray="4 4" />
            <XAxis
              dataKey="date"
              tickFormatter={fmtShortDate}
              tick={{ fill: "#CBD5E1", fontSize: 12 }}
              axisLine={{ stroke: "#4B5563" }}
              tickLine={{ stroke: "#4B5563" }}
              tickMargin={8}
            />
            <YAxis
              domain={[35, 60]}
              tick={{ fill: "#CBD5E1", fontSize: 12 }}
              axisLine={{ stroke: "#4B5563" }}
              tickLine={{ stroke: "#4B5563" }}
              tickMargin={6}
            />
            <ReferenceLine
              y={50}
              stroke="#6B7280"
              strokeDasharray="3 3"
              ifOverflow="extendDomain"
            />
            <Tooltip
              contentStyle={{ background: "#111827", border: "1px solid #374151", borderRadius: 8 }}
              labelStyle={{ color: "#E5E7EB" }}
              formatter={(value, name) => {
                if (name === "dem_smooth") return [`${value.toFixed(1)}%`, "Democrats"];
                if (name === "gop_smooth") return [`${value.toFixed(1)}%`, "Republicans"];
                if (name === "dem") return [`${value.toFixed(1)}%`, "Democrats"];
                if (name === "gop") return [`${value.toFixed(1)}%`, "Republicans"];
                return [value, name];
              }}
              labelFormatter={(label, payload) => {
                if (!payload?.[0]?.payload) return fmtShortDate(label);
                const p = payload[0].payload;
                return `${fmtShortDate(p.date)} — ${p.pollster}`;
              }}
            />
            <Legend
              wrapperStyle={{ color: "#E5E7EB" }}
              formatter={(value) =>
                value === "dem_smooth"
                  ? "Democrats"
                  : value === "gop_smooth"
                  ? "Republicans"
                  : value === "dem"
                  ? "Dem (polls)"
                  : value === "gop"
                  ? "GOP (polls)"
                  : value
              }
            />
            {/* Raw dots */}
            <Line
              dataKey="dem"
              stroke="transparent"
              dot={{ r: 3, stroke: "#ffffff", strokeWidth: 1, fill: "#60A5FA" }}
              activeDot={{ r: 4 }}
            />
            <Line
              dataKey="gop"
              stroke="transparent"
              dot={{ r: 3, stroke: "#ffffff", strokeWidth: 1, fill: "#FF5865" }}
              activeDot={{ r: 4 }}
            />
            {/* LOESS lines */}
            <Line type="monotone" dataKey="dem_smooth" stroke="#60A5FA" strokeWidth={2.8} dot={false} />
            <Line type="monotone" dataKey="gop_smooth" stroke="#FF5865" strokeWidth={2.8} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p className="text-[11px] text-gray-400 mt-3">
        Weights: √(sample size) × sample-type factor (LV=1.15, RV=1.00, A=0.85).
      </p>
    </div>
  );
}

/* ===================== HOUSE Ideology Compass (same axes as Senate) ===================== */

// <<< PASTE FROM YOUR MESSAGE: the full 435-member list >>>
const HOUSE_RANKS_RAW = `All Representatives
most politically right
#1	1.00	Rep. Weber [R-TX14, 2013-2026]
#2	0.95	Rep. Donalds [R-FL19, 2021-2026]
#3	0.94	Rep. Miller [R-IL15, 2021-2026]
#4	0.92	Rep. Norman [R-SC5, 2017-2026]
#5	0.89	Rep. Duncan [R-SC3, 2011-2024]
#6	0.88	Rep. Tenney [R-NY24, 2023-2026]
#7	0.87	Rep. Moolenaar [R-MI2, 2023-2026]
#8	0.86	Rep. Babin [R-TX36, 2015-2026]
#9	0.85	Rep. Lesko [R-AZ8, 2018-2024]
#10	0.85	Rep. Moore [R-AL2, 2021-2024]
#11	0.84	Rep. Jackson [R-TX13, 2021-2026]
#12	0.84	Rep. Ogles [R-TN5, 2023-2026]
#13	0.83	Rep. Good [R-VA5, 2021-2024]
#14	0.83	Rep. Steube [R-FL17, 2019-2026]
#15	0.83	Rep. Crenshaw [R-TX2, 2019-2026]
#16	0.83	Rep. Grothman [R-WI6, 2015-2026]
#17	0.83	Rep. Higgins [R-LA3, 2017-2026]
#18	0.82	Rep. Biggs [R-AZ5, 2017-2026]
#19	0.82	Rep. Mann [R-KS1, 2021-2026]
#20	0.82	Rep. Guest [R-MS3, 2019-2026]
#21	0.82	Rep. Gosar [R-AZ9, 2023-2026]
#22	0.81	Rep. Finstad [R-MN1, 2022-2026]
#23	0.81	Rep. LaMalfa [R-CA1, 2013-2026]
#24	0.80	Rep. Rosendale [R-MT2, 2023-2024]
#25	0.80	Rep. Harshbarger [R-TN1, 2021-2026]
#26	0.80	Rep. Posey [R-FL8, 2013-2024]
#27	0.80	Rep. Cline [R-VA6, 2019-2026]
#28	0.80	Rep. Self [R-TX3, 2023-2026]
#29	0.79	Rep. Boebert [R-CO3, 2021-2024]
#30	0.79	Rep. Rouzer [R-NC7, 2015-2026]
#31	0.79	Rep. Reschenthaler [R-PA14, 2019-2026]
#32	0.78	Rep. Bost [R-IL12, 2015-2026]
#33	0.78	Rep. Lamborn [R-CO5, 2007-2024]
#34	0.78	Rep. Sessions [R-TX17, 2021-2026]
#35	0.78	Rep. Crane [R-AZ2, 2023-2026]
#36	0.77	Rep. Mooney [R-WV2, 2015-2024]
#37	0.77	Rep. Tiffany [R-WI7, 2020-2026]
#38	0.77	Rep. Nehls [R-TX22, 2021-2026]
#39	0.77	Rep. Meuser [R-PA9, 2019-2026]
#40	0.77	Rep. Pfluger [R-TX11, 2021-2026]
#41	0.77	Rep. Dunn [R-FL2, 2017-2026]
#42	0.77	Rep. Lawler [R-NY17, 2023-2026]
#43	0.77	Rep. Baird [R-IN4, 2019-2026]
#44	0.77	Rep. Hageman [R-WY, 2023-2026]
#45	0.77	Rep. Gooden [R-TX5, 2019-2026]
#46	0.77	Rep. Langworthy [R-NY23, 2023-2026]
#47	0.76	Rep. Franklin [R-FL18, 2023-2026]
#48	0.76	Rep. Carter [R-GA1, 2015-2026]
#49	0.76	Rep. Feenstra [R-IA4, 2021-2026]
#50	0.75	Rep. Miller-Meeks [R-IA1, 2023-2026]
#51	0.75	Rep. Van Drew [R-NJ2, 2019-2026]
#52	0.75	Rep. Rutherford [R-FL5, 2023-2026]
#53	0.75	Rep. Hinson [R-IA2, 2023-2026]
#54	0.75	Rep. Cammack [R-FL3, 2021-2026]
#55	0.75	Rep. Yakym [R-IN2, 2022-2026]
#56	0.74	Rep. Van Duyne [R-TX24, 2021-2026]
#57	0.74	Rep. Owens [R-UT4, 2021-2026]
#58	0.74	Rep. De La Cruz [R-TX15, 2023-2026]
#59	0.74	Rep. Hudson [R-NC9, 2023-2026]
#60	0.73	Rep. Houchin [R-IN9, 2023-2026]
#61	0.73	Rep. Stefanik [R-NY21, 2015-2026]
#62	0.73	Rep. Mace [R-SC1, 2021-2026]
#63	0.73	Rep. Ellzey [R-TX6, 2021-2026]
#64	0.73	Rep. Timmons [R-SC4, 2019-2026]
#65	0.73	Rep. Stauber [R-MN8, 2019-2026]
#66	0.73	Rep. Burlison [R-MO7, 2023-2026]
#67	0.73	Rep. Luna [R-FL13, 2023-2026]
#68	0.72	Rep. Fry [R-SC7, 2023-2026]
#69	0.72	Rep. Brecheen [R-OK2, 2023-2026]
#70	0.72	Rep. Williams [R-TX25, 2013-2026]
#71	0.72	Rep. Miller [R-WV1, 2023-2026]
#72	0.72	Rep. Bice [R-OK5, 2021-2026]
#73	0.72	Rep. Bilirakis [R-FL12, 2013-2026]
#74	0.72	Rep. Edwards [R-NC11, 2023-2026]
#75	0.72	Rep. Newhouse [R-WA4, 2015-2026]
#76	0.72	Rep. Barr [R-KY6, 2013-2026]
#77	0.71	Rep. Allen [R-GA12, 2015-2026]
#78	0.71	Rep. McCormick [R-GA6, 2023-2024]
#79	0.71	Rep. Banks [R-IN3, 2017-2024]
#80	0.71	Rep. Roy [R-TX21, 2019-2026]
#81	0.71	Rep. Balderson [R-OH12, 2018-2026]
#82	0.71	Rep. Bishop [R-NC8, 2023-2024]
#83	0.71	Rep. Bean [R-FL4, 2023-2026]
#84	0.70	Rep. Fallon [R-TX4, 2021-2026]
#85	0.70	Rep. Mills [R-FL7, 2023-2026]
#86	0.70	Rep. Rose [R-TN6, 2019-2026]
#87	0.70	Rep. Cloud [R-TX27, 2018-2026]
#88	0.70	Rep. Harris [R-MD1, 2011-2026]
#89	0.69	Rep. Webster [R-FL11, 2017-2026]
#90	0.69	Rep. Van Orden [R-WI3, 2023-2026]
#91	0.69	Rep. Carl [R-AL1, 2021-2024]
#92	0.69	Rep. Walberg [R-MI5, 2023-2026]
#93	0.69	Rep. Green [R-TN7, 2019-2025]
#94	0.69	Rep. Gimenez [R-FL28, 2023-2026]
#95	0.69	Rep. Moran [R-TX1, 2023-2026]
#96	0.69	Rep. Zinke [R-MT1, 2023-2026]
#97	0.69	Rep. Wenstrup [R-OH2, 2013-2024]
#98	0.69	Rep. Perry [R-PA10, 2019-2026]
#99	0.69	Rep. Murphy [R-NC3, 2019-2026]
#100	0.69	Rep. LaTurner [R-KS2, 2021-2024]
#101	0.69	Rep. Bacon [R-NE2, 2017-2026]
#102	0.69	Rep. Waltz [R-FL6, 2019-2025]
#103	0.69	Rep. Smith [R-NE3, 2007-2026]
#104	0.69	Rep. Clyde [R-GA9, 2021-2026]
#105	0.68	Rep. Kustoff [R-TN8, 2017-2026]
#106	0.68	Rep. Ezell [R-MS4, 2023-2026]
#107	0.68	Rep. Fleischmann [R-TN3, 2011-2026]
#108	0.68	Rep. Wittman [R-VA1, 2007-2026]
#109	0.68	Rep. Wilson [R-SC2, 2001-2026]
#110	0.68	Rep. Scott [R-GA8, 2011-2026]
#111	0.68	Rep. Bergman [R-MI1, 2017-2026]
#112	0.68	Rep. Fitzgerald [R-WI5, 2021-2026]
#113	0.68	Rep. Williams [R-NY22, 2023-2024]
#114	0.67	Rep. Thompson [R-PA15, 2019-2026]
#115	0.67	Rep. Kelly [R-PA16, 2019-2026]
#116	0.67	Rep. Gonzales [R-TX23, 2021-2026]
#117	0.67	Rep. Bucshon [R-IN8, 2011-2024]
#118	0.67	Rep. Fischbach [R-MN7, 2021-2026]
#119	0.67	Rep. Burchett [R-TN2, 2019-2026]
#120	0.67	Rep. Arrington [R-TX19, 2017-2026]
#121	0.67	Rep. Hern [R-OK1, 2018-2026]
#122	0.67	Rep. Valadao [R-CA22, 2023-2026]
#123	0.66	Rep. Alford [R-MO4, 2023-2026]
#124	0.66	Rep. Loudermilk [R-GA11, 2015-2026]
#125	0.66	Rep. Kelly [R-MS1, 2015-2026]
#126	0.66	Rep. Johnson [R-SD, 2019-2026]
#127	0.66	Rep. D'Esposito [R-NY4, 2023-2024]
#128	0.66	Rep. Davidson [R-OH8, 2016-2026]
#129	0.65	Rep. Buchanan [R-FL16, 2013-2026]
#130	0.65	Rep. Estes [R-KS4, 2017-2026]
#131	0.65	Rep. Carey [R-OH15, 2021-2026]
#132	0.65	Rep. Crawford [R-AR1, 2011-2026]
#133	0.65	Rep. Guthrie [R-KY2, 2009-2026]
#134	0.65	Rep. Mast [R-FL21, 2023-2026]
#135	0.65	Rep. Nunn [R-IA3, 2023-2026]
#136	0.65	Rep. Smith [R-NJ4, 1981-2026]
#137	0.65	Rep. Fulcher [R-ID1, 2019-2026]
#138	0.65	Rep. Malliotakis [R-NY11, 2021-2026]
#139	0.64	Rep. Collins [R-GA10, 2023-2026]
#140	0.64	Rep. Greene [R-GA14, 2021-2026]
#141	0.64	Rep. Ciscomani [R-AZ6, 2023-2026]
#142	0.64	Rep. Aderholt [R-AL4, 1997-2026]
#143	0.64	Rep. Flood [R-NE1, 2022-2026]
#144	0.64	Rep. LaLota [R-NY1, 2023-2026]
#145	0.63	Rep. Issa [R-CA48, 2023-2026]
#146	0.63	Rep. LaHood [R-IL16, 2023-2026]
#147	0.63	Rep. Davis [D-NC1, 2023-2026]
#148	0.63	Rep. Johnson [R-LA4, 2017-2026]
#149	0.63	Rep. Kean [R-NJ7, 2023-2026]
#150	0.63	Rep. Burgess [R-TX26, 2003-2024]
#151	0.63	Rep. Hunt [R-TX38, 2023-2026]
#152	0.63	Rep. Smucker [R-PA11, 2019-2026]
#153	0.63	Rep. Ferguson [R-GA3, 2017-2024]
#154	0.63	Rep. Palmer [R-AL6, 2015-2026]
#155	0.63	Rep. Hill [R-AR2, 2015-2026]
#156	0.63	Rep. Huizenga [R-MI4, 2023-2026]
#157	0.63	Rep. Lee [R-FL15, 2023-2026]
#158	0.62	Rep. McClintock [R-CA5, 2023-2026]
#159	0.62	Rep. Miller [R-OH7, 2023-2026]
#160	0.62	Rep. McClain [R-MI9, 2023-2026]
#161	0.62	Rep. McCaul [R-TX10, 2005-2026]
#162	0.62	Rep. Salazar [R-FL27, 2021-2026]
#163	0.62	Rep. Westerman [R-AR4, 2015-2026]
#164	0.62	Rep. Letlow [R-LA5, 2021-2026]
#165	0.61	Rep. Joyce [R-PA13, 2019-2026]
#166	0.61	Rep. Foxx [R-NC5, 2005-2026]
#167	0.61	Rep. DesJarlais [R-TN4, 2011-2026]
#168	0.61	Rep. Garbarino [R-NY2, 2021-2026]
#169	0.61	Rep. Chavez-DeRemer [R-OR5, 2023-2024]
#170	0.60	Rep. Rogers [R-AL3, 2003-2026]
#171	0.60	Rep. Womack [R-AR3, 2011-2026]
#172	0.60	Rep. Moore [R-UT1, 2021-2026]
#173	0.60	Rep. Latta [R-OH5, 2007-2026]
#174	0.60	Rep. Obernolte [R-CA23, 2023-2026]
#175	0.59	Rep. Pence [R-IN6, 2019-2024]
#176	0.59	Rep. Calvert [R-CA41, 2023-2026]
#177	0.59	Rep. Strong [R-AL5, 2023-2026]
#178	0.59	Rep. Graves [R-MO6, 2001-2026]
#179	0.59	Rep. Carter [R-TX31, 2003-2026]
#180	0.59	Rep. Luetkemeyer [R-MO3, 2013-2024]
#181	0.59	Rep. Luttrell [R-TX8, 2023-2026]
#182	0.59	Rep. Steil [R-WI1, 2019-2026]
#183	0.58	Rep. Amodei [R-NV2, 2011-2026]
#184	0.58	Rep. Kiggans [R-VA2, 2023-2026]
#185	0.58	Rep. McMorris Rodgers [R-WA5, 2005-2024]
#186	0.58	Rep. Griffith [R-VA9, 2011-2026]
#187	0.58	Rep. Curtis [R-UT3, 2017-2024]
#188	0.57	Rep. Wagner [R-MO2, 2013-2026]
#189	0.57	Rep. Graves [R-LA6, 2015-2024]
#190	0.56	Rep. Garcia [R-CA27, 2023-2024]
#191	0.56	Rep. Bentz [R-OR2, 2021-2026]
#192	0.56	Rep. Moylan [R-GU, 2023-2026]
#193	0.56	Rep. Steel [R-CA45, 2023-2024]
#194	0.55	Rep. James [R-MI10, 2023-2026]
#195	0.54	Rep. Kim [R-CA40, 2023-2026]
#196	0.54	Rep. Spartz [R-IN5, 2021-2026]
#197	0.54	Rep. Kiley [R-CA3, 2023-2026]
#198	0.54	Rep. Duarte [R-CA13, 2023-2024]
#199	0.54	Rep. Cole [R-OK4, 2003-2026]
#200	0.54	Rep. Comer [R-KY1, 2016-2026]
#201	0.54	Rep. Pappas [D-NH1, 2019-2026]
#202	0.53	Rep. Joyce [R-OH14, 2013-2026]
#203	0.53	Rep. Granger [R-TX12, 1997-2024]
#204	0.53	Rep. Diaz-Balart [R-FL26, 2023-2026]
#205	0.53	Rep. Schweikert [R-AZ1, 2023-2026]
#206	0.53	Rep. Gluesenkamp Perez [D-WA3, 2023-2026]
#207	0.53	Rep. Simpson [R-ID2, 1999-2026]
#208	0.52	Rep. Emmer [R-MN6, 2015-2026]
#209	0.51	Rep. Smith [R-MO8, 2013-2026]
#210	0.51	Commish. González-Colón [R-PR, 2017-2024]
#211	0.51	Rep. Massie [R-KY4, 2012-2026]
#212	0.50	Rep. McHenry [R-NC10, 2005-2024]
#213	0.50	Rep. Rogers [R-KY5, 1981-2026]
#214	0.50	Rep. Lucas [R-OK3, 2003-2026]
#215	0.50	Rep. Golden [D-ME2, 2019-2026]
#216	0.49	Rep. Jordan [R-OH4, 2007-2026]
#217	0.49	Rep. Maloy [R-UT2, 2023-2026]
#218	0.49	Rep. Fitzpatrick [R-PA1, 2019-2026]
#219	0.49	Rep. Lopez [R-CO4, 2024-2024]
#220	0.48	Rep. Cuellar [D-TX28, 2005-2026]
#221	0.48	Rep. Lee [D-NV3, 2019-2026]
#222	0.47	Rep. Turner [R-OH10, 2013-2026]
#223	0.46	Rep. Radewagen [R-AS, 2015-2026]
#224	0.46	Rep. Caraveo [D-CO8, 2023-2024]
#225	0.45	Rep. Scalise [R-LA1, 2008-2026]
#226	0.45	Rep. Spanberger [D-VA7, 2019-2024]
#227	0.45	Rep. Rulli [R-OH6, 2024-2026]
#228	0.44	Rep. Fong [R-CA20, 2024-2026]
#229	0.44	Rep. Suozzi [D-NY3, 2024-2026]
#230	0.44	Rep. Panetta [D-CA19, 2023-2026]
#231	0.43	Rep. Phillips [D-MN3, 2019-2024]
#232	0.43	Rep. Harder [D-CA9, 2023-2026]
#233	0.43	Rep. Gonzalez [D-TX34, 2023-2026]
#234	0.42	Rep. Peltola [D-AK, 2022-2024]
#235	0.42	Rep. Gottheimer [D-NJ5, 2017-2026]
#236	0.42	Rep. Slotkin [D-MI7, 2023-2024]
#237	0.42	Rep. Houlahan [D-PA6, 2019-2026]
#238	0.42	Rep. Vasquez [D-NM2, 2023-2026]
#239	0.42	Rep. Sorensen [D-IL17, 2023-2026]
#240	0.42	Rep. Craig [D-MN2, 2019-2026]
#241	0.41	Rep. Crow [D-CO6, 2019-2026]
#242	0.40	Rep. Molinaro [R-NY19, 2023-2024]
#243	0.40	Rep. Costa [D-CA21, 2023-2026]
#244	0.40	Rep. Manning [D-NC6, 2021-2024]
#245	0.40	Rep. Nickel [D-NC13, 2023-2024]
#246	0.40	Rep. Wied [R-WI8, 2024-2026]
#247	0.39	Rep. Moskowitz [D-FL23, 2023-2026]
#248	0.39	Rep. Ryan [D-NY18, 2023-2026]
#249	0.39	Rep. Schrier [D-WA8, 2019-2026]
#250	0.39	Rep. Stanton [D-AZ4, 2023-2026]
#251	0.39	Rep. Schneider [D-IL10, 2017-2026]
#252	0.39	Rep. Neguse [D-CO2, 2019-2026]
#253	0.38	Rep. Pettersen [D-CO7, 2023-2026]
#254	0.38	Rep. Davids [D-KS3, 2019-2026]
#255	0.37	Rep. Lee Carter [D-TX18, 2024-2024]
#256	0.36	Rep. Jeffries [D-NY8, 2013-2026]
#257	0.36	Rep. Bishop [D-GA2, 1993-2026]
#258	0.35	Rep. Bera [D-CA6, 2023-2026]
#259	0.34	Rep. Scholten [D-MI3, 2023-2026]
#260	0.34	Rep. Wild [D-PA7, 2019-2024]
#261	0.34	Rep. Thompson [D-CA4, 2023-2026]
#262	0.34	Rep. Gallego [D-AZ3, 2023-2024]
#263	0.34	Rep. Kilmer [D-WA6, 2013-2024]
#264	0.34	Rep. Kildee [D-MI8, 2023-2024]
#265	0.34	Rep. Clark [D-MA5, 2013-2026]
#266	0.34	Rep. Norcross [D-NJ1, 2014-2026]
#267	0.34	Rep. Neal [D-MA1, 2013-2026]
#268	0.34	Rep. Pelosi [D-CA11, 2023-2026]
#269	0.33	Rep. Correa [D-CA46, 2017-2026]
#270	0.33	Rep. Landsman [D-OH1, 2023-2026]
#271	0.33	Rep. Courtney [D-CT2, 2007-2026]
#272	0.33	Rep. Himes [D-CT4, 2009-2026]
#273	0.33	Rep. McIver [D-NJ10, 2024-2026]
#274	0.33	Rep. Kuster [D-NH2, 2013-2024]
#275	0.33	Rep. Mrvan [D-IN1, 2021-2026]
#276	0.32	Rep. Hoyer [D-MD5, 1981-2026]
#277	0.32	Rep. Budzinski [D-IL13, 2023-2026]
#278	0.32	Rep. Auchincloss [D-MA4, 2021-2026]
#279	0.32	Rep. Kaptur [D-OH9, 1983-2026]
#280	0.32	Rep. Veasey [D-TX33, 2013-2026]
#281	0.32	Rep. Soto [D-FL9, 2017-2026]
#282	0.31	Rep. Clyburn [D-SC6, 1993-2026]
#283	0.31	Rep. Sherrill [D-NJ11, 2019-2026]
#284	0.31	Rep. Cartwright [D-PA8, 2019-2024]
#285	0.31	Rep. Wexton [D-VA10, 2019-2024]
#286	0.31	Rep. Sherman [D-CA32, 2023-2026]
#287	0.31	Rep. Case [D-HI1, 2019-2026]
#288	0.31	Rep. Ross [D-NC2, 2021-2026]
#289	0.31	Rep. Ruppersberger [D-MD2, 2003-2024]
#290	0.31	Rep. Boyle [D-PA2, 2019-2026]
#291	0.31	Rep. Aguilar [D-CA33, 2023-2026]
#292	0.30	Rep. Foster [D-IL11, 2013-2026]
#293	0.30	Rep. Peters [D-CA50, 2023-2026]
#294	0.30	Rep. Plaskett [D-VI, 2015-2026]
#295	0.30	Rep. Morelle [D-NY25, 2018-2026]
#296	0.30	Rep. Kennedy [D-NY26, 2024-2026]
#297	0.30	Rep. Sykes [D-OH13, 2023-2026]
#298	0.30	Rep. Carbajal [D-CA24, 2017-2026]
#299	0.30	Rep. Allred [D-TX32, 2019-2024]
#300	0.29	Rep. Hoyle [D-OR4, 2023-2026]
#301	0.29	Rep. Eshoo [D-CA16, 2023-2024]
#302	0.29	Rep. Ruiz [D-CA25, 2023-2026]
#303	0.29	Rep. Pallone [D-NJ6, 1993-2026]
#304	0.28	Rep. Larsen [D-WA2, 2001-2026]
#305	0.28	Rep. Torres [D-CA35, 2015-2026]
#306	0.28	Rep. Sablan [D-MP, 2009-2024]
#307	0.28	Rep. Scott [D-GA13, 2003-2026]
#308	0.27	Rep. Frankel [D-FL22, 2023-2026]
#309	0.27	Rep. Wasserman Schultz [D-FL25, 2023-2026]
#310	0.27	Rep. Deluzio [D-PA17, 2023-2026]
#311	0.27	Rep. Larson [D-CT1, 1999-2026]
#312	0.27	Rep. Stevens [D-MI11, 2019-2026]
#313	0.27	Rep. Fletcher [D-TX7, 2019-2026]
#314	0.27	Rep. Levin [D-CA49, 2019-2026]
#315	0.27	Rep. Sewell [D-AL7, 2011-2026]
#316	0.27	Rep. Scott [D-VA3, 1993-2026]
#317	0.26	Rep. Garamendi [D-CA8, 2023-2026]
#318	0.26	Rep. Amo [D-RI1, 2023-2026]
#319	0.26	Rep. Swalwell [D-CA14, 2023-2026]
#320	0.26	Rep. Matsui [D-CA7, 2023-2026]
#321	0.26	Rep. Lofgren [D-CA18, 2023-2026]
#322	0.26	Rep. DelBene [D-WA1, 2012-2026]
#323	0.26	Rep. Dingell [D-MI6, 2023-2026]
#324	0.26	Rep. Castro [D-TX20, 2013-2026]
#325	0.26	Rep. Castor [D-FL14, 2013-2026]
#326	0.26	Rep. Leger Fernandez [D-NM3, 2021-2026]
#327	0.26	Rep. Meeks [D-NY5, 2013-2026]
#328	0.26	Rep. Trone [D-MD6, 2019-2024]
#329	0.25	Rep. Keating [D-MA9, 2013-2026]
#330	0.25	Rep. Underwood [D-IL14, 2019-2026]
#331	0.25	Rep. DeGette [D-CO1, 1997-2026]
#332	0.25	Rep. Sarbanes [D-MD3, 2007-2024]
#333	0.25	Rep. Blunt Rochester [D-DE, 2017-2024]
#334	0.25	Rep. Menendez [D-NJ8, 2023-2026]
#335	0.25	Rep. McBath [D-GA7, 2023-2024]
#336	0.25	Rep. Moulton [D-MA6, 2015-2026]
#337	0.25	Rep. DeLauro [D-CT3, 1991-2026]
#338	0.25	Rep. Torres [D-NY15, 2021-2026]
#339	0.24	Rep. Strickland [D-WA10, 2021-2026]
#340	0.24	Rep. Krishnamoorthi [D-IL8, 2017-2026]
#341	0.24	Rep. Brownley [D-CA26, 2013-2026]
#342	0.24	Rep. Horsford [D-NV4, 2019-2026]
#343	0.24	Rep. Quigley [D-IL5, 2009-2026]
#344	0.23	Rep. Trahan [D-MA3, 2019-2026]
#345	0.23	Rep. Foushee [D-NC4, 2023-2026]
#346	0.23	Rep. Titus [D-NV1, 2013-2026]
#347	0.23	Rep. McGarvey [D-KY3, 2023-2026]
#348	0.23	Rep. Pingree [D-ME1, 2009-2026]
#349	0.23	Rep. Doggett [D-TX37, 2023-2026]
#350	0.23	Rep. Ivey [D-MD4, 2023-2026]
#351	0.23	Rep. Beyer [D-VA8, 2015-2026]
#352	0.22	Rep. Dean [D-PA4, 2019-2026]
#353	0.22	Rep. Salinas [D-OR6, 2023-2026]
#354	0.22	Rep. Magaziner [D-RI2, 2023-2026]
#355	0.22	Rep. Kelly [D-IL2, 2013-2026]
#356	0.22	Rep. Escobar [D-TX16, 2019-2026]
#357	0.21	Rep. Thompson [D-MS2, 1993-2026]
#358	0.21	Rep. Jackson [D-IL1, 2023-2026]
#359	0.21	Rep. Connolly [D-VA11, 2009-2025]
#360	0.21	Rep. Beatty [D-OH3, 2013-2026]
#361	0.20	Rep. Waters [D-CA43, 2013-2026]
#362	0.20	Rep. Cohen [D-TN9, 2007-2026]
#363	0.20	Rep. Smith [D-WA9, 1997-2026]
#364	0.20	Rep. Mfume [D-MD7, 2020-2026]
#365	0.20	Rep. Lieu [D-CA36, 2023-2026]
#366	0.20	Rep. McClellan [D-VA4, 2023-2026]
#367	0.19	Rep. Cherfilus-McCormick [D-FL20, 2022-2026]
#368	0.19	Rep. Mullin [D-CA15, 2023-2026]
#369	0.19	Rep. Khanna [D-CA17, 2017-2026]
#370	0.19	Rep. Huffman [D-CA2, 2013-2026]
#371	0.19	Rep. Carter [D-LA2, 2021-2026]
#372	0.19	Rep. Cárdenas [D-CA29, 2013-2024]
#373	0.19	Rep. Sánchez [D-CA38, 2013-2026]
#374	0.19	Rep. Tonko [D-NY20, 2013-2026]
#375	0.19	Rep. Cleaver [D-MO5, 2005-2026]
#376	0.19	Rep. McCollum [D-MN4, 2001-2026]
#377	0.19	Rep. Garcia [D-CA42, 2023-2026]
#378	0.18	Rep. Thanedar [D-MI13, 2023-2026]
#379	0.18	Rep. Blumenauer [D-OR3, 1996-2024]
#380	0.18	Rep. Stansbury [D-NM1, 2021-2026]
#381	0.18	Rep. Adams [D-NC12, 2014-2026]
#382	0.18	Rep. Wilson [D-FL24, 2013-2026]
#383	0.18	Rep. Lynch [D-MA8, 2013-2026]
#384	0.18	Rep. Nadler [D-NY12, 2023-2026]
#385	0.18	Rep. Green [D-TX9, 2005-2026]
#386	0.18	Rep. Crockett [D-TX30, 2023-2026]
#387	0.18	Rep. Balint [D-VT, 2023-2026]
#388	0.18	Rep. Gomez [D-CA34, 2017-2026]
#389	0.18	Rep. Goldman [D-NY10, 2023-2026]
#390	0.18	Rep. Vargas [D-CA52, 2023-2026]
#391	0.18	Rep. Brown [D-OH11, 2021-2026]
#392	0.17	Rep. Napolitano [D-CA31, 2023-2024]
#393	0.17	Rep. Tokuda [D-HI2, 2023-2026]
#394	0.16	Rep. Davis [D-IL7, 1997-2026]
#395	0.16	Rep. Casten [D-IL6, 2019-2026]
#396	0.16	Rep. Kamlager-Dove [D-CA37, 2023-2026]
#397	0.16	Rep. Pocan [D-WI2, 2013-2026]
#398	0.16	Rep. Meng [D-NY6, 2013-2026]
#399	0.16	Rep. Jacobs [D-CA51, 2023-2026]
#400	0.16	Rep. Garcia [D-TX29, 2019-2026]
#401	0.16	Rep. Bonamici [D-OR1, 2012-2026]
#402	0.15	Rep. Porter [D-CA47, 2023-2024]
#403	0.15	Rep. Casar [D-TX35, 2023-2026]
#404	0.15	Rep. Raskin [D-MD8, 2017-2026]
#405	0.14	Rep. Moore [D-WI4, 2005-2026]
#406	0.14	Rep. DeSaulnier [D-CA10, 2023-2026]
#407	0.14	Rep. Clarke [D-NY9, 2013-2026]
#408	0.14	Rep. Chu [D-CA28, 2023-2026]
#409	0.14	Rep. Bush [D-MO1, 2021-2024]
#410	0.14	Rep. Evans [D-PA3, 2019-2026]
#411	0.13	Rep. Lee [D-PA12, 2023-2026]
#412	0.13	Rep. Pressley [D-MA7, 2019-2026]
#413	0.13	Rep. Scanlon [D-PA5, 2019-2026]
#414	0.13	Rep. Frost [D-FL10, 2023-2026]
#415	0.13	Rep. Ocasio-Cortez [D-NY14, 2019-2026]
#416	0.13	Rep. Takano [D-CA39, 2023-2026]
#417	0.12	Rep. Espaillat [D-NY13, 2017-2026]
#418	0.12	Rep. Hayes [D-CT5, 2019-2026]
#419	0.12	Rep. Jayapal [D-WA7, 2017-2026]
#420	0.11	Rep. Carson [D-IN7, 2008-2026]
#421	0.11	Rep. Williams [D-GA5, 2021-2026]
#422	0.11	Rep. Barragán [D-CA44, 2017-2026]
#423	0.11	Rep. Johnson [D-GA4, 2007-2026]
#424	0.10	Rep. Omar [D-MN5, 2019-2026]
#425	0.10	Rep. McGovern [D-MA2, 2013-2026]
#426	0.09	Rep. Velázquez [D-NY7, 2013-2026]
#427	0.09	Rep. García [D-IL4, 2019-2026]
#428	0.08	Rep. Schakowsky [D-IL9, 1999-2026]
#429	0.07	Rep. Bowman [D-NY16, 2021-2024]
#430	0.07	Rep. Ramirez [D-IL3, 2023-2026]
#431	0.05	Rep. Grijalva [D-AZ7, 2023-2025]
#432	0.05	Rep. Watson Coleman [D-NJ12, 2015-2026]
#433	0.03	Rep. Tlaib [D-MI12, 2023-2026]
#434	0.01	Rep. Lee [D-CA12, 2023-2024]
#435	0.00	Rep. Norton [D-DC, 1991-2026]`;

// --- Parsing & mapping ---

function parseHouseRightList(raw) {
  const out = [];
  const lines = raw.split(/\r?\n/);

  for (let rawLine of lines) {
    let s = (rawLine || "").trim();
    if (!s) continue;
    if (/^All Representatives/i.test(s)) continue;
    if (/^most politically right/i.test(s)) continue;

    // 1) rank (e.g., "#1")
    const mRank = s.match(/^#?\s*(\d+)/);
    if (!mRank) continue;
    const rank = Number(mRank[1]);
    s = s.slice(mRank[0].length).trim();

    // 2) score (e.g., "1.00")
    const mScore = s.match(/^([0-9]+(?:\.[0-9]+)?)/);
    if (!mScore) continue;
    const score = Number(mScore[1]);
    s = s.slice(mScore[0].length).trim();

    // 3) name segment up to first '['; strip optional titles
    const lbr = s.indexOf('[');
    if (lbr === -1) continue;
    let nameSeg = s.slice(0, lbr).trim();
    nameSeg = nameSeg.replace(/^(?:Rep\.|Commish\.)\s*/i, '').trim();

    // 4) bracket content: "[R-TX14, 2013-2026]" → party/state
    const rbr = s.indexOf(']', lbr + 1);
    if (rbr === -1) continue;
    const bracket = s.slice(lbr + 1, rbr); // e.g., "R-TX14, 2013-2026"
    const firstPart = bracket.split(',')[0].trim(); // "R-TX14"
    const dash = firstPart.indexOf('-');
    if (dash === -1) continue;
    const party = firstPart.slice(0, dash);     // "R" / "D" / "I"
    const state = firstPart.slice(dash + 1);    // "TX14", "PR", "AS", etc.

    out.push({ rank, name: nameSeg, party, state, score });
  }

  return out;
}


// deterministic jitter so points don't perfectly stack
function hash32(str) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6D2B79F5) >>> 0;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

/** Axes match the Senate:
 *  x: Left (-1)  … Right (+1)           -> x = 2*score - 1
 *  y: Authoritarian (+1) … Libertarian (-1) -> y = -(2*score - 1)
 *  (So higher "right" score → bottom-right; lower → top-left)
 */
function toHouseCompassPoints(rows) {
  return rows.map((r) => {
    const base = 2 * r.score - 1; // -1..+1
    const x0 = base;
    const y0 = -base;
    // small deterministic jitter (±0.04) to de-stack, but keep “near column/diagonal”
    const rng = mulberry32(hash32(`${r.rank}|${r.name}|${r.state}`));
    const jx = (rng() - 0.5) * 0.08;
    const jy = (rng() - 0.5) * 0.08;
    const x = clamp(x0 + jx, -1, 1);
    const y = clamp(y0 + jy, -1, 1);
    return {
      name: `${r.name} (${r.state})`,
      party: r.party,
      state: r.state,
      x: Number(x.toFixed(3)),
      y: Number(y.toFixed(3)),
    };
  });
}

function HouseIdeologyCompass({ points }) {
  const PARTY_COLORS = { D: "#60A5FA", R: "#FF5865", I: "#9CA3AF" };

  // least squares line y = m x + b
  const { m, b } = useMemo(() => {
    const n = Math.max(1, points.length);
    let sx = 0, sy = 0, sxx = 0, sxy = 0;
    points.forEach(({ x, y }) => { sx += x; sy += y; sxx += x * x; sxy += x * y; });
    const denom = n * sxx - sx * sx;
    const m = denom !== 0 ? (n * sxy - sx * sy) / denom : 0;
    const b = sy / n - m * (sx / n);
    return { m, b };
  }, [points]);

  const viewW = 1180, viewH = 660;
  const margin = { top: 64, right: 140, bottom: 84, left: 140 };
  const plotW = viewW - margin.left - margin.right;
  const plotH = viewH - margin.top - margin.bottom;
  const xToSvg = (x) => margin.left + ((x + 1) / 2) * plotW;
  const yToSvg = (y) => margin.top + ((1 - (y + 1) / 2) * plotH); // y=1 top
  const ticks = [-1, -0.5, 0, 0.5, 1];

  const wrapRef = useRef(null);
  const svgRef = useRef(null);
  const [tip, setTip] = useState(null);

  const showTip = (p) => () => {
    const wrapRect = wrapRef.current?.getBoundingClientRect();
    const svgRect  = svgRef.current?.getBoundingClientRect();
    if (!wrapRect || !svgRect) return;
    const sx = svgRect.width / viewW;
    const sy = svgRect.height / viewH;
    const px = xToSvg(p.x) * sx + (svgRect.left - wrapRect.left);
    const py = yToSvg(p.y) * sy + (svgRect.top  - wrapRect.top);
    setTip({ x: px, y: py, name: p.name, party: p.party, xVal: p.x, yVal: p.y });
  };
  const hideTip = () => setTip(null);

  return (
    <div ref={wrapRef} className="bg-gray-800/80 rounded-lg p-6 shadow relative overflow-visible">
      <div className="text-center mb-2">
        <h3 className="text-xl font-semibold">House Ideology Compass (2024)</h3>
        <p className="text-sm text-gray-300">
          West = <b>Socially Liberal</b> · East = <b>Socially Conservative</b> · Top = <b>Fiscally Progressive</b> · Bottom = <b>Fiscally Conservative</b>
        </p>
      </div>

      <svg
        ref={svgRef}
        viewBox={`0 0 ${viewW} ${viewH}`}
        className="w-full h-auto overflow-visible"
        style={{ display: "block" }}
      >
        {/* Background */}
        <rect x={margin.left} y={margin.top} width={plotW} height={plotH}
              fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)"/>

        {/* Grid + ticks */}
        {ticks.map((t, i) => (
          <g key={`gx-${i}`}>
            <line x1={xToSvg(t)} y1={margin.top} x2={xToSvg(t)} y2={margin.top + plotH}
                  stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4"/>
            <text x={xToSvg(t)} y={margin.top + plotH + 18} fill="#ffffff" fontSize="11" textAnchor="middle">{t}</text>
          </g>
        ))}
        {ticks.map((t, i) => (
          <g key={`gy-${i}`}>
            <line x1={margin.left} y1={yToSvg(t)} x2={margin.left + plotW} y2={yToSvg(t)}
                  stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4"/>
            <text x={margin.left - 18} y={yToSvg(t) + 4} fill="#ffffff" fontSize="11" textAnchor="end">{t}</text>
          </g>
        ))}

        {/* Axes */}
        <line x1={xToSvg(-1)} y1={yToSvg(0)} x2={xToSvg(1)} y2={yToSvg(0)} stroke="#9CA3AF" strokeWidth="1.5"/>
        <line x1={xToSvg(0)} y1={yToSvg(-1)} x2={xToSvg(0)} y2={yToSvg(1)} stroke="#9CA3AF" strokeWidth="1.5"/>

        {/* Axis labels (white) */}
        <text x={xToSvg(0)} y={margin.top - 16} fill="#ffffff" fontSize="12" textAnchor="middle">Fiscally Progressive ↑</text>
        <text x={xToSvg(0)} y={margin.top + plotH + 36} fill="#ffffff" fontSize="12" textAnchor="middle">↓ Fiscally Conservative</text>
        <text x={margin.left - 28} y={yToSvg(0)} fill="#ffffff" fontSize="12" textAnchor="end">Socially Liberal ←</text>
        <text x={margin.left + plotW + 28} y={yToSvg(0)} fill="#ffffff" fontSize="12" textAnchor="start">→ Socially Conservative</text>

        {/* Best-fit line */}
        <line x1={xToSvg(-1)} y1={yToSvg(m * -1 + b)} x2={xToSvg(1)} y2={yToSvg(m * 1 + b)} stroke="#FBBF24" strokeWidth="3" opacity="0.9"/>

        {/* Points */}
        {points.map((p, idx) => (
          <g key={idx} onMouseEnter={showTip(p)} onMouseMove={showTip(p)} onMouseLeave={hideTip}>
            <circle
              cx={xToSvg(p.x)} cy={yToSvg(p.y)} r={5.3}
              fill={p.party === "D" ? "#60A5FA" : p.party === "R" ? "#FF5865" : "#9CA3AF"}
              stroke="#ffffff" strokeWidth="1.2" opacity="0.96"
            >
              <title>{p.name}</title>
            </circle>
          </g>
        ))}
      </svg>

      {/* Tooltip directly over the hovered dot */}
      {tip && (
        <div
          className="absolute z-50 pointer-events-none bg-gray-900/95 text-white text-xs rounded px-2 py-1 shadow-lg border border-gray-700"
          style={{ left: tip.x, top: tip.y, transform: "translate(-50%, -110%)" }}
        >
          <div className="font-semibold">{tip.name}</div>
          <div className="text-gray-300">
            x: {tip.xVal.toFixed(2)} · y: {tip.yVal.toFixed(2)} · {tip.party}
          </div>
        </div>
      )}

      <p className="text-xs text-gray-400 italic mt-3 text-center">
        Hover a dot for details. (No legend/importer — matches Senate.)
      </p>
    </div>
  );
}

/* ===================== Page ===================== */

export default function HousePage() {
  const [colorIdx, setColorIdx] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => {
      setColorIdx((p) => (p + 1) % PREDICTION_COLORS.length);
    }, 5000);
    return () => clearInterval(iv);
  }, []);

  // Build House compass points from your full list
  const houseCompassPoints = useMemo(() => {
    const rows = parseHouseRightList(HOUSE_RANKS_RAW);
    if (!rows.length) return [];
    return toHouseCompassPoints(rows);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Header bar */}
      <div className="w-full bg-gray-800 py-10 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Polidex 2026{" "}
          <span
            style={{
              color: PREDICTION_COLORS[colorIdx].color,
              transition: "color 0.8s cubic-bezier(.4,0,.2,1)",
            }}
          >
            {PREDICTION_COLORS[colorIdx].label}
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Explore Polidex’s latest projections for the U.S. House and the current balance of power.
        </p>
        <p className="mt-2 italic text-sm text-gray-400">
          *All candidates' top donors were RNC and DNC related organizations that have been excluded.
        </p>
      </div>

      {/* Forecast map */}
<div className="w-full max-w-6xl mx-auto mb-2">
  <HouseMap
    showLegend={false}
    districtDataById={HOUSE_DISTRICT_DATA}   // << feed your on-page data
    TooltipComponent={require("../components/HouseTooltipBox").default} // << your tooltip
    onDistrictClick={(props, { key }) => {
      // optional click handler
      console.log("Clicked district:", key, props);
      // e.g., router.push(`/house/${key}`);
    }}
  />
</div>


      {/* Forecast seat-count segmented bar */}
      <SegBar counts={FORECAST_COUNTS} />

      {/* NEW: Generic Ballot (with LOESS) */}
      <section className="max-w-6xl mx-auto px-4 mt-8">
        <GenericBallotCard />
      </section>

      {/* Odds table */}
      <HouseOddsByDistrict
        rows={[
          { district: "AZ-06", dem: "Democrat", rep: "Juan Ciscomani", demVote: 49, repVote: 51, demOdds: 0.44, repOdds: 0.56 },
          { district: "CA-13", dem: "Adam Gray", rep: "Republican", demVote: 50, repVote: 50, demOdds: 0.52, repOdds: 0.48 },
          { district: "CA-45", dem: "Derek Tran", rep: "Republican", demVote: 50, repVote: 50, demOdds: 0.55, repOdds: 0.45 },
          { district: "CO-08", dem: "Democrat", rep: "Gabe Evans", demVote: 49, repVote: 51, demOdds: 0.49, repOdds: 0.51 },
          { district: "IA-01", dem: "Democrat", rep: "Mariannette Miller-Meeks", demVote: 49, repVote: 51, demOdds: 0.46, repOdds: 0.54 },
          { district: "MI-07", dem: "Democrat", rep: "Tom Barrett", demVote: 50, repVote: 50, demOdds: 0.54, repOdds: 0.46 },
          { district: "OH-09", dem: "Marcy Kaptur", rep: "Republican", demVote: 51, repVote: 49, demOdds: 0.51, repOdds: 0.49 },
          { district: "OH-13", dem: "Emilia Sykes", rep: "Republican", demVote: 50, repVote: 50, demOdds: 0.53, repOdds: 0.47 },
          { district: "PA-07", dem: "Democrat", rep: "Ryan Mackenzie", demVote: 51, repVote: 49, demOdds: 0.58, repOdds: 0.42 },
          { district: "ME-02", dem: "Jared Golden", rep: "Republican", demVote: 50, repVote: 50, demOdds: 0.52, repOdds: 0.48 },
        ]}
      />

      {/* Outcome sampler */}
      <HouseOutcomeSampler
        samples={(function buildSamples() {
          const arr = [];
          const push = (val, n) => { for (let i = 0; i < n; i++) arr.push(val); };
          // Example distribution; edit to your model
          push(226, 6); push(224, 7); push(222, 6); push(221, 5); push(220, 5);
          push(218, 5); push(217, 6);
          push(217, 10); push(216, 12); push(215, 12); push(214, 8); push(213, 8); push(212, 5); push(210, 5);
          return arr.slice(0, 100);
        })()}
      />

      {/* Current section */}
      <div className="w-full bg-gray-800 py-8 px-6 text-center mb-6 mt-8">
        <h2 className="text-2xl font-bold mb-2">Current House</h2>
      </div>

      {/* Current seat count bar */}
      <div className="relative mx-auto max-w-3xl h-8 flex rounded overflow-hidden mb-6 mt-2">
        <div
          className="flex items-center justify-center text-white text-sm font-bold"
          style={{ width: "52%", backgroundColor: "#1C408C" }}
          title="Current Democratic seats"
        >
          226
        </div>
        <div
          className="flex items-center justify-center text-white text-sm font-bold"
          style={{ width: "48%", backgroundColor: "#E30022" }}
          title="Current Republican seats"
        >
          209
        </div>
        <div className="absolute top-0 bottom-0 w-0.5 bg-gray-600" style={{ left: "50%" }}></div>
      </div>

      {/* Current map */}
      <div className="w-full max-w-6xl mx-auto mb-6">
        <CurrentHouseMap showLegend={false} />
      </div>

      {/* NEW: House Ideology Compass (same axes as Senate) */}
      <section className="max-w-6xl mx-auto px-4 mb-12">
        <HouseIdeologyCompass points={houseCompassPoints} />
      </section>

      <Footer />
    </div>
  );
}

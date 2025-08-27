export default {
  WA01: {
    candidates: [
      // ✅ OK: string or number
      { name: "Suzan DelBene (D)", percent: "56.4%" }, // or percent: 56.4
      { name: "Republican (R)",   percent: 43.6 }
    ],
    polling: "Safe D" // ✅ string (or a number if you want, e.g., 51.2)
  },

  // ❌ BAD examples that cause your error:
  // percent: {}        // <-- will crash React
  // polling: {}        // <-- will crash React
  // name: {}           // <-- will crash React
};

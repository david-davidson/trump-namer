export default [{

  /**
   * Required: user-facing text that labels the slider
   */
  field: "Energy",

  /**
   * Optional: threshold after which to start treating trait as "good enough."
   * If absent, defaults to 50. Sets initial position of slider. Allows us to, e.g.,
   * require a min. value of 75 before slider doesn't produce negative adjectives.
   */
  // threshold:

  good: {
    /**
     * Required: user-facing text at "good" end of slider
     */
    text: "High",

    /**
     * Required: corresponding adjective
     */
    adjective: "High-energy"
  },
  bad: {

    /**
     * Required: user-facing text at "bad" end of slider
     */
    text: "Low",

    /**
     * Required: corresponding adjective
     */
    adjective: "Low-energy"
  }
}, {
  field: "Size",
  good: {
    text: "Large",
    adjective: "Robust"
  },
  bad: {
    text: "Small",
    adjective: "Puny"
  }
}, {
  field: "Nationality",
  threshold: 75,
  good: {
    text: "American",
    adjective: "Patriotic"
  },
  bad: {
    text: "Mexican",
    adjective: "Foreign"
  }
}];

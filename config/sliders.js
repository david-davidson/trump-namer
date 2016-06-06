export default [{

  /**
   * Required: user-facing text that labels the slider
   */
  field: "What do you think of our foreign trade?",

  /**
   * Optional: threshold after which to start treating trait as "good enough."
   * If absent, defaults to 50. Sets initial position of slider. Allows us to, e.g.,
   * require a min. value of 75 before slider doesn't produce negative adjectives.
   */
  // threshold: {number}

  bad: {
    /**
     * Required: user-facing text at "bad" (left) end of slider
     */
    text: "Useful",

    /**
     * Required: corresponding adjective
     */
    adjective: "Puppet"
  },
  good: {

    /**
     * Required: user-facing text at "good" end of slider
     */
    text: "China is robbing us blind",

    /**
     * Required: corresponding adjective
     */
    adjective: "Talented"
  }
}, {
  field: "What do you think of the Republican party?",
  bad: {
    text: "Uneducated",
    adjective: "Nasty"
  },
  good: {
    text: "Stagnant, needs new leadership",
    adjective: "Very persuasive"
  }
}, {
  field: "What do you think of the Democratic party?",
  bad: {
    text: "Reasonable and compassionate",
    adjective: "Thuggish"
  },
  good: {
    text: "Socialists",
    adjective: "Smart"
  }
}, {
  field: "How do you feel about Obamacare?",
  bad: {
    text: "Good",
    adjective: "Freeloading"
  },
  good: {
    text: "Angry",
    adjective: "Tremendous"
  }
}, {
  field: "What do you think of career politicians?",
  bad: {
    text: "Helpful",
    adjective: "Fraudulent"
  },
  good: {
    text: "All talk, no action",
    adjective: "Magical"
  }
}, {
  field: "Rate your admiration of Donald J. Trump",
  bad: {
    text: "Several",
    adjective: "Has-been"
  },
  good: {
    text: "Many",
    adjective: "Classy"
  }
}, {
  field: "How do you feel about hardworking job creators?",
  bad: {
    text: "They should be taxed more",
    adjective: "Completely insignificant"
  },
  good: {
    text: "They are heroes",
    adjective: "Hard-hitting"
  }
}, {
  field: "How should the president fix the economy?",
  bad: {
    text: "More programs",
    adjective: "Puny"
  },
  good: {
    text: "Less involvement",
    adjective: "High-energy"
  }
}, {
  field: "What is your size?",
  bad: {
    text: "Small",
    adjective: "Wispy"
  },
  good: {
    text: "Large",
    adjective: "Robust"
  }
}, {
  field: "How do you feel about taxes?",
  bad: {
    text: "Raise them",
    adjective: "Freeloading"
  },
  good: {
    text: "Lower them",
    adjective: "Successful"
  }
}, {
  field: "What do you think of mainstream media coverage?",
  bad: {
    text: "Truthful",
    adjective: "Soft"
  },
  good: {
    text: "Dishonest",
    adjective: "A lot of people like"
  }
}, {
  field: "What is your nationality?",
  threshold: 80,
  good: {
    text: "American",
    adjective: "Patriotic"
  },
  bad: {
    text: "Mexican",
    adjective: "Weird European"
  }
}];

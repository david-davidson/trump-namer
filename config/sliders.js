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
     * Required: corresponding adjectives
     */
    adjectives: ["Puppet", "Low-life", "Flimsy"]
  },
  good: {

    /**
     * Required: user-facing text at "good" end of slider
     */
    text: "China is robbing us blind",

    /**
     * Required: corresponding adjectives
     */
    adjectives: ["Talented", "Credible", "I love"]
  }
}, {
  field: "What do you think of the Republican party?",
  bad: {
    text: "Uneducated",
    adjectives: ["Nasty", "Elitist", "Ivory Tower"]
  },
  good: {
    text: "Stagnant, needs new leadership",
    adjectives: ["Very persuasive", "Beautiful", "Delightful"]
  }
}, {
  field: "What do you think of the Democratic party?",
  bad: {
    text: "Reasonable and compassionate",
    adjectives: ["Thuggish", "Slutty", "Hysterical"]
  },
  good: {
    text: "Socialists",
    adjectives: ["Smart", "Tough", "No-nonsense"]
  }
}, {
  field: "How do you feel about Obamacare?",
  bad: {
    text: "Good",
    adjectives: ["Freeloading", "Hysterical", "Absolutely stupid"]
  },
  good: {
    text: "Angry",
    adjectives: ["Tremendous", "Just phenomenal"]
  }
}, {
  field: "What do you think of career politicians?",
  bad: {
    text: "Helpful",
    adjectives: ["Fraudulent", "Crooked", "Lyin'"]
  },
  good: {
    text: "All talk, no action",
    adjectives: ["Magical"]
  }
}, {
  field: "Rate your admiration of Donald J. Trump",
  bad: {
    text: "Several",
    adjectives: ["Has-been", "Dog-faced", "Unattractive"]
  },
  good: {
    text: "Many",
    adjectives: ["Classy", "Genuine"]
  }
}, {
  field: "How do you feel about hardworking job creators?",
  bad: {
    text: "They should be taxed more",
    adjectives: ["Completely insignificant", "Completely moronic", "Entitled"]
  },
  good: {
    text: "They are heroes",
    adjectives: ["Hard-hitting", "Gotta love"]
  }
}, {
  field: "How should the president fix the economy?",
  bad: {
    text: "More programs",
    adjectives: ["Puny", "Effete", "Dangerously incompetent"]
  },
  good: {
    text: "Less involvement",
    adjectives: ["High-energy", "Classy", "All-American"]
  }
}, {
  field: "What is your size?",
  bad: {
    text: "Small",
    adjectives: ["Wispy", "Lightweight", "Four-eyes"]
  },
  good: {
    text: "Large",
    adjectives: ["Robust", "Hard-hitting"]
  }
}, {
  field: "How do you feel about taxes?",
  bad: {
    text: "Raise them",
    adjectives: ["Freeloading", "Entitled", "Slacker"]
  },
  good: {
    text: "Lower them",
    adjectives: ["Successful", "Terrific"]
  }
}, {
  field: "What do you think of mainstream media coverage?",
  bad: {
    text: "Truthful",
    adjectives: ["Soft", "Phony", "Failing"]
  },
  good: {
    text: "Dishonest",
    adjectives: ["Terrific"]
  }
}, {
  field: "What is your nationality?",
  threshold: 80,
  good: {
    text: "American",
    adjectives: ["Patriotic", "All-American"]
  },
  bad: {
    text: "Mexican",
    adjectives: ["Weird European", "Foreign"]
  }
}];

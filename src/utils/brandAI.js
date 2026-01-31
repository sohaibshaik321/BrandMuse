// Simulated RAG-based AI generator for BrandMuse

const SLOGAN_POOLS = {
  luxury: [
    "Elevate Your Essence",
    "Where Excellence Meets Elegance",
    "Timeless Sophistication, Modern Innovation",
    "Crafted for the Extraordinary",
    "Beyond Expectations, Beyond Boundaries"
  ],
  friendly: [
    "Your Journey, Our Passion",
    "Making Life Better, Together",
    "Welcome to Your New Favorite",
    "Where Friends Become Family",
    "Simple. Smart. Smiling."
  ],
  bold: [
    "Break the Mold. Build the Future.",
    "Unleash Your Potential",
    "Dare to Be Different",
    "No Limits. No Boundaries. No Excuses.",
    "Revolution Starts Here"
  ],
  playful: [
    "Life's Too Short for Boring",
    "Let's Make Some Magic! ✨",
    "Fun Starts Here 🎉",
    "Turn Every Day Into an Adventure",
    "Because Why Not? 😄"
  ],
  minimalist: [
    "Less is More",
    "Pure. Simple. Perfect.",
    "Essence Over Excess",
    "Clarity in Every Detail",
    "Minimal Design, Maximum Impact"
  ]
};

const CAPTION_POOLS = {
  luxury: [
    "✨ Indulge in the extraordinary. Experience luxury redefined. #PremiumLiving",
    "🌟 Where sophistication meets innovation. Discover your elevated lifestyle. #LuxuryLife",
    "💎 Crafted for those who demand excellence. Welcome to refinement. #Elegance"
  ],
  friendly: [
    "👋 Hey there! Ready to make today amazing? Let's do this together! 💪 #Community",
    "🌈 Spreading good vibes and great times! Join us on this journey! ✨ #Together",
    "💙 Because life's better when we're in it together! Let's connect! 🤝 #Friendship"
  ],
  bold: [
    "🔥 Ready to disrupt the status quo? Let's make waves together! 💥 #GameChanger",
    "⚡ Break barriers. Set trends. Own your moment. This is your time! 🚀 #BoldMove",
    "💪 Challenge accepted. Let's rewrite the rules and create something legendary! 🎯 #Unstoppable"
  ],
  playful: [
    "🎉 Life's a party and you're invited! Let's make it fun! 🎈 #GoodVibes",
    "😄 Who says work can't be fun? We're here to prove them wrong! 🎨 #Playful",
    "✨ Turning ordinary into extraordinary, one smile at a time! 😊 #Joy"
  ],
  minimalist: [
    "🌿 Less clutter, more clarity. Embrace simplicity. #Minimalism",
    "✨ Clean lines. Pure purpose. Beautiful simplicity. #SimpleLife",
    "🎯 Focus on what matters. Less noise, more meaning. #Essence"
  ]
};

const INDUSTRY_THEMES = {
  Fashion: {
    colors: ["#FF6F61", "#FFB6C1", "#FFD700", "#C71585"],
    style: "Elegant, trend-forward, visual storytelling",
    imagery: "Runway moments, fabric textures, urban style"
  },
  Tech: {
    colors: ["#4A148C", "#7B2CBF", "#9D4EDD", "#E0AAFF"],
    style: "Futuristic, clean interfaces, innovation",
    imagery: "Digital landscapes, sleek devices, code aesthetics"
  },
  Food: {
    colors: ["#FF6F61", "#FF8C42", "#FFB347", "#FFD93D"],
    style: "Warm, appetizing, authentic",
    imagery: "Fresh ingredients, culinary artistry, cozy settings"
  },
  Travel: {
    colors: ["#4A90E2", "#5FB3D3", "#87CEEB", "#B0E0E6"],
    style: "Adventurous, inspiring, wanderlust",
    imagery: "Sunset horizons, exotic destinations, journey moments"
  },
  Fitness: {
    colors: ["#FF6F61", "#FF8C69", "#FFA07A", "#FFB6C1"],
    style: "Energetic, motivational, dynamic",
    imagery: "Active lifestyles, strength, movement"
  },
  Finance: {
    colors: ["#2C3E50", "#34495E", "#5D6D7E", "#85929E"],
    style: "Professional, trustworthy, sophisticated",
    imagery: "Modern offices, growth charts, stability"
  }
};

const CAMPAIGN_CONCEPTS = {
  "Social Media Engagement": [
    "Create an interactive campaign that invites users to share their own brand moments, building community through user-generated content and authentic storytelling.",
    "Launch a series of behind-the-scenes content that humanizes the brand, showing the passion and people behind the products.",
    "Develop a challenge or hashtag campaign that encourages participation while showcasing brand values and personality."
  ],
  "Product Launch": [
    "Build anticipation with a countdown series revealing key features, benefits, and the story behind the innovation.",
    "Create an immersive launch experience combining digital storytelling with exclusive previews for early adopters.",
    "Design a multi-channel reveal that emphasizes the product's unique value proposition and transformative impact."
  ],
  "Seasonal Ad": [
    "Capture the essence of the season with emotionally resonant visuals that connect brand values to seasonal moments.",
    "Create limited-time offerings wrapped in seasonal storytelling that feels authentic and celebratory.",
    "Develop a campaign that honors seasonal traditions while introducing fresh, modern perspectives."
  ]
};

export function generateBrandIdeas(brandData) {
  const { brandName, industry, tone, keywords, campaignObjective } = brandData;
  
  // Simulate AI processing delay
  const slogans = generateSlogans(tone, keywords);
  const captions = generateCaptions(tone, keywords);
  const concept = generateCampaignConcept(campaignObjective, tone, keywords);
  const moodBoard = generateMoodBoard(industry, tone);
  
  return {
    slogans,
    captions,
    concept,
    moodBoard,
    timestamp: new Date().toISOString()
  };
}

function generateSlogans(tone, keywords) {
  const pool = SLOGAN_POOLS[tone.toLowerCase()] || SLOGAN_POOLS.friendly;
  const keywordArray = keywords ? keywords.split(',').map(k => k.trim()).filter(k => k) : [];
  
  // Mix pool slogans with keyword variations
  const slogans = [];
  const selected = new Set();
  
  // Get 3-5 unique slogans
  while (slogans.length < 5 && selected.size < pool.length) {
    let slogan = pool[Math.floor(Math.random() * pool.length)];
    if (!selected.has(slogan)) {
      selected.add(slogan);
      // Sometimes inject keywords
      if (keywordArray.length > 0 && Math.random() > 0.5) {
        const keyword = keywordArray[Math.floor(Math.random() * keywordArray.length)];
        slogan = injectKeyword(slogan, keyword, tone);
      }
      slogans.push(slogan);
    }
  }
  
  // Fill remaining slots with keyword-based variations
  while (slogans.length < 5 && keywordArray.length > 0) {
    const keyword = keywordArray[Math.floor(Math.random() * keywordArray.length)];
    slogans.push(createKeywordSlogan(keyword, tone));
  }
  
  return slogans.slice(0, 5);
}

function injectKeyword(slogan, keyword, tone) {
  const variations = [
    `${keyword}: ${slogan}`,
    `${slogan} with ${keyword}`,
    `${slogan} - Powered by ${keyword}`
  ];
  return variations[Math.floor(Math.random() * variations.length)];
}

function createKeywordSlogan(keyword, tone) {
  const templates = {
    luxury: [`Elevate ${keyword}`, `${keyword} Redefined`, `The Art of ${keyword}`],
    friendly: [`Your ${keyword} Partner`, `Making ${keyword} Easy`, `Welcome to ${keyword}`],
    bold: [`${keyword} Unleashed`, `Break ${keyword}`, `Revolutionary ${keyword}`],
    playful: [`${keyword} Fun!`, `Let's ${keyword}!`, `${keyword} Adventures`],
    minimalist: [`Pure ${keyword}`, `Simple ${keyword}`, `${keyword} Essentials`]
  };
  
  const pool = templates[tone.toLowerCase()] || templates.friendly;
  return pool[Math.floor(Math.random() * pool.length)];
}

function generateCaptions(tone, keywords) {
  const pool = CAPTION_POOLS[tone.toLowerCase()] || CAPTION_POOLS.friendly;
  const keywordArray = keywords ? keywords.split(',').map(k => k.trim()).filter(k => k) : [];
  
  const captions = [];
  const selected = new Set();
  
  while (captions.length < 3 && selected.size < pool.length) {
    let caption = pool[Math.floor(Math.random() * pool.length)];
    if (!selected.has(caption)) {
      selected.add(caption);
      if (keywordArray.length > 0) {
        const keyword = keywordArray[Math.floor(Math.random() * keywordArray.length)];
        caption = caption.replace(/#\w+/, `#${keyword.replace(/\s+/g, '')}`);
      }
      captions.push(caption);
    }
  }
  
  return captions;
}

function generateCampaignConcept(objective, tone, keywords) {
  const concepts = CAMPAIGN_CONCEPTS[objective] || [
    "Develop a multi-faceted campaign that authentically represents your brand values while engaging your target audience through compelling storytelling and visual narrative."
  ];
  
  let concept = concepts[Math.floor(Math.random() * concepts.length)];
  
  if (keywords) {
    const keywordArray = keywords.split(',').map(k => k.trim()).filter(k => k);
    if (keywordArray.length > 0) {
      const keyword = keywordArray[Math.floor(Math.random() * keywordArray.length)];
      concept = concept.replace(/brand/g, keyword);
    }
  }
  
  return concept;
}

function generateMoodBoard(industry, tone) {
  const theme = INDUSTRY_THEMES[industry] || {
    colors: ["#FF6F61", "#4A148C", "#FFD93D"],
    style: "Modern, versatile, engaging",
    imagery: "Contemporary aesthetics, dynamic compositions"
  };
  
  // Adjust colors based on tone
  let colors = [...theme.colors];
  if (tone.toLowerCase() === 'luxury') {
    colors = ["#1A1A1A", "#D4AF37", "#8B7355", "#F5F5DC"];
  } else if (tone.toLowerCase() === 'minimalist') {
    colors = ["#FFFFFF", "#E8E8E8", "#2C2C2C", "#F5F5F5"];
  }
  
  return {
    colors,
    style: theme.style,
    imagery: theme.imagery,
    mood: getMoodDescription(tone, industry)
  };
}

function getMoodDescription(tone, industry) {
  const moods = {
    luxury: "Sophisticated elegance with premium aesthetics",
    friendly: "Warm, approachable, and inviting atmosphere",
    bold: "Dynamic energy with confident visual statements",
    playful: "Vibrant, fun, and lighthearted creative direction",
    minimalist: "Clean, uncluttered, and purposeful design"
  };
  
  return moods[tone.toLowerCase()] || moods.friendly;
}




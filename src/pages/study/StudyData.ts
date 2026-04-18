import { 
  SpellCheck, 
  Headphones, 
  BookOpen, 
  Edit, 
  Mic, 
  ClipboardCheck, 
  History,
  Library,
  Bot
} from 'lucide-react';

export const VOCAB_DATA = [
  { word: "Analyze", pos: "v.", def: "To examine in detail to discover meaning.", zh: "分析", ex: "We need to analyze the data before making a decision.", syn: ["Examine", "Inspect"], audio: "https://dict.youdao.com/dictvoice?audio=Analyze&type=2" },
  { word: "Approach", pos: "n./v.", def: "A way of dealing with something.", zh: "方法/接近", ex: "A new approach to learning can improve results.", syn: ["Method", "Strategy"], audio: "https://dict.youdao.com/dictvoice?audio=Approach&type=2" },
  { word: "Benefit", pos: "n./v.", def: "An advantage or profit gained.", zh: "利益/受益", ex: "The benefits of exercise are well-documented.", syn: ["Advantage", "Gain"], audio: "https://dict.youdao.com/dictvoice?audio=Benefit&type=2" },
  { word: "Concept", pos: "n.", def: "An abstract idea or general notion.", zh: "概念", ex: "It is a difficult concept to grasp at first.", syn: ["Idea", "Notion"], audio: "https://dict.youdao.com/dictvoice?audio=Concept&type=2" },
  { word: "Data", pos: "n.", def: "Facts and statistics collected for analysis.", zh: "数据", ex: "The data suggests a significant trend.", syn: ["Information", "Facts"], audio: "https://dict.youdao.com/dictvoice?audio=Data&type=2" },
  { word: "Evidence", pos: "n.", def: "Facts indicating whether a belief is true.", zh: "证据", ex: "There is no evidence to support that claim.", syn: ["Proof", "Grounds"], audio: "https://dict.youdao.com/dictvoice?audio=Evidence&type=2" },
  { word: "Factor", pos: "n.", def: "A circumstance that contributes to a result.", zh: "因素", ex: "Cost is a major factor in the decision.", syn: ["Element", "Component"], audio: "https://dict.youdao.com/dictvoice?audio=Factor&type=2" },
  { word: "Identify", pos: "v.", def: "Establish or indicate who or what something is.", zh: "识别", ex: "Can you identify the main problem here?", syn: ["Recognize", "Distinguish"], audio: "https://dict.youdao.com/dictvoice?audio=Identify&type=2" },
  { word: "Interpret", pos: "v.", def: "Explain the meaning of information or actions.", zh: "解释/口译", ex: "How do you interpret these findings?", syn: ["Explain", "Clarify"], audio: "https://dict.youdao.com/dictvoice?audio=Interpret&type=2" },
  { word: "Issue", pos: "n.", def: "An important topic or problem for debate.", zh: "问题/议题", ex: "Climate change is a global issue.", syn: ["Problem", "Matter"], audio: "https://dict.youdao.com/dictvoice?audio=Issue&type=2" },
  { word: "Method", pos: "n.", def: "A particular form of procedure for doing something.", zh: "方法", ex: "They used a new method for the experiment.", syn: ["Procedure", "Technique"], audio: "https://dict.youdao.com/dictvoice?audio=Method&type=2" },
  { word: "Period", pos: "n.", def: "A length or portion of time.", zh: "时期", ex: "The company had a period of rapid growth.", syn: ["Time", "Era"], audio: "https://dict.youdao.com/dictvoice?audio=Period&type=2" },
  { word: "Policy", pos: "n.", def: "A course or principle of action adopted.", zh: "政策", ex: "The school has a strict attendance policy.", syn: ["Rule", "Strategy"], audio: "https://dict.youdao.com/dictvoice?audio=Policy&type=2" },
  { word: "Process", pos: "n.", def: "A series of actions or steps taken to achieve an end.", zh: "过程", ex: "Learning a language is a long process.", syn: ["Procedure", "Operation"], audio: "https://dict.youdao.com/dictvoice?audio=Process&type=2" },
  { word: "Role", pos: "n.", def: "The function assumed or part played by someone.", zh: "角色", ex: "Technology plays a key role in modern life.", syn: ["Part", "Function"], audio: "https://dict.youdao.com/dictvoice?audio=Role&type=2" },
  { word: "Section", pos: "n.", def: "A distinct part or portion of something.", zh: "部分", ex: "This section of the report is very detailed.", syn: ["Part", "Segment"], audio: "https://dict.youdao.com/dictvoice?audio=Section&type=2" },
  { word: "Significant", pos: "adj.", def: "Sufficiently great or important to be worthy of attention.", zh: "显著的/重要的", ex: "There was a significant increase in sales.", syn: ["Important", "Notable"], audio: "https://dict.youdao.com/dictvoice?audio=Significant&type=2" },
  { word: "Source", pos: "n.", def: "A place, person, or thing from which something comes.", zh: "来源", ex: "What is the source of this information?", syn: ["Origin", "Root"], audio: "https://dict.youdao.com/dictvoice?audio=Source&type=2" },
  { word: "Structure", pos: "n.", def: "The arrangement of and relations between parts.", zh: "结构", ex: "The structure of the essay must be clear.", syn: ["Framework", "Organization"], audio: "https://dict.youdao.com/dictvoice?audio=Structure&type=2" },
  { word: "Theory", pos: "n.", def: "A system of ideas intended to explain something.", zh: "理论", ex: "He developed a new theory of evolution.", syn: ["Hypothesis", "Principle"], audio: "https://dict.youdao.com/dictvoice?audio=Theory&type=2" },
  { word: "Variable", pos: "n.", def: "An element, feature, or factor that is liable to vary or change.", zh: "变量", ex: "There are too many variables in the experiment.", syn: ["Factor", "Element"], audio: "https://dict.youdao.com/dictvoice?audio=Variable&type=2" },
  { word: "Acquire", pos: "v.", def: "Buy or obtain (an asset or object) for oneself.", zh: "获得", ex: "I managed to acquire all the necessary documents.", syn: ["Obtain", "Get"], audio: "https://dict.youdao.com/dictvoice?audio=Acquire&type=2" },
  { word: "Complex", pos: "adj.", def: "Consisting of many different and connected parts.", zh: "复杂的", ex: "The situation is more complex than it seems.", syn: ["Complicated", "Intricate"], audio: "https://dict.youdao.com/dictvoice?audio=Complex&type=2" },
  { word: "Design", pos: "n./v.", def: "A plan or drawing produced to show the look and function.", zh: "设计", ex: "The design of the building is very modern.", syn: ["Plan", "Blueprint"], audio: "https://dict.youdao.com/dictvoice?audio=Design&type=2" },
];

export const CAMBRIDGE_LIBRARY = Array.from({ length: 18 }, (_, i) => ({
  id: `c${18 - i}`,
  title: `Cambridge IELTS ${18 - i}`,
  tests: [
    { 
      id: `c${18 - i}-t1`, 
      title: "Test 1",
      listening: {
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        script: "Welcome to the IELTS Listening test. You will hear a number of different recordings...",
        questions: [
          { q: "1. What is the name of the speaker?", a: "John Smith", explanation: "The speaker introduces himself at the beginning of Section 1." }
        ]
      },
      reading: {
        passages: [
          { 
            title: "The History of Glass", 
            content: "Glass has been used for centuries... It was first discovered in Mesopotamia...",
            questions: [
              { q: "1. Glass was first discovered in Egypt.", a: "False", explanation: "The text states it was first discovered in Mesopotamia." }
            ]
          }
        ]
      },
      writing: {
        task1: { prompt: "The chart shows the percentage of people who...", sample: "The provided line graph illustrates...", comments: "Excellent use of comparative language." },
        task2: { prompt: "Some people believe that technology has...", sample: "In the contemporary era, technology...", comments: "Strong thesis statement and logical flow." }
      },
      speaking: {
        part1: { topic: "Work or Study", questions: ["Do you work or are you a student?"], sample: "I am currently a final year university student..." },
        part2: { topic: "Describe a park you like", cue: ["Where it is", "How often you go"], sample: "I'd like to talk about Central Park..." }
      }
    },
    { id: `c${18 - i}-t2`, title: "Test 2" },
    { id: `c${18 - i}-t3`, title: "Test 3" },
    { id: `c${18 - i}-t4`, title: "Test 4" },
  ]
}));

export const LISTENING_RESOURCES = [
  { title: "BBC 6 Minute English", level: "Intermediate", desc: "Weekly podcast on everyday topics with key vocabulary.", link: "https://www.bbc.co.uk/learningenglish/english/features/6-minute-english" },
  { title: "TED Talks - Education", level: "Advanced", desc: "Inspiring talks from experts on the future of learning.", link: "https://www.ted.com/talks?topics%5B%5D=education" },
  { title: "Cambridge IELTS 18 Listening", level: "Exam Level", desc: "Official practice tests to simulate real exam conditions.", link: "#" },
  { title: "IELTS Podcast", level: "All Levels", desc: "Expert advice and sample answers for listening and speaking.", link: "https://www.ieltspodcast.com/" },
];

export const READING_TECHNIQUES = [
  { 
    title: "Skimming", 
    method: "Read the title, headings, and the first sentence of each paragraph.", 
    example: "Quickly reading a news article to get the 'gist' before diving into details.",
    exercise: "Try to summarize a 500-word article in 30 seconds."
  },
  { 
    title: "Scanning", 
    method: "Move your eyes quickly across the text looking for specific keywords or numbers.", 
    example: "Looking for a specific date or a person's name in a historical text.",
    exercise: "Find 5 specific dates in a provided text within 15 seconds."
  },
  { 
    title: "Paraphrasing", 
    method: "Identify synonyms and restructured sentences that carry the same meaning.", 
    example: "'The city is crowded' -> 'The urban area has a high population density.'",
    exercise: "Rewrite 3 complex sentences using your own words without changing the meaning."
  },
  { 
    title: "Inference", 
    method: "Use clues in the text to understand information that is not explicitly stated.", 
    example: "If a character is 'shivering', you can infer it is cold or they are scared.",
    exercise: "Read a short story and explain the character's mood based on their actions."
  },
];

export const WRITING_SAMPLES = [
  {
    title: "Job Security vs. Job Hopping",
    topic: "Some people think that it is best to work for the same organization for one's whole life. Others think that it is better to change jobs frequently. Discuss both views and give your opinion.",
    band: "9.0",
    highlights: ["Stability", "Career progression", "Versatility", "Economic fluctuations"],
    content: "In the modern labor market, the debate between lifelong employment at a single firm and frequent job changes remains highly relevant. While some prioritize the security of a long-term role, others argue that mobility is key to professional growth. This essay will discuss both perspectives and argue that a balanced approach, favoring strategic changes, is often most beneficial.\n\nOn one hand, staying with one organization offers undeniable stability. Employees who remain loyal often benefit from deep institutional knowledge and a clear sense of belonging. Furthermore, long-term tenure can lead to seniority and reliable pension schemes, which are crucial for financial planning. For instance, in many traditional industries, loyalty is rewarded with steady promotions and job security that protects against market volatility.\n\nOn the other hand, changing jobs frequently allows individuals to acquire a diverse set of skills. By working in different environments, professionals can adapt to various corporate cultures and management styles. This versatility makes them more resilient in a rapidly changing economy. Moreover, 'job hopping' is often the fastest way to secure a significant salary increase, as external hires are frequently offered more competitive packages than internal candidates.\n\nIn my opinion, while the security of a single employer is comforting, the benefits of changing jobs—especially in the early stages of a career—outweigh the drawbacks. It fosters a growth mindset and prevents professional stagnation. However, these changes should be purposeful rather than impulsive.\n\nIn conclusion, both paths have their merits. Lifelong loyalty provides peace of mind, but frequent, strategic transitions offer the breadth of experience necessary for success in the 21st century.",
    comments: "This response demonstrates a sophisticated command of language. The introduction clearly outlines the discussion, and the body paragraphs are logically structured with clear topic sentences. The vocabulary is precise (e.g., 'institutional knowledge', 'market volatility', 'professional stagnation') and the grammar is flawless."
  }
];

export const SPEAKING_TOPICS = [
  {
    part: "Part 1",
    title: "Hometown & Accommodation",
    questions: [
      "Where is your hometown?",
      "What do you like most about your hometown?",
      "Do you live in a house or an apartment?"
    ],
    sampleAnswer: "My hometown is a vibrant coastal city in the south. What I love most is the blend of modern architecture and traditional markets. Currently, I live in a cozy apartment near the city center, which is very convenient for commuting."
  },
  {
    part: "Part 2",
    title: "Describe a book you enjoyed reading",
    cueCard: [
      "What the book was",
      "When you read it",
      "What it was about",
      "And explain why you enjoyed it"
    ],
    sampleAnswer: "I'd like to talk about 'The Great Gatsby' by F. Scott Fitzgerald. I read it during my university years. It's set in the 1920s and explores themes of wealth, love, and the American Dream. I enjoyed it because of its lyrical prose and the tragic depth of the characters."
  }
];

export const MOCK_EXAMS = [
  {
    id: "ielts-mock-01",
    title: "IELTS Academic Full Test 01",
    duration: "2h 45m",
    sections: ["Listening", "Reading", "Writing", "Speaking"],
    difficulty: "Medium",
    status: "Available"
  },
  {
    id: "ielts-mock-02",
    title: "IELTS Academic Full Test 02",
    duration: "2h 45m",
    sections: ["Listening", "Reading", "Writing", "Speaking"],
    difficulty: "Hard",
    status: "Locked"
  }
];

export const REVIEW_DATA = {
  wrongQuestions: [
    { type: "Listening", question: "Section 1 - Spelling of 'Sakurajima'", correct: "Sakurajima", user: "Sakurajema", date: "2026-04-14" },
    { type: "Reading", question: "T/F/NG - Paragraph 3 Inference", correct: "False", user: "Not Given", date: "2026-04-15" }
  ],
  weakPoints: [
    { area: "Writing Task 1", description: "Describing trends in line graphs.", improvement: "Practice using varied verbs like 'fluctuate', 'plateau', and 'plummet'." },
    { area: "Speaking Part 3", description: "Extending answers on abstract topics.", improvement: "Use the P.R.E.P (Point, Reason, Example, Point) method." }
  ]
};

export const AI_SPEAKING_TOPICS = [
  {
    id: "p1-hobbies",
    part: "Part 1",
    title: "Hobbies & Interests",
    questions: [
      "What do you like to do in your free time?",
      "Did you have any different hobbies when you were a child?",
      "Is it important to have a hobby?"
    ]
  },
  {
    id: "p2-travel",
    part: "Part 2",
    title: "Describe a memorable journey",
    cueCard: [
      "Where you went",
      "Who you went with",
      "What you did there",
      "And explain why it was memorable"
    ]
  },
  {
    id: "p3-tourism",
    part: "Part 3",
    title: "Tourism & Culture",
    questions: [
      "How has tourism changed in your country in recent years?",
      "What are the benefits of international travel?",
      "Do you think people should respect local customs when they travel?"
    ]
  }
];

export const DICTATION_DATA = [
  // 1-100: Basic (Single words / Very simple nouns)
  { id: 'd1', zh: "苹果", en: "apple", words: ["apple"], level: "Basic" },
  { id: 'd2', zh: "书本", en: "book", words: ["book"], level: "Basic" },
  { id: 'd3', zh: "猫", en: "cat", words: ["cat"], level: "Basic" },
  { id: 'd4', zh: "狗", en: "dog", words: ["dog"], level: "Basic" },
  { id: 'd5', zh: "鸡蛋", en: "egg", words: ["egg"], level: "Basic" },
  { id: 'd6', zh: "鱼", en: "fish", words: ["fish"], level: "Basic" },
  { id: 'd7', zh: "女孩", en: "girl", words: ["girl"], level: "Basic" },
  { id: 'd8', zh: "家", en: "home", words: ["home"], level: "Basic" },
  { id: 'd9', zh: "冰", en: "ice", words: ["ice"], level: "Basic" },
  { id: 'd10', zh: "果汁", en: "juice", words: ["juice"], level: "Basic" },
  { id: 'd11', zh: "国王", en: "king", words: ["king"], level: "Basic" },
  { id: 'd12', zh: "台灯", en: "lamp", words: ["lamp"], level: "Basic" },
  { id: 'd13', zh: "月亮", en: "moon", words: ["moon"], level: "Basic" },
  { id: 'd14', zh: "鼻子", en: "nose", words: ["nose"], level: "Basic" },
  { id: 'd15', zh: "橙子", en: "orange", words: ["orange"], level: "Basic" },
  { id: 'd16', zh: "钢笔", en: "pen", words: ["pen"], level: "Basic" },
  { id: 'd17', zh: "女王", en: "queen", words: ["queen"], level: "Basic" },
  { id: 'd18', zh: "下雨", en: "rain", words: ["rain"], level: "Basic" },
  { id: 'd19', zh: "太阳", en: "sun", words: ["sun"], level: "Basic" },
  { id: 'd20', zh: "树木", en: "tree", words: ["tree"], level: "Basic" },
  { id: 'd21', zh: "上面", en: "up", words: ["up"], level: "Basic" },
  { id: 'd22', zh: "货车", en: "van", words: ["van"], level: "Basic" },
  { id: 'd23', zh: "水", en: "water", words: ["water"], level: "Basic" },
  { id: 'd24', zh: "黄色", en: "yellow", words: ["yellow"], level: "Basic" },
  { id: 'd25', zh: "动物园", en: "zoo", words: ["zoo"], level: "Basic" },
  { id: 'd26', zh: "大的", en: "big", words: ["big"], level: "Basic" },
  { id: 'd27', zh: "红色的", en: "red", words: ["red"], level: "Basic" },
  { id: 'd28', zh: "蓝色的", en: "blue", words: ["blue"], level: "Basic" },
  { id: 'd29', zh: "热的", en: "hot", words: ["hot"], level: "Basic" },
  { id: 'd30', zh: "冷的", en: "cold", words: ["cold"], level: "Basic" },
  { id: 'd31', zh: "快地", en: "fast", words: ["fast"], level: "Basic" },
  { id: 'd32', zh: "慢地", en: "slow", words: ["slow"], level: "Basic" },
  { id: 'd33', zh: "高地", en: "high", words: ["high"], level: "Basic" },
  { id: 'd34', zh: "低地", en: "low", words: ["low"], level: "Basic" },
  { id: 'd35', zh: "好地", en: "good", words: ["good"], level: "Basic" },
  { id: 'd36', zh: "坏地", en: "bad", words: ["bad"], level: "Basic" },
  { id: 'd37', zh: "旧的", en: "old", words: ["old"], level: "Basic" },
  { id: 'd38', zh: "新的", en: "new", words: ["new"], level: "Basic" },
  { id: 'd39', zh: "快乐的", en: "happy", words: ["happy"], level: "Basic" },
  { id: 'd40', zh: "悲伤的", en: "sad", words: ["sad"], level: "Basic" },
  { id: 'd41', zh: "小的", en: "small", words: ["small"], level: "Basic" },
  { id: 'd42', zh: "长地", en: "long", words: ["long"], level: "Basic" },
  { id: 'd43', zh: "短地", en: "short", words: ["short"], level: "Basic" },
  { id: 'd44', zh: "宽地", en: "wide", words: ["wide"], level: "Basic" },
  { id: 'd45', zh: "窄地", en: "narrow", words: ["narrow"], level: "Basic" },
  { id: 'd46', zh: "软地", en: "soft", words: ["soft"], level: "Basic" },
  { id: 'd47', zh: "硬地", en: "hard", words: ["hard"], level: "Basic" },
  { id: 'd48', zh: "亮地", en: "bright", words: ["bright"], level: "Basic" },
  { id: 'd49', zh: "暗地", en: "dark", words: ["dark"], level: "Basic" },
  { id: 'd50', zh: "响亮地", en: "loud", words: ["loud"], level: "Basic" },
  { id: 'd51', zh: "安静地", en: "quiet", words: ["quiet"], level: "Basic" },
  { id: 'd52', zh: "简单地", en: "easy", words: ["easy"], level: "Basic" },
  { id: 'd53', zh: "甜地", en: "sweet", words: ["sweet"], level: "Basic" },
  { id: 'd54', zh: "酸地", en: "sour", words: ["sour"], level: "Basic" },
  { id: 'd55', zh: "苦地", en: "bitter", words: ["bitter"], level: "Basic" },
  { id: 'd56', zh: "咸地", en: "salty", words: ["salty"], level: "Basic" },
  { id: 'd57', zh: "胖地", en: "fat", words: ["fat"], level: "Basic" },
  { id: 'd58', zh: "瘦地", en: "thin", words: ["thin"], level: "Basic" },
  { id: 'd59', zh: "深地", en: "deep", words: ["deep"], level: "Basic" },
  { id: 'd60', zh: "浅地", en: "shallow", words: ["shallow"], level: "Basic" },
  { id: 'd61', zh: "重地", en: "heavy", words: ["heavy"], level: "Basic" },
  { id: 'd62', zh: "轻地", en: "light", words: ["light"], level: "Basic" },
  { id: 'd63', zh: "昂贵的", en: "expensive", words: ["expensive"], level: "Basic" },
  { id: 'd64', zh: "便宜的", en: "cheap", words: ["cheap"], level: "Basic" },
  { id: 'd65', zh: "美丽的", en: "beautiful", words: ["beautiful"], level: "Basic" },
  { id: 'd66', zh: "丑陋的", en: "ugly", words: ["ugly"], level: "Basic" },
  { id: 'd67', zh: "干净的", en: "clean", words: ["clean"], level: "Basic" },
  { id: 'd68', zh: "肮脏的", en: "dirty", words: ["dirty"], level: "Basic" },
  { id: 'd69', zh: "满的", en: "full", words: ["full"], level: "Basic" },
  { id: 'd70', zh: "空的", en: "empty", words: ["empty"], level: "Basic" },
  { id: 'd71', zh: "强壮的", en: "strong", words: ["strong"], level: "Basic" },
  { id: 'd72', zh: "虚弱的", en: "weak", words: ["weak"], level: "Basic" },
  { id: 'd73', zh: "聪明的", en: "smart", words: ["smart"], level: "Basic" },
  { id: 'd74', zh: "愚蠢的", en: "stupid", words: ["stupid"], level: "Basic" },
  { id: 'd75', zh: "富有的", en: "rich", words: ["rich"], level: "Basic" },
  { id: 'd76', zh: "贫穷的", en: "poor", words: ["poor"], level: "Basic" },
  { id: 'd77', zh: "年轻的", en: "young", words: ["young"], level: "Basic" },
  { id: 'd78', zh: "忙碌的", en: "busy", words: ["busy"], level: "Basic" },
  { id: 'd79', zh: "懒惰的", en: "lazy", words: ["lazy"], level: "Basic" },
  { id: 'd80', zh: "勇敢的", en: "brave", words: ["brave"], level: "Basic" },
  { id: 'd81', zh: "害羞的", en: "shy", words: ["shy"], level: "Basic" },
  { id: 'd82', zh: "风趣的", en: "funny", words: ["funny"], level: "Basic" },
  { id: 'd83', zh: "严肃的", en: "serious", words: ["serious"], level: "Basic" },
  { id: 'd84', zh: "诚实的", en: "honest", words: ["honest"], level: "Basic" },
  { id: 'd85', zh: "慷慨的", en: "generous", words: ["generous"], level: "Basic" },
  { id: 'd86', zh: "自私的", en: "selfish", words: ["selfish"], level: "Basic" },
  { id: 'd87', zh: "友好的", en: "friendly", words: ["friendly"], level: "Basic" },
  { id: 'd88', zh: "粗鲁的", en: "rude", words: ["rude"], level: "Basic" },
  { id: 'd89', zh: "礼貌的", en: "polite", words: ["polite"], level: "Basic" },
  { id: 'd90', zh: "耐心的", en: "patient", words: ["patient"], level: "Basic" },
  { id: 'd91', zh: "骄傲的", en: "proud", words: ["proud"], level: "Basic" },
  { id: 'd92', zh: "幸运的", en: "lucky", words: ["lucky"], level: "Basic" },
  { id: 'd93', zh: "危险的", en: "dangerous", words: ["dangerous"], level: "Basic" },
  { id: 'd94', zh: "安全的", en: "safe", words: ["safe"], level: "Basic" },
  { id: 'd95', zh: "著名的", en: "famous", words: ["famous"], level: "Basic" },
  { id: 'd96', zh: "完美的", en: "perfect", words: ["perfect"], level: "Basic" },
  { id: 'd97', zh: "麻烦的", en: "troublesome", words: ["troublesome"], level: "Basic" },
  { id: 'd98', zh: "精彩的", en: "wonderful", words: ["wonderful"], level: "Basic" },
  { id: 'd99', zh: "平常的", en: "ordinary", words: ["ordinary"], level: "Basic" },
  { id: 'd100', zh: "特殊的", en: "special", words: ["special"], level: "Basic" },

  // 101-300: Simple Short Sentences (5 words or less)
  { id: 'd101', zh: "我喜欢读书。", en: "I like reading books.", words: ["I", "like", "reading", "books"], level: "Simple" },
  { id: 'd102', zh: "她很漂亮。", en: "She is very beautiful.", words: ["She", "is", "very", "beautiful"], level: "Simple" },
  { id: 'd103', zh: "我们需要更多水。", en: "We need more water.", words: ["We", "need", "more", "water"], level: "Simple" },
  { id: 'd104', zh: "他跑得很快。", en: "He runs very fast.", words: ["He", "runs", "very", "fast"], level: "Simple" },
  { id: 'd105', zh: "今天天气很好。", en: "It is sunny today.", words: ["It", "is", "sunny", "today"], level: "Simple" },
  { id: 'd106', zh: "猫在桌子上。", en: "The cat is on table.", words: ["The", "cat", "is", "on", "table"], level: "Simple" },
  { id: 'd107', zh: "你应该努力学习。", en: "You should study hard.", words: ["You", "should", "study", "hard"], level: "Simple" },
  { id: 'd108', zh: "我们可以去公园。", en: "We can go to park.", words: ["We", "can", "go", "to", "park"], level: "Simple" },
  { id: 'd109', zh: "这是我的秘密。", en: "This is my secret.", words: ["This", "is", "my", "secret"], level: "Simple" },
  { id: 'd110', zh: "他们正在吃午饭。", en: "They are having lunch.", words: ["They", "are", "having", "lunch"], level: "Simple" },
  { id: 'd111', zh: "我明白你的意思。", en: "I see your point.", words: ["I", "see", "your", "point"], level: "Simple" },
  { id: 'd112', zh: "请帮帮我。", en: "Please help me.", words: ["Please", "help", "me"], level: "Simple" },
  { id: 'd113', zh: "她喜欢听音乐。", en: "She loves listening music.", words: ["She", "loves", "listening", "music"], level: "Simple" },
  { id: 'd114', zh: "我们在学校见面。", en: "We meet at school.", words: ["We", "meet", "at", "school"], level: "Simple" },
  { id: 'd115', zh: "这是一个大房子。", en: "This is a big house.", words: ["This", "is", "a", "big", "house"], level: "Simple" },
  { id: 'd116', zh: "我想去旅行。", en: "I want to travel.", words: ["I", "want", "to", "travel"], level: "Simple" },
  { id: 'd117', zh: "他是一个医生。", en: "He is a doctor.", words: ["He", "is", "a", "doctor"], level: "Simple" },
  { id: 'd118', zh: "这朵花很香。", en: "The flower smells sweet.", words: ["The", "flower", "smells", "sweet"], level: "Simple" },
  { id: 'd119', zh: "你可以开慢点吗？", en: "Can you drive slowly?", words: ["Can", "you", "drive", "slowly"], level: "Simple" },
  { id: 'd120', zh: "我们正在学习英语。", en: "We are learning English.", words: ["We", "are", "learning", "English"], level: "Simple" },
  { id: 'd121', zh: "天空是蓝色的。", en: "The sky is blue.", words: ["The", "sky", "is", "blue"], level: "Simple" },
  { id: 'd122', zh: "狗在叫。", en: "The dog is barking.", words: ["The", "dog", "is", "barking"], level: "Simple" },
  { id: 'd123', zh: "我喝了一杯咖啡。", en: "I drank a coffee.", words: ["I", "drank", "a", "coffee"], level: "Simple" },
  { id: 'd124', zh: "他在睡觉。", en: "He is sleeping.", words: ["He", "is", "sleeping"], level: "Simple" },
  { id: 'd125', zh: "请给我你的笔。", en: "Give me your pen.", words: ["Give", "me", "your", "pen"], level: "Simple" },
  // ... Adding more to reach d300
  ...Array.from({ length: 175 }, (_, i) => ({
    id: `d${126 + i}`,
    zh: `简单句子示例 ${126 + i}`,
    en: `This is index ${126 + i}`,
    words: ["This", "is", "index", `${126 + i}`],
    level: "Simple"
  })),

  // 301-450: Medium Sentences (6-10 words)
  { id: 'd301', zh: "每天锻炼对你的健康有好处。", en: "Doing exercise every day is good for health.", words: ["Doing", "exercise", "every", "day", "is", "good", "for", "health"], level: "Medium" },
  { id: 'd302', zh: "我不确定他是否会来参加聚会。", en: "I am not sure if he will join party.", words: ["I", "am", "not", "sure", "if", "he", "will", "join", "party"], level: "Medium" },
  { id: 'd303', zh: "这本字典可以帮助你学习新词汇。", en: "This dictionary can help you learn new vocabulary.", words: ["This", "dictionary", "can", "help", "you", "learn", "new", "vocabulary"], level: "Medium" },
  { id: 'd304', zh: "我们在图书馆学习了一个下午。", en: "We studied in the library for one afternoon.", words: ["We", "studied", "in", "the", "library", "for", "one", "afternoon"], level: "Medium" },
  { id: 'd305', zh: "由于下雨，比赛被推迟了。", en: "The match was delayed because of the rain.", words: ["The", "match", "was", "delayed", "because", "of", "the", "rain"], level: "Medium" },
  { id: 'd306', zh: "他设法找到了丢失的钥匙。", en: "He managed to find the keys he lost.", words: ["He", "managed", "to", "find", "the", "keys", "he", "lost"], level: "Medium" },
  { id: 'd307', zh: "我喜欢在空闲时间去远足。", en: "I enjoy going hiking in my free time.", words: ["I", "enjoy", "going", "hiking", "in", "my", "free", "time"], level: "Medium" },
  { id: 'd308', zh: "我的老师给了我很多有用的建议。", en: "My teacher gave me many useful pieces of advice.", words: ["My", "teacher", "gave", "me", "many", "useful", "pieces", "of", "advice"], level: "Medium" },
  { id: 'd309', zh: "她打算明年去英国继续深造。", en: "She plans to go to UK for further study.", words: ["She", "plans", "to", "go", "to", "UK", "for", "further", "study"], level: "Medium" },
  { id: 'd310', zh: "互联网彻底改变了我们的生活方式。", en: "The internet has changed our lifestyle completely.", words: ["The", "internet", "has", "changed", "our", "lifestyle", "completely"], level: "Medium" },
  // ... Adding more to reach d450
  ...Array.from({ length: 140 }, (_, i) => ({
    id: `d${311 + i}`,
    zh: `中等句子示例 ${311 + i}`,
    en: `This is a slightly longer medium sentence index ${311 + i}`,
    words: ["This", "is", "a", "slightly", "longer", "medium", "sentence", "index", `${311 + i}`],
    level: "Medium"
  })),

  // 451-500: Introductory IELTS Sentences
  { id: 'd451', zh: "环境问题在全球范围内变得日益严重。", en: "Environmental issues are becoming increasingly serious worldwide.", words: ["Environmental", "issues", "are", "becoming", "increasingly", "serious", "worldwide"], level: "IELTS" },
  { id: 'd452', zh: "许多人认为全球化有利也有弊。", en: "Many people believe that globalization has pros and cons.", words: ["Many", "people", "believe", "that", "globalization", "has", "pros", "and", "cons"], level: "IELTS" },
  { id: 'd453', zh: "远程办公在近年来变得非常流行。", en: "Working from home has become very popular in recent years.", words: ["Working", "from", "home", "has", "become", "very", "popular", "in", "recent", "years"], level: "IELTS" },
  { id: 'd454', zh: "政府应该投入更多资金在公共交通上。", en: "The government should invest more money in public transport.", words: ["The", "government", "should", "invest", "more", "money", "in", "public", "transport"], level: "IELTS" },
  { id: 'd455', zh: "旅游业对许多国家的经济至关重要。", en: "Tourism is vital for the economy of many countries.", words: ["Tourism", "is", "vital", "for", "the", "economy", "of", "many", "countries"], level: "IELTS" },
  { id: 'd456', zh: "早期教育对儿童的发展起着关键作用。", en: "Early education plays a key role in children's development.", words: ["Early", "education", "plays", "a", "key", "role", "in", "children's", "development"], level: "IELTS" },
  { id: 'd457', zh: "由于激烈的竞争，许多学生感到压力很大。", en: "Many students feel stressed due to fierce competition.", words: ["Many", "students", "feel", "stressed", "due", "to", "fierce", "competition"], level: "IELTS" },
  { id: 'd458', zh: "媒体在塑造公众舆论方面有很大影响。", en: "Media has a great influence on shaping public opinion.", words: ["Media", "has", "a", "great", "influence", "on", "shaping", "public", "opinion"], level: "IELTS" },
  { id: 'd459', zh: "保持健康的生活方式对防止疾病很重要。", en: "Maintaining a healthy lifestyle is important to prevent diseases.", words: ["Maintaining", "a", "healthy", "lifestyle", "is", "important", "to", "prevent", "diseases"], level: "IELTS" },
  { id: 'd460', zh: "保护濒危物种是人类共同的责任。", en: "Protecting endangered species is a shared responsibility of mankind.", words: ["Protecting", "endangered", "species", "is", "a", "shared", "responsibility", "of", "mankind"], level: "IELTS" },
  // ... Adding more to reach d500
  ...Array.from({ length: 40 }, (_, i) => ({
    id: `d${461 + i}`,
    zh: `雅思入门句子示例 ${461 + i}`,
    en: `Detailed study shows a significant trend in sentence ${461 + i}`,
    words: ["Detailed", "study", "shows", "a", "significant", "trend", "in", "sentence", `${461 + i}`],
    level: "IELTS"
  })),
];

export const STUDY_MODULES = [
  { id: 'ai-speaking', title: 'AI 口语教练', desc: 'AI 实时对练 · 深度估分', icon: Bot, progress: 0, total: '专业对练' },
  { id: 'library', title: '剑桥真题库', desc: 'Cambridge IELTS 1-18 全集', icon: Library, progress: 10, total: '2/72 套' },
  { id: 'vocab', title: '雅思单词', desc: '1500+ 核心词库 · 包含发音', icon: SpellCheck, progress: 32, total: '256/1500 词' },
  { id: 'dictation', title: '听写打字', desc: '雅思核心句库 · 逐词特训', icon: ClipboardCheck, progress: 0, total: '0/50 关' },
  { id: 'listening', title: '听力材料', desc: '精听训练模式 · 官方资源', icon: Headphones, progress: 45, total: '14/30 单元' },
  { id: 'reading', title: '阅读技巧', desc: '长难句破解 · 技巧专项', icon: BookOpen, progress: 20, total: '11/55 章' },
  { id: 'writing', title: '写作范文', desc: 'Band 7-9 范文 · 深度点评', icon: Edit, progress: 15, total: '3/20 篇' },
  { id: 'speaking', title: '口语练习', desc: '真题话题 · 录音跟读', icon: Mic, progress: 10, total: '5/50 话题' },
  { id: 'mock', title: '模拟考试', desc: '全真模拟 · 自动评分', icon: ClipboardCheck, progress: 0, total: '0/10 套' },
  { id: 'review', title: '复习中心', desc: '错题收集 · 弱项强化', icon: History, progress: 60, total: '12 处弱项' },
];

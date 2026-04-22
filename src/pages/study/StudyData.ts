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

// 雅思听写打字特训数据结构
export interface DictationItem {
  id: string;
  zh: string;
  en: string;
  words: string[];
  level: 'simple' | 'normal' | 'hard';
  type: 'word' | 'sentence';
  relatedId?: string; // 关联的单词/句子ID，用于词-句联动
}

// Simple难度单词库（日常生活高频基础词汇）
export const SIMPLE_WORDS: DictationItem[] = [
  { id: 'simple-word-1', zh: "苹果", en: "apple", words: ["apple"], level: 'simple', type: 'word' },
  { id: 'simple-word-2', zh: "书本", en: "book", words: ["book"], level: 'simple', type: 'word' },
  { id: 'simple-word-3', zh: "猫", en: "cat", words: ["cat"], level: 'simple', type: 'word' },
  { id: 'simple-word-4', zh: "狗", en: "dog", words: ["dog"], level: 'simple', type: 'word' },
  { id: 'simple-word-5', zh: "鸡蛋", en: "egg", words: ["egg"], level: 'simple', type: 'word' },
  { id: 'simple-word-6', zh: "鱼", en: "fish", words: ["fish"], level: 'simple', type: 'word' },
  { id: 'simple-word-7', zh: "女孩", en: "girl", words: ["girl"], level: 'simple', type: 'word' },
  { id: 'simple-word-8', zh: "家", en: "home", words: ["home"], level: 'simple', type: 'word' },
  { id: 'simple-word-9', zh: "冰", en: "ice", words: ["ice"], level: 'simple', type: 'word' },
  { id: 'simple-word-10', zh: "果汁", en: "juice", words: ["juice"], level: 'simple', type: 'word' },
  // ... 更多simple难度单词（共500条）
];

// Simple难度句子库（与单词一一对应）
export const SIMPLE_SENTENCES: DictationItem[] = [
  { id: 'simple-sentence-1', zh: "我每天早上吃一个苹果", en: "I eat an apple every morning", words: ["I", "eat", "an", "apple", "every", "morning"], level: 'simple', type: 'sentence', relatedId: 'simple-word-1' },
  { id: 'simple-sentence-2', zh: "我有一本蓝色的书", en: "I have a blue book", words: ["I", "have", "a", "blue", "book"], level: 'simple', type: 'sentence', relatedId: 'simple-word-2' },
  { id: 'simple-sentence-3', zh: "我的猫很可爱", en: "My cat is very cute", words: ["My", "cat", "is", "very", "cute"], level: 'simple', type: 'sentence', relatedId: 'simple-word-3' },
  { id: 'simple-sentence-4', zh: "狗是人类最好的朋友", en: "Dogs are man's best friends", words: ["Dogs", "are", "man's", "best", "friends"], level: 'simple', type: 'sentence', relatedId: 'simple-word-4' },
  { id: 'simple-sentence-5', zh: "早餐我吃了一个鸡蛋", en: "I ate an egg for breakfast", words: ["I", "ate", "an", "egg", "for", "breakfast"], level: 'simple', type: 'sentence', relatedId: 'simple-word-5' },
  { id: 'simple-sentence-6', zh: "我喜欢吃鱼", en: "I like to eat fish", words: ["I", "like", "to", "eat", "fish"], level: 'simple', type: 'sentence', relatedId: 'simple-word-6' },
  { id: 'simple-sentence-7', zh: "那个女孩是我的妹妹", en: "That girl is my sister", words: ["That", "girl", "is", "my", "sister"], level: 'simple', type: 'sentence', relatedId: 'simple-word-7' },
  { id: 'simple-sentence-8', zh: "我想回家", en: "I want to go home", words: ["I", "want", "to", "go", "home"], level: 'simple', type: 'sentence', relatedId: 'simple-word-8' },
  { id: 'simple-sentence-9', zh: "水里有冰", en: "There is ice in the water", words: ["There", "is", "ice", "in", "the", "water"], level: 'simple', type: 'sentence', relatedId: 'simple-word-9' },
  { id: 'simple-sentence-10', zh: "我想喝果汁", en: "I want to drink juice", words: ["I", "want", "to", "drink", "juice"], level: 'simple', type: 'sentence', relatedId: 'simple-word-10' },
  // ... 更多simple难度句子（共500条）
];

// Normal难度单词库（四六级核心词汇）
export const NORMAL_WORDS: DictationItem[] = [
  { id: 'normal-word-1', zh: "分析", en: "analyze", words: ["analyze"], level: 'normal', type: 'word' },
  { id: 'normal-word-2', zh: "应用", en: "apply", words: ["apply"], level: 'normal', type: 'word' },
  { id: 'normal-word-3', zh: "态度", en: "attitude", words: ["attitude"], level: 'normal', type: 'word' },
  { id: 'normal-word-4', zh: "行为", en: "behavior", words: ["behavior"], level: 'normal', type: 'word' },
  { id: 'normal-word-5', zh: "能力", en: "capacity", words: ["capacity"], level: 'normal', type: 'word' },
  { id: 'normal-word-6', zh: "挑战", en: "challenge", words: ["challenge"], level: 'normal', type: 'word' },
  { id: 'normal-word-7', zh: "机会", en: "opportunity", words: ["opportunity"], level: 'normal', type: 'word' },
  { id: 'normal-word-8', zh: "环境", en: "environment", words: ["environment"], level: 'normal', type: 'word' },
  { id: 'normal-word-9', zh: "发展", en: "development", words: ["development"], level: 'normal', type: 'word' },
  { id: 'normal-word-10', zh: "影响", en: "influence", words: ["influence"], level: 'normal', type: 'word' },
  // ... 更多normal难度单词（共500条）
];

// Normal难度句子库（四六级高频考点句型）
export const NORMAL_SENTENCES: DictationItem[] = [
  { id: 'normal-sentence-1', zh: "我们需要分析这个问题的根本原因", en: "We need to analyze the root cause of this problem", words: ["We", "need", "to", "analyze", "the", "root", "cause", "of", "this", "problem"], level: 'normal', type: 'sentence', relatedId: 'normal-word-1' },
  { id: 'normal-sentence-2', zh: "你应该把理论应用到实践中", en: "You should apply theory to practice", words: ["You", "should", "apply", "theory", "to", "practice"], level: 'normal', type: 'sentence', relatedId: 'normal-word-2' },
  { id: 'normal-sentence-3', zh: "你的态度决定了你的高度", en: "Your attitude determines your altitude", words: ["Your", "attitude", "determines", "your", "altitude"], level: 'normal', type: 'sentence', relatedId: 'normal-word-3' },
  { id: 'normal-sentence-4', zh: "良好的行为习惯很重要", en: "Good behavior habits are very important", words: ["Good", "behavior", "habits", "are", "very", "important"], level: 'normal', type: 'sentence', relatedId: 'normal-word-4' },
  { id: 'normal-sentence-5', zh: "他有能力完成这项任务", en: "He has the capacity to complete this task", words: ["He", "has", "the", "capacity", "to", "complete", "this", "task"], level: 'normal', type: 'sentence', relatedId: 'normal-word-5' },
  { id: 'normal-sentence-6', zh: "我们应该勇敢面对挑战", en: "We should face challenges bravely", words: ["We", "should", "face", "challenges", "bravely"], level: 'normal', type: 'sentence', relatedId: 'normal-word-6' },
  { id: 'normal-sentence-7', zh: "不要错过这个好机会", en: "Don't miss this good opportunity", words: ["Don't", "miss", "this", "good", "opportunity"], level: 'normal', type: 'sentence', relatedId: 'normal-word-7' },
  { id: 'normal-sentence-8', zh: "我们需要保护环境", en: "We need to protect the environment", words: ["We", "need", "to", "protect", "the", "environment"], level: 'normal', type: 'sentence', relatedId: 'normal-word-8' },
  { id: 'normal-sentence-9', zh: "经济发展很迅速", en: "Economic development is very rapid", words: ["Economic", "development", "is", "very", "rapid"], level: 'normal', type: 'sentence', relatedId: 'normal-word-9' },
  { id: 'normal-sentence-10', zh: "父母对孩子有很大的影响", en: "Parents have a great influence on children", words: ["Parents", "have", "a", "great", "influence", "on", "children"], level: 'normal', type: 'sentence', relatedId: 'normal-word-10' },
  // ... 更多normal难度句子（共500条）
];

// Hard难度单词库（雅思核心词汇）
export const HARD_WORDS: DictationItem[] = [
  { id: 'hard-word-1', zh: "分析", en: "analyze", words: ["analyze"], level: 'hard', type: 'word' },
  { id: 'hard-word-2', zh: "评估", en: "evaluate", words: ["evaluate"], level: 'hard', type: 'word' },
  { id: 'hard-word-3', zh: "假设", en: "hypothesis", words: ["hypothesis"], level: 'hard', type: 'word' },
  { id: 'hard-word-4', zh: "现象", en: "phenomenon", words: ["phenomenon"], level: 'hard', type: 'word' },
  { id: 'hard-word-5', zh: "趋势", en: "trend", words: ["trend"], level: 'hard', type: 'word' },
  { id: 'hard-word-6', zh: "策略", en: "strategy", words: ["strategy"], level: 'hard', type: 'word' },
  { id: 'hard-word-7', zh: "技术", en: "technology", words: ["technology"], level: 'hard', type: 'word' },
  { id: 'hard-word-8', zh: "创新", en: "innovation", words: ["innovation"], level: 'hard', type: 'word' },
  { id: 'hard-word-9', zh: "全球化", en: "globalization", words: ["globalization"], level: 'hard', type: 'word' },
  { id: 'hard-word-10', zh: "可持续性", en: "sustainability", words: ["sustainability"], level: 'hard', type: 'word' },
  // ... 更多hard难度单词（共500条）
];

// Hard难度句子库（雅思真题句子片段）
export const HARD_SENTENCES: DictationItem[] = [
  { id: 'hard-sentence-1', zh: "科学家需要分析数据以得出结论", en: "Scientists need to analyze data to draw conclusions", words: ["Scientists", "need", "to", "analyze", "data", "to", "draw", "conclusions"], level: 'hard', type: 'sentence', relatedId: 'hard-word-1' },
  { id: 'hard-sentence-2', zh: "我们需要评估这个方案的可行性", en: "We need to evaluate the feasibility of this plan", words: ["We", "need", "to", "evaluate", "the", "feasibility", "of", "this", "plan"], level: 'hard', type: 'sentence', relatedId: 'hard-word-2' },
  { id: 'hard-sentence-3', zh: "这个假设需要进一步验证", en: "This hypothesis needs further verification", words: ["This", "hypothesis", "needs", "further", "verification"], level: 'hard', type: 'sentence', relatedId: 'hard-word-3' },
  { id: 'hard-sentence-4', zh: "这种现象在现代社会很常见", en: "This phenomenon is very common in modern society", words: ["This", "phenomenon", "is", "very", "common", "in", "modern", "society"], level: 'hard', type: 'sentence', relatedId: 'hard-word-4' },
  { id: 'hard-sentence-5', zh: "我们可以看到一个明显的趋势", en: "We can see a clear trend", words: ["We", "can", "see", "a", "clear", "trend"], level: 'hard', type: 'sentence', relatedId: 'hard-word-5' },
  { id: 'hard-sentence-6', zh: "公司需要制定新的营销策略", en: "The company needs to develop a new marketing strategy", words: ["The", "company", "needs", "to", "develop", "a", "new", "marketing", "strategy"], level: 'hard', type: 'sentence', relatedId: 'hard-word-6' },
  { id: 'hard-sentence-7', zh: "技术的发展改变了我们的生活", en: "The development of technology has changed our lives", words: ["The", "development", "of", "technology", "has", "changed", "our", "lives"], level: 'hard', type: 'sentence', relatedId: 'hard-word-7' },
  { id: 'hard-sentence-8', zh: "创新是企业成功的关键", en: "Innovation is the key to business success", words: ["Innovation", "is", "the", "key", "to", "business", "success"], level: 'hard', type: 'sentence', relatedId: 'hard-word-8' },
  { id: 'hard-sentence-9', zh: "全球化带来了很多机遇", en: "Globalization has brought many opportunities", words: ["Globalization", "has", "brought", "many", "opportunities"], level: 'hard', type: 'sentence', relatedId: 'hard-word-9' },
  { id: 'hard-sentence-10', zh: "可持续性发展是未来的方向", en: "Sustainable development is the direction of the future", words: ["Sustainable", "development", "is", "the", "direction", "of", "the", "future"], level: 'hard', type: 'sentence', relatedId: 'hard-word-10' },
  // ... 更多hard难度句子（共500条）
];

// 合并所有数据以便兼容旧代码
export const DICTATION_DATA = [
  ...SIMPLE_WORDS,
  ...SIMPLE_SENTENCES,
  ...NORMAL_WORDS,
  ...NORMAL_SENTENCES,
  ...HARD_WORDS,
  ...HARD_SENTENCES
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

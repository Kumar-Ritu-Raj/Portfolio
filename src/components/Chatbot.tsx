import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCommentDots,
  faTimes,
  faPaperPlane,
  faRobot,
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Chatbot.css';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

interface KnowledgeEntry {
  keywords: string[];
  response: string;
}

const knowledgeBase: KnowledgeEntry[] = [
  {
    keywords: [
      'hello',
      'hi',
      'hey',
      'greetings',
      'morning',
      'afternoon',
      'evening',
      'sup',
      'howdy',
    ],
    response:
      "Hi there! 👋 I'm Kumar's assistant. Ask me anything about Kumar Ritu Raj — his skills, projects, experience, education, certifications, or how to get in touch!",
  },
  {
    keywords: ['who are you', 'what are you', 'bot', 'assistant'],
    response:
      "I'm a smart assistant for Kumar Ritu Raj. 🤖 I can answer questions about his background, skills, projects, work experience, education, and more!",
  },
  {
    keywords: [
      'who',
      'about',
      'yourself',
      'introduce',
      'kumar',
      'name',
      'ritu',
    ],
    response:
      'Kumar Ritu Raj is a passionate React Developer based in Pune, India. 🚀 He specializes in building modern, scalable, and user-friendly web applications. He currently works at Parkar Digital and is also a Project Manager at Mozilla Localization.',
  },
  {
    keywords: [
      'location',
      'where',
      'based',
      'city',
      'country',
      'live',
      'pune',
      'india',
    ],
    response: 'Kumar is based in Pune, India. 📍',
  },
  {
    keywords: ['birthday', 'born', 'dob', 'birth date', 'age', 'old'],
    response: 'Kumar was born on 5th January, 2000. 🎂 He is 26 years old.',
  },
  {
    keywords: ['email', 'mail'],
    response:
      'You can email Kumar at 📧 kumarrituraj2000@gmail.com. He typically responds within 1–2 business days.',
  },
  {
    keywords: ['phone', 'mobile', 'number', 'call'],
    response: "Kumar's phone number is 📞 +91 8935802137",
  },
  {
    keywords: [
      'contact',
      'reach',
      'touch',
      'hire',
      'available',
      'opportunity',
      'open to work',
    ],
    response:
      'Kumar is open to exciting opportunities! 🤝 You can reach him at:\n📧 kumarrituraj2000@gmail.com\n📞 +91 8935802137\nOr connect via LinkedIn: linkedin.com/in/kumar-ritu-raj',
  },
  {
    keywords: ['linkedin'],
    response:
      'Connect with Kumar on LinkedIn: 🔗 https://www.linkedin.com/in/kumar-ritu-raj/',
  },
  {
    keywords: ['github'],
    response:
      "Check out Kumar's GitHub repositories: 🐙 https://github.com/Kumar-Ritu-Raj",
  },
  {
    keywords: ['twitter', 'x.com', 'tweet'],
    response: 'Follow Kumar on Twitter/X: 🐦 https://x.com/KumarRituRaj17',
  },
  {
    keywords: ['instagram'],
    response:
      'Follow Kumar on Instagram: 📸 https://www.instagram.com/kumarrituraj17/',
  },
  {
    keywords: ['facebook'],
    response:
      'Find Kumar on Facebook: 📘 https://www.facebook.com/profile.php?id=100005316888830',
  },
  {
    keywords: ['social', 'media', 'connect', 'follow', 'online', 'profile'],
    response:
      'You can find Kumar on:\n🔗 LinkedIn: linkedin.com/in/kumar-ritu-raj\n🐙 GitHub: github.com/Kumar-Ritu-Raj\n🐦 Twitter/X: x.com/KumarRituRaj17\n📸 Instagram: instagram.com/kumarrituraj17\n📘 Facebook: facebook.com/profile.php?id=100005316888830',
  },
  {
    keywords: [
      'skill',
      'tech',
      'technology',
      'stack',
      'know',
      'expert',
      'proficient',
      'what can',
    ],
    response:
      "Kumar's technical skills:\n\n⚛️ React.js & Next.js — 80%\n🌐 HTML & MJML — 90%\n🎨 CSS, SCSS & Tailwind CSS — 90%\n💛 JavaScript & TypeScript — 85%\n🧪 Jest (Testing) — 60%",
  },
  {
    keywords: ['react', 'nextjs', 'next.js', 'framework'],
    response:
      'Kumar specializes in React.js and Next.js (80% proficiency). He has built multiple production-grade applications using these frameworks at Parkar Digital, including African-Ancestry and Steel-Buy. ⚛️',
  },
  {
    keywords: ['css', 'scss', 'tailwind', 'styling', 'design'],
    response:
      'Kumar is highly proficient in CSS, SCSS & Tailwind CSS (90%). He creates responsive, pixel-perfect, and visually appealing interfaces. 🎨',
  },
  {
    keywords: ['javascript', 'typescript', 'js', 'ts'],
    response:
      'Kumar has strong proficiency in JavaScript & TypeScript (85%). He writes clean, maintainable, and type-safe code for scalable applications. 💛',
  },
  {
    keywords: ['html', 'mjml'],
    response:
      'Kumar is highly skilled in HTML & MJML (90%). MJML is a framework for responsive email templates — a unique skill he uses for email development. 🌐',
  },
  {
    keywords: ['jest', 'test', 'testing', 'unit test'],
    response:
      'Kumar has experience with Jest for unit testing (60% proficiency). He writes tests to ensure code quality and application reliability. 🧪',
  },
  {
    keywords: [
      'experience',
      'work',
      'job',
      'career',
      'company',
      'parkar',
      'worked',
    ],
    response:
      "Kumar's work experience:\n\n💼 Front-End Developer @ Parkar Digital\n   April 2023 – Present\n   → Worked on Atkco & Steel-Buy as a React Developer.\n\n🌐 Project Manager – Localization @ Mozilla\n   February 2018 – Present\n   → Manages the Angika language on pontoon.mozilla.org.",
  },
  {
    keywords: ['parkar', 'parkar digital'],
    response:
      'Kumar has been working as a Front-End Developer at Parkar Digital since April 2023. He has worked on two major projects — Atkco and Steel-Buy — as a React Developer. 💼',
  },
  {
    keywords: ['mozilla', 'localization', 'angika', 'pontoon'],
    response:
      'Kumar has been a Project Manager in Localization at Mozilla since February 2018 (Present). He manages the Angika language on pontoon.mozilla.org — a meaningful contribution to open-source! 🌐',
  },
  {
    keywords: [
      'education',
      'study',
      'degree',
      'university',
      'college',
      'school',
      'qualify',
      'qualification',
    ],
    response:
      "Kumar's educational background:\n\n🎓 MCA – Lovely Professional University, Punjab (2021–2023) | CGPA: 7.97\n🎓 BCA – BNMU, Bihar (2017–2020) | 80.17%\n📘 Intermediate – Adarsh Inter College, Bihar (2014–2016) | 63%\n📘 Matriculation – Gandhi High School (2013–2014) | 76.40%",
  },
  {
    keywords: [
      'mca',
      'master',
      'masters',
      'lpu',
      'lovely professional',
      'postgraduate',
    ],
    response:
      'Kumar completed his Master of Computer Application (MCA) from Lovely Professional University, Punjab (2021–2023) with an impressive CGPA of 7.97. 🎓',
  },
  {
    keywords: ['bca', 'bachelor', 'bnmu', 'undergraduate'],
    response:
      'Kumar completed his Bachelor of Computer Application (BCA) from BNMU, Bihar (2017–2020) with a percentage of 80.17%. 🎓',
  },
  {
    keywords: [
      'project',
      'portfolio',
      'work on',
      'built',
      'developed',
      'application',
      'app',
    ],
    response:
      "Kumar's notable projects:\n\n1️⃣ African-Ancestry — E-Commerce\n   A genetic testing platform for people of African descent.\n\n2️⃣ Steel-Buy — Marketplace\n   An online platform for buying & selling metals.\n\n3️⃣ Q-Trac — Logistics\n   A supply chain management platform with real-time tracking.",
  },
  {
    keywords: ['african', 'ancestry', 'african-ancestry'],
    response:
      "African Ancestry is an E-Commerce project Kumar contributed to. It's a genetic testing service that helps individuals of African descent trace their ancestral roots to specific African countries and ethnic groups. 🌍",
  },
  {
    keywords: ['steelbuy', 'steel-buy', 'steel buy', 'metal'],
    response:
      "Steel-Buy is a Marketplace project Kumar worked on. It's an online platform connecting buyers and sellers of metals (steel & aluminum), facilitating efficient and secure transactions. 🏭",
  },
  {
    keywords: ['qtrac', 'q-trac', 'q trac', 'logistics', 'supply chain'],
    response:
      'Q-Trac is a Logistics project Kumar worked on. It provides businesses with real-time tracking, route optimization, and supply chain analytics to reduce costs and improve efficiency. 🚛',
  },
  {
    keywords: [
      'achievement',
      'award',
      'recognition',
      'honor',
      'accomplishment',
      'reward',
    ],
    response:
      "Kumar's achievements:\n\n🏆 Work Anniversary (April 2024)\n   Marked 1 year of service at Parkar Digital.\n\n🏆 Big Guns Team Award (March 2025)\n   Given to the SteelBuy Dev Team for exceptional performance.\n\n🏆 Shoutout Superstar Award (December 2025)\n   Individual recognition for outstanding dedication & impact.",
  },
  {
    keywords: [
      'certification',
      'certificate',
      'course',
      'udemy',
      'coursera',
      'simplilearn',
      'certified',
    ],
    response:
      "Kumar's certifications:\n\n📜 TypeScript — Udemy (Oct 2024)\n📜 React.js — Udemy (Dec 2023)\n📜 JavaScript — Udemy (Sep 2023)\n📜 Git — Udemy (Dec 2023)\n📜 Front End Development — SimpliLearn (Jun 2024)\n📜 NumPy — SimpliLearn (Nov 2022)\n📜 Data Science — LinkedIn (Dec 2022)\n📜 Next.js — LinkedIn (Aug 2022)\n📜 RStudio — Coursera",
  },
  {
    keywords: [
      'thank',
      'thanks',
      'awesome',
      'great',
      'nice',
      'cool',
      'helpful',
      'wonderful',
      'good',
    ],
    response:
      "You're welcome! 😊 Feel free to ask anything else about Kumar. I'm always here to help!",
  },
  {
    keywords: ['bye', 'goodbye', 'see you', 'later', 'cya', 'take care'],
    response:
      "Goodbye! 👋 Thanks for visiting Kumar's portfolio. Have an amazing day!",
  },
];

const suggestedQuestions = [
  'What are his skills?',
  'Work experience?',
  'Projects he built?',
  'His education?',
  'Achievements?',
  'How to contact?',
];

const getResponse = (input: string): string => {
  const lower = input.toLowerCase().trim();

  for (const entry of knowledgeBase) {
    if (entry.keywords.some((keyword) => lower.includes(keyword))) {
      return entry.response;
    }
  }

  return "I'm not sure about that. 🤔 Try asking about Kumar's skills, experience, projects, education, certifications, achievements, or contact info. Or reach him directly at 📧 kumarrituraj2000@gmail.com!";
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! 👋 I'm Kumar's assistant. Ask me anything about Kumar Ritu Raj — his skills, projects, experience, or how to get in touch!",
      sender: 'bot',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getResponse(text),
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 750);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <div className="chatbot-wrapper">
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar-wrapper">
                <div className="chatbot-avatar">
                  <FontAwesomeIcon icon={faRobot} />
                </div>
                <span className="chatbot-online-dot" aria-label="Online"></span>
              </div>
              <div>
                <p className="chatbot-name">Kumar Ritu Raj Assistant</p>
                <p className="chatbot-status">
                  <span className="chatbot-status-dot"></span> Online
                </p>
              </div>
            </div>
            <button
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`chatbot-message ${msg.sender}`}>
                <p className="chatbot-message-text">{msg.text}</p>
              </div>
            ))}
            {isTyping && (
              <div className="chatbot-message bot">
                <p className="chatbot-typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          <div className="chatbot-suggestions">
            {suggestedQuestions.map((q, i) => (
              <button
                key={i}
                className="chatbot-suggestion-btn"
                onClick={() => sendMessage(q)}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <form className="chatbot-input-area" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Kumar..."
              className="chatbot-input"
              autoComplete="off"
            />
            <button
              type="submit"
              className="chatbot-send-btn"
              disabled={!input.trim()}
              aria-label="Send message"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <div className="chatbot-toggle-wrapper">
        <button
          className={`chatbot-toggle-btn ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle chatbot"
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faCommentDots} />
        </button>
        {!isOpen && <span className="chatbot-toggle-online-dot"></span>}
      </div>
    </div>
  );
};

export default Chatbot;

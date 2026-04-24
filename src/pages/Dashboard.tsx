import React, { useState, useRef, useEffect } from 'react';
import { 
  TrendingUp, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  Calendar,
  Target,
  Zap,
  ArrowUpRight,
  Circle,
  Mic,
  ClipboardCheck,
  History,
  Trophy,
  Download,
  Flame,
  Award,
  ExternalLink,
  Bot,
  SpellCheck,
  FileText,
  GraduationCap,
  Send,
  Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useStudy } from '../contexts/StudyContext';
import { VOCAB_DATA, CAMBRIDGE_LIBRARY, WRITING_SAMPLES, SPEAKING_TOPICS } from './study/StudyData';

export default function Dashboard() {
  const navigate = useNavigate();
  const { profile } = useUser();
  const { state, completeGoal, checkIn } = useStudy();
  
  // 聊天功能状态
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '你好！我是智学雅思助手，有什么可以帮你的吗？' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const firstName = profile.name.split(' ')[0];

  const handleExportReport = () => {
    const report = {
      user: profile.name,
      studyDays: state.studyDays,
      overallProgress: state.overallProgress,
      masteredWords: state.masteredWords,
      mockAverage: state.mockAverage,
      date: new Date().toLocaleDateString()
    };
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `IELTS_Study_Report_${profile.name}.json`;
    link.click();
  };
  
  // 聊天功能函数
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;
    
    const newMessage = { role: 'user' as const, content: inputValue.trim() };
    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsLoading(true);
    
    try {
      const response = await fetch('http://localhost:3000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: [...messages, newMessage]
        })
      });
      
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant' as const, content: data.reply }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant' as const, content: '抱歉，我暂时无法回答你的问题，请稍后再试。' }]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('你的浏览器不支持语音识别功能');
      return;
    }
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'zh-CN';
    
    setIsListening(true);
    
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInputValue(transcript);
    };
    
    recognition.onerror = () => {
      setIsListening(false);
    };
    
    recognition.onend = () => {
      setIsListening(false);
    };
    
    recognition.start();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      {/* User Profile & Chat */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-surface-container-lowest p-8 rounded-[2.5rem] border border-outline-variant/10 shadow-sm"
        >
          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-black font-headline mb-1">{profile.name}</h2>
              <p className="text-on-surface-variant text-sm">{profile.studentId || '访客用户'}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold">{profile.name.charAt(0)}</span>
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">基本信息</p>
                <p className="font-bold text-on-surface">{profile.name || '访客用户'}</p>
                <p className="text-sm text-on-surface-variant">{profile.email || '未设置邮箱'}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-on-surface-variant">学号</span>
                <span className="font-medium text-on-surface">{profile.studentId || '无'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-on-surface-variant">加入时间</span>
                <span className="font-medium text-on-surface">{profile.joinDate || '未知'}</span>
              </div>
            </div>
            
            <div className="pt-4 border-t border-outline-variant/10">
              <button className="w-full py-3 bg-primary/10 text-primary rounded-2xl font-bold text-sm hover:bg-primary/20 transition-colors">
                编辑资料
              </button>
              <p className="text-xs text-on-surface-variant text-center mt-3">
                账户安全提示：请定期修改密码，保护个人信息
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* 智学雅思助手聊天组件 */}
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-[2.5rem] border border-outline-variant/10 shadow-sm overflow-hidden flex flex-col">
          {/* 聊天头部 */}
          <div className="p-6 border-b border-outline-variant/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-black text-lg text-on-surface">智学雅思助手</h3>
                <p className="text-xs text-on-surface-variant">随时为你解答问题</p>
              </div>
            </div>
          </div>

          {/* 聊天记录区域 */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl ${msg.role === 'user' ? 'bg-primary text-white' : 'bg-surface-container-low text-on-surface'}`}>
                  <p className="text-sm">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-4 rounded-2xl bg-surface-container-low text-on-surface flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <p className="text-sm">正在思考...</p>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* 输入区域 */}
          <div className="p-4 border-t border-outline-variant/10">
            <div className="flex items-center gap-3">
              <button 
                onClick={handleVoiceInput}
                className={`p-3 rounded-full ${isListening ? 'bg-primary text-white' : 'bg-surface-container-low text-on-surface-variant'} transition-colors`}
              >
                <Mic className="w-5 h-5" />
              </button>
              <input
                type="text"
                placeholder="输入你的问题..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 px-4 py-3 bg-surface-container-low border border-outline-variant/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
              <button 
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className={`p-3 rounded-full ${(inputValue.trim() && !isLoading) ? 'bg-primary text-white' : 'bg-surface-container-low text-on-surface-variant'} transition-colors`}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Area */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Bot, label: 'AI 口语教练', color: 'bg-blue-50 text-blue-600', link: '/study/speaking' },
          { icon: ClipboardCheck, label: '真题模考', color: 'bg-purple-50 text-purple-600', link: '/study/mock' },
          { icon: SpellCheck, label: '单词背诵', color: 'bg-amber-50 text-amber-600', link: '/study/vocab' },
          { icon: FileText, label: '写作练笔', color: 'bg-green-50 text-green-600', link: '/study/writing' },
        ].map((item, i) => (
          <motion.button
            key={i}
            whileHover={{ y: -4 }}
            onClick={() => navigate(item.link)}
            className="bg-surface-container-lowest p-6 rounded-[2rem] border border-outline-variant/10 shadow-sm flex flex-col items-center gap-3 hover:shadow-md transition-all group"
          >
            <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
              <item.icon className="w-7 h-7" />
            </div>
            <span className="font-black text-sm text-on-surface">{item.label}</span>
          </motion.button>
        ))}
      </section>

      {/* Streak & Check-in */}
      <div className="bg-gradient-to-br from-primary to-primary-container rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <Flame className="w-6 h-6 text-amber-400 fill-amber-400" />
              <span className="font-black text-xl">连续打卡 {state.streak} 天</span>
            </div>
            <Trophy className="w-6 h-6 text-amber-300" />
          </div>
          <p className="text-blue-100 text-sm mb-8 font-medium">自律即自由，目标就在眼前。保持专注，你将在这个月看到质的飞跃。</p>
          <button 
            onClick={checkIn}
            className="w-full py-4 bg-white text-primary rounded-2xl font-black shadow-lg hover:bg-blue-50 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            立即打卡签到
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useRef, useEffect, useCallback } from 'react';
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
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  // 滚动到底部函数，只在新消息加载完成后调用
  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    });
  }, []);
  
  // 只在消息数量变化时滚动，不在输入框聚焦时触发
  useEffect(() => {
    if (!isLoading) {
      scrollToBottom();
    }
  }, [messages, isLoading, scrollToBottom]);

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
  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;
    
    const userMessage = { role: 'user' as const, content: inputValue.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    try {
      // 火山引擎豆包API配置
      const API_KEY = 'ark-d8026cab-45bf-4ee2-8d82-3ed39b432d0a-11b12';
      const API_URL = 'https://ark-cn-beijing.bytedance.net/api/v3/chat/completions';
      
      // 构建系统提示，设置AI人设
      const systemPrompt = {
        role: 'system',
        content: '你是「雅思全能助手」，一个专业的雅思备考指导和通用AI助手。你需要：1. 精准解答雅思备考相关问题，包括口语、写作、听力、阅读等各个方面；2. 提供专业的学习建议和备考策略；3. 像通用AI一样能进行日常对话，解答各种问题；4. 使用友好、专业的语言，帮助用户更好地准备雅思考试。'
      };
      
      // 构建消息数组，包含系统提示和历史消息
      const messagesWithSystem = [systemPrompt, ...messages, userMessage];
      
      // 调用豆包API - 启用流式响应
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: 'doubao-pro-4k',
          messages: messagesWithSystem,
          temperature: 0.7,
          max_tokens: 1000,
          stream: true  // 启用流式响应
        })
      });
      
      if (!response.ok) {
        throw new Error('API调用失败');
      }
      
      // 处理流式响应
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let fullContent = '';
      
      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          
          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split('\n');
          
          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6);
              if (data === '[DONE]') continue;
              
              try {
                const parsed = JSON.parse(data);
                const content = parsed.choices?.[0]?.delta?.content;
                if (content) {
                  fullContent += content;
                  // 实时更新UI
                  setMessages(prev => {
                    const lastMsg = prev[prev.length - 1];
                    if (lastMsg?.role === 'assistant') {
                      return [...prev.slice(0, -1), { ...lastMsg, content: fullContent }];
                    }
                    return [...prev, { role: 'assistant', content: fullContent }];
                  });
                }
              } catch (e) {
                // 忽略解析错误
              }
            }
          }
        }
      }
      
      // 语音合成回复
      if ('speechSynthesis' in window && fullContent) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(fullContent);
        utterance.lang = 'zh-CN';
        window.speechSynthesis.speak(utterance);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: '网络异常，请稍后再试。' }]);
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
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-on-surface-variant">学号</span>
              <span className="font-medium text-on-surface">{profile.studentId || '无'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-on-surface-variant">加入时间</span>
              <span className="font-medium text-on-surface">{profile.joinDate || '未知'}</span>
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
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-[2.5rem] border border-outline-variant/10 shadow-sm overflow-hidden flex flex-col h-[500px]">
          {/* 聊天头部 */}
          <div className="p-6 border-b border-outline-variant/10 flex-shrink-0">
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
          <div 
            ref={chatContainerRef}
            className="flex-1 p-6 overflow-y-auto space-y-4 min-h-0"
          >
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl ${msg.role === 'user' ? 'bg-primary text-white' : 'bg-surface-container-low text-on-surface'}`}>
                  <p className="text-sm whitespace-pre-wrap break-words">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && messages[messages.length - 1]?.role === 'user' && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-4 rounded-2xl bg-surface-container-low text-on-surface">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* 输入区域 */}
          <div className="p-4 border-t border-outline-variant/10 flex-shrink-0">
            <div className="flex items-center gap-3">
              <button 
                onClick={handleVoiceInput}
                className={`p-3 rounded-full flex-shrink-0 ${isListening ? 'bg-primary text-white' : 'bg-surface-container-low text-on-surface-variant'} transition-colors`}
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
                className={`p-3 rounded-full flex-shrink-0 ${(inputValue.trim() && !isLoading) ? 'bg-primary text-white' : 'bg-surface-container-low text-on-surface-variant'} transition-colors`}
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
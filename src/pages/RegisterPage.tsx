import React, { useState } from 'react';
import { GraduationCap, Eye, ArrowRight, ShieldCheck, Award, TrendingUp, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import type { FormEvent } from 'react';

export default function RegisterPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    
    // 表单验证
    if (!name || !username || !password) {
      setError('请填写所有必填字段');
      return;
    }
    
    if (password.length < 6) {
      setError('密码长度不能少于6位');
      return;
    }
    
    // 生成学号
    const today = new Date();
    const dateStr = today.toISOString().split('T')[0].replace(/-/g, '');
    const joinDate = today.toISOString().split('T')[0];
    
    // 获取当天注册用户数
    const registerCount = JSON.parse(localStorage.getItem('register_count') || '{}');
    const todayCount = (registerCount[dateStr] || 0) + 1;
    registerCount[dateStr] = todayCount;
    localStorage.setItem('register_count', JSON.stringify(registerCount));
    
    // 生成学号：IELTS-YYYYMMDD-XXXX
    const studentId = `IELTS-${dateStr}-${String(todayCount).padStart(4, '0')}`;
    
    // 保存用户信息
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    users[username] = {
      name,
      password,
      studentId,
      joinDate
    };
    localStorage.setItem('users', JSON.stringify(users));
    
    // 显示成功消息
    setSuccess('注册成功，请使用学号和密码登录');
    setError('');
    
    // 3秒后跳转到登录页
    setTimeout(() => {
      navigate('/login');
    }, 3000);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#0a469b] overflow-hidden flex items-center justify-center font-sans selection:bg-white/20 selection:text-white">
      {/* Background Animated Waves */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a469b] via-[#1065c7] to-[#0a469b]"></div>
        <svg className="absolute w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,30 50,50 T100,50 V100 H0 Z" fill="rgba(255,255,255,0.05)">
            <animate attributeName="d" dur="20s" repeatCount="indefinite" values="M0,50 Q25,30 50,50 T100,50 V100 H0 Z; M0,50 Q25,70 50,50 T100,50 V100 H0 Z; M0,50 Q25,30 50,50 T100,50 V100 H0 Z" />
          </path>
        </svg>
        <div className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] bg-white opacity-[0.03] rounded-full blur-[100px]"></div>
      </div>

      <main className="relative z-10 w-full max-w-7xl px-6 py-12 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Register Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="bg-[#3b82f6] p-10 md:p-14 rounded-[3.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-white/10">
              <div className="flex items-center justify-between mb-16">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#3b82f6] shadow-inner">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <h1 className="text-3xl font-black text-white tracking-tighter">IELTS 智学</h1>
                </div>
                <button 
                  onClick={() => navigate('/login')}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              <form onSubmit={handleRegister} className="space-y-6">
                <h2 className="text-2xl font-black text-white mb-8">创建账号</h2>
                
                <div className="space-y-3">
                  <label className="block text-[10px] font-black text-white/50 uppercase tracking-[0.2em] px-1">昵称</label>
                  <input
                    className="w-full px-6 py-4 bg-black/10 border-none rounded-2xl text-white placeholder:text-white/30 focus:ring-2 focus:ring-white/20 transition-all outline-none"
                    placeholder="请输入昵称"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-[10px] font-black text-white/50 uppercase tracking-[0.2em] px-1">账号</label>
                  <input
                    className="w-full px-6 py-4 bg-black/10 border-none rounded-2xl text-white placeholder:text-white/30 focus:ring-2 focus:ring-white/20 transition-all outline-none"
                    placeholder="请输入登录用的账号名"
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-[10px] font-black text-white/50 uppercase tracking-[0.2em] px-1">安全密码</label>
                  <div className="relative">
                    <input
                      className="w-full px-6 py-4 bg-black/10 border-none rounded-2xl text-white placeholder:text-white/30 focus:ring-2 focus:ring-white/20 transition-all outline-none"
                      placeholder="请输入密码（不少于6位）"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                    <button 
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors" 
                      type="button"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {(error || success) && (
                  <p className={`text-xs font-bold py-2 px-4 rounded-xl text-center ${error ? 'text-red-100 bg-red-500/30' : 'text-green-100 bg-green-500/30'}`}>
                    {error || success}
                  </p>
                )}

                <button
                  className="w-full py-5 mt-4 bg-white text-[#3b82f6] font-black rounded-2xl shadow-2xl shadow-black/10 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-lg group"
                  type="submit"
                >
                  注册账号
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right: Content & Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center gap-12"
          >
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-tight drop-shadow-sm">开启你的高效备考之路</h2>
              <p className="text-xl text-white/60 max-w-xl leading-relaxed">打卡、背单词、实时同步学习进度，让每一分钟的努力都清晰可见。</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="bg-[#3b82f6]/40 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/5 flex flex-col justify-center">
                <div className="mb-8 p-3 bg-white/10 w-fit rounded-xl text-white">
                  <GraduationCap className="w-10 h-10" />
                </div>
                <h3 className="text-white font-black text-2xl mb-2">加入雅思智学</h3>
                <p className="text-white/50 text-sm">支持数据云同步，开启个性化提分</p>
              </div>

              {/* Feature 2 */}
              <div className="bg-[#3b82f6]/40 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/5 flex flex-col justify-center">
                <div className="mb-8 p-3 bg-white/10 w-fit rounded-xl text-white">
                  <TrendingUp className="w-10 h-10" />
                </div>
                <h3 className="text-white font-black text-2xl mb-2">智能学习系统</h3>
                <p className="text-white/50 text-sm">AI 驱动的个性化学习计划</p>
              </div>
            </div>

            {/* Platform Trust */}
            <div className="flex flex-wrap items-center gap-x-12 gap-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-white/40">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">全站 SSL 加密</span>
              </div>
              <div className="flex items-center gap-2 text-white/40 font-black">
                <Award className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-widest">学术诚信保障</span>
              </div>
              <div className="flex items-center gap-2 text-white/40 font-black">
                <TrendingUp className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-widest">大数据精准提分</span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Corporate Info Footer */}
      <footer className="absolute bottom-10 w-full flex justify-center pointer-events-none opacity-20">
        <div className="text-[10px] font-black text-white tracking-[0.6em] uppercase text-center px-4">
          IELTS SMART STUDY SYSTEM — OPTIMIZED FOR EXCELLENCE
        </div>
      </footer>
    </div>
  );
}

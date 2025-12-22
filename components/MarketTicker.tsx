
import React, { useMemo } from 'react';
import { MARKET_DATA, MOCK_ARTICLES } from '../constants';
import { TrendingUp, TrendingDown, Zap, AlertCircle } from 'lucide-react';

const MarketTicker: React.FC = () => {
  const breakingNews = useMemo(() => 
    MOCK_ARTICLES.filter(article => article.isBreaking).slice(0, 5),
    []
  );

  return (
    <div className="bg-slate-900 text-white flex items-center relative z-50 overflow-hidden border-b border-white/5 h-10">
      {/* Breaking News Fixed Badge */}
      <div className="bg-rose-600 px-4 h-full flex items-center gap-2 z-10 shadow-[5px_0_15px_rgba(0,0,0,0.3)] relative">
        <Zap size={14} className="fill-current animate-pulse text-white" />
        <span className="text-xs font-black uppercase tracking-widest whitespace-nowrap">خبر عاجل</span>
      </div>

      {/* Scrolling Ticker Content */}
      <div className="flex-grow relative overflow-hidden h-full">
        <div className="animate-ticker flex gap-16 items-center absolute top-0 left-0 h-full whitespace-nowrap px-10">
          {/* Breaking News Headlines */}
          {breakingNews.map((news) => (
            <div key={`news-${news.id}`} className="flex items-center gap-3 text-sm font-bold group cursor-pointer hover:text-emerald-400 transition-colors">
              <AlertCircle size={14} className="text-rose-500" />
              <span className="text-white group-hover:text-emerald-400 font-tajawal">{news.title}</span>
              <span className="text-slate-600">|</span>
            </div>
          ))}

          {/* Market Data */}
          {MARKET_DATA.map((item, idx) => (
            <div key={`market-${idx}`} className="flex items-center gap-3 text-sm font-bold">
              <span className="text-slate-400">{item.symbol}</span>
              <span className="font-mono">{item.price}</span>
              <span className={item.change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}>
                {item.change.startsWith('+') ? <TrendingUp size={14} className="inline ml-1" /> : <TrendingDown size={14} className="inline ml-1" />}
                {item.change}
              </span>
              <span className="text-slate-600">|</span>
            </div>
          ))}
          
          {/* Duplicate for seamless loop (First set) */}
          {breakingNews.map((news) => (
            <div key={`news-dup-${news.id}`} className="flex items-center gap-3 text-sm font-bold group cursor-pointer hover:text-emerald-400 transition-colors">
              <AlertCircle size={14} className="text-rose-500" />
              <span className="text-white group-hover:text-emerald-400 font-tajawal">{news.title}</span>
              <span className="text-slate-600">|</span>
            </div>
          ))}
          {MARKET_DATA.map((item, idx) => (
            <div key={`market-dup-${idx}`} className="flex items-center gap-3 text-sm font-bold">
              <span className="text-slate-400">{item.symbol}</span>
              <span className="font-mono">{item.price}</span>
              <span className={item.change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}>
                {item.change.startsWith('+') ? <TrendingUp size={14} className="inline ml-1" /> : <TrendingDown size={14} className="inline ml-1" />}
                {item.change}
              </span>
              <span className="text-slate-600">|</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Gradient Overlays for smoother scrolling fade */}
      <div className="absolute right-[115px] top-0 bottom-0 w-12 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none z-[5]"></div>
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none z-[5]"></div>
    </div>
  );
};

export default MarketTicker;

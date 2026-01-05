
import React from 'react';
import { MARKET_DATA } from '../constants';
import { TrendingUp, TrendingDown, BarChart2 } from 'lucide-react';

const MarketTicker: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white flex items-center relative z-50 overflow-hidden border-b border-white/5 h-9">
      {/* Markets Badge */}
      <div className="bg-slate-800 px-4 h-full flex items-center gap-2 z-10 shadow-[5px_0_15px_rgba(0,0,0,0.3)] relative">
        <BarChart2 size={12} className="text-emerald-400" />
        <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap text-slate-300 font-tajawal">مؤشرات الأسواق</span>
      </div>

      {/* Scrolling Ticker Content */}
      <div className="flex-grow relative overflow-hidden h-full">
        <div className="animate-ticker flex gap-12 items-center absolute top-0 left-0 h-full whitespace-nowrap px-10">
          {MARKET_DATA.map((item, idx) => (
            <div key={`market-${idx}`} className="flex items-center gap-3 text-[11px] font-bold">
              <span className="text-slate-500 font-mono uppercase tracking-tighter">{item.symbol}</span>
              <span className="font-mono text-slate-200">{item.price}</span>
              <span className={`flex items-center gap-1 font-mono ${item.change.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                {item.change.startsWith('+') ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                {item.change}
              </span>
              <span className="text-slate-800">|</span>
            </div>
          ))}
          
          {/* Duplicate for seamless loop */}
          {MARKET_DATA.map((item, idx) => (
            <div key={`market-dup-${idx}`} className="flex items-center gap-3 text-[11px] font-bold">
              <span className="text-slate-500 font-mono uppercase tracking-tighter">{item.symbol}</span>
              <span className="font-mono text-slate-200">{item.price}</span>
              <span className={`flex items-center gap-1 font-mono ${item.change.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                {item.change.startsWith('+') ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                {item.change}
              </span>
              <span className="text-slate-800">|</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Gradient Overlays */}
      <div className="absolute right-[115px] top-0 bottom-0 w-12 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none z-[5]"></div>
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none z-[5]"></div>
    </div>
  );
};

export default MarketTicker;

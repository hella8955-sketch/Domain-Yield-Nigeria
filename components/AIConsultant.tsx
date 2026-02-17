
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

export const AIConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const askConsultant = async () => {
    if (!input.trim() || loading) return;
    
    setLoading(true);
    setResponse('Thinking...');
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are a Domain Investing Consultant for Domain Yield Nigeria. A user asks: "${input}". 
        Answer professionally, focusing on the potential of domain investing as a micro-investment (like the cost of a recharge card) to earn millions. 
        Crucially, mention that this entire process can be done using JUST A SMARTPHONE and an internet connection—no laptop is required.
        Promote the masterclass by Domain Yield Nigeria. Keep the answer under 100 words.`,
      });
      
      setResponse(result.text || "I'm having trouble connecting right now, but our WhatsApp consultants are ready to help!");
    } catch (error) {
      setResponse("Our AI consultant is resting. Please contact our human team on WhatsApp for immediate answers!");
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  return (
    <section className="py-24 bg-navy-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block p-2 bg-emerald-500/20 rounded-2xl mb-6">
          <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold mb-4">Quick Domain Consultation</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">
          Have a question about the strategy? Ask our AI consultant below.
        </p>
        
        <div className="bg-slate-800/50 p-6 rounded-3xl border border-slate-700 max-w-2xl mx-auto shadow-2xl">
          <div className="mb-6 h-32 overflow-y-auto text-left text-sm leading-relaxed text-slate-300 custom-scrollbar">
            {response ? (
              <div className="animate-fade-in">{response}</div>
            ) : (
              <div className="text-slate-500 space-y-1">
                <p className="italic">Try asking:</p>
                <p>"Can I really do this with just my phone?"</p>
                <p>"How much profit is possible?"</p>
              </div>
            )}
          </div>
          <div className="flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && askConsultant()}
              placeholder="Ask anything about the masterclass..."
              className="flex-1 bg-navy-dark border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <button 
              onClick={askConsultant}
              disabled={loading}
              className="bg-emerald-500 text-navy-dark font-bold px-6 py-3 rounded-xl hover:bg-emerald-400 transition-colors disabled:opacity-50"
            >
              {loading ? '...' : 'Ask'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

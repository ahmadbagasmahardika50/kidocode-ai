"use client";
import { useState, useRef, useEffect } from "react";

export default function KidoBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Halo! Aku KidoBot 🤖. Ada yang bingung cara mainnya? Tanya aja ke aku ya!" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Tambah pesan user
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    // Simulasi balasan AI ramah anak (Karena MVP kompetisi)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Wah, pertanyaan bagus! 🌟 Coba perhatikan lagi petunjuknya, lalu susun bloknya pelan-pelan ya. Kamu pasti bisa! 💪😸" }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white border-4 border-sky-300 w-80 h-96 rounded-3xl shadow-2xl flex flex-col mb-4 overflow-hidden animate-in slide-in-from-bottom-5">
          <div className="bg-sky-400 text-white font-bold p-4 flex justify-between items-center">
            <span>🤖 KidoBot AI</span>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-sky-100 text-xl font-black">
              ✕
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto bg-sky-50 flex flex-col gap-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`p-3 rounded-2xl max-w-[85%] text-sm font-bold ${msg.sender === "user" ? "bg-amber-400 text-white self-end rounded-tr-none shadow-sm" : "bg-white text-slate-700 border-2 border-sky-200 self-start rounded-tl-none shadow-sm"}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-white border-t-2 border-sky-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Tanya KidoBot..." 
              className="flex-1 bg-slate-100 rounded-xl px-3 py-2 text-sm font-semibold outline-none focus:ring-2 focus:ring-sky-400"
            />
            <button onClick={handleSend} className="bg-sky-500 hover:bg-sky-600 text-white p-2 rounded-xl font-bold transition-transform active:scale-95">
              ➤
            </button>
          </div>
        </div>
      )}

      {!isOpen && (
         <button 
          onClick={() => setIsOpen(true)}
          className="bg-amber-400 hover:bg-amber-500 text-white w-16 h-16 rounded-full shadow-[0_6px_0_rgb(217,119,6)] hover:translate-y-[2px] hover:shadow-[0_4px_0_rgb(217,119,6)] transition-all flex items-center justify-center text-3xl active:shadow-none active:translate-y-[6px]"
        >
          🤖
        </button>
      )}
    </div>
  );
}
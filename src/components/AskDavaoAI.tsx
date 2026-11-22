"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
}

const KNOWLEDGE_RESPONSES: { keywords: string[]; en: string; ceb: string }[] = [
  {
    keywords: ["911", "emergency", "police", "fire", "ambulance", "rescue", "hotline", "tabang"],
    en: "🚨 **Davao Central 911** operates 24/7 and is 100% free of charge! Call **911** directly from any landline or mobile phone for medical emergencies, urban search & rescue, fire, or police assistance. For non-emergency City Hall inquiries, call **(082) 241-1000**.",
    ceb: "🚨 Ang **Davao Central 911** naglihok 24/7 ug 100% nga libre! Tawag direkta sa **911** gikan sa bisan unsang cellphone o landline para sa medikal, sunog, o pulis. Para sa City Hall, tawag sa **(082) 241-1000**."
  },
  {
    keywords: ["liquor", "alcohol", "beer", "drink", "inum", "ilimnon"],
    en: "🍺 **Liquor Ban Ordinance (No. 004-13)**: The sale and serving of alcoholic beverages is strictly prohibited from **1:00 AM to 8:00 AM daily**. Drinking in public streets, alleys, and parks is banned 24/7. First offense fine is ₱3,000; second offense is ₱5,000 or 3 months imprisonment.",
    ceb: "🍺 **Liquor Ban Ordinance**: Gidili ang pagbaligya o pagsilbi ug ilimnong makahubog gikan **1:00 AM hangtod 8:00 AM matag adlaw**. Bawal usab ang pag-inom sa kadalanan o pampublikong lugar 24/7. Ang multa magsugod sa ₱3,000 hangtod ₱5,000."
  },
  {
    keywords: ["smoke", "smoking", "vape", "cigarette", "sigarilyo", "shisha"],
    en: "🚭 **Comprehensive Anti-Smoking Ordinance (No. 0367-12)**: Smoking, e-cigarettes, and vapes are strictly banned in all enclosed and outdoor public areas, government offices, public vehicles, and terminals. Designated Smoking Areas (DSAs) must be open-air and at least 10 meters away from building entrances. Fines: ₱1,000 to ₱5,000.",
    ceb: "🚭 **Anti-Smoking Ordinance**: Hugot nga gidili ang pagpanigarilyo ug pag-vape sa tanang pampublikong lugar, opisina, sakyanan, ug terminal. Kinahanglan sa Designated Smoking Area (DSA) nga labing menos 10 metros gikan sa pultahan. Multa: ₱1,000 hangtod ₱5,000."
  },
  {
    keywords: ["speed", "limit", "kph", "traffic", "cttmo", "dagan", "tulin"],
    en: "🚗 **Speed Limit Ordinance (No. 0270-23)**:\n• **80 kph**: Lacson to Marilog border, Sirawan to Binugao.\n• **60 kph**: Major highways (McArthur Hwy, Diversion Rd, Carlos P. Garcia, Coastal Rd).\n• **40 kph**: Inner urban arterials & downtown streets.\n• **30 kph / 20 kph**: School zones, market vicinities, and subdivision roads.\nStrictly monitored by speed guns and CTTMO.",
    ceb: "🚗 **Speed Limit Ordinance**:\n• **80 kph**: Lacson padulong Marilog, Sirawan padulong Binugao.\n• **60 kph**: Diversion Road, McArthur Highway, Coastal Road.\n• **40 kph**: Kadalanan sa sentro sa dakbayan.\n• **30 kph / 20 kph**: Duol sa eskwelahan ug merkado."
  },
  {
    keywords: ["lingap", "hospital", "medicine", "tambal", "financial aid", "tabang tambal"],
    en: "💊 **Lingap para sa Mahirap**: City financial assistance for prescription medications, dialysis, chemotherapy, hospital bills, and funeral costs. Located at Southern Philippines Medical Center (SPMC) and district social welfare centers. Bring a medical abstract, hospital billing, and barangay certificate of indigency.",
    ceb: "💊 **Lingap para sa Mahirap**: Tabang pinansyal sa dakbayan para sa tambal, dialysis, bayad sa ospital, ug lubong. Naa sa SPMC ug district centers. Pagdala ug medical abstract, reseta, ug certificate of indigency gikan sa barangay."
  },
  {
    keywords: ["business", "permit", "ebpls", "negosyo", "renew"],
    en: "🏢 **Online Business Permit (eBPLS)**: Applications and renewals are processed digitally through the city's official eBPLS portal. Check our **E-Services** directory for direct step-by-step submission links and requirements.",
    ceb: "🏢 **Online Business Permit (eBPLS)**: Ang aplikasyon ug renewal sa permit sa negosyo mahimong maproseso online sa eBPLS portal. Tan-awa ang atong **E-Services** nga panid alang sa diretsong link."
  },
  {
    keywords: ["water", "tap", "tubig", "dcwd", "mainom"],
    en: "💧 **Davao Potable Tap Water**: Sourced from deep pristine aquifers by Davao City Water District (DCWD), our tap water meets World Health Organization (WHO) and Philippine National Standards for Drinking Water—making it directly drinkable straight from the tap!",
    ceb: "💧 **Mainom nga Tubig sa Davao**: Ang tubig sa DCWD gikan sa limpyong tubod sa ilalom sa yuta ug pasado sa sumbanan sa WHO—luwas ug pwedeng imnon direkta sa gripo!"
  },
  {
    keywords: ["budget", "funds", "tax", "pondo", "pera", "kwarta", "buhis"],
    en: "📊 **City Fiscal Budget**: Davao City operates on an approved budget of **₱12.7 Billion** (7.62% increase over 2023). 79.82% covers the General Fund for public services, salaries, and health, while 19.04% funds the Annual Development Fund (infrastructure). Check our **/budget** page for full interactive charts!",
    ceb: "📊 **Pondo sa Dakbayan**: Ang Davao naglihok ubos sa **₱12.7 Bilyon** nga pondo. 79.82% para sa General Fund (sweldo sa health workers, serbisyo) ug 19.04% para sa mga imprastraktura. Bisitaha ang atong **/budget** page para sa katin-awan!"
  },
  {
    keywords: ["mayor", "vice mayor", "officials", "council", "baste", "duterte", "melchor", "quitain"],
    en: "🏛️ **City Leadership**: The City Mayor is **Sebastian 'Baste' Z. Duterte**, and the Vice Mayor (Presiding Officer of the 21st Sangguniang Panlungsod) is **J. Melchor B. Quitain Jr.** Visit our **/council** page for contact details of all 24 district councilors.",
    ceb: "🏛️ **Mga Pangulo sa Dakbayan**: Ang Mayor mao si **Sebastian 'Baste' Z. Duterte**, ug ang Bise Mayor mao si **J. Melchor B. Quitain Jr.** Tan-awa ang atong **/council** page para sa tanang konsehal sa 3 ka distrito."
  }
];

export default function AskDavaoAI() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "bot",
      text:
        language === "ceb"
          ? "Maayong adlaw! Ako ang Davao Civic AI. Pangutana bahin sa Central 911, mga ordinansa (liquor ban, smoking, speed limit), eBPLS business permits, o serbisyo sa dakbayan!"
          : "Hello! I am your Davao Civic AI Assistant. Ask me anything about Central 911, city ordinances (liquor ban, smoking, speed limit), e-services, or city budget!",
      timestamp: "Just now"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const qLower = query.toLowerCase();
      let matched = KNOWLEDGE_RESPONSES.find((item) =>
        item.keywords.some((k) => qLower.includes(k))
      );

      let reply = "";
      if (matched) {
        reply = language === "ceb" ? matched.ceb : matched.en;
      } else {
        reply =
          language === "ceb"
            ? "Pasayloa, wala nako hingpit nga nasabtan ang imong pangutana. Pwede nimo bisitahon ang among **E-Services**, **/ordinances**, o tawagan ang Davao City Hall sa **(082) 241-1000** o **911** alang sa emerhensya."
            : "I don't have a direct answer for that specific inquiry yet. You can browse our **E-Services Directory**, inspect our **12-Point Priority Agenda**, or reach Davao City Hall directly at **(082) 241-1000** (or dial **911** for urgent emergencies).";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: reply,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ]);
      setIsTyping(false);
    }, 450);
  };

  const quickPrompts = [
    { label: "🚨 Central 911", q: "How does Davao 911 work?" },
    { label: "🍺 Liquor Ban", q: "What are the liquor ban hours?" },
    { label: "🚭 Smoking Law", q: "What is the anti-smoking ordinance?" },
    { label: "🚗 Speed Limits", q: "What are the speed limits?" },
    { label: "💊 Lingap Aid", q: "How do I apply for Lingap assistance?" },
    { label: "🏢 Business Permit", q: "How to apply for business permit online?" }
  ];

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-2xl transition-all transform hover:scale-105 active:scale-95 border-2 border-white/20"
            title="Open Ask Davao AI Assistant"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-extrabold text-xs sm:text-sm tracking-wide">
              {language === "ceb" ? "Pangutan-a ang AI" : "Ask Davao AI"}
            </span>
            <span className="text-base">💬</span>
          </button>
        )}
      </div>

      {/* Chat Drawer / Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-4 sm:right-6 z-50 w-[92vw] sm:w-[400px] h-[540px] max-h-[85vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white flex items-center justify-between border-b border-blue-900/40">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-black text-sm shadow-xs">
                AI
              </div>
              <div>
                <h3 className="font-bold text-sm leading-none">Davao Civic Assistant</h3>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Verified Civic Knowledge Base
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() =>
                  setMessages([
                    {
                      id: "welcome",
                      sender: "bot",
                      text: "Chat cleared. How can I assist you with Davao City services today?",
                      timestamp: "Just now"
                    }
                  ])
                }
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 text-xs"
                title="Clear Chat"
              >
                🗑️
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 text-sm font-bold"
                title="Close"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-3 py-2 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/80 flex gap-1.5 overflow-x-auto no-scrollbar text-[11px]">
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(p.q)}
                className="shrink-0 px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:border-blue-400 transition"
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50/50 dark:bg-slate-900/50 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                    m.sender === "user"
                      ? "bg-blue-600 text-white rounded-br-xs shadow-xs"
                      : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-xs border border-slate-200 dark:border-slate-700 shadow-xs"
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[10px] text-slate-400 mt-1 px-1">{m.timestamp}</span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 w-20">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2">
            <input
              type="text"
              placeholder={language === "ceb" ? "Pangutana bahin sa Davao..." : "Ask about Davao ordinances, 911, permits..."}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => handleSend()}
              className="px-3.5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition shrink-0"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

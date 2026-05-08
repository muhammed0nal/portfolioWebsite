import React, { useState } from "react";
import RetroCard from "../components/RetroCard";
import Button from "../components/Button";

const tabs = ["Tümü", "PDF", "Döküman", "Bağlantı"];

const contents = [
  {
    id: 1,
    type: "PDF",
    icon: "📄",
    title: "JavaScript ES6+ Cheat Sheet",
    description:
      "Modern JavaScript sözdizimi, destructuring, spread operator, arrow functions ve daha fazlasını kapsayan kapsamlı bir referans dökümanı.",
    size: "2.4 MB",
    date: "01.05.2026",
  },
  {
    id: 2,
    type: "Bağlantı",
    icon: "🔗",
    title: "React Resmi Dokümantasyonu",
    description:
      "React'in resmi web sitesindeki güncel dokümantasyon. Hooks, Server Components ve en iyi pratikler hakkında detaylı bilgi.",
    url: "https://react.dev",
    date: "28.04.2026",
  },
  {
    id: 3,
    type: "PDF",
    icon: "📄",
    title: "Node.js Backend Geliştirme Rehberi",
    description:
      "Express.js, middleware yapısı, authentication, veritabanı bağlantıları ve deployment süreçlerini anlatan detaylı bir PDF rehber.",
    size: "5.1 MB",
    date: "22.04.2026",
  },
  {
    id: 4,
    type: "Döküman",
    icon: "📝",
    title: "Git & GitHub Komut Referansı",
    description:
      "Günlük kullanımda en sık ihtiyaç duyulan git komutlarını, branch stratejilerini ve conflict çözümlerini içeren notlarım.",
    size: "340 KB",
    date: "15.04.2026",
  },
  {
    id: 5,
    type: "Bağlantı",
    icon: "🔗",
    title: "Tailwind CSS Playground",
    description:
      "Tailwind CSS ile tarayıcı üzerinde anlık deneme yapabileceğiniz interaktif bir ortam. Hızlı prototipleme için ideal.",
    url: "https://play.tailwindcss.com",
    date: "10.04.2026",
  },
  {
    id: 6,
    type: "Döküman",
    icon: "📝",
    title: "Yazılım Mülakat Soruları Notlarım",
    description:
      "Frontend mülakat süreçlerinde karşılaştığım teknik sorular, algoritma problemleri ve davranışsal soru örneklerini derlediğim döküman.",
    size: "1.8 MB",
    date: "03.04.2026",
  },
  {
    id: 7,
    type: "PDF",
    icon: "📄",
    title: "UI/UX Tasarım Prensipleri",
    description:
      "Renk teorisi, tipografi, spacing, hiyerarşi ve kullanıcı deneyimi ile ilgili temel tasarım prensiplerini özetleyen kaynak.",
    size: "3.7 MB",
    date: "25.03.2026",
  },
  {
    id: 8,
    type: "Bağlantı",
    icon: "🔗",
    title: "MDN Web Docs",
    description:
      "Mozilla'nın kapsamlı web teknolojileri referansı. HTML, CSS ve JavaScript API'leri için en güvenilir kaynaklardan biri.",
    url: "https://developer.mozilla.org",
    date: "18.03.2026",
  },
];

export default function Content() {
  const [activeTab, setActiveTab] = useState("Tümü");

  const filtered =
    activeTab === "Tümü"
      ? contents
      : contents.filter((c) => c.type === activeTab);

  return (
    <div>
      {/* Kategori Tabları */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tabs.map((tab) => (
          <Button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={
              activeTab === tab
                ? "bg-[#999999]! border-t-[#9D9E9B]! border-l-[#9D9E9B]! border-b-white! border-r-white!"
                : ""
            }
          >
            {tab === "PDF" && "📄 "}
            {tab === "Döküman" && "📝 "}
            {tab === "Bağlantı" && "🔗 "}
            {tab}
          </Button>
        ))}
      </div>

      {/* İçerik Listesi */}
      <RetroCard header={"İÇERİKLER"}>
        <div className="divide-y-2 divide-black/20">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-4 flex gap-4 items-start hover:bg-[#c0c0c0] transition-colors cursor-pointer"
            >
              {/* İkon */}
              <div className="w-[52px] h-[52px] bg-white border-[3px] border-black shadow-[2px_2px_0_#000] flex items-center justify-center shrink-0 text-[24px]">
                {item.icon}
              </div>

              {/* Detaylar */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-black font-bold text-[18px] leading-tight">
                    {item.title}
                  </h3>
                  <span className="inline-block bg-[#2f2ac6] text-white text-[11px] font-bold px-2 py-0.5 border-2 border-black select-none">
                    {item.type}
                  </span>
                </div>
                <p className="text-black text-[14px] leading-snug mt-1">
                  {item.description}
                </p>
                <div className="flex items-center gap-3 mt-2 text-[12px] text-black/60">
                  <span>{item.date}</span>
                  {item.size && <span>📦 {item.size}</span>}
                  {item.url && (
                    <span className="truncate">🌐 {item.url}</span>
                  )}
                </div>
              </div>

              {/* Aksiyon Butonu */}
              <div className="shrink-0 self-center">
                <Button className="text-xs! px-3! py-1!">
                  {item.type === "Bağlantı" ? "Aç" : "İndir"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </RetroCard>
    </div>
  );
}

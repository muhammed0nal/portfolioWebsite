import React, { useState } from "react";
import RetroCard from "../components/RetroCard";
import Button from "../components/Button";
import logo from "../assets/logo_site.png";

const categories = ["Tümü", "Doğa", "Şehir", "Portre", "Teknoloji", "Seyahat"];

const photos = [
  { id: 1, src: logo, title: "Gün Batımı", category: "Doğa", date: "02.05.2026" },
  { id: 2, src: logo, title: "İstanbul Silüeti", category: "Şehir", date: "28.04.2026" },
  { id: 3, src: logo, title: "Kod Yazarken", category: "Teknoloji", date: "22.04.2026" },
  { id: 4, src: logo, title: "Kapadokya Balonları", category: "Seyahat", date: "15.04.2026" },
  { id: 5, src: logo, title: "Portre Çalışması", category: "Portre", date: "10.04.2026" },
  { id: 6, src: logo, title: "Orman Yolu", category: "Doğa", date: "05.04.2026" },
  { id: 7, src: logo, title: "Setup Masam", category: "Teknoloji", date: "01.04.2026" },
  { id: 8, src: logo, title: "Galata Kulesi", category: "Şehir", date: "25.03.2026" },
  { id: 9, src: logo, title: "Antalya Sahil", category: "Seyahat", date: "18.03.2026" },
  { id: 10, src: logo, title: "Yansıma", category: "Portre", date: "12.03.2026" },
  { id: 11, src: logo, title: "Dağ Manzarası", category: "Doğa", date: "05.03.2026" },
  { id: 12, src: logo, title: "Gece Şehri", category: "Şehir", date: "28.02.2026" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    activeCategory === "Tümü"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Kategori Filtreleri */}
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((cat) => (
          <Button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={
              activeCategory === cat
                ? "bg-[#999999]! border-t-[#9D9E9B]! border-l-[#9D9E9B]! border-b-white! border-r-white!"
                : ""
            }
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Galeri Grid */}
      <RetroCard header={"GALERİ"}>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[3px] bg-black/20 p-[3px]">
          {filtered.map((photo) => (
            <div
              key={photo.id}
              className="group relative bg-white overflow-hidden cursor-pointer"
              onClick={() => setLightbox(photo)}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-200 flex items-end">
                <div className="w-full p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                  <p className="text-white text-[14px] font-bold truncate">
                    {photo.title}
                  </p>
                  <p className="text-white/70 text-[11px]">{photo.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </RetroCard>

      {/* Lightbox */}
      <div
        className={`
          fixed inset-0 bg-black/80 z-60
          flex items-center justify-center p-4
          transition-opacity duration-200
          ${lightbox ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setLightbox(null)}
      >
        {lightbox && (
          <div
            className={`
              max-w-[700px] w-full
              bg-[#cfcfcf] border-[3px] border-black shadow-[6px_6px_0_#000]
              transition-all duration-200
              ${lightbox ? "scale-100 opacity-100" : "scale-95 opacity-0"}
            `}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-[50px] bg-[#2f2ac6] border-b-[3px] border-black px-4 flex items-center justify-between">
              <span className="text-white text-[18px] font-bold select-none truncate mr-2">
                {lightbox.title}
              </span>
              <Button onClick={() => setLightbox(null)} className="py-2">
                <span className="text-[14px]">✕</span>
              </Button>
            </div>
            <div className="p-2">
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="w-full object-contain border-2 border-black"
              />
            </div>
            <div className="px-4 pb-3 flex items-center justify-between text-black text-[13px]">
              <span className="font-bold">{lightbox.category}</span>
              <span className="text-black/60">{lightbox.date}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

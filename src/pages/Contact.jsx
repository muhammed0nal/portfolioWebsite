import React from "react";
import RetroCard from "../components/RetroCard";
import Button from "../components/Button";

const socials = [
  {
    name: "E-posta",
    icon: "✉️",
    value: "muhammed@example.com",
    url: "mailto:muhammed@example.com",
    color: "#d44638",
  },
  {
    name: "LinkedIn",
    icon: "💼",
    value: "linkedin.com/in/muhammedonal",
    url: "https://linkedin.com/in/muhammedonal",
    color: "#0077b5",
  },
  {
    name: "Instagram",
    icon: "📸",
    value: "@muhammedonal",
    url: "https://instagram.com/muhammedonal",
    color: "#e1306c",
  },
  {
    name: "GitHub",
    icon: "💻",
    value: "github.com/muhammedonal",
    url: "https://github.com/muhammedonal",
    color: "#333",
  },
];

export default function Contact() {
  return (
    <div className="max-w-[600px] mx-auto">
      <RetroCard header={"İLETİŞİM"}>
        <div className="p-5 text-black">
          <p className="text-[16px] mb-5 leading-relaxed">
            Benimle iletişime geçmek için aşağıdaki kanalları kullanabilirsiniz.
            İş birlikleri, projeler veya sohbet için her zaman ulaşabilirsiniz.
          </p>

          <div className="flex flex-col gap-3">
            {socials.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 bg-white border-[3px] border-t-white border-l-white border-b-[#9D9E9B] border-r-[#9D9E9B] outline-2 outline-black hover:bg-[#e8e8e8] transition-colors"
              >
                <div
                  className="w-[44px] h-[44px] border-2 border-black flex items-center justify-center text-[22px] shrink-0"
                  style={{ backgroundColor: item.color + "20" }}
                >
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-[16px]">{item.name}</p>
                  <p className="text-[13px] text-black/60 truncate">
                    {item.value}
                  </p>
                </div>
                <div className="ml-auto shrink-0">
                  <Button className="text-xs! px-3! py-1!">Aç</Button>
                </div>
              </a>
            ))}
          </div>
        </div>
      </RetroCard>
    </div>
  );
}

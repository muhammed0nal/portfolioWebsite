import React from "react";
import RetroCard from "../components/RetroCard";
import Button from "../components/Button";

const experiences = [
  {
    company: "TechNova Solutions",
    role: "Frontend Developer",
    period: "2024 - Günümüz",
    description:
      "React ve Next.js kullanarak kurumsal web uygulamaları geliştirdim. Performans optimizasyonları ile sayfa yüklenme sürelerini %40 azalttım.",
  },
  {
    company: "PixelCraft Agency",
    role: "Junior Web Developer",
    period: "2022 - 2024",
    description:
      "Müşteri projelerinde responsive tasarımlar ve interaktif kullanıcı arayüzleri oluşturdum. Tailwind CSS ve JavaScript ile 15+ proje teslim ettim.",
  },
  {
    company: "CodeBase Startup",
    role: "Stajyer Yazılımcı",
    period: "2021 - 2022",
    description:
      "React Native ile mobil uygulama geliştirme süreçlerine katıldım. REST API entegrasyonları ve state management konularında deneyim kazandım.",
  },
];

const projects = [
  {
    name: "E-Ticaret Platformu",
    tech: "React, Node.js, MongoDB",
    description:
      "Tam kapsamlı bir e-ticaret uygulaması. Ödeme sistemi entegrasyonu, sepet yönetimi ve admin paneli içerir.",
  },
  {
    name: "Görev Yöneticisi",
    tech: "React Native, Firebase",
    description:
      "Ekip bazlı görev takip uygulaması. Gerçek zamanlı bildirimler ve sürükle-bırak özellikli kanban board.",
  },
  {
    name: "Hava Durumu Uygulaması",
    tech: "Next.js, OpenWeather API",
    description:
      "Konum bazlı hava durumu tahminleri sunan, grafik ve animasyonlarla zenginleştirilmiş web uygulaması.",
  },
];

export default function AboutMe() {
  return (
    <div className="md:grid md:grid-rows-[auto_auto] gap-4">
      {/* Üst satır - Hakkımda */}
      <div className="mb-4 md:mb-0">
        <RetroCard header={"HAKKIMDA"}>
          <div className="px-6 py-4 text-black">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* <div className="w-[120px] h-[120px] bg-[#2f2ac6] border-[3px] border-black shadow-[3px_3px_0_#000] flex items-center justify-center shrink-0">
                <span className="text-white text-[48px] font-bold select-none">
                  MO
                </span>
              </div> */}
              <div>
                <h2 className="text-[28px] font-bold mb-2">Muhammed Onal</h2>
                <p className="text-[16px] leading-relaxed mb-3">
                  Merhaba! Ben Muhammed, 3 yılı aşkın deneyime sahip bir
                  Frontend Developer'ım. JavaScript ekosisteminde uzmanlaşmış
                  olup React, React Native ve Node.js ile modern, performanslı
                  ve kullanıcı dostu uygulamalar geliştiriyorum.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "JavaScript",
                    "React",
                    "React Native",
                    "Node.js",
                    "Next.js",
                    "Tailwind CSS",
                  ].map((skill) => (
                    <Button key={skill} className="!text-xs !px-3 !py-1">
                      {skill}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RetroCard>
      </div>

      {/* Alt satır - İş Tecrübeleri & Projeler */}
      <div className="md:grid md:grid-cols-2 gap-4">
        {/* İş Tecrübeleri */}
        <div className="mb-4 md:mb-0">
          <RetroCard header={"İŞ TECRÜBELERİ"}>
            <div className="text-black">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`p-4 ${index !== experiences.length - 1 ? "border-b-2 border-black/20" : ""}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-[10px] h-[10px] bg-[#2f2ac6] border-2 border-black mt-1.5 shrink-0" />
                    <div>
                      <h3 className="font-bold text-[18px]">{exp.company}</h3>
                      <p className="text-[14px] font-bold text-[#2f2ac6]">
                        {exp.role}
                      </p>
                      <p className="text-[12px] mb-1">{exp.period}</p>
                      <p className="text-[14px] leading-snug">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RetroCard>
        </div>

        {/* Projeler */}
        <div className="mb-4 md:mb-0">
          <RetroCard header={"PROJELERİM"}>
            <div className="text-black">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`p-4 ${index !== projects.length - 1 ? "border-b-2 border-black/20" : ""}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-[10px] h-[10px] bg-[#2f2ac6] border-2 border-black mt-1.5 shrink-0" />
                    <div>
                      <h3 className="font-bold text-[18px]">{project.name}</h3>
                      <p className="text-[14px] font-bold text-[#2f2ac6]">
                        {project.tech}
                      </p>
                      <p className="text-[14px] leading-snug mt-1">
                        {project.description}
                      </p>
                      <Button className="!text-xs !px-3 !py-1 mt-2">
                        Detaylar
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RetroCard>
        </div>
      </div>
    </div>
  );
}

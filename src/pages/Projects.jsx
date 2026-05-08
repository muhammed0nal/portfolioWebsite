import React from "react";
import RetroCard from "../components/RetroCard";
import Button from "../components/Button";

const languageColors = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  "C#": "#178600",
};

const repos = [
  {
    id: 1,
    name: "e-commerce-app",
    description:
      "Full-stack e-ticaret uygulaması. React frontend, Node.js backend, MongoDB veritabanı. Ödeme entegrasyonu ve admin paneli dahil.",
    language: "JavaScript",
    stars: 24,
    forks: 8,
    updatedAt: "3 gün önce",
    topics: ["react", "nodejs", "mongodb", "e-commerce"],
    url: "https://github.com/muhammedonal/e-commerce-app",
  },
  {
    id: 2,
    name: "task-manager-mobile",
    description:
      "React Native ile geliştirilmiş ekip bazlı görev yönetim uygulaması. Firebase entegrasyonu, push notification ve kanban board.",
    language: "TypeScript",
    stars: 18,
    forks: 5,
    updatedAt: "1 hafta önce",
    topics: ["react-native", "firebase", "mobile", "typescript"],
    url: "https://github.com/muhammedonal/task-manager-mobile",
  },
  {
    id: 3,
    name: "portfolio-website",
    description:
      "Kişisel portfolyo web sitesi. Retro/pixel-art tasarım teması, Tailwind CSS ve React ile geliştirildi.",
    language: "JavaScript",
    stars: 12,
    forks: 3,
    updatedAt: "bugün",
    topics: ["react", "tailwind", "portfolio", "retro"],
    url: "https://github.com/muhammedonal/portfolio-website",
  },
  {
    id: 4,
    name: "weather-forecast",
    description:
      "Next.js tabanlı hava durumu uygulaması. OpenWeather API entegrasyonu, konum bazlı tahminler ve grafiksel gösterimler.",
    language: "TypeScript",
    stars: 9,
    forks: 2,
    updatedAt: "2 hafta önce",
    topics: ["nextjs", "api", "weather", "charts"],
    url: "https://github.com/muhammedonal/weather-forecast",
  },
  {
    id: 5,
    name: "python-data-scraper",
    description:
      "Web scraping aracı. BeautifulSoup ve Selenium kullanarak çeşitli kaynaklardan veri toplama ve CSV/JSON formatında dışa aktarma.",
    language: "Python",
    stars: 31,
    forks: 14,
    updatedAt: "1 ay önce",
    topics: ["python", "scraping", "selenium", "automation"],
    url: "https://github.com/muhammedonal/python-data-scraper",
  },
  {
    id: 6,
    name: "css-retro-components",
    description:
      "Windows 95/98 tarzı retro UI component kütüphanesi. Pure CSS ile geliştirilmiş, herhangi bir framework ile kullanılabilir.",
    language: "CSS",
    stars: 45,
    forks: 11,
    updatedAt: "3 hafta önce",
    topics: ["css", "retro", "ui-library", "components"],
    url: "https://github.com/muhammedonal/css-retro-components",
  },
];

export default function Projects() {
  return (
    <div>
      {/* GitHub Profil Başlığı */}
      <div className="mb-4">
        <RetroCard header={"PROJELERİM"}>
          <div className="px-5 py-3 flex items-center justify-between text-black">
            <div className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] bg-[#2f2ac6] border-2 border-black flex items-center justify-center text-white font-bold text-[18px] select-none">
                MO
              </div>
              <div>
                <span className="font-bold text-[18px]">muhammedonal</span>
                <span className="text-[14px] text-black/60 ml-2">
                  · {repos.length} repo
                </span>
              </div>
            </div>
            <a
              href="https://github.com/muhammed0nal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Profİle Gİt</Button>
            </a>
          </div>
        </RetroCard>
      </div>

      {/* Repo Listesi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="bg-[#cfcfcf] border-[3px] border-black shadow-[4px_4px_0_#000] overflow-hidden hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] transition-all"
          >
            <div className="p-4">
              {/* Repo Adı */}
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-[#2f2ac6] font-bold text-[18px] leading-tight">
                  📁 {repo.name}
                </h3>
                <span className="shrink-0 text-[11px] font-bold bg-white border-2 border-black px-2 py-0.5 select-none">
                  PUBLIC
                </span>
              </div>

              {/* Açıklama */}
              <p className="text-black text-[14px] leading-snug mt-2 line-clamp-2">
                {repo.description}
              </p>

              {/* Topic'ler */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {repo.topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-[11px] font-bold bg-[#2f2ac6]/15 text-[#2f2ac6] border border-[#2f2ac6]/40 px-2 py-0.5"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* Alt Bilgi */}
              <div className="flex items-center gap-4 mt-3 pt-3 border-t-2 border-black/20 text-[13px] text-black/70">
                <span className="flex items-center gap-1">
                  <span
                    className="inline-block w-3 h-3 rounded-full border border-black/30"
                    style={{
                      backgroundColor: languageColors[repo.language] || "#ccc",
                    }}
                  />
                  {repo.language}
                </span>
                <span>⭐ {repo.stars}</span>
                <span>🍴 {repo.forks}</span>
                <span className="ml-auto">{repo.updatedAt}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

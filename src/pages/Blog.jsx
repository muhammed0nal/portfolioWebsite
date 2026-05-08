import React, { useState } from "react";
import Button from "../components/Button";
import logo from "../assets/logo_site.png";

const categories = [
  "Tümü",
  "JavaScript",
  "React",
  "CSS",
  "Node.js",
  "Mobil",
  "Kariyer",
];

const blogPosts = [
  {
    id: 1,
    image: logo,
    category: "JavaScript",
    title: "JavaScript'te Async/Await Kullanımı",
    content:
      "Asenkron programlama JavaScript'in en güçlü özelliklerinden biridir. Bu yazıda async/await yapısını derinlemesine inceliyoruz ve Promise chain'lere kıyasla avantajlarını ele alıyoruz...",
    author: "Muhammed Onal",
    date: "02.05.2026",
    readTime: "5 dk",
  },
  {
    id: 2,
    image: logo,
    category: "React",
    title: "React Server Components Nedir?",
    content:
      "React 19 ile birlikte gelen Server Components, uygulamalarımızın performansını ciddi oranda artırıyor. Sunucu tarafında render edilen bileşenler ile bundle size nasıl küçülür...",
    author: "Muhammed Onal",
    date: "28.04.2026",
    readTime: "8 dk",
  },
  {
    id: 3,
    image: logo,
    category: "CSS",
    title: "Tailwind CSS ile Retro Tasarım",
    content:
      "Retro ve pixel-art tarzı web tasarımları son dönemde popülerlik kazandı. Tailwind CSS utility sınıfları ile nasıl nostaljik arayüzler oluşturabileceğinizi anlatıyoruz...",
    author: "Muhammed Onal",
    date: "20.04.2026",
    readTime: "6 dk",
  },
  {
    id: 4,
    image: logo,
    category: "Node.js",
    title: "Express.js ile REST API Oluşturma",
    content:
      "Backend geliştirmeye yeni başlayanlar için Express.js mükemmel bir tercih. Bu rehberde sıfırdan bir REST API oluşturup, CRUD işlemlerini adım adım implemente ediyoruz...",
    author: "Muhammed Onal",
    date: "15.04.2026",
    readTime: "10 dk",
  },
  {
    id: 5,
    image: logo,
    category: "Mobil",
    title: "React Native ile İlk Uygulamanız",
    content:
      "Mobil uygulama geliştirmek hiç bu kadar kolay olmamıştı. React Native kullanarak hem iOS hem Android için tek kod tabanıyla nasıl uygulama geliştireceğinizi öğrenin...",
    author: "Muhammed Onal",
    date: "08.04.2026",
    readTime: "7 dk",
  },
  {
    id: 6,
    image: logo,
    category: "Kariyer",
    title: "Junior Developer Olarak İş Bulmak",
    content:
      "Yazılım sektörüne yeni adım atanlar için iş arama süreci zorlu olabilir. Portfolyo hazırlama, mülakat teknikleri ve networking stratejileri hakkında deneyimlerimi paylaşıyorum...",
    author: "Muhammed Onal",
    date: "01.04.2026",
    readTime: "4 dk",
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      {/* Arama Çubuğu */}
      <div className="mb-4">
        <div className="bg-[#cfcfcf] border-[3px] border-black shadow-[4px_4px_0_#000] p-3 flex items-center gap-3">
          <span className="text-black font-bold text-[18px] select-none shrink-0">
            ARA:
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Blog yazılarında ara..."
            className="w-full px-3 py-2 bg-white border-[3px] border-t-[#9D9E9B] border-l-[#9D9E9B] border-b-white border-r-white outline-none text-black text-[16px]"
            style={{ fontFamily: '"PixelOperator"' }}
          />
          <Button>Bul</Button>
        </div>
      </div>

      {/* Kategoriler */}
      <div className="mb-4 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <Button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={
              selectedCategory === cat
                ? "bg-[#999999]! border-t-[#9D9E9B]! border-l-[#9D9E9B]! border-b-white! border-r-white!"
                : ""
            }
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Blog Yazıları Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-[#cfcfcf] border-[3px] border-black shadow-[4px_4px_0_#000] overflow-hidden cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] transition-all"
          >
            {/* Resim */}
            <div className="w-full h-[180px] bg-white border-b-[3px] border-black overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4">
              {/* Kategori */}
              <span className="inline-block bg-[#2f2ac6] text-white text-[12px] font-bold px-2 py-1 border-2 border-black select-none">
                {post.category}
              </span>

              {/* Başlık */}
              <h3 className="text-black font-bold text-[18px] mt-2 leading-tight">
                {post.title}
              </h3>

              {/* İçerik Özeti */}
              <p className="text-black text-[14px] mt-2 leading-snug line-clamp-3">
                {post.content}
              </p>

              {/* Alt Bilgi */}
              <div className="mt-3 pt-3 border-t-2 border-black/20 flex items-center justify-between text-[12px] text-black/70">
                <span className="font-bold">{post.author}</span>
                <div className="flex items-center gap-2">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

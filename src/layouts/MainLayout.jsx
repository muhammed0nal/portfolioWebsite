// import { useState } from "react";
// import { Outlet, Link } from "react-router-dom";
// import logo from "../assets/logo_site.png";
// import Button from "../components/Button";

// export default function MainLayout() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div>
//       <div className="text-right md:mb-4">
//         <a href="">dsdsd</a>
//         <a href="">dss</a>
//         <a href="">dsd</a>
//         <hr />
//       </div>

//       {/* Hamburger butonu - sadece mobilde görünür */}
//       <div className="md:hidden text-2xl p-2 text-right flex align-bottom justify-between">
//         <Link className="md:hidden text-2xl p-2 " to={"/"}>
//           <img className="w-16" src={logo} alt="logo" />
//         </Link>
//         <button onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? "✕" : "☰"}
//         </button>
//       </div>

//       {/* Masaüstü menü */}
//       <div className="hidden md:flex md:flex-wrap md:items-center">
//         <Link to={"/"}>
//           {" "}
//           <img className="w-20" src={logo} alt="logo" />
//         </Link>
//         <Link className="mr-4 ml-4" to={"/about"}>
//           <Button>Hakkımda</Button>
//         </Link>
//         <Link className="mr-4" to={"/blog"}>
//           <Button>Blog</Button>
//         </Link>
//         <Link className="mr-4" to={"/content"}>
//           <Button>İçerİkler</Button>
//         </Link>
//         <Link className="mr-4" to={"/projects"}>
//           <Button>Projeler</Button>
//         </Link>
//         <Link className="mr-4" to={"/gallery"}>
//           <Button>Galerİ</Button>
//         </Link>
//         <Link to={"/contact"}>
//           <Button>İletİşİm</Button>
//         </Link>
//       </div>

//       {/* Mobil menü */}
//       {menuOpen && (
//         <div className="flex flex-col items-center gap-3">
//           <Link to={"/about"} onClick={() => setMenuOpen(false)}>
//             <Button>Hakkımda</Button>
//           </Link>
//           <Link to={"/blog"} onClick={() => setMenuOpen(false)}>
//             <Button>Blog</Button>
//           </Link>
//           <Link to={"/content"} onClick={() => setMenuOpen(false)}>
//             <Button>İçerİkler</Button>
//           </Link>
//           <Link to={"/projects"} onClick={() => setMenuOpen(false)}>
//             <Button>Projeler</Button>
//           </Link>
//           <Link to={"/gallery"} onClick={() => setMenuOpen(false)}>
//             <Button>Galerİ</Button>
//           </Link>
//           <Link to={"/contact"} onClick={() => setMenuOpen(false)}>
//             <Button>İletİşİm</Button>
//           </Link>
//         </div>
//       )}

//       <Outlet />
//     </div>
//   );
// }

import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo_site.png";
import Button from "../components/Button";

export default function MainLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <div className="text-right md:mb-4">
        <a href="">dsdsd</a>
        <a href="">dss</a>
        <a href="">dsd</a>
        <hr />
      </div>
      <div className="md:hidden text-2xl p-2 text-right flex align-bottom justify-between">
        <Link className="md:hidden text-2xl p-2 " to={"/"}>
          <img className="w-16" src={logo} alt="logo" />
        </Link>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <Button>
            <span
              className={`inline-block transition-transform duration-200 ${menuOpen ? "rotate-90" : ""}`}
            >
              {menuOpen ? "✕" : "☰"}
            </span>
          </Button>
        </button>
      </div>
      <div className="hidden md:flex md:flex-wrap md:items-center">
        <Link to={"/"}>
          <img className="w-20" src={logo} alt="logo" />
        </Link>
        <Link className="mr-4 ml-4" to={"/about"}>
          <Button>Hakkımda</Button>
        </Link>
        <Link className="mr-4" to={"/blog"}>
          <Button>Blog</Button>
        </Link>
        <Link className="mr-4" to={"/content"}>
          <Button>İçerİkler</Button>
        </Link>
        <Link className="mr-4" to={"/projects"}>
          <Button>Projeler</Button>
        </Link>
        <Link className="mr-4" to={"/gallery"}>
          <Button>Galerİ</Button>
        </Link>
        <Link to={"/contact"}>
          <Button>İletİşİm</Button>
        </Link>

        <div className="ml-4">
          <Button onClick={() => setSearchOpen(true)} className="px-2! py-2!">
            🔍
          </Button>
        </div>
      </div>
      {/* Overlay */}
      <div
        className={`
          fixed inset-0 bg-black/50 z-40 md:hidden
          transition-opacity duration-300
          ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setMenuOpen(false)}
      />

      {/* Sağdan açılan menü */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[260px] z-50 md:hidden
          bg-[#cfcfcf] border-l-[3px] border-black shadow-[-4px_0_0_#000]
          flex flex-col
          transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="h-[70px] bg-[#2f2ac6] border-b-[3px] border-black px-4 flex items-center justify-between">
          <span className="text-white text-[24px] font-bold select-none">
            MENÜ
          </span>
          <Button onClick={() => setMenuOpen(false)} className="py-3">
            <span className="text-[16px]">✕</span>
          </Button>
        </div>

        <div className="flex flex-col gap-3 p-5">
          <Button
            className="w-full"
            onClick={() => {
              setSearchOpen(true);
              setMenuOpen(false);
            }}
          >
            🔍
          </Button>
          <Link to={"/about"} onClick={() => setMenuOpen(false)}>
            <Button className="w-full">Hakkımda</Button>
          </Link>
          <Link to={"/blog"} onClick={() => setMenuOpen(false)}>
            <Button className="w-full">Blog</Button>
          </Link>
          <Link to={"/content"} onClick={() => setMenuOpen(false)}>
            <Button className="w-full">İçerİkler</Button>
          </Link>
          <Link to={"/projects"} onClick={() => setMenuOpen(false)}>
            <Button className="w-full">Projeler</Button>
          </Link>
          <Link to={"/gallery"} onClick={() => setMenuOpen(false)}>
            <Button className="w-full">Galerİ</Button>
          </Link>
          <Link to={"/contact"} onClick={() => setMenuOpen(false)}>
            <Button className="w-full">İletİşİm</Button>
          </Link>
        </div>
      </div>
      {/* Arama Popup Overlay */}
      <div
        className={`
          fixed inset-0 bg-black/60 z-60
          flex items-start justify-center pt-[15vh]
          transition-opacity duration-200
          ${searchOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setSearchOpen(false)}
      >
        {/* Arama Popup */}
        <div
          className={`
            w-[90%] max-w-[520px]
            bg-[#cfcfcf] border-[3px] border-black shadow-[6px_6px_0_#000]
            transition-all duration-200
            ${searchOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-[50px] bg-[#2f2ac6] border-b-[3px] border-black px-4 flex items-center justify-between">
            <span className="text-white text-[20px] font-bold select-none">
              ARA
            </span>
            <Button onClick={() => setSearchOpen(false)} className="py-2">
              <span className="text-[14px]">✕</span>
            </Button>
          </div>
          <div className="p-5">
            <div className="flex items-center gap-2">
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
        </div>
      </div>

      <Outlet />
    </div>
  );
}

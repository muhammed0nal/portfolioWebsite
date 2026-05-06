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
      </div>
      <div
        className={`
          flex flex-col items-center gap-3 md:hidden
          overflow-hidden transition-all duration-300 ease-in-out
          ${menuOpen ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0"}
        `}
      >
        <Link to={"/about"} onClick={() => setMenuOpen(false)}>
          <Button>Hakkımda</Button>
        </Link>
        <Link to={"/blog"} onClick={() => setMenuOpen(false)}>
          <Button>Blog</Button>
        </Link>
        <Link to={"/content"} onClick={() => setMenuOpen(false)}>
          <Button>İçerİkler</Button>
        </Link>
        <Link to={"/projects"} onClick={() => setMenuOpen(false)}>
          <Button>Projeler</Button>
        </Link>
        <Link to={"/gallery"} onClick={() => setMenuOpen(false)}>
          <Button>Galerİ</Button>
        </Link>
        <Link to={"/contact"} onClick={() => setMenuOpen(false)}>
          <Button>İletİşİm</Button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

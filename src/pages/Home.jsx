import React from "react";
import RetroCard from "../components/RetroCard";
import logo from "../assets/logo_site.png";

export default function Home() {
  return (
    <div className="md:grid md:grid-cols-2 ">
      <div className=" mb-4">
        <RetroCard header={"SON YAZILAR"}>
          <div className="text-black">
            <div className="grid grid-cols-[1.5fr_4fr] gap-4 p-2 ">
              <div className="border-2 border-white p-1 h-full">
                <img className=" h-full" src={logo} alt="" />
              </div>
              <div>
                <p>07.03.2026</p>
                <p className="my-1.5">
                  m est sequi iste saepe, accusamusi nostrum illum sint fugit
                  rem libero.
                </p>
                <p>Konu tagı</p>
              </div>
            </div>
            <div className="grid grid-cols-[1.5fr_4fr] gap-4 p-2 ">
              <div className="border-2 border-white p-1 h-full">
                <img className=" h-full" src={logo} alt="" />
              </div>
              <div>
                <p>07.03.2026</p>
                <p className="my-1.5">
                  m est sequi isteunt laboriosam maiores perferendis nisi
                  nostrum illum sint fugit rem libero.
                </p>
                <p>Konu tagı</p>
              </div>
            </div>
            <div className="grid grid-cols-[1.5fr_4fr] gap-4 p-2 ">
              <div className="border-2 border-white p-1 h-full">
                <img className=" h-full" src={logo} alt="" />
              </div>
              <div>
                <p>07.03.2026</p>
                <p className="my-1.5">
                  m est sequi iste saepe, arendis nisi nostrum illum sint fugit
                  rem libero.
                </p>
                <p>Konu tagı</p>
              </div>
            </div>
          </div>
        </RetroCard>
      </div>
      <div className="md:grid-cols-1 mb-4 md:ml-4">
        <RetroCard header={"MUHAMMED ONAL"}>
          <div className="px-4 py-2 flex justify-around gap-8 items-center">
            <div className="w-[200px]">
              <img src={logo} alt="logo" />
            </div>

            {/* Right content */}
            <div className="text-[24px]  text-black ">
              Javascript; React; React Native; Node.JS
            </div>
          </div>
        </RetroCard>
      </div>
      <div className="col-span-2">
        <RetroCard header={"İLGİNİZİ ÇEKEBİLECEKELER"}>
          <div className="text-black">
            <div className="grid grid-cols-[1.5fr_4fr] gap-4 p-2 ">
              <div>
                <p className="my-1.5">
                  m est sequi iste saepe, accusamusi nostrum illum sint fugit
                  rem libero.
                </p>
              </div>
            </div>
          </div>
        </RetroCard>
      </div>
    </div>
  );
}

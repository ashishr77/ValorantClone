import React, { useState } from "react";

const heroBgUrl = "https://wallpapers.com/images/featured/valorant-305kescxw5dpup7y.jpg";
const navLogo = "https://thumbs.dreamstime.com/b/valorant-game-logo-symbol-isolated-white-background-vector-eps-190964521.jpg";
const footerLogo = "https://thumbs.dreamstime.com/b/valorant-game-logo-symbol-isolated-white-background-vector-eps-190964521.jpg";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#18181a] min-h-screen">
      {/* NAVBAR */}
      <nav className="w-full bg-[#18181a] px-4 md:px-10 py-3 flex items-center justify-between shadow-md z-40 sticky top-0">
        <div className="flex items-center gap-7">
          <img src={navLogo} alt="Valorant Logo" className="h-8 w-auto brightness-50" />
          <ul className="hidden md:flex gap-8 text-[#e7dfdd] font-bold text-md">
            <li><a href="#gameinfo" className="hover:text-[#bf4044] transition">GAME INFO</a></li>
            <li><a href="#agents" className="hover:text-[#bf4044] transition">AGENTS</a></li>
            <li><a href="#maps" className="hover:text-[#bf4044] transition">MAPS</a></li>
            <li><a href="#media" className="hover:text-[#bf4044] transition">MEDIA</a></li>
            <li><a href="#news" className="hover:text-[#bf4044] transition">NEWS</a></li>
            <li><a href="#esports" className="hover:text-[#bf4044] transition">ESPORTS</a></li>
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="px-6 py-2 text-[#e7dfdd] focus:outline-none">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <a href="/en-us/platform-selection/" className="hidden md:block">
          <button className="bg-[#bf4044] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#a1353a] transition">PLAY NOW</button>
        </a>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#18181a] px-4 py-3">
          <ul className="flex flex-col gap-4 text-[#e7dfdd] font-bold text-md">
            <li><a href="#gameinfo" className="hover:text-[#bf4044] transition" onClick={toggleMenu}>GAME INFO</a></li>
            <li><a href="#agents" className="hover:text-[#bf4044] transition" onClick={toggleMenu}>AGENTS</a></li>
            <li><a href="#maps" className="hover:text-[#bf4044] transition" onClick={toggleMenu}>MAPS</a></li>
            <li><a href="#media" className="hover:text-[#bf4044] transition" onClick={toggleMenu}>MEDIA</a></li>
            <li><a href="#news" className="hover:text-[#bf4044] transition" onClick={toggleMenu}>NEWS</a></li>
            <li><a href="#esports" className="hover:text-[#bf4044] transition" onClick={toggleMenu}>ESPORTS</a></li>
            <li>
              <a href="/en-us/platform-selection/" onClick={toggleMenu}>
                <button className="bg-[#bf4044] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#a1353a] transition w-full">PLAY NOW</button>
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* HERO SECTION */}
      <section
        className="relative flex items-center justify-center min-h-[70vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(26,26,31,0.90), rgba(26,26,31,0.90)), url(${heroBgUrl})` }}
      >
        <div className="flex flex-col items-center justify-center text-center py-20 px-4">
          <p className="text-base md:text-lg text-[#e7dfdd] mb-4 mt-8">A 5v5 character-based tactical shooter</p>
          <h1 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight text-white" style={{ fontFamily: "Oswald, sans-serif" }}>VALORANT</h1>
          <a href="/en-us/platform-selection/">
            <button className="bg-[#bf4044] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#a1353a] transition shadow-md">PLAY FOR FREE</button>
          </a>
        </div>
      </section>

      {/* THE LATEST */}
      <section className="w-full bg-[#e7dfdd] pt-10 pb-16" id="news">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-row justify-between items-end mb-7">
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-[#18181a] tracking-tight" style={{ fontFamily: "Oswald, sans-serif" }}>The Latest</h2>
            <a href="#" className="text-sm font-semibold uppercase text-[#bf4044] hover:underline">Go to News Page →</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-md overflow-hidden flex flex-col transition-transform duration-150 hover:scale-[1.025]">
              <img src="https://ext.same-assets.com/3843026561/1868014324.avif" alt="Tournament News" className="h-40 w-full object-cover" />
              <div className="p-5 flex flex-col flex-1">
                <span className="uppercase text-[12px] tracking-wider text-[#bf4044] font-bold mb-1">Esports · 5/2/2025</span>
                <span className="font-bold mb-1 text-[18px] text-[#18181a]">NA VALORANT Console Open: Everything You Need to Know</span>
                <span className="text-[14px] text-[#383c48]">The double-elimination bracket kicks off on May 16.</span>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-md overflow-hidden flex flex-col transition-transform duration-150 hover:scale-[1.025]">
              <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/08bd41629a56fdedc92a466575b39bf2f5435a45-1920x1080.jpg?auto=format&fit=crop&q=80&h=311&w=552&crop=center" alt="Merch Drop" className="h-40 w-full object-cover" />
              <div className="p-5 flex flex-col flex-1">
                <span className="uppercase text-[12px] tracking-wider text-[#b87e4c] font-bold mb-1">Announcements · 4/30/2025</span>
                <span className="font-bold mb-1 text-[18px] text-[#18181a]">VALORANT &ndash; New Merch Drop</span>
                <span className="text-[14px] text-[#383c48]">Your setup matters just as much as your skills. VALORANT&apos;s newest merch drop is now available.</span>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-md overflow-hidden flex flex-col transition-transform duration-150 hover:scale-[1.025]">
              <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/cca62b2e455a4af408090a83907ff7b085725b58-1920x1080.jpg?auto=format&fit=crop&q=80&h=311&w=552&crop=center" alt="Kickoff Trailer" className="h-40 w-full object-cover" />
              <div className="p-5 flex flex-col flex-1">
                <span className="uppercase text-[12px] tracking-wider text-[#bf4044] font-bold mb-1">Game Updates · 4/30/2025</span>
                <span className="font-bold mb-1 text-[18px] text-[#18181a]">Act 3 Kickoff Trailer</span>
                <span className="text-[14px] text-[#383c48]">Kicking off VALORANT&apos;s Five Year Anniversary celebration with the launch of Act 3.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEASON HIGHLIGHT SECTION */}
      <section className="w-full bg-[#18181a] relative flex flex-col md:flex-row items-center py-10">
        <div className="absolute left-0 w-full h-full top-0 opacity-20 pointer-events-none" aria-hidden="true">
          <img src="https://ext.same-assets.com/3843026561/1063082851.avif" alt="Season art background" className="object-cover w-full h-full" />
        </div>
        <div className="relative z-10 flex flex-col md:w-1/2 text-left px-6 md:px-10 py-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
            SEASON 2025 // ACT III
          </h2>
          <p className="text-base md:text-lg text-[#e7dfdd] mt-2 mb-5 max-w-md font-semibold">
            Kicking off 5 years of VALORANT with Act III
          </p>
          <a href="https://www.youtube.com/watch?v=Xe5b-9BEQTs" target="_blank" rel="noopener noreferrer">
            <button className="bg-[#bf4044] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#a1353a] transition">WATCH NOW</button>
          </a>
        </div>
        <div className="relative z-10 md:w-1/2 flex justify-center px-6">
          <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/0c67438c8b3a418b5ca28f9f234506745493ae42-854x484.png?auto=format&fit=crop&q=80&h=311&w=552&crop=center" alt="Season Promo" className="h-64 max-w-full rounded-lg shadow-lg md:block" />
        </div>
      </section>

      {/* WE ARE VALORANT SECTION */}
      <section id="gameinfo" className="w-full bg-[#e7dfdd] py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 gap-6 md:gap-10">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#18181a] mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>WE ARE VALORANT</h2>
            <p className="max-w-lg text-[#383c48] mb-5">DEFY THE LIMITS</p>
            <p className="text-base md:text-lg text-[#18181a] mb-8 max-w-lg">
              Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you&apos;ll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.
            </p>
            <a href="#">
              <button className="bg-[#bf4044] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#a1353a] transition">LEARN THE GAME</button>
            </a>
          </div>
          <div className="flex-1 flex justify-end">
            <img src="https://ext.same-assets.com/3843026561/4097845496.avif" alt="Valorant action scene" className="rounded-lg shadow-md w-full md:w-auto" />
          </div>
        </div>
      </section>

      {/* YOUR AGENTS SECTION */}
      <section id="agents" className="w-full bg-[#bf4044] relative flex flex-col md:flex-row items-center py-10 text-white">
        <div className="absolute left-0 w-full h-full top-0 z-0" aria-hidden="true">
          <img src="https://variety.com/wp-content/uploads/2024/08/Valorant_a27b53.png?w=1000&h=667&crop=1" alt="Agents background" className="object-cover w-full h-full opacity-10" />
        </div>
        <div className="relative z-10 flex-1 flex flex-col items-start px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>YOUR AGENTS</h2>
          <p className="mb-7 max-w-sm text-base md:text-lg">More than guns and bullets, you&apos;ll choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. No two Agents play alike, just as no two highlight reels will look the same.</p>
          <a href="#">
            <button className="bg-[#18181a] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#2a2a2e] transition">VIEW ALL AGENTS</button>
          </a>
        </div>
        <div className="relative z-10 flex-1 flex justify-end px-6">
          <img src="https://ext.same-assets.com/3843026561/4097845496.avif" alt="Agents" className="h-72 rounded-md drop-shadow-2xl md:block w-full md:w-auto" />
        </div>
      </section>

      {/* YOUR MAPS SECTION */}
      <section id="maps" className="w-full bg-[#e7dfdd] py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 gap-6 md:gap-10">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#18181a] mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>YOUR MAPS</h2>
            <p className="max-w-lg text-[#383c48] mb-5">FIGHT AROUND THE WORLD</p>
            <p className="text-base md:text-lg text-[#18181a] mb-8 max-w-lg">
              Each map is a playground to showcase your creative thinking. Purpose-built for team strategies, spectacular plays, and clutch moments. Make the play others will imitate for years to come.
            </p>
            <a href="#">
              <button className="bg-[#bf4044] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#a1353a] transition">VIEW ALL MAPS</button>
            </a>
          </div>
          <div className="flex-1 flex justify-end">
            <img src="https://ext.same-assets.com/3843026561/1038041731.avif" alt="Map scene" className="rounded-lg shadow-md w-full md:w-auto" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#18181a] text-[#e7dfdd] pt-12 pb-8 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 px-6">
          <div className="flex flex-col items-center md:items-start">
            <img src={footerLogo} alt="Valorant Logo" className="h-8 mb-3" />
            <p className="text-xs text-[#e7dfddbb] text-center md:text-left">© 2020-2025 Riot Games, Inc. RIOT GAMES, VALORANT and any associated logos are trademarks, service marks, and/or registered trademarks of Riot Games, Inc.</p>
          </div>
          <div className="flex flex-col gap-2 text-sm mt-4 md:mt-0">
            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              <a href="https://www.riotgames.com/en/privacy-notice" className="hover:text-[#bf4044]">PRIVACY NOTICE</a>
              <a href="https://www.riotgames.com/en/terms-of-service" className="hover:text-[#bf4044]">TERMS OF SERVICE</a>
              <a href="#" className="hover:text-[#bf4044]">COOKIE PREFERENCES</a>
            </div>
            <div className="flex gap-3 mt-2 flex-wrap justify-center md:justify-start">
              <a href="https://twitter.com/valorant">Twitter</a>
              <a href="https://www.youtube.com/@valorant">YouTube</a>
              <a href="https://instagram.com/valorant">Instagram</a>
              <a href="https://www.facebook.com/playvalorant/">Facebook</a>
              <a href="https://discord.gg/valorant">Discord</a>
            </div>
          </div>
        </div>
        <div className="w-full text-center text-xs text-[#e7dfdd99] mt-6 px-6">
          This website utilizes technologies such as cookies to enable essential site functionality, as well as for analytics, personalization, and targeted advertising. To learn more, view the <a href="https://www.riotgames.com/en/privacy-notice" className="underline hover:text-[#bf4044]">Privacy Notice</a>.
        </div>
      </footer>
    </div>
  );
}
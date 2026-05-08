const EMOJI = {
  "Todo": "🔥", "Hamburguesas": "🍔", "Pollo": "🍗",
  "Papas": "🍟", "Surtidas": "🎉", "Tacos": "🌮",
  "Emparedados": "🥪", "Batidos": "🥤"
}

export default function Categorias({ categorias, activa, setActiva }) {
  return (
    <div style={{ background: "#0D0D0D", borderBottom: "1px solid rgba(255,107,0,0.15)", position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1rem", display: "flex", overflowX: "auto", gap: 2, scrollbarWidth: "none" }}>
        {categorias.map(cat => {
          const active = activa === cat
          return (
            <button key={cat} onClick={() => setActiva(cat)} style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "0.85rem 1rem",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.82rem", fontWeight: active ? 700 : 500,
              whiteSpace: "nowrap",
              color: active ? "#FF6B00" : "rgba(255,255,255,0.45)",
              borderBottom: `2.5px solid ${active ? "#FF6B00" : "transparent"}`,
              transition: "all 0.2s",
              display: "flex", alignItems: "center", gap: 5,
            }}
              onMouseOver={e => { if (!active) e.currentTarget.style.color = "rgba(255,255,255,0.75)" }}
              onMouseOut={e => { if (!active) e.currentTarget.style.color = "rgba(255,255,255,0.45)" }}
            >
              <span>{EMOJI[cat] || "🍽️"}</span> {cat}
            </button>
          )
        })}
      </div>
    </div>
  )
}

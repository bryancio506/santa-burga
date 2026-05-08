import { FlamesTop } from "./FlamesSVG"

export default function Footer({ config }) {
  const wa = `https://wa.me/${config.contacto.whatsapp}?text=Hola%20Santa%20Burga%2C%20quiero%20hacer%20un%20pedido%20🍔`
  return (
    <footer style={{ background: "#0D0D0D", marginTop: "2rem" }}>
      <FlamesTop opacity={0.4}/>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem 2rem 3rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1.5rem" }}>
        <div>
          <h2 className="font-display" style={{ fontSize: "2rem", color: "white", lineHeight: 1 }}>
            SANTA <span style={{ color: "#FF6B00" }}>BURGA</span>
          </h2>
          <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.3)", marginTop: 4 }}>🔥 Las Santas Hamburguesas</p>
        </div>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href={wa} target="_blank" rel="noreferrer" style={{ color: "#25D366", textDecoration: "none", fontSize: "0.85rem" }}>WhatsApp: {config.contacto.whatsapp.replace("506","")}</a>
          <span style={{ color: "rgba(255,255,255,0.25)" }}>·</span>
          <a href={`tel:${config.contacto.telefono}`} style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "0.85rem" }}>{config.contacto.telefono}</a>
        </div>
        <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.18)", width: "100%", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1.5rem" }}>
          Menú digital por <a href="https://anexo.studio" style={{ color: "rgba(255,107,0,0.5)" }}>Anexo Studio</a>
        </p>
      </div>
    </footer>
  )
}

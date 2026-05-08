import { QRCode } from "react-qr-code"

export default function MenuQrSection({ menuUrl, nombreMarca }) {
  const url = (menuUrl || "").trim() || (typeof window !== "undefined" ? window.location.origin + "/" : "")
  const titulo = nombreMarca || "Santa Burga"

  return (
    <section style={{
      maxWidth: 1100, margin: "0 auto", width: "100%",
      padding: "0 2rem 2.5rem",
    }}>
      <div style={{
        background: "linear-gradient(135deg, rgba(255,107,0,0.1) 0%, rgba(255,51,0,0.04) 100%)",
        border: "1px solid rgba(255,107,0,0.22)",
        borderRadius: 20,
        padding: "2rem 1.75rem",
        display: "flex", flexWrap: "wrap",
        alignItems: "center", justifyContent: "center",
        gap: "2rem",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(circle at 10% 20%, rgba(255,107,0,0.08) 0%, transparent 45%)" }}/>

        <div style={{ flex: "1 1 240px", minWidth: 0, position: "relative", zIndex: 1, textAlign: "center" }}>
          <p style={{
            color: "rgba(255,255,255,0.35)", fontSize: "0.72rem",
            letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 10,
          }}>Menú digital</p>
          <h2 className="font-display" style={{
            fontSize: "clamp(1.85rem, 4vw, 2.4rem)", color: "white",
            lineHeight: 1.05, letterSpacing: "0.02em", marginBottom: 12,
          }}>
            ESCANEÁ Y ENTRÁ AL MENÚ
          </h2>
          <p style={{
            color: "rgba(255,255,255,0.5)", fontSize: "0.9rem",
            lineHeight: 1.55, maxWidth: 380, margin: "0 auto 1rem",
          }}>
            Apuntá la cámara del celular al código QR y abrí la carta de {titulo} al instante. Ideal para compartir en el local o con amigos.
          </p>
          <a href={url} style={{
            display: "inline-block", color: "#FF6B00", fontSize: "0.82rem",
            fontWeight: 600, textDecoration: "none",
            borderBottom: "1px solid rgba(255,107,0,0.35)",
            paddingBottom: 2,
          }}>
            {url.replace(/^https:\/\//, "")}
          </a>
        </div>

        <div style={{
          position: "relative", zIndex: 1,
          background: "white", padding: "1rem", borderRadius: 16,
          boxShadow: "0 16px 48px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,107,0,0.15)",
        }}>
          <QRCode
            value={url}
            size={200}
            level="M"
            title={`Menú ${titulo}`}
            fgColor="#111111"
            bgColor="#ffffff"
          />
        </div>
      </div>
    </section>
  )
}

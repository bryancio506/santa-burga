import { menuItemImageSrc, MENU_IMAGE_PLACEHOLDER } from "../menuImage"

const IconWa = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function MenuCard({ item, whatsapp }) {
  const precio = new Intl.NumberFormat("es-CR", { style:"currency", currency:"CRC", maximumFractionDigits:0 }).format(item.precio)
  const msg = encodeURIComponent(`Hola Santa Burga 🍔 quiero pedir: ${item.nombre} (${precio})`)
  const wa = `https://wa.me/${whatsapp}?text=${msg}`
  const imgSrc = menuItemImageSrc(item)
  const imgIsPlaceholder = imgSrc === MENU_IMAGE_PLACEHOLDER

  return (
    <div className="menu-card" style={{
      background: "linear-gradient(135deg, #1A1A1A 0%, #161616 100%)",
      border: `1px solid ${item.nuevo ? "rgba(255,107,0,0.4)" : "rgba(255,255,255,0.06)"}`,
      borderRadius: 14, padding: "1.25rem",
      display: "flex", flexDirection: "column", gap: 10,
      position: "relative", overflow: "hidden",
    }}>
      {/* Borde izquierdo accent */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
        background: item.nuevo ? "#FF6B00" : item.destacado ? "rgba(255,107,0,0.5)" : "rgba(255,255,255,0.06)",
        borderRadius: "14px 0 0 14px",
      }}/>

      <div style={{
        margin: "-1.25rem -1.25rem 0.5rem -1.25rem",
        borderRadius: "14px 14px 0 0",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: imgIsPlaceholder ? "#0a0a0a" : undefined,
      }}>
        <img
          src={imgSrc}
          alt={item.nombre}
          style={{
            width: "100%",
            height: 160,
            objectFit: imgIsPlaceholder ? "contain" : "cover",
            objectPosition: "center",
            display: "block",
          }}
        />
      </div>

      {/* Badges */}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", paddingLeft: 8 }}>
        {item.nuevo && (
          <span style={{
            background: "#FF6B00", color: "white",
            fontSize: "0.65rem", fontWeight: 800,
            padding: "0.18rem 0.6rem", borderRadius: 100,
            letterSpacing: "0.06em", textTransform: "uppercase",
          }}>🔥 NUEVO</span>
        )}
        {item.destacado && !item.nuevo && (
          <span style={{
            background: "rgba(255,107,0,0.15)",
            border: "1px solid rgba(255,107,0,0.3)",
            color: "#FF6B00",
            fontSize: "0.65rem", fontWeight: 700,
            padding: "0.18rem 0.6rem", borderRadius: 100,
          }}>⭐ Popular</span>
        )}
        <span style={{
          background: "rgba(255,255,255,0.05)",
          color: "rgba(255,255,255,0.35)",
          fontSize: "0.65rem", padding: "0.18rem 0.6rem", borderRadius: 100,
        }}>{item.categoria}</span>
      </div>

      {/* Nombre */}
      <h3 className="font-display" style={{
        fontSize: "1.45rem", color: "white",
        lineHeight: 1, letterSpacing: "0.03em",
        paddingLeft: 8,
      }}>{item.nombre.toUpperCase()}</h3>

      {/* Descripción */}
      <p style={{
        fontSize: "0.82rem", color: "rgba(255,255,255,0.45)",
        lineHeight: 1.6, flex: 1, paddingLeft: 8,
      }}>{item.descripcion}</p>

      {/* Precio + CTA */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: 8 }}>
        <span className="font-display" style={{ fontSize: "1.6rem", color: "#FF6B00", lineHeight: 1 }}>
          {precio}
        </span>
        <a href={wa} target="_blank" rel="noreferrer" style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          background: "#25D366", color: "white",
          padding: "0.5rem 0.9rem", borderRadius: 100,
          fontSize: "0.78rem", fontWeight: 600, textDecoration: "none",
          transition: "opacity 0.2s",
        }}
          onMouseOver={e => e.currentTarget.style.opacity = "0.85"}
          onMouseOut={e => e.currentTarget.style.opacity = "1"}
        >
          <IconWa /> Pedir
        </a>
      </div>
    </div>
  )
}

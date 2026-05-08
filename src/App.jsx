import { useState, useEffect, useMemo } from "react"
import { menuItemImageSrc, MENU_IMAGE_PLACEHOLDER } from "./menuImage"
import Header from "./components/Header"
import Categorias from "./components/Categorias"
import MenuCard from "./components/MenuCard"
import Footer from "./components/Footer"
import MenuQrSection from "./components/MenuQrSection"
import { waUrlPedidoItem } from "./whatsappCopy"

// Carrusel de destacados para el hero (incluye platos con foto aunque no sean solo destacados)
function HeroCarousel({ items, whatsapp }) {
  const [idx, setIdx] = useState(0)
  const slides = useMemo(() => {
    const porTag = items.filter(i => i.destacado || i.nuevo)
    const conFoto = items.filter(i => i.imagen)
    const map = new Map()
    for (const i of porTag) map.set(i.id, i)
    for (const i of conFoto) map.set(i.id, i)
    return Array.from(map.values()).slice(0, 8)
  }, [items])

  useEffect(() => {
    if (slides.length === 0) return
    const t = setInterval(() => setIdx(p => (p + 1) % slides.length), 3500)
    return () => clearInterval(t)
  }, [slides.length])

  if (slides.length === 0) return null
  const item = slides[idx]
  const heroImg = menuItemImageSrc(item)
  const heroImgPlaceholder = heroImg === MENU_IMAGE_PLACEHOLDER
  const precio = new Intl.NumberFormat("es-CR", { style:"currency", currency:"CRC", maximumFractionDigits:0 }).format(item.precio)
  const wa = waUrlPedidoItem(whatsapp, item.nombre, precio)

  return (
    <div style={{
      background: "linear-gradient(135deg, rgba(255,107,0,0.12) 0%, rgba(255,51,0,0.05) 100%)",
      border: "1px solid rgba(255,107,0,0.2)",
      borderRadius: 20, padding: "2rem",
      display: "flex", flexWrap: "wrap",
      alignItems: "center", justifyContent: "space-between",
      gap: "1.5rem", marginBottom: "2.5rem",
      position: "relative", overflow: "hidden",
    }}>
      {/* Fondo decorativo */}
      <div style={{ position:"absolute", right:-30, top:-30, width:180, height:180, borderRadius:"50%", background:"rgba(255,107,0,0.06)" }}/>

      <div style={{
        display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between",
        gap:"1.25rem", width:"100%", position:"relative", zIndex:1,
      }}>
        <div style={{ flex:"1 1 260px", minWidth:0 }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:12 }}>
            {item.nuevo && <span style={{ background:"#FF6B00", color:"white", fontSize:"0.65rem", fontWeight:800, padding:"0.2rem 0.65rem", borderRadius:100 }}>🔥 NUEVO</span>}
            <span style={{ color:"rgba(255,255,255,0.3)", fontSize:"0.72rem", textTransform:"uppercase", letterSpacing:"0.1em" }}>Destacado del menú</span>
          </div>
          <h2 className="font-display" style={{ fontSize:"clamp(2rem,5vw,3rem)", color:"white", lineHeight:1, marginBottom:10 }}>
            {item.nombre.toUpperCase()}
          </h2>
          <p style={{ color:"rgba(255,255,255,0.5)", fontSize:"0.88rem", lineHeight:1.65, maxWidth:400, marginBottom:18 }}>
            {item.descripcion}
          </p>
          <div style={{ display:"flex", alignItems:"center", gap:"1rem", flexWrap:"wrap" }}>
            <span className="font-display" style={{ fontSize:"2.2rem", color:"#FF6B00" }}>{precio}</span>
            <a href={wa} target="_blank" rel="noreferrer" style={{
              display:"inline-flex", alignItems:"center", gap:7,
              background:"#25D366", color:"white",
              padding:"0.7rem 1.5rem", borderRadius:100,
              fontWeight:600, fontSize:"0.9rem", textDecoration:"none",
              transition:"opacity 0.2s",
            }}
              onMouseOver={e=>e.currentTarget.style.opacity="0.85"}
              onMouseOut={e=>e.currentTarget.style.opacity="1"}
            >
              🍔 Pedir ahora
            </a>
          </div>
        </div>

        <div style={{
          flex:"0 1 280px", margin:"0 auto",
          borderRadius:18, overflow:"hidden",
          border:"1px solid rgba(255,107,0,0.25)",
          boxShadow:"0 12px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.04) inset",
          background: heroImgPlaceholder ? "#0a0a0a" : "rgba(0,0,0,0.2)",
        }}>
          <img
            src={heroImg}
            alt={item.nombre}
            style={{
              width:"100%",
              maxHeight: heroImgPlaceholder ? 320 : undefined,
              height:"auto",
              display:"block",
              objectFit: heroImgPlaceholder ? "contain" : "cover",
              objectPosition:"center",
            }}
          />
        </div>
      </div>

      {/* Dots */}
      <div style={{ display:"flex", gap:5, justifyContent:"center", paddingTop:16, flexWrap:"wrap" }}>
        {slides.map((_,i) => (
          <div key={i} onClick={() => setIdx(i)} style={{
            width: i===idx ? 20 : 7, height: 7, borderRadius: 100,
            background: i===idx ? "#FF6B00" : "rgba(255,255,255,0.2)",
            cursor:"pointer", transition:"all 0.3s",
          }}/>
        ))}
      </div>
    </div>
  )
}

// Sección agrupada por categoría
function SeccionCategoria({ categoria, items, whatsapp, emoji }) {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:"1.25rem" }}>
        <span style={{ fontSize:"1.5rem" }}>{emoji}</span>
        <h2 className="font-display" style={{ fontSize:"2rem", color:"white", letterSpacing:"0.02em" }}>
          {categoria.toUpperCase()}
        </h2>
        <div style={{ flex:1, height:1, background:"rgba(255,107,0,0.15)", marginLeft:8 }}/>
        <span style={{ fontSize:"0.75rem", color:"rgba(255,255,255,0.25)" }}>{items.length} opciones</span>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(270px,1fr))", gap:"1rem" }}>
        {items.map(item => <MenuCard key={item.id} item={item} whatsapp={whatsapp}/>)}
      </div>
    </div>
  )
}

const EMOJI = {
  "Hamburguesas":"🍔","Pollo":"🍗","Papas":"🍟",
  "Surtidas":"🎉","Tacos":"🌮","Emparedados":"🥪","Batidos":"🥤"
}

export default function App() {
  const [config, setConfig] = useState(null)
  const [catalogo, setCatalogo] = useState([])
  const [catActiva, setCatActiva] = useState("Todo")
  const [busqueda, setBusqueda] = useState("")

  useEffect(() => {
    Promise.all([
      fetch("/config.json").then(r => r.json()),
      fetch("/catalogo.json").then(r => r.json()),
    ]).then(([cfg, cat]) => {
      setConfig(cfg)
      setCatalogo(cat)
      document.title = `${cfg.nombre} 🔥 Menú`
    })
  }, [])

  const filtrados = useMemo(() => {
    return catalogo.filter(p => {
      const cat = catActiva === "Todo" || p.categoria === catActiva
      const bus = !busqueda || p.nombre.toLowerCase().includes(busqueda.toLowerCase()) || p.descripcion.toLowerCase().includes(busqueda.toLowerCase())
      return cat && bus
    })
  }, [catalogo, catActiva, busqueda])

  // Agrupar por categoría para vista "Todo"
  const agrupados = useMemo(() => {
    if (catActiva !== "Todo") return null
    const grupos = {}
    filtrados.forEach(item => {
      if (!grupos[item.categoria]) grupos[item.categoria] = []
      grupos[item.categoria].push(item)
    })
    return grupos
  }, [filtrados, catActiva])

  if (!config) return (
    <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:"#111", color:"rgba(255,107,0,0.6)", fontFamily:"'Bebas Neue',cursive", fontSize:"2rem", letterSpacing:"0.1em" }}>
      CARGANDO MENÚ 🔥
    </div>
  )

  return (
    <div style={{ minHeight:"100vh", display:"flex", flexDirection:"column", background:config.colores.bg }}>
      <Header config={config}/>
      <Categorias categorias={config.categorias} activa={catActiva} setActiva={setCatActiva}/>

      <main style={{ maxWidth:1100, margin:"0 auto", width:"100%", padding:"2rem 2rem", flex:1 }}>

        {/* Buscador */}
        <div style={{ marginBottom:"2rem", display:"flex", alignItems:"center", gap:12, flexWrap:"wrap" }}>
          <div style={{ position:"relative", flex:"1 1 280px", maxWidth:360 }}>
            <span style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)", fontSize:"1rem" }}>🔍</span>
            <input type="text" placeholder="Buscar en el menú..."
              value={busqueda} onChange={e => setBusqueda(e.target.value)}
              style={{
                width:"100%", paddingLeft:38, paddingRight:16,
                paddingTop:"0.65rem", paddingBottom:"0.65rem",
                borderRadius:100,
                border:"1px solid rgba(255,107,0,0.2)",
                background:"rgba(255,255,255,0.04)",
                color:"white", fontSize:"0.88rem",
                outline:"none", fontFamily:"'DM Sans',sans-serif",
                transition:"border-color 0.2s",
              }}
              onFocus={e => e.target.style.borderColor = "rgba(255,107,0,0.5)"}
              onBlur={e => e.target.style.borderColor = "rgba(255,107,0,0.2)"}
            />
          </div>
          <span style={{ color:"rgba(255,255,255,0.25)", fontSize:"0.82rem" }}>
            {filtrados.length} {filtrados.length === 1 ? "item" : "items"}
          </span>
        </div>

        {/* Hero carrusel — solo en vista Todo sin búsqueda */}
        {catActiva === "Todo" && !busqueda && (
          <HeroCarousel items={catalogo} whatsapp={config.contacto.whatsapp}/>
        )}

        {/* Grid agrupado (vista Todo) */}
        {agrupados && !busqueda ? (
          Object.entries(agrupados).map(([cat, items]) => (
            <SeccionCategoria key={cat} categoria={cat} items={items} whatsapp={config.contacto.whatsapp} emoji={EMOJI[cat] || "🍽️"}/>
          ))
        ) : (
          // Grid plano (categoría filtrada o búsqueda)
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(270px,1fr))", gap:"1rem" }}>
            {filtrados.map(item => <MenuCard key={item.id} item={item} whatsapp={config.contacto.whatsapp}/>)}
          </div>
        )}

        {filtrados.length === 0 && (
          <div style={{ textAlign:"center", padding:"5rem", color:"rgba(255,255,255,0.25)", fontFamily:"'Bebas Neue',cursive", fontSize:"1.5rem", letterSpacing:"0.08em" }}>
            NO HAY RESULTADOS 🍔
          </div>
        )}
      </main>

      <MenuQrSection menuUrl={config.menuPublicUrl} nombreMarca={config.nombre}/>

      <Footer config={config}/>
    </div>
  )
}

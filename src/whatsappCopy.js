/** Texto pegadizo para mensajes de pedido por WhatsApp */
export const WA_SANTA_BURGA_HOOK = "🔥 Ya sabes Tu único pecado es no probarlas! 🍔🔥"

export function waUrlPedidoGeneral(phoneDigits) {
  const text = `${WA_SANTA_BURGA_HOOK}\n\nHola Santa Burga, quiero hacer un pedido 🍔`
  return `https://wa.me/${phoneDigits}?text=${encodeURIComponent(text)}`
}

export function waUrlPedidoItem(phoneDigits, nombre, precioFormateado) {
  const text = `${WA_SANTA_BURGA_HOOK}\n\nQuiero pedir: ${nombre} (${precioFormateado})`
  return `https://wa.me/${phoneDigits}?text=${encodeURIComponent(text)}`
}

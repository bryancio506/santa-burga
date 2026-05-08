export const MENU_IMAGE_PLACEHOLDER = "/images/menu/holder.png"

export function menuItemImageSrc(item) {
  return (item.imagen && String(item.imagen).trim()) || MENU_IMAGE_PLACEHOLDER
}

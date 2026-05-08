// Llamas SVG decorativas reutilizables
export const FlamesBottom = ({ opacity = 0.7 }) => (
  <svg viewBox="0 0 400 80" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ width:"100%", display:"block" }}>
    <path d="M0 80 C20 60 30 20 50 30 C60 35 65 10 80 20 C90 28 95 5 110 15 C125 25 128 0 145 10 C158 18 162 35 180 25 C195 15 200 40 220 30 C235 22 240 5 258 18 C270 28 275 8 292 20 C305 30 310 10 325 22 C338 32 342 15 358 25 C370 33 375 55 400 45 L400 80 Z" fill="#FF6B00" opacity={opacity}/>
    <path d="M0 80 C15 65 25 35 42 45 C52 52 58 25 72 38 C84 48 88 28 102 40 C115 50 120 30 135 42 C148 52 155 70 175 58 C188 48 195 62 215 52 C228 44 235 20 252 35 C265 47 270 30 285 42 C298 52 305 35 320 48 C332 58 338 40 354 52 C366 62 372 70 400 62 L400 80 Z" fill="#FF3300" opacity={opacity * 0.6}/>
  </svg>
)

export const FlamesTop = ({ opacity = 0.7 }) => (
  <svg viewBox="0 0 400 80" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ width:"100%", display:"block", transform:"scaleY(-1)" }}>
    <path d="M0 80 C20 60 30 20 50 30 C60 35 65 10 80 20 C90 28 95 5 110 15 C125 25 128 0 145 10 C158 18 162 35 180 25 C195 15 200 40 220 30 C235 22 240 5 258 18 C270 28 275 8 292 20 C305 30 310 10 325 22 C338 32 342 15 358 25 C370 33 375 55 400 45 L400 80 Z" fill="#FF6B00" opacity={opacity}/>
  </svg>
)

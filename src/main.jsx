import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Logo } from './content.js'

function setFavicon(href) {
  if (!href) return
  let link = document.querySelector("link[rel*='icon']") || document.createElement('link')
  link.type = 'image/png'
  link.rel = 'icon'
  link.href = href
  document.getElementsByTagName('head')[0].appendChild(link)
}

const defaultLogo = Logo
if (defaultLogo) setFavicon(defaultLogo)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
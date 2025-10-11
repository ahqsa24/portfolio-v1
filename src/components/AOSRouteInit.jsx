import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AOS from 'aos'

export default function AOSRouteInit({ children }) {
  const location = useLocation()
  useEffect(() => {
    if (!window.__aos_inited) {
      AOS.init({ offset: 80, duration: 600, easing: 'ease-out', once: true })
      window.__aos_inited = true
    } else {
      AOS.refreshHard()
    }
  }, [location.pathname])
  return children
}

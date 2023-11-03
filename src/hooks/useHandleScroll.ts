import { useState } from 'react'
import { useEffect } from 'react'

export default function useHandleScroll() {
  const [scrollTop, setScrollTop] = useState(0)

  const handleNavigation = (scroll: number) => {
    const $scrollBtn = document.querySelector('.scroll-top-btn')

    if ($scrollBtn !== null) {
      if (scroll > 2000) {
        if ($scrollBtn.classList.contains('hidden')) {
          $scrollBtn.classList.remove('hidden')
        }
      } else {
        if (!$scrollBtn.classList.contains('hidden')) {
          $scrollBtn.classList.add('hidden')
        }
      }
    }
  }

  useEffect(() => {
    const onScroll = () => {
      setScrollTop(document.documentElement.scrollTop)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', () => handleNavigation(scrollTop))

    return () => {
      window.removeEventListener('scroll', () => handleNavigation(scrollTop))
    }
  }, [scrollTop])
}

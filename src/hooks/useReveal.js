import { useEffect, useRef, useState } from 'react'

/**
 * Adds a `.shown` class once the element enters the viewport.
 * Use together with the `.reveal` base class from global.css.
 *
 *   const { ref, shown } = useReveal()
 *   <div ref={ref} className={`reveal ${shown ? 'shown' : ''}`}>...</div>
 */
export function useReveal(options = {}) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px 0px -50px 0px',
      }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return { ref, shown }
}

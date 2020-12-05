import { useRef, useEffect } from 'react'
import * as ReactDOM from 'react-dom'

export function useHeadPortal() {
  const rootElemRef = useRef(document.createElement('style'))

  useEffect(function setupElement() {
    const rootEl = rootElemRef.current
    const parentElem = document.head
    parentElem.appendChild(rootEl)

    return function removeElement() {
      rootEl.remove()
    }
  }, [])

  return rootElemRef.current
}

export default function Style({ children }) {
  const target = useHeadPortal()
  return ReactDOM.createPortal(children, target)
}

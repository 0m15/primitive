import { useRef, useEffect, createRef } from 'react'
import * as ReactDOM from 'react-dom'

const styleTag = document.createElement('style')
styleTag.setAttribute('type', 'text/css')
styleTag.setAttribute('id', 'primitive')

export function useHeadPortal() {
  const rootElemRef = useRef(styleTag)
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

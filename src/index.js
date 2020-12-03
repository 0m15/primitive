import React, { useMemo } from 'react'
import classNames from 'classnames'
import crypto from 'crypto'
import usePrimitive, { useMediaQueries } from './hooks'
import Style from './Style'

function createGuid() {
  var hexstring = crypto.randomBytes(16).toString('hex').slice(0, 4)
  return hexstring
}

const allowedProps = [
  'content',
  'position',
  'display',
  'flex',
  'flexBasis',
  'flexDirection',
  'flexWrap',
  'alignItems',
  'justifyContent',
  'alignSelf',
  'minWidth',
  'maxWidth',
  'width',
  'minHeight',
  'maxHeight',
  'height',
  'top',
  'left',
  'bottom',
  'right',
  'padding',
  'paddingLeft',
  'paddingRight',
  'paddingBottom',
  'paddingTop',
  'margin',
  'marginLeft',
  'marginRight',
  'marginBottom',
  'marginTop',
  'overflow',
  'overflowX',
  'overflowY',
  'color',
  'background',
  'backgroundColor',
  'backgroundImage',
  'backgroundSize',
  'backgroundPosition',
  'backgroundRepeat',
  'border',
  'borderWidth',
  'borderColor',
  'borderStyle',
  'borderBottom',
  'borderTop',
  'borderLeft',
  'borderRight',
  'boxShadow',
  'appearence',
  'outline',
  'font',
  'fontVariant',
  'listStyle',
  'listStyleType',
  'fontFamily',
  'fontSize',
  'fontStyle',
  'fontWeight',
  'textAlign',
  'lineHeight',
  'letterSpacing',
  'textDecoration',
  'textTransform',
  'textShadow',
  'opacity',
  'animation',
  'transform',
  'transition',
  'filter',
  'userSelect',
  'pointerEvents',
  'zIndex',
  'webkitOverflowScrolling'
]

const extractProps = (props, excludeNotAllowed = true) => {
  return Object.keys(props || {})
    .filter((propName) =>
      excludeNotAllowed
        ? allowedProps.indexOf(propName) > -1
        : allowedProps.indexOf(propName) < 0
    )
    .reduce((obj, key) => {
      return {
        ...obj,
        [key]: props[key]
      }
    }, {})
}

function Primitive(
  {
    renderAs = 'div',
    children,
    active,
    hover,
    disabled,
    focus,
    media,
    isActive,
    isHover,
    isFocus,
    isDisabled,
    className,
    ...props
  },
  ref
) {
  const baseClassName = useMemo(
    () => (className ? className + '__' : 'Prim__') + createGuid(),
    [className]
  )

  const [domProps, cssProps] = useMemo(() => {
    const domProps = extractProps(props, false)
    const cssProps = extractProps(props)

    return [domProps, cssProps]
  }, [props])

  const mediaCssProps = useMediaQueries(media || {})

  const activeProps = useMemo(() => extractProps(active), [active])
  const hoverProps = useMemo(() => extractProps(hover), [hover])
  const focusProps = useMemo(() => extractProps(focus), [focus])

  const styles = usePrimitive(cssProps)
  const activeStyles = usePrimitive(activeProps)
  const hoverStyles = usePrimitive(hoverProps)
  const focusStyles = usePrimitive(focusProps)

  const classList = classNames({
    [baseClassName]: true,
    [baseClassName + '.active']: isActive,
    [baseClassName + '.hover']: isHover,
    [baseClassName + '.focus']: isFocus
  })

  const mediaQueries = useMemo(
    () =>
      mediaCssProps
        .map(
          ([breakpoint, style]) => `
        @media ${breakpoint} {
          .${baseClassName} {
            ${style}
          }
        }`
        )
        .join('\n'),
    [mediaCssProps]
  )

  const Element = renderAs

  return (
    // react complaints if input has children,
    // so we need to wrap in a fragment
    <>
      <Element ref={ref} className={classList} {...domProps}>
        {children !== undefined ? children : null}
      </Element>
      <Style>
        {`.${baseClassName} {
  ${styles};
}`}
        {hoverStyles &&
          `.${baseClassName}:hover, .${baseClassName}.hover {
  ${hoverStyles}
}`}
        {activeStyles &&
          `.${baseClassName}:active, .${className}.active {
  ${activeStyles}
}`}
        {focusStyles &&
          `.${baseClassName}:focus, .${className}.focus {
  ${focusStyles}
}`}

        {mediaQueries}
      </Style>
    </>
  )
}

export default React.forwardRef(Primitive)

import React, { useMemo } from 'react'
import classNames from 'classnames'
import usePrimitive, { useMediaQueries } from './hooks'
import Style from './Style'

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
  return Object.keys(props)
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

export default function Primitive({
  renderAs = 'div',
  children,
  active = {},
  hover = {},
  disabled = {},
  focus = {},
  media = {},
  isActive,
  isHover,
  isFocus,
  isDisabled,
  className,
  ...props
}) {
  const [domProps, cssProps] = useMemo(() => {
    const domProps = extractProps(props, false)
    const cssProps = extractProps(props)

    return [domProps, cssProps]
  }, [props])

  const mediaCssProps = useMediaQueries(media)

  const cssPropsActive = useMemo(() => extractProps(active), [active])
  const cssPropsHover = useMemo(() => extractProps(hover), [hover])
  const cssPropsFocus = useMemo(() => extractProps(focus), [focus])

  const [baseClassName, styles] = usePrimitive(cssProps)
  const [activeClassName, activeStyles] = usePrimitive(cssPropsActive)
  const [hoverClassName, hoverStyles] = usePrimitive(cssPropsHover)
  const [focusClassName, focusStyles] = usePrimitive(cssPropsFocus)

  const classList = classNames({
    [className]: className !== undefined,
    [baseClassName]: true,
    [activeClassName]: isActive,
    [hoverClassName]: isHover,
    [focusClassName]: isFocus
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
      <Element className={classList} {...domProps}>
        {children !== undefined ? children : null}
      </Element>
      <Style>
        {`.${baseClassName} {
  ${styles};
}`}
        {hoverStyles &&
          `.${baseClassName}:hover, .${hoverClassName} {
  ${hoverStyles}
}`}
        {activeStyles &&
          `.${baseClassName}:active, .${activeClassName} {
  ${activeStyles}
}`}
        {focusStyles &&
          `.${baseClassName}:focus, .${focusClassName} {
  ${focusStyles}
}`}

        {mediaQueries}
      </Style>
    </>
  )
}

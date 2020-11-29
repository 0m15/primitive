# primitive-react

Turn react props in real css styles.
Demo: https://codesandbox.io/s/primitive-reactdemo-pkj3t

    npm i primitive-react

## Example

    import Primitive from 'primitive-react'

    <Primitive
      renderAs="code"
      backgroundColor="#f9f9f9"
      border="3px solid orange"
      boxShadow='3px 3px blue'
      fontFamily="Consolas"
      fontSize={16}
      hover={{
        backgroundColor: "#fff",
      }}
      media={{
        "screen and (min-width: 768px)": {
          fontSize: 18
        }
      }}
    >
      <Primitive renderAs='pre'>
        Hello code
      </Primitive>
    </Primitive>

## Installation

    npm i primitive-react

## Import

    import Primitive from 'primitive-react'

## Props

    renderAs?   html tag to render      "div"
    hover?      optional hover css      {}
    active?     optional active css     {}
    focus?      optional focus css      {}
    disabled?   optional disabled css   {}
    media?      optional media queries  {}
    className?  additional className    ""

## Demo

Clone or download repo and run

    npm run storybook

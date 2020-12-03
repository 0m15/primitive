import React, { useState } from 'react'
import { Text } from './components'
import Primitive from '../index'
import { a as animated, useSpring } from '@react-spring/web'
import './index.css'
const rangeControl = {
  type: 'range',
  min: 0,
  max: 1,
  step: 0.01
}

export const renderAs = ({ width, ...args }) => (
  <Primitive width='100%'>
    <Text
      fontSize={32}
      renderAs='h1'
      marginBottom={32}
      borderBottom='1px solid'
    >
      Render as prop
    </Text>
    <Text marginBottom={8}>
      You can render any html element, by using {'`renderAs`'} prop. Here's an
      example of rendering an {'`<input/>'} element:
    </Text>
    <Primitive width={width.toString()} {...args} renderAs='input' />
  </Primitive>
)

renderAs.args = {
  width: '1',
  padding: 16,
  color: 'navy',
  borderWidth: 3,
  borderColor: 'rgba(255, 10, 10, 1)',
  borderStyle: 'solid',
  outline: 'none',
  boxShadow: '3px 3px peachpuff',
  placeholder: 'input placeholder',
  focus: {
    borderColor: 'peachpuff',
    borderStyle: 'solid',
    boxShadow: '3px 3px blue'
  }
}

renderAs.argTypes = {
  focus: {
    control: { type: 'object' }
  }
}

export const mediaQueries = ({ width, ...args }) => (
  <Primitive width='100%' height='100%'>
    <Text
      fontSize={32}
      renderAs='h1'
      marginBottom={32}
      borderBottom='1px solid'
    >
      @media queries
    </Text>
    <Text marginBottom={8}>
      You can render any html element, by using {'`renderAs`'} prop. Here's an
      example of rendering an {'`<input/>'} element:
    </Text>
    <Primitive
      {...args}
      display='flex'
      width={width.toString()}
      height={200}
      backgroundColor='peachpuff'
      color='blue'
      justifyContent='center'
      alignItems='center'
    >
      <Text>Resize window</Text>
    </Primitive>
  </Primitive>
)

mediaQueries.args = {
  width: '1',
  padding: 16,
  color: 'navy',
  outline: 'none',
  media: {
    'screen and (min-width: 768px)': {
      backgroundColor: 'blue',
      color: 'peachpuff'
    }
  }
}

mediaQueries.argTypes = {
  renderAs: {
    table: {
      disable: true
    }
  }
}
export const complementaryColorFinder = ({
  width,
  color,
  backgroundColor,
  ...args
}) => {
  const complementaryColor = color
    .replace('rgba(', '')
    .replace(')', '')
    .split(',')
    .slice(0, 3)
    .map((d) => 255 - Number(d))
    .join(',')

  return (
    <Primitive
      {...args}
      width={width.toString()}
      height={300}
      display='flex'
      alignItems='center'
      justifyContent='center'
      backgroundColor={`rgb(${complementaryColor})`}
      color={color}
    >
      <Text fontSize={144}>Hello</Text>
    </Primitive>
  )
}

export const reactSpring = ({ width, fade, ...args }) => {
  const props = useSpring({
    from: { opacity: fade ? 0 : 1 },
    to: { opacity: fade === true ? 1 : 0 }
  })

  return (
    <animated.div style={props}>
      <Primitive
        {...args}
        width={width.toString()}
        height={250}
        backgroundColor='pink'
        padding={16}
        display='flex'
        alignItems='center'
        justifyContent='center'
        {...args}
      >
        <Text fontSize={64}>
          <animated.span>{props.opacity.to((d) => d.toFixed(2))}</animated.span>
        </Text>
      </Primitive>
    </animated.div>
  )
}
reactSpring.args = {
  fade: true
}
reactSpring.argTypes = {
  fade: {
    control: {
      type: 'boolean'
    }
  }
}

export const CssTransition = (args) => {
  const [state, setState] = useState(false)
  return (
    <Primitive
      width={'0.5'}
      height={250}
      transform={`scaleX(${state ? 1 : 0.2})`}
      active={{
        transform: `scaleX(1)`
      }}
      transition='transform 1s ease-in-out'
      onClick={() => setState((state) => !state)}
    >
      <Primitive
        {...args}
        borderLeft='0'
        borderRight='0'
        backgroundImage='linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.2))'
      ></Primitive>
    </Primitive>
  )
}

export default {
  title: 'Primitive/Showcase',
  component: Primitive,
  decorators: [
    (Story) => (
      <Primitive
        padding='2em'
        height='100%'
        overflow='hidden'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <Story />
      </Primitive>
    )
  ],
  args: {
    width: '1',
    height: 120,
    padding: 16,
    color: 'black',
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: 'orange',
    backgroundColor: 'transparent'
  },
  argTypes: {
    renderAs: {
      table: {
        disable: true
      }
    },
    width: {
      control: rangeControl,
      label: 'width (* 100%)'
    },
    backgroundColor: {
      control: { type: 'color' }
    },
    color: {
      control: { type: 'color' }
    },
    borderColor: {
      control: { type: 'color' }
    },
    borderStyle: {
      control: { type: 'select', options: ['solid', 'dashed', 'dotted'] }
    }
  }
}

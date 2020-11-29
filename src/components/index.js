import React from 'react'
import Primitive from '../index'

export function Text(props) {
  return (
    <Primitive
      margin='0'
      padding='0'
      className='Text'
      renderAs='p'
      lineHeight='1.4'
      {...props}
    />
  )
}

export function H1(props) {
  return <Text renderAs='h1' fontSize={72} {...props} />
}

export function H2(props) {
  return <Text renderAs='h2' fontSize={36} {...props} />
}

export function Flex(props) {
  return (
    <Primitive
      display='flex'
      margin='0'
      padding='0'
      className='Flex'
      renderAs='div'
      {...props}
    />
  )
}

export function CodeBlock({
  children,
  baseColor = 'blue',
  highlightColor = 'peachpuff',
  ...props
}) {
  return (
    <Primitive
      renderAs='code'
      display='block'
      maxWidth={560}
      overflowX='auto'
      backgroundColor='#f9f9f9'
      margin={16}
      padding={16}
      border={'3px solid ' + baseColor}
      boxShadow={'3px 3px ' + highlightColor}
      fontFamily='Consolas'
      lineHeight='1.35'
      hover={{
        backgroundColor: '#111',
        color: highlightColor
      }}
      {...props}
    >
      <Primitive renderAs='pre' margin='0' color='inherit'>
        {children}
      </Primitive>
    </Primitive>
  )
}

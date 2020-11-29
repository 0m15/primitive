import React from 'react'
import Primitive from 'primitive'

export default function App() {
  return (
    <Primitive
      position='relative'
      display='flex'
      flexDirection='column'
      width='100%'
      height='100%'
      backgroundColor='#000'
      border='12px solid orange'
    >
      <Primitive
        fontFamily='Helvetica'
        fontSize={72}
        color='magenta'
        backgroundColor='#ddd'
        padding='18px'
        media={{
          'screen and (max-width: 768px)': {
            fontSize: 36
          }
        }}
      >
        <Primitive renderAs='span' color='red'>
          P
        </Primitive>
        <Primitive renderAs='span' color='green'>
          r
        </Primitive>
        <Primitive renderAs='span' color='yellow'>
          i
        </Primitive>
        <Primitive renderAs='span' color='blue'>
          m
        </Primitive>
        <Primitive renderAs='span' color='orange'>
          i
        </Primitive>
        <Primitive renderAs='span' color='magenta'>
          t
        </Primitive>
        <Primitive renderAs='span' color='pink'>
          i
        </Primitive>
        <Primitive renderAs='span' ovrflow='hidden' color='blue'>
          v
        </Primitive>
        <Primitive renderAs='span' color='brown'>
          e
        </Primitive>
        <Primitive renderAs='span' color='white'>
          .
        </Primitive>
        <Primitive renderAs='span'>React</Primitive>
      </Primitive>
      <Primitive
        fontFamily='Helvetica'
        fontSize={32}
        fontStyle='italic'
        backgroundColor='white'
        color='black'
        padding='18px'
        transition='backgroundColor 0.5s ease-in-out, color 0.5s ease-in-out'
        active={{
          backgroundColor: 'red'
        }}
        media={{
          'screen and (min-width: 768px)': {
            backgroundColor: 'pink',
            color: 'green'
          },
          'screen and (min-width: 1280px)': {
            backgroundColor: 'green',
            color: 'pink'
          }
        }}
      >
        <Primitive renderAs='h1' margin='0' padding='0'>
          90s are back
        </Primitive>
        <Primitive renderAs='p'>Code like it's 1990 in 2020.</Primitive>
      </Primitive>
      <Primitive
        fontFamily='Helvetica'
        fontSize={32}
        fontStyle='italic'
        color='lightgreen'
        padding='18px'
      >
        Transform any prop to css.
      </Primitive>
      <Primitive
        backgroundImage='linear-gradient(to bottom, magenta, green)'
        flex='3'
        padding='18px'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <Primitive color='white'>Really any prop.</Primitive>
      </Primitive>
      <Primitive
        flex='3'
        padding='18px'
        display='flex'
        alignItems='center'
        justifyContent='center'
        transition='color 0.5s ease-in-out'
        color='white'
        hover={{
          backgroundImage:
            'linear-gradient(to left, transparent, rgba(255, 255, 255, 0.5))'
        }}
        active={{
          backgroundColor: 'red',
          color: 'black'
        }}
      >
        <Primitive>Even dom states</Primitive>
      </Primitive>
      <Primitive
        fontFamily='monospace'
        backgroundColor='white'
        color='black'
        fontSize={24}
        padding='18px'
        renderAs='input'
        width='100%'
        defaultValue='It can render any tag thanks to an handy `renderAs` prop.'
        focus={{
          color: 'orange'
        }}
      />
      <Primitive
        fontFamily='Georgia'
        fontSize={24}
        color='yellow'
        padding='18px'
      >
        It creates a separate css rule for each component, and it append to the
        head as a {'<style></style>'} tag.
      </Primitive>
      <Primitive
        backgroundColor='blue'
        fontFamily='Georgia'
        fontSize={24}
        color='orange'
        padding='18px'
      >
        Github repo coming.
      </Primitive>
    </Primitive>
  )
}

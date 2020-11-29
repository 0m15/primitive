import React from 'react'
import Primitive from '../index'
import './index.css'

const textProps = {
  fontFamily: 'Arial Black, Helvetica, arial, sans-serif',
  margin: 0,
  padding: 0
}

function Text(props) {
  return <Primitive className='Text' renderAs='p' {...textProps} {...props} />
}

const CodeBlock = ({ children, ...props }) => {
  return (
    <Primitive
      renderAs='code'
      display='block'
      backgroundColor='#f9f9f9'
      margin={16}
      padding={16}
      border='3px solid orange'
      boxShadow='3px 3px blue'
      fontFamily='Consolas'
    >
      <Primitive renderAs='pre' margin='0' color='#333'>
        {children}
      </Primitive>
    </Primitive>
  )
}

export const Welcome = (args) => (
  <Primitive
    border='1px solid'
    width='100%'
    height='100%'
    overflow='hidden'
    {...args}
  >
    <Primitive
      position='absolute'
      lineHeight='1'
      bottom={-8}
      right='auto'
      renderAs='h1'
      userSelect='none'
      fontSize={48}
      {...textProps}
      media={{
        'screen and (min-width: 768px)': {
          fontSize: 72,
          bottom: 0,
          color: '#111'
        },
        'screen and (min-width: 1024px)': {
          fontSize: 144,
          bottom: -20,
          color: '#222',
          right: 0
        }
      }}
    >
      Primitive🖐
    </Primitive>
    <Primitive
      display='flex'
      height='100%'
      flexDirection='column'
      media={{
        'screen and (min-width: 1024px)': {
          flexDirection: 'row-reverse'
        }
      }}
    >
      <Primitive flex='1' flexBasis='20%' padding={16} overflow='hidden'>
        <Primitive
          border='1px solid'
          height='100%'
          flexDirection='column'
          display='flex'
        >
          <Text renderAs='h2' borderBottom='1px solid' width='100%' padding={8}>
            Welcome
          </Text>
          <Primitive flex='1' overflow='hidden'>
            <Text
              height='100%'
              overflowY='scroll'
              webkitOverflowScrolling='touch'
              position='relative'
              padding={8}
            >
              Welcome to primitive-react Storybook.
              <br />
              Using it in your project is as easy as importing the `
              {`<Primitive>`}` component and passing down any css supported
              property as a camelCase react prop to it. A special `{`renderAs`}`
              prop is used to determine which html tag to render.
              <br />
              <br />
              For example:
              <CodeBlock>
                {`import Primitive from 'primitive-react'

<Primitive
  renderAs="code"
  backgroundColor="#f9f9f9"
  border="3px solid orange"
  boxShadow='3px 3px blue'
  fontFamily="Consolas"
  color="orange"
>
  <Primitive renderAs='pre'>
    Hello code
  </Primitive>
</Primitive>`}
              </CodeBlock>
              It will render exactly the block you're seeing above! Props will
              be converted to dashed cases, a unique css class is created, and
              injected into a {`<style>`} tag in the head. Check the inspector!
              <br />
            </Text>
          </Primitive>
        </Primitive>
      </Primitive>
      <Primitive flex='1' padding={16} overflow='hidden'>
        <Primitive
          border='1px solid'
          height='100%'
          flexDirection='column'
          display='flex'
        >
          <Text
            {...textProps}
            renderAs='h2'
            borderBottom='1px solid'
            width='100%'
            padding={8}
          >
            Use
          </Text>
          <Primitive flex='1' overflowY='hidden'>
            <Primitive
              listStyle='none'
              renderAs='ol'
              overflowY='scroll'
              height='100%'
              padding={8}
              margin={0}
            >
              <Primitive renderAs='li'>
                <Text>1. Installation</Text>
                <CodeBlock>npm i primitive-react</CodeBlock>
              </Primitive>
              <Primitive renderAs='li'>
                <Text>2. Import</Text>
                <CodeBlock>import Primitive from 'primitive-react'</CodeBlock>
              </Primitive>
              <Primitive renderAs='li'>
                <Text>3. Props</Text>
                <CodeBlock>
                  <strong>renderAs?</strong>
                  {'\t'}html tag to render{'\t'}"div"
                  <br />
                  <strong>hover?*</strong>
                  {'\t\t'}optional hover css{'\t'}
                  {`\{\}`}
                  <br />
                  <strong>active?*</strong>
                  {'\t'}optional active css{'\t'}
                  {`\{\}`}
                  <br />
                  <strong>focus?*</strong>
                  {'\t\t'}optional focus css{'\t'}
                  {`\{\}`}
                  <br />
                  <strong>disabled?*</strong>
                  {'\t'}optional disabled css{'\t'}
                  {`\{\}`}
                  <br />
                  <strong>media?</strong>
                  {'\t\t'}optional media queries{'\t'}
                  {`\{\}`}
                  <br />
                  <strong>className?</strong>
                  {'\t'}additional className{'\t'}""
                  <br />
                </CodeBlock>
                <Text {...textProps} fontSize={12} fontStyle='italic'>
                  *Props subject to changes
                </Text>
              </Primitive>
            </Primitive>
          </Primitive>
        </Primitive>
      </Primitive>
    </Primitive>
  </Primitive>
)
export const renderAs = (args) => <Primitive {...args} overflow='hidden' />
renderAs.args = {
  renderAs: 'input',
  placeholder: 'input placeholder'
}
renderAs.argTypes = {
  renderAs: {
    table: {
      disable: true
    }
  }
}

export default {
  title: 'Primitive',
  component: Primitive,
  decorators: [
    (Story) => (
      <Primitive padding='2em' height='100%'>
        <Story />
      </Primitive>
    )
  ]
}

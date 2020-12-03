import React from 'react'
import { CodeBlock, Flex, H1, H2, Text } from './components'
import Primitive from '../index'
import './index.css'

export const GettingStarted = (args) => (
  <Primitive
    width='100%'
    height='100%'
    {...args}
    overflowY='auto'
    border='1px solid'
  >
    <Flex height='100%' alignItems='center' justifyContent='center'>
      <H1
        position='absolute'
        lineHeight='1'
        top={20}
        left={20}
        userSelect='none'
        fontSize={32}
        pointerEvents='none'
        zIndex={-1}
      >
        Primitive🖐
      </H1>
      <Text paddingLeft={16}>
        Low level react component that turns any prop to css.
      </Text>
      <Primitive marginLeft={250} height={50} backgroundColor='#000' flex='1' />
    </Flex>
    <Primitive display='flex' height='100%' flexDirection='column'>
      <Primitive flex='1' padding={16}>
        <Primitive height='100%' flexDirection='column'>
          <Primitive
            marginRight={250}
            marginLeft={-16}
            height={50}
            backgroundColor='#000'
            flex='1'
          />
          <H2 borderBottom='1px solid' width='100%' padding={8}>
            Usage
          </H2>
          <Primitive flex='1'>
            <Primitive
              listStyle='none'
              renderAs='ol'
              height='100%'
              padding={8}
              margin={0}
            >
              <Primitive renderAs='li'>
                <Text>Installation</Text>
                <CodeBlock>npm i primitive-react</CodeBlock>
              </Primitive>
              <Primitive renderAs='li'>
                <Text>Import</Text>
                <CodeBlock>import Primitive from 'primitive-react'</CodeBlock>
              </Primitive>
              <Primitive renderAs='li'>
                <Text>Props</Text>
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
                <Text fontSize={12} fontStyle='italic'>
                  *Props subject to changes
                </Text>
              </Primitive>
            </Primitive>
          </Primitive>
        </Primitive>
      </Primitive>

      <Primitive flex='1' flexBasis='20%' padding={16}>
        <Primitive height='100%' flexDirection='column'>
          <H2 borderBottom='1px solid' width='100%' padding={8}>
            Example
          </H2>
          <Primitive flex='1' margin={2}>
            <Text height='100%' position='relative' padding={8}>
              <CodeBlock>
                {`import Primitive from 'primitive-react'

<Primitive
  renderAs='code'
  display='block'
  backgroundColor='#f9f9f9'
  margin={16}
  padding={16}
  border='3px solid blue'
  boxShadow='3px 3px peachpuff'
  fontFamily='Consolas'
  lineHeight='1.35'
  hover={{
    backgroundColor: '#111',
    color: 'peachpuff'
  }}
>
  <Primitive renderAs='pre' margin='0' color='inherit'>
    {children}
  </Primitive>
</Primitive>`}
              </CodeBlock>
              It will render exactly the block you're seeing above! Props will
              be converted to dashed cases, a unique css class is created, and
              injected into a {`<style>`} tag in the head. Check the inspector!
              <br />
              Something like this:
              <CodeBlock>
                {`
<code class="p_260c">
  <pre class="p_1687">
    ...  
  </pre>
</code>

.p_260c {
  display: block;
  ...
  font-family: Consolas;
  line-height: 1.35;
}

.p_260c:hover, .p_5fb8 {
  background-color: #111;
  color: peachpuff;
}
`}
              </CodeBlock>
            </Text>
          </Primitive>
        </Primitive>
      </Primitive>
    </Primitive>
  </Primitive>
)

export default {
  title: 'Docs/Primitive',
  component: Primitive,
  decorators: [
    (Story) => (
      <Primitive padding='2em' height='100%' overflow='hidden'>
        <Story />
      </Primitive>
    )
  ]
}

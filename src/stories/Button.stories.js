import MyButton from './Button.vue'
import { withDesign } from 'storybook-addon-designs'
import { rest } from 'msw'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: MyButton,
  parameters: { layout: 'centered' },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  decorators: [withDesign],
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<my-button v-bind="args" />',
})

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Click Me!',
}
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/eKif9FIzsU7Alif8oCP76r/Social-Login-Buttons-(Community)?node-id=208%3A0',
  },
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
}
Secondary.msw = [
  rest.get('/user', (req, res, ctx) => {
    return res(
      ctx.json({
        size: 'large',
        label: 'Maverick',
      })
    )
  }),
]

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}

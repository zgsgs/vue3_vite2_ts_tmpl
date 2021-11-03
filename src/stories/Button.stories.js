import MyButton from './example/Button.vue'
import { withDesign } from 'storybook-addon-designs'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: MyButton,
  decorators: [withDesign],
  description: '一个按钮实例',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: "This is Button's description.",
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: {
      control: 'color',
      table: {
        category: 'Colors',
      },
    },
    primary: {
      table: {
        category: 'Colors',
      },
      type: { required: true },
    },
    label: {
      table: {
        category: 'Text',
        subcategory: 'Label',
      },
    },
    onClick: {
      table: {
        category: 'Events',
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      table: {
        category: 'Text',
        subcategory: 'Size',
      },
    },
  },
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
  template: '<MyButton v-bind="args" />',
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

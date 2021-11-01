import MyStack from '../components/Stack.vue'

export default {
  title: 'Components/Stack',
  component: MyStack,
  parameters: { layout: 'centered' },
  argTypes: {
    numberOfChildren: {
      control: { type: 'number' },
      defaultValue: 4,
    },
    direction: {
      control: { type: 'select' },
      defaultValue: 'row',
      options: ['row', 'column'],
    },
    justify: {
      control: { type: 'select' },
      defaultValue: 'center',
      options: ['flex-start', 'center', 'flex-end'],
    },
    algin: {
      control: { type: 'select' },
      defaultValue: 'center',
      options: ['flex-start', 'center', 'flex-end'],
    },
    wrap: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    spacing: {
      control: { type: 'number' },
      defaultValue: 2,
    },
    color: { control: 'color' },
    backgroundColor: {
      control: 'color',
      defaultValue: '#1ea7fd',
    },
    size: {
      control: { type: 'select' },
      defaultValue: 'medium',
      options: ['small', 'medium', 'large'],
    },
    onClick: {
      control: { type: 'function' },
    },
  },
}
const Template = args => ({
  components: { MyStack },
  setup() {
    return { args }
  },
  template: '<MyStack v-bind="args" />',
})

export const Horizontal = Template.bind({})

export const Vertical = Template.bind({})
Vertical.args = {
  direction: 'column',
}

export const NoSpacing = Template.bind({})
NoSpacing.args = {
  spacing: false,
}

export const WrapOverflow = Template.bind({})
WrapOverflow.args = {
  numberOfChildren: 20,
  direction: 'row',
  wrap: true,
}

export const Empty = Template.bind({})
Empty.args = {
  numberOfChildren: 0,
}

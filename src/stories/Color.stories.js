import MyColor from '../components/Color.vue'
export default {
  title: 'Example/Color',
  component: MyColor,
  parameters: { layout: 'centered' },
  argTypes: {
    color: { control: 'color' },
    backgroundColor: {
      control: 'color',
      defaultValue: '#1ea7fd',
    },
    onClick: {},
    size: {
      control: { type: 'select' },
      defaultValue: 'medium',
      options: ['small', 'medium', 'large'],
    },
    num: {
      control: { type: 'number' },
      defaultValue: 1,
    },
    gap: {
      control: { type: 'number' },
      defaultValue: 1,
    },
  },
}
const Template = args => ({
  components: { MyColor },
  setup() {
    return { args }
  },
  template: '<MyColor v-bind="args" />',
})

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  size: 'medium',
  color: '#fff',
}

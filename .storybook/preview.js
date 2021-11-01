// @ts-ignore
import { addDecorator } from '@storybook/vue3'
// @ts-ignore
import { initializeWorker, mswDecorator } from 'msw-storybook-addon'

initializeWorker()
addDecorator(mswDecorator)
export const globalTypes = {
  darkMode: {
    name: 'Dark Mode',
    description: '主题模式',
    defaultValue: 'default',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'default', icon: 'circlehollow', title: 'Default' },
        { value: 'dark', icon: 'circle', title: 'Dark' },
      ],
      showName: false,
    },
  },
  locale: {
    name: 'Locale',
    description: '本地国际化',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'zh', right: '🇨🇳', title: '中文' },
      ],
    },
  },
}
export const decorators = [
  (story, context) => {
    const darkModeColor = {
      default: 'auto',
      dark: '#333333',
    }
    return {
      component: { story },
      template: `<story class="${context.globals.darkMode}" style="background-color: ${darkModeColor[context.globals.darkMode]}"/>`,
    }
  },
  (story, context) => {
    return {
      component: { story },
      template: `<story class="${context.globals.locale}" />`,
    }
  },
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: {
    // Avoid doing this, as it will fully disable all accessibility checks for this story.
    disable: true,
    // Instead, override rules 👇
    // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
    config: {
      rules: [
        {
          // You can exclude some elements from failing a specific rule:
          id: 'autocomplete-valid',
          selector: '*:not([autocomplete="nope"])',
        },
        {
          // You can also signify that a violation will need to be fixed in the future
          // by overriding the result of a rule to return "Needs Review"
          // rather than "Violation" if the rule fails:
          id: 'landmark-complementary-is-top-level',
          reviewOnFail: true,
        },
      ],
    },
  },
}

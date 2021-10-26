// @ts-ignore
import { addDecorator } from '@storybook/vue3'
// @ts-ignore
import { initializeWorker, mswDecorator } from 'msw-storybook-addon'

initializeWorker()
addDecorator(mswDecorator)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'zh', right: '🇨🇳', title: '中文' },
      ],
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

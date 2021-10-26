module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-designs',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    '@storybook/addon-design-assets',
    '@storybook/addon-jest',
    "@storybook/addon-queryparams"
  ],
}

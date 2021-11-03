// const path = require('path')
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-designs',
    // '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    '@storybook/addon-design-assets',
    '@storybook/addon-jest',
  ],
  // webpackFinal: async (config, { configType }) => {
  //   // 配置运行模式
  //   config.mode = 'development'
  //   // 使用source-map
  //   config.devtool = 'source-map'
  //   // 要解析的文件的扩展名
  //   config.resolve.extensions = ['.js', '.jsx', 'ts', 'tsx', 'vue']
  //   // 处理scss文件
  //   config.module.rules.push({
  //     test: /\.(sa|sc)ss$/,
  //     use: ['style-loader', 'css-loader', 'sass-loader'],
  //   })
  //   // 默认配置会失效，处理文件需要配置相应的file-loader
  //   config.module.rules.push({
  //     test: /\.(gif|png|jpe?g|eot|woff|ttf|pdf)$/,
  //     loader: 'file-loader',
  //   })

  //   return config
  // },
}

import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Qratch',
      description: 'A Lightweight Library for Building Graphical Web contents.',
    },
    '/ja/': {
      lang: 'ja-JP',
      title: 'Qratch',
      description:
        'グラフィカルなWebコンテンツを構築するための軽量なライブラリ。',
    },
  },
  themeConfig: {
    logo: 'https://raw.githubusercontent.com/qratch/assets/master/64h/qratch-q.png',
    locales: {
      '/': {
        selectLanguageName: 'English',
      },
      '/ja/': {
        selectLanguageName: '日本語',
      },
    },
  },
})

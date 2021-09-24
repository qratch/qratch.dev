import * as fs from 'fs-extra'
import * as path from 'path'
import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'

const getFilenames = (dir: string): string[] => {
  const files = fs.readdirSync(dir)
  return files.map((f) => path.basename(f, '.md'))
}

export default defineUserConfig<DefaultThemeOptions>({
  plugins: [
    '@vuepress/active-header-links',
    [
      'vuepress-plugin-redirect',
      {
        locales: true,
      },
    ],
    [
      '@vuepress/google-analytics',
      {
        ga: 'G-2BWNCZSFKM',
      },
    ],
  ],
  base: '/',
  head: [['link', { rel: 'icon', href: 'assets/logo.png' }]],
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
    darkMode: false,
    repo: 'qratch/qratch',
    logo: 'https://raw.githubusercontent.com/qratch/assets/master/64h/qratch-q.png',
    locales: {
      '/': {
        selectLanguageName: 'English',
      },
      '/ja/': {
        selectLanguageName: '日本語',
        navbar: [
          {
            text: 'リファレンス',
            link: '/ja/reference',
            activeMatch: '.*/reference',
          },
          {
            text: 'プレイグラウンド',
            link: 'https://play.qratch.dev',
          },
        ],
        sidebar: [
          '/ja/README.md',
          {
            text: 'Qratch Learn',
            link: '/ja/learn',
            children: [
              {
                text: 'ステージ0',
                link: '/ja/learn/stages/0',
              },
            ],
          },
          {
            text: 'リファレンス',
            link: '/ja/reference',
            children: [
              {
                text: 'クラス',
                children: ['/ja/reference/classes/QratchApp'],
              },
              {
                text: 'インターフェース',
                children: getFilenames('docs/ja/reference/interfaces').map(
                  (n) => `/ja/reference/interfaces/${n}`
                ),
              },
              {
                text: '型',
                children: getFilenames('docs/ja/reference/types').map(
                  (n) => `/ja/reference/types/${n}`
                ),
              },
            ],
          },
        ],
      },
    },
  },
})

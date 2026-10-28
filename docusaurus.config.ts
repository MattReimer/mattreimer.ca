import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'mattreimer.ca',
  tagline: "Matt Reimer's homepage",
  favicon: 'img/favicon.svg',

  // GitHub Pages via custom domain mattreimer.ca (served at the domain root)
  url: 'https://mattreimer.ca',
  baseUrl: '/',
  trailingSlash: true,

  organizationName: 'MattReimer',
  projectName: 'mattreimer.ca',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Colour mode — site defaults to dark (motherfuckingwebsite.com, inverted).
    //   - defaultMode: the mode visitors get ('dark' | 'light')
    //   - respectPrefersColorScheme: follow the OS setting instead
    //   - disableSwitch: true  -> lock the site to the default mode, hide the toggle
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
      disableSwitch: false,
    },
    navbar: {
      title: 'mattreimer.ca',
      items: [
        { to: '/', label: 'Home', position: 'left' },
        { type: 'docSidebar', sidebarId: 'docs', label: 'About', position: 'left' },
        { href: 'https://github.com/MattReimer/mattreimer.ca', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Matt Reimer`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oneDark,
    },
  },
};

export default config;

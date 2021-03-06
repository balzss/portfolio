import type { Project, UserInfo } from './utils/types';

export const userInfo: UserInfo = {
  name: 'Balázs Sáros',
  role: 'Software Developer',
  picture: '/avatar.jpeg',
  links: [
    {
      label: 'hello@bsaros.com',
      url: 'mailto:hello@bsaros.com',
      icon: 'email',
    },
    {
      label: 'github.com/balzss',
      url: 'https://github.com/balzss',
      icon: 'github',
    },
    {
      label: 'linkedin.com/in/bsaros',
      url: 'https://linkedin.com/in/bsaros',
      icon: 'linkedin',
    },
    {
      label: 'Budapest',
      icon: 'location',
    },
  ]
};

export const projects: Project[] = [
  {
    title: 'konzultac.io',
    description: 'Create propaganda posters faster than ever',
    url: 'https://konzultac.io',
    links: [
      {
        label: 'Github',
        url: 'https://github.com/balzss/konzultac.io'
      },
    ]
  },
  {
    title: 'wololopolo.com',
    description: 'Custom text on t-shirts in a matter of seconds',
    url: 'https://wololopolo.com',
  },
  {
    title: 'Luxbar',
    description: 'Responsive, CSS only navbar library with an interactive demo page',
    links: [
      {
        label: 'Github',
        url: 'https://github.com/balzss/luxbar'
      },
      {
        label: 'Demo',
        url: 'https://balzss.github.io/luxbar'
      }
    ]
  },
  {
    title: 'cli-typer',
    description: 'CLI app written in node.js to practice touch typing with a countdown clock, custom wordlist option and stats that can be saved.',
    links: [
      {
        label: 'Github',
        url: 'https://github.com/balzss/cli-typer'
      },
    ]
  },
  {
    title: 'Grapefruit',
    description: 'Simple Android app with interactive stop motion photography',
    links: [
      {
        label: 'Play Store',
        url: 'https://play.google.com/store/apps/details?id=com.mixnose.grapefruit&hl=en'
      },
    ]
  }
];

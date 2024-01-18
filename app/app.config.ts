import type { AppConfigInput } from 'nuxt/schema'

export default defineAppConfig({
  awesome: {
    name: 'Nuxt 3 Awesome Starter',
    description:
      'a starter template for Nuxt 3 with minimalist themes design, built in components, drawer & menus, and more.',
    project: {
      links: {
        github: 'https://github.com/viandwi24/nuxt3-awesome-starter',
      },
    },
    layout: {
      page: {
        navbar: {
          menus: [
            {
              type: 'link',
              title: 'Sales Dashboard',
              to: { name: 'salesDashboard' },
            },
            {
              type: 'link',
              title: 'Agency Dashboard',
              to: { name: 'agencyDashboard' },
            },
            { type: 'link', title: 'Products', to: { name: 'products' } },
            {
              type: 'dropdown',
              title: 'Sales Tools',
              children: [
                {
                  type: 'link',
                  title: 'Audio',
                  to: { name: 'sales_tools-audio' },
                },
                {
                  type: 'link',
                  title: 'Video',
                  to: { name: 'sales_tools-video' },
                },
                {
                  type: 'link',
                  title: 'Lighting',
                  to: { name: 'sales_tools-lighting' },
                },
                {
                  type: 'link',
                  title: 'Rigging',
                  to: { name: 'sales_tools-rigging' },
                },
              ],
            },
            { type: 'button', title: 'Setting', to: { name: 'setting' } },
            // dynamic title
            // {
            //   type: 'button',
            //   title: (nuxt) =>
            //     (nuxt._appConfig as AppConfigInput)?.awesome?.name || '',
            //   to: (nuxt) => (nuxt._appConfig as AppConfigInput)?.awesome?.name || '',
            // },
          ],
        },
      },
      footer: {
        year: new Date().getFullYear(),
      },
      welcome: {
        title: 'Nuxt&nbsp;3 Awesome Starter',
        disableInfoReplaceIndexInWelcomePage: true,
      },
    },
    author: {
      name: 'viandwi24',
      links: {
        github: 'https://github.com/viandwi24',
        medium: 'https://viandwi24.medium.com',
        website: 'https://viandwi24.site',
      },
    },
  },
})

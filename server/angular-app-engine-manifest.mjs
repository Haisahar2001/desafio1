
export default {
  basePath: 'https://github.com/Haisahar2001/desafio1.git',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};

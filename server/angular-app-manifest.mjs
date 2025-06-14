
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/Haisahar2001/desafio1.git',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 30666, hash: '1c3fe6bf89363e33e5eb4a964b3480a1ca343a69c97217e07fec91f9ed5d66cc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 19721, hash: 'a2ee9169970c9eab0acc9b93772fcb9d0056c20b3cee2a7db47aaa3abc3eff4f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-W5TQIH5M.css': {size: 321509, hash: 'w0CZd6qdP9Y', text: () => import('./assets-chunks/styles-W5TQIH5M_css.mjs').then(m => m.default)}
  },
};

routes = [
  {
    path: '/',
    url: './index.html',
      on: {
        pageInit: function (e, page) {
            photoBrowserPageInit(e, page);
        }
      }
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];

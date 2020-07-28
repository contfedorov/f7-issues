routes = [
  {
    path: '/',
    url: './index.html',
      on: {
          pageInit: function (e, page) {
              console.log("index page inited");
              // app.tab.show('#tab3', false)
          }
      }
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];

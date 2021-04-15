routes = [
    {
        path: '/',
        url: './index.html',
    },
    // Default route (404 page). MUST BE THE LAST
    {
        path: '(.*)',
        url: './pages/404.html',
    },
];

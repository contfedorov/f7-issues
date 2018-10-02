// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  //theme: 'auto', // Automatic theme detection
    theme: 'ios',
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe'
      }
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    }
  },
  // App routes
  routes: routes
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

$$("#openPopup").click(function () {
    app.request.get("./pages/accordion-popup.html", function (content) {
        app.popup.create({
            el: '<div class="popup">' + content + '</div>',
            on: {
                opened: function () {
                    $$('a.back').click(function () {
                        app.popup.close();
                    });
                }
            }
        }).open();

        var viewId = "accordionView";
        app.views.create('#' + viewId, {
            stackPages: true,
            name: viewId
        });
    });
});

routes = [
    {
        path: '/',
        url: './index.html',
        on: {
            pageInit: function (e, page) {

                app.searchbar.create({
                    el: "#mainSearchbar",
                    customSearch: true,
                    backdrop: false
                });

                app.autocomplete.create({
                    openIn: 'dropdown',
                    inputEl: '#mainSearchbarInput',
                    dropdownContainerEl: "#customSearchResults",

                    preloader: true,

                    // Dropdown Autocomplete Parameters
                    valueProperty: "name",
                    textProperty: "name",

                    source: function (query, render) {
                        var autocomplete = this;

                        var results = [];
                        if (query.length <= 1) {
                            // do not process queries less then 2 characters
                            render(results);
                            return;
                        }

                        autocomplete.preloaderShow();

                        app.request({
                            url: 'https://jsonplaceholder.typicode.com/users',
                            method: 'GET',
                            dataType: 'json',
                            success: function (data) {
                                // Find matched items
                                for (var i = 0; i < data.length; i++) {
                                    if (data[i].name.toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(data[i]);
                                }
                                // Hide Preloader
                                autocomplete.preloaderHide();
                                // Render items by passing array with result items
                                render(results);
                            }

                        });
                    },

                    renderItem: function (item, index) {
                        var itemValue = item.value && typeof item.value === 'string' ? item.value.replace(/"/g, '&quot;') : item.value;

                        var itemHtml =
                            "<li>" +
                            "  <label class=\"item-radio item-content\" data-value=\"" + itemValue + "\">" +
                            "        <div class=\"item-media\">" +
                            "            <i class=\"icon\"></i>" +
                            "        </div>" +
                            "    <div class=\"item-inner\">" +
                            "      <div class=\"item-title\">" + (item.text) + "</div>" +
                            "    </div>" +
                            "  </label>" +
                            "</li>";

                        return itemHtml.trim();
                    },

                    on: {
                        change: function (values) {
                            console.log(values);
                        }
                    }
                });

            }
        }
    },
    // Default route (404 page). MUST BE THE LAST
    {
        path: '(.*)',
        url: './pages/404.html',
    },
];

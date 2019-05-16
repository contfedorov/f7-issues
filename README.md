Issues found while using Framework7 (https://github.com/framework7io/framework7) in production

Sticky behaviour (`position: sticky; position: -webkit-sticky;`) does not work for `<th>` element when table is put into `<div class="data-table">`. Sticky works fine if table is put into `page-content` directly.
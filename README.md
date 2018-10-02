Issue with content displaying in accordion widget.

Steps to reproduce:
- Open app on iOS
- Tap "Accordion (router)" or "Accordion (view-in-popup)" link. You will see page with 2 closed accordion items in list.
- Click "Accordion Item 1". Scrolling is disabled.
- Click "Accordion Item 1" again to close it. Click "Accordion Item 2". Scrolling works well.
- If you click "Accordion Item 1" when "Accordion Item 2" is opened, scrolling will work well.
- If you click "Accordion Item 2" to close it and then "Accordion Item 1" to open it again, then scrolling is disabled again.


Framework7 v2.0.8 in Cordova.
Tested via:
- iPhone 6 Plus, iOS 11.4.1
- iPhone 6 Plus (simulator), iOS 10.3.1
- iPad mini 2, iOS 11.4.1
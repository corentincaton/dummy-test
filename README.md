Create a simple web page only with those files:
- index.html
- js/test.js
- css/test.css

This page will make a call to a REST API to get a list of categories and subcategories.

Those categories should be displayed as on the « desktop.png »  file located inside the mockups/ folder. A category/subcategory is displayed only if its c_showInMenu attribute is equal to 1.
If the resolution of the window is less than 640px width, the page should look like the « mobile.png » mockup file. Under this resolution only the top level categories are visible after the page load and a click on one of them will display its subcategories with a slide down effect.


API REST

url : http://www.quiksilver.fr/s/QS-FR/dw/shop/v15_6/categories/root?levels=2&client_id=a76723ac-440f-4814-bd34-d492a140d78e

method : GET

data type : jsonp

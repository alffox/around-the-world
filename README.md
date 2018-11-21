![A paper airplane](https://github.com/alffox/around-the-world/blob/master/images/favicon.svg)

# Liferay Around the World

See the live site at: https://liferay-aroundtheworld.wedeploy.io/

Liferay Around the World is a Single Page Application showing information for Liferay locations around the world: https://www.liferay.com/locations

All APIs have been used for demo, non-commercial purposes. You may read more here: https://github.com/alffox/around-the-world#api--credit

## Purpose of this project
Back in late 90's when having an internet connection was not always possible, I used to get to know people from all over the world through paper letters. At a point, I decided to ask each of my penpals to draw a flag of the country they were writing from and send it back to me. Eventually, after collecting all of them, I could get a huge poster, hanging on my room's wall, showing me the colors of the world I was in touch with. This project is inspired by those times.

Where are my co-workers worldwide living? What's going on at their location right now? How can I get to know better other Liferay offices worldwide countries ?

And also: What's going on at my location at the moment ? How can I get useful information, all in one place ?

**Around the World** would like to cover this needs and encourage the global mutual knowledge of our countries. The name is inspired by a popular song of the late 90's: https://en.wikipedia.org/wiki/Around_the_World_(Red_Hot_Chili_Peppers_song)

## How to run this app ?
1) Openthe live site at: https://liferay-aroundtheworld.wedeploy.io/
2) To switch location, simply click on the buttons with the flags or in the continent's dropdown lists in the navbar

## Can I edit the location list ?

Yes. To add or modify locations:

1) Simply edit the _model_ variable inside $project_root/js/app.js and populate the json array with your favorite choices
2) Ensure the $project_root/css/custom.css contains the class that will draw the relevant flag. If not present, add it in the same _base64_ format of the others

## Technical details
The app is optimized for being used on mobile devices

### Browser's compatibility
| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome |
| --------- | --------- | --------- |
| latest| latest| latest|

### Design
The app is created following the JavaScript Model View Octopus design pattern and inspired by the course [JavaScript Design Patterns](https://eu.udacity.com/course/javascript-design-patterns--ud989) by [Ben Jaffe](https://github.com/benjaffe)
Due to the amount of operations the app does and could do in the future with new features, it is considered to use in the future a JS library to handle the state changes.

### Libraries
- [Bootstrap CSS](https://getbootstrap.com/docs/4.1/getting-started/introduction/) - v. 4.1 and related components (Popper.js, Bootstrap.js)
- [jQuery](https://jquery.com/) - v. 3.3.1
- [jQuery Lazy](http://jquery.eisbehr.de/lazy/) - 1.7.4

### API / Credit
- [News API](https://newsapi.org/)
- [OpenWeatherMap](https://openweathermap.org/)
- [Webcams.travel](https://www.webcams.travel/)
- [Wikipedia](https://en.wikipedia.org)
- [Unsplash](https://unsplash.com/)
- [GoogleMaps API](https://developers.google.com/maps/documentation/)

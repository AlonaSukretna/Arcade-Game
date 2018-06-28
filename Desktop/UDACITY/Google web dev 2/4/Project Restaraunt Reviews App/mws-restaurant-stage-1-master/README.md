# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

### Specification

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality.

### What do I do from here?

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. Explore the provided code, and start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write.

### How I did it:
0. Make maps work by replacing API keys in main.js and restaurant_info.js
Responsive Design:
1. Use appropriate document type declaration and viewport tags.
Add to index.html and restaurant.html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta charset="UTF-8">
2. Create a responsive grid-based layout using CSS.
3. Use media queries that provide fluid breakpoints across different screen sizes
4. Use responsive images that adjust for the dimensions and resolution of any device


Accessibility:
Run Audit in DevTools for accessibility.
1.<img id="restaurant-img"> add alt attribute.
2.Footer background color, <h1 id="restaurant-name"></h1>, a{} had not sufficient
 contrast. Change colors.
3. Add language attribute to html.
4. Filter elements (select neighborhoods, select cuisines)add aria labeles
for screenreader.

Offline Availability:
1. Register Service Worker: register_sw.js
2. Include script to index.html and restaurant.html.
  <script src="js/register_sw.js"></script>
3. Created the Service Worker script in the root of the application (‘/sw.js’).
4. Event handler to serve cached assets

# Ethiopian COVID-19 Emergency Site

A quick way to publish critical information about the Coronavirus / COVID-19 outbreak. Forked from [this repo](https://github.com/maxboeck/emergency-site). Can withstand large amounts of traffic and has off-line support.

## Features

* Static files generated by [Eleventy](https://11ty.dev)
* Optimized for first connection roundtrip (> 14KB)
* Basic styling for accessibility
* One critical request, inlined CSS
* [Netlify CMS](https://www.netlifycms.org/) for content editing
* Offline support with service worker

## Getting Started

The easiest way to get started is by forking this repo and deploying it to Netlify. You can do that by clicking this button:  

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/babraham123/emergency-site) 

Or use a Docker Github Action to run the 11ty build and deploy to Github Pages, adapted from [this blog](https://iamdanielmarino.com/posts/deploying-my-eleventy-site-to-github-pages/).

To customize the site, edit `src/data/meta.json` with your details, and replace the markdown files in `src/posts` with your content.

## Installation

To run this locally, you need to install [Node](https://nodejs.org/en/) first.

**available commands:**

* `npm start`: start development server
* `npm run build`: generate a production build
* `npm run debug`: run eleventy with debug output


# MJML Boilerplate

## Overview

This is a boilerplate for developing email templates using [MJML](https://documentation.mjml.io/).

Out of the box, you can watch for changes to output HTML files and version your files for production.

## Getting Started

* Run `npm run setup` to install all dependencies
* To begin dev and watch for changes, run `npm run watch`
* To output an HTML file without watching for changes, run `npm run build`
* To create a versioned file for your output, run `npm run version`

## Tips

If you delete your `output.html` file and run `npm run watch`, you may need to refresh the browser once the output.html file has been generated as Browsersync will not wait for the file to exist before running.
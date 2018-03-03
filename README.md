# ember-page

This README outlines the details of collaborating on this Ember application.

This is a one page application built to learn Ember.js. It uses Sass and the Toast framework.

# To get ember-scroll-to scrolling up properly:
`scrollVertical()` in `node_modules/ember-scroll-to/addon/services/scroller.js` needs this update:
`  scrollVertical (target, opts = {}) {
     var top= - this.get('scrollable').offset().top + this.getVerticalCoord(target, opts.offset);
        return new RSVP.Promise((resolve, reject) => {
          this.get('scrollable')
          .animate(
            {
              scrollTop: top
            },
            opts.duration || this.get('duration'),
            opts.easing || this.get('easing'),
            opts.complete
          )
          .promise()
          .then(resolve, reject);
    });
  }
`


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-page`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

# elsevier-test

## NOTES

I decided to go with the SMART Health IT sandbox mentioned at the bottom of the challenge README.

Also, I made the decision, for time's sake, to create a search bar for Patient IDs that, upon submitting, will show you the patients data. If the test was meant for more time I would have implemented a search feature by name rather than by ID, and the user would then see a list of names they could click on to get sent to that patient's route with all of their information.

The test ID I've been using is:

```txt
  46d3785e-865b-46a5-8ea9-86a72a183de3
  // found here: https://patient-browser.smarthealthit.org/index.html?_=1593528032921&config=r4#/
```

## CLI Commands

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and preact-render-spy
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

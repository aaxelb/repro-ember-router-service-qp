# repro-ember-router-service-qp

this app is a partial reproduction of https://github.com/emberjs/ember.js/issues/18683 (but with `refreshModel: false`)
* run `ember s` and open the app at http://localhost:4200
* the `application` controller has a query param `foo` with default value `'defaultFoo'` -- `foo` never changes value and has `refreshModel: false` by default
* click the links to transition via link-to -- `foo` is not serialized to the URL (correctly, imo)
* click the buttons to transition via the router service -- if you changed routes, `?foo=defaultFoo` shows up in the URL (incorrectly, imo)

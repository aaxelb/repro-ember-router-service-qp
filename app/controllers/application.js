import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service router;

  queryParams = ['foo'];
  foo = 'defaultFoo';

  @action
  toA() {
    this.router.transitionTo('route-a');
  }

  @action
  toB() {
    this.router.transitionTo('route-b');
  }
}

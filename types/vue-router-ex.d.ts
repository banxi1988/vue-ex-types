import { NavigationGuard } from "../../youque-app/node_modules/vue-router";

declare namespace vet {
  /**
 *

 1. Navigation triggered.
2. Call leave guards in deactivated components.
3. Call global `beforeEach` guards.
4. Call `beforeRouteUpdate` guards in reused components.
5. Call `beforeEnter` in route configs.
6. Resolve async route components.
7. Call `beforeRouteEnter` in activated components.
8. Call global `beforeResolve` guards.
9. Navigation confirmed.
10. Call global `afterEach` hooks.
11. DOM updates triggered.
12. Call callbacks passed to `next` in `beforeRouteEnter` guards with instantiated instances.

 */
  export interface VueRouterLifecycle {
    /**
     * called before the route that renders this component is confirmed.
     * does NOT have access to `this` component instance,
     * because it has not been created yet when this guard is called!
     *
     * However, you can access the instance by passing a callback to `next`. The callback will be called when the navigation is confirmed, and the component instance will be passed to the callback as the argument:
  
  ``` js
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // access to component instance via `vm`
    })
  }
  ```
     */
    beforeRouteEnter?: NavigationGuard;

    /**
     * called when the route that renders this component has changed,
       but this component is reused in the new route.
       For example, for a route with dynamic params `/foo/:id`, when we
       navigate between `/foo/1` and `/foo/2`, the same `Foo` component instance
       will be reused, and this hook will be called when that happens.
       has access to `this` component instance.
  
       For `beforeRouteUpdate` and `beforeRouteLeave`, `this` is already available, so passing a callback is unnecessary and therefore *not supported*:
  
  ```js
  beforeRouteUpdate (to, from, next) {
    // just use `this`
    this.name = to.params.name
    next()
  }
  ```
     */
    beforeRouteUpdate?: NavigationGuard;

    /**
     * called when the route that renders this component is about to
       be navigated away from.
       has access to `this` component instance.
  
  
  The **leave guard** is usually used to prevent the user from accidentally leaving the route with unsaved edits. The navigation can be canceled by calling `next(false)`.
  
  ```js
  beforeRouteLeave (to, from, next) {
    const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    if (answer) {
      next()
    } else {
      next(false)
    }
  }
  ```
     */
    beforeRouteLeave?: NavigationGuard;
  }
}

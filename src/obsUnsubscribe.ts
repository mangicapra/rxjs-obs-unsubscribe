import { Subscription } from 'rxjs';

const isFunction = (fn: any) => typeof fn === 'function';

export function ObsUnsubscribe({
  event = 'ngOnDestroy'
} = {}) {
  return <T extends new (...args: any[]) => {}>(
    constructor: T
  ) => {
      const orig = constructor.prototype[event];

      if (!isFunction(orig)) {
        throw new Error(
          `${
            constructor.name
          } is using @ObsUnsubscribe but does not implement ${event}`
        );
      }

      constructor.prototype[event] = function(): void {
        for (const prop in this) {

          const property = this[prop];

          if (isFunction(property.unsubscribe)) {
            property.unsubscribe();
          }

          if (Array.isArray(property) && property[0] instanceof Subscription) {
            property.forEach(el => el.unsubscribe());
          }
        }

        orig.apply();
      };
  };
}

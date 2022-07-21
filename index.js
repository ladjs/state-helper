const _ = require('lodash');

class StateHelpers {
  constructor(locals = {}) {
    this.locals = locals;
    this.middleware = this.middleware.bind(this);
  }

  middleware(ctx, next) {
    ctx.state = Object.assign(ctx.state, this.locals);

    // add flash messages to state
    ctx.state.flash = () => {
      if (
        !_.isFunction(ctx.flash) ||
        !_.isObject(ctx.session) ||
        !_.isObject(ctx.session.flash)
      )
        return {};
      const obj = _.zipObject(
        _.keys(ctx.session.flash),
        _.keys(ctx.session.flash).map((key) => ctx.flash(key))
      );
      //
      // set no cache to prevent the same messages from rendering on back button
      // <https://github.com/helmetjs/nocache/blob/6de09b822c6e0cd95655d2b454ffa2659338d995/index.js#L3-L9>
      //
      if (
        !_.isEmpty(obj) &&
        !Object.keys(obj).every((key) => _.isEmpty(obj[key]))
      ) {
        ctx.set('Surrogate-Control', 'no-store');
        ctx.set(
          'Cache-Control',
          'no-store, no-cache, must-revalidate, proxy-revalidate'
        );
        ctx.set('Pragma', 'no-cache');
        ctx.set('Expires', '0');
      }
    };

    return next();
  }
}

module.exports = StateHelpers;

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
      return _.zipObject(
        _.keys(ctx.session.flash),
        _.keys(ctx.session.flash).map((key) => ctx.flash(key))
      );
    };

    return next();
  }
}

module.exports = StateHelpers;

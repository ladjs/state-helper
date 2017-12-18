const _ = require('lodash');
const autoBind = require('auto-bind');

class StateHelpers {
  constructor(locals = {}) {
    this.locals = locals;
    autoBind(this);
  }
  middleware(ctx, next) {
    // TODO: secure this with whitelisted keys
    ctx.state = Object.assign(ctx.state, this.locals);

    // add `ctx` object to the state for views
    ctx.state.ctx = ctx;

    // add flash messages to state
    if (_.isFunction(ctx.flash) && _.isObject(ctx.session))
      ctx.state.flash = () => {
        if (!_.isObject(ctx.session.flash)) return {};
        return _.zipObject(
          _.keys(ctx.session.flash),
          _.keys(ctx.session.flash).map(key => ctx.flash(key))
        );
      };

    return next();
  }
}

module.exports = StateHelpers;

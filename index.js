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
    if (typeof ctx.flash === 'function')
      ctx.state.flash = () => {
        return {
          success: ctx.flash('success'),
          error: ctx.flash('error'),
          info: ctx.flash('info'),
          warning: ctx.flash('warning'),
          question: ctx.flash('question')
        };
      };

    return next();
  }
}

module.exports = StateHelpers;

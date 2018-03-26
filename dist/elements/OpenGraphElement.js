'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class OpenGraphElement {
  constructor({ url, buttons = '' }) {
    this.url = url;
    this.buttons = buttons;

    const res = {
      url: this.url
    };

    if (this.buttons) {
      if (this.buttons.length > _constants2.default) {
        throw new Error(`Maximum of ${_constants2.default} buttons are allowed when sending via Send API.`);
      }
      res.buttons = this.buttons;
    }

    return res;
  }
}

exports.default = OpenGraphElement;
class Template {
  constructor() {
    this._parser = undefined;
    this._fragments = {};
  }

  getFragment(html) {
    let id = 'f-' + this.hash(html);
    if (this._fragments[id] === undefined) {
      this._fragments[id] = this.buildFragment(html);
    }
    return this._fragments[id];
  }

  buildFragment(html) {
    html = `<template id="tpl">${html}</template>`;
    let dom = this.parser.parseFromString(html, 'text/html');
    return dom.querySelector('#tpl').content;
  }

  get parser() {
    if (this._parser === undefined) {
      this._parser = new DOMParser();
    }
    return this._parser;
  }

  hash(str) {
    var hash = 0, i, chr;
    for (i = 0; i < str.length; i++) {
      chr   = str.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0;
    }
    return hash;
  }
}

export default Template;

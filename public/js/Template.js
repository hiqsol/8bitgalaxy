class Template {
  constructor() {
    this._parser = undefined;
    this._fragments = {};
  }

  get card()    { return this.getFragment('card'); }
  get star()    { return this.getFragment('star'); }
  get pile()    { return this.getFragment('pile'); }
  get home()    { return this.getFragment('home'); }
  get board()   { return this.getFragment('board'); }

  getFragment(name) {
    if (this._fragments[name] === undefined) {
      this._fragments[name] = this.buildFragment(name);
    }
    return this._fragments[name];
  }

  buildFragment(name) {
    let html = this.parser.parseFromString(Fragments[name], 'text/html');
    return html.querySelector('#the-template').content;
  }

  get parser() {
    if (this._parser === undefined) {
      this._parser = new DOMParser();
    }
    return this._parser;
  }
}

const Fragments = {
  card: `
    <template id="the-template">
      <div class="card">
        <div class="image">
          <div class="klass lni"></div>
        </div>
        <div class="part utilization">
          <div class="lni lni-archive"></div>
          <div class="value">U</div>
        </div>
        <div class="part Defense"><div class="lni lni-shield"></div><div class="value">D</div></div>
        <div class="part Attack"><div class="lni lni-pointer"></div><div class="value">A</div></div>
        <div class="part Colonization"><div class="lni lni-basketball"></div><div class="value">C</div></div>
        <div class="part Science"><div class="lni lni-star"></div><div class="value">S</div></div>
        <div class="part Production"><div class="lni lni-package"></div><div class="value">P</div></div>
        <div class="Level Klass"><div class="value">L</div></div>
      </div>
    </template>
  `,
  star: `
    <template id="the-template">
      <div class="star"><div class="hexagon"><span><div class="inner lni lni-sun"></div></span></div></div>
    </template>
  `,
  pile: `
    <template id="the-template">
      <div class="Pile">
      </div>
    </template>
  `,
  home: `
    <template id="the-template">
      <div class="Home"></div>
        <div class="Discard"></div>
      </div>
    </template>
  `,
}

export default Template;

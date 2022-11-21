import Game from '../Game.js';
import Drawer from './Drawer.js';

class ScoreboardDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  draw(parent, scoreboard) {
    let e = this._drawer.importNode(parent, this.fragment, '.Scoreboard');

    e.querySelector('#Export').onclick = () => {
      let dataStr = scoreboard.game.exportJson();
      let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

      let exportFileDefaultName = 'game.json';

      let linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
    }

    e.querySelector('#Import').onchange = function(event) {
      var reader = new FileReader();

      reader.onload = function(event) {
        if (event.target.readyState != 2) return;
        if (event.target.error) {
            alert('Error while reading file');
            return;
        }

        let json = event.target.result;
        scoreboard.game.importJson(json);
        scoreboard.game.redraw();
      };

      reader.readAsText(event.target.files[0]);
    };

  }

  get fragment() { return this._drawer.getFragment(HTML); }
}

const HTML = `
    <div class="Scoreboard">
      <label>Export
        <input id="Export" value="Export" type="button" />
      </label>
      <form id="ImportForm">
        <label>Import
          <input id="Import" name="files[]" multiple="" type="file" />
        </label>
      </form>
    </div>
`;

export default ScoreboardDrawer;

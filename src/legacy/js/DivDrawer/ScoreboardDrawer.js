import Game from '../Game.js';
import Drawer from './Drawer.js';
import aDrawer from './aDrawer.js';

class ScoreboardDrawer extends aDrawer {
  constructor(drawer) {
    super(drawer);
    this._HTML = `
      <div class="Scoreboard">
        <label>Export
          <input id="Export" value="Export" type="button" />
        </label>
        <form id="ImportForm">
          <label>Import
            <input id="Import" name="files[]" multiple="" type="file" />
          </label>
        </form>
        <label>Undo
          <input id="Undo" value="Undo" type="button" />
        </label>
      </div>
    `;
  }

  draw(parent, scoreboard, params) {
    let e = this.drawNode(parent, params);

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
    }

    e.querySelector('#Undo').onclick = function(event) {
      scoreboard.game.undo();
    }
  }
}


export default ScoreboardDrawer;

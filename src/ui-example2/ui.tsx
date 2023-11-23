import { Dashboard } from './components/Dashboard/Dashboard';

import { NS } from '@ns';
import React from 'react';
import DomType from 'react-dom';
const ReactDOM = (window as unknown as { ReactDOM: typeof DomType }).ReactDOM;

export async function main(ns: NS) {
  ns.disableLog('asleep');
  ReactDOM.render(
    <React.StrictMode>
      <Dashboard ns={ns} />
    </React.StrictMode>,
    document.getElementById('overview-extra-hook-0'), // there are 3 empty elements provided for players to include their own ui under overview window named (.overview-extra-hook-0, ...-1 ,...-2).
  );
  while (ns.scriptRunning('/ui-example/ui.js', 'home')) {
    await ns.asleep(1000); // script must be running in bitburner for ns methods to function inside our component
  }
}

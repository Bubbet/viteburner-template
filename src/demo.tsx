import { NS } from '@ns';
import React from 'react';
import DomType from 'react-dom';
const ReactDOM = (window as unknown as { ReactDOM: typeof DomType }).ReactDOM;

export async function main(ns: NS): Promise<void> {
  ns.disableLog('asleep');
  ReactDOM.render(
    <React.StrictMode>
      <span style={{ color: 'rgb(255, 30, 8)', backgroundColor: 'rgb(255, 255, 255)', width: '100%' }}>
        Hello there again!
      </span>
    </React.StrictMode>,
    document.getElementById('overview-extra-hook-0'), // there are 3 empty elements provided for players to include their own ui under overview window named (.overview-extra-hook-0, ...-1 ,...-2).
  );
  while (ns.scriptRunning('/demo.js', 'home')) {
    await ns.asleep(1000); // script must be running in bitburner for ns methods to function inside our component
  }

  ns.clearLog();
  ns.tail();
  ns.printRaw(
    <span style={{ color: 'rgb(255, 30, 8)', backgroundColor: 'rgb(255, 255, 255)', width: '100%' }}>
      Hello there!
    </span>,
  );
}

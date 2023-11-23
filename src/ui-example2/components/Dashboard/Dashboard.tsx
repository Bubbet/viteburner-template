import { Button } from '../Button';
import { MonitorInput } from './MonitorInput';
import { ToggleSection } from './ToggleSection';

import { NS } from '@ns';
import React from 'react';

export interface IDashboardProps {
  ns: NS;
}
export const Dashboard = ({ ns }: IDashboardProps) => {
  const killAllClicked = async () => {
    alert('Killing stuff');
  };

  const runClicked = async () => {
    alert('Running stuff');
  };
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Button bg="red" title="Kill ME All!" onButtonClick={killAllClicked} />
        <Button bg="green" title="Run!" onButtonClick={runClicked} />
      </div>
      <MonitorInput ns={ns} />
      <ToggleSection ns={ns} />
    </div>
  );
};

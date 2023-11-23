import { Button } from '../Button';
import { MonitorInput } from './MonitorInput';
import { ToggleSection } from './ToggleSection';

import { NS } from '@ns';
import React, { useState } from 'react';

export interface IDashboardProps {
  ns: NS;
}
export const Dashboard = ({ ns }: IDashboardProps) => {
  const [message, setState] = useState('');
  let timeout: ReturnType<typeof setTimeout> | undefined = undefined;
  const killAllClicked = async () => {
    setState('Killing stuff');
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => setState(''), 5000);
  };

  const runClicked = async () => {
    setState('Running stuff');
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => setState(''), 5000);
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
      <MonitorInput ns={ns} message={message} />
      <ToggleSection ns={ns} />
    </div>
  );
};

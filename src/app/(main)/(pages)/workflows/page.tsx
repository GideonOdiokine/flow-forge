import React from 'react';
import WorkflowsClient from './_components/WorkflowsClient';
import WorkflowsServer from './_components/WorkflowsServer';

export default function Page() {
  return <WorkflowsClient ServerComponent={<WorkflowsServer />} />;
}

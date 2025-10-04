import React from 'react'
import Workflow from './workflow'
// import { onGetWorkflows } from '../_actions/workflow-connections'
import MoreCredits from './more-credits'


const Workflows = async () => {
  const workflows = await [{
    id: '1', name: 'Sample Workflow', description: 'This is a sample workflow',

  }]
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col m-2">
        <MoreCredits />
        {[]?.length ? (
          [workflows].map((flow) => (
            <Workflow
              key={flow.id}
              {...flow}
            />
          ))
        ) : (
          <div className="mt-28 flex text-muted-foreground items-center justify-center">
            No Workflows
          </div>
        )}
      </section>
    </div>
  )
}

export default Workflows

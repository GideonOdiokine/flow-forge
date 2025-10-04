import { ConnectionsProvider } from '@/providers/connections-provider'
import EditorProvider from '@/providers/editor-provider'
import React from 'react'

const page = () => {
    return (
        <div className='h-full'>
            <EditorProvider>
                <ConnectionsProvider>
                    <div className='h-full' id='reactflow-wrapper'></div>
                </ConnectionsProvider>
            </EditorProvider>
        </div>
    )
}

export default page

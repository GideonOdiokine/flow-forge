import { ConnectionsProvider } from '@/providers/connections-provider'
import EditorProvider from '@/providers/editor-provider'
import React from 'react'
import EditorCanvas from './_components/editor-canvas'

const page = () => {
    return (
        <div className='h-full'>
            <EditorProvider>
                <ConnectionsProvider>
                    <div className='h-full' id='reactflow-wrapper'>
                        <EditorCanvas />
                    </div>
                </ConnectionsProvider>
            </EditorProvider>
        </div>
    )
}

export default page

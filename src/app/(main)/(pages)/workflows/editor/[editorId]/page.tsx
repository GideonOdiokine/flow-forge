import EditorProvider from '@/providers/editor-provider'
import React from 'react'

const page = () => {
    return (
        <div className='h-full'>
            <EditorProvider>
                <div className='h-full' id='reactflow-wrapper'></div>
            </EditorProvider>
        </div>
    )
}

export default page

'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { FileUploaderRegular } from '@uploadcare/react-uploader/next'
import '@uploadcare/react-uploader/core.css'

type Props = {
  onUpload?: (url: string) => Promise<any> | any
}

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter()

  return (
    <FileUploaderRegular
      pubkey={'6d5ab3a6d5ed008709b2'}
      sourceList="local, camera, url, gdrive, dropbox"
      classNameUploader="uc-light"
      onFileUploadSuccess={async (file) => {
        const uploaded = await onUpload?.(file.cdnUrl)
        console.log(file.cdnUrl, uploaded)
        if (uploaded) router.refresh()
      }}
    />
  )
}

export default UploadCareButton

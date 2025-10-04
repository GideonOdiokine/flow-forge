"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import UploadCareButton from './uploadcare-button'
import { X } from 'lucide-react'

type Props = {
    userImage: string | null
    onDelete?: any
    onUpload: any
}

const ProfilePicture = ({ userImage, onDelete, onUpload }: Props) => {
    const router = useRouter()

    const onRemoveProfileImage = async () => {
        const response = await onDelete()
        console.log('Response from onDelete:', response)
        if (response) {
            router.refresh()
        }
    }
    return (
        <div className="flex flex-col">
            <p className="text-lg text-white"> Profile Picture</p>
            <div className="flex h-[30vh] flex-col items-center justify-center">
                {userImage ? (
                    <>
                        <div className="relative !rounded-full !w-2/6">
                            <Image
                                src={userImage}
                                alt="User_Image"
                                width={100}
                                height={100}
                                className='object-contain !w-full !h-[160px] '
                                priority

                            />
                        </div>
                        <Button
                            onClick={onRemoveProfileImage}
                            className="bg-transparent cursor-pointer text-white/70 hover:bg-transparent hover:text-white"
                        >
                            <X /> Remove
                        </Button>
                    </>
                ) : (
                    <UploadCareButton onUpload={onUpload} />
                )}
            </div>
        </div>
    )
}

export default ProfilePicture

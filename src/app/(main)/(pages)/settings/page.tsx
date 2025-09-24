import ProfileForm from '@/components/forms/profile-form'
import React from 'react'
import ProfilePicture from './_components/profile-picture'
import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'


const page = async () => {
    const authUser = await currentUser()
    console.log(authUser)

    if (!authUser) return null
    // Wire up profile picture
    const removeProfileImage = async () => {
        'use server'
        const response = await db.user.update({
            where: {
                clerkId: authUser.id,
            },
            data: {
                profileImage: '',
            },
        })
        return response
    }
    return (
        <div className='flex flex-col gap-4'>
            <h1 className='sticky top-0 z-[10] bg-background/50 p-6  text-4xl backdrop-blur-lg border-b'>
                <span>Settings</span>
            </h1>
            <div className="flex flex-col gap-10 p-6">
                <div>
                    <h2 className='text-2xl font-bold'>Account Settings</h2>
                    <p className='text-muted-foreground'>Manage your account details, change your password, and update your email preferences.</p>
                </div>
                <ProfilePicture
                    onDelete={removeProfileImage}
                //   userImage={user?.profileImage || ''}
                //   onUpload={uploadProfileImage}
                />
                <ProfileForm user={{ name: 'Gideon', email: 'gideon@example.com' }} />
            </div>
        </div>
    )
}

export default page

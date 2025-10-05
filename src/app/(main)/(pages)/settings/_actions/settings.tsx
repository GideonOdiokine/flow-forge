'use server'

import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'

export async function uploadProfileImage(image: string) {
  const authUser = await currentUser()
  if (!authUser) return null

  const response = await db.user.update({
    where: { clerkId: authUser.id },
    data: { profileImage: image },
  })

  // Invalidate cache for settings
  revalidatePath('/settings')

  return response
}

export async function removeProfileImage() {
  const authUser = await currentUser()
  if (!authUser) return null

  const response = await db.user.update({
    where: { clerkId: authUser.id },
    data: { profileImage: '' },
  })

  // Invalidate cache for settings
  revalidatePath('/settings')

  return response
}

'use server'



export async function updateUserInfo(name: string) {
  const authUser = await currentUser()
  if (!authUser) return null

  const updateUser = await db.user.update({
    where: { clerkId: authUser.id },
    data: { name },
  })

  // Bust the settings page cache
  revalidatePath('/settings')

  return updateUser
}

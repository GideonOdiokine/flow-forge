'use server'
import { db } from '@/lib/db'
import { EditUserProfileSchema } from '@/lib/schemas/profile'
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



export async function updateUserInfo(formData: any) {
  const authUser = await currentUser()
  if (!authUser) return null

  // ⛔ server-side validation (the ONLY correct place)
  const parsed = EditUserProfileSchema.safeParse(formData)
  if (!parsed.success) {
    throw new Error("Invalid user profile information")
  }

  const { name, email } = parsed.data

  const updateUser = await db.user.update({
    where: { clerkId: authUser.id },
    data: { name, email },
  })

  revalidatePath('/settings')

  return updateUser
}

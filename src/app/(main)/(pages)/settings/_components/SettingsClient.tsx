'use client';
import dynamic from 'next/dynamic';
import { removeProfileImage, updateUserInfo, uploadProfileImage } from '../_actions/settings';
const ProfileForm = dynamic(() => import('@/components/forms/profile-form'));
const ProfilePicture = dynamic(() => import('./profile-picture'));

export default function SettingsClient({ user }: { user: any }) {
  return (
    <div className="flex flex-col gap-4">
      <ProfilePicture
        userImage={user?.profileImage || ""}
        onUpload={uploadProfileImage}
        onDelete={removeProfileImage}
      />
      <ProfileForm user={user} onUpdate={updateUserInfo} />
    </div>
  );
}

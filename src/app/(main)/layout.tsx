import React from 'react'
import Sidebar from '@/components/sidebar'
import InfoBar from '@/components/infobar'

type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
    return (
        <div className="flex h-screen w-full max-h-screen no-scrollbar">
            <div
                className={` h-full md:flex   md:flex-col md:fixed md:inset-y-0 `}
            >
                <Sidebar

                />
            </div>

            <main
                className={`flex-1 !h-[100vh] !w-full transition-all pl-[105px]`}
            >
                {props.children}
            </main>
        </div>
    )

}
export default Layout

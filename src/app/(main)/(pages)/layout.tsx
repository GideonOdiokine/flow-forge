import React from 'react'

type Props = { children: React.ReactNode }

const Layout = ({ children }: Props) => {
    return (
        <div className="pb-20  border-[1px] rounded-1xl border-blue-950 h-[100%] overflow-scroll">
            {children}
        </div>
    )
}

export default Layout

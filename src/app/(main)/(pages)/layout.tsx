import React from 'react'

type Props = { children: React.ReactNode }

const Layout = ({ children }: Props) => {
    return (
        <div className="border-[1px] pb-20 rounded-3xl  border-muted-foreground/20 h-[100%] overflow-scroll">
            {children}
        </div>
    )
}

export default Layout

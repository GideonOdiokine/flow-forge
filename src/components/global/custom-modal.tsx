import { Button } from '@/components/ui/button'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer'
import { useModal } from '@/providers/modal-provider'

import React from 'react'

type Props = {
    title: string
    subheading: string
    children: React.ReactNode
    defaultOpen?: boolean
}

const CustomModal = ({ children, subheading, title, defaultOpen }: Props) => {
    const { isOpen, setClose } = useModal()
    const handleClose = () => setClose()

    return (
        <Drawer
            open={isOpen}
            onClose={handleClose}
            direction='bottom'
        >
            <DrawerContent className='!bg-background  !border-t-[1px] border-muted'>
                <DrawerHeader>
                    <DrawerTitle className="text-center">{title}</DrawerTitle>
                    <DrawerDescription asChild className="text-center flex flex-col items-center gap-4 h-96 overflow-scroll">
                        <div>
                            {subheading}
                            {children}
                        </div>
                    </DrawerDescription>

                </DrawerHeader>
                <DrawerFooter className="flex flex-col gap-4 !bg-background border-t-[1px] border-t-muted">
                    <DrawerClose asChild>
                        <Button
                            variant="ghost"
                            className="w-full"
                            onClick={handleClose}
                        >
                            Close
                        </Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default CustomModal

import {ReactNode } from 'react'

export type ContainerProps = {
    children:ReactNode
}

export default function Container({children}:ContainerProps){
    return(
        <>
            <div>
                {children}
            </div>

        </>
    )
}
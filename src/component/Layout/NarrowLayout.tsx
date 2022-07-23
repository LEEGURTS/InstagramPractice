import React, { ReactNode } from "react";

interface Props{
    children:ReactNode;
}

const NarrowLayout:React.FunctionComponent<Props> = ({children}) =>{
    return(
        <div className="w-full w-min-[400px] flex items-center h-screen bg-[#fafafa] text-sm">
            <div className="flex mx-auto md:w-[768px] p-1">
                {children}
            </div>
        </div>
    )
}

export default NarrowLayout
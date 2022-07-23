import React from "react";
import FadeIn from "../component/FadeIn/FadeIn";
import Index from "../component/index/Index";
import NarrowLayout from "../component/Layout/NarrowLayout";

const IndexPage:React.FunctionComponent = ()=>{
    return(
        <NarrowLayout>
            <FadeIn>
                <Index></Index>
            </FadeIn>
        </NarrowLayout>
    )
}

export default IndexPage
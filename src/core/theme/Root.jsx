import { Outlet } from "react-router-dom";

import PageWrapper from './../../pagewrapper/PageWrapper';


export const Root = () => {
    return(
        <PageWrapper>
            <Outlet />
        </PageWrapper>
    )
}
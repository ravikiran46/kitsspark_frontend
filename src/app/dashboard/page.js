
'use client';

import useAuth from "@/hooks/useAuth";
const DashboardPage = () => {


    return (<>
        <DashboardComponent />
    </>);
};

const DashboardComponent = () => {

    return (<>

        <DashboardComponentUi />
    </>);
};

const DashboardComponentUi = () => {

    const { userRole } = useAuth();
    return (<>

        <div>


        </div>
    </>);
};
export default DashboardPage;
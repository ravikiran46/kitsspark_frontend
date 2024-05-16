
'use client';

import useAuth from "@/hooks/useAuth";
import AdminHomepage from "@/components/pages/dashboard/Admin/AdminHomepage";

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

       {userRole=="admin"  && <AdminHomepage />}
    </>);
};
export default DashboardPage;
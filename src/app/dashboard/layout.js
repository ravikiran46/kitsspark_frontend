

import AdminDashboardLayout from "@/components/pages/dashboard/DashboardLayout"
import AuthorizationWrapper from "@/utils/authorization"
const Layout = ({ children }) => {


    return (<>
        <AuthorizationWrapper allowedRoles={['admin']}>
            
            <AdminDashboardLayout>
            
                {children}
            </AdminDashboardLayout>
        </AuthorizationWrapper>


    </>)
}

export default Layout
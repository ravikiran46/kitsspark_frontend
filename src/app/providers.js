
import { AuthProvider } from "@/hooks/useAuth"
import { GoogleOAuthProvider } from '@react-oauth/google';
const Providers = ({ children }) => {



    return (

        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_CLIENT_ID}>

            <AuthProvider>
                {children}
            </AuthProvider>

        </GoogleOAuthProvider>

    )

}
export default Providers
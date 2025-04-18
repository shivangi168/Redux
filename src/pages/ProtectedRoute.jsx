import { useSate , createContext, useContext} from 'react';
import { Navigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
const ProtectedRoute = ({ element }) => {
    const { user } = useContext(AuthContext);
    return user ? element : <Navigate to="login" replace></Navigate>
}

export default ProtectedRoute;
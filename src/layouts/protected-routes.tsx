import { LoaderPage } from "@/routes/loader-page"; 
import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

type ProtectRoutesProps = {
  children: React.ReactNode;
};

const ProtectRoutes = ({ children }: ProtectRoutesProps) => {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return <LoaderPage />;
  }

  if (!isSignedIn) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectRoutes;

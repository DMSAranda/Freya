
import { useAuth } from "./auth/hooks/useAuth"
import { AllRoutes } from "./routes/AllRoutes";

export const App = () => {

  const { isLoginLoading } = useAuth();
  

    if(isLoginLoading) {
      return(
        <div className="container my-4">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
      )
    }

  return (
      <AllRoutes/>
  )
};

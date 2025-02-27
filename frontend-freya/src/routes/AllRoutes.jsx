import { SelectDepartment } from '../components/App/SelectDepartment';
import { SelectUser } from '../components/App/SelectUser';
import { Navigate, Route, Routes,useLocation } from 'react-router-dom';
import { UsersPage } from '../pages/UsersPage';
import { Navbar } from '../components/navbar/Navbar';
import { RegisterPage } from '../pages/RegisterPage';
import { useAuth } from '../auth/hooks/useAuth';
import { CatalogView } from '../components/Cart/CatalogView';
import { CartView } from '../components/Cart/CartView';
import { useItemsCart } from '../hooks/useItemsCart';
import { LoginPage } from '../auth/pages/LoginPage';

export const AllRoutes = () => {
    const { login } = useAuth();
    const { cartItems, handlerAddReport, handlerDeleteReport } = useItemsCart();
    const location = useLocation();

    

    const shouldHideNavbar =
        location.pathname === "/departments" || 
        location.pathname === "/login" ||
        location.pathname.match(/^\/departments\/[^/]+\/users$/); 
        
        // Verificar si la ruta coincide con "/departments/:departmentId/users"



    return (
        <>
            
                 {/* Renderizar la Navbar solo si no estamos en una de las rutas donde se debe ocultar */}
                {!shouldHideNavbar && login.isAuth && login.isAdmin && <Navbar/> }

                <Routes>
                    <Route path="/" element={<Navigate to="/departments" />} />
                    <Route path="/departments" element={<SelectDepartment />} />
                    <Route path="/departments/:departmentId/users" element={<SelectUser />} />
                    <Route path="/login" element={<LoginPage />} />


                    {/* Rutas condicionales para usuarios autenticados */}
                    {login.isAuth && (
                        <>              
                            <Route path="/catalog" element={<CatalogView handler={handlerAddReport} />} />
                            <Route path="/cart" element={
                                cartItems?.length <= 0 ? (
                                    <div className="alert alert-warning">Cart is empty</div>
                                ) : (
                                    <div className="my-4 w-80">
                                        <CartView items={cartItems} handlerDelete={handlerDeleteReport} />
                                    </div>
                                )
                            } />
                            {login.isAdmin && (
                                <>
                                    
                                    <Route path="/users" element={<UsersPage />} />
                                    <Route path="/users/page/:page" element={<UsersPage />} />
                                    <Route path="/register" element={<RegisterPage />} />
                                    <Route path="/edit/:id" element={<RegisterPage />} />
                                </>
                            )}
                        </>
                    )}

                    {/* No autenticado */}
                    
                    
                </Routes>
            
        </>
    );
};

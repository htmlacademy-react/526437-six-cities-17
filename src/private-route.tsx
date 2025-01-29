
import { useEffect } from 'react';
import { AppRouter} from './constant';
import { Navigate, useNavigate, createSearchParams, useLocation } from 'react-router-dom';
type TPrivateRouteProps ={
    status: boolean;
    children: JSX.Element;
}


export default function PrivateRoute(props: TPrivateRouteProps): JSX.Element{
  const { status, children } = props;
  const navigate = useNavigate();
  const location = useLocation()?.pathname;
  useEffect(() => {
    if (!status) {
      navigate({
        pathname: AppRouter.Login,
        search: createSearchParams({
          next:`${location}`
        }).toString()
      });
    }
  }, [status, navigate, location]);
  return (
    status ? children : <Navigate to={AppRouter.Login}/>

  );
}



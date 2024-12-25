
import { AppRouter} from './constant';
import { Navigate } from 'react-router-dom';
type TPrivateRouteProps ={
    status: boolean;
    children: JSX.Element;
}

export default function PrivateRoute(props: TPrivateRouteProps): JSX.Element{
  const {status, children} = props;
  return (
    status ? children : <Navigate to={AppRouter.Login}/>

  );
}



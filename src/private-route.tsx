
import {PrivateStatus, AppRouter} from './constant';
import { Navigate } from 'react-router-dom';
type TPrivateRouteProps ={
    status: PrivateStatus;
    children: JSX.Element;
}

export default function PrivateRoute(props: TPrivateRouteProps): JSX.Element{
  const {status, children} = props;
  return (
    status === PrivateStatus.Auth ? children : <Navigate to={AppRouter.Login}/>

  );
}



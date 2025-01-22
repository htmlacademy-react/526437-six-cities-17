import { NameSpace } from '../../constant';
import {RootState} from '../../types/root-state-types';


export const authStatus = (state: Pick<RootState, NameSpace.User>) : boolean => state[NameSpace.User].authorizationStatus;

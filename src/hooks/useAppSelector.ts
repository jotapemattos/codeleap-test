import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../redux/SignUp/store';

export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;

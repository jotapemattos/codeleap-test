import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../redux/SignUp/store';
import { RootPostState } from '../redux/FormPosts/store';

export const useNameSelector: TypedUseSelectorHook<RootState> = useSelector;
export const usePostSelector: TypedUseSelectorHook<RootPostState> = useSelector;

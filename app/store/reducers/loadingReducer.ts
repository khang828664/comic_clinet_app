/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';
import { ILoading } from 'app/models/reducers/loading';

const initialState: ILoading = {
  isLoading: false,
};

export const loadingReducer = createReducer(initialState, {
  [types.LOGIN_ENABLE_LOADER](state: ILoading) {
    return { ...state, isLoading: true };
  },
  [types.LOGIN_DISABLE_LOADER](state: ILoading) {
    return { ...state, isLoading: false };
  },
  [types.COMIC_ENABLE_LOADER](state: ILoading) {
    return { ...state, isLoading: true };
  },
  [types.COMIC_DISABLE_LOADER](state: ILoading) {
    return { ...state, isLoading: false };
  },
  
});

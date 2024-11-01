import { 
    createContext, 
    useContext, 
    useEffect, 
    useReducer } from 'react';

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isLoggedIn: localStorage.getItem("user") ? true : false,
    loading: true,
    error: null,
    dispatch: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
    switch (action.type) {
      // 로그인 성공 시
      case "LOGIN":
        return {
          user: action.payload,
          isLoggedIn: true,
          loading:false,
          error: null,
        };
      // 로그아웃 시
      case "LOGOUT":
        return {
          user: null,
          isLoggedIn: false,
          loading:false,
          error: null,
        };
      // 로그인 실패 시
      case "LOGIN_FAILURE":
        return {
          user: null,
          isLoggedIn: false,
          loading:false,
          error: action.payload,
        };
      // 사용자 정보 업데이트 시
      case "UPDATE_USER_DATA":
        return {
          user: action.payload,
          isLoggedIn: false,
          loading:false,
          error: null,
        };
      // 기본값
      default:
        return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);

    return(
        <AuthContext.Provider
            value={{
                user: state.user,
                isLoggedIn: state.isLoggedIn,
                loading: state.loading,
                error: state.error,
                dispatch,
            }}
        >
          {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
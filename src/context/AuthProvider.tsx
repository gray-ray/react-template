import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useMemo,
} from 'react';
import { Navigate } from 'react-router';
import access from '@/access';

export { PermissionEnum } from '@/access';

import { getUserInfo } from '@/services/api/user';

type AuthContextType = {
  access: { [key: string]: boolean };
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<API_USER.UserItem>();

  const [loading, setLoading] = useState(true);

  const fetchUserInfo = async () => {
    setLoading(true);

    const res = await getUserInfo();

    setLoading(false);

    setUserInfo(res?.data);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  // 计算当前用户的权限
  const accessRules = useMemo(() => {
    return access({ permissions: userInfo?.permissions ?? [] });
  }, [userInfo]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ access: accessRules, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface WithAccessProps {
  children: ReactNode;
  accessKey: string;
}

export const WithAccess = ({ children, accessKey }: WithAccessProps) => {
  const { access, loading } = useAuth();

  console.log('AccessLayout', accessKey, access, loading, access[accessKey]);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!accessKey) {
    return <>{children}</>;
  }

  if (!access[accessKey]) {
    return <Navigate to="/403" replace />; // 无权限跳转 403
  }

  return <>{children}</>;
};

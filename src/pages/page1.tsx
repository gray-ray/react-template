import { useAuth } from '@/context/AuthProvider';
const Index = () => {
  const { access } = useAuth();

  return (
    <div style={{ background: 'red' }}>
      page1
      {access['btn1'] && <div>有权限</div>}
    </div>
  );
};

export default Index;

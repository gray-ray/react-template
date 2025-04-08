import React from 'react';

type Props = {
  children: React.ReactNode;
  title: string;
};
const Index = (props: Props) => {
  const { children, title = '标题' } = props;
  return (
    <div
      style={{
        width: '100%',
        marginBottom: 16,
        boxSizing: 'border-box',
        border: '1px dotted #eee',
      }}
    >
      <h3>{title}</h3>
      <div style={{ width: '100%', height: 500 }}>{children}</div>
    </div>
  );
};
export default Index;

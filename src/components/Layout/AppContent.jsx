import React from 'react';
import Layout from 'antd/es/layout/layout';

const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 60px)',
  color: '#fff',
  backgroundColor: '#001529',
  paddind: '1rem',
};
function AppContent() {
  return <Layout.Content style={contentStyle}>Content</Layout.Content>;
}

export default AppContent;

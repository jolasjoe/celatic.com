import React from 'react';
import { Layout } from 'antd';

const { Header, Content } = Layout;

const AppLayout = ({ children }) => (
    <Layout style={{ height: '100dvh', background: '#000' }}>
        <Header
            style={{
                background: '#000',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                padding: '0 20px',
                height: 48,
                lineHeight: '48px',
                fontSize: 13,
                color: 'rgba(255,255,255,0.7)',
                letterSpacing: '0.04em',
            }}
        >
            Code
        </Header>
        <Content style={{ flex: 1, display: 'flex', overflow: 'hidden', minHeight: 0 }}>
            {children}
        </Content>
    </Layout>
);

export default AppLayout;

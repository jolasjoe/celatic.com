import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider, theme } from 'antd'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
                token: {
                    colorBgBase: '#000000',
                    colorBgContainer: '#0a0a0a',
                    colorBgElevated: '#141414',
                    colorBorder: 'rgba(255,255,255,0.1)',
                    borderRadius: 4,
                    fontFamily: 'inherit',
                },
            }}
        >
            <App />
        </ConfigProvider>
    </React.StrictMode>,
)

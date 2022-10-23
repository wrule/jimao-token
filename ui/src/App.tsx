import 'antd/dist/antd.min.css';
import zhCN from 'antd/es/locale/zh_CN';
import { Button, ConfigProvider, Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import style from './App.module.scss';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Layout className={style.layout}>
        <Header className={style.header}>
          <h1 className={style.title}>Jimao Token</h1>
        </Header>
        <Content className={style.content}>
          <Button>你好，世界</Button>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;

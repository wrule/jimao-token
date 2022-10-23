import 'antd/dist/antd.min.css';
import zhCN from 'antd/es/locale/zh_CN';
import { Button, ConfigProvider, Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Layout>
        <Header>你好，世界</Header>
        <Content>
          <Button>你好，世界</Button>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;

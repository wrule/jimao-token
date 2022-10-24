import 'antd/dist/antd.min.css';
import zhCN from 'antd/es/locale/zh_CN';
import { Button, ConfigProvider, Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import { Connector } from './components/connector';
import style from './App.module.scss';
import { Wallet } from 'ethers';

function App() {
  const handle_click = () => {
    console.log('点我');
    const wallet = Wallet.createRandom();
    console.log(wallet.address, wallet.privateKey, wallet.mnemonic);
  };

  return (
    <ConfigProvider locale={zhCN}>
      <Layout className={style.layout}>
        <Header className={style.header}>
          <h1 className={style.title}>Jimao Token</h1>
          <Connector />
        </Header>
        <Content className={style.content}>
          <Button onClick={handle_click}>点我</Button>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;

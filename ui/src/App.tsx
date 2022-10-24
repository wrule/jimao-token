import 'antd/dist/antd.min.css';
import zhCN from 'antd/es/locale/zh_CN';
import { Button, ConfigProvider, Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import { Connector } from './components/connector';
import style from './App.module.scss';
import { ethers, Wallet } from 'ethers';
import JIMAO_abi from './abi/JIMAO.json';

declare const ethereum: ethers.providers.ExternalProvider | any;
const provider = new ethers.providers.Web3Provider(ethereum);
const JIMAO_address = '0x5cBd28D3955Cc593FAb81Bef8cbF41ccCdc7F0a0';

const JIMAO = new ethers.Contract(JIMAO_address, JIMAO_abi.abi, provider);

function App() {
  const handle_click = async () => {
    console.log('点我');
    const name = await JIMAO.symbol();
    console.log(name);
  };

  return (
    <ConfigProvider locale={zhCN}>
      <Layout className={style.layout}>
        <Header className={style.header}>
          <h1 className={style.title}>Jimao Token</h1>
          <Connector />
        </Header>
        <Content className={style.content}>
          <Button type="primary" onClick={handle_click}>领取我的鸡毛币</Button>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;

import 'antd/dist/antd.min.css';
import zhCN from 'antd/es/locale/zh_CN';
import { Button, ConfigProvider, Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import { Connector } from './components/connector';
import style from './App.module.scss';
import { ethers, Wallet } from 'ethers';
import JIMAO_abi from './abi/JIMAO.json';
import { ERC20 } from './contracts/erc20';
import { JIMAO } from './contracts/jimao';

const jimao = new JIMAO();

function App() {
  const handle_click = async () => {
    const rsp = await jimao.airdrop();
    console.log(rsp);
    // const name = await jimao.name();
    // console.log(name);
    // const symbol = await jimao.symbol();
    // console.log(symbol);
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

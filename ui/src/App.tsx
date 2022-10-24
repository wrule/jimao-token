import 'antd/dist/antd.min.css';
import zhCN from 'antd/es/locale/zh_CN';
import { Button, Col, ConfigProvider, Layout, Row, Space } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import { Connector } from './components/connector';
import style from './App.module.scss';
import { JIMAO } from './contracts/jimao';
import { BigNumber, ethers } from 'ethers';
import { USDC } from './contracts/usdc';
import { USDM } from './contracts/usdm';

const provider = new ethers.providers.Web3Provider(ethereum);
const jimao = new JIMAO(provider, provider.getSigner());
const usdc = new USDC(provider, provider.getSigner());
const usdm = new USDM(provider, provider.getSigner());

function App() {
  const handle_get_jimao = async () => {
    const rsp = await jimao.airdrop();
    console.log(rsp);
  };

  const handle_get_usdc = async () => {
    const rsp = await usdc.airdrop();
    console.log(rsp);
  };

  const handle_get_usdm = async () => {
    const rsp = await usdm.airdrop();
    console.log(rsp);
  };

  const handle_test = async () => {
    const rsp = await jimao.airdrop_usdc();
    console.log(rsp);
  };

  const handle_usdc_to_usdm = async () => {
    let rsp = await usdc.approve(
      '0xA16Abc45947931f006cACD0C2f57C07d3e7801dc',
      BigNumber.from("100000000000000000"),
    );
    console.log(rsp);
  };

  const handle_usdm_to_usdc = async () => {

  };

  return (
    <ConfigProvider locale={zhCN}>
      <Layout className={style.layout}>
        <Header className={style.header}>
          <h1 className={style.title}>Jimao Token</h1>
          <Connector />
        </Header>
        <Content className={style.content}>
          <Row>
            <Col span={24}>
              <Space>
                <Button type="primary" onClick={handle_get_jimao}>领取JIMAO</Button>
                <Button type="primary" onClick={handle_get_usdc}>领取USDC</Button>
                <Button type="primary" onClick={handle_get_usdm}>领取USDM</Button>
              </Space>
            </Col>
          </Row>
          <Row style={{ marginTop: '16px' }}>
            <Col span={24}>
              <Space>
                <Button onClick={handle_test}>合约给我USDC</Button>
                <Button onClick={handle_usdc_to_usdm}>USDC换USDM</Button>
                <Button onClick={handle_usdm_to_usdc}>USDM换USDC</Button>
              </Space>
            </Col>
          </Row>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;

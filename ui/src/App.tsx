import 'antd/dist/antd.min.css';
import zhCN from 'antd/es/locale/zh_CN';
import { Button, Col, ConfigProvider, Divider, Layout, Row, Space, Statistic } from 'antd';
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
    console.log(BigNumber.from(10).pow(18).toString());
    // const a = BigNumber.from(1e6);
    // console.log(a);
    // console.log(a.mul(3).toString());
    // const rsp = await jimao.airdrop_usdc();
    // console.log(rsp);
  };

  const handle_usdc_to_usdm = async () => {
    const amount = BigNumber.from(10).pow(18).mul(3);
    let rsp = await usdc.approve(jimao.addressOrName, amount);
    console.log(rsp);
    rsp = await jimao.usdc_to_usdm(amount);
    console.log(rsp);
  };

  const handle_usdm_to_usdc = async () => {
    const amount = BigNumber.from(10).pow(18).mul(3);
    let rsp = await usdm.approve(jimao.addressOrName, amount);
    console.log(rsp);
    rsp = await jimao.usdm_to_usdc(amount);
    console.log(rsp);
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
            <Col span={4}>
              <Statistic title="USDC池" value={112893} />
            </Col>
            <Col span={4}>
              <Statistic title="USDM池" value={112893} />
            </Col>
            <Col span={4}>
              <Statistic title="JIMAO池" value={112893} />
            </Col>
          </Row>
          <Divider />
          <Row style={{ marginTop: '16px' }}>
            <Col span={4}>
              <Statistic title="USDC对价" value={112893} />
            </Col>
            <Col span={4}>
              <Statistic title="USDM对价" value={112893} />
            </Col>
          </Row>
          <Divider />
          <Row style={{ marginTop: '16px' }}>
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
          <Row style={{ marginTop: '16px' }}>
            <Col span={24}>
              <Space>
                <Button onClick={handle_test}>测试</Button>
              </Space>
            </Col>
          </Row>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;

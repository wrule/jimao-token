import { useEffect, useState } from 'react';
import { Button, Spin, Tooltip, Space } from 'antd';
import { ethers } from 'ethers';
import style from './index.module.scss';

declare const ethereum: ethers.providers.ExternalProvider | any;
const provider = new ethers.providers.Web3Provider(ethereum);

export
interface IProps {
  onAccount?: (account: string) => void;
}

export
function Connector(props: IProps) {
  const [account, set_account] = useState<string>('');
  const [eth_balance, set_eth_balance] = useState<number>(0);
  const [fetch_loading, set_fetch_loading] = useState<boolean>(false);
  const [connect_loading, set_connect_loading] = useState<boolean>(false);

  const set_account_wrapper = (account: string) => {
    const account_string = account || '';
    set_account(account_string);
    if (props.onAccount) props.onAccount(account_string);
  }

  const fetch_account = async () => {
    set_fetch_loading(true);
    try {
      const accounts: string[] = await provider.listAccounts();
      set_account_wrapper(accounts[0]);
      const balance = Number(ethers.utils.formatEther(await provider.getBalance(accounts[0])));
      set_eth_balance(Number(balance.toFixed(5)));
    } catch (e) {
      console.error(e);
    }
    setTimeout(() => set_fetch_loading(false), 300);
  };

  const connect_account = async () => {
    set_connect_loading(true);
    try {
      await provider.send('eth_requestAccounts', []);
    } catch (e) {
      console.error(e);
    }
    set_connect_loading(false);
  };

  const on_account_change = (accounts: string[]) => {
    set_account_wrapper(accounts[0]);
  };

  useEffect(() => {
    ethereum.on('accountsChanged', on_account_change);
    fetch_account();
    return () => {
      ethereum.removeListener('accountsChanged', on_account_change);
    };
  }, []);

  return <div className={style.com}>
    {fetch_loading && <Space>
      <Spin className={style.spin} size="small" />
      <span>正在获取账户...</span>
    </Space>}
    {connect_loading && <Space>
      <Spin className={style.spin} size="small" />
      <span>正在连接钱包...</span>
    </Space>}
    {!(fetch_loading || connect_loading) && <>
      {account && <Tooltip placement='bottomLeft' title={account}>
        <span className={style.account}>
          <span>{eth_balance}</span>
          <span>{account}</span>
        </span>
      </Tooltip>}
      {!account && <Button size="small" type="primary" onClick={connect_account}>连接钱包</Button>}
    </>}
  </div>;
}

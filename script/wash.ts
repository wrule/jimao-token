import { ethers } from 'ethers';

interface wallet {
  address: string;
  pri_key: string;
}

function create_wallet(num: number) {
  return Array(num).fill(0).map(() => ethers.Wallet.createRandom());
}

function wash_eth(
  from: string,
  to: string,
  amount: number,
  hop_count: number,
) {

}

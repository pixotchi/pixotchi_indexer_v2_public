import {createConfig, loadBalance, rateLimit} from "@ponder/core";
import {http, webSocket} from "viem";

import { PixotchiRouterAbi } from "./abis/PixotchiRouterAbi";

// @ts-ignore
// @ts-ignore
export default createConfig({
  networks: {
    base: {
      chainId: 8453,
      transport: //webSocket(process.env.PONDER_RPC_URL_WS_1)
       loadBalance([
        //http(process.env.PONDER_RPC_URL_1),
        //  rateLimit(webSocket(process.env.PONDER_RPC_URL_WS_2), { requestsPerSecond: 5, browser: true }),
        //  rateLimit(http(process.env.PONDER_RPC_URL_2), { requestsPerSecond: 5, browser: true }),
        // rateLimit(http(process.env.PONDER_RPC_URL_4), { requestsPerSecond: 5 }),
         // webSocket(process.env.PONDER_RPC_URL_WS_2),
         http(process.env.PONDER_RPC_URL_2),
         //http(process.env.PONDER_RPC_URL_4),
      ]),
    },
  },
  contracts: {
    PixotchiNFT: {
      network: "base",
      // @ts-ignore
      abi: PixotchiRouterAbi, //use fallback in extension I guess? cant replace the router fallback
      address: "0xeb4e16c804AE9275a655AbBc20cD0658A91F9235",
      startBlock: 15073608,
      maxBlockRange: 1000,
    },
  },
});

import Web3 from "web3";
import config from "../config";


export const createWeb3Object = async () => {
    try {
        const provider = new Web3.providers.HttpProvider(config.rpcUrl);
        const web3Obj = new Web3(provider);
        return web3Obj;
    } catch (error) {
        console.log("Error while creating web3 Object", error);
        return;
    }
};
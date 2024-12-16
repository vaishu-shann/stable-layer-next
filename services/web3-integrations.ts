import Web3 from "web3";
import config from "../config";
import { createContractObject } from "./web3-services";



export const buyUSDe = async () => {
    try {
      const buyNetworkContract = await createContractObject(
        "web3Obj",
        "abi",
        "cont_address"
      );
  
      const result = await buyNetworkContract.methods
        .trade("params")
        .send({ from: "fromAddress" });
      return result;
    } catch (error) {
      console.log("Error in stable-layer-web3 | buyUSDe", error);
      return;
    }
  };
export const sellUSDe = async () => {
    try {
      const sellNetworkContract = await createContractObject(
        "web3Obj",
        "abi",
        "cont_address"
      );
  
      const result = await sellNetworkContract.methods
        .trade("params")
        .send({ from: "fromAddress" });
      return result;
    } catch (error) {
      console.log("Error in stable-layer-web3 | sellUSDe", error);
      return;
    }
  };
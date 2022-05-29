const HelloWorld = artifacts.require("HelloWeb3");
contract("HelloWeb3",(accounts)=>{
    it("调用合约，迈入新世界​",async()=>{
        const contractInstance = await HelloWorld.new();
        await contractInstance.hello("Hello Web3.0");
        let result2 = await contractInstance.say();
        console.log(result2);
    });
});
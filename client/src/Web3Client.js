import Web3 from 'web3';
import Election from "./contracts/Election.json";
let selectedAccount;
let electionContract;

export const init = async () => {
	let provider = window.ethereum;

	if (typeof provider !== 'undefined') {
		provider
			.request({ method: 'eth_requestAccounts' })
			.then((accounts) => {
				selectedAccount = accounts[0];
				console.log(`Selected account is ${selectedAccount}`);
			})
			.catch((err) => {
				console.log(err);
				return;
			});

		window.ethereum.on('accountsChanged', function (accounts) {
			selectedAccount = accounts[0];
			console.log(`Selected account changed to ${selectedAccount}`);
		});
	}
    const web3 = new Web3(provider);
    const networkId = await web3.eth.net.getId();
    const accounts = await web3.eth.getAccounts();
    //console.log(Election.netwoks[networkId].address);
  //  electionContract = new web3.eth.Contract(Election.abi, Election.networks[networkId].address);
    var getWinner;
  if(networkId)
    {
        const electionContract = new web3.eth.Contract( Election.abi, '0xd9145CCE52D386f254917e481eB44e9943F39138');
        console.log(electionContract);
        getWinner = await electionContract.methods.getWinner().call();
        console.log(getWinner);
    }
};
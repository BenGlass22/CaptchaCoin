////// ETHEREUM SETUP //////
ethereum.autoRefreshOnNetworkChange = false;
window.ethereum.enable();

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

// swap this address out with the contract address for your token (found in Remix after deploying)
const contractAddress = "0x9f5d171a250f3516c368FddE45aEC837E1d51ab8"; // swap out with your address
const contractABI = [
  "function name() public view returns (string memory)",
  "function symbol() public view returns (string memory)",
  "function decimals() public view returns (uint8)",
  "function totalSupply() public view returns (uint256)",
  "function balanceOf(address account) public view returns (uint256)",
  "function transfer(address recipient, uint256 amount) public returns (bool)",
  "function allowance(address owner, address spender) public view returns (uint256)",
  "function approve(address spender, uint256 amount) public returns (bool)",
  "function transferFrom(address sender, address recipient, uint256 amount) public returns (bool)",
  "function increaseAllowance(address spender, uint256 addedValue) public returns (bool)",
  "function decreaseAllowance(address spender, uint256 subtractedValue) public returns (bool)",
  "function reward(uint256 amt) public payable",
  "function mint(uint256 amount) external"
];
const contract = new ethers.Contract(contractAddress, contractABI, provider);
const tokenWithSigner = contract.connect(signer);

// when you want to reward somebody with tokens, call this function:
// tokenWithSigner.mint(numTokens);

////// END ETHEREUM SETUP

$('#button').click(function(){

  // when I wrote this out as pseudo code for you, I forgot to include actually declaring what numTokens was.
  // Once I fixed the library stuff in your html, and got jQuery working, I saw the error about numTokens.

  const NUM_TOKENS = 1  // change this to whatever.

  tokenWithSigner.mint(NUM_TOKENS);

  setTimeout(function(){
    window.location.href=window.location.href;
  }, 1000)
})


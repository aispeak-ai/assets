// setup
import { LCDClient, MnemonicKey, MsgUpdateContractAdmin } from '@terra-money/terra.js';

const terra = new LCDClient({
  URL: 'https://phoenix-lcd.terra.dev',
  chainID: 'phoenix-1',
});

const walletName = "Previous Admin";
const walletAddress = "";
const walletVocabs = "";

// contract addresses "astral_assembly_address": "terra1k9j8rcyk87v5jvfla2m9wp200azegjz0eshl7n2pwv852a7ssceqsnn7pq",
const newAdmin = "terra1k9j8rcyk87v5jvfla2m9wp200azegjz0eshl7n2pwv852a7ssceqsnn7pq";

// Astroport Proxy Contract
const proxyContract = "";

const mk = new MnemonicKey({
  mnemonic: walletVocabs,
});
const wallet = terra.wallet(mk);
console.log(wallet.key.accAddress);

const msg = new MsgUpdateContractAdmin(
  wallet.key.accAddress,
  newAdmin,
  proxyContract
);
const tx = await wallet.createAndSignTx({ msgs: [msg] });
const result = await terra.tx.broadcast(tx);
console.log(result);
console.log(walletAddress);
console.log(walletName);

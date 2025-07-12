"# testnet4-psbt"

## Put below info to .env file

MONGO_URI = "mongodb+srv://victoryfox1116:kzBPFHRoRfxdDGVO@cluster0.iknukbk.mongodb.net/Chimera?authSource=admin&replicaSet=atlas-10v8gb-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true"
ARCH_PRIVATE_KEY=9d661e76319fc4a151c7857549172c44d9c9d9682ac2233ea8cde251f6378a8a
GOMAESTRO_PRIVATE_KEY=yrvL0u8Ncg7ErfxgrCJRolxNRPgB7ViK

# EndPoint Description

## Ordinal -> Rune Swap

### First Step

POST URL http://localhost:9000/api/swap/pre-rune-inscribe-generate-psbt

#### Params

userAddress : User's Address
userPubkey : User's Pubkey
inscriptionId : Inscription ID

#### Result

hexPsbt : PSBT to be signed via User Wallet
signIndexes : Sign Indexes
runeUtxos : Available Smart Contract's Rune UTXO
remainAmount : After send Utxo's Remain Rune Amount

### Second Step

POST URL http://localhost:9000/api/swap/push-rune-inscribe-psbt-arch

#### Params

signedPSBT : Signed PSBT via User's Wallet
runeUtxos : Smart Contract's Rune Utxo from First API Output
remainAmount : After send Utxo's Remain Rune Amount from First API Output

#### Result

txid : Txid Boradcasted on Mempool

## Rune -> Ordinal Swap

### First Step

POST URL http://localhost:9000/api/swap/pre-inscribe-rune-generate-psbt

#### Params

userAddress : User's Address
userPubkey : User's Pubkey

#### Result

psbt : PSBT to be signed via User Wallet
signIndexes : Sign Indexes
inscriptionUTXO : Available Smart Contract's Inscription UTXO

### Second Step

POST URL http://localhost:9000/api/swap/push-inscribe-rune-psbt-arch

#### Params

signedPSBT : Signed PSBT via User's Wallet
inscriptionUtxo : Available Smart Contract's Inscription UTXO from First API Output

#### Result

txid : Txid Boradcasted on Mempool

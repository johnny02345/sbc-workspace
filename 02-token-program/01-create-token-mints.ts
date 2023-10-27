import "dotenv/config"
import base58 from "bs58"
import *as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))

const publickey = new Web3.PublicKey("AupgYP4vts8XsLahMhDbuCjsAXxME4LegRkhHF4tc4KV")
const decoded = base58.decode('2d6AokFbCtd1jZDJHmSXVamrqdsJXaAonqZLF9Tc8HHZcomaQTx9fCApB2waExcZECcswVkn3QSWQXwyaxGtqnhT')
const keyPair = Web3.Keypair.fromSecretKey(decoded)

async function main(){
    const tokenMint = await token.createMint(
        connection,
        keyPair,
        publickey, // mint auth
        publickey, // freeze atuh
        9 //decimals
    )
    console.log(tokenMint.toBase58());
}

main();
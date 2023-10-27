import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"
import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))
const publickey = new Web3.PublicKey("AupgYP4vts8XsLahMhDbuCjsAXxME4LegRkhHF4tc4KV") // PUBKEY of person you want to create the token account

const decoded = base58.decode('2d6AokFbCtd1jZDJHmSXVamrqdsJXaAonqZLF9Tc8HHZcomaQTx9fCApB2waExcZECcswVkn3QSWQXwyaxGtqnhT')
const keyPair = Web3.Keypair.fromSecretKey(decoded)
const tokenMint = "H8bDZFnzJDbMguWJHECxFVVHRYaE2zz7qD9feERY8kEQ"

async function main(){
    const tokenAccount  = await token.createAccount(
        connection, // connection
        keyPair, // signer
        new Web3.PublicKey(tokenMint), // mint public key
        publickey, // owner of the token-account
    );
    console.log(tokenAccount.toBase58());
}

main();
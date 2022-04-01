const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

let addresses = [
  "0x905bfa477c9f6a0911cf271a87b3aee8b9ffa253",
  "0xb56e2858a0fc571b6fc31a2a3b7f86cf257173bd",
];

// Hash addresses to get the leaves
let leaves = addresses.map(addr => keccak256(addr));

// Create tree
let merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true });

// Get root
let rootHash = merkleTree.getRoot().toString('hex');

// Pretty-print tree
console.log(rootHash);
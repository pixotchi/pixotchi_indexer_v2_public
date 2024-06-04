export const PixotchiRouterAbi = [
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        type: "uint8",
        name: "version",
        indexed: false,
        internalType: "uint8",
      },
    ],
    outputs: [
    ],
    anonymous: false,
  },
  {
    type: "function",
    name: "initializeConfigLogic",
    inputs: [
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setConfig",
    inputs: [
      {
        type: "bool",
        name: "_mintIsActive",
        internalType: "bool",
      },
      {
        type: "uint256",
        name: "_burnPercentage",
        internalType: "uint256",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setPRECISION",
    inputs: [
      {
        type: "uint256",
        name: "_precision",
        internalType: "uint256",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setRenderer",
    inputs: [
      {
        type: "address",
        name: "_renderer",
        internalType: "address",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setRevShareWallet",
    inputs: [
      {
        type: "address",
        name: "_revShareWallet",
        internalType: "address",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setStrain",
    inputs: [
      {
        type: "uint256",
        name: "id",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "mintPrice",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "maxSupply",
        internalType: "uint256",
      },
      {
        type: "string",
        name: "name",
        internalType: "string",
      },
      {
        type: "string",
        name: "ipfsHash",
        internalType: "string",
      },
      {
        type: "bool",
        name: "isActive",
        internalType: "bool",
      },
      {
        type: "uint256",
        name: "strainInitialTOD",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "strainCounter",
        internalType: "uint256",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setToken",
    inputs: [
      {
        type: "address",
        name: "_token",
        internalType: "address",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Attack",
    inputs: [
      {
        type: "uint256",
        name: "attacker",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "winner",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "loser",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "scoresWon",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Killed",
    inputs: [
      {
        type: "uint256",
        name: "nftId",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "deadId",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "string",
        name: "loserName",
        indexed: false,
        internalType: "string",
      },
      {
        type: "uint256",
        name: "reward",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "address",
        name: "killer",
        indexed: false,
        internalType: "address",
      },
      {
        type: "string",
        name: "winnerName",
        indexed: false,
        internalType: "string",
      },
    ],
    outputs: [
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Pass",
    inputs: [
      {
        type: "uint256",
        name: "from",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "to",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RedeemRewards",
    inputs: [
      {
        type: "uint256",
        name: "id",
        indexed: true,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "reward",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [
    ],
    anonymous: false,
  },
  {
    type: "function",
    name: "attack",
    inputs: [
      {
        type: "uint256",
        name: "fromId",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "toId",
        internalType: "uint256",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getAllStrainInfo",
    inputs: [
    ],
    outputs: [
      {
        type: "tuple[]",
        name: "",
        components: [{"type":"uint256","name":"id","internalType":"uint256"},{"type":"uint256","name":"mintPrice","internalType":"uint256"},{"type":"uint256","name":"totalSupply","internalType":"uint256"},{"type":"uint256","name":"totalMinted","internalType":"uint256"},{"type":"uint256","name":"maxSupply","internalType":"uint256"},{"type":"string","name":"name","internalType":"string"},{"type":"bool","name":"isActive","internalType":"bool"},{"type":"uint256","name":"getStrainTotalLeft","internalType":"uint256"},{"type":"uint256","name":"strainInitialTOD","internalType":"uint256"}],
        internalType: "struct IGame.Strain[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPlantName",
    inputs: [
      {
        type: "uint256",
        name: "_id",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getStatus",
    inputs: [
      {
        type: "uint256",
        name: "plant",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint8",
        name: "",
        internalType: "enum IGame.Status",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isApprovedFn",
    inputs: [
      {
        type: "uint256",
        name: "id",
        internalType: "uint256",
      },
      {
        type: "address",
        name: "wallet",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isPlantAlive",
    inputs: [
      {
        type: "uint256",
        name: "_nftId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "kill",
    inputs: [
      {
        type: "uint256",
        name: "_deadId",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_tokenId",
        internalType: "uint256",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "level",
    inputs: [
      {
        type: "uint256",
        name: "tokenId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "onAttack",
    inputs: [
      {
        type: "uint256",
        name: "fromId",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "toId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "pct",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "odds",
        internalType: "uint256",
      },
      {
        type: "bool",
        name: "canAttack",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pass",
    inputs: [
      {
        type: "uint256",
        name: "from",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "to",
        internalType: "uint256",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "pendingEth",
    inputs: [
      {
        type: "uint256",
        name: "plantId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "redeem",
    inputs: [
      {
        type: "uint256",
        name: "id",
        internalType: "uint256",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setPlantName",
    inputs: [
      {
        type: "uint256",
        name: "_id",
        internalType: "uint256",
      },
      {
        type: "string",
        name: "_name",
        internalType: "string",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "statusToString",
    inputs: [
      {
        type: "uint8",
        name: "status",
        internalType: "enum IGame.Status",
      },
    ],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "event",
    name: "ItemConsumed",
    inputs: [
      {
        type: "uint256",
        name: "nftId",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "address",
        name: "giver",
        indexed: false,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "itemId",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ItemCreated",
    inputs: [
      {
        type: "uint256",
        name: "id",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "string",
        name: "name",
        indexed: false,
        internalType: "string",
      },
      {
        type: "uint256",
        name: "price",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "points",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [
    ],
    anonymous: false,
  },
  {
    type: "function",
    name: "buyAccessory",
    inputs: [
      {
        type: "uint256",
        name: "nftId",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "itemId",
        internalType: "uint256",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "createItem",
    inputs: [
      {
        type: "string",
        name: "name",
        internalType: "string",
      },
      {
        type: "uint256",
        name: "price",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "points",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "timeExtension",
        internalType: "uint256",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "createItems",
    inputs: [
      {
        type: "tuple[]",
        name: "items",
        components: [{"type":"uint256","name":"id","internalType":"uint256"},{"type":"string","name":"name","internalType":"string"},{"type":"uint256","name":"price","internalType":"uint256"},{"type":"uint256","name":"points","internalType":"uint256"},{"type":"uint256","name":"timeExtension","internalType":"uint256"}],
        internalType: "struct IGarden.FullItem[]",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "editGardenItems",
    inputs: [
      {
        type: "tuple[]",
        name: "updates",
        components: [{"type":"uint256","name":"id","internalType":"uint256"},{"type":"string","name":"name","internalType":"string"},{"type":"uint256","name":"price","internalType":"uint256"},{"type":"uint256","name":"points","internalType":"uint256"},{"type":"uint256","name":"timeExtension","internalType":"uint256"}],
        internalType: "struct IGarden.FullItem[]",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "editItem",
    inputs: [
      {
        type: "uint256",
        name: "_id",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_price",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_points",
        internalType: "uint256",
      },
      {
        type: "string",
        name: "_name",
        internalType: "string",
      },
      {
        type: "uint256",
        name: "_timeExtension",
        internalType: "uint256",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getAllGardenItem",
    inputs: [
    ],
    outputs: [
      {
        type: "tuple[]",
        name: "",
        components: [{"type":"uint256","name":"id","internalType":"uint256"},{"type":"string","name":"name","internalType":"string"},{"type":"uint256","name":"price","internalType":"uint256"},{"type":"uint256","name":"points","internalType":"uint256"},{"type":"uint256","name":"timeExtension","internalType":"uint256"}],
        internalType: "struct IGarden.FullItem[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getGardenItem",
    inputs: [
      {
        type: "uint256",
        name: "itemId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "tuple",
        name: "",
        components: [{"type":"uint256","name":"id","internalType":"uint256"},{"type":"string","name":"name","internalType":"string"},{"type":"uint256","name":"price","internalType":"uint256"},{"type":"uint256","name":"points","internalType":"uint256"},{"type":"uint256","name":"timeExtension","internalType":"uint256"}],
        internalType: "struct IGarden.FullItem",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "initializeGardenLogic",
    inputs: [
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "itemExists",
    inputs: [
      {
        type: "uint256",
        name: "itemId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "error",
    name: "ApprovalCallerNotOwnerNorApproved",
    inputs: [
    ],
    outputs: [
    ],
  },
  {
    type: "error",
    name: "ApprovalQueryForNonexistentToken",
    inputs: [
    ],
    outputs: [
    ],
  },
  {
    type: "error",
    name: "ApprovalToCurrentOwner",
    inputs: [
    ],
    outputs: [
    ],
  },
  {
    type: "error",
    name: "ApproveToCaller",
    inputs: [
    ],
    outputs: [
    ],
  },
  {
    type: "error",
    name: "BalanceQueryForZeroAddress",
    inputs: [
    ],
    outputs: [
    ],
  },
  {
    type: "error",
    name: "MintToZeroAddress",
    inputs: [
    ],
    outputs: [
    ],
  },
  {
    type: "error",
    name: "MintZeroQuantity",
    inputs: [
    ],
    outputs: [
    ],
  },
  {
    type: "error",
    name: "OwnerQueryForNonexistentToken",
    inputs: [
    ],
    outputs: [
    ],
  },
  {
    type: "error",
    name: "TransferCallerNotOwnerNorApproved",
    inputs: [
    ],
    outputs: [
    ],
  },
  {
    type: "error",
    name: "TransferFromIncorrectOwner",
    inputs: [
    ],
    outputs: [
    ],
  },
  {
    type: "error",
    name: "TransferToNonERC721ReceiverImplementer",
    inputs: [
    ],
    outputs: [
    ],
  },
  {
    type: "error",
    name: "TransferToZeroAddress",
    inputs: [
    ],
    outputs: [
    ],
  },
  {
    type: "error",
    name: "URIQueryForNonexistentToken",
    inputs: [
    ],
    outputs: [
    ],
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        type: "address",
        name: "owner",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "approved",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "tokenId",
        indexed: true,
        internalType: "uint256",
      },
    ],
    outputs: [
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ApprovalForAll",
    inputs: [
      {
        type: "address",
        name: "owner",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "operator",
        indexed: true,
        internalType: "address",
      },
      {
        type: "bool",
        name: "approved",
        indexed: false,
        internalType: "bool",
      },
    ],
    outputs: [
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Mint",
    inputs: [
      {
        type: "address",
        name: "to",
        indexed: false,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "strain",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "id",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        type: "address",
        name: "from",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "to",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "tokenId",
        indexed: true,
        internalType: "uint256",
      },
    ],
    outputs: [
    ],
    anonymous: false,
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      {
        type: "address",
        name: "to",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "tokenId",
        internalType: "uint256",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [
      {
        type: "address",
        name: "owner",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "burn",
    inputs: [
      {
        type: "uint256",
        name: "tokenId",
        internalType: "uint256",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getApproved",
    inputs: [
      {
        type: "uint256",
        name: "tokenId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPlantInfo",
    inputs: [
      {
        type: "uint256",
        name: "id",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "tuple",
        name: "",
        components: [{"type":"uint256","name":"id","internalType":"uint256"},{"type":"string","name":"name","internalType":"string"},{"type":"uint256","name":"timeUntilStarving","internalType":"uint256"},{"type":"uint256","name":"score","internalType":"uint256"},{"type":"uint256","name":"timePlantBorn","internalType":"uint256"},{"type":"uint256","name":"lastAttackUsed","internalType":"uint256"},{"type":"uint256","name":"lastAttacked","internalType":"uint256"},{"type":"uint256","name":"stars","internalType":"uint256"},{"type":"uint256","name":"strain","internalType":"uint256"},{"type":"uint8","name":"status","internalType":"enum IGame.Status"},{"type":"string","name":"statusStr","internalType":"string"},{"type":"uint256","name":"level","internalType":"uint256"},{"type":"address","name":"owner","internalType":"address"},{"type":"uint256","name":"rewards","internalType":"uint256"}],
        internalType: "struct IGame.PlantFull",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPlantScore",
    inputs: [
      {
        type: "uint256",
        name: "plantId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPlantTimeUntilStarving",
    inputs: [
      {
        type: "uint256",
        name: "plantId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPlantsByOwner",
    inputs: [
      {
        type: "address",
        name: "_owner",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "tuple[]",
        name: "",
        components: [{"type":"uint256","name":"id","internalType":"uint256"},{"type":"string","name":"name","internalType":"string"},{"type":"uint256","name":"timeUntilStarving","internalType":"uint256"},{"type":"uint256","name":"score","internalType":"uint256"},{"type":"uint256","name":"timePlantBorn","internalType":"uint256"},{"type":"uint256","name":"lastAttackUsed","internalType":"uint256"},{"type":"uint256","name":"lastAttacked","internalType":"uint256"},{"type":"uint256","name":"stars","internalType":"uint256"},{"type":"uint256","name":"strain","internalType":"uint256"},{"type":"uint8","name":"status","internalType":"enum IGame.Status"},{"type":"string","name":"statusStr","internalType":"string"},{"type":"uint256","name":"level","internalType":"uint256"},{"type":"address","name":"owner","internalType":"address"},{"type":"uint256","name":"rewards","internalType":"uint256"}],
        internalType: "struct IGame.PlantFull[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPlantsInfo",
    inputs: [
      {
        type: "uint256[]",
        name: "_nftIds",
        internalType: "uint256[]",
      },
    ],
    outputs: [
      {
        type: "tuple[]",
        name: "",
        components: [{"type":"uint256","name":"id","internalType":"uint256"},{"type":"string","name":"name","internalType":"string"},{"type":"uint256","name":"timeUntilStarving","internalType":"uint256"},{"type":"uint256","name":"score","internalType":"uint256"},{"type":"uint256","name":"timePlantBorn","internalType":"uint256"},{"type":"uint256","name":"lastAttackUsed","internalType":"uint256"},{"type":"uint256","name":"lastAttacked","internalType":"uint256"},{"type":"uint256","name":"stars","internalType":"uint256"},{"type":"uint256","name":"strain","internalType":"uint256"},{"type":"uint8","name":"status","internalType":"enum IGame.Status"},{"type":"string","name":"statusStr","internalType":"string"},{"type":"uint256","name":"level","internalType":"uint256"},{"type":"address","name":"owner","internalType":"address"},{"type":"uint256","name":"rewards","internalType":"uint256"}],
        internalType: "struct IGame.PlantFull[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "initializeNFTLogic",
    inputs: [
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "isApprovedForAll",
    inputs: [
      {
        type: "address",
        name: "owner",
        internalType: "address",
      },
      {
        type: "address",
        name: "operator",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "mint",
    inputs: [
      {
        type: "uint256",
        name: "strain",
        internalType: "uint256",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "name",
    inputs: [
    ],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "ownerOf",
    inputs: [
      {
        type: "uint256",
        name: "tokenId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "removeTokenIdFromOwner",
    inputs: [
      {
        type: "uint32",
        name: "tokenId",
        internalType: "uint32",
      },
      {
        type: "address",
        name: "owner",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "safeTransferFrom",
    inputs: [
      {
        type: "address",
        name: "from",
        internalType: "address",
      },
      {
        type: "address",
        name: "to",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "tokenId",
        internalType: "uint256",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "safeTransferFrom",
    inputs: [
      {
        type: "address",
        name: "from",
        internalType: "address",
      },
      {
        type: "address",
        name: "to",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "tokenId",
        internalType: "uint256",
      },
      {
        type: "bytes",
        name: "_data",
        internalType: "bytes",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setApprovalForAll",
    inputs: [
      {
        type: "address",
        name: "operator",
        internalType: "address",
      },
      {
        type: "bool",
        name: "approved",
        internalType: "bool",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [
      {
        type: "bytes4",
        name: "interfaceId",
        internalType: "bytes4",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [
    ],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "tokenBurnAndRedistribute",
    inputs: [
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "amount",
        internalType: "uint256",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "tokenURI",
    inputs: [
      {
        type: "uint256",
        name: "id",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      {
        type: "address",
        name: "from",
        internalType: "address",
      },
      {
        type: "address",
        name: "to",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "tokenId",
        internalType: "uint256",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getImageUri",
    inputs: [
      {
        type: "uint256",
        name: "_level",
        internalType: "uint256",
      },
      {
        type: "string",
        name: "ipfsHash",
        internalType: "string",
      },
    ],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "prepareTokenURI",
    inputs: [
      {
        type: "tuple",
        name: "plant",
        components: [{"type":"uint256","name":"id","internalType":"uint256"},{"type":"string","name":"name","internalType":"string"},{"type":"uint256","name":"timeUntilStarving","internalType":"uint256"},{"type":"uint256","name":"score","internalType":"uint256"},{"type":"uint256","name":"timePlantBorn","internalType":"uint256"},{"type":"uint256","name":"lastAttackUsed","internalType":"uint256"},{"type":"uint256","name":"lastAttacked","internalType":"uint256"},{"type":"uint256","name":"stars","internalType":"uint256"},{"type":"uint256","name":"strain","internalType":"uint256"},{"type":"uint8","name":"status","internalType":"enum IGame.Status"},{"type":"string","name":"statusStr","internalType":"string"},{"type":"uint256","name":"level","internalType":"uint256"},{"type":"address","name":"owner","internalType":"address"},{"type":"uint256","name":"rewards","internalType":"uint256"}],
        internalType: "struct IGame.PlantFull",
      },
      {
        type: "string",
        name: "ipfsHash",
        internalType: "string",
      },
    ],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "event",
    name: "ShopItemCreated",
    inputs: [
      {
        type: "uint256",
        name: "id",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "string",
        name: "name",
        indexed: false,
        internalType: "string",
      },
      {
        type: "uint256",
        name: "price",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "ExpireTime",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [
    ],
    anonymous: false,
  },
  {
    type: "function",
    name: "getAllShopItem",
    inputs: [
    ],
    outputs: [
      {
        type: "tuple[]",
        name: "",
        components: [{"type":"uint256","name":"id","internalType":"uint256"},{"type":"string","name":"name","internalType":"string"},{"type":"uint256","name":"price","internalType":"uint256"},{"type":"uint256","name":"ExpireTime","internalType":"uint256"}],
        internalType: "struct IShop.ShopItem[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPurchasedShopItems",
    inputs: [
      {
        type: "uint256",
        name: "nftId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "tuple[]",
        name: "",
        components: [{"type":"uint256","name":"id","internalType":"uint256"},{"type":"string","name":"name","internalType":"string"},{"type":"uint256","name":"EffectUntil","internalType":"uint256"}],
        internalType: "struct IShop.ShopItemOwned[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "shopItemExists",
    inputs: [
      {
        type: "uint256",
        name: "itemId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "Played",
    inputs: [
      {
        type: "uint256",
        name: "id",
        indexed: true,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "points",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "timeExtension",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "string",
        name: "gameName",
        indexed: false,
        internalType: "string",
      },
    ],
    outputs: [
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PlayedV2",
    inputs: [
      {
        type: "uint256",
        name: "id",
        indexed: true,
        internalType: "uint256",
      },
      {
        type: "int256",
        name: "points",
        indexed: false,
        internalType: "int256",
      },
      {
        type: "int256",
        name: "timeExtension",
        indexed: false,
        internalType: "int256",
      },
      {
        type: "string",
        name: "gameName",
        indexed: false,
        internalType: "string",
      },
    ],
    outputs: [
    ],
    anonymous: false,
  },
  {
    type: "function",
    name: "boxGameGetCoolDownTimePerNFT",
    inputs: [
      {
        type: "uint256",
        name: "nftID",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "boxGameInitialize",
    inputs: [
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "boxGamePlay",
    inputs: [
      {
        type: "uint256",
        name: "nftID",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "seed",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "points",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "timeExtension",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "boxGameSetGlobalCoolDownTime",
    inputs: [
      {
        type: "uint256",
        name: "_coolDownTime",
        internalType: "uint256",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "boxGameSetPointRewards",
    inputs: [
      {
        type: "uint256[5]",
        name: "_pointRewards",
        internalType: "uint256[5]",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "boxGameSetTimeRewards",
    inputs: [
      {
        type: "uint256[5]",
        name: "_timeRewards",
        internalType: "uint256[5]",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "SpinGameInitialize",
    inputs: [
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "spinGameGetCoolDownTimePerNFT",
    inputs: [
      {
        type: "uint256",
        name: "nftID",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "spinGamePlay",
    inputs: [
      {
        type: "uint256",
        name: "nftID",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "seed",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "int256",
        name: "pointsAdjustment",
        internalType: "int256",
      },
      {
        type: "int256",
        name: "timeAdjustment",
        internalType: "int256",
      },
      {
        type: "bool",
        name: "isPercentage",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "spinGameSetCoolDownTime",
    inputs: [
      {
        type: "uint256",
        name: "_coolDownTime",
        internalType: "uint256",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "spinGameSetIsPercentage",
    inputs: [
      {
        type: "bool[]",
        name: "_isPercentage",
        internalType: "bool[]",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "spinGameSetPointRewards",
    inputs: [
      {
        type: "uint256[]",
        name: "_pointRewards",
        internalType: "uint256[]",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "spinGameSetTimeRewards",
    inputs: [
      {
        type: "int256[]",
        name: "_timeRewards",
        internalType: "int256[]",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "constructor",
    name: "",
    inputs: [
      {
        type: "tuple",
        name: "_simpleRouterV3Params",
        components: [{"type":"tuple[]","name":"extensions","components":[{"type":"tuple","name":"metadata","components":[{"type":"string","name":"name"},{"type":"string","name":"metadataURI"},{"type":"address","name":"implementation"}]},{"type":"tuple[]","name":"functions","components":[{"type":"bytes4","name":"functionSelector"},{"type":"string","name":"functionSignature"}]}]}],
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "error",
    name: "InvalidCodeAtRange",
    inputs: [
      {
        type: "uint256",
        name: "_size",
      },
      {
        type: "uint256",
        name: "_start",
      },
      {
        type: "uint256",
        name: "_end",
      },
    ],
    outputs: [
    ],
  },
  {
    type: "error",
    name: "WriteError",
    inputs: [
    ],
    outputs: [
    ],
  },
  {
    type: "event",
    name: "ExtensionAdded",
    inputs: [
      {
        type: "string",
        name: "name",
        indexed: true,
      },
      {
        type: "address",
        name: "implementation",
        indexed: true,
      },
      {
        type: "tuple",
        name: "extension",
        components: [{"type":"tuple","name":"metadata","components":[{"type":"string","name":"name"},{"type":"string","name":"metadataURI"},{"type":"address","name":"implementation"}]},{"type":"tuple[]","name":"functions","components":[{"type":"bytes4","name":"functionSelector"},{"type":"string","name":"functionSignature"}]}],
      },
    ],
    outputs: [
    ],
  },
  {
    type: "event",
    name: "ExtensionRemoved",
    inputs: [
      {
        type: "string",
        name: "name",
        indexed: true,
      },
      {
        type: "tuple",
        name: "extension",
        components: [{"type":"tuple","name":"metadata","components":[{"type":"string","name":"name"},{"type":"string","name":"metadataURI"},{"type":"address","name":"implementation"}]},{"type":"tuple[]","name":"functions","components":[{"type":"bytes4","name":"functionSelector"},{"type":"string","name":"functionSignature"}]}],
      },
    ],
    outputs: [
    ],
  },
  {
    type: "event",
    name: "ExtensionReplaced",
    inputs: [
      {
        type: "string",
        name: "name",
        indexed: true,
      },
      {
        type: "address",
        name: "implementation",
        indexed: true,
      },
      {
        type: "tuple",
        name: "extension",
        components: [{"type":"tuple","name":"metadata","components":[{"type":"string","name":"name"},{"type":"string","name":"metadataURI"},{"type":"address","name":"implementation"}]},{"type":"tuple[]","name":"functions","components":[{"type":"bytes4","name":"functionSelector"},{"type":"string","name":"functionSignature"}]}],
      },
    ],
    outputs: [
    ],
  },
  {
    type: "event",
    name: "FunctionDisabled",
    inputs: [
      {
        type: "string",
        name: "name",
        indexed: true,
      },
      {
        type: "bytes4",
        name: "functionSelector",
        indexed: true,
      },
      {
        type: "tuple",
        name: "extMetadata",
        components: [{"type":"string","name":"name"},{"type":"string","name":"metadataURI"},{"type":"address","name":"implementation"}],
      },
    ],
    outputs: [
    ],
  },
  {
    type: "event",
    name: "FunctionEnabled",
    inputs: [
      {
        type: "string",
        name: "name",
        indexed: true,
      },
      {
        type: "bytes4",
        name: "functionSelector",
        indexed: true,
      },
      {
        type: "tuple",
        name: "extFunction",
        components: [{"type":"bytes4","name":"functionSelector"},{"type":"string","name":"functionSignature"}],
      },
      {
        type: "tuple",
        name: "extMetadata",
        components: [{"type":"string","name":"name"},{"type":"string","name":"metadataURI"},{"type":"address","name":"implementation"}],
      },
    ],
    outputs: [
    ],
  },
  {
    type: "event",
    name: "RoleAdminChanged",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        indexed: true,
      },
      {
        type: "bytes32",
        name: "previousAdminRole",
        indexed: true,
      },
      {
        type: "bytes32",
        name: "newAdminRole",
        indexed: true,
      },
    ],
    outputs: [
    ],
  },
  {
    type: "event",
    name: "RoleGranted",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        indexed: true,
      },
      {
        type: "address",
        name: "account",
        indexed: true,
      },
      {
        type: "address",
        name: "sender",
        indexed: true,
      },
    ],
    outputs: [
    ],
  },
  {
    type: "event",
    name: "RoleRevoked",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        indexed: true,
      },
      {
        type: "address",
        name: "account",
        indexed: true,
      },
      {
        type: "address",
        name: "sender",
        indexed: true,
      },
    ],
    outputs: [
    ],
  },
  {
    type: "fallback",
    name: "",
    inputs: [
    ],
    outputs: [
    ],
  },
  {
    type: "function",
    name: "DEFAULT_ADMIN_ROLE",
    inputs: [
    ],
    outputs: [
      {
        type: "bytes32",
        name: "",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "_disableFunctionInExtension",
    inputs: [
      {
        type: "string",
        name: "_extensionName",
      },
      {
        type: "bytes4",
        name: "_functionSelector",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "addExtension",
    inputs: [
      {
        type: "tuple",
        name: "_extension",
        components: [{"type":"tuple","name":"metadata","components":[{"type":"string","name":"name"},{"type":"string","name":"metadataURI"},{"type":"address","name":"implementation"}]},{"type":"tuple[]","name":"functions","components":[{"type":"bytes4","name":"functionSelector"},{"type":"string","name":"functionSignature"}]}],
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "contractType",
    inputs: [
    ],
    outputs: [
      {
        type: "bytes32",
        name: "",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "contractVersion",
    inputs: [
    ],
    outputs: [
      {
        type: "uint8",
        name: "",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "defaultExtensions",
    inputs: [
    ],
    outputs: [
      {
        type: "address",
        name: "",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "disableFunctionInExtension",
    inputs: [
      {
        type: "string",
        name: "_extensionName",
      },
      {
        type: "bytes4",
        name: "_functionSelector",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "enableFunctionInExtension",
    inputs: [
      {
        type: "string",
        name: "_extensionName",
      },
      {
        type: "tuple",
        name: "_function",
        components: [{"type":"bytes4","name":"functionSelector"},{"type":"string","name":"functionSignature"}],
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getAllExtensions",
    inputs: [
    ],
    outputs: [
      {
        type: "tuple[]",
        name: "allExtensions",
        components: [{"type":"tuple","name":"metadata","components":[{"type":"string","name":"name"},{"type":"string","name":"metadataURI"},{"type":"address","name":"implementation"}]},{"type":"tuple[]","name":"functions","components":[{"type":"bytes4","name":"functionSelector"},{"type":"string","name":"functionSignature"}]}],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getExtension",
    inputs: [
      {
        type: "string",
        name: "extensionName",
      },
    ],
    outputs: [
      {
        type: "tuple",
        name: "",
        components: [{"type":"tuple","name":"metadata","components":[{"type":"string","name":"name"},{"type":"string","name":"metadataURI"},{"type":"address","name":"implementation"}]},{"type":"tuple[]","name":"functions","components":[{"type":"bytes4","name":"functionSelector"},{"type":"string","name":"functionSignature"}]}],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getImplementationForFunction",
    inputs: [
      {
        type: "bytes4",
        name: "_functionSelector",
      },
    ],
    outputs: [
      {
        type: "address",
        name: "",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getMetadataForFunction",
    inputs: [
      {
        type: "bytes4",
        name: "functionSelector",
      },
    ],
    outputs: [
      {
        type: "tuple",
        name: "",
        components: [{"type":"string","name":"name"},{"type":"string","name":"metadataURI"},{"type":"address","name":"implementation"}],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRoleAdmin",
    inputs: [
      {
        type: "bytes32",
        name: "role",
      },
    ],
    outputs: [
      {
        type: "bytes32",
        name: "",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRoleMember",
    inputs: [
      {
        type: "bytes32",
        name: "role",
      },
      {
        type: "uint256",
        name: "index",
      },
    ],
    outputs: [
      {
        type: "address",
        name: "member",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRoleMemberCount",
    inputs: [
      {
        type: "bytes32",
        name: "role",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "count",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "grantRole",
    inputs: [
      {
        type: "bytes32",
        name: "role",
      },
      {
        type: "address",
        name: "account",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "hasRole",
    inputs: [
      {
        type: "bytes32",
        name: "role",
      },
      {
        type: "address",
        name: "account",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "hasRoleWithSwitch",
    inputs: [
      {
        type: "bytes32",
        name: "role",
      },
      {
        type: "address",
        name: "account",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "initializeRouter",
    inputs: [
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "isTrustedForwarder",
    inputs: [
      {
        type: "address",
        name: "forwarder",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "removeExtension",
    inputs: [
      {
        type: "string",
        name: "_extensionName",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "renounceRole",
    inputs: [
      {
        type: "bytes32",
        name: "role",
      },
      {
        type: "address",
        name: "account",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "replaceExtension",
    inputs: [
      {
        type: "tuple",
        name: "_extension",
        components: [{"type":"tuple","name":"metadata","components":[{"type":"string","name":"name"},{"type":"string","name":"metadataURI"},{"type":"address","name":"implementation"}]},{"type":"tuple[]","name":"functions","components":[{"type":"bytes4","name":"functionSelector"},{"type":"string","name":"functionSignature"}]}],
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "revokeRole",
    inputs: [
      {
        type: "bytes32",
        name: "role",
      },
      {
        type: "address",
        name: "account",
      },
    ],
    outputs: [
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "receive",
    name: "",
    inputs: [
    ],
    outputs: [
    ],
    stateMutability: "payable",
  },
] as const;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeplerMinter__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class KeplerMinter__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_nft, _feeTo, overrides) {
        return super.deploy(_nft, _feeTo, overrides || {});
    }
    getDeployTransaction(_nft, _feeTo, overrides) {
        return super.getDeployTransaction(_nft, _feeTo, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.KeplerMinter__factory = KeplerMinter__factory;
const _abi = [
    {
        constant: true,
        inputs: [],
        name: "feeTo",
        outputs: [
            {
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "_limit",
                type: "uint256",
            },
        ],
        name: "setLimit",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "nft",
        outputs: [
            {
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "mintPrice",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [
            {
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "isOwner",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "maxCount",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "count",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "_maxCount",
                type: "uint256",
            },
        ],
        name: "setMaxCount",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "limit",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "_feeTo",
                type: "address",
            },
        ],
        name: "setFeeTo",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "_price",
                type: "uint256",
            },
        ],
        name: "setMintPrice",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                name: "_nft",
                type: "address",
            },
            {
                name: "_feeTo",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
];
const _bytecode = "0x608060405268022b1c8c1227a00000600255601460045534801561002257600080fd5b506040516040806110d58339810180604052604081101561004257600080fd5b810190808051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a381600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610f29806101ac6000396000f3fe6080604052600436106100e85760003560e01c80638f32d59b1161008a578063a4d66daf11610059578063a4d66daf1461035d578063f2fde38b14610388578063f46901ed146103d9578063f4a0a5281461042a576100e8565b80638f32d59b1461029a5780639ef2d87a146102c9578063a0712d68146102f4578063a35e617f14610322576100e8565b806347ccca02116100c657806347ccca02146101aa5780636817c76c14610201578063715018a61461022c5780638da5cb5b14610243576100e8565b8063017e7e58146100ed57806318160ddd1461014457806327ea6f2b1461016f575b600080fd5b3480156100f957600080fd5b50610102610465565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561015057600080fd5b5061015961048b565b6040518082815260200191505060405180910390f35b34801561017b57600080fd5b506101a86004803603602081101561019257600080fd5b8101908080359060200190929190505050610491565b005b3480156101b657600080fd5b506101bf610515565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561020d57600080fd5b5061021661053b565b6040518082815260200191505060405180910390f35b34801561023857600080fd5b50610241610541565b005b34801561024f57600080fd5b5061025861067a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102a657600080fd5b506102af6106a3565b604051808215151515815260200191505060405180910390f35b3480156102d557600080fd5b506102de6106fa565b6040518082815260200191505060405180910390f35b6103206004803603602081101561030a57600080fd5b8101908080359060200190929190505050610700565b005b34801561032e57600080fd5b5061035b6004803603602081101561034557600080fd5b8101908080359060200190929190505050610908565b005b34801561036957600080fd5b5061037261098c565b6040518082815260200191505060405180910390f35b34801561039457600080fd5b506103d7600480360360208110156103ab57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610992565b005b3480156103e557600080fd5b50610428600480360360208110156103fc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a18565b005b34801561043657600080fd5b506104636004803603602081101561044d57600080fd5b8101908080359060200190929190505050610ad6565b005b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60065481565b6104996106a3565b61050b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8060058190555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b6105496106a3565b6105bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b60045481565b600554811115801561071457506004548111155b61071d57600080fd5b61073281600254610b5a90919063ffffffff16565b341461073d57600080fd5b60008090505b8181101561088057600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd61079161067a565b336006546040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050600060405180830381600087803b15801561083157600080fd5b505af1158015610845573d6000803e3d6000fd5b5050505061085f6001600654610be090919063ffffffff16565b600681905550610879600182610be090919063ffffffff16565b9050610743565b50600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f193505050501580156108e9573d6000803e3d6000fd5b506108ff81600554610c6890919063ffffffff16565b60058190555050565b6109106106a3565b610982576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8060048190555050565b60055481565b61099a6106a3565b610a0c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b610a1581610cb2565b50565b610a206106a3565b610a92576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610ade6106a3565b610b50576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8060028190555050565b600080831415610b6d5760009050610bda565b6000828402905082848281610b7e57fe5b0414610bd5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610edd6021913960400191505060405180910390fd5b809150505b92915050565b600080828401905083811015610c5e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6000610caa83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610df6565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610d38576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180610eb76026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000838311158290610ea3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610e68578082015181840152602081019050610e4d565b50505050905090810190601f168015610e955780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838503905080915050939250505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a165627a7a723058204d9e925999a697995fefd3ff66f80d16e4e5a2879829915500a3932845a63a8a0029";
//# sourceMappingURL=KeplerMinter__factory.js.map
export const PaymasterABI = [
    {
        inputs: [
            { internalType: 'address', name: '_owner', type: 'address' },
            {
                internalType: 'contract IEntryPoint',
                name: '_entryPoint',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_verifyingSigner',
                type: 'address',
            },
        ],
        stateMutability: 'payable',
        type: 'constructor',
    },
    {
        inputs: [{ internalType: 'address', name: 'caller', type: 'address' }],
        name: 'CallerIsNotAnEntryPoint',
        type: 'error',
    },
    { inputs: [], name: 'CanNotWithdrawToZeroAddress', type: 'error' },
    { inputs: [], name: 'DepositCanNotBeZero', type: 'error' },
    { inputs: [], name: 'EntryPointCannotBeZero', type: 'error' },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'amountRequired',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'currentBalance',
                type: 'uint256',
            },
        ],
        name: 'InsufficientBalance',
        type: 'error',
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'sigLength', type: 'uint256' },
        ],
        name: 'InvalidPaymasterSignatureLength',
        type: 'error',
    },
    { inputs: [], name: 'PaymasterIdCannotBeZero', type: 'error' },
    { inputs: [], name: 'VerifyingSignerCannotBeZero', type: 'error' },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: '_oldValue',
                type: 'uint256',
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: '_newValue',
                type: 'uint256',
            },
        ],
        name: 'EPGasOverheadChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: '_paymasterId',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: '_charge',
                type: 'uint256',
            },
        ],
        name: 'GasBalanceDeducted',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: '_paymasterId',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: '_value',
                type: 'uint256',
            },
        ],
        name: 'GasDeposited',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: '_paymasterId',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: '_to',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: '_value',
                type: 'uint256',
            },
        ],
        name: 'GasWithdrawn',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previousOwner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: '_oldSigner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: '_newSigner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: '_actor',
                type: 'address',
            },
        ],
        name: 'VerifyingSignerChanged',
        type: 'event',
    },
    {
        inputs: [
            { internalType: 'uint32', name: 'unstakeDelaySec', type: 'uint32' },
        ],
        name: 'addStake',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'deposit',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'paymasterId', type: 'address' },
        ],
        name: 'depositFor',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'entryPoint',
        outputs: [
            { internalType: 'contract IEntryPoint', name: '', type: 'address' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'paymasterId', type: 'address' },
        ],
        name: 'getBalance',
        outputs: [
            { internalType: 'uint256', name: 'balance', type: 'uint256' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getDeposit',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'address',
                        name: 'sender',
                        type: 'address',
                    },
                    { internalType: 'uint256', name: 'nonce', type: 'uint256' },
                    { internalType: 'bytes', name: 'initCode', type: 'bytes' },
                    { internalType: 'bytes', name: 'callData', type: 'bytes' },
                    {
                        internalType: 'uint256',
                        name: 'callGasLimit',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'verificationGasLimit',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'preVerificationGas',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'maxFeePerGas',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'maxPriorityFeePerGas',
                        type: 'uint256',
                    },
                    {
                        internalType: 'bytes',
                        name: 'paymasterAndData',
                        type: 'bytes',
                    },
                    { internalType: 'bytes', name: 'signature', type: 'bytes' },
                ],
                internalType: 'struct UserOperation',
                name: 'userOp',
                type: 'tuple',
            },
            { internalType: 'address', name: 'paymasterId', type: 'address' },
            { internalType: 'uint48', name: 'validUntil', type: 'uint48' },
            { internalType: 'uint48', name: 'validAfter', type: 'uint48' },
        ],
        name: 'getHash',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'paymasterIdBalances',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'enum IPaymaster.PostOpMode',
                name: 'mode',
                type: 'uint8',
            },
            { internalType: 'bytes', name: 'context', type: 'bytes' },
            { internalType: 'uint256', name: 'actualGasCost', type: 'uint256' },
        ],
        name: 'postOp',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_newVerifyingSigner',
                type: 'address',
            },
        ],
        name: 'setSigner',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'uint256', name: 'value', type: 'uint256' }],
        name: 'setUnaccountedEPGasOverhead',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'newOwner', type: 'address' },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'unlockStake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'address',
                        name: 'sender',
                        type: 'address',
                    },
                    { internalType: 'uint256', name: 'nonce', type: 'uint256' },
                    { internalType: 'bytes', name: 'initCode', type: 'bytes' },
                    { internalType: 'bytes', name: 'callData', type: 'bytes' },
                    {
                        internalType: 'uint256',
                        name: 'callGasLimit',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'verificationGasLimit',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'preVerificationGas',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'maxFeePerGas',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'maxPriorityFeePerGas',
                        type: 'uint256',
                    },
                    {
                        internalType: 'bytes',
                        name: 'paymasterAndData',
                        type: 'bytes',
                    },
                    { internalType: 'bytes', name: 'signature', type: 'bytes' },
                ],
                internalType: 'struct UserOperation',
                name: 'userOp',
                type: 'tuple',
            },
            { internalType: 'bytes32', name: 'userOpHash', type: 'bytes32' },
            { internalType: 'uint256', name: 'maxCost', type: 'uint256' },
        ],
        name: 'validatePaymasterUserOp',
        outputs: [
            { internalType: 'bytes', name: 'context', type: 'bytes' },
            {
                internalType: 'uint256',
                name: 'validationData',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'verifyingSigner',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address payable',
                name: 'withdrawAddress',
                type: 'address',
            },
        ],
        name: 'withdrawStake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address payable',
                name: 'withdrawAddress',
                type: 'address',
            },
            { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'withdrawTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
]

module.exports = {
    "abi": [
        {
            "members": [
                {
                    "name": "low",
                    "offset": 0,
                    "type": "felt"
                },
                {
                    "name": "high",
                    "offset": 1,
                    "type": "felt"
                }
            ],
            "name": "Uint256",
            "size": 2,
            "type": "struct"
        },
        {
            "inputs": [],
            "name": "get_l1_gateway",
            "outputs": [
                {
                    "name": "res",
                    "type": "felt"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "_l1_token_address",
                    "type": "felt"
                },
                {
                    "name": "_token_id",
                    "type": "felt"
                }
            ],
            "name": "get_collateral_data",
            "outputs": [
                {
                    "name": "res",
                    "type": "felt"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "_l1_gateway",
                    "type": "felt"
                },
                {
                    "name": "token_class_hash",
                    "type": "felt"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "from_address",
                    "type": "felt"
                },
                {
                    "name": "_owner",
                    "type": "felt"
                },
                {
                    "name": "_l1_token_address",
                    "type": "felt"
                },
                {
                    "name": "_token_id",
                    "type": "felt"
                },
                {
                    "name": "_floor_price",
                    "type": "Uint256"
                },
                {
                    "name": "_require_token_address",
                    "type": "felt"
                }
            ],
            "name": "bridge_from_mainnet",
            "outputs": [],
            "type": "l1_handler"
        },
        {
            "inputs": [
                {
                    "name": "from_address",
                    "type": "felt"
                },
                {
                    "name": "_owner",
                    "type": "felt"
                },
                {
                    "name": "_l1_token_address",
                    "type": "felt"
                },
                {
                    "name": "_token_id",
                    "type": "felt"
                },
                {
                    "name": "_floor_price",
                    "type": "Uint256"
                },
                {
                    "name": "_require_token_address",
                    "type": "felt"
                }
            ],
            "name": "bridge_debug",
            "outputs": [],
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "l1_token_address",
                    "type": "felt"
                },
                {
                    "name": "l2_token_address",
                    "type": "felt"
                },
                {
                    "name": "owner",
                    "type": "felt"
                }
            ],
            "name": "get_bridge_back_event_count",
            "outputs": [
                {
                    "name": "count",
                    "type": "felt"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "l1_token_address",
                    "type": "felt"
                },
                {
                    "name": "l2_token_address",
                    "type": "felt"
                },
                {
                    "name": "owner",
                    "type": "felt"
                },
                {
                    "name": "index",
                    "type": "felt"
                }
            ],
            "name": "get_bridge_back_event",
            "outputs": [
                {
                    "name": "token_id",
                    "type": "felt"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "amount",
                    "type": "Uint256"
                }
            ],
            "name": "stake",
            "outputs": [],
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "amount",
                    "type": "felt"
                }
            ],
            "name": "increase_balance",
            "outputs": [],
            "type": "function"
        },
        {
            "inputs": [],
            "name": "get_balance",
            "outputs": [
                {
                    "name": "res",
                    "type": "felt"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "constructor",
            "outputs": [],
            "type": "constructor"
        }
    ],
    "entry_points_by_type": {
        "CONSTRUCTOR": [
            {
                "offset": "0x46b",
                "selector": "0x28ffe4ff0f226a9107253e17a904099aa4f63a02a5621de0576e5aa71bc5194"
            }
        ],
        "EXTERNAL": [
            {
                "offset": "0x26a",
                "selector": "0x79dc0da7c54b95f10aa182ad0a46400db63156920adb65eca2654c0945a463"
            },
            {
                "offset": "0x197",
                "selector": "0x157769379c46eecc26d4249c4de5d3e026bf265212322917cb8fe1d9ca6fa3d"
            },
            {
                "offset": "0x3bc",
                "selector": "0x1c93fa67eb83abb5367ebcebad19b95829942e7d97ff9d56abd3a01bbf03c59"
            },
            {
                "offset": "0x31f",
                "selector": "0x2900d7549f03c4c359078ce9e53249e735ebd8fe849bef458eb9a50b9d1d85e"
            },
            {
                "offset": "0x223",
                "selector": "0x2d44a1000bf04f8f4412abf0bfc8628be0cf9f80a95a5504fa2c68cba22e95d"
            },
            {
                "offset": "0x433",
                "selector": "0x362398bec32bc0ebb411203221a35a0301193a96f317ebe5e40be9f60d15320"
            },
            {
                "offset": "0x454",
                "selector": "0x39e11d48192e4333233c7eb19d10ad67c362bb28580c604d67884c85da39695"
            },
            {
                "offset": "0x410",
                "selector": "0x3a04795accb4b73d12f13b05a1e0e240cefeb9a89d008676730867a819d2f79"
            },
            {
                "offset": "0x395",
                "selector": "0x3d60fee79f6070aec57f897d1a7b08f453f3df424c3eb594efde31a23916f1e"
            }
        ],
        "L1_HANDLER": [
            {
                "offset": "0x2c2",
                "selector": "0x3d7e9aabaee46b2e84062eb3bca33a0c08e1142b329c095d47ec3d6af1adbc6"
            }
        ]
    },
    "program": {
        "attributes": [
            {
                "accessible_scopes": [
                    "__main__",
                    "__main__",
                    "__main__.increase_balance"
                ],
                "end_pc": 1063,
                "flow_tracking_data": {
                    "ap_tracking": {
                        "group": 70,
                        "offset": 0
                    },
                    "reference_ids": {
                        "__main__.increase_balance.amount": 765,
                        "__main__.increase_balance.pedersen_ptr": 767,
                        "__main__.increase_balance.range_check_ptr": 768,
                        "__main__.increase_balance.syscall_ptr": 766
                    }
                },
                "name": "error_message",
                "start_pc": 1059,
                "value": "Amount must be positive. Got: {amount}."
            }
        ],
        "builtins": [
            "pedersen",
            "range_check"
        ],
        "compiler_version": "0.10.1",
        "data": [
            "0x40780017fff7fff",
            "0x1",
            "0x208b7fff7fff7ffe",
            "0x400380007ffb7ffc",
            "0x400380017ffb7ffd",
            "0x482680017ffb8000",
            "0x3",
            "0x480280027ffb8000",
            "0x208b7fff7fff7ffe",
            "0x20780017fff7ffd",
            "0x3",
            "0x208b7fff7fff7ffe",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x480080007fff8000",
            "0x400080007ffd7fff",
            "0x482480017ffd8001",
            "0x1",
            "0x482480017ffd8001",
            "0x1",
            "0xa0680017fff7ffe",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffffb",
            "0x402a7ffc7ffd7fff",
            "0x208b7fff7fff7ffe",
            "0x20780017fff7ffd",
            "0x4",
            "0x400780017fff7ffd",
            "0x1",
            "0x208b7fff7fff7ffe",
            "0x400380007ffc7ffd",
            "0x482680017ffc8000",
            "0x1",
            "0x208b7fff7fff7ffe",
            "0x480680017fff8000",
            "0x3ffffffffffffffffffffffffffffff",
            "0x480280017ffc8000",
            "0x48307fff80007ffe",
            "0x400280027ffc7fff",
            "0x480280017ffc8000",
            "0x484480017fff8000",
            "0x100000000000000000000000000000000",
            "0x480280007ffc8000",
            "0x40317fff7ffe7ffd",
            "0x482680017ffc8000",
            "0x3",
            "0x208b7fff7fff7ffe",
            "0x40780017fff7fff",
            "0x1",
            "0x20680017fff7fff",
            "0x10",
            "0x480a7ffc7fff8000",
            "0x482680017ffd8000",
            "0x11000000000000000000000000000000000000000000000101",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffed",
            "0x480680017fff8000",
            "0x800000000000011000000000000000000000000000000000000000000000000",
            "0x48127ffe7fff8000",
            "0x48287ffd80007ffe",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffe7",
            "0x482680017ffd8000",
            "0x11000000000000000000000000000000000000000000000101",
            "0x208b7fff7fff7ffe",
            "0x40780017fff7fff",
            "0x1",
            "0x20680017fff7fff",
            "0xc",
            "0x40780017fff7fff",
            "0xa",
            "0x480680017fff8000",
            "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeff",
            "0x480a7ffc7fff8000",
            "0x48287ffd80007ffe",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffd8",
            "0x10780017fff7fff",
            "0x8",
            "0x40780017fff7fff",
            "0xb",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffd0",
            "0x480a7ffd7fff8000",
            "0x208b7fff7fff7ffe",
            "0x480680017fff8000",
            "0x43616c6c436f6e7472616374",
            "0x400280007ff97fff",
            "0x400380017ff97ffa",
            "0x400380027ff97ffb",
            "0x400380037ff97ffc",
            "0x400380047ff97ffd",
            "0x482680017ff98000",
            "0x7",
            "0x480280057ff98000",
            "0x480280067ff98000",
            "0x208b7fff7fff7ffe",
            "0x480680017fff8000",
            "0x4465706c6f79",
            "0x400280007ff87fff",
            "0x400380017ff87ff9",
            "0x400380027ff87ffa",
            "0x400380037ff87ffb",
            "0x400380047ff87ffc",
            "0x400380057ff87ffd",
            "0x482680017ff88000",
            "0x9",
            "0x480280067ff88000",
            "0x208b7fff7fff7ffe",
            "0x480680017fff8000",
            "0x47657443616c6c657241646472657373",
            "0x400280007ffd7fff",
            "0x482680017ffd8000",
            "0x2",
            "0x480280017ffd8000",
            "0x208b7fff7fff7ffe",
            "0x480680017fff8000",
            "0x476574436f6e747261637441646472657373",
            "0x400280007ffd7fff",
            "0x482680017ffd8000",
            "0x2",
            "0x480280017ffd8000",
            "0x208b7fff7fff7ffe",
            "0x480680017fff8000",
            "0x476574426c6f636b54696d657374616d70",
            "0x400280007ffd7fff",
            "0x482680017ffd8000",
            "0x2",
            "0x480280017ffd8000",
            "0x208b7fff7fff7ffe",
            "0x480680017fff8000",
            "0x53746f7261676552656164",
            "0x400280007ffc7fff",
            "0x400380017ffc7ffd",
            "0x482680017ffc8000",
            "0x3",
            "0x480280027ffc8000",
            "0x208b7fff7fff7ffe",
            "0x480680017fff8000",
            "0x53746f726167655772697465",
            "0x400280007ffb7fff",
            "0x400380017ffb7ffc",
            "0x400380027ffb7ffd",
            "0x482680017ffb8000",
            "0x3",
            "0x208b7fff7fff7ffe",
            "0x480680017fff8000",
            "0x53656e644d657373616765546f4c31",
            "0x400280007ffa7fff",
            "0x400380017ffa7ffb",
            "0x400380027ffa7ffc",
            "0x400380037ffa7ffd",
            "0x482680017ffa8000",
            "0x4",
            "0x208b7fff7fff7ffe",
            "0x40780017fff7fff",
            "0x1",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff63",
            "0x40137fff7fff8000",
            "0x4003800080007ffa",
            "0x4003800180007ffb",
            "0x4003800280007ffc",
            "0x4003800380007ffd",
            "0x4826800180008000",
            "0x4",
            "0x480a7ff77fff8000",
            "0x480a7ff97fff8000",
            "0x480680017fff8000",
            "0x41b033f4a31df8067c24d1e9b550a2ce75fd4a29e1147af9752174f0e6cb20",
            "0x4828800080007ffc",
            "0x480a80007fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffaa",
            "0x482480017fff8000",
            "0x1",
            "0x40307ffe7ffd7fff",
            "0x48127ffc7fff8000",
            "0x480a7ff87fff8000",
            "0x480080007ffc8000",
            "0x208b7fff7fff7ffe",
            "0x40780017fff7fff",
            "0x1",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff49",
            "0x40137fff7fff8000",
            "0x4003800080007ffb",
            "0x4003800180007ffc",
            "0x4003800280007ffd",
            "0x4826800180008000",
            "0x3",
            "0x480a7ff87fff8000",
            "0x480a7ffa7fff8000",
            "0x480680017fff8000",
            "0x219209e083275171774dab1df80982e9df2096516f06319c5c6d71ae0a8480c",
            "0x4828800080007ffc",
            "0x480a80007fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff91",
            "0x482480017fff8000",
            "0x1",
            "0x40307ffe7ffd7fff",
            "0x48127ffc7fff8000",
            "0x480a7ff97fff8000",
            "0x480080007ffc8000",
            "0x208b7fff7fff7ffe",
            "0x40780017fff7fff",
            "0x1",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff30",
            "0x40137fff7fff8000",
            "0x4003800080007ffb",
            "0x4003800180007ffc",
            "0x4003800280007ffd",
            "0x4826800180008000",
            "0x3",
            "0x480a7ff87fff8000",
            "0x480a7ffa7fff8000",
            "0x480680017fff8000",
            "0x2f0b3c5710379609eb5495f1ecd348cb28167711b73609fe565a72734550354",
            "0x4828800080007ffc",
            "0x480a80007fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff78",
            "0x48127ffd7fff8000",
            "0x480a7ff97fff8000",
            "0x208b7fff7fff7ffe",
            "0x40780017fff7fff",
            "0x3",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff1b",
            "0x40137fff7fff8000",
            "0x4003800080007ff6",
            "0x4003800180007ff7",
            "0x4003800280007ff8",
            "0x4003800380007ff9",
            "0x4003800480007ffa",
            "0x400380007ff47ffa",
            "0x402780017ff48001",
            "0x1",
            "0x4826800180008000",
            "0x5",
            "0x40297ffa7fff8002",
            "0x4826800180008000",
            "0x5",
            "0x480a7ffb7fff8000",
            "0x480a7ffa7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff12",
            "0x4003800080027ffc",
            "0x4003800180027ffd",
            "0x4826800180028000",
            "0x2",
            "0x480a7ff37fff8000",
            "0x480a7ff57fff8000",
            "0x480680017fff8000",
            "0x3276861cf5e05d6daf8f352cabb47df623eb10c383ab742fcc7abea94d5c5cc",
            "0x4828800080007ffc",
            "0x480a80007fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff53",
            "0x480080007fff8000",
            "0x4002800080017fff",
            "0x482480017ffe8000",
            "0x1",
            "0x480080007ffd8000",
            "0x484480017fff8000",
            "0x2",
            "0x48307fff7ffd8000",
            "0x40307ffa7ff97fff",
            "0x48127ff87fff8000",
            "0x4826800180018000",
            "0x1",
            "0x480080007ff88000",
            "0x482480017ff78000",
            "0x1",
            "0x208b7fff7fff7ffe",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x480680017fff8000",
            "0x3c0ba99f1a18bcdc81fcbcb6b4f15a9a6725f937075aed6fac107ffcb147068",
            "0x208b7fff7fff7ffe",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffffa",
            "0x480a7ffb7fff8000",
            "0x48127ffe7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff63",
            "0x48127ffe7fff8000",
            "0x48127ff57fff8000",
            "0x48127ff57fff8000",
            "0x48127ffc7fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffed",
            "0x480a7ffa7fff8000",
            "0x48127ffe7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff5d",
            "0x48127ff67fff8000",
            "0x48127ff67fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x480680017fff8000",
            "0x255eaac635aaac4702163a83992828cab5b7bdb07d31b468c1da7ebdedd23ef",
            "0x208b7fff7fff7ffe",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffffa",
            "0x480a7ffb7fff8000",
            "0x48127ffe7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff45",
            "0x48127ffe7fff8000",
            "0x48127ff57fff8000",
            "0x48127ff57fff8000",
            "0x48127ffc7fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffed",
            "0x480a7ffa7fff8000",
            "0x48127ffe7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff3f",
            "0x48127ff67fff8000",
            "0x48127ff67fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x480680017fff8000",
            "0x5e334153147e75f3f416139b5109d1179cb56fef6a4ecb4c4cbc92a7c37b70",
            "0x208b7fff7fff7ffe",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffffa",
            "0x480a7ffb7fff8000",
            "0x48127ffe7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff27",
            "0x48127ffe7fff8000",
            "0x48127ff57fff8000",
            "0x48127ff57fff8000",
            "0x48127ffc7fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffed",
            "0x480a7ffa7fff8000",
            "0x48127ffe7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff21",
            "0x48127ff67fff8000",
            "0x48127ff67fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x480680017fff8000",
            "0x1319238daf40223d6021718c846ac2a0c0ef028ecc765972e999a8ac79662a8",
            "0x208b7fff7fff7ffe",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffffa",
            "0x480a7ffb7fff8000",
            "0x48127ffe7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff09",
            "0x48127ffe7fff8000",
            "0x482480017ff78000",
            "0x1",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff04",
            "0x48127ffe7fff8000",
            "0x48127fee7fff8000",
            "0x48127fee7fff8000",
            "0x48127ff57fff8000",
            "0x48127ffb7fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffaf",
            "0x208b7fff7fff7ffe",
            "0x40780017fff7fff",
            "0x1",
            "0x4003800080007ffc",
            "0x4826800180008000",
            "0x1",
            "0x480a7ffd7fff8000",
            "0x4828800080007ffe",
            "0x480a80007fff8000",
            "0x208b7fff7fff7ffe",
            "0x402b7ffd7ffc7ffd",
            "0x480280007ffb8000",
            "0x480280017ffb8000",
            "0x480280027ffb8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffee",
            "0x48127ffe7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffff1",
            "0x48127ff47fff8000",
            "0x48127ff47fff8000",
            "0x48127ffb7fff8000",
            "0x48127ffb7fff8000",
            "0x48127ffb7fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffa7fff8000",
            "0x480680017fff8000",
            "0x1499167fea052e819a4317bf47997d7860ce546dc9f3adf8e4a2b5c85627844",
            "0x480a7ffc7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe5a",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe57",
            "0x480a7ffb7fff8000",
            "0x48127ffe7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe7e",
            "0x48127fe17fff8000",
            "0x48127ffd7fff8000",
            "0x48127ffd7fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffa7fff8000",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffec",
            "0x480a7ff97fff8000",
            "0x48127ffe7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffec5",
            "0x48127ffe7fff8000",
            "0x48127ff57fff8000",
            "0x48127ff57fff8000",
            "0x48127ffc7fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x480680017fff8000",
            "0xb59f37c0f9d09ea41ec01867728e0af61d0339b945f7d193fd07f4f96cfee8",
            "0x208b7fff7fff7ffe",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffffa",
            "0x480a7ffb7fff8000",
            "0x48127ffe7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffeb3",
            "0x48127ffe7fff8000",
            "0x48127ff57fff8000",
            "0x48127ff57fff8000",
            "0x48127ffc7fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffed",
            "0x480a7ffa7fff8000",
            "0x48127ffe7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffead",
            "0x48127ff67fff8000",
            "0x48127ff67fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffa7fff8000",
            "0x480680017fff8000",
            "0x239ee092d985050eae9fea32b1c39a2163f31bdda1e9ead62b447a380fc47fb",
            "0x480a7ffc7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe1c",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe19",
            "0x480a7ffb7fff8000",
            "0x48127ffe7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe40",
            "0x48127fe17fff8000",
            "0x48127ffd7fff8000",
            "0x48127ffd7fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffa7fff8000",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffec",
            "0x480a7ff97fff8000",
            "0x48127ffe7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe87",
            "0x48127ffe7fff8000",
            "0x48127ff57fff8000",
            "0x48127ff57fff8000",
            "0x48127ffc7fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ff97fff8000",
            "0x480a7ffa7fff8000",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffdd",
            "0x480a7ff87fff8000",
            "0x48127ffe7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe7f",
            "0x48127ff67fff8000",
            "0x48127ff67fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ff97fff8000",
            "0x480a7ffa7fff8000",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffdf",
            "0x208b7fff7fff7ffe",
            "0x40780017fff7fff",
            "0x1",
            "0x4003800080007ffc",
            "0x4826800180008000",
            "0x1",
            "0x480a7ffd7fff8000",
            "0x4828800080007ffe",
            "0x480a80007fff8000",
            "0x208b7fff7fff7ffe",
            "0x482680017ffd8000",
            "0x2",
            "0x402a7ffd7ffc7fff",
            "0x480280007ffb8000",
            "0x480280017ffb8000",
            "0x480280027ffb8000",
            "0x480280007ffd8000",
            "0x480280017ffd8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffe8",
            "0x48127ffe7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffed",
            "0x48127ff47fff8000",
            "0x48127ff47fff8000",
            "0x48127ffb7fff8000",
            "0x48127ffb7fff8000",
            "0x48127ffb7fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ff97fff8000",
            "0x480a7ffa7fff8000",
            "0x480a7ffb7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffee3",
            "0x400680017fff7fff",
            "0x0",
            "0x48127ffc7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe38",
            "0x48127ffe7fff8000",
            "0x48127ff67fff8000",
            "0x48127ff67fff8000",
            "0x480a7ffc7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff03",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff12",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffdb9",
            "0x480680017fff8000",
            "0x4e465420524f4b5a",
            "0x400080007ffe7fff",
            "0x480680017fff8000",
            "0x4e545a",
            "0x400080017ffd7fff",
            "0x400080027ffd7fd0",
            "0x48127ff77fff8000",
            "0x480a7ffd7fff8000",
            "0x48127ff87fff8000",
            "0x480680017fff8000",
            "0x3",
            "0x48127ff97fff8000",
            "0x480680017fff8000",
            "0x0",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe0a",
            "0x48127ffe7fff8000",
            "0x48127fec7fff8000",
            "0x48127fec7fff8000",
            "0x482480017fec8000",
            "0x1",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff05",
            "0x48127fe97fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff76",
            "0x480680017fff8000",
            "0x1",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffec2",
            "0x208b7fff7fff7ffe",
            "0x482680017ffd8000",
            "0x2",
            "0x402a7ffd7ffc7fff",
            "0x480280007ffb8000",
            "0x480280017ffb8000",
            "0x480280027ffb8000",
            "0x480280007ffd8000",
            "0x480280017ffd8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffc5",
            "0x40780017fff7fff",
            "0x1",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x480680017fff8000",
            "0x0",
            "0x48127ffb7fff8000",
            "0x208b7fff7fff7ffe",
            "0x40780017fff7fff",
            "0x2",
            "0x480a7ff47fff8000",
            "0x480a7ff57fff8000",
            "0x480a7ff67fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffeb8",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x480a7ff97fff8000",
            "0x480a7ffa7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff2f",
            "0x400680017fff7fff",
            "0x0",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x480a7ff97fff8000",
            "0x480a7ffa7fff8000",
            "0x480a7ff87fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff72",
            "0x48127ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffde7",
            "0x48127ffe7fff8000",
            "0x48127ff77fff8000",
            "0x48127ff77fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffedb",
            "0x40137ffc7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffd63",
            "0x40137fff7fff8001",
            "0x480680017fff8000",
            "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
            "0x4002800080017fff",
            "0x4003800180017ffd",
            "0x48127ff77fff8000",
            "0x48127ff87fff8000",
            "0x480680017fff8000",
            "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
            "0x480680017fff8000",
            "0x2bcc885342ebbcbcd170ae6cafa8a4bed22bb993479f49806e72d96af94c965",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe0a",
            "0x48127ffd7fff8000",
            "0x48127ffd7fff8000",
            "0x480680017fff8000",
            "0x2bcc885342ebbcbcd170ae6cafa8a4bed22bb993479f49806e72d96af94c965",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x48127fd97fff8000",
            "0x48127fd97fff8000",
            "0x480680017fff8000",
            "0x2",
            "0x480a80017fff8000",
            "0x480a7ff87fff8000",
            "0x48127fb67fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe29",
            "0x48127ffc7fff8000",
            "0x480a80007fff8000",
            "0x48127ffb7fff8000",
            "0x208b7fff7fff7ffe",
            "0x482680017ffd8000",
            "0x7",
            "0x402a7ffd7ffc7fff",
            "0x480280007ffb8000",
            "0x480280017ffb8000",
            "0x480280027ffb8000",
            "0x480280007ffd8000",
            "0x480280017ffd8000",
            "0x480280027ffd8000",
            "0x480280037ffd8000",
            "0x480280047ffd8000",
            "0x480280057ffd8000",
            "0x480280067ffd8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffaf",
            "0x40780017fff7fff",
            "0x1",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x480680017fff8000",
            "0x0",
            "0x48127ffb7fff8000",
            "0x208b7fff7fff7ffe",
            "0x40780017fff7fff",
            "0x2",
            "0x480a7ff47fff8000",
            "0x480a7ff57fff8000",
            "0x480a7ff67fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe5b",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x480a7ff97fff8000",
            "0x480a7ffa7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffed2",
            "0x400680017fff7fff",
            "0x0",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x480a7ff97fff8000",
            "0x480a7ffa7fff8000",
            "0x480a7ff87fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff15",
            "0x48127ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffd8a",
            "0x48127ffe7fff8000",
            "0x48127ff77fff8000",
            "0x48127ff77fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe7e",
            "0x40137ffc7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffd06",
            "0x40137fff7fff8001",
            "0x480680017fff8000",
            "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
            "0x4002800080017fff",
            "0x4003800180017ffd",
            "0x48127ff77fff8000",
            "0x48127ff87fff8000",
            "0x480680017fff8000",
            "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
            "0x480680017fff8000",
            "0x2bcc885342ebbcbcd170ae6cafa8a4bed22bb993479f49806e72d96af94c965",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffdad",
            "0x48127ffd7fff8000",
            "0x48127ffd7fff8000",
            "0x480680017fff8000",
            "0x2bcc885342ebbcbcd170ae6cafa8a4bed22bb993479f49806e72d96af94c965",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x48127fd97fff8000",
            "0x48127fd97fff8000",
            "0x480680017fff8000",
            "0x2",
            "0x480a80017fff8000",
            "0x480a7ff87fff8000",
            "0x48127fb67fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffdcc",
            "0x48127ffc7fff8000",
            "0x480a80007fff8000",
            "0x48127ffb7fff8000",
            "0x208b7fff7fff7ffe",
            "0x482680017ffd8000",
            "0x7",
            "0x402a7ffd7ffc7fff",
            "0x480280007ffb8000",
            "0x480280017ffb8000",
            "0x480280027ffb8000",
            "0x480280007ffd8000",
            "0x480280017ffd8000",
            "0x480280027ffd8000",
            "0x480280037ffd8000",
            "0x480280047ffd8000",
            "0x480280057ffd8000",
            "0x480280067ffd8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffaf",
            "0x40780017fff7fff",
            "0x1",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x480680017fff8000",
            "0x0",
            "0x48127ffb7fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ff87fff8000",
            "0x480680017fff8000",
            "0x3c40e1b3834a71ddb022840f942326a697756c1f979e5c2ab67665e0a5fc9d5",
            "0x480a7ffa7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffcc9",
            "0x480a7ffb7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffcc6",
            "0x480a7ffc7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffcc3",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffcc0",
            "0x480a7ff97fff8000",
            "0x48127ffe7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffce7",
            "0x48127fe17fff8000",
            "0x48127ffd7fff8000",
            "0x48127ffd7fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ff87fff8000",
            "0x480a7ff97fff8000",
            "0x480a7ffa7fff8000",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffe4",
            "0x480a7ff77fff8000",
            "0x48127ffe7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffd2c",
            "0x48127ffe7fff8000",
            "0x48127ff57fff8000",
            "0x48127ff57fff8000",
            "0x48127ffc7fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ff97fff8000",
            "0x480680017fff8000",
            "0x38a7d23bbc92ccb44060bd216c2da3e4e90f6922dda53792e1566d632accb25",
            "0x480a7ffb7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffca1",
            "0x480a7ffc7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffc9e",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffc9b",
            "0x480a7ffa7fff8000",
            "0x48127ffe7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffcc2",
            "0x48127fe17fff8000",
            "0x48127ffd7fff8000",
            "0x48127ffd7fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ff97fff8000",
            "0x480a7ffa7fff8000",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffe8",
            "0x480a7ff87fff8000",
            "0x48127ffe7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffd08",
            "0x48127ffe7fff8000",
            "0x48127ff57fff8000",
            "0x48127ff57fff8000",
            "0x48127ffc7fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ff87fff8000",
            "0x480a7ff97fff8000",
            "0x480a7ffa7fff8000",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffeb",
            "0x208b7fff7fff7ffe",
            "0x40780017fff7fff",
            "0x1",
            "0x4003800080007ffc",
            "0x4826800180008000",
            "0x1",
            "0x480a7ffd7fff8000",
            "0x4828800080007ffe",
            "0x480a80007fff8000",
            "0x208b7fff7fff7ffe",
            "0x482680017ffd8000",
            "0x3",
            "0x402a7ffd7ffc7fff",
            "0x480280007ffb8000",
            "0x480280017ffb8000",
            "0x480280027ffb8000",
            "0x480280007ffd8000",
            "0x480280017ffd8000",
            "0x480280027ffd8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffe6",
            "0x48127ffe7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffec",
            "0x48127ff47fff8000",
            "0x48127ff47fff8000",
            "0x48127ffb7fff8000",
            "0x48127ffb7fff8000",
            "0x48127ffb7fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ff77fff8000",
            "0x480a7ff87fff8000",
            "0x480a7ff97fff8000",
            "0x480a7ffa7fff8000",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff9f",
            "0x208b7fff7fff7ffe",
            "0x40780017fff7fff",
            "0x1",
            "0x4003800080007ffc",
            "0x4826800180008000",
            "0x1",
            "0x480a7ffd7fff8000",
            "0x4828800080007ffe",
            "0x480a80007fff8000",
            "0x208b7fff7fff7ffe",
            "0x482680017ffd8000",
            "0x4",
            "0x402a7ffd7ffc7fff",
            "0x480280007ffb8000",
            "0x480280017ffb8000",
            "0x480280027ffb8000",
            "0x480280007ffd8000",
            "0x480280017ffd8000",
            "0x480280027ffd8000",
            "0x480280037ffd8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffe4",
            "0x48127ffe7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffeb",
            "0x48127ff47fff8000",
            "0x48127ff47fff8000",
            "0x48127ffb7fff8000",
            "0x48127ffb7fff8000",
            "0x48127ffb7fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x480680017fff8000",
            "0x206f38f7e4f15e87567361213c28f235cccdaa1d7fd34c9db1dfe9489c6a091",
            "0x208b7fff7fff7ffe",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffffa",
            "0x480a7ffb7fff8000",
            "0x48127ffe7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffca8",
            "0x48127ffe7fff8000",
            "0x48127ff57fff8000",
            "0x48127ff57fff8000",
            "0x48127ffc7fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffed",
            "0x480a7ffa7fff8000",
            "0x48127ffe7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffca2",
            "0x48127ff67fff8000",
            "0x48127ff67fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ff97fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffc7f",
            "0x48127ffe7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffc83",
            "0x48127ffe7fff8000",
            "0x480a7ffa7fff8000",
            "0x480a7ffb7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffdd4",
            "0x48127ffc7fff8000",
            "0x48127ffd7fff8000",
            "0x480680017fff8000",
            "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
            "0x48127fdf7fff8000",
            "0x48127fe47fff8000",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffc9b",
            "0x48127ffd7fff8000",
            "0x48127ffd7fff8000",
            "0x48127fe07fff8000",
            "0x48127fc27fff8000",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffcc6",
            "0x48127ffe7fff8000",
            "0x48127fc57fff8000",
            "0x48127ffd7fff8000",
            "0x208b7fff7fff7ffe",
            "0x482680017ffd8000",
            "0x2",
            "0x402a7ffd7ffc7fff",
            "0x480280007ffb8000",
            "0x480280017ffb8000",
            "0x480280027ffb8000",
            "0x480280007ffd8000",
            "0x480280017ffd8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffd8",
            "0x40780017fff7fff",
            "0x1",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x480680017fff8000",
            "0x0",
            "0x48127ffb7fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffbf9",
            "0x480a7ffa7fff8000",
            "0x480a7ffb7fff8000",
            "0x48127ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffad",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x48287ffd7ffc8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffb4",
            "0x208b7fff7fff7ffe",
            "0x482680017ffd8000",
            "0x1",
            "0x402a7ffd7ffc7fff",
            "0x480280007ffb8000",
            "0x480280017ffb8000",
            "0x480280027ffb8000",
            "0x480280007ffd8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffea",
            "0x40780017fff7fff",
            "0x1",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x480680017fff8000",
            "0x0",
            "0x48127ffb7fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff8f",
            "0x208b7fff7fff7ffe",
            "0x40780017fff7fff",
            "0x1",
            "0x4003800080007ffc",
            "0x4826800180008000",
            "0x1",
            "0x480a7ffd7fff8000",
            "0x4828800080007ffe",
            "0x480a80007fff8000",
            "0x208b7fff7fff7ffe",
            "0x402b7ffd7ffc7ffd",
            "0x480280007ffb8000",
            "0x480280017ffb8000",
            "0x480280027ffb8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffee",
            "0x48127ffe7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffff1",
            "0x48127ff47fff8000",
            "0x48127ff47fff8000",
            "0x48127ffb7fff8000",
            "0x48127ffb7fff8000",
            "0x48127ffb7fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x480680017fff8000",
            "0x0",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff7c",
            "0x208b7fff7fff7ffe",
            "0x402b7ffd7ffc7ffd",
            "0x480280007ffb8000",
            "0x480280017ffb8000",
            "0x480280027ffb8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffff5",
            "0x40780017fff7fff",
            "0x1",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x480680017fff8000",
            "0x0",
            "0x48127ffb7fff8000",
            "0x208b7fff7fff7ffe"
        ],
        "debug_info": null,
        "hints": {
            "0": [
                {
                    "accessible_scopes": [
                        "starkware.cairo.common.alloc",
                        "starkware.cairo.common.alloc.alloc"
                    ],
                    "code": "memory[ap] = segments.add()",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 0,
                            "offset": 0
                        },
                        "reference_ids": {}
                    }
                }
            ],
            "12": [
                {
                    "accessible_scopes": [
                        "starkware.cairo.common.memcpy",
                        "starkware.cairo.common.memcpy.memcpy"
                    ],
                    "code": "vm_enter_scope({'n': ids.len})",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 2,
                            "offset": 0
                        },
                        "reference_ids": {
                            "starkware.cairo.common.memcpy.memcpy.dst": 5,
                            "starkware.cairo.common.memcpy.memcpy.len": 7,
                            "starkware.cairo.common.memcpy.memcpy.src": 6
                        }
                    }
                }
            ],
            "20": [
                {
                    "accessible_scopes": [
                        "starkware.cairo.common.memcpy",
                        "starkware.cairo.common.memcpy.memcpy"
                    ],
                    "code": "n -= 1\nids.continue_copying = 1 if n > 0 else 0",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 2,
                            "offset": 5
                        },
                        "reference_ids": {
                            "starkware.cairo.common.memcpy.memcpy.__temp0": 10,
                            "starkware.cairo.common.memcpy.memcpy.continue_copying": 11,
                            "starkware.cairo.common.memcpy.memcpy.dst": 5,
                            "starkware.cairo.common.memcpy.memcpy.frame": 9,
                            "starkware.cairo.common.memcpy.memcpy.len": 7,
                            "starkware.cairo.common.memcpy.memcpy.next_frame": 12,
                            "starkware.cairo.common.memcpy.memcpy.src": 6
                        }
                    }
                }
            ],
            "23": [
                {
                    "accessible_scopes": [
                        "starkware.cairo.common.memcpy",
                        "starkware.cairo.common.memcpy.memcpy"
                    ],
                    "code": "vm_exit_scope()",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 2,
                            "offset": 6
                        },
                        "reference_ids": {
                            "starkware.cairo.common.memcpy.memcpy.__temp0": 10,
                            "starkware.cairo.common.memcpy.memcpy.continue_copying": 11,
                            "starkware.cairo.common.memcpy.memcpy.dst": 5,
                            "starkware.cairo.common.memcpy.memcpy.frame": 9,
                            "starkware.cairo.common.memcpy.memcpy.len": 7,
                            "starkware.cairo.common.memcpy.memcpy.next_frame": 12,
                            "starkware.cairo.common.memcpy.memcpy.src": 6
                        }
                    }
                }
            ],
            "24": [
                {
                    "accessible_scopes": [
                        "starkware.cairo.common.math",
                        "starkware.cairo.common.math.assert_not_zero"
                    ],
                    "code": "from starkware.cairo.common.math_utils import assert_integer\nassert_integer(ids.value)\nassert ids.value % PRIME != 0, f'assert_not_zero failed: {ids.value} = 0.'",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 3,
                            "offset": 0
                        },
                        "reference_ids": {
                            "starkware.cairo.common.math.assert_not_zero.value": 13
                        }
                    }
                }
            ],
            "29": [
                {
                    "accessible_scopes": [
                        "starkware.cairo.common.math",
                        "starkware.cairo.common.math.assert_nn"
                    ],
                    "code": "from starkware.cairo.common.math_utils import assert_integer\nassert_integer(ids.a)\nassert 0 <= ids.a % PRIME < range_check_builtin.bound, f'a = {ids.a} is out of range.'",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 4,
                            "offset": 0
                        },
                        "reference_ids": {
                            "starkware.cairo.common.math.assert_nn.a": 14,
                            "starkware.cairo.common.math.assert_nn.range_check_ptr": 15
                        }
                    }
                }
            ],
            "33": [
                {
                    "accessible_scopes": [
                        "starkware.cairo.common.math",
                        "starkware.cairo.common.math.assert_250_bit"
                    ],
                    "code": "from starkware.cairo.common.math_utils import as_int\n\n# Correctness check.\nvalue = as_int(ids.value, PRIME) % PRIME\nassert value < ids.UPPER_BOUND, f'{value} is outside of the range [0, 2**250).'\n\n# Calculation for the assertion.\nids.high, ids.low = divmod(ids.value, ids.SHIFT)",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 5,
                            "offset": 0
                        },
                        "reference_ids": {
                            "starkware.cairo.common.math.assert_250_bit.high": 20,
                            "starkware.cairo.common.math.assert_250_bit.low": 19,
                            "starkware.cairo.common.math.assert_250_bit.range_check_ptr": 18,
                            "starkware.cairo.common.math.assert_250_bit.value": 17
                        }
                    }
                }
            ],
            "48": [
                {
                    "accessible_scopes": [
                        "starkware.starknet.common.storage",
                        "starkware.starknet.common.storage.normalize_address"
                    ],
                    "code": "# Verify the assumptions on the relationship between 2**250, ADDR_BOUND and PRIME.\nADDR_BOUND = ids.ADDR_BOUND % PRIME\nassert (2**250 < ADDR_BOUND <= 2**251) and (2 * 2**250 < PRIME) and (\n        ADDR_BOUND * 2 > PRIME), \\\n    'normalize_address() cannot be used with the current constants.'\nids.is_small = 1 if ids.addr < ADDR_BOUND else 0",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 6,
                            "offset": 1
                        },
                        "reference_ids": {
                            "starkware.starknet.common.storage.normalize_address.addr": 28,
                            "starkware.starknet.common.storage.normalize_address.is_small": 30,
                            "starkware.starknet.common.storage.normalize_address.range_check_ptr": 29
                        }
                    }
                }
            ],
            "66": [
                {
                    "accessible_scopes": [
                        "starkware.starknet.common.storage",
                        "starkware.starknet.common.storage.normalize_address"
                    ],
                    "code": "ids.is_250 = 1 if ids.addr < 2**250 else 0",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 6,
                            "offset": 2
                        },
                        "reference_ids": {
                            "starkware.starknet.common.storage.normalize_address.addr": 28,
                            "starkware.starknet.common.storage.normalize_address.is_250": 36,
                            "starkware.starknet.common.storage.normalize_address.is_small": 30,
                            "starkware.starknet.common.storage.normalize_address.range_check_ptr": 29
                        }
                    }
                }
            ],
            "93": [
                {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.call_contract"
                    ],
                    "code": "syscall_handler.call_contract(segments=segments, syscall_ptr=ids.syscall_ptr)",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 7,
                            "offset": 1
                        },
                        "reference_ids": {
                            "starkware.starknet.common.syscalls.call_contract.__temp9": 47,
                            "starkware.starknet.common.syscalls.call_contract.calldata": 44,
                            "starkware.starknet.common.syscalls.call_contract.calldata_size": 43,
                            "starkware.starknet.common.syscalls.call_contract.contract_address": 41,
                            "starkware.starknet.common.syscalls.call_contract.function_selector": 42,
                            "starkware.starknet.common.syscalls.call_contract.syscall": 46,
                            "starkware.starknet.common.syscalls.call_contract.syscall_ptr": 45
                        }
                    }
                }
            ],
            "106": [
                {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.deploy"
                    ],
                    "code": "syscall_handler.deploy(segments=segments, syscall_ptr=ids.syscall_ptr)",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 8,
                            "offset": 1
                        },
                        "reference_ids": {
                            "starkware.starknet.common.syscalls.deploy.__temp10": 57,
                            "starkware.starknet.common.syscalls.deploy.class_hash": 50,
                            "starkware.starknet.common.syscalls.deploy.constructor_calldata": 53,
                            "starkware.starknet.common.syscalls.deploy.constructor_calldata_size": 52,
                            "starkware.starknet.common.syscalls.deploy.contract_address_salt": 51,
                            "starkware.starknet.common.syscalls.deploy.deploy_from_zero": 54,
                            "starkware.starknet.common.syscalls.deploy.syscall": 56,
                            "starkware.starknet.common.syscalls.deploy.syscall_ptr": 55
                        }
                    }
                }
            ],
            "113": [
                {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.get_caller_address"
                    ],
                    "code": "syscall_handler.get_caller_address(segments=segments, syscall_ptr=ids.syscall_ptr)",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 9,
                            "offset": 1
                        },
                        "reference_ids": {
                            "starkware.starknet.common.syscalls.get_caller_address.__temp11": 62,
                            "starkware.starknet.common.syscalls.get_caller_address.syscall": 61,
                            "starkware.starknet.common.syscalls.get_caller_address.syscall_ptr": 60
                        }
                    }
                }
            ],
            "120": [
                {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.get_contract_address"
                    ],
                    "code": "syscall_handler.get_contract_address(segments=segments, syscall_ptr=ids.syscall_ptr)",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 10,
                            "offset": 1
                        },
                        "reference_ids": {
                            "starkware.starknet.common.syscalls.get_contract_address.__temp12": 66,
                            "starkware.starknet.common.syscalls.get_contract_address.syscall": 65,
                            "starkware.starknet.common.syscalls.get_contract_address.syscall_ptr": 64
                        }
                    }
                }
            ],
            "127": [
                {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.get_block_timestamp"
                    ],
                    "code": "syscall_handler.get_block_timestamp(segments=segments, syscall_ptr=ids.syscall_ptr)",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 11,
                            "offset": 1
                        },
                        "reference_ids": {
                            "starkware.starknet.common.syscalls.get_block_timestamp.__temp13": 70,
                            "starkware.starknet.common.syscalls.get_block_timestamp.syscall": 69,
                            "starkware.starknet.common.syscalls.get_block_timestamp.syscall_ptr": 68
                        }
                    }
                }
            ],
            "135": [
                {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.storage_read"
                    ],
                    "code": "syscall_handler.storage_read(segments=segments, syscall_ptr=ids.syscall_ptr)",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 12,
                            "offset": 1
                        },
                        "reference_ids": {
                            "starkware.starknet.common.syscalls.storage_read.__temp14": 75,
                            "starkware.starknet.common.syscalls.storage_read.address": 72,
                            "starkware.starknet.common.syscalls.storage_read.syscall": 74,
                            "starkware.starknet.common.syscalls.storage_read.syscall_ptr": 73
                        }
                    }
                }
            ],
            "144": [
                {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.storage_write"
                    ],
                    "code": "syscall_handler.storage_write(segments=segments, syscall_ptr=ids.syscall_ptr)",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 13,
                            "offset": 1
                        },
                        "reference_ids": {
                            "starkware.starknet.common.syscalls.storage_write.__temp15": 81,
                            "starkware.starknet.common.syscalls.storage_write.address": 78,
                            "starkware.starknet.common.syscalls.storage_write.syscall_ptr": 80,
                            "starkware.starknet.common.syscalls.storage_write.value": 79
                        }
                    }
                }
            ],
            "153": [
                {
                    "accessible_scopes": [
                        "starkware.starknet.common.messages",
                        "starkware.starknet.common.messages.send_message_to_l1"
                    ],
                    "code": "syscall_handler.send_message_to_l1(segments=segments, syscall_ptr=ids.syscall_ptr)",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 14,
                            "offset": 1
                        },
                        "reference_ids": {
                            "starkware.starknet.common.messages.send_message_to_l1.__temp16": 87,
                            "starkware.starknet.common.messages.send_message_to_l1.payload": 85,
                            "starkware.starknet.common.messages.send_message_to_l1.payload_size": 84,
                            "starkware.starknet.common.messages.send_message_to_l1.syscall_ptr": 86,
                            "starkware.starknet.common.messages.send_message_to_l1.to_address": 83
                        }
                    }
                }
            ],
            "398": [
                {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.get_l1_gateway_encode_return"
                    ],
                    "code": "memory[ap] = segments.add()",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 32,
                            "offset": 0
                        },
                        "reference_ids": {
                            "__wrappers__.get_l1_gateway_encode_return.range_check_ptr": 279,
                            "__wrappers__.get_l1_gateway_encode_return.ret_value": 278
                        }
                    }
                }
            ],
            "538": [
                {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.get_collateral_data_encode_return"
                    ],
                    "code": "memory[ap] = segments.add()",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 43,
                            "offset": 0
                        },
                        "reference_ids": {
                            "__wrappers__.get_collateral_data_encode_return.range_check_ptr": 389,
                            "__wrappers__.get_collateral_data_encode_return.ret_value": 388
                        }
                    }
                }
            ],
            "628": [
                {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.initialize"
                    ],
                    "code": "memory[ap] = segments.add()",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 46,
                            "offset": 155
                        },
                        "reference_ids": {
                            "__wrappers__.initialize.__calldata_actual_size": 451,
                            "__wrappers__.initialize.__calldata_arg__l1_gateway": 447,
                            "__wrappers__.initialize.__calldata_arg_token_class_hash": 449,
                            "__wrappers__.initialize.__calldata_ptr": 450,
                            "__wrappers__.initialize.__temp33": 452,
                            "__wrappers__.initialize.pedersen_ptr": 454,
                            "__wrappers__.initialize.range_check_ptr": 455,
                            "__wrappers__.initialize.ret_value": 456,
                            "__wrappers__.initialize.syscall_ptr": 453
                        }
                    }
                }
            ],
            "721": [
                {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.bridge_from_mainnet"
                    ],
                    "code": "memory[ap] = segments.add()",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 50,
                            "offset": 0
                        },
                        "reference_ids": {
                            "__wrappers__.bridge_from_mainnet.__calldata_actual_size": 510,
                            "__wrappers__.bridge_from_mainnet.__calldata_arg__floor_price": 506,
                            "__wrappers__.bridge_from_mainnet.__calldata_arg__l1_token_address": 502,
                            "__wrappers__.bridge_from_mainnet.__calldata_arg__owner": 500,
                            "__wrappers__.bridge_from_mainnet.__calldata_arg__require_token_address": 508,
                            "__wrappers__.bridge_from_mainnet.__calldata_arg__token_id": 504,
                            "__wrappers__.bridge_from_mainnet.__calldata_arg_from_address": 498,
                            "__wrappers__.bridge_from_mainnet.__calldata_ptr": 509,
                            "__wrappers__.bridge_from_mainnet.__temp35": 511,
                            "__wrappers__.bridge_from_mainnet.pedersen_ptr": 513,
                            "__wrappers__.bridge_from_mainnet.range_check_ptr": 514,
                            "__wrappers__.bridge_from_mainnet.ret_value": 515,
                            "__wrappers__.bridge_from_mainnet.syscall_ptr": 512
                        }
                    }
                }
            ],
            "814": [
                {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.bridge_debug"
                    ],
                    "code": "memory[ap] = segments.add()",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 54,
                            "offset": 0
                        },
                        "reference_ids": {
                            "__wrappers__.bridge_debug.__calldata_actual_size": 569,
                            "__wrappers__.bridge_debug.__calldata_arg__floor_price": 565,
                            "__wrappers__.bridge_debug.__calldata_arg__l1_token_address": 561,
                            "__wrappers__.bridge_debug.__calldata_arg__owner": 559,
                            "__wrappers__.bridge_debug.__calldata_arg__require_token_address": 567,
                            "__wrappers__.bridge_debug.__calldata_arg__token_id": 563,
                            "__wrappers__.bridge_debug.__calldata_arg_from_address": 557,
                            "__wrappers__.bridge_debug.__calldata_ptr": 568,
                            "__wrappers__.bridge_debug.__temp37": 570,
                            "__wrappers__.bridge_debug.pedersen_ptr": 572,
                            "__wrappers__.bridge_debug.range_check_ptr": 573,
                            "__wrappers__.bridge_debug.ret_value": 574,
                            "__wrappers__.bridge_debug.syscall_ptr": 571
                        }
                    }
                }
            ],
            "908": [
                {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.get_bridge_back_event_count_encode_return"
                    ],
                    "code": "memory[ap] = segments.add()",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 60,
                            "offset": 0
                        },
                        "reference_ids": {
                            "__wrappers__.get_bridge_back_event_count_encode_return.range_check_ptr": 650,
                            "__wrappers__.get_bridge_back_event_count_encode_return.ret_value": 649
                        }
                    }
                }
            ],
            "947": [
                {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.get_bridge_back_event_encode_return"
                    ],
                    "code": "memory[ap] = segments.add()",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 63,
                            "offset": 0
                        },
                        "reference_ids": {
                            "__wrappers__.get_bridge_back_event_encode_return.range_check_ptr": 686,
                            "__wrappers__.get_bridge_back_event_encode_return.ret_value": 685
                        }
                    }
                }
            ],
            "1050": [
                {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.stake"
                    ],
                    "code": "memory[ap] = segments.add()",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 69,
                            "offset": 101
                        },
                        "reference_ids": {
                            "__wrappers__.stake.__calldata_actual_size": 757,
                            "__wrappers__.stake.__calldata_arg_amount": 755,
                            "__wrappers__.stake.__calldata_ptr": 756,
                            "__wrappers__.stake.__temp42": 758,
                            "__wrappers__.stake.pedersen_ptr": 760,
                            "__wrappers__.stake.range_check_ptr": 761,
                            "__wrappers__.stake.ret_value": 762,
                            "__wrappers__.stake.syscall_ptr": 759
                        }
                    }
                }
            ],
            "1084": [
                {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.increase_balance"
                    ],
                    "code": "memory[ap] = segments.add()",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 71,
                            "offset": 57
                        },
                        "reference_ids": {
                            "__wrappers__.increase_balance.__calldata_actual_size": 783,
                            "__wrappers__.increase_balance.__calldata_arg_amount": 781,
                            "__wrappers__.increase_balance.__calldata_ptr": 782,
                            "__wrappers__.increase_balance.__temp43": 784,
                            "__wrappers__.increase_balance.pedersen_ptr": 786,
                            "__wrappers__.increase_balance.range_check_ptr": 787,
                            "__wrappers__.increase_balance.ret_value": 788,
                            "__wrappers__.increase_balance.syscall_ptr": 785
                        }
                    }
                }
            ],
            "1099": [
                {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.get_balance_encode_return"
                    ],
                    "code": "memory[ap] = segments.add()",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 73,
                            "offset": 0
                        },
                        "reference_ids": {
                            "__wrappers__.get_balance_encode_return.range_check_ptr": 799,
                            "__wrappers__.get_balance_encode_return.ret_value": 798
                        }
                    }
                }
            ],
            "1137": [
                {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.constructor"
                    ],
                    "code": "memory[ap] = segments.add()",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 76,
                            "offset": 27
                        },
                        "reference_ids": {
                            "__wrappers__.constructor.__calldata_actual_size": 826,
                            "__wrappers__.constructor.__calldata_ptr": 825,
                            "__wrappers__.constructor.pedersen_ptr": 828,
                            "__wrappers__.constructor.range_check_ptr": 829,
                            "__wrappers__.constructor.ret_value": 830,
                            "__wrappers__.constructor.syscall_ptr": 827
                        }
                    }
                }
            ]
        },
        "identifiers": {
            "__main__.BRIDGE_MODE_WITHDRAW": {
                "type": "const",
                "value": 1
            },
            "__main__.ETH_ADDRESS": {
                "type": "const",
                "value": -1531481363943511436577813308151597459855447218982827121852527537121361113658
            },
            "__main__.FALSE": {
                "destination": "starkware.cairo.common.bool.FALSE",
                "type": "alias"
            },
            "__main__.HashBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
                "type": "alias"
            },
            "__main__.IBridgedERC20": {
                "type": "namespace"
            },
            "__main__.IBridgedERC20.ALLOWANCE_SELECTOR": {
                "type": "const",
                "value": 863164345921111744606866654754108663958095967665259696902984674202985078753
            },
            "__main__.IBridgedERC20.APPROVE_SELECTOR": {
                "type": "const",
                "value": 949021990203918389843157787496164629863144228991510976554585288817234167820
            },
            "__main__.IBridgedERC20.Args": {
                "full_name": "__main__.IBridgedERC20.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.IBridgedERC20.BALANCEOF_SELECTOR": {
                "type": "const",
                "value": 1307730684388977109649524593492043083703013045633289330664425380824804018030
            },
            "__main__.IBridgedERC20.DECIMALS_SELECTOR": {
                "type": "const",
                "value": 134830404806214277570220174593674215737759987247891306080029841794115377321
            },
            "__main__.IBridgedERC20.ImplicitArgs": {
                "full_name": "__main__.IBridgedERC20.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.IBridgedERC20.MINT_SELECTOR": {
                "type": "const",
                "value": 1329909728320632088402217562277154056711815095720684343816173432540100887380
            },
            "__main__.IBridgedERC20.NAME_SELECTOR": {
                "type": "const",
                "value": 1528802474226268325865027367859591458315299653151958663884057507666229546336
            },
            "__main__.IBridgedERC20.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.IBridgedERC20.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.IBridgedERC20.SYMBOL_SELECTOR": {
                "type": "const",
                "value": 944713526212149105522785400348068751682982210605126537021911324578866405028
            },
            "__main__.IBridgedERC20.TOTALSUPPLY_SELECTOR": {
                "type": "const",
                "value": 227334030968744315992796982100494617316223563777432855541120004521101595501
            },
            "__main__.IBridgedERC20.TRANSFERFROM_SELECTOR": {
                "type": "const",
                "value": 116061167288211781254449158074459916871457383008289084697957612485591092000
            },
            "__main__.IBridgedERC20.TRANSFER_SELECTOR": {
                "type": "const",
                "value": 232670485425082704932579856502088130646006032362877466777181098476241604910
            },
            "__main__.IBridgedERC20.alloc": {
                "destination": "starkware.cairo.common.alloc.alloc",
                "type": "alias"
            },
            "__main__.IBridgedERC20.approve": {
                "decorators": [],
                "pc": 182,
                "type": "function"
            },
            "__main__.IBridgedERC20.approve.Args": {
                "full_name": "__main__.IBridgedERC20.approve.Args",
                "members": {
                    "amount": {
                        "cairo_type": "starkware.cairo.common.uint256.Uint256",
                        "offset": 2
                    },
                    "contract_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "spender": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 4,
                "type": "struct"
            },
            "__main__.IBridgedERC20.approve.ImplicitArgs": {
                "full_name": "__main__.IBridgedERC20.approve.ImplicitArgs",
                "members": {
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__.IBridgedERC20.approve.Return": {
                "cairo_type": "(success: felt)",
                "type": "type_definition"
            },
            "__main__.IBridgedERC20.approve.SIZEOF_LOCALS": {
                "type": "const",
                "value": 1
            },
            "__main__.IBridgedERC20.approve.__calldata_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.IBridgedERC20.approve.__calldata_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 4
                        },
                        "pc": 187,
                        "value": "[cast(fp, felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 4
                        },
                        "pc": 188,
                        "value": "cast([fp] + 1, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 4
                        },
                        "pc": 190,
                        "value": "cast([fp] + 3, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.approve.__calldata_tmp": {
                "cairo_type": "felt*",
                "full_name": "__main__.IBridgedERC20.approve.__calldata_tmp",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 4
                        },
                        "pc": 188,
                        "value": "cast(fp + (-4), felt*)"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.approve.__return_value_actual_size": {
                "cairo_type": "felt",
                "full_name": "__main__.IBridgedERC20.approve.__return_value_actual_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 16
                        },
                        "pc": 200,
                        "value": "cast([ap + (-1)] + 1 - [ap + (-1)], felt)"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.approve.__return_value_arg_success": {
                "cairo_type": "felt",
                "full_name": "__main__.IBridgedERC20.approve.__return_value_arg_success",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 16
                        },
                        "pc": 200,
                        "value": "[cast([ap + (-1)], felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.approve.__return_value_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.IBridgedERC20.approve.__return_value_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 16
                        },
                        "pc": 200,
                        "value": "[cast(ap + (-1), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 16
                        },
                        "pc": 200,
                        "value": "cast([ap + (-1)] + 1, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.approve.__temp19": {
                "cairo_type": "felt",
                "full_name": "__main__.IBridgedERC20.approve.__temp19",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 5
                        },
                        "pc": 192,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.approve.__temp20": {
                "cairo_type": "felt",
                "full_name": "__main__.IBridgedERC20.approve.__temp20",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 17
                        },
                        "pc": 202,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.approve.amount": {
                "cairo_type": "starkware.cairo.common.uint256.Uint256",
                "full_name": "__main__.IBridgedERC20.approve.amount",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 0
                        },
                        "pc": 182,
                        "value": "[cast(fp + (-4), starkware.cairo.common.uint256.Uint256*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.approve.calldata_ptr_start": {
                "cairo_type": "felt*",
                "full_name": "__main__.IBridgedERC20.approve.calldata_ptr_start",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 4
                        },
                        "pc": 186,
                        "value": "[cast(ap + (-1), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 4
                        },
                        "pc": 187,
                        "value": "[cast(fp, felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.approve.contract_address": {
                "cairo_type": "felt",
                "full_name": "__main__.IBridgedERC20.approve.contract_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 0
                        },
                        "pc": 182,
                        "value": "[cast(fp + (-6), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.approve.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.IBridgedERC20.approve.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 0
                        },
                        "pc": 182,
                        "value": "[cast(fp + (-7), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.approve.retdata": {
                "cairo_type": "felt*",
                "full_name": "__main__.IBridgedERC20.approve.retdata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 16
                        },
                        "pc": 200,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.approve.retdata_size": {
                "cairo_type": "felt",
                "full_name": "__main__.IBridgedERC20.approve.retdata_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 16
                        },
                        "pc": 200,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.approve.spender": {
                "cairo_type": "felt",
                "full_name": "__main__.IBridgedERC20.approve.spender",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 0
                        },
                        "pc": 182,
                        "value": "[cast(fp + (-5), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.approve.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.IBridgedERC20.approve.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 0
                        },
                        "pc": 182,
                        "value": "[cast(fp + (-8), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 16
                        },
                        "pc": 200,
                        "value": "[cast(ap + (-3), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.call_contract": {
                "destination": "starkware.starknet.common.syscalls.call_contract",
                "type": "alias"
            },
            "__main__.IBridgedERC20.library_call": {
                "destination": "starkware.starknet.common.syscalls.library_call",
                "type": "alias"
            },
            "__main__.IBridgedERC20.memcpy": {
                "destination": "starkware.cairo.common.memcpy.memcpy",
                "type": "alias"
            },
            "__main__.IBridgedERC20.mint": {
                "decorators": [],
                "pc": 207,
                "type": "function"
            },
            "__main__.IBridgedERC20.mint.Args": {
                "full_name": "__main__.IBridgedERC20.mint.Args",
                "members": {
                    "amount": {
                        "cairo_type": "starkware.cairo.common.uint256.Uint256",
                        "offset": 2
                    },
                    "contract_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "to": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 4,
                "type": "struct"
            },
            "__main__.IBridgedERC20.mint.ImplicitArgs": {
                "full_name": "__main__.IBridgedERC20.mint.ImplicitArgs",
                "members": {
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__.IBridgedERC20.mint.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.IBridgedERC20.mint.SIZEOF_LOCALS": {
                "type": "const",
                "value": 1
            },
            "__main__.IBridgedERC20.mint.__calldata_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.IBridgedERC20.mint.__calldata_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 17,
                            "offset": 4
                        },
                        "pc": 212,
                        "value": "[cast(fp, felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 17,
                            "offset": 4
                        },
                        "pc": 213,
                        "value": "cast([fp] + 1, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 17,
                            "offset": 4
                        },
                        "pc": 215,
                        "value": "cast([fp] + 3, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.mint.__calldata_tmp": {
                "cairo_type": "felt*",
                "full_name": "__main__.IBridgedERC20.mint.__calldata_tmp",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 17,
                            "offset": 4
                        },
                        "pc": 213,
                        "value": "cast(fp + (-4), felt*)"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.mint.__temp21": {
                "cairo_type": "felt",
                "full_name": "__main__.IBridgedERC20.mint.__temp21",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 17,
                            "offset": 5
                        },
                        "pc": 217,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.mint.amount": {
                "cairo_type": "starkware.cairo.common.uint256.Uint256",
                "full_name": "__main__.IBridgedERC20.mint.amount",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 17,
                            "offset": 0
                        },
                        "pc": 207,
                        "value": "[cast(fp + (-4), starkware.cairo.common.uint256.Uint256*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.mint.calldata_ptr_start": {
                "cairo_type": "felt*",
                "full_name": "__main__.IBridgedERC20.mint.calldata_ptr_start",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 17,
                            "offset": 4
                        },
                        "pc": 211,
                        "value": "[cast(ap + (-1), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 17,
                            "offset": 4
                        },
                        "pc": 212,
                        "value": "[cast(fp, felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.mint.contract_address": {
                "cairo_type": "felt",
                "full_name": "__main__.IBridgedERC20.mint.contract_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 17,
                            "offset": 0
                        },
                        "pc": 207,
                        "value": "[cast(fp + (-6), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.mint.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.IBridgedERC20.mint.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 17,
                            "offset": 0
                        },
                        "pc": 207,
                        "value": "[cast(fp + (-7), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.mint.retdata": {
                "cairo_type": "felt*",
                "full_name": "__main__.IBridgedERC20.mint.retdata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 17,
                            "offset": 16
                        },
                        "pc": 225,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.mint.retdata_size": {
                "cairo_type": "felt",
                "full_name": "__main__.IBridgedERC20.mint.retdata_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 17,
                            "offset": 16
                        },
                        "pc": 225,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.mint.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.IBridgedERC20.mint.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 17,
                            "offset": 0
                        },
                        "pc": 207,
                        "value": "[cast(fp + (-8), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 17,
                            "offset": 16
                        },
                        "pc": 225,
                        "value": "[cast(ap + (-3), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.mint.to": {
                "cairo_type": "felt",
                "full_name": "__main__.IBridgedERC20.mint.to",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 17,
                            "offset": 0
                        },
                        "pc": 207,
                        "value": "[cast(fp + (-5), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.transferFrom": {
                "decorators": [],
                "pc": 156,
                "type": "function"
            },
            "__main__.IBridgedERC20.transferFrom.Args": {
                "full_name": "__main__.IBridgedERC20.transferFrom.Args",
                "members": {
                    "amount": {
                        "cairo_type": "starkware.cairo.common.uint256.Uint256",
                        "offset": 3
                    },
                    "contract_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "recipient": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "sender": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 5,
                "type": "struct"
            },
            "__main__.IBridgedERC20.transferFrom.ImplicitArgs": {
                "full_name": "__main__.IBridgedERC20.transferFrom.ImplicitArgs",
                "members": {
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__.IBridgedERC20.transferFrom.Return": {
                "cairo_type": "(success: felt)",
                "type": "type_definition"
            },
            "__main__.IBridgedERC20.transferFrom.SIZEOF_LOCALS": {
                "type": "const",
                "value": 1
            },
            "__main__.IBridgedERC20.transferFrom.__calldata_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.IBridgedERC20.transferFrom.__calldata_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 15,
                            "offset": 4
                        },
                        "pc": 161,
                        "value": "[cast(fp, felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 15,
                            "offset": 4
                        },
                        "pc": 162,
                        "value": "cast([fp] + 1, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 15,
                            "offset": 4
                        },
                        "pc": 163,
                        "value": "cast([fp] + 2, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 15,
                            "offset": 4
                        },
                        "pc": 165,
                        "value": "cast([fp] + 4, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.transferFrom.__calldata_tmp": {
                "cairo_type": "felt*",
                "full_name": "__main__.IBridgedERC20.transferFrom.__calldata_tmp",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 15,
                            "offset": 4
                        },
                        "pc": 163,
                        "value": "cast(fp + (-4), felt*)"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.transferFrom.__return_value_actual_size": {
                "cairo_type": "felt",
                "full_name": "__main__.IBridgedERC20.transferFrom.__return_value_actual_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 15,
                            "offset": 16
                        },
                        "pc": 175,
                        "value": "cast([ap + (-1)] + 1 - [ap + (-1)], felt)"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.transferFrom.__return_value_arg_success": {
                "cairo_type": "felt",
                "full_name": "__main__.IBridgedERC20.transferFrom.__return_value_arg_success",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 15,
                            "offset": 16
                        },
                        "pc": 175,
                        "value": "[cast([ap + (-1)], felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.transferFrom.__return_value_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.IBridgedERC20.transferFrom.__return_value_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 15,
                            "offset": 16
                        },
                        "pc": 175,
                        "value": "[cast(ap + (-1), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 15,
                            "offset": 16
                        },
                        "pc": 175,
                        "value": "cast([ap + (-1)] + 1, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.transferFrom.__temp17": {
                "cairo_type": "felt",
                "full_name": "__main__.IBridgedERC20.transferFrom.__temp17",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 15,
                            "offset": 5
                        },
                        "pc": 167,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.transferFrom.__temp18": {
                "cairo_type": "felt",
                "full_name": "__main__.IBridgedERC20.transferFrom.__temp18",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 15,
                            "offset": 17
                        },
                        "pc": 177,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.transferFrom.amount": {
                "cairo_type": "starkware.cairo.common.uint256.Uint256",
                "full_name": "__main__.IBridgedERC20.transferFrom.amount",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 15,
                            "offset": 0
                        },
                        "pc": 156,
                        "value": "[cast(fp + (-4), starkware.cairo.common.uint256.Uint256*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.transferFrom.calldata_ptr_start": {
                "cairo_type": "felt*",
                "full_name": "__main__.IBridgedERC20.transferFrom.calldata_ptr_start",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 15,
                            "offset": 4
                        },
                        "pc": 160,
                        "value": "[cast(ap + (-1), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 15,
                            "offset": 4
                        },
                        "pc": 161,
                        "value": "[cast(fp, felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.transferFrom.contract_address": {
                "cairo_type": "felt",
                "full_name": "__main__.IBridgedERC20.transferFrom.contract_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 15,
                            "offset": 0
                        },
                        "pc": 156,
                        "value": "[cast(fp + (-7), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.transferFrom.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.IBridgedERC20.transferFrom.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 15,
                            "offset": 0
                        },
                        "pc": 156,
                        "value": "[cast(fp + (-8), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.transferFrom.recipient": {
                "cairo_type": "felt",
                "full_name": "__main__.IBridgedERC20.transferFrom.recipient",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 15,
                            "offset": 0
                        },
                        "pc": 156,
                        "value": "[cast(fp + (-5), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.transferFrom.retdata": {
                "cairo_type": "felt*",
                "full_name": "__main__.IBridgedERC20.transferFrom.retdata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 15,
                            "offset": 16
                        },
                        "pc": 175,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.transferFrom.retdata_size": {
                "cairo_type": "felt",
                "full_name": "__main__.IBridgedERC20.transferFrom.retdata_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 15,
                            "offset": 16
                        },
                        "pc": 175,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.transferFrom.sender": {
                "cairo_type": "felt",
                "full_name": "__main__.IBridgedERC20.transferFrom.sender",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 15,
                            "offset": 0
                        },
                        "pc": 156,
                        "value": "[cast(fp + (-6), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IBridgedERC20.transferFrom.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.IBridgedERC20.transferFrom.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 15,
                            "offset": 0
                        },
                        "pc": 156,
                        "value": "[cast(fp + (-9), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 15,
                            "offset": 16
                        },
                        "pc": 175,
                        "value": "[cast(ap + (-3), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IRouter": {
                "type": "namespace"
            },
            "__main__.IRouter.Args": {
                "full_name": "__main__.IRouter.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.IRouter.ImplicitArgs": {
                "full_name": "__main__.IRouter.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.IRouter.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.IRouter.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.IRouter.SWAP_EXACT_TOKENS_FOR_TOKENS_SELECTOR": {
                "type": "const",
                "value": 1426565999849372202067242202088433764048928624912224385906297528280239424972
            },
            "__main__.IRouter.alloc": {
                "destination": "starkware.cairo.common.alloc.alloc",
                "type": "alias"
            },
            "__main__.IRouter.call_contract": {
                "destination": "starkware.starknet.common.syscalls.call_contract",
                "type": "alias"
            },
            "__main__.IRouter.library_call": {
                "destination": "starkware.starknet.common.syscalls.library_call",
                "type": "alias"
            },
            "__main__.IRouter.memcpy": {
                "destination": "starkware.cairo.common.memcpy.memcpy",
                "type": "alias"
            },
            "__main__.IRouter.swap_exact_tokens_for_tokens": {
                "decorators": [],
                "pc": 228,
                "type": "function"
            },
            "__main__.IRouter.swap_exact_tokens_for_tokens.Args": {
                "full_name": "__main__.IRouter.swap_exact_tokens_for_tokens.Args",
                "members": {
                    "amountIn": {
                        "cairo_type": "starkware.cairo.common.uint256.Uint256",
                        "offset": 1
                    },
                    "amountOutMin": {
                        "cairo_type": "starkware.cairo.common.uint256.Uint256",
                        "offset": 3
                    },
                    "contract_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "deadline": {
                        "cairo_type": "felt",
                        "offset": 8
                    },
                    "path": {
                        "cairo_type": "felt*",
                        "offset": 6
                    },
                    "path_len": {
                        "cairo_type": "felt",
                        "offset": 5
                    },
                    "to": {
                        "cairo_type": "felt",
                        "offset": 7
                    }
                },
                "size": 9,
                "type": "struct"
            },
            "__main__.IRouter.swap_exact_tokens_for_tokens.ImplicitArgs": {
                "full_name": "__main__.IRouter.swap_exact_tokens_for_tokens.ImplicitArgs",
                "members": {
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__.IRouter.swap_exact_tokens_for_tokens.Return": {
                "cairo_type": "(amounts_len: felt, amounts: starkware.cairo.common.uint256.Uint256*)",
                "type": "type_definition"
            },
            "__main__.IRouter.swap_exact_tokens_for_tokens.SIZEOF_LOCALS": {
                "type": "const",
                "value": 3
            },
            "__main__.IRouter.swap_exact_tokens_for_tokens.__calldata_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.IRouter.swap_exact_tokens_for_tokens.__calldata_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 18,
                            "offset": 6
                        },
                        "pc": 233,
                        "value": "[cast(fp, felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 18,
                            "offset": 6
                        },
                        "pc": 235,
                        "value": "cast([fp] + 2, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 18,
                            "offset": 6
                        },
                        "pc": 237,
                        "value": "cast([fp] + 4, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 18,
                            "offset": 6
                        },
                        "pc": 238,
                        "value": "cast([fp] + 5, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 18,
                            "offset": 7
                        },
                        "pc": 244,
                        "value": "[cast(fp + 2, felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 19,
                            "offset": 0
                        },
                        "pc": 251,
                        "value": "cast([fp + 2] + 1, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 19,
                            "offset": 0
                        },
                        "pc": 252,
                        "value": "cast([fp + 2] + 2, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__main__.IRouter.swap_exact_tokens_for_tokens.__calldata_ptr_copy": {
                "cairo_type": "felt*",
                "full_name": "__main__.IRouter.swap_exact_tokens_for_tokens.__calldata_ptr_copy",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 18,
                            "offset": 6
                        },
                        "pc": 241,
                        "value": "cast([fp] + 5, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__main__.IRouter.swap_exact_tokens_for_tokens.__calldata_tmp": {
                "cairo_type": "felt*",
                "full_name": "__main__.IRouter.swap_exact_tokens_for_tokens.__calldata_tmp",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 18,
                            "offset": 6
                        },
                        "pc": 233,
                        "value": "cast(fp + (-10), felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 18,
                            "offset": 6
                        },
                        "pc": 235,
                        "value": "cast(fp + (-8), felt*)"
                    }
                ],
                "type": "reference"
            },
            "__main__.IRouter.swap_exact_tokens_for_tokens.__return_value_actual_size": {
                "cairo_type": "felt",
                "full_name": "__main__.IRouter.swap_exact_tokens_for_tokens.__return_value_actual_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 19,
                            "offset": 17
                        },
                        "pc": 270,
                        "value": "cast([ap + (-1)] - [ap + (-6)], felt)"
                    }
                ],
                "type": "reference"
            },
            "__main__.IRouter.swap_exact_tokens_for_tokens.__return_value_arg_amounts": {
                "cairo_type": "starkware.cairo.common.uint256.Uint256*",
                "full_name": "__main__.IRouter.swap_exact_tokens_for_tokens.__return_value_arg_amounts",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 19,
                            "offset": 13
                        },
                        "pc": 264,
                        "value": "cast([ap + (-2)] + 1, starkware.cairo.common.uint256.Uint256*)"
                    }
                ],
                "type": "reference"
            },
            "__main__.IRouter.swap_exact_tokens_for_tokens.__return_value_arg_amounts_len": {
                "cairo_type": "felt",
                "full_name": "__main__.IRouter.swap_exact_tokens_for_tokens.__return_value_arg_amounts_len",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 19,
                            "offset": 12
                        },
                        "pc": 262,
                        "value": "[cast([ap + (-1)], felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IRouter.swap_exact_tokens_for_tokens.__return_value_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.IRouter.swap_exact_tokens_for_tokens.__return_value_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 19,
                            "offset": 12
                        },
                        "pc": 262,
                        "value": "[cast(ap + (-1), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 19,
                            "offset": 12
                        },
                        "pc": 262,
                        "value": "cast([ap + (-1)] + 1, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 19,
                            "offset": 17
                        },
                        "pc": 270,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IRouter.swap_exact_tokens_for_tokens.__temp22": {
                "cairo_type": "felt",
                "full_name": "__main__.IRouter.swap_exact_tokens_for_tokens.__temp22",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 18,
                            "offset": 7
                        },
                        "pc": 243,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IRouter.swap_exact_tokens_for_tokens.__temp23": {
                "cairo_type": "felt",
                "full_name": "__main__.IRouter.swap_exact_tokens_for_tokens.__temp23",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 19,
                            "offset": 1
                        },
                        "pc": 254,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IRouter.swap_exact_tokens_for_tokens.__temp24": {
                "cairo_type": "felt",
                "full_name": "__main__.IRouter.swap_exact_tokens_for_tokens.__temp24",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 19,
                            "offset": 13
                        },
                        "pc": 263,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IRouter.swap_exact_tokens_for_tokens.__temp25": {
                "cairo_type": "felt",
                "full_name": "__main__.IRouter.swap_exact_tokens_for_tokens.__temp25",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 19,
                            "offset": 14
                        },
                        "pc": 266,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IRouter.swap_exact_tokens_for_tokens.__temp26": {
                "cairo_type": "felt",
                "full_name": "__main__.IRouter.swap_exact_tokens_for_tokens.__temp26",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 19,
                            "offset": 15
                        },
                        "pc": 267,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IRouter.swap_exact_tokens_for_tokens.__temp27": {
                "cairo_type": "felt",
                "full_name": "__main__.IRouter.swap_exact_tokens_for_tokens.__temp27",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 19,
                            "offset": 16
                        },
                        "pc": 269,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IRouter.swap_exact_tokens_for_tokens.amountIn": {
                "cairo_type": "starkware.cairo.common.uint256.Uint256",
                "full_name": "__main__.IRouter.swap_exact_tokens_for_tokens.amountIn",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 18,
                            "offset": 0
                        },
                        "pc": 228,
                        "value": "[cast(fp + (-10), starkware.cairo.common.uint256.Uint256*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IRouter.swap_exact_tokens_for_tokens.amountOutMin": {
                "cairo_type": "starkware.cairo.common.uint256.Uint256",
                "full_name": "__main__.IRouter.swap_exact_tokens_for_tokens.amountOutMin",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 18,
                            "offset": 0
                        },
                        "pc": 228,
                        "value": "[cast(fp + (-8), starkware.cairo.common.uint256.Uint256*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IRouter.swap_exact_tokens_for_tokens.calldata_ptr_start": {
                "cairo_type": "felt*",
                "full_name": "__main__.IRouter.swap_exact_tokens_for_tokens.calldata_ptr_start",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 18,
                            "offset": 6
                        },
                        "pc": 232,
                        "value": "[cast(ap + (-1), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 18,
                            "offset": 6
                        },
                        "pc": 233,
                        "value": "[cast(fp, felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IRouter.swap_exact_tokens_for_tokens.contract_address": {
                "cairo_type": "felt",
                "full_name": "__main__.IRouter.swap_exact_tokens_for_tokens.contract_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 18,
                            "offset": 0
                        },
                        "pc": 228,
                        "value": "[cast(fp + (-11), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IRouter.swap_exact_tokens_for_tokens.deadline": {
                "cairo_type": "felt",
                "full_name": "__main__.IRouter.swap_exact_tokens_for_tokens.deadline",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 18,
                            "offset": 0
                        },
                        "pc": 228,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IRouter.swap_exact_tokens_for_tokens.path": {
                "cairo_type": "felt*",
                "full_name": "__main__.IRouter.swap_exact_tokens_for_tokens.path",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 18,
                            "offset": 0
                        },
                        "pc": 228,
                        "value": "[cast(fp + (-5), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IRouter.swap_exact_tokens_for_tokens.path_len": {
                "cairo_type": "felt",
                "full_name": "__main__.IRouter.swap_exact_tokens_for_tokens.path_len",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 18,
                            "offset": 0
                        },
                        "pc": 228,
                        "value": "[cast(fp + (-6), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IRouter.swap_exact_tokens_for_tokens.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.IRouter.swap_exact_tokens_for_tokens.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 18,
                            "offset": 0
                        },
                        "pc": 228,
                        "value": "[cast(fp + (-12), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 18,
                            "offset": 6
                        },
                        "pc": 241,
                        "value": "[cast(fp + 1, felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 19,
                            "offset": 13
                        },
                        "pc": 264,
                        "value": "cast([fp + 1] + 1, felt)"
                    }
                ],
                "type": "reference"
            },
            "__main__.IRouter.swap_exact_tokens_for_tokens.retdata": {
                "cairo_type": "felt*",
                "full_name": "__main__.IRouter.swap_exact_tokens_for_tokens.retdata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 19,
                            "offset": 12
                        },
                        "pc": 262,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IRouter.swap_exact_tokens_for_tokens.retdata_size": {
                "cairo_type": "felt",
                "full_name": "__main__.IRouter.swap_exact_tokens_for_tokens.retdata_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 19,
                            "offset": 12
                        },
                        "pc": 262,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IRouter.swap_exact_tokens_for_tokens.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.IRouter.swap_exact_tokens_for_tokens.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 18,
                            "offset": 0
                        },
                        "pc": 228,
                        "value": "[cast(fp + (-13), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 19,
                            "offset": 12
                        },
                        "pc": 262,
                        "value": "[cast(ap + (-3), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.IRouter.swap_exact_tokens_for_tokens.to": {
                "cairo_type": "felt",
                "full_name": "__main__.IRouter.swap_exact_tokens_for_tokens.to",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 18,
                            "offset": 0
                        },
                        "pc": 228,
                        "value": "[cast(fp + (-4), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.JEDI_ROUTER": {
                "type": "const",
                "value": 1238176885782598120369776599988227623713703144193463695957844450027561601381
            },
            "__main__.TOKEN_CLASS_HASH": {
                "type": "const",
                "value": 1693870178463306028930997718165579648148669587694959694357565082086695736000
            },
            "__main__.Uint256": {
                "destination": "starkware.cairo.common.uint256.Uint256",
                "type": "alias"
            },
            "__main__.alloc": {
                "destination": "starkware.cairo.common.alloc.alloc",
                "type": "alias"
            },
            "__main__.assert_nn": {
                "destination": "starkware.cairo.common.math.assert_nn",
                "type": "alias"
            },
            "__main__.assert_not_zero": {
                "destination": "starkware.cairo.common.math.assert_not_zero",
                "type": "alias"
            },
            "__main__.balance": {
                "type": "namespace"
            },
            "__main__.balance.Args": {
                "full_name": "__main__.balance.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.balance.HashBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
                "type": "alias"
            },
            "__main__.balance.ImplicitArgs": {
                "full_name": "__main__.balance.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.balance.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.balance.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.balance.addr": {
                "decorators": [],
                "pc": 977,
                "type": "function"
            },
            "__main__.balance.addr.Args": {
                "full_name": "__main__.balance.addr.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.balance.addr.ImplicitArgs": {
                "full_name": "__main__.balance.addr.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 0
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__.balance.addr.Return": {
                "cairo_type": "(res: felt)",
                "type": "type_definition"
            },
            "__main__.balance.addr.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.balance.addr.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.balance.addr.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 65,
                            "offset": 0
                        },
                        "pc": 977,
                        "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.balance.addr.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.balance.addr.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 65,
                            "offset": 0
                        },
                        "pc": 977,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.balance.addr.res": {
                "cairo_type": "felt",
                "full_name": "__main__.balance.addr.res",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 65,
                            "offset": 0
                        },
                        "pc": 977,
                        "value": "cast(916907772491729262376534102982219947830828984996257231353398618781993312401, felt)"
                    }
                ],
                "type": "reference"
            },
            "__main__.balance.hash2": {
                "destination": "starkware.cairo.common.hash.hash2",
                "type": "alias"
            },
            "__main__.balance.normalize_address": {
                "destination": "starkware.starknet.common.storage.normalize_address",
                "type": "alias"
            },
            "__main__.balance.read": {
                "decorators": [],
                "pc": 982,
                "type": "function"
            },
            "__main__.balance.read.Args": {
                "full_name": "__main__.balance.read.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.balance.read.ImplicitArgs": {
                "full_name": "__main__.balance.read.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.balance.read.Return": {
                "cairo_type": "(res: felt)",
                "type": "type_definition"
            },
            "__main__.balance.read.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.balance.read.__storage_var_temp0": {
                "cairo_type": "felt",
                "full_name": "__main__.balance.read.__storage_var_temp0",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 66,
                            "offset": 14
                        },
                        "pc": 990,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 66,
                            "offset": 18
                        },
                        "pc": 994,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.balance.read.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.balance.read.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 66,
                            "offset": 0
                        },
                        "pc": 982,
                        "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 66,
                            "offset": 7
                        },
                        "pc": 986,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 66,
                            "offset": 16
                        },
                        "pc": 992,
                        "value": "[cast(ap + (-1), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.balance.read.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.balance.read.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 66,
                            "offset": 0
                        },
                        "pc": 982,
                        "value": "[cast(fp + (-3), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 66,
                            "offset": 7
                        },
                        "pc": 986,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 66,
                            "offset": 17
                        },
                        "pc": 993,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.balance.read.storage_addr": {
                "cairo_type": "felt",
                "full_name": "__main__.balance.read.storage_addr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 66,
                            "offset": 7
                        },
                        "pc": 986,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.balance.read.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.balance.read.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 66,
                            "offset": 0
                        },
                        "pc": 982,
                        "value": "[cast(fp + (-5), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 66,
                            "offset": 14
                        },
                        "pc": 990,
                        "value": "[cast(ap + (-2), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 66,
                            "offset": 15
                        },
                        "pc": 991,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.balance.storage_read": {
                "destination": "starkware.starknet.common.syscalls.storage_read",
                "type": "alias"
            },
            "__main__.balance.storage_write": {
                "destination": "starkware.starknet.common.syscalls.storage_write",
                "type": "alias"
            },
            "__main__.balance.write": {
                "decorators": [],
                "pc": 995,
                "type": "function"
            },
            "__main__.balance.write.Args": {
                "full_name": "__main__.balance.write.Args",
                "members": {
                    "value": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "__main__.balance.write.ImplicitArgs": {
                "full_name": "__main__.balance.write.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.balance.write.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.balance.write.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.balance.write.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.balance.write.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 67,
                            "offset": 0
                        },
                        "pc": 995,
                        "value": "[cast(fp + (-5), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 67,
                            "offset": 7
                        },
                        "pc": 999,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.balance.write.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.balance.write.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 67,
                            "offset": 0
                        },
                        "pc": 995,
                        "value": "[cast(fp + (-4), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 67,
                            "offset": 7
                        },
                        "pc": 999,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.balance.write.storage_addr": {
                "cairo_type": "felt",
                "full_name": "__main__.balance.write.storage_addr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 67,
                            "offset": 7
                        },
                        "pc": 999,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.balance.write.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.balance.write.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 67,
                            "offset": 0
                        },
                        "pc": 995,
                        "value": "[cast(fp + (-6), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 67,
                            "offset": 14
                        },
                        "pc": 1004,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.balance.write.value": {
                "cairo_type": "felt",
                "full_name": "__main__.balance.write.value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 67,
                            "offset": 0
                        },
                        "pc": 995,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_event_count": {
                "type": "namespace"
            },
            "__main__.bridge_back_event_count.Args": {
                "full_name": "__main__.bridge_back_event_count.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.bridge_back_event_count.HashBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
                "type": "alias"
            },
            "__main__.bridge_back_event_count.ImplicitArgs": {
                "full_name": "__main__.bridge_back_event_count.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.bridge_back_event_count.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.bridge_back_event_count.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.bridge_back_event_count.addr": {
                "decorators": [],
                "pc": 863,
                "type": "function"
            },
            "__main__.bridge_back_event_count.addr.Args": {
                "full_name": "__main__.bridge_back_event_count.addr.Args",
                "members": {
                    "l1_token_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "l2_token_address": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "owner": {
                        "cairo_type": "felt",
                        "offset": 2
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.bridge_back_event_count.addr.ImplicitArgs": {
                "full_name": "__main__.bridge_back_event_count.addr.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 0
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__.bridge_back_event_count.addr.Return": {
                "cairo_type": "(res: felt)",
                "type": "type_definition"
            },
            "__main__.bridge_back_event_count.addr.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.bridge_back_event_count.addr.l1_token_address": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_back_event_count.addr.l1_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 57,
                            "offset": 0
                        },
                        "pc": 863,
                        "value": "[cast(fp + (-5), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_event_count.addr.l2_token_address": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_back_event_count.addr.l2_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 57,
                            "offset": 0
                        },
                        "pc": 863,
                        "value": "[cast(fp + (-4), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_event_count.addr.owner": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_back_event_count.addr.owner",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 57,
                            "offset": 0
                        },
                        "pc": 863,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_event_count.addr.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.bridge_back_event_count.addr.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 57,
                            "offset": 0
                        },
                        "pc": 863,
                        "value": "[cast(fp + (-7), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 57,
                            "offset": 7
                        },
                        "pc": 869,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 57,
                            "offset": 12
                        },
                        "pc": 872,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 57,
                            "offset": 17
                        },
                        "pc": 875,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_event_count.addr.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_back_event_count.addr.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 57,
                            "offset": 0
                        },
                        "pc": 863,
                        "value": "[cast(fp + (-6), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 57,
                            "offset": 46
                        },
                        "pc": 879,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_event_count.addr.res": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_back_event_count.addr.res",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 57,
                            "offset": 0
                        },
                        "pc": 863,
                        "value": "cast(1601627122356855500567408145622483635210432194063125420868443695857928031013, felt)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 57,
                            "offset": 7
                        },
                        "pc": 869,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 57,
                            "offset": 12
                        },
                        "pc": 872,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 57,
                            "offset": 17
                        },
                        "pc": 875,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 57,
                            "offset": 46
                        },
                        "pc": 879,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_event_count.hash2": {
                "destination": "starkware.cairo.common.hash.hash2",
                "type": "alias"
            },
            "__main__.bridge_back_event_count.normalize_address": {
                "destination": "starkware.starknet.common.storage.normalize_address",
                "type": "alias"
            },
            "__main__.bridge_back_event_count.read": {
                "decorators": [],
                "pc": 883,
                "type": "function"
            },
            "__main__.bridge_back_event_count.read.Args": {
                "full_name": "__main__.bridge_back_event_count.read.Args",
                "members": {
                    "l1_token_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "l2_token_address": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "owner": {
                        "cairo_type": "felt",
                        "offset": 2
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.bridge_back_event_count.read.ImplicitArgs": {
                "full_name": "__main__.bridge_back_event_count.read.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.bridge_back_event_count.read.Return": {
                "cairo_type": "(count: felt)",
                "type": "type_definition"
            },
            "__main__.bridge_back_event_count.read.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.bridge_back_event_count.read.__storage_var_temp0": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_back_event_count.read.__storage_var_temp0",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 58,
                            "offset": 63
                        },
                        "pc": 894,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 58,
                            "offset": 67
                        },
                        "pc": 898,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_event_count.read.l1_token_address": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_back_event_count.read.l1_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 58,
                            "offset": 0
                        },
                        "pc": 883,
                        "value": "[cast(fp + (-5), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_event_count.read.l2_token_address": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_back_event_count.read.l2_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 58,
                            "offset": 0
                        },
                        "pc": 883,
                        "value": "[cast(fp + (-4), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_event_count.read.owner": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_back_event_count.read.owner",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 58,
                            "offset": 0
                        },
                        "pc": 883,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_event_count.read.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.bridge_back_event_count.read.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 58,
                            "offset": 0
                        },
                        "pc": 883,
                        "value": "[cast(fp + (-7), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 58,
                            "offset": 56
                        },
                        "pc": 890,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 58,
                            "offset": 65
                        },
                        "pc": 896,
                        "value": "[cast(ap + (-1), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_event_count.read.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_back_event_count.read.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 58,
                            "offset": 0
                        },
                        "pc": 883,
                        "value": "[cast(fp + (-6), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 58,
                            "offset": 56
                        },
                        "pc": 890,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 58,
                            "offset": 66
                        },
                        "pc": 897,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_event_count.read.storage_addr": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_back_event_count.read.storage_addr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 58,
                            "offset": 56
                        },
                        "pc": 890,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_event_count.read.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.bridge_back_event_count.read.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 58,
                            "offset": 0
                        },
                        "pc": 883,
                        "value": "[cast(fp + (-8), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 58,
                            "offset": 63
                        },
                        "pc": 894,
                        "value": "[cast(ap + (-2), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 58,
                            "offset": 64
                        },
                        "pc": 895,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_event_count.storage_read": {
                "destination": "starkware.starknet.common.syscalls.storage_read",
                "type": "alias"
            },
            "__main__.bridge_back_event_count.storage_write": {
                "destination": "starkware.starknet.common.syscalls.storage_write",
                "type": "alias"
            },
            "__main__.bridge_back_events": {
                "type": "namespace"
            },
            "__main__.bridge_back_events.Args": {
                "full_name": "__main__.bridge_back_events.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.bridge_back_events.HashBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
                "type": "alias"
            },
            "__main__.bridge_back_events.ImplicitArgs": {
                "full_name": "__main__.bridge_back_events.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.bridge_back_events.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.bridge_back_events.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.bridge_back_events.addr": {
                "decorators": [],
                "pc": 823,
                "type": "function"
            },
            "__main__.bridge_back_events.addr.Args": {
                "full_name": "__main__.bridge_back_events.addr.Args",
                "members": {
                    "index": {
                        "cairo_type": "felt",
                        "offset": 3
                    },
                    "l1_token_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "l2_token_address": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "owner": {
                        "cairo_type": "felt",
                        "offset": 2
                    }
                },
                "size": 4,
                "type": "struct"
            },
            "__main__.bridge_back_events.addr.ImplicitArgs": {
                "full_name": "__main__.bridge_back_events.addr.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 0
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__.bridge_back_events.addr.Return": {
                "cairo_type": "(res: felt)",
                "type": "type_definition"
            },
            "__main__.bridge_back_events.addr.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.bridge_back_events.addr.index": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_back_events.addr.index",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 55,
                            "offset": 0
                        },
                        "pc": 823,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_events.addr.l1_token_address": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_back_events.addr.l1_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 55,
                            "offset": 0
                        },
                        "pc": 823,
                        "value": "[cast(fp + (-6), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_events.addr.l2_token_address": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_back_events.addr.l2_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 55,
                            "offset": 0
                        },
                        "pc": 823,
                        "value": "[cast(fp + (-5), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_events.addr.owner": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_back_events.addr.owner",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 55,
                            "offset": 0
                        },
                        "pc": 823,
                        "value": "[cast(fp + (-4), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_events.addr.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.bridge_back_events.addr.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 55,
                            "offset": 0
                        },
                        "pc": 823,
                        "value": "[cast(fp + (-8), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 55,
                            "offset": 7
                        },
                        "pc": 829,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 55,
                            "offset": 12
                        },
                        "pc": 832,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 55,
                            "offset": 17
                        },
                        "pc": 835,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 55,
                            "offset": 22
                        },
                        "pc": 838,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_events.addr.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_back_events.addr.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 55,
                            "offset": 0
                        },
                        "pc": 823,
                        "value": "[cast(fp + (-7), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 55,
                            "offset": 51
                        },
                        "pc": 842,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_events.addr.res": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_back_events.addr.res",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 55,
                            "offset": 0
                        },
                        "pc": 823,
                        "value": "cast(1703337928732926013422388042401403282071428068030303994029338909014220589525, felt)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 55,
                            "offset": 7
                        },
                        "pc": 829,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 55,
                            "offset": 12
                        },
                        "pc": 832,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 55,
                            "offset": 17
                        },
                        "pc": 835,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 55,
                            "offset": 22
                        },
                        "pc": 838,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 55,
                            "offset": 51
                        },
                        "pc": 842,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_events.hash2": {
                "destination": "starkware.cairo.common.hash.hash2",
                "type": "alias"
            },
            "__main__.bridge_back_events.normalize_address": {
                "destination": "starkware.starknet.common.storage.normalize_address",
                "type": "alias"
            },
            "__main__.bridge_back_events.read": {
                "decorators": [],
                "pc": 846,
                "type": "function"
            },
            "__main__.bridge_back_events.read.Args": {
                "full_name": "__main__.bridge_back_events.read.Args",
                "members": {
                    "index": {
                        "cairo_type": "felt",
                        "offset": 3
                    },
                    "l1_token_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "l2_token_address": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "owner": {
                        "cairo_type": "felt",
                        "offset": 2
                    }
                },
                "size": 4,
                "type": "struct"
            },
            "__main__.bridge_back_events.read.ImplicitArgs": {
                "full_name": "__main__.bridge_back_events.read.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.bridge_back_events.read.Return": {
                "cairo_type": "(token_id: felt)",
                "type": "type_definition"
            },
            "__main__.bridge_back_events.read.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.bridge_back_events.read.__storage_var_temp0": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_back_events.read.__storage_var_temp0",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 56,
                            "offset": 69
                        },
                        "pc": 858,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 56,
                            "offset": 73
                        },
                        "pc": 862,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_events.read.index": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_back_events.read.index",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 56,
                            "offset": 0
                        },
                        "pc": 846,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_events.read.l1_token_address": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_back_events.read.l1_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 56,
                            "offset": 0
                        },
                        "pc": 846,
                        "value": "[cast(fp + (-6), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_events.read.l2_token_address": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_back_events.read.l2_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 56,
                            "offset": 0
                        },
                        "pc": 846,
                        "value": "[cast(fp + (-5), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_events.read.owner": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_back_events.read.owner",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 56,
                            "offset": 0
                        },
                        "pc": 846,
                        "value": "[cast(fp + (-4), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_events.read.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.bridge_back_events.read.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 56,
                            "offset": 0
                        },
                        "pc": 846,
                        "value": "[cast(fp + (-8), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 56,
                            "offset": 62
                        },
                        "pc": 854,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 56,
                            "offset": 71
                        },
                        "pc": 860,
                        "value": "[cast(ap + (-1), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_events.read.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_back_events.read.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 56,
                            "offset": 0
                        },
                        "pc": 846,
                        "value": "[cast(fp + (-7), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 56,
                            "offset": 62
                        },
                        "pc": 854,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 56,
                            "offset": 72
                        },
                        "pc": 861,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_events.read.storage_addr": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_back_events.read.storage_addr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 56,
                            "offset": 62
                        },
                        "pc": 854,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_events.read.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.bridge_back_events.read.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 56,
                            "offset": 0
                        },
                        "pc": 846,
                        "value": "[cast(fp + (-9), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 56,
                            "offset": 69
                        },
                        "pc": 858,
                        "value": "[cast(ap + (-2), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 56,
                            "offset": 70
                        },
                        "pc": 859,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_back_events.storage_read": {
                "destination": "starkware.starknet.common.syscalls.storage_read",
                "type": "alias"
            },
            "__main__.bridge_back_events.storage_write": {
                "destination": "starkware.starknet.common.syscalls.storage_write",
                "type": "alias"
            },
            "__main__.bridge_debug": {
                "decorators": [
                    "external"
                ],
                "pc": 730,
                "type": "function"
            },
            "__main__.bridge_debug.Args": {
                "full_name": "__main__.bridge_debug.Args",
                "members": {
                    "_floor_price": {
                        "cairo_type": "starkware.cairo.common.uint256.Uint256",
                        "offset": 4
                    },
                    "_l1_token_address": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "_owner": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "_require_token_address": {
                        "cairo_type": "felt",
                        "offset": 6
                    },
                    "_token_id": {
                        "cairo_type": "felt",
                        "offset": 3
                    },
                    "from_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 7,
                "type": "struct"
            },
            "__main__.bridge_debug.ImplicitArgs": {
                "full_name": "__main__.bridge_debug.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.bridge_debug.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.bridge_debug.SIZEOF_LOCALS": {
                "type": "const",
                "value": 2
            },
            "__main__.bridge_debug.__temp36": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_debug.__temp36",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 201
                        },
                        "pc": 768,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_debug._floor_price": {
                "cairo_type": "starkware.cairo.common.uint256.Uint256",
                "full_name": "__main__.bridge_debug._floor_price",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 0
                        },
                        "pc": 730,
                        "value": "[cast(fp + (-5), starkware.cairo.common.uint256.Uint256*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_debug._l1_token_address": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_debug._l1_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 0
                        },
                        "pc": 730,
                        "value": "[cast(fp + (-7), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_debug._owner": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_debug._owner",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 0
                        },
                        "pc": 730,
                        "value": "[cast(fp + (-8), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_debug._require_token_address": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_debug._require_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 0
                        },
                        "pc": 730,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_debug._token_id": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_debug._token_id",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 0
                        },
                        "pc": 730,
                        "value": "[cast(fp + (-6), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_debug.currentCustody": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_debug.currentCustody",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 93
                        },
                        "pc": 744,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_debug.deadline": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_debug.deadline",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 166
                        },
                        "pc": 757,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_debug.from_address": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_debug.from_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 0
                        },
                        "pc": 730,
                        "value": "[cast(fp + (-9), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_debug.path": {
                "cairo_type": "felt*",
                "full_name": "__main__.bridge_debug.path",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 200
                        },
                        "pc": 765,
                        "value": "[cast(ap + (-1), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 200
                        },
                        "pc": 766,
                        "value": "[cast(fp + 1, felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_debug.path_len": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_debug.path_len",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 201
                        },
                        "pc": 770,
                        "value": "cast(2, felt)"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_debug.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.bridge_debug.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 0
                        },
                        "pc": 730,
                        "value": "[cast(fp + (-11), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 24
                        },
                        "pc": 737,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 92
                        },
                        "pc": 744,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 159
                        },
                        "pc": 754,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 196
                        },
                        "pc": 762,
                        "value": "[cast(ap + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 25
                        },
                        "pc": 737,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 93
                        },
                        "pc": 744,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 160
                        },
                        "pc": 754,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 197
                        },
                        "pc": 762,
                        "value": "[cast(ap + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 197
                        },
                        "pc": 763,
                        "value": "[cast(fp, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_debug.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_debug.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 0
                        },
                        "pc": 730,
                        "value": "[cast(fp + (-10), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 24
                        },
                        "pc": 737,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 92
                        },
                        "pc": 744,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 159
                        },
                        "pc": 754,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 196
                        },
                        "pc": 762,
                        "value": "[cast(ap + (-3), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 228
                        },
                        "pc": 779,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 52,
                            "offset": 0
                        },
                        "pc": 794,
                        "value": "[cast(ap + (-3), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 25
                        },
                        "pc": 737,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 93
                        },
                        "pc": 744,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 160
                        },
                        "pc": 754,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 197
                        },
                        "pc": 762,
                        "value": "[cast(ap + (-3), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 229
                        },
                        "pc": 780,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 52,
                            "offset": 0
                        },
                        "pc": 795,
                        "value": "[cast(ap + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_debug.res": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_debug.res",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 25
                        },
                        "pc": 737,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_debug.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.bridge_debug.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 0
                        },
                        "pc": 730,
                        "value": "[cast(fp + (-12), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 24
                        },
                        "pc": 737,
                        "value": "[cast(ap + (-4), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 92
                        },
                        "pc": 744,
                        "value": "[cast(ap + (-4), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 159
                        },
                        "pc": 754,
                        "value": "[cast(ap + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 165
                        },
                        "pc": 757,
                        "value": "[cast(ap + (-2), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 196
                        },
                        "pc": 762,
                        "value": "[cast(ap + (-5), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 228
                        },
                        "pc": 779,
                        "value": "[cast(ap + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 52,
                            "offset": 0
                        },
                        "pc": 794,
                        "value": "[cast(ap + (-4), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 25
                        },
                        "pc": 737,
                        "value": "[cast(ap + (-4), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 93
                        },
                        "pc": 744,
                        "value": "[cast(ap + (-4), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 160
                        },
                        "pc": 754,
                        "value": "[cast(ap + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 166
                        },
                        "pc": 757,
                        "value": "[cast(ap + (-2), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 197
                        },
                        "pc": 762,
                        "value": "[cast(ap + (-5), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 229
                        },
                        "pc": 780,
                        "value": "[cast(ap + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 52,
                            "offset": 0
                        },
                        "pc": 795,
                        "value": "[cast(ap + (-4), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_debug.zer": {
                "cairo_type": "starkware.cairo.common.uint256.Uint256",
                "full_name": "__main__.bridge_debug.zer",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 51,
                            "offset": 197
                        },
                        "pc": 762,
                        "value": "[cast(ap + (-2), starkware.cairo.common.uint256.Uint256*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_from_mainnet": {
                "decorators": [
                    "l1_handler"
                ],
                "pc": 637,
                "type": "function"
            },
            "__main__.bridge_from_mainnet.Args": {
                "full_name": "__main__.bridge_from_mainnet.Args",
                "members": {
                    "_floor_price": {
                        "cairo_type": "starkware.cairo.common.uint256.Uint256",
                        "offset": 4
                    },
                    "_l1_token_address": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "_owner": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "_require_token_address": {
                        "cairo_type": "felt",
                        "offset": 6
                    },
                    "_token_id": {
                        "cairo_type": "felt",
                        "offset": 3
                    },
                    "from_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 7,
                "type": "struct"
            },
            "__main__.bridge_from_mainnet.ImplicitArgs": {
                "full_name": "__main__.bridge_from_mainnet.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.bridge_from_mainnet.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.bridge_from_mainnet.SIZEOF_LOCALS": {
                "type": "const",
                "value": 2
            },
            "__main__.bridge_from_mainnet.__temp34": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_from_mainnet.__temp34",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 201
                        },
                        "pc": 675,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_from_mainnet._floor_price": {
                "cairo_type": "starkware.cairo.common.uint256.Uint256",
                "full_name": "__main__.bridge_from_mainnet._floor_price",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 0
                        },
                        "pc": 637,
                        "value": "[cast(fp + (-5), starkware.cairo.common.uint256.Uint256*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_from_mainnet._l1_token_address": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_from_mainnet._l1_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 0
                        },
                        "pc": 637,
                        "value": "[cast(fp + (-7), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_from_mainnet._owner": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_from_mainnet._owner",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 0
                        },
                        "pc": 637,
                        "value": "[cast(fp + (-8), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_from_mainnet._require_token_address": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_from_mainnet._require_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 0
                        },
                        "pc": 637,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_from_mainnet._token_id": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_from_mainnet._token_id",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 0
                        },
                        "pc": 637,
                        "value": "[cast(fp + (-6), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_from_mainnet.currentCustody": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_from_mainnet.currentCustody",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 93
                        },
                        "pc": 651,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_from_mainnet.deadline": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_from_mainnet.deadline",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 166
                        },
                        "pc": 664,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_from_mainnet.from_address": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_from_mainnet.from_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 0
                        },
                        "pc": 637,
                        "value": "[cast(fp + (-9), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_from_mainnet.path": {
                "cairo_type": "felt*",
                "full_name": "__main__.bridge_from_mainnet.path",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 200
                        },
                        "pc": 672,
                        "value": "[cast(ap + (-1), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 200
                        },
                        "pc": 673,
                        "value": "[cast(fp + 1, felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_from_mainnet.path_len": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_from_mainnet.path_len",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 201
                        },
                        "pc": 677,
                        "value": "cast(2, felt)"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_from_mainnet.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.bridge_from_mainnet.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 0
                        },
                        "pc": 637,
                        "value": "[cast(fp + (-11), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 24
                        },
                        "pc": 644,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 92
                        },
                        "pc": 651,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 159
                        },
                        "pc": 661,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 196
                        },
                        "pc": 669,
                        "value": "[cast(ap + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 25
                        },
                        "pc": 644,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 93
                        },
                        "pc": 651,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 160
                        },
                        "pc": 661,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 197
                        },
                        "pc": 669,
                        "value": "[cast(ap + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 197
                        },
                        "pc": 670,
                        "value": "[cast(fp, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_from_mainnet.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_from_mainnet.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 0
                        },
                        "pc": 637,
                        "value": "[cast(fp + (-10), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 24
                        },
                        "pc": 644,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 92
                        },
                        "pc": 651,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 159
                        },
                        "pc": 661,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 196
                        },
                        "pc": 669,
                        "value": "[cast(ap + (-3), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 228
                        },
                        "pc": 686,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 48,
                            "offset": 0
                        },
                        "pc": 701,
                        "value": "[cast(ap + (-3), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 25
                        },
                        "pc": 644,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 93
                        },
                        "pc": 651,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 160
                        },
                        "pc": 661,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 197
                        },
                        "pc": 669,
                        "value": "[cast(ap + (-3), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 229
                        },
                        "pc": 687,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 48,
                            "offset": 0
                        },
                        "pc": 702,
                        "value": "[cast(ap + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_from_mainnet.res": {
                "cairo_type": "felt",
                "full_name": "__main__.bridge_from_mainnet.res",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 25
                        },
                        "pc": 644,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_from_mainnet.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.bridge_from_mainnet.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 0
                        },
                        "pc": 637,
                        "value": "[cast(fp + (-12), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 24
                        },
                        "pc": 644,
                        "value": "[cast(ap + (-4), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 92
                        },
                        "pc": 651,
                        "value": "[cast(ap + (-4), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 159
                        },
                        "pc": 661,
                        "value": "[cast(ap + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 165
                        },
                        "pc": 664,
                        "value": "[cast(ap + (-2), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 196
                        },
                        "pc": 669,
                        "value": "[cast(ap + (-5), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 228
                        },
                        "pc": 686,
                        "value": "[cast(ap + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 48,
                            "offset": 0
                        },
                        "pc": 701,
                        "value": "[cast(ap + (-4), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 25
                        },
                        "pc": 644,
                        "value": "[cast(ap + (-4), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 93
                        },
                        "pc": 651,
                        "value": "[cast(ap + (-4), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 160
                        },
                        "pc": 661,
                        "value": "[cast(ap + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 166
                        },
                        "pc": 664,
                        "value": "[cast(ap + (-2), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 197
                        },
                        "pc": 669,
                        "value": "[cast(ap + (-5), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 229
                        },
                        "pc": 687,
                        "value": "[cast(ap + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 48,
                            "offset": 0
                        },
                        "pc": 702,
                        "value": "[cast(ap + (-4), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.bridge_from_mainnet.zer": {
                "cairo_type": "starkware.cairo.common.uint256.Uint256",
                "full_name": "__main__.bridge_from_mainnet.zer",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 197
                        },
                        "pc": 669,
                        "value": "[cast(ap + (-2), starkware.cairo.common.uint256.Uint256*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.collateral_data": {
                "type": "namespace"
            },
            "__main__.collateral_data.Args": {
                "full_name": "__main__.collateral_data.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.collateral_data.HashBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
                "type": "alias"
            },
            "__main__.collateral_data.ImplicitArgs": {
                "full_name": "__main__.collateral_data.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.collateral_data.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.collateral_data.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.collateral_data.addr": {
                "decorators": [],
                "pc": 484,
                "type": "function"
            },
            "__main__.collateral_data.addr.Args": {
                "full_name": "__main__.collateral_data.addr.Args",
                "members": {
                    "l1_token_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "token_id": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__.collateral_data.addr.ImplicitArgs": {
                "full_name": "__main__.collateral_data.addr.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 0
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__.collateral_data.addr.Return": {
                "cairo_type": "(res: felt)",
                "type": "type_definition"
            },
            "__main__.collateral_data.addr.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.collateral_data.addr.l1_token_address": {
                "cairo_type": "felt",
                "full_name": "__main__.collateral_data.addr.l1_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 39,
                            "offset": 0
                        },
                        "pc": 484,
                        "value": "[cast(fp + (-4), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.collateral_data.addr.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.collateral_data.addr.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 39,
                            "offset": 0
                        },
                        "pc": 484,
                        "value": "[cast(fp + (-6), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 39,
                            "offset": 7
                        },
                        "pc": 490,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 39,
                            "offset": 12
                        },
                        "pc": 493,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.collateral_data.addr.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.collateral_data.addr.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 39,
                            "offset": 0
                        },
                        "pc": 484,
                        "value": "[cast(fp + (-5), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 39,
                            "offset": 41
                        },
                        "pc": 497,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.collateral_data.addr.res": {
                "cairo_type": "felt",
                "full_name": "__main__.collateral_data.addr.res",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 39,
                            "offset": 0
                        },
                        "pc": 484,
                        "value": "cast(1006978842930668203305098225454879015601707976994998111885550825801221163003, felt)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 39,
                            "offset": 7
                        },
                        "pc": 490,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 39,
                            "offset": 12
                        },
                        "pc": 493,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 39,
                            "offset": 41
                        },
                        "pc": 497,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.collateral_data.addr.token_id": {
                "cairo_type": "felt",
                "full_name": "__main__.collateral_data.addr.token_id",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 39,
                            "offset": 0
                        },
                        "pc": 484,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.collateral_data.hash2": {
                "destination": "starkware.cairo.common.hash.hash2",
                "type": "alias"
            },
            "__main__.collateral_data.normalize_address": {
                "destination": "starkware.starknet.common.storage.normalize_address",
                "type": "alias"
            },
            "__main__.collateral_data.read": {
                "decorators": [],
                "pc": 501,
                "type": "function"
            },
            "__main__.collateral_data.read.Args": {
                "full_name": "__main__.collateral_data.read.Args",
                "members": {
                    "l1_token_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "token_id": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__.collateral_data.read.ImplicitArgs": {
                "full_name": "__main__.collateral_data.read.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.collateral_data.read.Return": {
                "cairo_type": "(res: felt)",
                "type": "type_definition"
            },
            "__main__.collateral_data.read.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.collateral_data.read.__storage_var_temp0": {
                "cairo_type": "felt",
                "full_name": "__main__.collateral_data.read.__storage_var_temp0",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 40,
                            "offset": 57
                        },
                        "pc": 511,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 40,
                            "offset": 61
                        },
                        "pc": 515,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.collateral_data.read.l1_token_address": {
                "cairo_type": "felt",
                "full_name": "__main__.collateral_data.read.l1_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 40,
                            "offset": 0
                        },
                        "pc": 501,
                        "value": "[cast(fp + (-4), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.collateral_data.read.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.collateral_data.read.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 40,
                            "offset": 0
                        },
                        "pc": 501,
                        "value": "[cast(fp + (-6), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 40,
                            "offset": 50
                        },
                        "pc": 507,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 40,
                            "offset": 59
                        },
                        "pc": 513,
                        "value": "[cast(ap + (-1), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.collateral_data.read.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.collateral_data.read.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 40,
                            "offset": 0
                        },
                        "pc": 501,
                        "value": "[cast(fp + (-5), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 40,
                            "offset": 50
                        },
                        "pc": 507,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 40,
                            "offset": 60
                        },
                        "pc": 514,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.collateral_data.read.storage_addr": {
                "cairo_type": "felt",
                "full_name": "__main__.collateral_data.read.storage_addr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 40,
                            "offset": 50
                        },
                        "pc": 507,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.collateral_data.read.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.collateral_data.read.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 40,
                            "offset": 0
                        },
                        "pc": 501,
                        "value": "[cast(fp + (-7), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 40,
                            "offset": 57
                        },
                        "pc": 511,
                        "value": "[cast(ap + (-2), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 40,
                            "offset": 58
                        },
                        "pc": 512,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.collateral_data.read.token_id": {
                "cairo_type": "felt",
                "full_name": "__main__.collateral_data.read.token_id",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 40,
                            "offset": 0
                        },
                        "pc": 501,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.collateral_data.storage_read": {
                "destination": "starkware.starknet.common.syscalls.storage_read",
                "type": "alias"
            },
            "__main__.collateral_data.storage_write": {
                "destination": "starkware.starknet.common.syscalls.storage_write",
                "type": "alias"
            },
            "__main__.collateral_data.write": {
                "decorators": [],
                "pc": 516,
                "type": "function"
            },
            "__main__.collateral_data.write.Args": {
                "full_name": "__main__.collateral_data.write.Args",
                "members": {
                    "l1_token_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "token_id": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "value": {
                        "cairo_type": "felt",
                        "offset": 2
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.collateral_data.write.ImplicitArgs": {
                "full_name": "__main__.collateral_data.write.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.collateral_data.write.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.collateral_data.write.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.collateral_data.write.l1_token_address": {
                "cairo_type": "felt",
                "full_name": "__main__.collateral_data.write.l1_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 41,
                            "offset": 0
                        },
                        "pc": 516,
                        "value": "[cast(fp + (-5), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.collateral_data.write.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.collateral_data.write.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 41,
                            "offset": 0
                        },
                        "pc": 516,
                        "value": "[cast(fp + (-7), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 41,
                            "offset": 50
                        },
                        "pc": 522,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.collateral_data.write.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.collateral_data.write.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 41,
                            "offset": 0
                        },
                        "pc": 516,
                        "value": "[cast(fp + (-6), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 41,
                            "offset": 50
                        },
                        "pc": 522,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.collateral_data.write.storage_addr": {
                "cairo_type": "felt",
                "full_name": "__main__.collateral_data.write.storage_addr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 41,
                            "offset": 50
                        },
                        "pc": 522,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.collateral_data.write.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.collateral_data.write.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 41,
                            "offset": 0
                        },
                        "pc": 516,
                        "value": "[cast(fp + (-8), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 41,
                            "offset": 57
                        },
                        "pc": 527,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.collateral_data.write.token_id": {
                "cairo_type": "felt",
                "full_name": "__main__.collateral_data.write.token_id",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 41,
                            "offset": 0
                        },
                        "pc": 516,
                        "value": "[cast(fp + (-4), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.collateral_data.write.value": {
                "cairo_type": "felt",
                "full_name": "__main__.collateral_data.write.value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 41,
                            "offset": 0
                        },
                        "pc": 516,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.constructor": {
                "decorators": [
                    "constructor"
                ],
                "pc": 1123,
                "type": "function"
            },
            "__main__.constructor.Args": {
                "full_name": "__main__.constructor.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.constructor.ImplicitArgs": {
                "full_name": "__main__.constructor.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.constructor.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.constructor.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.constructor.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.constructor.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 75,
                            "offset": 0
                        },
                        "pc": 1123,
                        "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 75,
                            "offset": 22
                        },
                        "pc": 1130,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.constructor.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.constructor.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 75,
                            "offset": 0
                        },
                        "pc": 1123,
                        "value": "[cast(fp + (-3), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 75,
                            "offset": 22
                        },
                        "pc": 1130,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.constructor.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.constructor.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 75,
                            "offset": 0
                        },
                        "pc": 1123,
                        "value": "[cast(fp + (-5), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 75,
                            "offset": 22
                        },
                        "pc": 1130,
                        "value": "[cast(ap + (-3), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.custody": {
                "type": "namespace"
            },
            "__main__.custody.Args": {
                "full_name": "__main__.custody.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.custody.HashBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
                "type": "alias"
            },
            "__main__.custody.ImplicitArgs": {
                "full_name": "__main__.custody.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.custody.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.custody.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.custody.addr": {
                "decorators": [],
                "pc": 422,
                "type": "function"
            },
            "__main__.custody.addr.Args": {
                "full_name": "__main__.custody.addr.Args",
                "members": {
                    "l1_token_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "token_id": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__.custody.addr.ImplicitArgs": {
                "full_name": "__main__.custody.addr.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 0
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__.custody.addr.Return": {
                "cairo_type": "(res: felt)",
                "type": "type_definition"
            },
            "__main__.custody.addr.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.custody.addr.l1_token_address": {
                "cairo_type": "felt",
                "full_name": "__main__.custody.addr.l1_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 34,
                            "offset": 0
                        },
                        "pc": 422,
                        "value": "[cast(fp + (-4), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.custody.addr.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.custody.addr.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 34,
                            "offset": 0
                        },
                        "pc": 422,
                        "value": "[cast(fp + (-6), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 34,
                            "offset": 7
                        },
                        "pc": 428,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 34,
                            "offset": 12
                        },
                        "pc": 431,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.custody.addr.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.custody.addr.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 34,
                            "offset": 0
                        },
                        "pc": 422,
                        "value": "[cast(fp + (-5), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 34,
                            "offset": 41
                        },
                        "pc": 435,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.custody.addr.res": {
                "cairo_type": "felt",
                "full_name": "__main__.custody.addr.res",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 34,
                            "offset": 0
                        },
                        "pc": 422,
                        "value": "cast(582296241222155284640312087794090113401992882569345416891735068109346863172, felt)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 34,
                            "offset": 7
                        },
                        "pc": 428,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 34,
                            "offset": 12
                        },
                        "pc": 431,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 34,
                            "offset": 41
                        },
                        "pc": 435,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.custody.addr.token_id": {
                "cairo_type": "felt",
                "full_name": "__main__.custody.addr.token_id",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 34,
                            "offset": 0
                        },
                        "pc": 422,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.custody.hash2": {
                "destination": "starkware.cairo.common.hash.hash2",
                "type": "alias"
            },
            "__main__.custody.normalize_address": {
                "destination": "starkware.starknet.common.storage.normalize_address",
                "type": "alias"
            },
            "__main__.custody.read": {
                "decorators": [],
                "pc": 439,
                "type": "function"
            },
            "__main__.custody.read.Args": {
                "full_name": "__main__.custody.read.Args",
                "members": {
                    "l1_token_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "token_id": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__.custody.read.ImplicitArgs": {
                "full_name": "__main__.custody.read.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.custody.read.Return": {
                "cairo_type": "(res: felt)",
                "type": "type_definition"
            },
            "__main__.custody.read.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.custody.read.__storage_var_temp0": {
                "cairo_type": "felt",
                "full_name": "__main__.custody.read.__storage_var_temp0",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 57
                        },
                        "pc": 449,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 61
                        },
                        "pc": 453,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.custody.read.l1_token_address": {
                "cairo_type": "felt",
                "full_name": "__main__.custody.read.l1_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 0
                        },
                        "pc": 439,
                        "value": "[cast(fp + (-4), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.custody.read.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.custody.read.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 0
                        },
                        "pc": 439,
                        "value": "[cast(fp + (-6), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 50
                        },
                        "pc": 445,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 59
                        },
                        "pc": 451,
                        "value": "[cast(ap + (-1), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.custody.read.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.custody.read.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 0
                        },
                        "pc": 439,
                        "value": "[cast(fp + (-5), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 50
                        },
                        "pc": 445,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 60
                        },
                        "pc": 452,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.custody.read.storage_addr": {
                "cairo_type": "felt",
                "full_name": "__main__.custody.read.storage_addr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 50
                        },
                        "pc": 445,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.custody.read.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.custody.read.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 0
                        },
                        "pc": 439,
                        "value": "[cast(fp + (-7), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 57
                        },
                        "pc": 449,
                        "value": "[cast(ap + (-2), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 58
                        },
                        "pc": 450,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.custody.read.token_id": {
                "cairo_type": "felt",
                "full_name": "__main__.custody.read.token_id",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 0
                        },
                        "pc": 439,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.custody.storage_read": {
                "destination": "starkware.starknet.common.syscalls.storage_read",
                "type": "alias"
            },
            "__main__.custody.storage_write": {
                "destination": "starkware.starknet.common.syscalls.storage_write",
                "type": "alias"
            },
            "__main__.deploy": {
                "destination": "starkware.starknet.common.syscalls.deploy",
                "type": "alias"
            },
            "__main__.get_balance": {
                "decorators": [
                    "view"
                ],
                "pc": 1093,
                "type": "function"
            },
            "__main__.get_balance.Args": {
                "full_name": "__main__.get_balance.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.get_balance.ImplicitArgs": {
                "full_name": "__main__.get_balance.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.get_balance.Return": {
                "cairo_type": "(res: felt)",
                "type": "type_definition"
            },
            "__main__.get_balance.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.get_balance.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.get_balance.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 72,
                            "offset": 0
                        },
                        "pc": 1093,
                        "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 72,
                            "offset": 23
                        },
                        "pc": 1098,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_balance.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.get_balance.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 72,
                            "offset": 0
                        },
                        "pc": 1093,
                        "value": "[cast(fp + (-3), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 72,
                            "offset": 23
                        },
                        "pc": 1098,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_balance.res": {
                "cairo_type": "felt",
                "full_name": "__main__.get_balance.res",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 72,
                            "offset": 23
                        },
                        "pc": 1098,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_balance.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.get_balance.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 72,
                            "offset": 0
                        },
                        "pc": 1093,
                        "value": "[cast(fp + (-5), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 72,
                            "offset": 23
                        },
                        "pc": 1098,
                        "value": "[cast(ap + (-4), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_block_timestamp": {
                "destination": "starkware.starknet.common.syscalls.get_block_timestamp",
                "type": "alias"
            },
            "__main__.get_bridge_back_event": {
                "decorators": [
                    "view"
                ],
                "pc": 937,
                "type": "function"
            },
            "__main__.get_bridge_back_event.Args": {
                "full_name": "__main__.get_bridge_back_event.Args",
                "members": {
                    "index": {
                        "cairo_type": "felt",
                        "offset": 3
                    },
                    "l1_token_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "l2_token_address": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "owner": {
                        "cairo_type": "felt",
                        "offset": 2
                    }
                },
                "size": 4,
                "type": "struct"
            },
            "__main__.get_bridge_back_event.ImplicitArgs": {
                "full_name": "__main__.get_bridge_back_event.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.get_bridge_back_event.Return": {
                "cairo_type": "(token_id: felt)",
                "type": "type_definition"
            },
            "__main__.get_bridge_back_event.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.get_bridge_back_event.index": {
                "cairo_type": "felt",
                "full_name": "__main__.get_bridge_back_event.index",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 62,
                            "offset": 0
                        },
                        "pc": 937,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_bridge_back_event.l1_token_address": {
                "cairo_type": "felt",
                "full_name": "__main__.get_bridge_back_event.l1_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 62,
                            "offset": 0
                        },
                        "pc": 937,
                        "value": "[cast(fp + (-6), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_bridge_back_event.l2_token_address": {
                "cairo_type": "felt",
                "full_name": "__main__.get_bridge_back_event.l2_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 62,
                            "offset": 0
                        },
                        "pc": 937,
                        "value": "[cast(fp + (-5), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_bridge_back_event.owner": {
                "cairo_type": "felt",
                "full_name": "__main__.get_bridge_back_event.owner",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 62,
                            "offset": 0
                        },
                        "pc": 937,
                        "value": "[cast(fp + (-4), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_bridge_back_event.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.get_bridge_back_event.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 62,
                            "offset": 0
                        },
                        "pc": 937,
                        "value": "[cast(fp + (-8), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 62,
                            "offset": 82
                        },
                        "pc": 946,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_bridge_back_event.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.get_bridge_back_event.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 62,
                            "offset": 0
                        },
                        "pc": 937,
                        "value": "[cast(fp + (-7), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 62,
                            "offset": 82
                        },
                        "pc": 946,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_bridge_back_event.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.get_bridge_back_event.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 62,
                            "offset": 0
                        },
                        "pc": 937,
                        "value": "[cast(fp + (-9), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 62,
                            "offset": 82
                        },
                        "pc": 946,
                        "value": "[cast(ap + (-4), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_bridge_back_event.token_id": {
                "cairo_type": "felt",
                "full_name": "__main__.get_bridge_back_event.token_id",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 62,
                            "offset": 82
                        },
                        "pc": 946,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_bridge_back_event_count": {
                "decorators": [
                    "view"
                ],
                "pc": 899,
                "type": "function"
            },
            "__main__.get_bridge_back_event_count.Args": {
                "full_name": "__main__.get_bridge_back_event_count.Args",
                "members": {
                    "l1_token_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "l2_token_address": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "owner": {
                        "cairo_type": "felt",
                        "offset": 2
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.get_bridge_back_event_count.ImplicitArgs": {
                "full_name": "__main__.get_bridge_back_event_count.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.get_bridge_back_event_count.Return": {
                "cairo_type": "(count: felt)",
                "type": "type_definition"
            },
            "__main__.get_bridge_back_event_count.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.get_bridge_back_event_count.count": {
                "cairo_type": "felt",
                "full_name": "__main__.get_bridge_back_event_count.count",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 59,
                            "offset": 75
                        },
                        "pc": 907,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_bridge_back_event_count.l1_token_address": {
                "cairo_type": "felt",
                "full_name": "__main__.get_bridge_back_event_count.l1_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 59,
                            "offset": 0
                        },
                        "pc": 899,
                        "value": "[cast(fp + (-5), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_bridge_back_event_count.l2_token_address": {
                "cairo_type": "felt",
                "full_name": "__main__.get_bridge_back_event_count.l2_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 59,
                            "offset": 0
                        },
                        "pc": 899,
                        "value": "[cast(fp + (-4), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_bridge_back_event_count.owner": {
                "cairo_type": "felt",
                "full_name": "__main__.get_bridge_back_event_count.owner",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 59,
                            "offset": 0
                        },
                        "pc": 899,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_bridge_back_event_count.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.get_bridge_back_event_count.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 59,
                            "offset": 0
                        },
                        "pc": 899,
                        "value": "[cast(fp + (-7), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 59,
                            "offset": 75
                        },
                        "pc": 907,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_bridge_back_event_count.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.get_bridge_back_event_count.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 59,
                            "offset": 0
                        },
                        "pc": 899,
                        "value": "[cast(fp + (-6), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 59,
                            "offset": 75
                        },
                        "pc": 907,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_bridge_back_event_count.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.get_bridge_back_event_count.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 59,
                            "offset": 0
                        },
                        "pc": 899,
                        "value": "[cast(fp + (-8), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 59,
                            "offset": 75
                        },
                        "pc": 907,
                        "value": "[cast(ap + (-4), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_caller_address": {
                "destination": "starkware.starknet.common.syscalls.get_caller_address",
                "type": "alias"
            },
            "__main__.get_collateral_data": {
                "decorators": [
                    "view"
                ],
                "pc": 530,
                "type": "function"
            },
            "__main__.get_collateral_data.Args": {
                "full_name": "__main__.get_collateral_data.Args",
                "members": {
                    "_l1_token_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "_token_id": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__.get_collateral_data.ImplicitArgs": {
                "full_name": "__main__.get_collateral_data.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.get_collateral_data.Return": {
                "cairo_type": "(res: felt)",
                "type": "type_definition"
            },
            "__main__.get_collateral_data.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.get_collateral_data._l1_token_address": {
                "cairo_type": "felt",
                "full_name": "__main__.get_collateral_data._l1_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 42,
                            "offset": 0
                        },
                        "pc": 530,
                        "value": "[cast(fp + (-4), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_collateral_data._token_id": {
                "cairo_type": "felt",
                "full_name": "__main__.get_collateral_data._token_id",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 42,
                            "offset": 0
                        },
                        "pc": 530,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_collateral_data.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.get_collateral_data.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 42,
                            "offset": 0
                        },
                        "pc": 530,
                        "value": "[cast(fp + (-6), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 42,
                            "offset": 68
                        },
                        "pc": 537,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_collateral_data.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.get_collateral_data.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 42,
                            "offset": 0
                        },
                        "pc": 530,
                        "value": "[cast(fp + (-5), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 42,
                            "offset": 68
                        },
                        "pc": 537,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_collateral_data.res": {
                "cairo_type": "felt",
                "full_name": "__main__.get_collateral_data.res",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 42,
                            "offset": 68
                        },
                        "pc": 537,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_collateral_data.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.get_collateral_data.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 42,
                            "offset": 0
                        },
                        "pc": 530,
                        "value": "[cast(fp + (-7), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 42,
                            "offset": 68
                        },
                        "pc": 537,
                        "value": "[cast(ap + (-4), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_contract_address": {
                "destination": "starkware.starknet.common.syscalls.get_contract_address",
                "type": "alias"
            },
            "__main__.get_l1_gateway": {
                "decorators": [
                    "view"
                ],
                "pc": 392,
                "type": "function"
            },
            "__main__.get_l1_gateway.Args": {
                "full_name": "__main__.get_l1_gateway.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.get_l1_gateway.ImplicitArgs": {
                "full_name": "__main__.get_l1_gateway.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.get_l1_gateway.Return": {
                "cairo_type": "(res: felt)",
                "type": "type_definition"
            },
            "__main__.get_l1_gateway.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.get_l1_gateway.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.get_l1_gateway.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 31,
                            "offset": 0
                        },
                        "pc": 392,
                        "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 31,
                            "offset": 23
                        },
                        "pc": 397,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_l1_gateway.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.get_l1_gateway.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 31,
                            "offset": 0
                        },
                        "pc": 392,
                        "value": "[cast(fp + (-3), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 31,
                            "offset": 23
                        },
                        "pc": 397,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_l1_gateway.res": {
                "cairo_type": "felt",
                "full_name": "__main__.get_l1_gateway.res",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 31,
                            "offset": 23
                        },
                        "pc": 397,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_l1_gateway.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.get_l1_gateway.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 31,
                            "offset": 0
                        },
                        "pc": 392,
                        "value": "[cast(fp + (-5), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 31,
                            "offset": 23
                        },
                        "pc": 397,
                        "value": "[cast(ap + (-4), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.increase_balance": {
                "decorators": [
                    "external"
                ],
                "pc": 1059,
                "type": "function"
            },
            "__main__.increase_balance.Args": {
                "full_name": "__main__.increase_balance.Args",
                "members": {
                    "amount": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "__main__.increase_balance.ImplicitArgs": {
                "full_name": "__main__.increase_balance.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.increase_balance.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.increase_balance.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.increase_balance.amount": {
                "cairo_type": "felt",
                "full_name": "__main__.increase_balance.amount",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 70,
                            "offset": 0
                        },
                        "pc": 1059,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.increase_balance.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.increase_balance.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 70,
                            "offset": 0
                        },
                        "pc": 1059,
                        "value": "[cast(fp + (-5), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 70,
                            "offset": 28
                        },
                        "pc": 1068,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 70,
                            "offset": 50
                        },
                        "pc": 1074,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.increase_balance.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.increase_balance.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 70,
                            "offset": 0
                        },
                        "pc": 1059,
                        "value": "[cast(fp + (-4), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 70,
                            "offset": 5
                        },
                        "pc": 1063,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 70,
                            "offset": 28
                        },
                        "pc": 1068,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 70,
                            "offset": 50
                        },
                        "pc": 1074,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.increase_balance.res": {
                "cairo_type": "felt",
                "full_name": "__main__.increase_balance.res",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 70,
                            "offset": 28
                        },
                        "pc": 1068,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.increase_balance.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.increase_balance.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 70,
                            "offset": 0
                        },
                        "pc": 1059,
                        "value": "[cast(fp + (-6), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 70,
                            "offset": 28
                        },
                        "pc": 1068,
                        "value": "[cast(ap + (-4), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 70,
                            "offset": 50
                        },
                        "pc": 1074,
                        "value": "[cast(ap + (-3), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.initialize": {
                "decorators": [
                    "external"
                ],
                "pc": 566,
                "type": "function"
            },
            "__main__.initialize.Args": {
                "full_name": "__main__.initialize.Args",
                "members": {
                    "_l1_gateway": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "token_class_hash": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__.initialize.ImplicitArgs": {
                "full_name": "__main__.initialize.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.initialize.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.initialize.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.initialize.__temp31": {
                "cairo_type": "felt",
                "full_name": "__main__.initialize.__temp31",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 75
                        },
                        "pc": 588,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.initialize.__temp32": {
                "cairo_type": "felt",
                "full_name": "__main__.initialize.__temp32",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 76
                        },
                        "pc": 591,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.initialize._l1_gateway": {
                "cairo_type": "felt",
                "full_name": "__main__.initialize._l1_gateway",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 0
                        },
                        "pc": 566,
                        "value": "[cast(fp + (-4), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.initialize.contract_address": {
                "cairo_type": "felt",
                "full_name": "__main__.initialize.contract_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 29
                        },
                        "pc": 576,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.initialize.current_salt": {
                "cairo_type": "felt",
                "full_name": "__main__.initialize.current_salt",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 71
                        },
                        "pc": 584,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.initialize.deployed_address": {
                "cairo_type": "felt",
                "full_name": "__main__.initialize.deployed_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 87
                        },
                        "pc": 603,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.initialize.is_initialized": {
                "cairo_type": "felt",
                "full_name": "__main__.initialize.is_initialized",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 23
                        },
                        "pc": 571,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.initialize.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.initialize.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 0
                        },
                        "pc": 566,
                        "value": "[cast(fp + (-6), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 23
                        },
                        "pc": 571,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 51
                        },
                        "pc": 582,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 71
                        },
                        "pc": 584,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 109
                        },
                        "pc": 610,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 128
                        },
                        "pc": 613,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 147
                        },
                        "pc": 617,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.initialize.ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.initialize.ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 74
                        },
                        "pc": 586,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.initialize.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.initialize.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 0
                        },
                        "pc": 566,
                        "value": "[cast(fp + (-5), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 23
                        },
                        "pc": 571,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 51
                        },
                        "pc": 582,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 71
                        },
                        "pc": 584,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 109
                        },
                        "pc": 610,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 128
                        },
                        "pc": 613,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 147
                        },
                        "pc": 617,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.initialize.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.initialize.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 0
                        },
                        "pc": 566,
                        "value": "[cast(fp + (-7), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 23
                        },
                        "pc": 571,
                        "value": "[cast(ap + (-4), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 29
                        },
                        "pc": 576,
                        "value": "[cast(ap + (-2), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 51
                        },
                        "pc": 582,
                        "value": "[cast(ap + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 71
                        },
                        "pc": 584,
                        "value": "[cast(ap + (-4), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 87
                        },
                        "pc": 603,
                        "value": "[cast(ap + (-2), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 109
                        },
                        "pc": 610,
                        "value": "[cast(ap + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 128
                        },
                        "pc": 613,
                        "value": "[cast(ap + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 147
                        },
                        "pc": 617,
                        "value": "[cast(ap + (-3), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.initialize.token_class_hash": {
                "cairo_type": "felt",
                "full_name": "__main__.initialize.token_class_hash",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 0
                        },
                        "pc": 566,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.initialized": {
                "type": "namespace"
            },
            "__main__.initialized.Args": {
                "full_name": "__main__.initialized.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.initialized.HashBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
                "type": "alias"
            },
            "__main__.initialized.ImplicitArgs": {
                "full_name": "__main__.initialized.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.initialized.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.initialized.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.initialized.addr": {
                "decorators": [],
                "pc": 278,
                "type": "function"
            },
            "__main__.initialized.addr.Args": {
                "full_name": "__main__.initialized.addr.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.initialized.addr.ImplicitArgs": {
                "full_name": "__main__.initialized.addr.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 0
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__.initialized.addr.Return": {
                "cairo_type": "(res: felt)",
                "type": "type_definition"
            },
            "__main__.initialized.addr.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.initialized.addr.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.initialized.addr.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 20,
                            "offset": 0
                        },
                        "pc": 278,
                        "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.initialized.addr.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.initialized.addr.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 20,
                            "offset": 0
                        },
                        "pc": 278,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.initialized.addr.res": {
                "cairo_type": "felt",
                "full_name": "__main__.initialized.addr.res",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 20,
                            "offset": 0
                        },
                        "pc": 278,
                        "value": "cast(1697461057326310581967816530165551571743938660869987744467005324703617544296, felt)"
                    }
                ],
                "type": "reference"
            },
            "__main__.initialized.hash2": {
                "destination": "starkware.cairo.common.hash.hash2",
                "type": "alias"
            },
            "__main__.initialized.normalize_address": {
                "destination": "starkware.starknet.common.storage.normalize_address",
                "type": "alias"
            },
            "__main__.initialized.read": {
                "decorators": [],
                "pc": 283,
                "type": "function"
            },
            "__main__.initialized.read.Args": {
                "full_name": "__main__.initialized.read.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.initialized.read.ImplicitArgs": {
                "full_name": "__main__.initialized.read.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.initialized.read.Return": {
                "cairo_type": "(res: felt)",
                "type": "type_definition"
            },
            "__main__.initialized.read.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.initialized.read.__storage_var_temp0": {
                "cairo_type": "felt",
                "full_name": "__main__.initialized.read.__storage_var_temp0",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 21,
                            "offset": 14
                        },
                        "pc": 291,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 21,
                            "offset": 18
                        },
                        "pc": 295,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.initialized.read.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.initialized.read.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 21,
                            "offset": 0
                        },
                        "pc": 283,
                        "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 21,
                            "offset": 7
                        },
                        "pc": 287,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 21,
                            "offset": 16
                        },
                        "pc": 293,
                        "value": "[cast(ap + (-1), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.initialized.read.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.initialized.read.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 21,
                            "offset": 0
                        },
                        "pc": 283,
                        "value": "[cast(fp + (-3), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 21,
                            "offset": 7
                        },
                        "pc": 287,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 21,
                            "offset": 17
                        },
                        "pc": 294,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.initialized.read.storage_addr": {
                "cairo_type": "felt",
                "full_name": "__main__.initialized.read.storage_addr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 21,
                            "offset": 7
                        },
                        "pc": 287,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.initialized.read.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.initialized.read.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 21,
                            "offset": 0
                        },
                        "pc": 283,
                        "value": "[cast(fp + (-5), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 21,
                            "offset": 14
                        },
                        "pc": 291,
                        "value": "[cast(ap + (-2), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 21,
                            "offset": 15
                        },
                        "pc": 292,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.initialized.storage_read": {
                "destination": "starkware.starknet.common.syscalls.storage_read",
                "type": "alias"
            },
            "__main__.initialized.storage_write": {
                "destination": "starkware.starknet.common.syscalls.storage_write",
                "type": "alias"
            },
            "__main__.initialized.write": {
                "decorators": [],
                "pc": 296,
                "type": "function"
            },
            "__main__.initialized.write.Args": {
                "full_name": "__main__.initialized.write.Args",
                "members": {
                    "value": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "__main__.initialized.write.ImplicitArgs": {
                "full_name": "__main__.initialized.write.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.initialized.write.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.initialized.write.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.initialized.write.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.initialized.write.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 22,
                            "offset": 0
                        },
                        "pc": 296,
                        "value": "[cast(fp + (-5), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 22,
                            "offset": 7
                        },
                        "pc": 300,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.initialized.write.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.initialized.write.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 22,
                            "offset": 0
                        },
                        "pc": 296,
                        "value": "[cast(fp + (-4), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 22,
                            "offset": 7
                        },
                        "pc": 300,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.initialized.write.storage_addr": {
                "cairo_type": "felt",
                "full_name": "__main__.initialized.write.storage_addr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 22,
                            "offset": 7
                        },
                        "pc": 300,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.initialized.write.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.initialized.write.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 22,
                            "offset": 0
                        },
                        "pc": 296,
                        "value": "[cast(fp + (-6), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 22,
                            "offset": 14
                        },
                        "pc": 305,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.initialized.write.value": {
                "cairo_type": "felt",
                "full_name": "__main__.initialized.write.value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 22,
                            "offset": 0
                        },
                        "pc": 296,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.l1_gateway": {
                "type": "namespace"
            },
            "__main__.l1_gateway.Args": {
                "full_name": "__main__.l1_gateway.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.l1_gateway.HashBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
                "type": "alias"
            },
            "__main__.l1_gateway.ImplicitArgs": {
                "full_name": "__main__.l1_gateway.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.l1_gateway.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.l1_gateway.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.l1_gateway.addr": {
                "decorators": [],
                "pc": 308,
                "type": "function"
            },
            "__main__.l1_gateway.addr.Args": {
                "full_name": "__main__.l1_gateway.addr.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.l1_gateway.addr.ImplicitArgs": {
                "full_name": "__main__.l1_gateway.addr.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 0
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__.l1_gateway.addr.Return": {
                "cairo_type": "(res: felt)",
                "type": "type_definition"
            },
            "__main__.l1_gateway.addr.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.l1_gateway.addr.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.l1_gateway.addr.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 23,
                            "offset": 0
                        },
                        "pc": 308,
                        "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.l1_gateway.addr.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.l1_gateway.addr.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 23,
                            "offset": 0
                        },
                        "pc": 308,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.l1_gateway.addr.res": {
                "cairo_type": "felt",
                "full_name": "__main__.l1_gateway.addr.res",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 23,
                            "offset": 0
                        },
                        "pc": 308,
                        "value": "cast(1056427353891886326853315874163693609086886439611669317644815970028333376495, felt)"
                    }
                ],
                "type": "reference"
            },
            "__main__.l1_gateway.hash2": {
                "destination": "starkware.cairo.common.hash.hash2",
                "type": "alias"
            },
            "__main__.l1_gateway.normalize_address": {
                "destination": "starkware.starknet.common.storage.normalize_address",
                "type": "alias"
            },
            "__main__.l1_gateway.read": {
                "decorators": [],
                "pc": 313,
                "type": "function"
            },
            "__main__.l1_gateway.read.Args": {
                "full_name": "__main__.l1_gateway.read.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.l1_gateway.read.ImplicitArgs": {
                "full_name": "__main__.l1_gateway.read.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.l1_gateway.read.Return": {
                "cairo_type": "(res: felt)",
                "type": "type_definition"
            },
            "__main__.l1_gateway.read.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.l1_gateway.read.__storage_var_temp0": {
                "cairo_type": "felt",
                "full_name": "__main__.l1_gateway.read.__storage_var_temp0",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 24,
                            "offset": 14
                        },
                        "pc": 321,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 24,
                            "offset": 18
                        },
                        "pc": 325,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.l1_gateway.read.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.l1_gateway.read.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 24,
                            "offset": 0
                        },
                        "pc": 313,
                        "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 24,
                            "offset": 7
                        },
                        "pc": 317,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 24,
                            "offset": 16
                        },
                        "pc": 323,
                        "value": "[cast(ap + (-1), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.l1_gateway.read.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.l1_gateway.read.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 24,
                            "offset": 0
                        },
                        "pc": 313,
                        "value": "[cast(fp + (-3), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 24,
                            "offset": 7
                        },
                        "pc": 317,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 24,
                            "offset": 17
                        },
                        "pc": 324,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.l1_gateway.read.storage_addr": {
                "cairo_type": "felt",
                "full_name": "__main__.l1_gateway.read.storage_addr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 24,
                            "offset": 7
                        },
                        "pc": 317,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.l1_gateway.read.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.l1_gateway.read.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 24,
                            "offset": 0
                        },
                        "pc": 313,
                        "value": "[cast(fp + (-5), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 24,
                            "offset": 14
                        },
                        "pc": 321,
                        "value": "[cast(ap + (-2), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 24,
                            "offset": 15
                        },
                        "pc": 322,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.l1_gateway.storage_read": {
                "destination": "starkware.starknet.common.syscalls.storage_read",
                "type": "alias"
            },
            "__main__.l1_gateway.storage_write": {
                "destination": "starkware.starknet.common.syscalls.storage_write",
                "type": "alias"
            },
            "__main__.l1_gateway.write": {
                "decorators": [],
                "pc": 326,
                "type": "function"
            },
            "__main__.l1_gateway.write.Args": {
                "full_name": "__main__.l1_gateway.write.Args",
                "members": {
                    "value": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "__main__.l1_gateway.write.ImplicitArgs": {
                "full_name": "__main__.l1_gateway.write.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.l1_gateway.write.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.l1_gateway.write.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.l1_gateway.write.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.l1_gateway.write.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 25,
                            "offset": 0
                        },
                        "pc": 326,
                        "value": "[cast(fp + (-5), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 25,
                            "offset": 7
                        },
                        "pc": 330,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.l1_gateway.write.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.l1_gateway.write.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 25,
                            "offset": 0
                        },
                        "pc": 326,
                        "value": "[cast(fp + (-4), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 25,
                            "offset": 7
                        },
                        "pc": 330,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.l1_gateway.write.storage_addr": {
                "cairo_type": "felt",
                "full_name": "__main__.l1_gateway.write.storage_addr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 25,
                            "offset": 7
                        },
                        "pc": 330,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.l1_gateway.write.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.l1_gateway.write.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 25,
                            "offset": 0
                        },
                        "pc": 326,
                        "value": "[cast(fp + (-6), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 25,
                            "offset": 14
                        },
                        "pc": 335,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.l1_gateway.write.value": {
                "cairo_type": "felt",
                "full_name": "__main__.l1_gateway.write.value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 25,
                            "offset": 0
                        },
                        "pc": 326,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.salt": {
                "type": "namespace"
            },
            "__main__.salt.Args": {
                "full_name": "__main__.salt.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.salt.HashBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
                "type": "alias"
            },
            "__main__.salt.ImplicitArgs": {
                "full_name": "__main__.salt.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.salt.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.salt.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.salt.addr": {
                "decorators": [],
                "pc": 338,
                "type": "function"
            },
            "__main__.salt.addr.Args": {
                "full_name": "__main__.salt.addr.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.salt.addr.ImplicitArgs": {
                "full_name": "__main__.salt.addr.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 0
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__.salt.addr.Return": {
                "cairo_type": "(res: felt)",
                "type": "type_definition"
            },
            "__main__.salt.addr.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.salt.addr.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.salt.addr.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 26,
                            "offset": 0
                        },
                        "pc": 338,
                        "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.salt.addr.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.salt.addr.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 26,
                            "offset": 0
                        },
                        "pc": 338,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.salt.addr.res": {
                "cairo_type": "felt",
                "full_name": "__main__.salt.addr.res",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 26,
                            "offset": 0
                        },
                        "pc": 338,
                        "value": "cast(166437374298738756398629469846363953049641320050310028217330679862127721328, felt)"
                    }
                ],
                "type": "reference"
            },
            "__main__.salt.hash2": {
                "destination": "starkware.cairo.common.hash.hash2",
                "type": "alias"
            },
            "__main__.salt.normalize_address": {
                "destination": "starkware.starknet.common.storage.normalize_address",
                "type": "alias"
            },
            "__main__.salt.read": {
                "decorators": [],
                "pc": 343,
                "type": "function"
            },
            "__main__.salt.read.Args": {
                "full_name": "__main__.salt.read.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.salt.read.ImplicitArgs": {
                "full_name": "__main__.salt.read.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.salt.read.Return": {
                "cairo_type": "(value: felt)",
                "type": "type_definition"
            },
            "__main__.salt.read.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.salt.read.__storage_var_temp0": {
                "cairo_type": "felt",
                "full_name": "__main__.salt.read.__storage_var_temp0",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 27,
                            "offset": 14
                        },
                        "pc": 351,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 27,
                            "offset": 18
                        },
                        "pc": 355,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.salt.read.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.salt.read.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 27,
                            "offset": 0
                        },
                        "pc": 343,
                        "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 27,
                            "offset": 7
                        },
                        "pc": 347,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 27,
                            "offset": 16
                        },
                        "pc": 353,
                        "value": "[cast(ap + (-1), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.salt.read.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.salt.read.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 27,
                            "offset": 0
                        },
                        "pc": 343,
                        "value": "[cast(fp + (-3), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 27,
                            "offset": 7
                        },
                        "pc": 347,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 27,
                            "offset": 17
                        },
                        "pc": 354,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.salt.read.storage_addr": {
                "cairo_type": "felt",
                "full_name": "__main__.salt.read.storage_addr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 27,
                            "offset": 7
                        },
                        "pc": 347,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.salt.read.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.salt.read.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 27,
                            "offset": 0
                        },
                        "pc": 343,
                        "value": "[cast(fp + (-5), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 27,
                            "offset": 14
                        },
                        "pc": 351,
                        "value": "[cast(ap + (-2), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 27,
                            "offset": 15
                        },
                        "pc": 352,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.salt.storage_read": {
                "destination": "starkware.starknet.common.syscalls.storage_read",
                "type": "alias"
            },
            "__main__.salt.storage_write": {
                "destination": "starkware.starknet.common.syscalls.storage_write",
                "type": "alias"
            },
            "__main__.salt.write": {
                "decorators": [],
                "pc": 356,
                "type": "function"
            },
            "__main__.salt.write.Args": {
                "full_name": "__main__.salt.write.Args",
                "members": {
                    "value": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "__main__.salt.write.ImplicitArgs": {
                "full_name": "__main__.salt.write.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.salt.write.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.salt.write.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.salt.write.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.salt.write.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 28,
                            "offset": 0
                        },
                        "pc": 356,
                        "value": "[cast(fp + (-5), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 28,
                            "offset": 7
                        },
                        "pc": 360,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.salt.write.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.salt.write.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 28,
                            "offset": 0
                        },
                        "pc": 356,
                        "value": "[cast(fp + (-4), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 28,
                            "offset": 7
                        },
                        "pc": 360,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.salt.write.storage_addr": {
                "cairo_type": "felt",
                "full_name": "__main__.salt.write.storage_addr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 28,
                            "offset": 7
                        },
                        "pc": 360,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.salt.write.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.salt.write.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 28,
                            "offset": 0
                        },
                        "pc": 356,
                        "value": "[cast(fp + (-6), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 28,
                            "offset": 14
                        },
                        "pc": 365,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.salt.write.value": {
                "cairo_type": "felt",
                "full_name": "__main__.salt.write.value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 28,
                            "offset": 0
                        },
                        "pc": 356,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.send_message_to_l1": {
                "destination": "starkware.starknet.common.messages.send_message_to_l1",
                "type": "alias"
            },
            "__main__.stake": {
                "decorators": [
                    "external"
                ],
                "pc": 1007,
                "type": "function"
            },
            "__main__.stake.Args": {
                "full_name": "__main__.stake.Args",
                "members": {
                    "amount": {
                        "cairo_type": "starkware.cairo.common.uint256.Uint256",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__.stake.ImplicitArgs": {
                "full_name": "__main__.stake.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.stake.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.stake.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.stake.amount": {
                "cairo_type": "starkware.cairo.common.uint256.Uint256",
                "full_name": "__main__.stake.amount",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 68,
                            "offset": 0
                        },
                        "pc": 1007,
                        "value": "[cast(fp + (-4), starkware.cairo.common.uint256.Uint256*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.stake.caller_address": {
                "cairo_type": "felt",
                "full_name": "__main__.stake.caller_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 68,
                            "offset": 6
                        },
                        "pc": 1010,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.stake.contract_address": {
                "cairo_type": "felt",
                "full_name": "__main__.stake.contract_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 68,
                            "offset": 12
                        },
                        "pc": 1013,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.stake.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.stake.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 68,
                            "offset": 0
                        },
                        "pc": 1007,
                        "value": "[cast(fp + (-6), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 68,
                            "offset": 35
                        },
                        "pc": 1018,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.stake.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.stake.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 68,
                            "offset": 0
                        },
                        "pc": 1007,
                        "value": "[cast(fp + (-5), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 68,
                            "offset": 35
                        },
                        "pc": 1018,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 68,
                            "offset": 64
                        },
                        "pc": 1028,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 68,
                            "offset": 90
                        },
                        "pc": 1036,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.stake.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.stake.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 68,
                            "offset": 0
                        },
                        "pc": 1007,
                        "value": "[cast(fp + (-7), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 68,
                            "offset": 6
                        },
                        "pc": 1010,
                        "value": "[cast(ap + (-2), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 68,
                            "offset": 12
                        },
                        "pc": 1013,
                        "value": "[cast(ap + (-2), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 68,
                            "offset": 35
                        },
                        "pc": 1018,
                        "value": "[cast(ap + (-4), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 68,
                            "offset": 64
                        },
                        "pc": 1028,
                        "value": "[cast(ap + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 68,
                            "offset": 90
                        },
                        "pc": 1036,
                        "value": "[cast(ap + (-2), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.stake.token_addr": {
                "cairo_type": "felt",
                "full_name": "__main__.stake.token_addr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 68,
                            "offset": 35
                        },
                        "pc": 1018,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.token_address": {
                "type": "namespace"
            },
            "__main__.token_address.Args": {
                "full_name": "__main__.token_address.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.token_address.HashBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
                "type": "alias"
            },
            "__main__.token_address.ImplicitArgs": {
                "full_name": "__main__.token_address.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.token_address.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.token_address.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.token_address.addr": {
                "decorators": [],
                "pc": 454,
                "type": "function"
            },
            "__main__.token_address.addr.Args": {
                "full_name": "__main__.token_address.addr.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.token_address.addr.ImplicitArgs": {
                "full_name": "__main__.token_address.addr.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 0
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__.token_address.addr.Return": {
                "cairo_type": "(res: felt)",
                "type": "type_definition"
            },
            "__main__.token_address.addr.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.token_address.addr.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.token_address.addr.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 36,
                            "offset": 0
                        },
                        "pc": 454,
                        "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.token_address.addr.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.token_address.addr.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 36,
                            "offset": 0
                        },
                        "pc": 454,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.token_address.addr.res": {
                "cairo_type": "felt",
                "full_name": "__main__.token_address.addr.res",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 36,
                            "offset": 0
                        },
                        "pc": 454,
                        "value": "cast(320898199513821854557686263465995643985940019014426681534834465464640143080, felt)"
                    }
                ],
                "type": "reference"
            },
            "__main__.token_address.hash2": {
                "destination": "starkware.cairo.common.hash.hash2",
                "type": "alias"
            },
            "__main__.token_address.normalize_address": {
                "destination": "starkware.starknet.common.storage.normalize_address",
                "type": "alias"
            },
            "__main__.token_address.read": {
                "decorators": [],
                "pc": 459,
                "type": "function"
            },
            "__main__.token_address.read.Args": {
                "full_name": "__main__.token_address.read.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.token_address.read.ImplicitArgs": {
                "full_name": "__main__.token_address.read.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.token_address.read.Return": {
                "cairo_type": "(res: felt)",
                "type": "type_definition"
            },
            "__main__.token_address.read.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.token_address.read.__storage_var_temp0": {
                "cairo_type": "felt",
                "full_name": "__main__.token_address.read.__storage_var_temp0",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 37,
                            "offset": 14
                        },
                        "pc": 467,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 37,
                            "offset": 18
                        },
                        "pc": 471,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.token_address.read.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.token_address.read.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 37,
                            "offset": 0
                        },
                        "pc": 459,
                        "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 37,
                            "offset": 7
                        },
                        "pc": 463,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 37,
                            "offset": 16
                        },
                        "pc": 469,
                        "value": "[cast(ap + (-1), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.token_address.read.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.token_address.read.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 37,
                            "offset": 0
                        },
                        "pc": 459,
                        "value": "[cast(fp + (-3), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 37,
                            "offset": 7
                        },
                        "pc": 463,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 37,
                            "offset": 17
                        },
                        "pc": 470,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.token_address.read.storage_addr": {
                "cairo_type": "felt",
                "full_name": "__main__.token_address.read.storage_addr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 37,
                            "offset": 7
                        },
                        "pc": 463,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.token_address.read.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.token_address.read.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 37,
                            "offset": 0
                        },
                        "pc": 459,
                        "value": "[cast(fp + (-5), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 37,
                            "offset": 14
                        },
                        "pc": 467,
                        "value": "[cast(ap + (-2), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 37,
                            "offset": 15
                        },
                        "pc": 468,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.token_address.storage_read": {
                "destination": "starkware.starknet.common.syscalls.storage_read",
                "type": "alias"
            },
            "__main__.token_address.storage_write": {
                "destination": "starkware.starknet.common.syscalls.storage_write",
                "type": "alias"
            },
            "__main__.token_address.write": {
                "decorators": [],
                "pc": 472,
                "type": "function"
            },
            "__main__.token_address.write.Args": {
                "full_name": "__main__.token_address.write.Args",
                "members": {
                    "value": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "__main__.token_address.write.ImplicitArgs": {
                "full_name": "__main__.token_address.write.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.token_address.write.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.token_address.write.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.token_address.write.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.token_address.write.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 0
                        },
                        "pc": 472,
                        "value": "[cast(fp + (-5), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 7
                        },
                        "pc": 476,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.token_address.write.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.token_address.write.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 0
                        },
                        "pc": 472,
                        "value": "[cast(fp + (-4), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 7
                        },
                        "pc": 476,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.token_address.write.storage_addr": {
                "cairo_type": "felt",
                "full_name": "__main__.token_address.write.storage_addr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 7
                        },
                        "pc": 476,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.token_address.write.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.token_address.write.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 0
                        },
                        "pc": 472,
                        "value": "[cast(fp + (-6), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 14
                        },
                        "pc": 481,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.token_address.write.value": {
                "cairo_type": "felt",
                "full_name": "__main__.token_address.write.value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 0
                        },
                        "pc": 472,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.token_class_hash": {
                "type": "namespace"
            },
            "__main__.token_class_hash.Args": {
                "full_name": "__main__.token_class_hash.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.token_class_hash.HashBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
                "type": "alias"
            },
            "__main__.token_class_hash.ImplicitArgs": {
                "full_name": "__main__.token_class_hash.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.token_class_hash.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.token_class_hash.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.token_class_hash.hash2": {
                "destination": "starkware.cairo.common.hash.hash2",
                "type": "alias"
            },
            "__main__.token_class_hash.normalize_address": {
                "destination": "starkware.starknet.common.storage.normalize_address",
                "type": "alias"
            },
            "__main__.token_class_hash.storage_read": {
                "destination": "starkware.starknet.common.syscalls.storage_read",
                "type": "alias"
            },
            "__main__.token_class_hash.storage_write": {
                "destination": "starkware.starknet.common.syscalls.storage_write",
                "type": "alias"
            },
            "__main__.zero": {
                "type": "namespace"
            },
            "__main__.zero.Args": {
                "full_name": "__main__.zero.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.zero.HashBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
                "type": "alias"
            },
            "__main__.zero.ImplicitArgs": {
                "full_name": "__main__.zero.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.zero.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.zero.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.zero.addr": {
                "decorators": [],
                "pc": 368,
                "type": "function"
            },
            "__main__.zero.addr.Args": {
                "full_name": "__main__.zero.addr.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.zero.addr.ImplicitArgs": {
                "full_name": "__main__.zero.addr.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 0
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__.zero.addr.Return": {
                "cairo_type": "(res: felt)",
                "type": "type_definition"
            },
            "__main__.zero.addr.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.zero.addr.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.zero.addr.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 29,
                            "offset": 0
                        },
                        "pc": 368,
                        "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.zero.addr.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.zero.addr.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 29,
                            "offset": 0
                        },
                        "pc": 368,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.zero.addr.res": {
                "cairo_type": "felt",
                "full_name": "__main__.zero.addr.res",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 29,
                            "offset": 0
                        },
                        "pc": 368,
                        "value": "cast(539897542539510803835874174075754230869785750614003400019734173509112717992, felt)"
                    }
                ],
                "type": "reference"
            },
            "__main__.zero.hash2": {
                "destination": "starkware.cairo.common.hash.hash2",
                "type": "alias"
            },
            "__main__.zero.normalize_address": {
                "destination": "starkware.starknet.common.storage.normalize_address",
                "type": "alias"
            },
            "__main__.zero.read": {
                "decorators": [],
                "pc": 373,
                "type": "function"
            },
            "__main__.zero.read.Args": {
                "full_name": "__main__.zero.read.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.zero.read.ImplicitArgs": {
                "full_name": "__main__.zero.read.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.zero.read.Return": {
                "cairo_type": "(res: starkware.cairo.common.uint256.Uint256)",
                "type": "type_definition"
            },
            "__main__.zero.read.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.zero.read.__storage_var_temp0": {
                "cairo_type": "felt",
                "full_name": "__main__.zero.read.__storage_var_temp0",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 30,
                            "offset": 14
                        },
                        "pc": 381,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 30,
                            "offset": 25
                        },
                        "pc": 390,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.zero.read.__storage_var_temp1": {
                "cairo_type": "felt",
                "full_name": "__main__.zero.read.__storage_var_temp1",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 30,
                            "offset": 21
                        },
                        "pc": 386,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 30,
                            "offset": 26
                        },
                        "pc": 391,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.zero.read.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.zero.read.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 30,
                            "offset": 0
                        },
                        "pc": 373,
                        "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 30,
                            "offset": 7
                        },
                        "pc": 377,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 30,
                            "offset": 23
                        },
                        "pc": 388,
                        "value": "[cast(ap + (-1), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.zero.read.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.zero.read.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 30,
                            "offset": 0
                        },
                        "pc": 373,
                        "value": "[cast(fp + (-3), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 30,
                            "offset": 7
                        },
                        "pc": 377,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 30,
                            "offset": 24
                        },
                        "pc": 389,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.zero.read.storage_addr": {
                "cairo_type": "felt",
                "full_name": "__main__.zero.read.storage_addr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 30,
                            "offset": 7
                        },
                        "pc": 377,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.zero.read.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.zero.read.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 30,
                            "offset": 0
                        },
                        "pc": 373,
                        "value": "[cast(fp + (-5), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 30,
                            "offset": 14
                        },
                        "pc": 381,
                        "value": "[cast(ap + (-2), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 30,
                            "offset": 21
                        },
                        "pc": 386,
                        "value": "[cast(ap + (-2), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 30,
                            "offset": 22
                        },
                        "pc": 387,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.zero.storage_read": {
                "destination": "starkware.starknet.common.syscalls.storage_read",
                "type": "alias"
            },
            "__main__.zero.storage_write": {
                "destination": "starkware.starknet.common.syscalls.storage_write",
                "type": "alias"
            },
            "__wrappers__.bridge_debug": {
                "decorators": [
                    "external"
                ],
                "pc": 799,
                "type": "function"
            },
            "__wrappers__.bridge_debug.Args": {
                "full_name": "__wrappers__.bridge_debug.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.bridge_debug.ImplicitArgs": {
                "full_name": "__wrappers__.bridge_debug.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.bridge_debug.Return": {
                "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, size: felt, retdata: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.bridge_debug.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__wrappers__.bridge_debug.__calldata_actual_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.bridge_debug.__calldata_actual_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 53,
                            "offset": 0
                        },
                        "pc": 799,
                        "value": "cast([fp + (-3)] + 7 - [fp + (-3)], felt)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.bridge_debug.__calldata_arg__floor_price": {
                "cairo_type": "starkware.cairo.common.uint256.Uint256",
                "full_name": "__wrappers__.bridge_debug.__calldata_arg__floor_price",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 53,
                            "offset": 0
                        },
                        "pc": 799,
                        "value": "[cast([fp + (-3)] + 4, starkware.cairo.common.uint256.Uint256*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.bridge_debug.__calldata_arg__l1_token_address": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.bridge_debug.__calldata_arg__l1_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 53,
                            "offset": 0
                        },
                        "pc": 799,
                        "value": "[cast([fp + (-3)] + 2, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.bridge_debug.__calldata_arg__owner": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.bridge_debug.__calldata_arg__owner",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 53,
                            "offset": 0
                        },
                        "pc": 799,
                        "value": "[cast([fp + (-3)] + 1, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.bridge_debug.__calldata_arg__require_token_address": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.bridge_debug.__calldata_arg__require_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 53,
                            "offset": 0
                        },
                        "pc": 799,
                        "value": "[cast([fp + (-3)] + 6, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.bridge_debug.__calldata_arg__token_id": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.bridge_debug.__calldata_arg__token_id",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 53,
                            "offset": 0
                        },
                        "pc": 799,
                        "value": "[cast([fp + (-3)] + 3, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.bridge_debug.__calldata_arg_from_address": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.bridge_debug.__calldata_arg_from_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 53,
                            "offset": 0
                        },
                        "pc": 799,
                        "value": "[cast([fp + (-3)], felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.bridge_debug.__calldata_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.bridge_debug.__calldata_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 53,
                            "offset": 0
                        },
                        "pc": 799,
                        "value": "[cast(fp + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 53,
                            "offset": 0
                        },
                        "pc": 799,
                        "value": "cast([fp + (-3)] + 1, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 53,
                            "offset": 0
                        },
                        "pc": 799,
                        "value": "cast([fp + (-3)] + 2, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 53,
                            "offset": 0
                        },
                        "pc": 799,
                        "value": "cast([fp + (-3)] + 3, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 53,
                            "offset": 0
                        },
                        "pc": 799,
                        "value": "cast([fp + (-3)] + 4, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 53,
                            "offset": 0
                        },
                        "pc": 799,
                        "value": "cast([fp + (-3)] + 6, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 53,
                            "offset": 0
                        },
                        "pc": 799,
                        "value": "cast([fp + (-3)] + 7, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.bridge_debug.__temp37": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.bridge_debug.__temp37",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 53,
                            "offset": 1
                        },
                        "pc": 801,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.bridge_debug.__wrapped_func": {
                "destination": "__main__.bridge_debug",
                "type": "alias"
            },
            "__wrappers__.bridge_debug.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__wrappers__.bridge_debug.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 53,
                            "offset": 0
                        },
                        "pc": 799,
                        "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 54,
                            "offset": 0
                        },
                        "pc": 814,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.bridge_debug.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.bridge_debug.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 53,
                            "offset": 0
                        },
                        "pc": 799,
                        "value": "[cast([fp + (-5)] + 2, felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 54,
                            "offset": 0
                        },
                        "pc": 814,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.bridge_debug.ret_value": {
                "cairo_type": "()",
                "full_name": "__wrappers__.bridge_debug.ret_value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 54,
                            "offset": 0
                        },
                        "pc": 814,
                        "value": "[cast(ap + 0, ()*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.bridge_debug.retdata": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.bridge_debug.retdata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 54,
                            "offset": 1
                        },
                        "pc": 816,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.bridge_debug.retdata_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.bridge_debug.retdata_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 54,
                            "offset": 1
                        },
                        "pc": 816,
                        "value": "cast(0, felt)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.bridge_debug.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.bridge_debug.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 53,
                            "offset": 0
                        },
                        "pc": 799,
                        "value": "[cast([fp + (-5)], felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 54,
                            "offset": 0
                        },
                        "pc": 814,
                        "value": "[cast(ap + (-3), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.bridge_debug_encode_return.memcpy": {
                "destination": "starkware.cairo.common.memcpy.memcpy",
                "type": "alias"
            },
            "__wrappers__.bridge_from_mainnet": {
                "decorators": [
                    "l1_handler"
                ],
                "pc": 706,
                "type": "function"
            },
            "__wrappers__.bridge_from_mainnet.Args": {
                "full_name": "__wrappers__.bridge_from_mainnet.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.bridge_from_mainnet.ImplicitArgs": {
                "full_name": "__wrappers__.bridge_from_mainnet.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.bridge_from_mainnet.Return": {
                "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, size: felt, retdata: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.bridge_from_mainnet.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__wrappers__.bridge_from_mainnet.__calldata_actual_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.bridge_from_mainnet.__calldata_actual_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 49,
                            "offset": 0
                        },
                        "pc": 706,
                        "value": "cast([fp + (-3)] + 7 - [fp + (-3)], felt)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.bridge_from_mainnet.__calldata_arg__floor_price": {
                "cairo_type": "starkware.cairo.common.uint256.Uint256",
                "full_name": "__wrappers__.bridge_from_mainnet.__calldata_arg__floor_price",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 49,
                            "offset": 0
                        },
                        "pc": 706,
                        "value": "[cast([fp + (-3)] + 4, starkware.cairo.common.uint256.Uint256*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.bridge_from_mainnet.__calldata_arg__l1_token_address": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.bridge_from_mainnet.__calldata_arg__l1_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 49,
                            "offset": 0
                        },
                        "pc": 706,
                        "value": "[cast([fp + (-3)] + 2, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.bridge_from_mainnet.__calldata_arg__owner": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.bridge_from_mainnet.__calldata_arg__owner",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 49,
                            "offset": 0
                        },
                        "pc": 706,
                        "value": "[cast([fp + (-3)] + 1, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.bridge_from_mainnet.__calldata_arg__require_token_address": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.bridge_from_mainnet.__calldata_arg__require_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 49,
                            "offset": 0
                        },
                        "pc": 706,
                        "value": "[cast([fp + (-3)] + 6, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.bridge_from_mainnet.__calldata_arg__token_id": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.bridge_from_mainnet.__calldata_arg__token_id",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 49,
                            "offset": 0
                        },
                        "pc": 706,
                        "value": "[cast([fp + (-3)] + 3, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.bridge_from_mainnet.__calldata_arg_from_address": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.bridge_from_mainnet.__calldata_arg_from_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 49,
                            "offset": 0
                        },
                        "pc": 706,
                        "value": "[cast([fp + (-3)], felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.bridge_from_mainnet.__calldata_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.bridge_from_mainnet.__calldata_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 49,
                            "offset": 0
                        },
                        "pc": 706,
                        "value": "[cast(fp + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 49,
                            "offset": 0
                        },
                        "pc": 706,
                        "value": "cast([fp + (-3)] + 1, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 49,
                            "offset": 0
                        },
                        "pc": 706,
                        "value": "cast([fp + (-3)] + 2, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 49,
                            "offset": 0
                        },
                        "pc": 706,
                        "value": "cast([fp + (-3)] + 3, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 49,
                            "offset": 0
                        },
                        "pc": 706,
                        "value": "cast([fp + (-3)] + 4, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 49,
                            "offset": 0
                        },
                        "pc": 706,
                        "value": "cast([fp + (-3)] + 6, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 49,
                            "offset": 0
                        },
                        "pc": 706,
                        "value": "cast([fp + (-3)] + 7, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.bridge_from_mainnet.__temp35": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.bridge_from_mainnet.__temp35",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 49,
                            "offset": 1
                        },
                        "pc": 708,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.bridge_from_mainnet.__wrapped_func": {
                "destination": "__main__.bridge_from_mainnet",
                "type": "alias"
            },
            "__wrappers__.bridge_from_mainnet.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__wrappers__.bridge_from_mainnet.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 49,
                            "offset": 0
                        },
                        "pc": 706,
                        "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 50,
                            "offset": 0
                        },
                        "pc": 721,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.bridge_from_mainnet.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.bridge_from_mainnet.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 49,
                            "offset": 0
                        },
                        "pc": 706,
                        "value": "[cast([fp + (-5)] + 2, felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 50,
                            "offset": 0
                        },
                        "pc": 721,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.bridge_from_mainnet.ret_value": {
                "cairo_type": "()",
                "full_name": "__wrappers__.bridge_from_mainnet.ret_value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 50,
                            "offset": 0
                        },
                        "pc": 721,
                        "value": "[cast(ap + 0, ()*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.bridge_from_mainnet.retdata": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.bridge_from_mainnet.retdata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 50,
                            "offset": 1
                        },
                        "pc": 723,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.bridge_from_mainnet.retdata_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.bridge_from_mainnet.retdata_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 50,
                            "offset": 1
                        },
                        "pc": 723,
                        "value": "cast(0, felt)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.bridge_from_mainnet.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.bridge_from_mainnet.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 49,
                            "offset": 0
                        },
                        "pc": 706,
                        "value": "[cast([fp + (-5)], felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 50,
                            "offset": 0
                        },
                        "pc": 721,
                        "value": "[cast(ap + (-3), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.bridge_from_mainnet_encode_return.memcpy": {
                "destination": "starkware.cairo.common.memcpy.memcpy",
                "type": "alias"
            },
            "__wrappers__.constructor": {
                "decorators": [
                    "constructor"
                ],
                "pc": 1131,
                "type": "function"
            },
            "__wrappers__.constructor.Args": {
                "full_name": "__wrappers__.constructor.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.constructor.ImplicitArgs": {
                "full_name": "__wrappers__.constructor.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.constructor.Return": {
                "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, size: felt, retdata: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.constructor.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__wrappers__.constructor.__calldata_actual_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.constructor.__calldata_actual_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 76,
                            "offset": 0
                        },
                        "pc": 1131,
                        "value": "cast([fp + (-3)] - [fp + (-3)], felt)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.constructor.__calldata_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.constructor.__calldata_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 76,
                            "offset": 0
                        },
                        "pc": 1131,
                        "value": "[cast(fp + (-3), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.constructor.__wrapped_func": {
                "destination": "__main__.constructor",
                "type": "alias"
            },
            "__wrappers__.constructor.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__wrappers__.constructor.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 76,
                            "offset": 0
                        },
                        "pc": 1131,
                        "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 76,
                            "offset": 27
                        },
                        "pc": 1137,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.constructor.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.constructor.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 76,
                            "offset": 0
                        },
                        "pc": 1131,
                        "value": "[cast([fp + (-5)] + 2, felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 76,
                            "offset": 27
                        },
                        "pc": 1137,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.constructor.ret_value": {
                "cairo_type": "()",
                "full_name": "__wrappers__.constructor.ret_value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 76,
                            "offset": 27
                        },
                        "pc": 1137,
                        "value": "[cast(ap + 0, ()*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.constructor.retdata": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.constructor.retdata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 76,
                            "offset": 28
                        },
                        "pc": 1139,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.constructor.retdata_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.constructor.retdata_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 76,
                            "offset": 28
                        },
                        "pc": 1139,
                        "value": "cast(0, felt)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.constructor.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.constructor.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 76,
                            "offset": 0
                        },
                        "pc": 1131,
                        "value": "[cast([fp + (-5)], felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 76,
                            "offset": 27
                        },
                        "pc": 1137,
                        "value": "[cast(ap + (-3), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.constructor_encode_return.memcpy": {
                "destination": "starkware.cairo.common.memcpy.memcpy",
                "type": "alias"
            },
            "__wrappers__.get_balance": {
                "decorators": [
                    "view"
                ],
                "pc": 1108,
                "type": "function"
            },
            "__wrappers__.get_balance.Args": {
                "full_name": "__wrappers__.get_balance.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.get_balance.ImplicitArgs": {
                "full_name": "__wrappers__.get_balance.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.get_balance.Return": {
                "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, size: felt, retdata: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.get_balance.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__wrappers__.get_balance.__calldata_actual_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_balance.__calldata_actual_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 74,
                            "offset": 0
                        },
                        "pc": 1108,
                        "value": "cast([fp + (-3)] - [fp + (-3)], felt)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_balance.__calldata_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_balance.__calldata_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 74,
                            "offset": 0
                        },
                        "pc": 1108,
                        "value": "[cast(fp + (-3), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_balance.__wrapped_func": {
                "destination": "__main__.get_balance",
                "type": "alias"
            },
            "__wrappers__.get_balance.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__wrappers__.get_balance.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 74,
                            "offset": 0
                        },
                        "pc": 1108,
                        "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 74,
                            "offset": 28
                        },
                        "pc": 1114,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_balance.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_balance.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 74,
                            "offset": 0
                        },
                        "pc": 1108,
                        "value": "[cast([fp + (-5)] + 2, felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 74,
                            "offset": 28
                        },
                        "pc": 1114,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 74,
                            "offset": 36
                        },
                        "pc": 1117,
                        "value": "[cast(ap + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_balance.ret_value": {
                "cairo_type": "(res: felt)",
                "full_name": "__wrappers__.get_balance.ret_value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 74,
                            "offset": 28
                        },
                        "pc": 1114,
                        "value": "[cast(ap + (-1), (res: felt)*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_balance.retdata": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_balance.retdata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 74,
                            "offset": 36
                        },
                        "pc": 1117,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_balance.retdata_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_balance.retdata_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 74,
                            "offset": 36
                        },
                        "pc": 1117,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_balance.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_balance.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 74,
                            "offset": 0
                        },
                        "pc": 1108,
                        "value": "[cast([fp + (-5)], felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 74,
                            "offset": 28
                        },
                        "pc": 1114,
                        "value": "[cast(ap + (-4), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_balance_encode_return": {
                "decorators": [],
                "pc": 1099,
                "type": "function"
            },
            "__wrappers__.get_balance_encode_return.Args": {
                "full_name": "__wrappers__.get_balance_encode_return.Args",
                "members": {
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "ret_value": {
                        "cairo_type": "(res: felt)",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__wrappers__.get_balance_encode_return.ImplicitArgs": {
                "full_name": "__wrappers__.get_balance_encode_return.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.get_balance_encode_return.Return": {
                "cairo_type": "(range_check_ptr: felt, data_len: felt, data: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.get_balance_encode_return.SIZEOF_LOCALS": {
                "type": "const",
                "value": 1
            },
            "__wrappers__.get_balance_encode_return.__return_value_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_balance_encode_return.__return_value_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 73,
                            "offset": 1
                        },
                        "pc": 1101,
                        "value": "[cast(fp, felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 73,
                            "offset": 1
                        },
                        "pc": 1102,
                        "value": "cast([fp] + 1, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_balance_encode_return.__return_value_ptr_start": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_balance_encode_return.__return_value_ptr_start",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 73,
                            "offset": 1
                        },
                        "pc": 1101,
                        "value": "[cast(fp, felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_balance_encode_return.__temp44": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_balance_encode_return.__temp44",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 73,
                            "offset": 2
                        },
                        "pc": 1104,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_balance_encode_return.memcpy": {
                "destination": "starkware.cairo.common.memcpy.memcpy",
                "type": "alias"
            },
            "__wrappers__.get_balance_encode_return.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_balance_encode_return.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 73,
                            "offset": 0
                        },
                        "pc": 1099,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_balance_encode_return.ret_value": {
                "cairo_type": "(res: felt)",
                "full_name": "__wrappers__.get_balance_encode_return.ret_value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 73,
                            "offset": 0
                        },
                        "pc": 1099,
                        "value": "[cast(fp + (-4), (res: felt)*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event": {
                "decorators": [
                    "view"
                ],
                "pc": 956,
                "type": "function"
            },
            "__wrappers__.get_bridge_back_event.Args": {
                "full_name": "__wrappers__.get_bridge_back_event.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.get_bridge_back_event.ImplicitArgs": {
                "full_name": "__wrappers__.get_bridge_back_event.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.get_bridge_back_event.Return": {
                "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, size: felt, retdata: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.get_bridge_back_event.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__wrappers__.get_bridge_back_event.__calldata_actual_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_bridge_back_event.__calldata_actual_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 64,
                            "offset": 0
                        },
                        "pc": 956,
                        "value": "cast([fp + (-3)] + 4 - [fp + (-3)], felt)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event.__calldata_arg_index": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_bridge_back_event.__calldata_arg_index",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 64,
                            "offset": 0
                        },
                        "pc": 956,
                        "value": "[cast([fp + (-3)] + 3, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event.__calldata_arg_l1_token_address": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_bridge_back_event.__calldata_arg_l1_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 64,
                            "offset": 0
                        },
                        "pc": 956,
                        "value": "[cast([fp + (-3)], felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event.__calldata_arg_l2_token_address": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_bridge_back_event.__calldata_arg_l2_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 64,
                            "offset": 0
                        },
                        "pc": 956,
                        "value": "[cast([fp + (-3)] + 1, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event.__calldata_arg_owner": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_bridge_back_event.__calldata_arg_owner",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 64,
                            "offset": 0
                        },
                        "pc": 956,
                        "value": "[cast([fp + (-3)] + 2, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event.__calldata_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_bridge_back_event.__calldata_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 64,
                            "offset": 0
                        },
                        "pc": 956,
                        "value": "[cast(fp + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 64,
                            "offset": 0
                        },
                        "pc": 956,
                        "value": "cast([fp + (-3)] + 1, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 64,
                            "offset": 0
                        },
                        "pc": 956,
                        "value": "cast([fp + (-3)] + 2, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 64,
                            "offset": 0
                        },
                        "pc": 956,
                        "value": "cast([fp + (-3)] + 3, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 64,
                            "offset": 0
                        },
                        "pc": 956,
                        "value": "cast([fp + (-3)] + 4, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event.__temp41": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_bridge_back_event.__temp41",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 64,
                            "offset": 1
                        },
                        "pc": 958,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event.__wrapped_func": {
                "destination": "__main__.get_bridge_back_event",
                "type": "alias"
            },
            "__wrappers__.get_bridge_back_event.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__wrappers__.get_bridge_back_event.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 64,
                            "offset": 0
                        },
                        "pc": 956,
                        "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 64,
                            "offset": 92
                        },
                        "pc": 968,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_bridge_back_event.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 64,
                            "offset": 0
                        },
                        "pc": 956,
                        "value": "[cast([fp + (-5)] + 2, felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 64,
                            "offset": 92
                        },
                        "pc": 968,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 64,
                            "offset": 100
                        },
                        "pc": 971,
                        "value": "[cast(ap + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event.ret_value": {
                "cairo_type": "(token_id: felt)",
                "full_name": "__wrappers__.get_bridge_back_event.ret_value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 64,
                            "offset": 92
                        },
                        "pc": 968,
                        "value": "[cast(ap + (-1), (token_id: felt)*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event.retdata": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_bridge_back_event.retdata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 64,
                            "offset": 100
                        },
                        "pc": 971,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event.retdata_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_bridge_back_event.retdata_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 64,
                            "offset": 100
                        },
                        "pc": 971,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_bridge_back_event.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 64,
                            "offset": 0
                        },
                        "pc": 956,
                        "value": "[cast([fp + (-5)], felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 64,
                            "offset": 92
                        },
                        "pc": 968,
                        "value": "[cast(ap + (-4), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event_count": {
                "decorators": [
                    "view"
                ],
                "pc": 917,
                "type": "function"
            },
            "__wrappers__.get_bridge_back_event_count.Args": {
                "full_name": "__wrappers__.get_bridge_back_event_count.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.get_bridge_back_event_count.ImplicitArgs": {
                "full_name": "__wrappers__.get_bridge_back_event_count.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.get_bridge_back_event_count.Return": {
                "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, size: felt, retdata: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.get_bridge_back_event_count.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__wrappers__.get_bridge_back_event_count.__calldata_actual_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_bridge_back_event_count.__calldata_actual_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 61,
                            "offset": 0
                        },
                        "pc": 917,
                        "value": "cast([fp + (-3)] + 3 - [fp + (-3)], felt)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event_count.__calldata_arg_l1_token_address": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_bridge_back_event_count.__calldata_arg_l1_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 61,
                            "offset": 0
                        },
                        "pc": 917,
                        "value": "[cast([fp + (-3)], felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event_count.__calldata_arg_l2_token_address": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_bridge_back_event_count.__calldata_arg_l2_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 61,
                            "offset": 0
                        },
                        "pc": 917,
                        "value": "[cast([fp + (-3)] + 1, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event_count.__calldata_arg_owner": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_bridge_back_event_count.__calldata_arg_owner",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 61,
                            "offset": 0
                        },
                        "pc": 917,
                        "value": "[cast([fp + (-3)] + 2, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event_count.__calldata_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_bridge_back_event_count.__calldata_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 61,
                            "offset": 0
                        },
                        "pc": 917,
                        "value": "[cast(fp + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 61,
                            "offset": 0
                        },
                        "pc": 917,
                        "value": "cast([fp + (-3)] + 1, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 61,
                            "offset": 0
                        },
                        "pc": 917,
                        "value": "cast([fp + (-3)] + 2, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 61,
                            "offset": 0
                        },
                        "pc": 917,
                        "value": "cast([fp + (-3)] + 3, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event_count.__temp39": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_bridge_back_event_count.__temp39",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 61,
                            "offset": 1
                        },
                        "pc": 919,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event_count.__wrapped_func": {
                "destination": "__main__.get_bridge_back_event_count",
                "type": "alias"
            },
            "__wrappers__.get_bridge_back_event_count.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__wrappers__.get_bridge_back_event_count.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 61,
                            "offset": 0
                        },
                        "pc": 917,
                        "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 61,
                            "offset": 84
                        },
                        "pc": 928,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event_count.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_bridge_back_event_count.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 61,
                            "offset": 0
                        },
                        "pc": 917,
                        "value": "[cast([fp + (-5)] + 2, felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 61,
                            "offset": 84
                        },
                        "pc": 928,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 61,
                            "offset": 92
                        },
                        "pc": 931,
                        "value": "[cast(ap + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event_count.ret_value": {
                "cairo_type": "(count: felt)",
                "full_name": "__wrappers__.get_bridge_back_event_count.ret_value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 61,
                            "offset": 84
                        },
                        "pc": 928,
                        "value": "[cast(ap + (-1), (count: felt)*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event_count.retdata": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_bridge_back_event_count.retdata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 61,
                            "offset": 92
                        },
                        "pc": 931,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event_count.retdata_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_bridge_back_event_count.retdata_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 61,
                            "offset": 92
                        },
                        "pc": 931,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event_count.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_bridge_back_event_count.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 61,
                            "offset": 0
                        },
                        "pc": 917,
                        "value": "[cast([fp + (-5)], felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 61,
                            "offset": 84
                        },
                        "pc": 928,
                        "value": "[cast(ap + (-4), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event_count_encode_return": {
                "decorators": [],
                "pc": 908,
                "type": "function"
            },
            "__wrappers__.get_bridge_back_event_count_encode_return.Args": {
                "full_name": "__wrappers__.get_bridge_back_event_count_encode_return.Args",
                "members": {
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "ret_value": {
                        "cairo_type": "(count: felt)",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__wrappers__.get_bridge_back_event_count_encode_return.ImplicitArgs": {
                "full_name": "__wrappers__.get_bridge_back_event_count_encode_return.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.get_bridge_back_event_count_encode_return.Return": {
                "cairo_type": "(range_check_ptr: felt, data_len: felt, data: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.get_bridge_back_event_count_encode_return.SIZEOF_LOCALS": {
                "type": "const",
                "value": 1
            },
            "__wrappers__.get_bridge_back_event_count_encode_return.__return_value_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_bridge_back_event_count_encode_return.__return_value_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 60,
                            "offset": 1
                        },
                        "pc": 910,
                        "value": "[cast(fp, felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 60,
                            "offset": 1
                        },
                        "pc": 911,
                        "value": "cast([fp] + 1, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event_count_encode_return.__return_value_ptr_start": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_bridge_back_event_count_encode_return.__return_value_ptr_start",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 60,
                            "offset": 1
                        },
                        "pc": 910,
                        "value": "[cast(fp, felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event_count_encode_return.__temp38": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_bridge_back_event_count_encode_return.__temp38",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 60,
                            "offset": 2
                        },
                        "pc": 913,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event_count_encode_return.memcpy": {
                "destination": "starkware.cairo.common.memcpy.memcpy",
                "type": "alias"
            },
            "__wrappers__.get_bridge_back_event_count_encode_return.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_bridge_back_event_count_encode_return.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 60,
                            "offset": 0
                        },
                        "pc": 908,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event_count_encode_return.ret_value": {
                "cairo_type": "(count: felt)",
                "full_name": "__wrappers__.get_bridge_back_event_count_encode_return.ret_value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 60,
                            "offset": 0
                        },
                        "pc": 908,
                        "value": "[cast(fp + (-4), (count: felt)*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event_encode_return": {
                "decorators": [],
                "pc": 947,
                "type": "function"
            },
            "__wrappers__.get_bridge_back_event_encode_return.Args": {
                "full_name": "__wrappers__.get_bridge_back_event_encode_return.Args",
                "members": {
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "ret_value": {
                        "cairo_type": "(token_id: felt)",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__wrappers__.get_bridge_back_event_encode_return.ImplicitArgs": {
                "full_name": "__wrappers__.get_bridge_back_event_encode_return.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.get_bridge_back_event_encode_return.Return": {
                "cairo_type": "(range_check_ptr: felt, data_len: felt, data: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.get_bridge_back_event_encode_return.SIZEOF_LOCALS": {
                "type": "const",
                "value": 1
            },
            "__wrappers__.get_bridge_back_event_encode_return.__return_value_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_bridge_back_event_encode_return.__return_value_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 63,
                            "offset": 1
                        },
                        "pc": 949,
                        "value": "[cast(fp, felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 63,
                            "offset": 1
                        },
                        "pc": 950,
                        "value": "cast([fp] + 1, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event_encode_return.__return_value_ptr_start": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_bridge_back_event_encode_return.__return_value_ptr_start",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 63,
                            "offset": 1
                        },
                        "pc": 949,
                        "value": "[cast(fp, felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event_encode_return.__temp40": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_bridge_back_event_encode_return.__temp40",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 63,
                            "offset": 2
                        },
                        "pc": 952,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event_encode_return.memcpy": {
                "destination": "starkware.cairo.common.memcpy.memcpy",
                "type": "alias"
            },
            "__wrappers__.get_bridge_back_event_encode_return.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_bridge_back_event_encode_return.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 63,
                            "offset": 0
                        },
                        "pc": 947,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_bridge_back_event_encode_return.ret_value": {
                "cairo_type": "(token_id: felt)",
                "full_name": "__wrappers__.get_bridge_back_event_encode_return.ret_value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 63,
                            "offset": 0
                        },
                        "pc": 947,
                        "value": "[cast(fp + (-4), (token_id: felt)*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_collateral_data": {
                "decorators": [
                    "view"
                ],
                "pc": 547,
                "type": "function"
            },
            "__wrappers__.get_collateral_data.Args": {
                "full_name": "__wrappers__.get_collateral_data.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.get_collateral_data.ImplicitArgs": {
                "full_name": "__wrappers__.get_collateral_data.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.get_collateral_data.Return": {
                "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, size: felt, retdata: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.get_collateral_data.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__wrappers__.get_collateral_data.__calldata_actual_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_collateral_data.__calldata_actual_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 44,
                            "offset": 0
                        },
                        "pc": 547,
                        "value": "cast([fp + (-3)] + 2 - [fp + (-3)], felt)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_collateral_data.__calldata_arg__l1_token_address": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_collateral_data.__calldata_arg__l1_token_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 44,
                            "offset": 0
                        },
                        "pc": 547,
                        "value": "[cast([fp + (-3)], felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_collateral_data.__calldata_arg__token_id": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_collateral_data.__calldata_arg__token_id",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 44,
                            "offset": 0
                        },
                        "pc": 547,
                        "value": "[cast([fp + (-3)] + 1, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_collateral_data.__calldata_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_collateral_data.__calldata_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 44,
                            "offset": 0
                        },
                        "pc": 547,
                        "value": "[cast(fp + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 44,
                            "offset": 0
                        },
                        "pc": 547,
                        "value": "cast([fp + (-3)] + 1, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 44,
                            "offset": 0
                        },
                        "pc": 547,
                        "value": "cast([fp + (-3)] + 2, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_collateral_data.__temp30": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_collateral_data.__temp30",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 44,
                            "offset": 1
                        },
                        "pc": 549,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_collateral_data.__wrapped_func": {
                "destination": "__main__.get_collateral_data",
                "type": "alias"
            },
            "__wrappers__.get_collateral_data.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__wrappers__.get_collateral_data.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 44,
                            "offset": 0
                        },
                        "pc": 547,
                        "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 44,
                            "offset": 76
                        },
                        "pc": 557,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_collateral_data.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_collateral_data.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 44,
                            "offset": 0
                        },
                        "pc": 547,
                        "value": "[cast([fp + (-5)] + 2, felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 44,
                            "offset": 76
                        },
                        "pc": 557,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 44,
                            "offset": 84
                        },
                        "pc": 560,
                        "value": "[cast(ap + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_collateral_data.ret_value": {
                "cairo_type": "(res: felt)",
                "full_name": "__wrappers__.get_collateral_data.ret_value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 44,
                            "offset": 76
                        },
                        "pc": 557,
                        "value": "[cast(ap + (-1), (res: felt)*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_collateral_data.retdata": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_collateral_data.retdata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 44,
                            "offset": 84
                        },
                        "pc": 560,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_collateral_data.retdata_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_collateral_data.retdata_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 44,
                            "offset": 84
                        },
                        "pc": 560,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_collateral_data.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_collateral_data.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 44,
                            "offset": 0
                        },
                        "pc": 547,
                        "value": "[cast([fp + (-5)], felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 44,
                            "offset": 76
                        },
                        "pc": 557,
                        "value": "[cast(ap + (-4), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_collateral_data_encode_return": {
                "decorators": [],
                "pc": 538,
                "type": "function"
            },
            "__wrappers__.get_collateral_data_encode_return.Args": {
                "full_name": "__wrappers__.get_collateral_data_encode_return.Args",
                "members": {
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "ret_value": {
                        "cairo_type": "(res: felt)",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__wrappers__.get_collateral_data_encode_return.ImplicitArgs": {
                "full_name": "__wrappers__.get_collateral_data_encode_return.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.get_collateral_data_encode_return.Return": {
                "cairo_type": "(range_check_ptr: felt, data_len: felt, data: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.get_collateral_data_encode_return.SIZEOF_LOCALS": {
                "type": "const",
                "value": 1
            },
            "__wrappers__.get_collateral_data_encode_return.__return_value_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_collateral_data_encode_return.__return_value_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 1
                        },
                        "pc": 540,
                        "value": "[cast(fp, felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 1
                        },
                        "pc": 541,
                        "value": "cast([fp] + 1, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_collateral_data_encode_return.__return_value_ptr_start": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_collateral_data_encode_return.__return_value_ptr_start",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 1
                        },
                        "pc": 540,
                        "value": "[cast(fp, felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_collateral_data_encode_return.__temp29": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_collateral_data_encode_return.__temp29",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 2
                        },
                        "pc": 543,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_collateral_data_encode_return.memcpy": {
                "destination": "starkware.cairo.common.memcpy.memcpy",
                "type": "alias"
            },
            "__wrappers__.get_collateral_data_encode_return.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_collateral_data_encode_return.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 0
                        },
                        "pc": 538,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_collateral_data_encode_return.ret_value": {
                "cairo_type": "(res: felt)",
                "full_name": "__wrappers__.get_collateral_data_encode_return.ret_value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 0
                        },
                        "pc": 538,
                        "value": "[cast(fp + (-4), (res: felt)*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_l1_gateway": {
                "decorators": [
                    "view"
                ],
                "pc": 407,
                "type": "function"
            },
            "__wrappers__.get_l1_gateway.Args": {
                "full_name": "__wrappers__.get_l1_gateway.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.get_l1_gateway.ImplicitArgs": {
                "full_name": "__wrappers__.get_l1_gateway.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.get_l1_gateway.Return": {
                "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, size: felt, retdata: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.get_l1_gateway.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__wrappers__.get_l1_gateway.__calldata_actual_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_l1_gateway.__calldata_actual_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 33,
                            "offset": 0
                        },
                        "pc": 407,
                        "value": "cast([fp + (-3)] - [fp + (-3)], felt)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_l1_gateway.__calldata_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_l1_gateway.__calldata_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 33,
                            "offset": 0
                        },
                        "pc": 407,
                        "value": "[cast(fp + (-3), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_l1_gateway.__wrapped_func": {
                "destination": "__main__.get_l1_gateway",
                "type": "alias"
            },
            "__wrappers__.get_l1_gateway.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__wrappers__.get_l1_gateway.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 33,
                            "offset": 0
                        },
                        "pc": 407,
                        "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 33,
                            "offset": 28
                        },
                        "pc": 413,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_l1_gateway.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_l1_gateway.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 33,
                            "offset": 0
                        },
                        "pc": 407,
                        "value": "[cast([fp + (-5)] + 2, felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 33,
                            "offset": 28
                        },
                        "pc": 413,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 33,
                            "offset": 36
                        },
                        "pc": 416,
                        "value": "[cast(ap + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_l1_gateway.ret_value": {
                "cairo_type": "(res: felt)",
                "full_name": "__wrappers__.get_l1_gateway.ret_value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 33,
                            "offset": 28
                        },
                        "pc": 413,
                        "value": "[cast(ap + (-1), (res: felt)*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_l1_gateway.retdata": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_l1_gateway.retdata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 33,
                            "offset": 36
                        },
                        "pc": 416,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_l1_gateway.retdata_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_l1_gateway.retdata_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 33,
                            "offset": 36
                        },
                        "pc": 416,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_l1_gateway.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_l1_gateway.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 33,
                            "offset": 0
                        },
                        "pc": 407,
                        "value": "[cast([fp + (-5)], felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 33,
                            "offset": 28
                        },
                        "pc": 413,
                        "value": "[cast(ap + (-4), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_l1_gateway_encode_return": {
                "decorators": [],
                "pc": 398,
                "type": "function"
            },
            "__wrappers__.get_l1_gateway_encode_return.Args": {
                "full_name": "__wrappers__.get_l1_gateway_encode_return.Args",
                "members": {
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "ret_value": {
                        "cairo_type": "(res: felt)",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__wrappers__.get_l1_gateway_encode_return.ImplicitArgs": {
                "full_name": "__wrappers__.get_l1_gateway_encode_return.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.get_l1_gateway_encode_return.Return": {
                "cairo_type": "(range_check_ptr: felt, data_len: felt, data: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.get_l1_gateway_encode_return.SIZEOF_LOCALS": {
                "type": "const",
                "value": 1
            },
            "__wrappers__.get_l1_gateway_encode_return.__return_value_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_l1_gateway_encode_return.__return_value_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 32,
                            "offset": 1
                        },
                        "pc": 400,
                        "value": "[cast(fp, felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 32,
                            "offset": 1
                        },
                        "pc": 401,
                        "value": "cast([fp] + 1, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_l1_gateway_encode_return.__return_value_ptr_start": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_l1_gateway_encode_return.__return_value_ptr_start",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 32,
                            "offset": 1
                        },
                        "pc": 400,
                        "value": "[cast(fp, felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_l1_gateway_encode_return.__temp28": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_l1_gateway_encode_return.__temp28",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 32,
                            "offset": 2
                        },
                        "pc": 403,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_l1_gateway_encode_return.memcpy": {
                "destination": "starkware.cairo.common.memcpy.memcpy",
                "type": "alias"
            },
            "__wrappers__.get_l1_gateway_encode_return.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_l1_gateway_encode_return.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 32,
                            "offset": 0
                        },
                        "pc": 398,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_l1_gateway_encode_return.ret_value": {
                "cairo_type": "(res: felt)",
                "full_name": "__wrappers__.get_l1_gateway_encode_return.ret_value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 32,
                            "offset": 0
                        },
                        "pc": 398,
                        "value": "[cast(fp + (-4), (res: felt)*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.increase_balance": {
                "decorators": [
                    "external"
                ],
                "pc": 1075,
                "type": "function"
            },
            "__wrappers__.increase_balance.Args": {
                "full_name": "__wrappers__.increase_balance.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.increase_balance.ImplicitArgs": {
                "full_name": "__wrappers__.increase_balance.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.increase_balance.Return": {
                "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, size: felt, retdata: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.increase_balance.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__wrappers__.increase_balance.__calldata_actual_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.increase_balance.__calldata_actual_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 71,
                            "offset": 0
                        },
                        "pc": 1075,
                        "value": "cast([fp + (-3)] + 1 - [fp + (-3)], felt)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.increase_balance.__calldata_arg_amount": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.increase_balance.__calldata_arg_amount",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 71,
                            "offset": 0
                        },
                        "pc": 1075,
                        "value": "[cast([fp + (-3)], felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.increase_balance.__calldata_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.increase_balance.__calldata_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 71,
                            "offset": 0
                        },
                        "pc": 1075,
                        "value": "[cast(fp + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 71,
                            "offset": 0
                        },
                        "pc": 1075,
                        "value": "cast([fp + (-3)] + 1, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.increase_balance.__temp43": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.increase_balance.__temp43",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 71,
                            "offset": 1
                        },
                        "pc": 1077,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.increase_balance.__wrapped_func": {
                "destination": "__main__.increase_balance",
                "type": "alias"
            },
            "__wrappers__.increase_balance.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__wrappers__.increase_balance.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 71,
                            "offset": 0
                        },
                        "pc": 1075,
                        "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 71,
                            "offset": 57
                        },
                        "pc": 1084,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.increase_balance.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.increase_balance.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 71,
                            "offset": 0
                        },
                        "pc": 1075,
                        "value": "[cast([fp + (-5)] + 2, felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 71,
                            "offset": 57
                        },
                        "pc": 1084,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.increase_balance.ret_value": {
                "cairo_type": "()",
                "full_name": "__wrappers__.increase_balance.ret_value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 71,
                            "offset": 57
                        },
                        "pc": 1084,
                        "value": "[cast(ap + 0, ()*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.increase_balance.retdata": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.increase_balance.retdata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 71,
                            "offset": 58
                        },
                        "pc": 1086,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.increase_balance.retdata_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.increase_balance.retdata_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 71,
                            "offset": 58
                        },
                        "pc": 1086,
                        "value": "cast(0, felt)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.increase_balance.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.increase_balance.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 71,
                            "offset": 0
                        },
                        "pc": 1075,
                        "value": "[cast([fp + (-5)], felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 71,
                            "offset": 57
                        },
                        "pc": 1084,
                        "value": "[cast(ap + (-3), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.increase_balance_encode_return.memcpy": {
                "destination": "starkware.cairo.common.memcpy.memcpy",
                "type": "alias"
            },
            "__wrappers__.initialize": {
                "decorators": [
                    "external"
                ],
                "pc": 618,
                "type": "function"
            },
            "__wrappers__.initialize.Args": {
                "full_name": "__wrappers__.initialize.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.initialize.ImplicitArgs": {
                "full_name": "__wrappers__.initialize.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.initialize.Return": {
                "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, size: felt, retdata: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.initialize.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__wrappers__.initialize.__calldata_actual_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.initialize.__calldata_actual_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 0
                        },
                        "pc": 618,
                        "value": "cast([fp + (-3)] + 2 - [fp + (-3)], felt)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.initialize.__calldata_arg__l1_gateway": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.initialize.__calldata_arg__l1_gateway",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 0
                        },
                        "pc": 618,
                        "value": "[cast([fp + (-3)], felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.initialize.__calldata_arg_token_class_hash": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.initialize.__calldata_arg_token_class_hash",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 0
                        },
                        "pc": 618,
                        "value": "[cast([fp + (-3)] + 1, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.initialize.__calldata_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.initialize.__calldata_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 0
                        },
                        "pc": 618,
                        "value": "[cast(fp + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 0
                        },
                        "pc": 618,
                        "value": "cast([fp + (-3)] + 1, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 0
                        },
                        "pc": 618,
                        "value": "cast([fp + (-3)] + 2, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.initialize.__temp33": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.initialize.__temp33",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 1
                        },
                        "pc": 620,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.initialize.__wrapped_func": {
                "destination": "__main__.initialize",
                "type": "alias"
            },
            "__wrappers__.initialize.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__wrappers__.initialize.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 0
                        },
                        "pc": 618,
                        "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 155
                        },
                        "pc": 628,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.initialize.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.initialize.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 0
                        },
                        "pc": 618,
                        "value": "[cast([fp + (-5)] + 2, felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 155
                        },
                        "pc": 628,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.initialize.ret_value": {
                "cairo_type": "()",
                "full_name": "__wrappers__.initialize.ret_value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 155
                        },
                        "pc": 628,
                        "value": "[cast(ap + 0, ()*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.initialize.retdata": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.initialize.retdata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 156
                        },
                        "pc": 630,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.initialize.retdata_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.initialize.retdata_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 156
                        },
                        "pc": 630,
                        "value": "cast(0, felt)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.initialize.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.initialize.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 0
                        },
                        "pc": 618,
                        "value": "[cast([fp + (-5)], felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 155
                        },
                        "pc": 628,
                        "value": "[cast(ap + (-3), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.initialize_encode_return.memcpy": {
                "destination": "starkware.cairo.common.memcpy.memcpy",
                "type": "alias"
            },
            "__wrappers__.stake": {
                "decorators": [
                    "external"
                ],
                "pc": 1040,
                "type": "function"
            },
            "__wrappers__.stake.Args": {
                "full_name": "__wrappers__.stake.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.stake.ImplicitArgs": {
                "full_name": "__wrappers__.stake.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.stake.Return": {
                "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, size: felt, retdata: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.stake.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__wrappers__.stake.__calldata_actual_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.stake.__calldata_actual_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 69,
                            "offset": 0
                        },
                        "pc": 1040,
                        "value": "cast([fp + (-3)] + 2 - [fp + (-3)], felt)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.stake.__calldata_arg_amount": {
                "cairo_type": "starkware.cairo.common.uint256.Uint256",
                "full_name": "__wrappers__.stake.__calldata_arg_amount",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 69,
                            "offset": 0
                        },
                        "pc": 1040,
                        "value": "[cast([fp + (-3)], starkware.cairo.common.uint256.Uint256*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.stake.__calldata_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.stake.__calldata_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 69,
                            "offset": 0
                        },
                        "pc": 1040,
                        "value": "[cast(fp + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 69,
                            "offset": 0
                        },
                        "pc": 1040,
                        "value": "cast([fp + (-3)] + 2, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.stake.__temp42": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.stake.__temp42",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 69,
                            "offset": 1
                        },
                        "pc": 1042,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.stake.__wrapped_func": {
                "destination": "__main__.stake",
                "type": "alias"
            },
            "__wrappers__.stake.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__wrappers__.stake.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 69,
                            "offset": 0
                        },
                        "pc": 1040,
                        "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 69,
                            "offset": 101
                        },
                        "pc": 1050,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.stake.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.stake.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 69,
                            "offset": 0
                        },
                        "pc": 1040,
                        "value": "[cast([fp + (-5)] + 2, felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 69,
                            "offset": 101
                        },
                        "pc": 1050,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.stake.ret_value": {
                "cairo_type": "()",
                "full_name": "__wrappers__.stake.ret_value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 69,
                            "offset": 101
                        },
                        "pc": 1050,
                        "value": "[cast(ap + 0, ()*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.stake.retdata": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.stake.retdata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 69,
                            "offset": 102
                        },
                        "pc": 1052,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.stake.retdata_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.stake.retdata_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 69,
                            "offset": 102
                        },
                        "pc": 1052,
                        "value": "cast(0, felt)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.stake.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.stake.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 69,
                            "offset": 0
                        },
                        "pc": 1040,
                        "value": "[cast([fp + (-5)], felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 69,
                            "offset": 101
                        },
                        "pc": 1050,
                        "value": "[cast(ap + (-3), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.stake_encode_return.memcpy": {
                "destination": "starkware.cairo.common.memcpy.memcpy",
                "type": "alias"
            },
            "starkware.cairo.common.alloc.alloc": {
                "decorators": [],
                "pc": 0,
                "type": "function"
            },
            "starkware.cairo.common.alloc.alloc.Args": {
                "full_name": "starkware.cairo.common.alloc.alloc.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "starkware.cairo.common.alloc.alloc.ImplicitArgs": {
                "full_name": "starkware.cairo.common.alloc.alloc.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "starkware.cairo.common.alloc.alloc.Return": {
                "cairo_type": "(ptr: felt*)",
                "type": "type_definition"
            },
            "starkware.cairo.common.alloc.alloc.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.cairo.common.bitwise.ALL_ONES": {
                "type": "const",
                "value": -106710729501573572985208420194530329073740042555888586719234
            },
            "starkware.cairo.common.bitwise.BitwiseBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.BitwiseBuiltin",
                "type": "alias"
            },
            "starkware.cairo.common.bool.FALSE": {
                "type": "const",
                "value": 0
            },
            "starkware.cairo.common.bool.TRUE": {
                "type": "const",
                "value": 1
            },
            "starkware.cairo.common.cairo_builtins.BitwiseBuiltin": {
                "full_name": "starkware.cairo.common.cairo_builtins.BitwiseBuiltin",
                "members": {
                    "x": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "x_and_y": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "x_or_y": {
                        "cairo_type": "felt",
                        "offset": 4
                    },
                    "x_xor_y": {
                        "cairo_type": "felt",
                        "offset": 3
                    },
                    "y": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 5,
                "type": "struct"
            },
            "starkware.cairo.common.cairo_builtins.EcOpBuiltin": {
                "full_name": "starkware.cairo.common.cairo_builtins.EcOpBuiltin",
                "members": {
                    "m": {
                        "cairo_type": "felt",
                        "offset": 4
                    },
                    "p": {
                        "cairo_type": "starkware.cairo.common.ec_point.EcPoint",
                        "offset": 0
                    },
                    "q": {
                        "cairo_type": "starkware.cairo.common.ec_point.EcPoint",
                        "offset": 2
                    },
                    "r": {
                        "cairo_type": "starkware.cairo.common.ec_point.EcPoint",
                        "offset": 5
                    }
                },
                "size": 7,
                "type": "struct"
            },
            "starkware.cairo.common.cairo_builtins.EcPoint": {
                "destination": "starkware.cairo.common.ec_point.EcPoint",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_builtins.HashBuiltin": {
                "full_name": "starkware.cairo.common.cairo_builtins.HashBuiltin",
                "members": {
                    "result": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "x": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "y": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "starkware.cairo.common.cairo_builtins.KeccakBuiltin": {
                "full_name": "starkware.cairo.common.cairo_builtins.KeccakBuiltin",
                "members": {
                    "input": {
                        "cairo_type": "starkware.cairo.common.keccak_state.KeccakBuiltinState",
                        "offset": 0
                    },
                    "output": {
                        "cairo_type": "starkware.cairo.common.keccak_state.KeccakBuiltinState",
                        "offset": 8
                    }
                },
                "size": 16,
                "type": "struct"
            },
            "starkware.cairo.common.cairo_builtins.KeccakBuiltinState": {
                "destination": "starkware.cairo.common.keccak_state.KeccakBuiltinState",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_builtins.SignatureBuiltin": {
                "full_name": "starkware.cairo.common.cairo_builtins.SignatureBuiltin",
                "members": {
                    "message": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "pub_key": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.cairo.common.dict_access.DictAccess": {
                "full_name": "starkware.cairo.common.dict_access.DictAccess",
                "members": {
                    "key": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "new_value": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "prev_value": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "starkware.cairo.common.ec_point.EcPoint": {
                "full_name": "starkware.cairo.common.ec_point.EcPoint",
                "members": {
                    "x": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "y": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.cairo.common.hash.HashBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
                "type": "alias"
            },
            "starkware.cairo.common.hash.hash2": {
                "decorators": [],
                "pc": 3,
                "type": "function"
            },
            "starkware.cairo.common.hash.hash2.Args": {
                "full_name": "starkware.cairo.common.hash.hash2.Args",
                "members": {
                    "x": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "y": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.cairo.common.hash.hash2.ImplicitArgs": {
                "full_name": "starkware.cairo.common.hash.hash2.ImplicitArgs",
                "members": {
                    "hash_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.cairo.common.hash.hash2.Return": {
                "cairo_type": "(result: felt)",
                "type": "type_definition"
            },
            "starkware.cairo.common.hash.hash2.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.cairo.common.hash.hash2.hash_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "starkware.cairo.common.hash.hash2.hash_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 1,
                            "offset": 0
                        },
                        "pc": 3,
                        "value": "[cast(fp + (-5), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 1,
                            "offset": 0
                        },
                        "pc": 5,
                        "value": "cast([fp + (-5)] + 3, starkware.cairo.common.cairo_builtins.HashBuiltin*)"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.hash.hash2.result": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.hash.hash2.result",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 1,
                            "offset": 0
                        },
                        "pc": 5,
                        "value": "[cast([fp + (-5)] + 2, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.hash.hash2.x": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.hash.hash2.x",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 1,
                            "offset": 0
                        },
                        "pc": 3,
                        "value": "[cast(fp + (-4), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.hash.hash2.y": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.hash.hash2.y",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 1,
                            "offset": 0
                        },
                        "pc": 3,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.keccak_state.KeccakBuiltinState": {
                "full_name": "starkware.cairo.common.keccak_state.KeccakBuiltinState",
                "members": {
                    "s0": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "s1": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "s2": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "s3": {
                        "cairo_type": "felt",
                        "offset": 3
                    },
                    "s4": {
                        "cairo_type": "felt",
                        "offset": 4
                    },
                    "s5": {
                        "cairo_type": "felt",
                        "offset": 5
                    },
                    "s6": {
                        "cairo_type": "felt",
                        "offset": 6
                    },
                    "s7": {
                        "cairo_type": "felt",
                        "offset": 7
                    }
                },
                "size": 8,
                "type": "struct"
            },
            "starkware.cairo.common.math.FALSE": {
                "destination": "starkware.cairo.common.bool.FALSE",
                "type": "alias"
            },
            "starkware.cairo.common.math.TRUE": {
                "destination": "starkware.cairo.common.bool.TRUE",
                "type": "alias"
            },
            "starkware.cairo.common.math.assert_250_bit": {
                "decorators": [
                    "known_ap_change"
                ],
                "pc": 33,
                "type": "function"
            },
            "starkware.cairo.common.math.assert_250_bit.Args": {
                "full_name": "starkware.cairo.common.math.assert_250_bit.Args",
                "members": {
                    "value": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.cairo.common.math.assert_250_bit.HIGH_BOUND": {
                "type": "const",
                "value": 5316911983139663491615228241121378304
            },
            "starkware.cairo.common.math.assert_250_bit.ImplicitArgs": {
                "full_name": "starkware.cairo.common.math.assert_250_bit.ImplicitArgs",
                "members": {
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.cairo.common.math.assert_250_bit.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "starkware.cairo.common.math.assert_250_bit.SHIFT": {
                "type": "const",
                "value": 340282366920938463463374607431768211456
            },
            "starkware.cairo.common.math.assert_250_bit.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.cairo.common.math.assert_250_bit.UPPER_BOUND": {
                "type": "const",
                "value": 1809251394333065553493296640760748560207343510400633813116524750123642650624
            },
            "starkware.cairo.common.math.assert_250_bit.__temp1": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.math.assert_250_bit.__temp1",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 5,
                            "offset": 1
                        },
                        "pc": 35,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.math.assert_250_bit.__temp2": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.math.assert_250_bit.__temp2",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 5,
                            "offset": 2
                        },
                        "pc": 36,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.math.assert_250_bit.__temp3": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.math.assert_250_bit.__temp3",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 5,
                            "offset": 3
                        },
                        "pc": 37,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.math.assert_250_bit.__temp4": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.math.assert_250_bit.__temp4",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 5,
                            "offset": 4
                        },
                        "pc": 39,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.math.assert_250_bit.__temp5": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.math.assert_250_bit.__temp5",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 5,
                            "offset": 5
                        },
                        "pc": 41,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.math.assert_250_bit.__temp6": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.math.assert_250_bit.__temp6",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 5,
                            "offset": 6
                        },
                        "pc": 42,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.math.assert_250_bit.high": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.math.assert_250_bit.high",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 5,
                            "offset": 0
                        },
                        "pc": 33,
                        "value": "[cast([fp + (-4)] + 1, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.math.assert_250_bit.low": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.math.assert_250_bit.low",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 5,
                            "offset": 0
                        },
                        "pc": 33,
                        "value": "[cast([fp + (-4)], felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.math.assert_250_bit.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.math.assert_250_bit.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 5,
                            "offset": 0
                        },
                        "pc": 33,
                        "value": "[cast(fp + (-4), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 5,
                            "offset": 6
                        },
                        "pc": 43,
                        "value": "cast([fp + (-4)] + 3, felt)"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.math.assert_250_bit.value": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.math.assert_250_bit.value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 5,
                            "offset": 0
                        },
                        "pc": 33,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.math.assert_nn": {
                "decorators": [],
                "pc": 29,
                "type": "function"
            },
            "starkware.cairo.common.math.assert_nn.Args": {
                "full_name": "starkware.cairo.common.math.assert_nn.Args",
                "members": {
                    "a": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.cairo.common.math.assert_nn.ImplicitArgs": {
                "full_name": "starkware.cairo.common.math.assert_nn.ImplicitArgs",
                "members": {
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.cairo.common.math.assert_nn.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "starkware.cairo.common.math.assert_nn.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.cairo.common.math.assert_nn.a": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.math.assert_nn.a",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 4,
                            "offset": 0
                        },
                        "pc": 29,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.math.assert_nn.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.math.assert_nn.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 4,
                            "offset": 0
                        },
                        "pc": 29,
                        "value": "[cast(fp + (-4), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 4,
                            "offset": 0
                        },
                        "pc": 30,
                        "value": "cast([fp + (-4)] + 1, felt)"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.math.assert_not_zero": {
                "decorators": [],
                "pc": 24,
                "type": "function"
            },
            "starkware.cairo.common.math.assert_not_zero.Args": {
                "full_name": "starkware.cairo.common.math.assert_not_zero.Args",
                "members": {
                    "value": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.cairo.common.math.assert_not_zero.ImplicitArgs": {
                "full_name": "starkware.cairo.common.math.assert_not_zero.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "starkware.cairo.common.math.assert_not_zero.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "starkware.cairo.common.math.assert_not_zero.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.cairo.common.math.assert_not_zero.value": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.math.assert_not_zero.value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 3,
                            "offset": 0
                        },
                        "pc": 24,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.math_cmp.RC_BOUND": {
                "type": "const",
                "value": 340282366920938463463374607431768211456
            },
            "starkware.cairo.common.math_cmp.assert_le_felt": {
                "destination": "starkware.cairo.common.math.assert_le_felt",
                "type": "alias"
            },
            "starkware.cairo.common.math_cmp.assert_lt_felt": {
                "destination": "starkware.cairo.common.math.assert_lt_felt",
                "type": "alias"
            },
            "starkware.cairo.common.memcpy.memcpy": {
                "decorators": [],
                "pc": 9,
                "type": "function"
            },
            "starkware.cairo.common.memcpy.memcpy.Args": {
                "full_name": "starkware.cairo.common.memcpy.memcpy.Args",
                "members": {
                    "dst": {
                        "cairo_type": "felt*",
                        "offset": 0
                    },
                    "len": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "src": {
                        "cairo_type": "felt*",
                        "offset": 1
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "starkware.cairo.common.memcpy.memcpy.ImplicitArgs": {
                "full_name": "starkware.cairo.common.memcpy.memcpy.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "starkware.cairo.common.memcpy.memcpy.LoopFrame": {
                "full_name": "starkware.cairo.common.memcpy.memcpy.LoopFrame",
                "members": {
                    "dst": {
                        "cairo_type": "felt*",
                        "offset": 0
                    },
                    "src": {
                        "cairo_type": "felt*",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.cairo.common.memcpy.memcpy.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "starkware.cairo.common.memcpy.memcpy.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.cairo.common.memcpy.memcpy.__temp0": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.memcpy.memcpy.__temp0",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 2,
                            "offset": 3
                        },
                        "pc": 15,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.memcpy.memcpy.continue_copying": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.memcpy.memcpy.continue_copying",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 2,
                            "offset": 3
                        },
                        "pc": 16,
                        "value": "[cast(ap, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.memcpy.memcpy.dst": {
                "cairo_type": "felt*",
                "full_name": "starkware.cairo.common.memcpy.memcpy.dst",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 2,
                            "offset": 0
                        },
                        "pc": 9,
                        "value": "[cast(fp + (-5), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.memcpy.memcpy.frame": {
                "cairo_type": "starkware.cairo.common.memcpy.memcpy.LoopFrame",
                "full_name": "starkware.cairo.common.memcpy.memcpy.frame",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 2,
                            "offset": 2
                        },
                        "pc": 14,
                        "value": "[cast(ap + (-2), starkware.cairo.common.memcpy.memcpy.LoopFrame*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 2,
                            "offset": 2
                        },
                        "pc": 14,
                        "value": "[cast(ap + (-2), starkware.cairo.common.memcpy.memcpy.LoopFrame*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.memcpy.memcpy.len": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.memcpy.memcpy.len",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 2,
                            "offset": 0
                        },
                        "pc": 9,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.memcpy.memcpy.loop": {
                "pc": 14,
                "type": "label"
            },
            "starkware.cairo.common.memcpy.memcpy.next_frame": {
                "cairo_type": "starkware.cairo.common.memcpy.memcpy.LoopFrame*",
                "full_name": "starkware.cairo.common.memcpy.memcpy.next_frame",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 2,
                            "offset": 3
                        },
                        "pc": 16,
                        "value": "cast(ap + 1, starkware.cairo.common.memcpy.memcpy.LoopFrame*)"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.memcpy.memcpy.src": {
                "cairo_type": "felt*",
                "full_name": "starkware.cairo.common.memcpy.memcpy.src",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 2,
                            "offset": 0
                        },
                        "pc": 9,
                        "value": "[cast(fp + (-4), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.pow.assert_le": {
                "destination": "starkware.cairo.common.math.assert_le",
                "type": "alias"
            },
            "starkware.cairo.common.pow.get_ap": {
                "destination": "starkware.cairo.common.registers.get_ap",
                "type": "alias"
            },
            "starkware.cairo.common.pow.get_fp_and_pc": {
                "destination": "starkware.cairo.common.registers.get_fp_and_pc",
                "type": "alias"
            },
            "starkware.cairo.common.registers.get_ap": {
                "destination": "starkware.cairo.lang.compiler.lib.registers.get_ap",
                "type": "alias"
            },
            "starkware.cairo.common.registers.get_fp_and_pc": {
                "destination": "starkware.cairo.lang.compiler.lib.registers.get_fp_and_pc",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.ALL_ONES": {
                "type": "const",
                "value": 340282366920938463463374607431768211455
            },
            "starkware.cairo.common.uint256.BitwiseBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.BitwiseBuiltin",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.HALF_SHIFT": {
                "type": "const",
                "value": 18446744073709551616
            },
            "starkware.cairo.common.uint256.SHIFT": {
                "type": "const",
                "value": 340282366920938463463374607431768211456
            },
            "starkware.cairo.common.uint256.Uint256": {
                "full_name": "starkware.cairo.common.uint256.Uint256",
                "members": {
                    "high": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "low": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.cairo.common.uint256.assert_in_range": {
                "destination": "starkware.cairo.common.math.assert_in_range",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.assert_le": {
                "destination": "starkware.cairo.common.math.assert_le",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.assert_nn_le": {
                "destination": "starkware.cairo.common.math.assert_nn_le",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.assert_not_zero": {
                "destination": "starkware.cairo.common.math.assert_not_zero",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.bitwise_and": {
                "destination": "starkware.cairo.common.bitwise.bitwise_and",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.bitwise_or": {
                "destination": "starkware.cairo.common.bitwise.bitwise_or",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.bitwise_xor": {
                "destination": "starkware.cairo.common.bitwise.bitwise_xor",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.get_ap": {
                "destination": "starkware.cairo.common.registers.get_ap",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.get_fp_and_pc": {
                "destination": "starkware.cairo.common.registers.get_fp_and_pc",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.is_le": {
                "destination": "starkware.cairo.common.math_cmp.is_le",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.pow": {
                "destination": "starkware.cairo.common.pow.pow",
                "type": "alias"
            },
            "starkware.starknet.common.messages.SEND_MESSAGE_TO_L1_SELECTOR": {
                "destination": "starkware.starknet.common.syscalls.SEND_MESSAGE_TO_L1_SELECTOR",
                "type": "alias"
            },
            "starkware.starknet.common.messages.SendMessageToL1SysCall": {
                "destination": "starkware.starknet.common.syscalls.SendMessageToL1SysCall",
                "type": "alias"
            },
            "starkware.starknet.common.messages.send_message_to_l1": {
                "decorators": [],
                "pc": 147,
                "type": "function"
            },
            "starkware.starknet.common.messages.send_message_to_l1.Args": {
                "full_name": "starkware.starknet.common.messages.send_message_to_l1.Args",
                "members": {
                    "payload": {
                        "cairo_type": "felt*",
                        "offset": 2
                    },
                    "payload_size": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "to_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "starkware.starknet.common.messages.send_message_to_l1.ImplicitArgs": {
                "full_name": "starkware.starknet.common.messages.send_message_to_l1.ImplicitArgs",
                "members": {
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.messages.send_message_to_l1.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "starkware.starknet.common.messages.send_message_to_l1.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.starknet.common.messages.send_message_to_l1.__temp16": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.messages.send_message_to_l1.__temp16",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 14,
                            "offset": 1
                        },
                        "pc": 149,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.messages.send_message_to_l1.payload": {
                "cairo_type": "felt*",
                "full_name": "starkware.starknet.common.messages.send_message_to_l1.payload",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 14,
                            "offset": 0
                        },
                        "pc": 147,
                        "value": "[cast(fp + (-3), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.messages.send_message_to_l1.payload_size": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.messages.send_message_to_l1.payload_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 14,
                            "offset": 0
                        },
                        "pc": 147,
                        "value": "[cast(fp + (-4), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.messages.send_message_to_l1.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "starkware.starknet.common.messages.send_message_to_l1.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 14,
                            "offset": 0
                        },
                        "pc": 147,
                        "value": "[cast(fp + (-6), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 14,
                            "offset": 1
                        },
                        "pc": 153,
                        "value": "cast([fp + (-6)] + 4, felt*)"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.messages.send_message_to_l1.to_address": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.messages.send_message_to_l1.to_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 14,
                            "offset": 0
                        },
                        "pc": 147,
                        "value": "[cast(fp + (-5), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.storage.ADDR_BOUND": {
                "type": "const",
                "value": -106710729501573572985208420194530329073740042555888586719489
            },
            "starkware.starknet.common.storage.MAX_STORAGE_ITEM_SIZE": {
                "type": "const",
                "value": 256
            },
            "starkware.starknet.common.storage.assert_250_bit": {
                "destination": "starkware.cairo.common.math.assert_250_bit",
                "type": "alias"
            },
            "starkware.starknet.common.storage.normalize_address": {
                "decorators": [
                    "known_ap_change"
                ],
                "pc": 46,
                "type": "function"
            },
            "starkware.starknet.common.storage.normalize_address.Args": {
                "full_name": "starkware.starknet.common.storage.normalize_address.Args",
                "members": {
                    "addr": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.storage.normalize_address.ImplicitArgs": {
                "full_name": "starkware.starknet.common.storage.normalize_address.ImplicitArgs",
                "members": {
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.storage.normalize_address.Return": {
                "cairo_type": "(res: felt)",
                "type": "type_definition"
            },
            "starkware.starknet.common.storage.normalize_address.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.starknet.common.storage.normalize_address.__temp7": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.storage.normalize_address.__temp7",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 6,
                            "offset": 13
                        },
                        "pc": 57,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.storage.normalize_address.__temp8": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.storage.normalize_address.__temp8",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 6,
                            "offset": 13
                        },
                        "pc": 72,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.storage.normalize_address.addr": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.storage.normalize_address.addr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 6,
                            "offset": 0
                        },
                        "pc": 46,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.storage.normalize_address.is_250": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.storage.normalize_address.is_250",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 6,
                            "offset": 2
                        },
                        "pc": 66,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.storage.normalize_address.is_small": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.storage.normalize_address.is_small",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 6,
                            "offset": 1
                        },
                        "pc": 48,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.storage.normalize_address.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.storage.normalize_address.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 6,
                            "offset": 0
                        },
                        "pc": 46,
                        "value": "[cast(fp + (-4), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 6,
                            "offset": 12
                        },
                        "pc": 55,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 6,
                            "offset": 24
                        },
                        "pc": 61,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 6,
                            "offset": 24
                        },
                        "pc": 76,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 6,
                            "offset": 24
                        },
                        "pc": 84,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.storage.normalize_address.x": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.storage.normalize_address.x",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 6,
                            "offset": 1
                        },
                        "pc": 50,
                        "value": "cast([fp + (-3)] + 106710729501573572985208420194530329073740042555888586719489, felt)"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.storage.normalize_address.y": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.storage.normalize_address.y",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 6,
                            "offset": 1
                        },
                        "pc": 50,
                        "value": "cast((-1) - [fp + (-3)], felt)"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.CALL_CONTRACT_SELECTOR": {
                "type": "const",
                "value": 20853273475220472486191784820
            },
            "starkware.starknet.common.syscalls.CallContract": {
                "full_name": "starkware.starknet.common.syscalls.CallContract",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.CallContractRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.CallContractResponse",
                        "offset": 5
                    }
                },
                "size": 7,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.CallContractRequest": {
                "full_name": "starkware.starknet.common.syscalls.CallContractRequest",
                "members": {
                    "calldata": {
                        "cairo_type": "felt*",
                        "offset": 4
                    },
                    "calldata_size": {
                        "cairo_type": "felt",
                        "offset": 3
                    },
                    "contract_address": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "function_selector": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 5,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.CallContractResponse": {
                "full_name": "starkware.starknet.common.syscalls.CallContractResponse",
                "members": {
                    "retdata": {
                        "cairo_type": "felt*",
                        "offset": 1
                    },
                    "retdata_size": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.DELEGATE_CALL_SELECTOR": {
                "type": "const",
                "value": 21167594061783206823196716140
            },
            "starkware.starknet.common.syscalls.DELEGATE_L1_HANDLER_SELECTOR": {
                "type": "const",
                "value": 23274015802972845247556842986379118667122
            },
            "starkware.starknet.common.syscalls.DEPLOY_SELECTOR": {
                "type": "const",
                "value": 75202468540281
            },
            "starkware.starknet.common.syscalls.Deploy": {
                "full_name": "starkware.starknet.common.syscalls.Deploy",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.DeployRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.DeployResponse",
                        "offset": 6
                    }
                },
                "size": 9,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.DeployRequest": {
                "full_name": "starkware.starknet.common.syscalls.DeployRequest",
                "members": {
                    "class_hash": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "constructor_calldata": {
                        "cairo_type": "felt*",
                        "offset": 4
                    },
                    "constructor_calldata_size": {
                        "cairo_type": "felt",
                        "offset": 3
                    },
                    "contract_address_salt": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "deploy_from_zero": {
                        "cairo_type": "felt",
                        "offset": 5
                    },
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 6,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.DeployResponse": {
                "full_name": "starkware.starknet.common.syscalls.DeployResponse",
                "members": {
                    "constructor_retdata": {
                        "cairo_type": "felt*",
                        "offset": 2
                    },
                    "constructor_retdata_size": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "contract_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.DictAccess": {
                "destination": "starkware.cairo.common.dict_access.DictAccess",
                "type": "alias"
            },
            "starkware.starknet.common.syscalls.EMIT_EVENT_SELECTOR": {
                "type": "const",
                "value": 1280709301550335749748
            },
            "starkware.starknet.common.syscalls.EmitEvent": {
                "full_name": "starkware.starknet.common.syscalls.EmitEvent",
                "members": {
                    "data": {
                        "cairo_type": "felt*",
                        "offset": 4
                    },
                    "data_len": {
                        "cairo_type": "felt",
                        "offset": 3
                    },
                    "keys": {
                        "cairo_type": "felt*",
                        "offset": 2
                    },
                    "keys_len": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 5,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GET_BLOCK_NUMBER_SELECTOR": {
                "type": "const",
                "value": 1448089106835523001438702345020786
            },
            "starkware.starknet.common.syscalls.GET_BLOCK_TIMESTAMP_SELECTOR": {
                "type": "const",
                "value": 24294903732626645868215235778792757751152
            },
            "starkware.starknet.common.syscalls.GET_CALLER_ADDRESS_SELECTOR": {
                "type": "const",
                "value": 94901967781393078444254803017658102643
            },
            "starkware.starknet.common.syscalls.GET_CONTRACT_ADDRESS_SELECTOR": {
                "type": "const",
                "value": 6219495360805491471215297013070624192820083
            },
            "starkware.starknet.common.syscalls.GET_SEQUENCER_ADDRESS_SELECTOR": {
                "type": "const",
                "value": 1592190833581991703053805829594610833820054387
            },
            "starkware.starknet.common.syscalls.GET_TX_INFO_SELECTOR": {
                "type": "const",
                "value": 1317029390204112103023
            },
            "starkware.starknet.common.syscalls.GET_TX_SIGNATURE_SELECTOR": {
                "type": "const",
                "value": 1448089128652340074717162277007973
            },
            "starkware.starknet.common.syscalls.GetBlockNumber": {
                "full_name": "starkware.starknet.common.syscalls.GetBlockNumber",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetBlockNumberRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetBlockNumberResponse",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetBlockNumberRequest": {
                "full_name": "starkware.starknet.common.syscalls.GetBlockNumberRequest",
                "members": {
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetBlockNumberResponse": {
                "full_name": "starkware.starknet.common.syscalls.GetBlockNumberResponse",
                "members": {
                    "block_number": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetBlockTimestamp": {
                "full_name": "starkware.starknet.common.syscalls.GetBlockTimestamp",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetBlockTimestampRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetBlockTimestampResponse",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetBlockTimestampRequest": {
                "full_name": "starkware.starknet.common.syscalls.GetBlockTimestampRequest",
                "members": {
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetBlockTimestampResponse": {
                "full_name": "starkware.starknet.common.syscalls.GetBlockTimestampResponse",
                "members": {
                    "block_timestamp": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetCallerAddress": {
                "full_name": "starkware.starknet.common.syscalls.GetCallerAddress",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetCallerAddressRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetCallerAddressResponse",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetCallerAddressRequest": {
                "full_name": "starkware.starknet.common.syscalls.GetCallerAddressRequest",
                "members": {
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetCallerAddressResponse": {
                "full_name": "starkware.starknet.common.syscalls.GetCallerAddressResponse",
                "members": {
                    "caller_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetContractAddress": {
                "full_name": "starkware.starknet.common.syscalls.GetContractAddress",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetContractAddressRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetContractAddressResponse",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetContractAddressRequest": {
                "full_name": "starkware.starknet.common.syscalls.GetContractAddressRequest",
                "members": {
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetContractAddressResponse": {
                "full_name": "starkware.starknet.common.syscalls.GetContractAddressResponse",
                "members": {
                    "contract_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetSequencerAddress": {
                "full_name": "starkware.starknet.common.syscalls.GetSequencerAddress",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetSequencerAddressRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetSequencerAddressResponse",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetSequencerAddressRequest": {
                "full_name": "starkware.starknet.common.syscalls.GetSequencerAddressRequest",
                "members": {
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetSequencerAddressResponse": {
                "full_name": "starkware.starknet.common.syscalls.GetSequencerAddressResponse",
                "members": {
                    "sequencer_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetTxInfo": {
                "full_name": "starkware.starknet.common.syscalls.GetTxInfo",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetTxInfoRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetTxInfoResponse",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetTxInfoRequest": {
                "full_name": "starkware.starknet.common.syscalls.GetTxInfoRequest",
                "members": {
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetTxInfoResponse": {
                "full_name": "starkware.starknet.common.syscalls.GetTxInfoResponse",
                "members": {
                    "tx_info": {
                        "cairo_type": "starkware.starknet.common.syscalls.TxInfo*",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetTxSignature": {
                "full_name": "starkware.starknet.common.syscalls.GetTxSignature",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetTxSignatureRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetTxSignatureResponse",
                        "offset": 1
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetTxSignatureRequest": {
                "full_name": "starkware.starknet.common.syscalls.GetTxSignatureRequest",
                "members": {
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetTxSignatureResponse": {
                "full_name": "starkware.starknet.common.syscalls.GetTxSignatureResponse",
                "members": {
                    "signature": {
                        "cairo_type": "felt*",
                        "offset": 1
                    },
                    "signature_len": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.LIBRARY_CALL_L1_HANDLER_SELECTOR": {
                "type": "const",
                "value": 436233452754198157705746250789557519228244616562
            },
            "starkware.starknet.common.syscalls.LIBRARY_CALL_SELECTOR": {
                "type": "const",
                "value": 92376026794327011772951660
            },
            "starkware.starknet.common.syscalls.LibraryCall": {
                "full_name": "starkware.starknet.common.syscalls.LibraryCall",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.LibraryCallRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.CallContractResponse",
                        "offset": 5
                    }
                },
                "size": 7,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.LibraryCallRequest": {
                "full_name": "starkware.starknet.common.syscalls.LibraryCallRequest",
                "members": {
                    "calldata": {
                        "cairo_type": "felt*",
                        "offset": 4
                    },
                    "calldata_size": {
                        "cairo_type": "felt",
                        "offset": 3
                    },
                    "class_hash": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "function_selector": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 5,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.SEND_MESSAGE_TO_L1_SELECTOR": {
                "type": "const",
                "value": 433017908768303439907196859243777073
            },
            "starkware.starknet.common.syscalls.STORAGE_READ_SELECTOR": {
                "type": "const",
                "value": 100890693370601760042082660
            },
            "starkware.starknet.common.syscalls.STORAGE_WRITE_SELECTOR": {
                "type": "const",
                "value": 25828017502874050592466629733
            },
            "starkware.starknet.common.syscalls.SendMessageToL1SysCall": {
                "full_name": "starkware.starknet.common.syscalls.SendMessageToL1SysCall",
                "members": {
                    "payload_ptr": {
                        "cairo_type": "felt*",
                        "offset": 3
                    },
                    "payload_size": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "to_address": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 4,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.StorageRead": {
                "full_name": "starkware.starknet.common.syscalls.StorageRead",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.StorageReadRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.StorageReadResponse",
                        "offset": 2
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.StorageReadRequest": {
                "full_name": "starkware.starknet.common.syscalls.StorageReadRequest",
                "members": {
                    "address": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.StorageReadResponse": {
                "full_name": "starkware.starknet.common.syscalls.StorageReadResponse",
                "members": {
                    "value": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.StorageWrite": {
                "full_name": "starkware.starknet.common.syscalls.StorageWrite",
                "members": {
                    "address": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "value": {
                        "cairo_type": "felt",
                        "offset": 2
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.TxInfo": {
                "full_name": "starkware.starknet.common.syscalls.TxInfo",
                "members": {
                    "account_contract_address": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "chain_id": {
                        "cairo_type": "felt",
                        "offset": 6
                    },
                    "max_fee": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "nonce": {
                        "cairo_type": "felt",
                        "offset": 7
                    },
                    "signature": {
                        "cairo_type": "felt*",
                        "offset": 4
                    },
                    "signature_len": {
                        "cairo_type": "felt",
                        "offset": 3
                    },
                    "transaction_hash": {
                        "cairo_type": "felt",
                        "offset": 5
                    },
                    "version": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 8,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.call_contract": {
                "decorators": [],
                "pc": 86,
                "type": "function"
            },
            "starkware.starknet.common.syscalls.call_contract.Args": {
                "full_name": "starkware.starknet.common.syscalls.call_contract.Args",
                "members": {
                    "calldata": {
                        "cairo_type": "felt*",
                        "offset": 3
                    },
                    "calldata_size": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "contract_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "function_selector": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 4,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.call_contract.ImplicitArgs": {
                "full_name": "starkware.starknet.common.syscalls.call_contract.ImplicitArgs",
                "members": {
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.call_contract.Return": {
                "cairo_type": "(retdata_size: felt, retdata: felt*)",
                "type": "type_definition"
            },
            "starkware.starknet.common.syscalls.call_contract.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.starknet.common.syscalls.call_contract.__temp9": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.syscalls.call_contract.__temp9",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 7,
                            "offset": 1
                        },
                        "pc": 88,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.call_contract.calldata": {
                "cairo_type": "felt*",
                "full_name": "starkware.starknet.common.syscalls.call_contract.calldata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 7,
                            "offset": 0
                        },
                        "pc": 86,
                        "value": "[cast(fp + (-3), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.call_contract.calldata_size": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.syscalls.call_contract.calldata_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 7,
                            "offset": 0
                        },
                        "pc": 86,
                        "value": "[cast(fp + (-4), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.call_contract.contract_address": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.syscalls.call_contract.contract_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 7,
                            "offset": 0
                        },
                        "pc": 86,
                        "value": "[cast(fp + (-6), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.call_contract.function_selector": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.syscalls.call_contract.function_selector",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 7,
                            "offset": 0
                        },
                        "pc": 86,
                        "value": "[cast(fp + (-5), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.call_contract.response": {
                "cairo_type": "starkware.starknet.common.syscalls.CallContractResponse",
                "full_name": "starkware.starknet.common.syscalls.call_contract.response",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 7,
                            "offset": 1
                        },
                        "pc": 93,
                        "value": "[cast([fp + (-7)] + 5, starkware.starknet.common.syscalls.CallContractResponse*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.call_contract.syscall": {
                "cairo_type": "starkware.starknet.common.syscalls.CallContract",
                "full_name": "starkware.starknet.common.syscalls.call_contract.syscall",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 7,
                            "offset": 0
                        },
                        "pc": 86,
                        "value": "[cast([fp + (-7)], starkware.starknet.common.syscalls.CallContract*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.call_contract.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "starkware.starknet.common.syscalls.call_contract.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 7,
                            "offset": 0
                        },
                        "pc": 86,
                        "value": "[cast(fp + (-7), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 7,
                            "offset": 1
                        },
                        "pc": 93,
                        "value": "cast([fp + (-7)] + 7, felt*)"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.deploy": {
                "decorators": [],
                "pc": 98,
                "type": "function"
            },
            "starkware.starknet.common.syscalls.deploy.Args": {
                "full_name": "starkware.starknet.common.syscalls.deploy.Args",
                "members": {
                    "class_hash": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "constructor_calldata": {
                        "cairo_type": "felt*",
                        "offset": 3
                    },
                    "constructor_calldata_size": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "contract_address_salt": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "deploy_from_zero": {
                        "cairo_type": "felt",
                        "offset": 4
                    }
                },
                "size": 5,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.deploy.ImplicitArgs": {
                "full_name": "starkware.starknet.common.syscalls.deploy.ImplicitArgs",
                "members": {
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.deploy.Return": {
                "cairo_type": "(contract_address: felt)",
                "type": "type_definition"
            },
            "starkware.starknet.common.syscalls.deploy.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.starknet.common.syscalls.deploy.__temp10": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.syscalls.deploy.__temp10",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 8,
                            "offset": 1
                        },
                        "pc": 100,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.deploy.class_hash": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.syscalls.deploy.class_hash",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 8,
                            "offset": 0
                        },
                        "pc": 98,
                        "value": "[cast(fp + (-7), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.deploy.constructor_calldata": {
                "cairo_type": "felt*",
                "full_name": "starkware.starknet.common.syscalls.deploy.constructor_calldata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 8,
                            "offset": 0
                        },
                        "pc": 98,
                        "value": "[cast(fp + (-4), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.deploy.constructor_calldata_size": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.syscalls.deploy.constructor_calldata_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 8,
                            "offset": 0
                        },
                        "pc": 98,
                        "value": "[cast(fp + (-5), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.deploy.contract_address_salt": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.syscalls.deploy.contract_address_salt",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 8,
                            "offset": 0
                        },
                        "pc": 98,
                        "value": "[cast(fp + (-6), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.deploy.deploy_from_zero": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.syscalls.deploy.deploy_from_zero",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 8,
                            "offset": 0
                        },
                        "pc": 98,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.deploy.response": {
                "cairo_type": "starkware.starknet.common.syscalls.DeployResponse",
                "full_name": "starkware.starknet.common.syscalls.deploy.response",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 8,
                            "offset": 1
                        },
                        "pc": 106,
                        "value": "[cast([fp + (-8)] + 6, starkware.starknet.common.syscalls.DeployResponse*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.deploy.syscall": {
                "cairo_type": "starkware.starknet.common.syscalls.Deploy",
                "full_name": "starkware.starknet.common.syscalls.deploy.syscall",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 8,
                            "offset": 0
                        },
                        "pc": 98,
                        "value": "[cast([fp + (-8)], starkware.starknet.common.syscalls.Deploy*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.deploy.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "starkware.starknet.common.syscalls.deploy.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 8,
                            "offset": 0
                        },
                        "pc": 98,
                        "value": "[cast(fp + (-8), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 8,
                            "offset": 1
                        },
                        "pc": 106,
                        "value": "cast([fp + (-8)] + 9, felt*)"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.get_block_timestamp": {
                "decorators": [],
                "pc": 124,
                "type": "function"
            },
            "starkware.starknet.common.syscalls.get_block_timestamp.Args": {
                "full_name": "starkware.starknet.common.syscalls.get_block_timestamp.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.get_block_timestamp.ImplicitArgs": {
                "full_name": "starkware.starknet.common.syscalls.get_block_timestamp.ImplicitArgs",
                "members": {
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.get_block_timestamp.Return": {
                "cairo_type": "(block_timestamp: felt)",
                "type": "type_definition"
            },
            "starkware.starknet.common.syscalls.get_block_timestamp.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.starknet.common.syscalls.get_block_timestamp.__temp13": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.syscalls.get_block_timestamp.__temp13",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 11,
                            "offset": 1
                        },
                        "pc": 126,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.get_block_timestamp.syscall": {
                "cairo_type": "starkware.starknet.common.syscalls.GetBlockTimestamp",
                "full_name": "starkware.starknet.common.syscalls.get_block_timestamp.syscall",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 11,
                            "offset": 0
                        },
                        "pc": 124,
                        "value": "[cast([fp + (-3)], starkware.starknet.common.syscalls.GetBlockTimestamp*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.get_block_timestamp.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "starkware.starknet.common.syscalls.get_block_timestamp.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 11,
                            "offset": 0
                        },
                        "pc": 124,
                        "value": "[cast(fp + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 11,
                            "offset": 1
                        },
                        "pc": 127,
                        "value": "cast([fp + (-3)] + 2, felt*)"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.get_caller_address": {
                "decorators": [],
                "pc": 110,
                "type": "function"
            },
            "starkware.starknet.common.syscalls.get_caller_address.Args": {
                "full_name": "starkware.starknet.common.syscalls.get_caller_address.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.get_caller_address.ImplicitArgs": {
                "full_name": "starkware.starknet.common.syscalls.get_caller_address.ImplicitArgs",
                "members": {
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.get_caller_address.Return": {
                "cairo_type": "(caller_address: felt)",
                "type": "type_definition"
            },
            "starkware.starknet.common.syscalls.get_caller_address.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.starknet.common.syscalls.get_caller_address.__temp11": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.syscalls.get_caller_address.__temp11",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 9,
                            "offset": 1
                        },
                        "pc": 112,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.get_caller_address.syscall": {
                "cairo_type": "starkware.starknet.common.syscalls.GetCallerAddress",
                "full_name": "starkware.starknet.common.syscalls.get_caller_address.syscall",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 9,
                            "offset": 0
                        },
                        "pc": 110,
                        "value": "[cast([fp + (-3)], starkware.starknet.common.syscalls.GetCallerAddress*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.get_caller_address.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "starkware.starknet.common.syscalls.get_caller_address.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 9,
                            "offset": 0
                        },
                        "pc": 110,
                        "value": "[cast(fp + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 9,
                            "offset": 1
                        },
                        "pc": 113,
                        "value": "cast([fp + (-3)] + 2, felt*)"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.get_contract_address": {
                "decorators": [],
                "pc": 117,
                "type": "function"
            },
            "starkware.starknet.common.syscalls.get_contract_address.Args": {
                "full_name": "starkware.starknet.common.syscalls.get_contract_address.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.get_contract_address.ImplicitArgs": {
                "full_name": "starkware.starknet.common.syscalls.get_contract_address.ImplicitArgs",
                "members": {
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.get_contract_address.Return": {
                "cairo_type": "(contract_address: felt)",
                "type": "type_definition"
            },
            "starkware.starknet.common.syscalls.get_contract_address.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.starknet.common.syscalls.get_contract_address.__temp12": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.syscalls.get_contract_address.__temp12",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 10,
                            "offset": 1
                        },
                        "pc": 119,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.get_contract_address.syscall": {
                "cairo_type": "starkware.starknet.common.syscalls.GetContractAddress",
                "full_name": "starkware.starknet.common.syscalls.get_contract_address.syscall",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 10,
                            "offset": 0
                        },
                        "pc": 117,
                        "value": "[cast([fp + (-3)], starkware.starknet.common.syscalls.GetContractAddress*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.get_contract_address.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "starkware.starknet.common.syscalls.get_contract_address.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 10,
                            "offset": 0
                        },
                        "pc": 117,
                        "value": "[cast(fp + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 10,
                            "offset": 1
                        },
                        "pc": 120,
                        "value": "cast([fp + (-3)] + 2, felt*)"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.storage_read": {
                "decorators": [],
                "pc": 131,
                "type": "function"
            },
            "starkware.starknet.common.syscalls.storage_read.Args": {
                "full_name": "starkware.starknet.common.syscalls.storage_read.Args",
                "members": {
                    "address": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.storage_read.ImplicitArgs": {
                "full_name": "starkware.starknet.common.syscalls.storage_read.ImplicitArgs",
                "members": {
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.storage_read.Return": {
                "cairo_type": "(value: felt)",
                "type": "type_definition"
            },
            "starkware.starknet.common.syscalls.storage_read.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.starknet.common.syscalls.storage_read.__temp14": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.syscalls.storage_read.__temp14",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 12,
                            "offset": 1
                        },
                        "pc": 133,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.storage_read.address": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.syscalls.storage_read.address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 12,
                            "offset": 0
                        },
                        "pc": 131,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.storage_read.response": {
                "cairo_type": "starkware.starknet.common.syscalls.StorageReadResponse",
                "full_name": "starkware.starknet.common.syscalls.storage_read.response",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 12,
                            "offset": 1
                        },
                        "pc": 135,
                        "value": "[cast([fp + (-4)] + 2, starkware.starknet.common.syscalls.StorageReadResponse*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.storage_read.syscall": {
                "cairo_type": "starkware.starknet.common.syscalls.StorageRead",
                "full_name": "starkware.starknet.common.syscalls.storage_read.syscall",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 12,
                            "offset": 0
                        },
                        "pc": 131,
                        "value": "[cast([fp + (-4)], starkware.starknet.common.syscalls.StorageRead*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.storage_read.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "starkware.starknet.common.syscalls.storage_read.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 12,
                            "offset": 0
                        },
                        "pc": 131,
                        "value": "[cast(fp + (-4), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 12,
                            "offset": 1
                        },
                        "pc": 135,
                        "value": "cast([fp + (-4)] + 3, felt*)"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.storage_write": {
                "decorators": [],
                "pc": 139,
                "type": "function"
            },
            "starkware.starknet.common.syscalls.storage_write.Args": {
                "full_name": "starkware.starknet.common.syscalls.storage_write.Args",
                "members": {
                    "address": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "value": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.storage_write.ImplicitArgs": {
                "full_name": "starkware.starknet.common.syscalls.storage_write.ImplicitArgs",
                "members": {
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.storage_write.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "starkware.starknet.common.syscalls.storage_write.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.starknet.common.syscalls.storage_write.__temp15": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.syscalls.storage_write.__temp15",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 13,
                            "offset": 1
                        },
                        "pc": 141,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.storage_write.address": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.syscalls.storage_write.address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 13,
                            "offset": 0
                        },
                        "pc": 139,
                        "value": "[cast(fp + (-4), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.storage_write.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "starkware.starknet.common.syscalls.storage_write.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 13,
                            "offset": 0
                        },
                        "pc": 139,
                        "value": "[cast(fp + (-5), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 13,
                            "offset": 1
                        },
                        "pc": 144,
                        "value": "cast([fp + (-5)] + 3, felt*)"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.storage_write.value": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.syscalls.storage_write.value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 13,
                            "offset": 0
                        },
                        "pc": 139,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            }
        },
        "main_scope": "__main__",
        "prime": "0x800000000000011000000000000000000000000000000000000000000000001",
        "reference_manager": {
            "references": [
                {
                    "ap_tracking_data": {
                        "group": 1,
                        "offset": 0
                    },
                    "pc": 3,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 1,
                        "offset": 0
                    },
                    "pc": 3,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 1,
                        "offset": 0
                    },
                    "pc": 3,
                    "value": "[cast(fp + (-5), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 1,
                        "offset": 0
                    },
                    "pc": 5,
                    "value": "[cast([fp + (-5)] + 2, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 1,
                        "offset": 0
                    },
                    "pc": 5,
                    "value": "cast([fp + (-5)] + 3, starkware.cairo.common.cairo_builtins.HashBuiltin*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 2,
                        "offset": 0
                    },
                    "pc": 9,
                    "value": "[cast(fp + (-5), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 2,
                        "offset": 0
                    },
                    "pc": 9,
                    "value": "[cast(fp + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 2,
                        "offset": 0
                    },
                    "pc": 9,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 2,
                        "offset": 2
                    },
                    "pc": 14,
                    "value": "[cast(ap + (-2), starkware.cairo.common.memcpy.memcpy.LoopFrame*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 2,
                        "offset": 2
                    },
                    "pc": 14,
                    "value": "[cast(ap + (-2), starkware.cairo.common.memcpy.memcpy.LoopFrame*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 2,
                        "offset": 3
                    },
                    "pc": 15,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 2,
                        "offset": 3
                    },
                    "pc": 16,
                    "value": "[cast(ap, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 2,
                        "offset": 3
                    },
                    "pc": 16,
                    "value": "cast(ap + 1, starkware.cairo.common.memcpy.memcpy.LoopFrame*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 3,
                        "offset": 0
                    },
                    "pc": 24,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 4,
                        "offset": 0
                    },
                    "pc": 29,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 4,
                        "offset": 0
                    },
                    "pc": 29,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 4,
                        "offset": 0
                    },
                    "pc": 30,
                    "value": "cast([fp + (-4)] + 1, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 5,
                        "offset": 0
                    },
                    "pc": 33,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 5,
                        "offset": 0
                    },
                    "pc": 33,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 5,
                        "offset": 0
                    },
                    "pc": 33,
                    "value": "[cast([fp + (-4)], felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 5,
                        "offset": 0
                    },
                    "pc": 33,
                    "value": "[cast([fp + (-4)] + 1, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 5,
                        "offset": 1
                    },
                    "pc": 35,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 5,
                        "offset": 2
                    },
                    "pc": 36,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 5,
                        "offset": 3
                    },
                    "pc": 37,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 5,
                        "offset": 4
                    },
                    "pc": 39,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 5,
                        "offset": 5
                    },
                    "pc": 41,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 5,
                        "offset": 6
                    },
                    "pc": 42,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 5,
                        "offset": 6
                    },
                    "pc": 43,
                    "value": "cast([fp + (-4)] + 3, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 6,
                        "offset": 0
                    },
                    "pc": 46,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 6,
                        "offset": 0
                    },
                    "pc": 46,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 6,
                        "offset": 1
                    },
                    "pc": 48,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 6,
                        "offset": 1
                    },
                    "pc": 50,
                    "value": "cast([fp + (-3)] + 106710729501573572985208420194530329073740042555888586719489, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 6,
                        "offset": 1
                    },
                    "pc": 50,
                    "value": "cast((-1) - [fp + (-3)], felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 6,
                        "offset": 12
                    },
                    "pc": 55,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 6,
                        "offset": 13
                    },
                    "pc": 57,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 6,
                        "offset": 24
                    },
                    "pc": 61,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 6,
                        "offset": 2
                    },
                    "pc": 66,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 6,
                        "offset": 13
                    },
                    "pc": 72,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 6,
                        "offset": 24
                    },
                    "pc": 76,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 6,
                        "offset": 24
                    },
                    "pc": 84,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 6,
                        "offset": 24
                    },
                    "pc": 84,
                    "value": "[cast(ap - 0 + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 7,
                        "offset": 0
                    },
                    "pc": 86,
                    "value": "[cast(fp + (-6), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 7,
                        "offset": 0
                    },
                    "pc": 86,
                    "value": "[cast(fp + (-5), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 7,
                        "offset": 0
                    },
                    "pc": 86,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 7,
                        "offset": 0
                    },
                    "pc": 86,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 7,
                        "offset": 0
                    },
                    "pc": 86,
                    "value": "[cast(fp + (-7), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 7,
                        "offset": 0
                    },
                    "pc": 86,
                    "value": "[cast([fp + (-7)], starkware.starknet.common.syscalls.CallContract*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 7,
                        "offset": 1
                    },
                    "pc": 88,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 7,
                        "offset": 1
                    },
                    "pc": 93,
                    "value": "[cast([fp + (-7)] + 5, starkware.starknet.common.syscalls.CallContractResponse*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 7,
                        "offset": 1
                    },
                    "pc": 93,
                    "value": "cast([fp + (-7)] + 7, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 8,
                        "offset": 0
                    },
                    "pc": 98,
                    "value": "[cast(fp + (-7), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 8,
                        "offset": 0
                    },
                    "pc": 98,
                    "value": "[cast(fp + (-6), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 8,
                        "offset": 0
                    },
                    "pc": 98,
                    "value": "[cast(fp + (-5), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 8,
                        "offset": 0
                    },
                    "pc": 98,
                    "value": "[cast(fp + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 8,
                        "offset": 0
                    },
                    "pc": 98,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 8,
                        "offset": 0
                    },
                    "pc": 98,
                    "value": "[cast(fp + (-8), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 8,
                        "offset": 0
                    },
                    "pc": 98,
                    "value": "[cast([fp + (-8)], starkware.starknet.common.syscalls.Deploy*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 8,
                        "offset": 1
                    },
                    "pc": 100,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 8,
                        "offset": 1
                    },
                    "pc": 106,
                    "value": "[cast([fp + (-8)] + 6, starkware.starknet.common.syscalls.DeployResponse*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 8,
                        "offset": 1
                    },
                    "pc": 106,
                    "value": "cast([fp + (-8)] + 9, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 9,
                        "offset": 0
                    },
                    "pc": 110,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 9,
                        "offset": 0
                    },
                    "pc": 110,
                    "value": "[cast([fp + (-3)], starkware.starknet.common.syscalls.GetCallerAddress*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 9,
                        "offset": 1
                    },
                    "pc": 112,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 9,
                        "offset": 1
                    },
                    "pc": 113,
                    "value": "cast([fp + (-3)] + 2, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 10,
                        "offset": 0
                    },
                    "pc": 117,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 10,
                        "offset": 0
                    },
                    "pc": 117,
                    "value": "[cast([fp + (-3)], starkware.starknet.common.syscalls.GetContractAddress*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 10,
                        "offset": 1
                    },
                    "pc": 119,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 10,
                        "offset": 1
                    },
                    "pc": 120,
                    "value": "cast([fp + (-3)] + 2, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 11,
                        "offset": 0
                    },
                    "pc": 124,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 11,
                        "offset": 0
                    },
                    "pc": 124,
                    "value": "[cast([fp + (-3)], starkware.starknet.common.syscalls.GetBlockTimestamp*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 11,
                        "offset": 1
                    },
                    "pc": 126,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 11,
                        "offset": 1
                    },
                    "pc": 127,
                    "value": "cast([fp + (-3)] + 2, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 12,
                        "offset": 0
                    },
                    "pc": 131,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 12,
                        "offset": 0
                    },
                    "pc": 131,
                    "value": "[cast(fp + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 12,
                        "offset": 0
                    },
                    "pc": 131,
                    "value": "[cast([fp + (-4)], starkware.starknet.common.syscalls.StorageRead*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 12,
                        "offset": 1
                    },
                    "pc": 133,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 12,
                        "offset": 1
                    },
                    "pc": 135,
                    "value": "[cast([fp + (-4)] + 2, starkware.starknet.common.syscalls.StorageReadResponse*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 12,
                        "offset": 1
                    },
                    "pc": 135,
                    "value": "cast([fp + (-4)] + 3, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 13,
                        "offset": 0
                    },
                    "pc": 139,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 13,
                        "offset": 0
                    },
                    "pc": 139,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 13,
                        "offset": 0
                    },
                    "pc": 139,
                    "value": "[cast(fp + (-5), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 13,
                        "offset": 1
                    },
                    "pc": 141,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 13,
                        "offset": 1
                    },
                    "pc": 144,
                    "value": "cast([fp + (-5)] + 3, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 14,
                        "offset": 0
                    },
                    "pc": 147,
                    "value": "[cast(fp + (-5), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 14,
                        "offset": 0
                    },
                    "pc": 147,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 14,
                        "offset": 0
                    },
                    "pc": 147,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 14,
                        "offset": 0
                    },
                    "pc": 147,
                    "value": "[cast(fp + (-6), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 14,
                        "offset": 1
                    },
                    "pc": 149,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 14,
                        "offset": 1
                    },
                    "pc": 153,
                    "value": "cast([fp + (-6)] + 4, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 15,
                        "offset": 0
                    },
                    "pc": 156,
                    "value": "[cast(fp + (-7), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 15,
                        "offset": 0
                    },
                    "pc": 156,
                    "value": "[cast(fp + (-6), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 15,
                        "offset": 0
                    },
                    "pc": 156,
                    "value": "[cast(fp + (-5), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 15,
                        "offset": 0
                    },
                    "pc": 156,
                    "value": "[cast(fp + (-4), starkware.cairo.common.uint256.Uint256*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 15,
                        "offset": 0
                    },
                    "pc": 156,
                    "value": "[cast(fp + (-9), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 15,
                        "offset": 0
                    },
                    "pc": 156,
                    "value": "[cast(fp + (-8), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 15,
                        "offset": 4
                    },
                    "pc": 160,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 15,
                        "offset": 4
                    },
                    "pc": 161,
                    "value": "[cast(fp, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 15,
                        "offset": 4
                    },
                    "pc": 161,
                    "value": "[cast(fp, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 15,
                        "offset": 4
                    },
                    "pc": 162,
                    "value": "cast([fp] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 15,
                        "offset": 4
                    },
                    "pc": 163,
                    "value": "cast([fp] + 2, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 15,
                        "offset": 4
                    },
                    "pc": 163,
                    "value": "cast(fp + (-4), felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 15,
                        "offset": 4
                    },
                    "pc": 165,
                    "value": "cast([fp] + 4, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 15,
                        "offset": 5
                    },
                    "pc": 167,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 15,
                        "offset": 16
                    },
                    "pc": 175,
                    "value": "[cast(ap + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 15,
                        "offset": 16
                    },
                    "pc": 175,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 15,
                        "offset": 16
                    },
                    "pc": 175,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 15,
                        "offset": 16
                    },
                    "pc": 175,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 15,
                        "offset": 16
                    },
                    "pc": 175,
                    "value": "[cast([ap + (-1)], felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 15,
                        "offset": 16
                    },
                    "pc": 175,
                    "value": "cast([ap + (-1)] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 15,
                        "offset": 16
                    },
                    "pc": 175,
                    "value": "cast([ap + (-1)] + 1 - [ap + (-1)], felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 15,
                        "offset": 17
                    },
                    "pc": 177,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 0
                    },
                    "pc": 182,
                    "value": "[cast(fp + (-6), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 0
                    },
                    "pc": 182,
                    "value": "[cast(fp + (-5), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 0
                    },
                    "pc": 182,
                    "value": "[cast(fp + (-4), starkware.cairo.common.uint256.Uint256*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 0
                    },
                    "pc": 182,
                    "value": "[cast(fp + (-8), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 0
                    },
                    "pc": 182,
                    "value": "[cast(fp + (-7), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 4
                    },
                    "pc": 186,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 4
                    },
                    "pc": 187,
                    "value": "[cast(fp, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 4
                    },
                    "pc": 187,
                    "value": "[cast(fp, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 4
                    },
                    "pc": 188,
                    "value": "cast([fp] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 4
                    },
                    "pc": 188,
                    "value": "cast(fp + (-4), felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 4
                    },
                    "pc": 190,
                    "value": "cast([fp] + 3, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 5
                    },
                    "pc": 192,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 16
                    },
                    "pc": 200,
                    "value": "[cast(ap + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 16
                    },
                    "pc": 200,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 16
                    },
                    "pc": 200,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 16
                    },
                    "pc": 200,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 16
                    },
                    "pc": 200,
                    "value": "[cast([ap + (-1)], felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 16
                    },
                    "pc": 200,
                    "value": "cast([ap + (-1)] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 16
                    },
                    "pc": 200,
                    "value": "cast([ap + (-1)] + 1 - [ap + (-1)], felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 17
                    },
                    "pc": 202,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 17,
                        "offset": 0
                    },
                    "pc": 207,
                    "value": "[cast(fp + (-6), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 17,
                        "offset": 0
                    },
                    "pc": 207,
                    "value": "[cast(fp + (-5), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 17,
                        "offset": 0
                    },
                    "pc": 207,
                    "value": "[cast(fp + (-4), starkware.cairo.common.uint256.Uint256*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 17,
                        "offset": 0
                    },
                    "pc": 207,
                    "value": "[cast(fp + (-8), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 17,
                        "offset": 0
                    },
                    "pc": 207,
                    "value": "[cast(fp + (-7), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 17,
                        "offset": 4
                    },
                    "pc": 211,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 17,
                        "offset": 4
                    },
                    "pc": 212,
                    "value": "[cast(fp, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 17,
                        "offset": 4
                    },
                    "pc": 212,
                    "value": "[cast(fp, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 17,
                        "offset": 4
                    },
                    "pc": 213,
                    "value": "cast([fp] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 17,
                        "offset": 4
                    },
                    "pc": 213,
                    "value": "cast(fp + (-4), felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 17,
                        "offset": 4
                    },
                    "pc": 215,
                    "value": "cast([fp] + 3, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 17,
                        "offset": 5
                    },
                    "pc": 217,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 17,
                        "offset": 16
                    },
                    "pc": 225,
                    "value": "[cast(ap + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 17,
                        "offset": 16
                    },
                    "pc": 225,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 17,
                        "offset": 16
                    },
                    "pc": 225,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 18,
                        "offset": 0
                    },
                    "pc": 228,
                    "value": "[cast(fp + (-11), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 18,
                        "offset": 0
                    },
                    "pc": 228,
                    "value": "[cast(fp + (-10), starkware.cairo.common.uint256.Uint256*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 18,
                        "offset": 0
                    },
                    "pc": 228,
                    "value": "[cast(fp + (-8), starkware.cairo.common.uint256.Uint256*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 18,
                        "offset": 0
                    },
                    "pc": 228,
                    "value": "[cast(fp + (-6), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 18,
                        "offset": 0
                    },
                    "pc": 228,
                    "value": "[cast(fp + (-5), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 18,
                        "offset": 0
                    },
                    "pc": 228,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 18,
                        "offset": 0
                    },
                    "pc": 228,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 18,
                        "offset": 0
                    },
                    "pc": 228,
                    "value": "[cast(fp + (-13), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 18,
                        "offset": 0
                    },
                    "pc": 228,
                    "value": "[cast(fp + (-12), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 18,
                        "offset": 6
                    },
                    "pc": 232,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 18,
                        "offset": 6
                    },
                    "pc": 233,
                    "value": "[cast(fp, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 18,
                        "offset": 6
                    },
                    "pc": 233,
                    "value": "[cast(fp, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 18,
                        "offset": 6
                    },
                    "pc": 233,
                    "value": "cast(fp + (-10), felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 18,
                        "offset": 6
                    },
                    "pc": 235,
                    "value": "cast([fp] + 2, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 18,
                        "offset": 6
                    },
                    "pc": 235,
                    "value": "cast(fp + (-8), felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 18,
                        "offset": 6
                    },
                    "pc": 237,
                    "value": "cast([fp] + 4, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 18,
                        "offset": 6
                    },
                    "pc": 238,
                    "value": "cast([fp] + 5, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 18,
                        "offset": 6
                    },
                    "pc": 241,
                    "value": "[cast(fp + 1, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 18,
                        "offset": 6
                    },
                    "pc": 241,
                    "value": "cast([fp] + 5, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 18,
                        "offset": 7
                    },
                    "pc": 243,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 18,
                        "offset": 7
                    },
                    "pc": 244,
                    "value": "[cast(fp + 2, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 19,
                        "offset": 0
                    },
                    "pc": 251,
                    "value": "cast([fp + 2] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 19,
                        "offset": 0
                    },
                    "pc": 252,
                    "value": "cast([fp + 2] + 2, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 19,
                        "offset": 1
                    },
                    "pc": 254,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 19,
                        "offset": 12
                    },
                    "pc": 262,
                    "value": "[cast(ap + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 19,
                        "offset": 12
                    },
                    "pc": 262,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 19,
                        "offset": 12
                    },
                    "pc": 262,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 19,
                        "offset": 12
                    },
                    "pc": 262,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 19,
                        "offset": 12
                    },
                    "pc": 262,
                    "value": "[cast([ap + (-1)], felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 19,
                        "offset": 12
                    },
                    "pc": 262,
                    "value": "cast([ap + (-1)] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 19,
                        "offset": 13
                    },
                    "pc": 263,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 19,
                        "offset": 13
                    },
                    "pc": 264,
                    "value": "cast([fp + 1] + 1, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 19,
                        "offset": 13
                    },
                    "pc": 264,
                    "value": "cast([ap + (-2)] + 1, starkware.cairo.common.uint256.Uint256*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 19,
                        "offset": 14
                    },
                    "pc": 266,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 19,
                        "offset": 15
                    },
                    "pc": 267,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 19,
                        "offset": 16
                    },
                    "pc": 269,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 19,
                        "offset": 17
                    },
                    "pc": 270,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 19,
                        "offset": 17
                    },
                    "pc": 270,
                    "value": "cast([ap + (-1)] - [ap + (-6)], felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 20,
                        "offset": 0
                    },
                    "pc": 278,
                    "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 20,
                        "offset": 0
                    },
                    "pc": 278,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 20,
                        "offset": 0
                    },
                    "pc": 278,
                    "value": "cast(1697461057326310581967816530165551571743938660869987744467005324703617544296, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 21,
                        "offset": 0
                    },
                    "pc": 283,
                    "value": "[cast(fp + (-5), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 21,
                        "offset": 0
                    },
                    "pc": 283,
                    "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 21,
                        "offset": 0
                    },
                    "pc": 283,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 21,
                        "offset": 7
                    },
                    "pc": 287,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 21,
                        "offset": 7
                    },
                    "pc": 287,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 21,
                        "offset": 7
                    },
                    "pc": 287,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 21,
                        "offset": 14
                    },
                    "pc": 291,
                    "value": "[cast(ap + (-2), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 21,
                        "offset": 14
                    },
                    "pc": 291,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 21,
                        "offset": 15
                    },
                    "pc": 292,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 21,
                        "offset": 16
                    },
                    "pc": 293,
                    "value": "[cast(ap + (-1), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 21,
                        "offset": 17
                    },
                    "pc": 294,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 21,
                        "offset": 18
                    },
                    "pc": 295,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 22,
                        "offset": 0
                    },
                    "pc": 296,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 22,
                        "offset": 0
                    },
                    "pc": 296,
                    "value": "[cast(fp + (-6), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 22,
                        "offset": 0
                    },
                    "pc": 296,
                    "value": "[cast(fp + (-5), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 22,
                        "offset": 0
                    },
                    "pc": 296,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 22,
                        "offset": 7
                    },
                    "pc": 300,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 22,
                        "offset": 7
                    },
                    "pc": 300,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 22,
                        "offset": 7
                    },
                    "pc": 300,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 22,
                        "offset": 14
                    },
                    "pc": 305,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 23,
                        "offset": 0
                    },
                    "pc": 308,
                    "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 23,
                        "offset": 0
                    },
                    "pc": 308,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 23,
                        "offset": 0
                    },
                    "pc": 308,
                    "value": "cast(1056427353891886326853315874163693609086886439611669317644815970028333376495, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 24,
                        "offset": 0
                    },
                    "pc": 313,
                    "value": "[cast(fp + (-5), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 24,
                        "offset": 0
                    },
                    "pc": 313,
                    "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 24,
                        "offset": 0
                    },
                    "pc": 313,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 24,
                        "offset": 7
                    },
                    "pc": 317,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 24,
                        "offset": 7
                    },
                    "pc": 317,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 24,
                        "offset": 7
                    },
                    "pc": 317,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 24,
                        "offset": 14
                    },
                    "pc": 321,
                    "value": "[cast(ap + (-2), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 24,
                        "offset": 14
                    },
                    "pc": 321,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 24,
                        "offset": 15
                    },
                    "pc": 322,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 24,
                        "offset": 16
                    },
                    "pc": 323,
                    "value": "[cast(ap + (-1), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 24,
                        "offset": 17
                    },
                    "pc": 324,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 24,
                        "offset": 18
                    },
                    "pc": 325,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 25,
                        "offset": 0
                    },
                    "pc": 326,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 25,
                        "offset": 0
                    },
                    "pc": 326,
                    "value": "[cast(fp + (-6), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 25,
                        "offset": 0
                    },
                    "pc": 326,
                    "value": "[cast(fp + (-5), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 25,
                        "offset": 0
                    },
                    "pc": 326,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 25,
                        "offset": 7
                    },
                    "pc": 330,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 25,
                        "offset": 7
                    },
                    "pc": 330,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 25,
                        "offset": 7
                    },
                    "pc": 330,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 25,
                        "offset": 14
                    },
                    "pc": 335,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 26,
                        "offset": 0
                    },
                    "pc": 338,
                    "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 26,
                        "offset": 0
                    },
                    "pc": 338,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 26,
                        "offset": 0
                    },
                    "pc": 338,
                    "value": "cast(166437374298738756398629469846363953049641320050310028217330679862127721328, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 27,
                        "offset": 0
                    },
                    "pc": 343,
                    "value": "[cast(fp + (-5), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 27,
                        "offset": 0
                    },
                    "pc": 343,
                    "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 27,
                        "offset": 0
                    },
                    "pc": 343,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 27,
                        "offset": 7
                    },
                    "pc": 347,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 27,
                        "offset": 7
                    },
                    "pc": 347,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 27,
                        "offset": 7
                    },
                    "pc": 347,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 27,
                        "offset": 14
                    },
                    "pc": 351,
                    "value": "[cast(ap + (-2), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 27,
                        "offset": 14
                    },
                    "pc": 351,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 27,
                        "offset": 15
                    },
                    "pc": 352,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 27,
                        "offset": 16
                    },
                    "pc": 353,
                    "value": "[cast(ap + (-1), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 27,
                        "offset": 17
                    },
                    "pc": 354,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 27,
                        "offset": 18
                    },
                    "pc": 355,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 28,
                        "offset": 0
                    },
                    "pc": 356,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 28,
                        "offset": 0
                    },
                    "pc": 356,
                    "value": "[cast(fp + (-6), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 28,
                        "offset": 0
                    },
                    "pc": 356,
                    "value": "[cast(fp + (-5), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 28,
                        "offset": 0
                    },
                    "pc": 356,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 28,
                        "offset": 7
                    },
                    "pc": 360,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 28,
                        "offset": 7
                    },
                    "pc": 360,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 28,
                        "offset": 7
                    },
                    "pc": 360,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 28,
                        "offset": 14
                    },
                    "pc": 365,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 29,
                        "offset": 0
                    },
                    "pc": 368,
                    "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 29,
                        "offset": 0
                    },
                    "pc": 368,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 29,
                        "offset": 0
                    },
                    "pc": 368,
                    "value": "cast(539897542539510803835874174075754230869785750614003400019734173509112717992, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 30,
                        "offset": 0
                    },
                    "pc": 373,
                    "value": "[cast(fp + (-5), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 30,
                        "offset": 0
                    },
                    "pc": 373,
                    "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 30,
                        "offset": 0
                    },
                    "pc": 373,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 30,
                        "offset": 7
                    },
                    "pc": 377,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 30,
                        "offset": 7
                    },
                    "pc": 377,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 30,
                        "offset": 7
                    },
                    "pc": 377,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 30,
                        "offset": 14
                    },
                    "pc": 381,
                    "value": "[cast(ap + (-2), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 30,
                        "offset": 14
                    },
                    "pc": 381,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 30,
                        "offset": 21
                    },
                    "pc": 386,
                    "value": "[cast(ap + (-2), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 30,
                        "offset": 21
                    },
                    "pc": 386,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 30,
                        "offset": 22
                    },
                    "pc": 387,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 30,
                        "offset": 23
                    },
                    "pc": 388,
                    "value": "[cast(ap + (-1), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 30,
                        "offset": 24
                    },
                    "pc": 389,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 30,
                        "offset": 25
                    },
                    "pc": 390,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 30,
                        "offset": 26
                    },
                    "pc": 391,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 31,
                        "offset": 0
                    },
                    "pc": 392,
                    "value": "[cast(fp + (-5), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 31,
                        "offset": 0
                    },
                    "pc": 392,
                    "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 31,
                        "offset": 0
                    },
                    "pc": 392,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 31,
                        "offset": 23
                    },
                    "pc": 397,
                    "value": "[cast(ap + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 31,
                        "offset": 23
                    },
                    "pc": 397,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 31,
                        "offset": 23
                    },
                    "pc": 397,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 31,
                        "offset": 23
                    },
                    "pc": 397,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 32,
                        "offset": 0
                    },
                    "pc": 398,
                    "value": "[cast(fp + (-4), (res: felt)*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 32,
                        "offset": 0
                    },
                    "pc": 398,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 32,
                        "offset": 1
                    },
                    "pc": 400,
                    "value": "[cast(fp, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 32,
                        "offset": 1
                    },
                    "pc": 400,
                    "value": "[cast(fp, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 32,
                        "offset": 1
                    },
                    "pc": 401,
                    "value": "cast([fp] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 32,
                        "offset": 2
                    },
                    "pc": 403,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 33,
                        "offset": 0
                    },
                    "pc": 407,
                    "value": "[cast([fp + (-5)], felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 33,
                        "offset": 0
                    },
                    "pc": 407,
                    "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 33,
                        "offset": 0
                    },
                    "pc": 407,
                    "value": "[cast([fp + (-5)] + 2, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 33,
                        "offset": 0
                    },
                    "pc": 407,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 33,
                        "offset": 0
                    },
                    "pc": 407,
                    "value": "cast([fp + (-3)] - [fp + (-3)], felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 33,
                        "offset": 28
                    },
                    "pc": 413,
                    "value": "[cast(ap + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 33,
                        "offset": 28
                    },
                    "pc": 413,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 33,
                        "offset": 28
                    },
                    "pc": 413,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 33,
                        "offset": 28
                    },
                    "pc": 413,
                    "value": "[cast(ap + (-1), (res: felt)*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 33,
                        "offset": 36
                    },
                    "pc": 416,
                    "value": "[cast(ap + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 33,
                        "offset": 36
                    },
                    "pc": 416,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 33,
                        "offset": 36
                    },
                    "pc": 416,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 34,
                        "offset": 0
                    },
                    "pc": 422,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 34,
                        "offset": 0
                    },
                    "pc": 422,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 34,
                        "offset": 0
                    },
                    "pc": 422,
                    "value": "[cast(fp + (-6), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 34,
                        "offset": 0
                    },
                    "pc": 422,
                    "value": "[cast(fp + (-5), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 34,
                        "offset": 0
                    },
                    "pc": 422,
                    "value": "cast(582296241222155284640312087794090113401992882569345416891735068109346863172, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 34,
                        "offset": 7
                    },
                    "pc": 428,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 34,
                        "offset": 7
                    },
                    "pc": 428,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 34,
                        "offset": 12
                    },
                    "pc": 431,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 34,
                        "offset": 12
                    },
                    "pc": 431,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 34,
                        "offset": 41
                    },
                    "pc": 435,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 34,
                        "offset": 41
                    },
                    "pc": 435,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 0
                    },
                    "pc": 439,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 0
                    },
                    "pc": 439,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 0
                    },
                    "pc": 439,
                    "value": "[cast(fp + (-7), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 0
                    },
                    "pc": 439,
                    "value": "[cast(fp + (-6), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 0
                    },
                    "pc": 439,
                    "value": "[cast(fp + (-5), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 50
                    },
                    "pc": 445,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 50
                    },
                    "pc": 445,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 50
                    },
                    "pc": 445,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 57
                    },
                    "pc": 449,
                    "value": "[cast(ap + (-2), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 57
                    },
                    "pc": 449,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 58
                    },
                    "pc": 450,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 59
                    },
                    "pc": 451,
                    "value": "[cast(ap + (-1), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 60
                    },
                    "pc": 452,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 61
                    },
                    "pc": 453,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 36,
                        "offset": 0
                    },
                    "pc": 454,
                    "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 36,
                        "offset": 0
                    },
                    "pc": 454,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 36,
                        "offset": 0
                    },
                    "pc": 454,
                    "value": "cast(320898199513821854557686263465995643985940019014426681534834465464640143080, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 37,
                        "offset": 0
                    },
                    "pc": 459,
                    "value": "[cast(fp + (-5), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 37,
                        "offset": 0
                    },
                    "pc": 459,
                    "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 37,
                        "offset": 0
                    },
                    "pc": 459,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 37,
                        "offset": 7
                    },
                    "pc": 463,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 37,
                        "offset": 7
                    },
                    "pc": 463,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 37,
                        "offset": 7
                    },
                    "pc": 463,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 37,
                        "offset": 14
                    },
                    "pc": 467,
                    "value": "[cast(ap + (-2), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 37,
                        "offset": 14
                    },
                    "pc": 467,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 37,
                        "offset": 15
                    },
                    "pc": 468,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 37,
                        "offset": 16
                    },
                    "pc": 469,
                    "value": "[cast(ap + (-1), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 37,
                        "offset": 17
                    },
                    "pc": 470,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 37,
                        "offset": 18
                    },
                    "pc": 471,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 0
                    },
                    "pc": 472,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 0
                    },
                    "pc": 472,
                    "value": "[cast(fp + (-6), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 0
                    },
                    "pc": 472,
                    "value": "[cast(fp + (-5), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 0
                    },
                    "pc": 472,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 7
                    },
                    "pc": 476,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 7
                    },
                    "pc": 476,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 7
                    },
                    "pc": 476,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 14
                    },
                    "pc": 481,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 39,
                        "offset": 0
                    },
                    "pc": 484,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 39,
                        "offset": 0
                    },
                    "pc": 484,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 39,
                        "offset": 0
                    },
                    "pc": 484,
                    "value": "[cast(fp + (-6), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 39,
                        "offset": 0
                    },
                    "pc": 484,
                    "value": "[cast(fp + (-5), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 39,
                        "offset": 0
                    },
                    "pc": 484,
                    "value": "cast(1006978842930668203305098225454879015601707976994998111885550825801221163003, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 39,
                        "offset": 7
                    },
                    "pc": 490,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 39,
                        "offset": 7
                    },
                    "pc": 490,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 39,
                        "offset": 12
                    },
                    "pc": 493,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 39,
                        "offset": 12
                    },
                    "pc": 493,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 39,
                        "offset": 41
                    },
                    "pc": 497,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 39,
                        "offset": 41
                    },
                    "pc": 497,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 40,
                        "offset": 0
                    },
                    "pc": 501,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 40,
                        "offset": 0
                    },
                    "pc": 501,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 40,
                        "offset": 0
                    },
                    "pc": 501,
                    "value": "[cast(fp + (-7), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 40,
                        "offset": 0
                    },
                    "pc": 501,
                    "value": "[cast(fp + (-6), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 40,
                        "offset": 0
                    },
                    "pc": 501,
                    "value": "[cast(fp + (-5), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 40,
                        "offset": 50
                    },
                    "pc": 507,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 40,
                        "offset": 50
                    },
                    "pc": 507,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 40,
                        "offset": 50
                    },
                    "pc": 507,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 40,
                        "offset": 57
                    },
                    "pc": 511,
                    "value": "[cast(ap + (-2), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 40,
                        "offset": 57
                    },
                    "pc": 511,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 40,
                        "offset": 58
                    },
                    "pc": 512,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 40,
                        "offset": 59
                    },
                    "pc": 513,
                    "value": "[cast(ap + (-1), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 40,
                        "offset": 60
                    },
                    "pc": 514,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 40,
                        "offset": 61
                    },
                    "pc": 515,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 41,
                        "offset": 0
                    },
                    "pc": 516,
                    "value": "[cast(fp + (-5), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 41,
                        "offset": 0
                    },
                    "pc": 516,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 41,
                        "offset": 0
                    },
                    "pc": 516,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 41,
                        "offset": 0
                    },
                    "pc": 516,
                    "value": "[cast(fp + (-8), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 41,
                        "offset": 0
                    },
                    "pc": 516,
                    "value": "[cast(fp + (-7), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 41,
                        "offset": 0
                    },
                    "pc": 516,
                    "value": "[cast(fp + (-6), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 41,
                        "offset": 50
                    },
                    "pc": 522,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 41,
                        "offset": 50
                    },
                    "pc": 522,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 41,
                        "offset": 50
                    },
                    "pc": 522,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 41,
                        "offset": 57
                    },
                    "pc": 527,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 42,
                        "offset": 0
                    },
                    "pc": 530,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 42,
                        "offset": 0
                    },
                    "pc": 530,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 42,
                        "offset": 0
                    },
                    "pc": 530,
                    "value": "[cast(fp + (-7), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 42,
                        "offset": 0
                    },
                    "pc": 530,
                    "value": "[cast(fp + (-6), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 42,
                        "offset": 0
                    },
                    "pc": 530,
                    "value": "[cast(fp + (-5), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 42,
                        "offset": 68
                    },
                    "pc": 537,
                    "value": "[cast(ap + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 42,
                        "offset": 68
                    },
                    "pc": 537,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 42,
                        "offset": 68
                    },
                    "pc": 537,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 42,
                        "offset": 68
                    },
                    "pc": 537,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 0
                    },
                    "pc": 538,
                    "value": "[cast(fp + (-4), (res: felt)*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 0
                    },
                    "pc": 538,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 1
                    },
                    "pc": 540,
                    "value": "[cast(fp, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 1
                    },
                    "pc": 540,
                    "value": "[cast(fp, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 1
                    },
                    "pc": 541,
                    "value": "cast([fp] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 2
                    },
                    "pc": 543,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 44,
                        "offset": 0
                    },
                    "pc": 547,
                    "value": "[cast([fp + (-5)], felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 44,
                        "offset": 0
                    },
                    "pc": 547,
                    "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 44,
                        "offset": 0
                    },
                    "pc": 547,
                    "value": "[cast([fp + (-5)] + 2, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 44,
                        "offset": 0
                    },
                    "pc": 547,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 44,
                        "offset": 0
                    },
                    "pc": 547,
                    "value": "[cast([fp + (-3)], felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 44,
                        "offset": 0
                    },
                    "pc": 547,
                    "value": "cast([fp + (-3)] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 44,
                        "offset": 0
                    },
                    "pc": 547,
                    "value": "[cast([fp + (-3)] + 1, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 44,
                        "offset": 0
                    },
                    "pc": 547,
                    "value": "cast([fp + (-3)] + 2, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 44,
                        "offset": 0
                    },
                    "pc": 547,
                    "value": "cast([fp + (-3)] + 2 - [fp + (-3)], felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 44,
                        "offset": 1
                    },
                    "pc": 549,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 44,
                        "offset": 76
                    },
                    "pc": 557,
                    "value": "[cast(ap + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 44,
                        "offset": 76
                    },
                    "pc": 557,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 44,
                        "offset": 76
                    },
                    "pc": 557,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 44,
                        "offset": 76
                    },
                    "pc": 557,
                    "value": "[cast(ap + (-1), (res: felt)*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 44,
                        "offset": 84
                    },
                    "pc": 560,
                    "value": "[cast(ap + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 44,
                        "offset": 84
                    },
                    "pc": 560,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 44,
                        "offset": 84
                    },
                    "pc": 560,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 0
                    },
                    "pc": 566,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 0
                    },
                    "pc": 566,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 0
                    },
                    "pc": 566,
                    "value": "[cast(fp + (-7), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 0
                    },
                    "pc": 566,
                    "value": "[cast(fp + (-6), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 0
                    },
                    "pc": 566,
                    "value": "[cast(fp + (-5), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 23
                    },
                    "pc": 571,
                    "value": "[cast(ap + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 23
                    },
                    "pc": 571,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 23
                    },
                    "pc": 571,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 23
                    },
                    "pc": 571,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 29
                    },
                    "pc": 576,
                    "value": "[cast(ap + (-2), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 29
                    },
                    "pc": 576,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 51
                    },
                    "pc": 582,
                    "value": "[cast(ap + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 51
                    },
                    "pc": 582,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 51
                    },
                    "pc": 582,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 71
                    },
                    "pc": 584,
                    "value": "[cast(ap + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 71
                    },
                    "pc": 584,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 71
                    },
                    "pc": 584,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 71
                    },
                    "pc": 584,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 74
                    },
                    "pc": 586,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 75
                    },
                    "pc": 588,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 76
                    },
                    "pc": 591,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 87
                    },
                    "pc": 603,
                    "value": "[cast(ap + (-2), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 87
                    },
                    "pc": 603,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 109
                    },
                    "pc": 610,
                    "value": "[cast(ap + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 109
                    },
                    "pc": 610,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 109
                    },
                    "pc": 610,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 128
                    },
                    "pc": 613,
                    "value": "[cast(ap + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 128
                    },
                    "pc": 613,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 128
                    },
                    "pc": 613,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 147
                    },
                    "pc": 617,
                    "value": "[cast(ap + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 147
                    },
                    "pc": 617,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 147
                    },
                    "pc": 617,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 0
                    },
                    "pc": 618,
                    "value": "[cast([fp + (-5)], felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 0
                    },
                    "pc": 618,
                    "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 0
                    },
                    "pc": 618,
                    "value": "[cast([fp + (-5)] + 2, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 0
                    },
                    "pc": 618,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 0
                    },
                    "pc": 618,
                    "value": "[cast([fp + (-3)], felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 0
                    },
                    "pc": 618,
                    "value": "cast([fp + (-3)] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 0
                    },
                    "pc": 618,
                    "value": "[cast([fp + (-3)] + 1, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 0
                    },
                    "pc": 618,
                    "value": "cast([fp + (-3)] + 2, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 0
                    },
                    "pc": 618,
                    "value": "cast([fp + (-3)] + 2 - [fp + (-3)], felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 1
                    },
                    "pc": 620,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 155
                    },
                    "pc": 628,
                    "value": "[cast(ap + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 155
                    },
                    "pc": 628,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 155
                    },
                    "pc": 628,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 155
                    },
                    "pc": 628,
                    "value": "[cast(ap + 0, ()*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 156
                    },
                    "pc": 630,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 156
                    },
                    "pc": 630,
                    "value": "cast(0, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 0
                    },
                    "pc": 637,
                    "value": "[cast(fp + (-9), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 0
                    },
                    "pc": 637,
                    "value": "[cast(fp + (-8), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 0
                    },
                    "pc": 637,
                    "value": "[cast(fp + (-7), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 0
                    },
                    "pc": 637,
                    "value": "[cast(fp + (-6), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 0
                    },
                    "pc": 637,
                    "value": "[cast(fp + (-5), starkware.cairo.common.uint256.Uint256*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 0
                    },
                    "pc": 637,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 0
                    },
                    "pc": 637,
                    "value": "[cast(fp + (-12), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 0
                    },
                    "pc": 637,
                    "value": "[cast(fp + (-11), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 0
                    },
                    "pc": 637,
                    "value": "[cast(fp + (-10), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 25
                    },
                    "pc": 644,
                    "value": "[cast(ap + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 25
                    },
                    "pc": 644,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 25
                    },
                    "pc": 644,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 25
                    },
                    "pc": 644,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 93
                    },
                    "pc": 651,
                    "value": "[cast(ap + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 93
                    },
                    "pc": 651,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 93
                    },
                    "pc": 651,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 93
                    },
                    "pc": 651,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 160
                    },
                    "pc": 661,
                    "value": "[cast(ap + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 160
                    },
                    "pc": 661,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 160
                    },
                    "pc": 661,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 166
                    },
                    "pc": 664,
                    "value": "[cast(ap + (-2), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 166
                    },
                    "pc": 664,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 197
                    },
                    "pc": 669,
                    "value": "[cast(ap + (-5), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 197
                    },
                    "pc": 669,
                    "value": "[cast(ap + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 197
                    },
                    "pc": 669,
                    "value": "[cast(ap + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 197
                    },
                    "pc": 669,
                    "value": "[cast(ap + (-2), starkware.cairo.common.uint256.Uint256*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 197
                    },
                    "pc": 670,
                    "value": "[cast(fp, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 200
                    },
                    "pc": 672,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 200
                    },
                    "pc": 673,
                    "value": "[cast(fp + 1, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 201
                    },
                    "pc": 675,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 201
                    },
                    "pc": 677,
                    "value": "cast(2, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 229
                    },
                    "pc": 687,
                    "value": "[cast(ap + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 229
                    },
                    "pc": 687,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 48,
                        "offset": 0
                    },
                    "pc": 702,
                    "value": "[cast(ap + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 48,
                        "offset": 0
                    },
                    "pc": 702,
                    "value": "[cast(ap + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 49,
                        "offset": 0
                    },
                    "pc": 706,
                    "value": "[cast([fp + (-5)], felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 49,
                        "offset": 0
                    },
                    "pc": 706,
                    "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 49,
                        "offset": 0
                    },
                    "pc": 706,
                    "value": "[cast([fp + (-5)] + 2, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 49,
                        "offset": 0
                    },
                    "pc": 706,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 49,
                        "offset": 0
                    },
                    "pc": 706,
                    "value": "[cast([fp + (-3)], felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 49,
                        "offset": 0
                    },
                    "pc": 706,
                    "value": "cast([fp + (-3)] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 49,
                        "offset": 0
                    },
                    "pc": 706,
                    "value": "[cast([fp + (-3)] + 1, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 49,
                        "offset": 0
                    },
                    "pc": 706,
                    "value": "cast([fp + (-3)] + 2, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 49,
                        "offset": 0
                    },
                    "pc": 706,
                    "value": "[cast([fp + (-3)] + 2, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 49,
                        "offset": 0
                    },
                    "pc": 706,
                    "value": "cast([fp + (-3)] + 3, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 49,
                        "offset": 0
                    },
                    "pc": 706,
                    "value": "[cast([fp + (-3)] + 3, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 49,
                        "offset": 0
                    },
                    "pc": 706,
                    "value": "cast([fp + (-3)] + 4, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 49,
                        "offset": 0
                    },
                    "pc": 706,
                    "value": "[cast([fp + (-3)] + 4, starkware.cairo.common.uint256.Uint256*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 49,
                        "offset": 0
                    },
                    "pc": 706,
                    "value": "cast([fp + (-3)] + 6, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 49,
                        "offset": 0
                    },
                    "pc": 706,
                    "value": "[cast([fp + (-3)] + 6, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 49,
                        "offset": 0
                    },
                    "pc": 706,
                    "value": "cast([fp + (-3)] + 7, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 49,
                        "offset": 0
                    },
                    "pc": 706,
                    "value": "cast([fp + (-3)] + 7 - [fp + (-3)], felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 49,
                        "offset": 1
                    },
                    "pc": 708,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 50,
                        "offset": 0
                    },
                    "pc": 721,
                    "value": "[cast(ap + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 50,
                        "offset": 0
                    },
                    "pc": 721,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 50,
                        "offset": 0
                    },
                    "pc": 721,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 50,
                        "offset": 0
                    },
                    "pc": 721,
                    "value": "[cast(ap + 0, ()*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 50,
                        "offset": 1
                    },
                    "pc": 723,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 50,
                        "offset": 1
                    },
                    "pc": 723,
                    "value": "cast(0, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 0
                    },
                    "pc": 730,
                    "value": "[cast(fp + (-9), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 0
                    },
                    "pc": 730,
                    "value": "[cast(fp + (-8), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 0
                    },
                    "pc": 730,
                    "value": "[cast(fp + (-7), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 0
                    },
                    "pc": 730,
                    "value": "[cast(fp + (-6), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 0
                    },
                    "pc": 730,
                    "value": "[cast(fp + (-5), starkware.cairo.common.uint256.Uint256*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 0
                    },
                    "pc": 730,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 0
                    },
                    "pc": 730,
                    "value": "[cast(fp + (-12), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 0
                    },
                    "pc": 730,
                    "value": "[cast(fp + (-11), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 0
                    },
                    "pc": 730,
                    "value": "[cast(fp + (-10), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 25
                    },
                    "pc": 737,
                    "value": "[cast(ap + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 25
                    },
                    "pc": 737,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 25
                    },
                    "pc": 737,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 25
                    },
                    "pc": 737,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 93
                    },
                    "pc": 744,
                    "value": "[cast(ap + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 93
                    },
                    "pc": 744,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 93
                    },
                    "pc": 744,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 93
                    },
                    "pc": 744,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 160
                    },
                    "pc": 754,
                    "value": "[cast(ap + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 160
                    },
                    "pc": 754,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 160
                    },
                    "pc": 754,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 166
                    },
                    "pc": 757,
                    "value": "[cast(ap + (-2), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 166
                    },
                    "pc": 757,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 197
                    },
                    "pc": 762,
                    "value": "[cast(ap + (-5), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 197
                    },
                    "pc": 762,
                    "value": "[cast(ap + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 197
                    },
                    "pc": 762,
                    "value": "[cast(ap + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 197
                    },
                    "pc": 762,
                    "value": "[cast(ap + (-2), starkware.cairo.common.uint256.Uint256*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 197
                    },
                    "pc": 763,
                    "value": "[cast(fp, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 200
                    },
                    "pc": 765,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 200
                    },
                    "pc": 766,
                    "value": "[cast(fp + 1, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 201
                    },
                    "pc": 768,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 201
                    },
                    "pc": 770,
                    "value": "cast(2, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 229
                    },
                    "pc": 780,
                    "value": "[cast(ap + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 51,
                        "offset": 229
                    },
                    "pc": 780,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 52,
                        "offset": 0
                    },
                    "pc": 795,
                    "value": "[cast(ap + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 52,
                        "offset": 0
                    },
                    "pc": 795,
                    "value": "[cast(ap + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 53,
                        "offset": 0
                    },
                    "pc": 799,
                    "value": "[cast([fp + (-5)], felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 53,
                        "offset": 0
                    },
                    "pc": 799,
                    "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 53,
                        "offset": 0
                    },
                    "pc": 799,
                    "value": "[cast([fp + (-5)] + 2, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 53,
                        "offset": 0
                    },
                    "pc": 799,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 53,
                        "offset": 0
                    },
                    "pc": 799,
                    "value": "[cast([fp + (-3)], felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 53,
                        "offset": 0
                    },
                    "pc": 799,
                    "value": "cast([fp + (-3)] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 53,
                        "offset": 0
                    },
                    "pc": 799,
                    "value": "[cast([fp + (-3)] + 1, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 53,
                        "offset": 0
                    },
                    "pc": 799,
                    "value": "cast([fp + (-3)] + 2, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 53,
                        "offset": 0
                    },
                    "pc": 799,
                    "value": "[cast([fp + (-3)] + 2, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 53,
                        "offset": 0
                    },
                    "pc": 799,
                    "value": "cast([fp + (-3)] + 3, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 53,
                        "offset": 0
                    },
                    "pc": 799,
                    "value": "[cast([fp + (-3)] + 3, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 53,
                        "offset": 0
                    },
                    "pc": 799,
                    "value": "cast([fp + (-3)] + 4, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 53,
                        "offset": 0
                    },
                    "pc": 799,
                    "value": "[cast([fp + (-3)] + 4, starkware.cairo.common.uint256.Uint256*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 53,
                        "offset": 0
                    },
                    "pc": 799,
                    "value": "cast([fp + (-3)] + 6, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 53,
                        "offset": 0
                    },
                    "pc": 799,
                    "value": "[cast([fp + (-3)] + 6, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 53,
                        "offset": 0
                    },
                    "pc": 799,
                    "value": "cast([fp + (-3)] + 7, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 53,
                        "offset": 0
                    },
                    "pc": 799,
                    "value": "cast([fp + (-3)] + 7 - [fp + (-3)], felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 53,
                        "offset": 1
                    },
                    "pc": 801,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 54,
                        "offset": 0
                    },
                    "pc": 814,
                    "value": "[cast(ap + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 54,
                        "offset": 0
                    },
                    "pc": 814,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 54,
                        "offset": 0
                    },
                    "pc": 814,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 54,
                        "offset": 0
                    },
                    "pc": 814,
                    "value": "[cast(ap + 0, ()*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 54,
                        "offset": 1
                    },
                    "pc": 816,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 54,
                        "offset": 1
                    },
                    "pc": 816,
                    "value": "cast(0, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 55,
                        "offset": 0
                    },
                    "pc": 823,
                    "value": "[cast(fp + (-6), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 55,
                        "offset": 0
                    },
                    "pc": 823,
                    "value": "[cast(fp + (-5), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 55,
                        "offset": 0
                    },
                    "pc": 823,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 55,
                        "offset": 0
                    },
                    "pc": 823,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 55,
                        "offset": 0
                    },
                    "pc": 823,
                    "value": "[cast(fp + (-8), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 55,
                        "offset": 0
                    },
                    "pc": 823,
                    "value": "[cast(fp + (-7), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 55,
                        "offset": 0
                    },
                    "pc": 823,
                    "value": "cast(1703337928732926013422388042401403282071428068030303994029338909014220589525, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 55,
                        "offset": 7
                    },
                    "pc": 829,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 55,
                        "offset": 7
                    },
                    "pc": 829,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 55,
                        "offset": 12
                    },
                    "pc": 832,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 55,
                        "offset": 12
                    },
                    "pc": 832,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 55,
                        "offset": 17
                    },
                    "pc": 835,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 55,
                        "offset": 17
                    },
                    "pc": 835,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 55,
                        "offset": 22
                    },
                    "pc": 838,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 55,
                        "offset": 22
                    },
                    "pc": 838,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 55,
                        "offset": 51
                    },
                    "pc": 842,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 55,
                        "offset": 51
                    },
                    "pc": 842,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 56,
                        "offset": 0
                    },
                    "pc": 846,
                    "value": "[cast(fp + (-6), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 56,
                        "offset": 0
                    },
                    "pc": 846,
                    "value": "[cast(fp + (-5), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 56,
                        "offset": 0
                    },
                    "pc": 846,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 56,
                        "offset": 0
                    },
                    "pc": 846,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 56,
                        "offset": 0
                    },
                    "pc": 846,
                    "value": "[cast(fp + (-9), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 56,
                        "offset": 0
                    },
                    "pc": 846,
                    "value": "[cast(fp + (-8), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 56,
                        "offset": 0
                    },
                    "pc": 846,
                    "value": "[cast(fp + (-7), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 56,
                        "offset": 62
                    },
                    "pc": 854,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 56,
                        "offset": 62
                    },
                    "pc": 854,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 56,
                        "offset": 62
                    },
                    "pc": 854,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 56,
                        "offset": 69
                    },
                    "pc": 858,
                    "value": "[cast(ap + (-2), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 56,
                        "offset": 69
                    },
                    "pc": 858,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 56,
                        "offset": 70
                    },
                    "pc": 859,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 56,
                        "offset": 71
                    },
                    "pc": 860,
                    "value": "[cast(ap + (-1), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 56,
                        "offset": 72
                    },
                    "pc": 861,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 56,
                        "offset": 73
                    },
                    "pc": 862,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 57,
                        "offset": 0
                    },
                    "pc": 863,
                    "value": "[cast(fp + (-5), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 57,
                        "offset": 0
                    },
                    "pc": 863,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 57,
                        "offset": 0
                    },
                    "pc": 863,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 57,
                        "offset": 0
                    },
                    "pc": 863,
                    "value": "[cast(fp + (-7), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 57,
                        "offset": 0
                    },
                    "pc": 863,
                    "value": "[cast(fp + (-6), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 57,
                        "offset": 0
                    },
                    "pc": 863,
                    "value": "cast(1601627122356855500567408145622483635210432194063125420868443695857928031013, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 57,
                        "offset": 7
                    },
                    "pc": 869,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 57,
                        "offset": 7
                    },
                    "pc": 869,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 57,
                        "offset": 12
                    },
                    "pc": 872,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 57,
                        "offset": 12
                    },
                    "pc": 872,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 57,
                        "offset": 17
                    },
                    "pc": 875,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 57,
                        "offset": 17
                    },
                    "pc": 875,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 57,
                        "offset": 46
                    },
                    "pc": 879,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 57,
                        "offset": 46
                    },
                    "pc": 879,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 58,
                        "offset": 0
                    },
                    "pc": 883,
                    "value": "[cast(fp + (-5), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 58,
                        "offset": 0
                    },
                    "pc": 883,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 58,
                        "offset": 0
                    },
                    "pc": 883,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 58,
                        "offset": 0
                    },
                    "pc": 883,
                    "value": "[cast(fp + (-8), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 58,
                        "offset": 0
                    },
                    "pc": 883,
                    "value": "[cast(fp + (-7), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 58,
                        "offset": 0
                    },
                    "pc": 883,
                    "value": "[cast(fp + (-6), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 58,
                        "offset": 56
                    },
                    "pc": 890,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 58,
                        "offset": 56
                    },
                    "pc": 890,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 58,
                        "offset": 56
                    },
                    "pc": 890,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 58,
                        "offset": 63
                    },
                    "pc": 894,
                    "value": "[cast(ap + (-2), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 58,
                        "offset": 63
                    },
                    "pc": 894,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 58,
                        "offset": 64
                    },
                    "pc": 895,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 58,
                        "offset": 65
                    },
                    "pc": 896,
                    "value": "[cast(ap + (-1), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 58,
                        "offset": 66
                    },
                    "pc": 897,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 58,
                        "offset": 67
                    },
                    "pc": 898,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 59,
                        "offset": 0
                    },
                    "pc": 899,
                    "value": "[cast(fp + (-5), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 59,
                        "offset": 0
                    },
                    "pc": 899,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 59,
                        "offset": 0
                    },
                    "pc": 899,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 59,
                        "offset": 0
                    },
                    "pc": 899,
                    "value": "[cast(fp + (-8), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 59,
                        "offset": 0
                    },
                    "pc": 899,
                    "value": "[cast(fp + (-7), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 59,
                        "offset": 0
                    },
                    "pc": 899,
                    "value": "[cast(fp + (-6), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 59,
                        "offset": 75
                    },
                    "pc": 907,
                    "value": "[cast(ap + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 59,
                        "offset": 75
                    },
                    "pc": 907,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 59,
                        "offset": 75
                    },
                    "pc": 907,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 59,
                        "offset": 75
                    },
                    "pc": 907,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 60,
                        "offset": 0
                    },
                    "pc": 908,
                    "value": "[cast(fp + (-4), (count: felt)*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 60,
                        "offset": 0
                    },
                    "pc": 908,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 60,
                        "offset": 1
                    },
                    "pc": 910,
                    "value": "[cast(fp, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 60,
                        "offset": 1
                    },
                    "pc": 910,
                    "value": "[cast(fp, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 60,
                        "offset": 1
                    },
                    "pc": 911,
                    "value": "cast([fp] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 60,
                        "offset": 2
                    },
                    "pc": 913,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 61,
                        "offset": 0
                    },
                    "pc": 917,
                    "value": "[cast([fp + (-5)], felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 61,
                        "offset": 0
                    },
                    "pc": 917,
                    "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 61,
                        "offset": 0
                    },
                    "pc": 917,
                    "value": "[cast([fp + (-5)] + 2, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 61,
                        "offset": 0
                    },
                    "pc": 917,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 61,
                        "offset": 0
                    },
                    "pc": 917,
                    "value": "[cast([fp + (-3)], felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 61,
                        "offset": 0
                    },
                    "pc": 917,
                    "value": "cast([fp + (-3)] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 61,
                        "offset": 0
                    },
                    "pc": 917,
                    "value": "[cast([fp + (-3)] + 1, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 61,
                        "offset": 0
                    },
                    "pc": 917,
                    "value": "cast([fp + (-3)] + 2, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 61,
                        "offset": 0
                    },
                    "pc": 917,
                    "value": "[cast([fp + (-3)] + 2, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 61,
                        "offset": 0
                    },
                    "pc": 917,
                    "value": "cast([fp + (-3)] + 3, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 61,
                        "offset": 0
                    },
                    "pc": 917,
                    "value": "cast([fp + (-3)] + 3 - [fp + (-3)], felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 61,
                        "offset": 1
                    },
                    "pc": 919,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 61,
                        "offset": 84
                    },
                    "pc": 928,
                    "value": "[cast(ap + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 61,
                        "offset": 84
                    },
                    "pc": 928,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 61,
                        "offset": 84
                    },
                    "pc": 928,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 61,
                        "offset": 84
                    },
                    "pc": 928,
                    "value": "[cast(ap + (-1), (count: felt)*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 61,
                        "offset": 92
                    },
                    "pc": 931,
                    "value": "[cast(ap + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 61,
                        "offset": 92
                    },
                    "pc": 931,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 61,
                        "offset": 92
                    },
                    "pc": 931,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 62,
                        "offset": 0
                    },
                    "pc": 937,
                    "value": "[cast(fp + (-6), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 62,
                        "offset": 0
                    },
                    "pc": 937,
                    "value": "[cast(fp + (-5), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 62,
                        "offset": 0
                    },
                    "pc": 937,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 62,
                        "offset": 0
                    },
                    "pc": 937,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 62,
                        "offset": 0
                    },
                    "pc": 937,
                    "value": "[cast(fp + (-9), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 62,
                        "offset": 0
                    },
                    "pc": 937,
                    "value": "[cast(fp + (-8), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 62,
                        "offset": 0
                    },
                    "pc": 937,
                    "value": "[cast(fp + (-7), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 62,
                        "offset": 82
                    },
                    "pc": 946,
                    "value": "[cast(ap + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 62,
                        "offset": 82
                    },
                    "pc": 946,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 62,
                        "offset": 82
                    },
                    "pc": 946,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 62,
                        "offset": 82
                    },
                    "pc": 946,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 63,
                        "offset": 0
                    },
                    "pc": 947,
                    "value": "[cast(fp + (-4), (token_id: felt)*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 63,
                        "offset": 0
                    },
                    "pc": 947,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 63,
                        "offset": 1
                    },
                    "pc": 949,
                    "value": "[cast(fp, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 63,
                        "offset": 1
                    },
                    "pc": 949,
                    "value": "[cast(fp, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 63,
                        "offset": 1
                    },
                    "pc": 950,
                    "value": "cast([fp] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 63,
                        "offset": 2
                    },
                    "pc": 952,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 64,
                        "offset": 0
                    },
                    "pc": 956,
                    "value": "[cast([fp + (-5)], felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 64,
                        "offset": 0
                    },
                    "pc": 956,
                    "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 64,
                        "offset": 0
                    },
                    "pc": 956,
                    "value": "[cast([fp + (-5)] + 2, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 64,
                        "offset": 0
                    },
                    "pc": 956,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 64,
                        "offset": 0
                    },
                    "pc": 956,
                    "value": "[cast([fp + (-3)], felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 64,
                        "offset": 0
                    },
                    "pc": 956,
                    "value": "cast([fp + (-3)] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 64,
                        "offset": 0
                    },
                    "pc": 956,
                    "value": "[cast([fp + (-3)] + 1, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 64,
                        "offset": 0
                    },
                    "pc": 956,
                    "value": "cast([fp + (-3)] + 2, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 64,
                        "offset": 0
                    },
                    "pc": 956,
                    "value": "[cast([fp + (-3)] + 2, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 64,
                        "offset": 0
                    },
                    "pc": 956,
                    "value": "cast([fp + (-3)] + 3, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 64,
                        "offset": 0
                    },
                    "pc": 956,
                    "value": "[cast([fp + (-3)] + 3, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 64,
                        "offset": 0
                    },
                    "pc": 956,
                    "value": "cast([fp + (-3)] + 4, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 64,
                        "offset": 0
                    },
                    "pc": 956,
                    "value": "cast([fp + (-3)] + 4 - [fp + (-3)], felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 64,
                        "offset": 1
                    },
                    "pc": 958,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 64,
                        "offset": 92
                    },
                    "pc": 968,
                    "value": "[cast(ap + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 64,
                        "offset": 92
                    },
                    "pc": 968,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 64,
                        "offset": 92
                    },
                    "pc": 968,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 64,
                        "offset": 92
                    },
                    "pc": 968,
                    "value": "[cast(ap + (-1), (token_id: felt)*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 64,
                        "offset": 100
                    },
                    "pc": 971,
                    "value": "[cast(ap + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 64,
                        "offset": 100
                    },
                    "pc": 971,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 64,
                        "offset": 100
                    },
                    "pc": 971,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 65,
                        "offset": 0
                    },
                    "pc": 977,
                    "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 65,
                        "offset": 0
                    },
                    "pc": 977,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 65,
                        "offset": 0
                    },
                    "pc": 977,
                    "value": "cast(916907772491729262376534102982219947830828984996257231353398618781993312401, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 66,
                        "offset": 0
                    },
                    "pc": 982,
                    "value": "[cast(fp + (-5), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 66,
                        "offset": 0
                    },
                    "pc": 982,
                    "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 66,
                        "offset": 0
                    },
                    "pc": 982,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 66,
                        "offset": 7
                    },
                    "pc": 986,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 66,
                        "offset": 7
                    },
                    "pc": 986,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 66,
                        "offset": 7
                    },
                    "pc": 986,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 66,
                        "offset": 14
                    },
                    "pc": 990,
                    "value": "[cast(ap + (-2), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 66,
                        "offset": 14
                    },
                    "pc": 990,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 66,
                        "offset": 15
                    },
                    "pc": 991,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 66,
                        "offset": 16
                    },
                    "pc": 992,
                    "value": "[cast(ap + (-1), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 66,
                        "offset": 17
                    },
                    "pc": 993,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 66,
                        "offset": 18
                    },
                    "pc": 994,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 67,
                        "offset": 0
                    },
                    "pc": 995,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 67,
                        "offset": 0
                    },
                    "pc": 995,
                    "value": "[cast(fp + (-6), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 67,
                        "offset": 0
                    },
                    "pc": 995,
                    "value": "[cast(fp + (-5), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 67,
                        "offset": 0
                    },
                    "pc": 995,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 67,
                        "offset": 7
                    },
                    "pc": 999,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 67,
                        "offset": 7
                    },
                    "pc": 999,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 67,
                        "offset": 7
                    },
                    "pc": 999,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 67,
                        "offset": 14
                    },
                    "pc": 1004,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 68,
                        "offset": 0
                    },
                    "pc": 1007,
                    "value": "[cast(fp + (-4), starkware.cairo.common.uint256.Uint256*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 68,
                        "offset": 0
                    },
                    "pc": 1007,
                    "value": "[cast(fp + (-7), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 68,
                        "offset": 0
                    },
                    "pc": 1007,
                    "value": "[cast(fp + (-6), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 68,
                        "offset": 0
                    },
                    "pc": 1007,
                    "value": "[cast(fp + (-5), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 68,
                        "offset": 6
                    },
                    "pc": 1010,
                    "value": "[cast(ap + (-2), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 68,
                        "offset": 6
                    },
                    "pc": 1010,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 68,
                        "offset": 12
                    },
                    "pc": 1013,
                    "value": "[cast(ap + (-2), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 68,
                        "offset": 12
                    },
                    "pc": 1013,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 68,
                        "offset": 35
                    },
                    "pc": 1018,
                    "value": "[cast(ap + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 68,
                        "offset": 35
                    },
                    "pc": 1018,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 68,
                        "offset": 35
                    },
                    "pc": 1018,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 68,
                        "offset": 35
                    },
                    "pc": 1018,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 68,
                        "offset": 64
                    },
                    "pc": 1028,
                    "value": "[cast(ap + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 68,
                        "offset": 64
                    },
                    "pc": 1028,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 68,
                        "offset": 90
                    },
                    "pc": 1036,
                    "value": "[cast(ap + (-2), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 68,
                        "offset": 90
                    },
                    "pc": 1036,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 69,
                        "offset": 0
                    },
                    "pc": 1040,
                    "value": "[cast([fp + (-5)], felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 69,
                        "offset": 0
                    },
                    "pc": 1040,
                    "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 69,
                        "offset": 0
                    },
                    "pc": 1040,
                    "value": "[cast([fp + (-5)] + 2, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 69,
                        "offset": 0
                    },
                    "pc": 1040,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 69,
                        "offset": 0
                    },
                    "pc": 1040,
                    "value": "[cast([fp + (-3)], starkware.cairo.common.uint256.Uint256*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 69,
                        "offset": 0
                    },
                    "pc": 1040,
                    "value": "cast([fp + (-3)] + 2, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 69,
                        "offset": 0
                    },
                    "pc": 1040,
                    "value": "cast([fp + (-3)] + 2 - [fp + (-3)], felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 69,
                        "offset": 1
                    },
                    "pc": 1042,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 69,
                        "offset": 101
                    },
                    "pc": 1050,
                    "value": "[cast(ap + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 69,
                        "offset": 101
                    },
                    "pc": 1050,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 69,
                        "offset": 101
                    },
                    "pc": 1050,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 69,
                        "offset": 101
                    },
                    "pc": 1050,
                    "value": "[cast(ap + 0, ()*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 69,
                        "offset": 102
                    },
                    "pc": 1052,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 69,
                        "offset": 102
                    },
                    "pc": 1052,
                    "value": "cast(0, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 70,
                        "offset": 0
                    },
                    "pc": 1059,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 70,
                        "offset": 0
                    },
                    "pc": 1059,
                    "value": "[cast(fp + (-6), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 70,
                        "offset": 0
                    },
                    "pc": 1059,
                    "value": "[cast(fp + (-5), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 70,
                        "offset": 0
                    },
                    "pc": 1059,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 70,
                        "offset": 5
                    },
                    "pc": 1063,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 70,
                        "offset": 28
                    },
                    "pc": 1068,
                    "value": "[cast(ap + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 70,
                        "offset": 28
                    },
                    "pc": 1068,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 70,
                        "offset": 28
                    },
                    "pc": 1068,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 70,
                        "offset": 28
                    },
                    "pc": 1068,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 70,
                        "offset": 50
                    },
                    "pc": 1074,
                    "value": "[cast(ap + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 70,
                        "offset": 50
                    },
                    "pc": 1074,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 70,
                        "offset": 50
                    },
                    "pc": 1074,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 71,
                        "offset": 0
                    },
                    "pc": 1075,
                    "value": "[cast([fp + (-5)], felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 71,
                        "offset": 0
                    },
                    "pc": 1075,
                    "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 71,
                        "offset": 0
                    },
                    "pc": 1075,
                    "value": "[cast([fp + (-5)] + 2, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 71,
                        "offset": 0
                    },
                    "pc": 1075,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 71,
                        "offset": 0
                    },
                    "pc": 1075,
                    "value": "[cast([fp + (-3)], felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 71,
                        "offset": 0
                    },
                    "pc": 1075,
                    "value": "cast([fp + (-3)] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 71,
                        "offset": 0
                    },
                    "pc": 1075,
                    "value": "cast([fp + (-3)] + 1 - [fp + (-3)], felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 71,
                        "offset": 1
                    },
                    "pc": 1077,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 71,
                        "offset": 57
                    },
                    "pc": 1084,
                    "value": "[cast(ap + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 71,
                        "offset": 57
                    },
                    "pc": 1084,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 71,
                        "offset": 57
                    },
                    "pc": 1084,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 71,
                        "offset": 57
                    },
                    "pc": 1084,
                    "value": "[cast(ap + 0, ()*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 71,
                        "offset": 58
                    },
                    "pc": 1086,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 71,
                        "offset": 58
                    },
                    "pc": 1086,
                    "value": "cast(0, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 72,
                        "offset": 0
                    },
                    "pc": 1093,
                    "value": "[cast(fp + (-5), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 72,
                        "offset": 0
                    },
                    "pc": 1093,
                    "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 72,
                        "offset": 0
                    },
                    "pc": 1093,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 72,
                        "offset": 23
                    },
                    "pc": 1098,
                    "value": "[cast(ap + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 72,
                        "offset": 23
                    },
                    "pc": 1098,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 72,
                        "offset": 23
                    },
                    "pc": 1098,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 72,
                        "offset": 23
                    },
                    "pc": 1098,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 73,
                        "offset": 0
                    },
                    "pc": 1099,
                    "value": "[cast(fp + (-4), (res: felt)*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 73,
                        "offset": 0
                    },
                    "pc": 1099,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 73,
                        "offset": 1
                    },
                    "pc": 1101,
                    "value": "[cast(fp, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 73,
                        "offset": 1
                    },
                    "pc": 1101,
                    "value": "[cast(fp, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 73,
                        "offset": 1
                    },
                    "pc": 1102,
                    "value": "cast([fp] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 73,
                        "offset": 2
                    },
                    "pc": 1104,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 74,
                        "offset": 0
                    },
                    "pc": 1108,
                    "value": "[cast([fp + (-5)], felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 74,
                        "offset": 0
                    },
                    "pc": 1108,
                    "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 74,
                        "offset": 0
                    },
                    "pc": 1108,
                    "value": "[cast([fp + (-5)] + 2, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 74,
                        "offset": 0
                    },
                    "pc": 1108,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 74,
                        "offset": 0
                    },
                    "pc": 1108,
                    "value": "cast([fp + (-3)] - [fp + (-3)], felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 74,
                        "offset": 28
                    },
                    "pc": 1114,
                    "value": "[cast(ap + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 74,
                        "offset": 28
                    },
                    "pc": 1114,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 74,
                        "offset": 28
                    },
                    "pc": 1114,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 74,
                        "offset": 28
                    },
                    "pc": 1114,
                    "value": "[cast(ap + (-1), (res: felt)*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 74,
                        "offset": 36
                    },
                    "pc": 1117,
                    "value": "[cast(ap + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 74,
                        "offset": 36
                    },
                    "pc": 1117,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 74,
                        "offset": 36
                    },
                    "pc": 1117,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 75,
                        "offset": 0
                    },
                    "pc": 1123,
                    "value": "[cast(fp + (-5), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 75,
                        "offset": 0
                    },
                    "pc": 1123,
                    "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 75,
                        "offset": 0
                    },
                    "pc": 1123,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 75,
                        "offset": 22
                    },
                    "pc": 1130,
                    "value": "[cast(ap + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 75,
                        "offset": 22
                    },
                    "pc": 1130,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 75,
                        "offset": 22
                    },
                    "pc": 1130,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 76,
                        "offset": 0
                    },
                    "pc": 1131,
                    "value": "[cast([fp + (-5)], felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 76,
                        "offset": 0
                    },
                    "pc": 1131,
                    "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 76,
                        "offset": 0
                    },
                    "pc": 1131,
                    "value": "[cast([fp + (-5)] + 2, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 76,
                        "offset": 0
                    },
                    "pc": 1131,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 76,
                        "offset": 0
                    },
                    "pc": 1131,
                    "value": "cast([fp + (-3)] - [fp + (-3)], felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 76,
                        "offset": 27
                    },
                    "pc": 1137,
                    "value": "[cast(ap + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 76,
                        "offset": 27
                    },
                    "pc": 1137,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 76,
                        "offset": 27
                    },
                    "pc": 1137,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 76,
                        "offset": 27
                    },
                    "pc": 1137,
                    "value": "[cast(ap + 0, ()*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 76,
                        "offset": 28
                    },
                    "pc": 1139,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 76,
                        "offset": 28
                    },
                    "pc": 1139,
                    "value": "cast(0, felt)"
                }
            ]
        }
    }
}

import { BlockListData, getApproximateStxBlocksPerMinuteFromBlockList } from '../utils';

const realBlockList = [
  {
    stxBlocks: [
      {
        type: 'stx_block',
        height: 2663,
        hash: '0xf7e1505f23c3ec1f5aabcb0096220f861c704ab9e6832c47af9ca598f4de3b97',
        timestamp: 1713986479,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2662,
        hash: '0x38db4b8b6097cf88ef2ba08032207998370bc4961a468137d099181aec861984',
        timestamp: 1713986479,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2661,
        hash: '0x54bd360020d91ed52c9f74aab71f286799d468ac9a0b923f4029b75f8becf3e0',
        timestamp: 1713986479,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2660,
        hash: '0xca0696f724fcc1e57ee2b3f09b91155eedd6c2a392ee3366d132cd9ea421a91a',
        timestamp: 1713986479,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2659,
        hash: '0xd7ae719c9b021fb51fd245b54541fc669e2f12f893b79604c9cb405e6b004c94',
        timestamp: 1713986479,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2658,
        hash: '0x03f198bac5fdc918309d7cccf3b49a340c2ad78ec313e07447cced21737773a0',
        timestamp: 1713986479,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2657,
        hash: '0xc660f474d7d4946365b9642aeb3dd7e088cf8a5fbd3942671c19461565cf7a14',
        timestamp: 1713986479,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2656,
        hash: '0x9d33f7e683ea25e92daae84e1d71ddcc581117c6e66a7cdfed747de3b586ecfc',
        timestamp: 1713986479,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2655,
        hash: '0x5e59b119a949218512e793faa86a327c1202175741e9761764a3e17201ff94f5',
        timestamp: 1713986479,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2654,
        hash: '0xd02d74c2f95c447a5b88197c0770ce97117547445088172579e5544dc58b3dfc',
        timestamp: 1713986479,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2653,
        hash: '0x889214f68d5b49169af527ae11386d36c9d4861e5c6bc0eb3d4b791f4be082ab',
        timestamp: 1713986479,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2652,
        hash: '0xe65998c2161a93bc0952340e5b93a9277f6858d0660e0a04c243b9b3cf65839e',
        timestamp: 1713986479,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2651,
        hash: '0x254fbd2ccbf71c6c370adef81dba9e8938492707820902e7a28c372f8b07922d',
        timestamp: 1713986479,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2650,
        hash: '0x2f48438a6877684479aa9b927133ad7312d383d936ab25fca6e8f8fb45dc3bbb',
        timestamp: 1713986479,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2649,
        hash: '0x4a6069810261e3b4db7f83cc1528cc86fab2d146b6fb203b61e2365ef4c5946f',
        timestamp: 1713986479,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2648,
        hash: '0x9771784c135e691601e08a9681d8dd6d0fc8f3c20aaf892965f60ced18028422',
        timestamp: 1713986479,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2647,
        hash: '0xe2fd6a6679c6ea16e6a269933254986b6efb81d385ecdeac75262c0996e3fb9e',
        timestamp: 1713986479,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2646,
        hash: '0x5ab322e74a6ac64f2a92e612d12d25c142ce7f0c7234bd69ab97e49aba07ce5b',
        timestamp: 1713986479,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2645,
        hash: '0x86228f65ccd2ca0c92883c54eb025cc7b970da3f38bcf5464ca1f4cc397a27e0',
        timestamp: 1713986479,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2644,
        hash: '0x8d0bf6b83c584d280fe2f2b2aeab414a79fdcdc80833cdd09759b34db6e31af5',
        timestamp: 1713986479,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2643,
        hash: '0x51d8fcb7339d4dd00ff78860ff8d1dfb63e053ffda62c36e5c8c043abacda068',
        timestamp: 1713986479,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2642,
        hash: '0x37e31e0b277fca4e0aee527648c294b42dfa39138111e53cdab515ee92fd52b4',
        timestamp: 1713986479,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2641,
        hash: '0x19494b38c3db1408903abd6869138985768149d75edd057f90a816b0f6b2619b',
        timestamp: 1713986479,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2640,
        hash: '0x93fbaa6ec660e3ed63d89ff69e9bcd8746ccf566b200cc596521197aae7e2f8f',
        timestamp: 1713986479,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2639,
        hash: '0x3cb73092987e0379dda53078bb36569889e00328b30e5d7e932968a1c728abd8',
        timestamp: 1713986479,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2638,
        hash: '0x0231e5e247645a5231ef38b293b3400bda0ee4b3f11e85a9d9a75d3c38999ffb',
        timestamp: 1713986479,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2637,
        hash: '0x8ef2cc2642c2529a22dd88786343becde18745ede8106b20c7bd68c9de052c97',
        timestamp: 1713986479,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2636,
        hash: '0xe08d885743668bc2604405c23598210603d900c009dec05cb7e2c502beb57d14',
        timestamp: 1713986479,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2635,
        hash: '0x38d87716b9160fca49003f9b2b32fa4a7e1c45951d2c527cf28c7dd34bd11ca4',
        timestamp: 1713986479,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2634,
        hash: '0xa16f02c2f40ce58ebade78a259f066cb7a7794e21ffd45c0337567426afc87d3',
        timestamp: 1713986479,
        txsCount: 3,
      },
    ],
    btcBlock: {
      type: 'btc_block',
      height: 203,
      hash: '0x4d6c49c561d43475ddfe83cf7314049fc22603877bb73b3a606a3944ef2e7932',
      timestamp: 1713986479,
      txsCount: 30,
    },
  },
  {
    stxBlocks: [
      {
        type: 'stx_block',
        height: 2633,
        hash: '0xda0b5db670ef50622dfd6bdbc237ba7fdb999cba6f8c7d6dd5dc5152a8e62476',
        timestamp: 1713986359,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2632,
        hash: '0xd0cffcab302807f8de2e555dd62c91e3652d54941699ecffc019615530118079',
        timestamp: 1713986359,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2631,
        hash: '0xaa5d2d4c4025f2622156418c7edd3f50a04160af8c143a5af061529ae5f6595e',
        timestamp: 1713986359,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2630,
        hash: '0xb6abb5f22e64f870b736a56ea66c513779516d085d709dcef3f10ab6afffcbe9',
        timestamp: 1713986359,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2629,
        hash: '0x2386a47ce40ab6d83bda6df6283748a6030663b4545ca04bb65a78b3eac1b584',
        timestamp: 1713986359,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2628,
        hash: '0x4ab4db9cc3caea87a8e502f5020c9c9f70f717e0d3264ceb6801638a409039e9',
        timestamp: 1713986359,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2627,
        hash: '0xb6d67895c4f7dc3745fbd51676ab061189d3d6df07bee391032036607b663808',
        timestamp: 1713986359,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2626,
        hash: '0x0748288b2f1be1b059a83bd989130e0874e1d91c18b157692033579183be56da',
        timestamp: 1713986359,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2625,
        hash: '0xe97b38ff589911cc99a14fe292cc7c9c1f16f7a1c787125558738634507e3820',
        timestamp: 1713986359,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2624,
        hash: '0xca9499ad132cde2848e0ce54a2fafbfc4a733566c2668e5f38345e9b166c2e9a',
        timestamp: 1713986359,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2623,
        hash: '0xcde09651c80537982b1469879d56784c18ac8e9d53cbe66d01001c7ad742f123',
        timestamp: 1713986359,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2622,
        hash: '0x74e7960899516d0f2145b8ab266f293f3525ea1038c9c0ed65afdbb5f31ee204',
        timestamp: 1713986359,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2621,
        hash: '0x3f9d2fe892c1c9d832bb90b75c33c21c376239f715d9de524ca3a0b85a0e18da',
        timestamp: 1713986359,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2620,
        hash: '0xa9fe6e5631204256ee39c730390b629e1a9a6c4da75721e52982e1dbf7e8df76',
        timestamp: 1713986359,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2619,
        hash: '0x0986a46bf751bd4643cda43f33e97ff1fef68baf0cb3c81d417e6fd2ddf99142',
        timestamp: 1713986359,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2618,
        hash: '0xacdaa150810eb6f819470d2d069767990a8f9259b001988c61afcd5a98f9f9f6',
        timestamp: 1713986359,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2617,
        hash: '0xc0b0c643a32fd2f2c4c367d642d8c3864dedeb1b3f3449948d45702162adbe41',
        timestamp: 1713986359,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2616,
        hash: '0x262457f50a032ad4683be4ac2ed8937da4b71e42244e8a66986eed66d51e5fc5',
        timestamp: 1713986359,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2615,
        hash: '0x7e374330983ce267084cb99563131b0fccd62b19f25b714fac7c0c910e7c512b',
        timestamp: 1713986359,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2614,
        hash: '0x85e9930a91e4117ed25f60416e3786265d0b01e410fa709c72b25983f8fda499',
        timestamp: 1713986359,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2613,
        hash: '0x023c04bd9cd69208d391464c2d5f2320d7da5e2766a3d0f6c9199ac9e294af94',
        timestamp: 1713986359,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2612,
        hash: '0xb4c1548c16fa9a4f45c19317752a4af9a77c30ada933d77053c1bd93ab561e8e',
        timestamp: 1713986359,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2611,
        hash: '0xaf0235c258e827e0f90ac579be9b1922f4e463f7dfc496825a22f4b298f3e410',
        timestamp: 1713986359,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2610,
        hash: '0x44ccb56e646988c43c315296f2fbe75eafc4e0479121729d50ee1f28deb4a3c2',
        timestamp: 1713986359,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2609,
        hash: '0x7def3ef847d3b6de35fcaeaac9d684fa3814effcf34e8fa628b24f821adac724',
        timestamp: 1713986359,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2608,
        hash: '0xabfcd9743dd3b57ec8f1f65450085fd31eee53c152ab0a547aeb7e3b162b5958',
        timestamp: 1713986359,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2607,
        hash: '0xb2255438770a283f54a0d03e131e7d3915abe22be5e074d3008e2edf07532476',
        timestamp: 1713986359,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2606,
        hash: '0xf7dbf7f01ee37d575419dbe2fbf91d644af6b2467191b14ea1b2aeca082cbd55',
        timestamp: 1713986359,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2605,
        hash: '0x7c66d84e0d1f7f6e85b772e616a418cfea8be55bace0b31141669b52552d77f4',
        timestamp: 1713986359,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2604,
        hash: '0xb04a7ccfa2952ef7b4794a94e0e494016e5884353057d7ed022bf559fc1125bc',
        timestamp: 1713986359,
        txsCount: 1,
      },
    ],
    btcBlock: {
      type: 'btc_block',
      height: 202,
      hash: '0x021957ca1196f9e35dfb1d6686e85b91548823eb17967a15fe88baca7a217f53',
      timestamp: 1713986359,
      txsCount: 38,
    },
  },
  {
    stxBlocks: [
      {
        type: 'stx_block',
        height: 2595,
        hash: '0xacd77c092166ef254cbe18e36913d188acc651043f8b401de6bf5862839c3a98',
        timestamp: 1713986239,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2594,
        hash: '0xbbe497bf491d7b267d857f624b7759b4a394bf9dd989ca1f5bef054bf5d7d114',
        timestamp: 1713986239,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2593,
        hash: '0xa5269d087209b64bb2778637f69f1d99e4ba590824e75ed4c3ac5bc014dcb587',
        timestamp: 1713986239,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2592,
        hash: '0xb93e35eaef923a42dbc1ea148d6abcf4e9b7b241254e432109a6bb53ca345131',
        timestamp: 1713986239,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2591,
        hash: '0xfa4eeb0008193c6d789563a8061b52641b97fdcf7b51365ce39bfee41d70aaff',
        timestamp: 1713986239,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2590,
        hash: '0xf0c56c6e6d717958cb413e95beb1cbc7f7c29c8f1db8fa3be0fb1fc15fdc252b',
        timestamp: 1713986239,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2589,
        hash: '0xe0081e8f5ff5cc9f4769e5168089aaad4fb504c45d669bb50ac8f56e46887d23',
        timestamp: 1713986239,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2588,
        hash: '0x9aa2d85a9b03fa0410605ad36b4e84f9d75dc05520499adb410188455569d4d0',
        timestamp: 1713986239,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2587,
        hash: '0x3e0520412b0f09fe5dde0b062e858b40b752e8d01fb9e3e5321d2e1b564987ce',
        timestamp: 1713986239,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2586,
        hash: '0xe23654001aab0903daec22cae062ec9a40f9c47c7514a9f54f5f5bb9289a3fd9',
        timestamp: 1713986239,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2585,
        hash: '0xd4dba2bafbe40ca841abc41ffb55e4823c207bfa4b667922e6ccfbef22799ba2',
        timestamp: 1713986239,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2584,
        hash: '0xa97121673af10e163a70cedf4a63ef9a8a7e2c4d3c0f3043ddb02fadf8597ebb',
        timestamp: 1713986239,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2583,
        hash: '0xcbcfc4d2b558de785979ae2e6b817535f9452fe21868755e1e0aa804dbd99f17',
        timestamp: 1713986239,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2582,
        hash: '0xbf5180133634b9eeff514433fc1b34b58437a6cccc18f8731d2ab440c30fbb33',
        timestamp: 1713986239,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2581,
        hash: '0x2722c4a34a54bb9453e19c3afeca7f72fa456fddfa5dfddd5c1f0cddb4589993',
        timestamp: 1713986239,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2580,
        hash: '0x4de84637db153040d787a3a06ac3af2c0df7a3430d6e27a4a86d44c3cf899b21',
        timestamp: 1713986239,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2579,
        hash: '0x1ed1b33a04abebfdf2a3021eadd2a1e3305875bbd35d3adab81bf2711485c8ba',
        timestamp: 1713986239,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2578,
        hash: '0xb22d98ca49a13cf74b920e3e1a7fbc2d25328aef427c1efca0c841462f8beade',
        timestamp: 1713986239,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2577,
        hash: '0x4a95d0ede0dbfc1f63bcfc46374057627577b664a4a7b4853075249bf67e5349',
        timestamp: 1713986239,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2576,
        hash: '0xf3d6ab88cdc9e2ebdf514632d3655eb31e52fd7507e6456f3754e8f2b2492fae',
        timestamp: 1713986239,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2575,
        hash: '0xce25e67e13f84f95bd63029d71918fdc309fd7ab22b53419a39137cb821f938b',
        timestamp: 1713986239,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2574,
        hash: '0xefdbfbe61e75a482646f01fc62178e5373385c376024f3fcd9595b5b6683a1a4',
        timestamp: 1713986239,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2573,
        hash: '0xd66b519a49ced4c9af4e8b4f1e82db3c2b11082832d33f14a81e734a1c5c58f2',
        timestamp: 1713986239,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2572,
        hash: '0xef88387420b2f0c8ce2f3600c26dd3986070dc9c7eeb1d5ecb8b2f7ce06bc9ed',
        timestamp: 1713986239,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2571,
        hash: '0x4defd71f497e43ef8af064452780a05ad4052622d7147d01981289c1456568e6',
        timestamp: 1713986239,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2570,
        hash: '0x01cdee29fae50dce88def301b098247197c50d2a58fc6d4d5241fde1816e42a3',
        timestamp: 1713986239,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2569,
        hash: '0x8dbead07275d8c80c00177e747b75b871f201fccbb6589f4c29c8a9477f57041',
        timestamp: 1713986239,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2568,
        hash: '0xc228ff69afd8e4952bb06bb40fa410fa0d0a065f33b8bdf59b4ce495ae8bc8dd',
        timestamp: 1713986239,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2567,
        hash: '0xda559b51c1a01b867e7dd14c61bb7b83f2b3c72512361a329893aea40606116a',
        timestamp: 1713986239,
        txsCount: 1,
      },
      {
        type: 'stx_block',
        height: 2566,
        hash: '0xc4d90490e6ab811aec982573640b8be362ccffed52a586ca70c35a4cf32b8ad4',
        timestamp: 1713986239,
        txsCount: 1,
      },
    ],
    btcBlock: {
      type: 'btc_block',
      height: 201,
      hash: '0x485909c479fb48061b3af27c252965681809c8b7a966d2b67e884721657fa798',
      timestamp: 1713986239,
      txsCount: 38,
    },
  },
] as BlockListData[];

describe('getApproximateStxBlocksPerMinuteFromBlockList', () => {
  test('returns 0 for empty or undefined block list', () => {
    expect(getApproximateStxBlocksPerMinuteFromBlockList([])).toBe('0');
  });

  test('calculates correct average when all BTC blocks have transaction counts', () => {
    expect(getApproximateStxBlocksPerMinuteFromBlockList(realBlockList)).toBe('353');
  });

  test('excludes BTC blocks without transaction counts from calculation', () => {
    const blockList = [
      { btcBlock: { txsCount: 10 } },
      { btcBlock: { txsCount: 20 } },
      { btcBlock: {} }, // No txsCount property
    ] as BlockListData[];
    expect(getApproximateStxBlocksPerMinuteFromBlockList(blockList)).toBe('150');
  });

  test('returns 0 when no BTC blocks have transaction counts', () => {
    const blockList = [
      { btcBlock: {} }, // Empty btcBlock
      { btcBlock: {} }, // Empty btcBlock
    ] as BlockListData[];
    expect(getApproximateStxBlocksPerMinuteFromBlockList(blockList)).toBe('0');
  });

  test('rounds result to nearest integer', () => {
    const blockList = [
      { btcBlock: { txsCount: 3 } },
      { btcBlock: { txsCount: 7 } },
    ] as BlockListData[];
    // Exact calculation would be 5.0 per minute, expect rounding to apply from toFixed(0)
    expect(getApproximateStxBlocksPerMinuteFromBlockList(blockList)).toBe('50');
  });
});

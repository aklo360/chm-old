import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 8001;
export const JWT_SECRET = process.env.JWT_SECRET || "JWT_SECRET";

export const TEST_MODE = true;
export const MONGO_URL = process.env.MONGO_URI;

export const MEMPOOL_API = TEST_MODE
  ? "https://mempool.space/testnet4/api"
  : "https://mempool.space/api";

export const SMART_CONTRACT_PUBKEY = TEST_MODE
  ? "a012355f0d46606e1bb7f49107577765af410703fb15443bc62c7172f034c059"
  : "a012355f0d46606e1bb7f49107577765af410703fb15443bc62c7172f034c059";

export const ACCOUNT_PUBKEY = TEST_MODE
  ? "ca74c4777b9a4753bd401751d9c33539b9352a152ab92d63a97fd0ab699a0835"
  : "";

export const SMART_CONTRACT_PUBKEY_SWAP = TEST_MODE
  ? "91d402e0373f71cd86ca53bc623912bb47a350015bcf5aafa7be9e3fc202e895"
  : "91d402e0373f71cd86ca53bc623912bb47a350015bcf5aafa7be9e3fc202e895";

export const ACCOUNT_PUBKEY_SWAP = TEST_MODE
  ? "7a1fcbe1f3b73b8bb75b6b1b4e7dc11ae55196dc8edd8c7fb69ba05290bebe2f"
  : "";

// export const RPC_URL = TEST_MODE ? "http://rpc-01.test.arch.network" : "";
export const RPC_URL = TEST_MODE ? "http://localhost:9002" : "";

export const GOMAESTRO_URL = TEST_MODE
  ? "https://xbt-testnet.gomaestro-api.org/v0"
  : "https://xbt-mainnet.gomaestro-api.org/v0";

export const GOMAESTRO_PRIVATE_KEY = process.env.GOMAESTRO_PRIVATE_KEY;
export const SIGNATURE_SIZE = 126;
export const MAX_RETRIES = 3;
export const SYSTEM_SMART_CONTRACT =
  "0000000000000000000000000000000000000000000000000000000000000001";

export const runeSwapAmount = 100000;
export const runeId = "68341:599";
export const SOURCE_RUNE_TOKEN_ID = "72801:1000";
export const FIRST_RUNE_TOKEN_ID = "72795:1082";
export const SECOND_RUNE_TOKEN_ID = "72801:1001";
export const THIRD_RUNE_TOKEN_ID = "72801:1007";
export const FORTH_RUNE_TOKEN_ID = "72801:1004";
export const FIFTH_RUNE_TOKEN_ID = "72801:1003";
export const SIXTH_RUNE_TOKEN_ID = "72801:1002";
export const SEVENTH_RUNE_TOKEN_ID = "72801:1008";
export const EIGHTH_RUNE_TOKEN_ID = "72801:1005";
export const NINTH_RUNE_TOKEN_ID = "72801:1006";
export const WL_CNT = 2;
export const NORMAL_CNT = 1;
export const START_TIME = 1739383200000;
export const WLList = [
  "tb1pmu2dxwm736cewa4m4qgz2msfff027s5el5c0cesvn882wc9qxhwqsk2hl9",
  "tb1pyd6sv7jy29gex33c2yxf5hldqm8vqnfpr9mt2cecq06pzv9mhr2s4svgdq",
  "tb1pfytu6ks9v3g4k46mll2dj6gz8v46khnyyl7wuexhxguer40g4q5ssznlrk",
  "tb1pgda5khhwqlc7jmdzn4plca3pa4m7jg38zcspj0mmuyk8hnj5pphskers72",
  "tb1py67pa6gl3hj530sefdt9t9up5ca2jtcl7rx8yuuhrg3zrwx0fe4q2zmumw",
  "tb1pfhkhcq9h4a3m90r6q5a60vyu566ckz660h40pp69ex38hhmvjvqqw33c6m",
  "tb1p4xpshuueas0msm0zcv4sas93plue8cw2aep64l3f3k890knnrshss2qkzn",
  "tb1peyaun3wj574rxkxr7m5ksqgjwxrfytkcws9kjlt5xrvte4nyhgyqmy7jf9",
  "tb1pxxjqjtkhh8uf5f0www5p9ph3wh5xg6s7mapteedk3mxql3hcx0fq6g7upj",
  "tb1ppkadk6yfqz0xxpt7g6vdth2fuq44v3shpk4zurk2uuwhkqh3e7us8rm4nw",
  "tb1pkf7kjqu5jp4837gxy8gvkzn20eupx44pz4mlrsq2ahlxpupsrf2qns0akq",
  "tb1ph4u94tzdzgdru35m7jcj9gpr4e76p7kjtdgkj5p6fn6vvs248mvqy9zcuh",
  "tb1pvl4jjj88t59ty4nu4vlss7yzv9u9kpfxj9setgfknyk7pw53d8ysuujdwa",
  "tb1pmgvdmayqawfnm9rmy36vhgfkj5zuvae9g5rswc49d0w3snq7d6uqm8l45r",
  "tb1pwukvum3j485dn56762ashlgtrgnlcvjsq8mt3snau3k3gg29gpls742hc0",
  "tb1pt4gaulr8weuswcyk8l3pfkkdaeglsfa9wmycr7jhxx8sar9vhresrn5wff",
  "tb1p5v0kcvtzwgzc5380trudsy64rtgae4wyd0srwgm6d8kc2nfj0c9qmzssze",
  "tb1phmae0lz5zsrjmm7mfxnv7xkn3apwwlq5h7ycahm06sd2c69ph5lqh25lgy",
  "tb1p8ha4rghhmh38vavklwdee6wq5q2nked7458qylr04cf0n2g54a6s7ypfqu",
  "tb1p50ny9qqqj32y293cr5t5u8l2k9s2n4vup8uafxpcquxna4c99nwqvkhfss",
  "tb1pqe5zydwwdp762dy0z4qc5c5ettxa5r36vhelt2xzl0qcwm9jjdlqfh9dpq",
  "tb1pxskpy7e5xpd8rj9vkq407hlfwg2svyw8rcdl7k0g6sy8l8cz55qsewvu28",
  "tb1p9wysn2qegah8sxh9s38wfese6n7paqzmvk0zs7rqf93auelat30sm770eh",
  "tb1p2h3xymmevl5merttwemevamqu0eda68x0j5szfad0fwh9lqwfguqfxp4lz",
  "tb1p8pey8wvm5j3w849xpzu5atrrtmqesq47vw4wx4ruj30as2t6nzhs3eqy44",
  "tb1ptjlhp93vpwg3a0ayzv55kszx9k885mdkrjjhzs3kc2m7znyau5tsysjf2p",
  "tb1pakufzzulmrt29ljuqf9yag70gf43fc3dt60rx8a64egs6qcadhvs8qzjgs",
  "tb1p4yctm3653nw4x2dt3yzxtcylkjw7t6xfpk7w4jv7y0ntshk6682sw8xplk",
  "tb1pz28uqly0gxq3ewpfvt2tdsa9rh8etmk394f70exzzgcrlupswdus0gf6wp",
  "tb1px72gypmc4qhkfm8j7m8r6vfng55lpnltg027geg4qhljstswe5cqyrd43j",
  "tb1pz6hpfc8cc0yeaam632nx0ytwdvwcn9w6942q9valu43qlqd5jltq6nvhys",
  "tb1ps8w70j3kpjnal82258haw28s75rm3yx9y3kl29mvkklrp5xry4eshf882y",
  "tb1p4wzn4zc70lhfw7tfs2qhxxmvt7sv7w69ckqkz9gnms993fwwe96srlyv84",
  "tb1plmvj5s0gvhc3wtmk9yq3tvh4n3tf45ewe665vlg43y6gvhdzjdrs5mt0eh",
  "tb1p938w7tk50chdqpquwtm9nztn5q7uw4gpwdy77hkd7thdgk06gqwqlk8ntz",
  "tb1p9gzzqp0grv3zlg6jmazmh7qxyumshz33zkye7mh42anzz05tmlzsv7gdfs",
  "tb1plj5pnda5tc84q0ypyrlvzy9n7tndlgtszjxhh5evtju5s7qmra0qwvnksp",
  "tb1plc7flyj9kuqpuc7q79p9j2wwx2v0686x7p05flzshlstx0f8xp5qz7juew",
  "tb1p3xzqd70z0n976x2ljwafe6lp64c090pcahagk8p4f6eld697kfsqze98c0",
  "tb1plc7flyj9kuqpuc7q79p9j2wwx2v0686x7p05flzshlstx0f8xp5qz7juew",
  "tb1p9sq2qe6eva5ksw0t2t20nq6axsp832y94st7v0urwuk0ykzlkhrsl3p07d",
  "tb1pdqxrc2yuwe8agn5w8xhy27379ljud4wyfw7zjej2ljdtc6dnstqqfekzdh",
  "tb1p94aprkggwrajagea4gj7gtq8yjpulg43w6czlryg6h4z6j386ccs5d0muu",
  "tb1p68y392p68qeay2xj9yeagze83phrtmg7pj4z7xnkmgf9emefpcvs8vw6cu",
  "tb1p7v92q9ujkxcdxxm2ay26fqyuwgwclu6zkrte9lpxw226tzuy3rzqttfy8v",
  "tb1pxelnkgtp9d7trd3pqmduz5uk4fc6u9mu0llvae2jw3uf8cap6tgq8l5lpm",
  "tb1pzc4hl3a8euep86wa5wdk5sekwn63mhe6c8l3dtun6y3strwynrtqrn5zsm",
  "tb1pnjeh2sehjnjd2a3f23gw3ml4aps4sd8hmr00mzru43a5ajrfsuusjjvw8w",
  "tb1pf8kc44qk60ltvjs3v7pkgkw5z7ya28f9nu9fvrekfs4g0p8hf0ns94sc0u",
  "tb1psvckw33qfexncvzaw9j60082q6l7ky2r6ktt8gumu46acfe3hwfsp9f6yk",
  "tb1plupkga0utt4nqgr7jkg9rfulzm3lwyueyzqwc8yr2hrepkqzs53qvsmcf4",
  "tb1p3pj85ssu4qrdwmgtzvwr5hzrrgqn3q6xf570ddy5dc327zp08ljqygnkrt",
  "tb1puvhuhktqs50z4pu660gu3tsqax4ud0cck2ppzehpwuu790stdraslhfgwg",
  "tb1pdl5we0xaxdac7t0zh8e3t5vdraa3uk4a00fkaz33xtumas3shlmql2lu2h",
  "tb1ptxmjkattn8jj6v8z7px950emk6cmdmrt2h9njzxm49qehh92z6aq2e99ht",
  "tb1paxnlskxqkmu2s63l3fs6avg04h9jlduaehl6nzz9aepwjv9la6lqhfcf95",
  "tb1pf868eddfq4wa2unj3yt3th4ak735ujnmawnjuh8q376fn9nvvxgqvgnzgh",
  "tb1p8w24puzj97ykdgdcmyqdz6xulzpnlkxkzgehjzrdw9ng2q9tx4rsdhpr3u",
  "tb1pf3330jfz3xyldv4fapnw8p60n3z0vt9a9kypv2lyzg909pkswuyq7jhsgc",
  "tb1pc63d8s2cnhg5d2wfjh70wfr086989xlplsz5xm2mt4p6sqcvgaqqupt89l",
  "tb1pgpt0m4cdllvx655e4y4xqjqaspe2xtpyz73krrjf9dt74ajtnj5qj5hmj7",
  "tb1pxk5ev507vfe6jw36q44w36hhusaz53le3jjm9dtdqqw38lu7nw4qd2ge88",
  "tb1pk8nmw53esvqjf8d3pahh9n9jrydhejnjxt0k6lqeeyamrsc29u0qllzrqx",
  "tb1p4xxxs29cd8dexnlqr273q6hcrgkzkm8kfzgnlwvs2vgeg8gkt2usl4j9ur",
  "tb1pynh6h9mfmtyeswtjuljx282zhfy3yw644at8wrnztntuz52shf4stgylyu",
  "tb1p44nwhdn2v0008p5uyjel4ws2wqja740l7v9psm6t7vhcstt0zrsqlp59ze",
  "tb1pm86e278h07c7qjdx30xz0lkr7zx0tdkgm8h5qswjmp20eh7e9cms0vupdd",
  "tb1p78xrwj342vh0a5xp3ytenv6g8u5gmx3rcn2d9vscw5zquhdn0g4q7xdv6x",
  "tb1pvkumrkmmr4jgp9u3xg6qjx52wupu5vcp0rh6zfpha2tlhslpf0equew6pq",
  "tb1pd3txtr579336m7dg46769ml5afjh8446ezy75lsle8dtus4sfr3q20erne",
  "tb1pmdxkxjtarf0rer6g62pystp9r0u8ff2a5mglgxdslq2w92d0d2ystush4y",
  "tb1p2dqmxlcwddtk05ge9ypdhgn6lj83hxjj9xta8sauthjdmt4x2aqqmpvauh",
  "tb1pxmyekl2qzn7prlnh9z4ne2ftxnz7ysv5x3uv5taywrkxnh7mgk0s7963f3",
  "tb1plf730s57h3azuvpxuj9d3lcu99lvgpn0tnt4x2y8f8slw0h54vus0p556h",
  "tb1panddx4sq5hzu0am0gjrnmefjcqh3mvqx72pqhw9hcca3sry2qjgsd9vsat",
  "tb1pxhmcyrdad4au3zpu4c0pchmwl8srvqphvnun9vxs7qwv4k8ezh8s02xmcd",
  "tb1pzy47f8u5pmufeu774aupf0slhyaemrm8kd930d9zsyfd277ptxuqvezn4f",
  "tb1pxhmcyrdad4au3zpu4c0pchmwl8srvqphvnun9vxs7qwv4k8ezh8s02xmcd",
  "tb1pmumjlzqw6madknyfhj2ws05vkadj8084hdu5mep2cqsg7y4fm80q8pjnh5",
  "tb1pzy47f8u5pmufeu774aupf0slhyaemrm8kd930d9zsyfd277ptxuqvezn4f",
  "tb1p4fchpuhxelq2z2kasuy0fl5h6ght4g4djm7uens5sngnucmmpf8q0uxs0l",
  "tb1p6ql7jnamat596tg8jmhw6g02acjcg2g2aej5evm32nvqd33gwdms09ughe",
  "tb1p482tnjnleuz2ghezh8zjzjlssukaflhzvdgq8d400nyc366mqzqsh0ffjv",
  "tb1pzy47f8u5pmufeu774aupf0slhyaemrm8kd930d9zsyfd277ptxuqvezn4f",
  "tb1p40zkep5rg7w5xr7gy7hz0g88473pz6fc25pq6muums5n33px6l7qw7g9vg",
  "tb1pxp3x78svr0vhmavs4gccr60arhpk4yc3gm649ue8xz8uf9cseh8sngcz4l",
  "tb1phm2qs74asetal93s70l9dvfpk5vu24as4ad6t4zvj2wnqq7qqjvsj8280w",
  "tb1p0at52txlra43hwqdt7lqxjgd2k5jwa8vv6c3jqd2veu0ulwyrcts87x3se",
  "tb1pr0vth32l9zk4f0dzx4fmcjntamvpgdwxmyxfgnk8s905jpz4axlsxhcamw",
  "tb1p2j50s7ycayxplf9f0wr98dlkhz6jz9mfjvlvuvwqawgp04awkp4sf0krcg",
  "tb1pjf5trj7r7ulsh7nqyrknj8pu59nrsdq265e6fm9net2fjc9tgyqs5jzyhu",
  "tb1pfa5tygpfg534wde3xysw2fnytkummh4ghk73aw6m2x4h79nl3evqjzp838",
  "tb1pettp87pssh56mzz6nfvphz497785y3jfhtutus6xf982442ct4uq88g3wa",
  "tb1pancuegjppktamqult3mselkephllj5tfmptmepzue96v8xfv3elskjf8lk",
  "tb1p7j56lkqr9w6wvtds7fwaxu9yms2jrg3hh7vrwya2sytum49w9kwqpazupq",
  "tb1pdudvepk3yh6aa23gw7a0e4ed90lw5umc3tapwptezrluxrz4hxxqsrjar9",
  "tb1phfgn30nkjvr35374ac52sve4hm53kmylgqek5wyq59pcwhzhtzuqmvulzm",
  "tb1pjtnzq2fe834py0la6pxefmp3yzcjn0t6m6048dd2jw58jjha48vqmm6hjq",
  "tb1p9xkldu7fv75dxjc429ny7neazpg4prjgyx30jqev6sj0hewmlzusemq228",
  "tb1punrhqxq0n8qkn7v9ukjastcm2yxfudfnfv4qskjpznkemgv5x5aqucln3q",
  "tb1plqueyzn90xcz2pgfdckxrdkm7xfh4e6e5ta9dch5k9pwv2sm7vqqfcfwj5",
  "tb1pys0lj3kk5jqdjqdutuapkk25u622455c09lw20cqn837vfrlaq7s3f3cty",
  "tb1p7uzdau96qphll2umk052qw56jn7qvlgs6cg9rqanm7k9r3ekryts5kjlkh",
  "tb1past4yfzm5qf7fj0nywyg3rw0d5e0z7qc8yehdqlm37qyfpugxf6sjjjnzs",
  "tb1pzlfsdgcw6wvp434kjqphtsdnv7nffcgjuvqjtlyuq3jan3mt7h7q4hzvry",
  "tb1pls6rya8pcxryekyyl38lgpzgrppl3nh8t03tlhxvj6c4f70tllkqsj4nv7",
  "tb1pw8m9ne09gg4wjzzyrtrp699yafrce92ss8t427ggpn54sdtljyjs4r60yd",
  "tb1psszwaufv7rljz5q9ull039s6ll8qyx0mmecuejvzvzqlzcnvm2eqw3ft40",
  "tb1ptu8274y82wr8e0es5ehs6zs7824sjyeqn84apvtvdpzwwuedz9uqg0zud6",
  "tb1pqszx744y0p8k0tarkzslt2et0wf8ueq829ggaqtv72c4x8m55ngq6fmx4z",
  "tb1py3sksjyneaznjqhnhhzyqnznggnu4fgp0wclltnrkzd6e3z86gmsageesl",
  "tb1par3gpjdk4s8tqhre2dph49u7z69xsvsrlefvux3pqp9ufg6uungq93z2zm",
  "tb1panddx4sq5hzu0am0gjrnmefjcqh3mvqx72pqhw9hcca3sry2qjgsd9vsat",
  "tb1pv9duzevydh8n809cq8dy89djagwd50h28e3wj4u7cmcns9a9nuus6gpztq",
  "tb1p6ql7jnamat596tg8jmhw6g02acjcg2g2aej5evm32nvqd33gwdms09ughe",
  "tb1pwravu9zgkqc9ey8zynh5k5hapgmzcla5mx47fuqlmyuhhql5x24sevpp2d",
  "tb1pnvuc9ydtce6av696jlvt2hwk9vxl2jxv3c38v5fd45w4urdclrksycs8tm",
  "tb1pleahtruydqmlarz40rl7kjxdnlx2ysfl86z004aayf9acg6pervsycn0ar",
  "tb1pp9nk67gp538dt9rrm3urmzlllvtf8vz5gdwcgurpnt4v05jdnk2sxl5ev6",
  "tb1pcpsjdjlrw0g0ya66sqlrqy4qkxu44kwkvnpynnvj9n2q953h9uasq0t7zp",
  "tb1pd3gmn8se3uv3ky8ncndcvkyf8e2zrr47pljzluwza7s4y7hdt7vqh0dx4z",
  "tb1pfa5tygpfg534wde3xysw2fnytkummh4ghk73aw6m2x4h79nl3evqjzp838",
  "tb1p7j56lkqr9w6wvtds7fwaxu9yms2jrg3hh7vrwya2sytum49w9kwqpazupq",
  "tb1pdudvepk3yh6aa23gw7a0e4ed90lw5umc3tapwptezrluxrz4hxxqsrjar9",
  "tb1pjtnzq2fe834py0la6pxefmp3yzcjn0t6m6048dd2jw58jjha48vqmm6hjq",
  "tb1pdaat3mldnlkq6kanhtt382739fr30wp22xwj4p8hz2kmfxwrqucs6mpse2",
  "tb1pqq8p7g6x5teqjqchhc58sygpqt9e720zfldwlsjjqjg8mp8usuqq4sgmc3",
  "tb1pt2nrauam4nsk0xj2ce0e98yqx605dny697d5h6nrdm3fxpgfqdxsakrf2r",
  "tb1pxs090ztqsaq2uttyvuhw3d5y9u4qmz7uyc4eyqqrccn7xkfuwdts2frj65",
  "tb1pzgmrr92zzwy5mfkvs37vp7vqgm0khqdv604ncjzplnrgalav32ss6pyr8m",
  "tb1prjvrvh62d3w4t667w9ey4ksw5s7vr6czx3529l7pqxhmazklkm4q8x9uwk",
  "tb1pek7zdp9868etua0jjwes2w9x70msrvty9stsy5wh6qqdgs3t9a2qd3s4xd",
  "tb1p5xemceknu9xj046qc3emel8ygkfw4tjt0zm0z6gphd3n6v529tuq55wx99",
  "tb1pzq7d2527t6tj2yhq76ja0skp9y6j467wvku2ng0r9ydewxq79dfqjv4rfs",
  "tb1pltmla3s2kskpu4zv0v6udu40q797rz7w5eu23kcuezg348wwqeyqjrdede",
  "tb1pgxpalsq6v4sz632a7dj9hu0jcxnmnc2j5tyrjq9j75k964gsc0esltz4fg",
  "tb1pysdujgqxt5w9xa4x5gh2jcluxflzx6ywkvaynv67eudvzmxzcyxsapmllt",
  "tb1p2rug68du9jgltx9gdku83j98e400zf34ru24z04r0yx9me5t883qyk7yqr",
];
export const inscriptionIdList = [
  "0145b575e030e61074a59e6a08bcfd0af3a4339182bbe0b2a7b1e9a4edff0700i0",
  "48b9f0cdc72d1116ddadf75c31da5e25722dbbdda6cb504c5201378f5c041300i0",
  "49d61c8965e02ebc293a270960da924fda6a48453cbb5902ea045567f6b02700i0",
  "4d3f869f7cd0d73ed5b5062fd91a92ec7b7f47c6ec2bc36b77eb23fe6a972d00i0",
  "288260675cd9659780e0c082ddb57132a0e83d22af939bea326337206a165300i0",
  "eaeda7c4578efeb0409457aed84fc3487fb05302af9967e53ff5b8853c985d00i0",
  "8fc96346c3496f79655e85d9ae9dfc52e0f939d3a1e4366cab2e081393c06400i0",
  "3fa79bad011e4490dbb708859d428a0c61a9a0167ae188ff0ce2b6f0b73b6f00i0",
  "e62af8cef9cb53dee7f6e1dc41a8a84570968e37264e3b8ad2c9da5fb65bb100i0",
  "4616ef9fccf1ef331041c65cb80a537c3e31c141b9d7d725340d487a72ecc800i0",
  "25ae35e8396dad40f9a06a5226892b9cfbee5f27a416d352a3c59f7e9f67ce00i0",
  "405027e7c8ae7a86925fcfe863e3f8826156bc715c5fd9eeaa85a4096f975801i0",
  "8a663806972dd7019e1bca257f5fa5d5930f3be8477006bd2fabd72844948401i0",
  "ef360f5d40b9abf11618280cccb3398e52fce8b73953af1cd88f00557c70a701i0",
  "0aef02214c7ae1b43539de5aabfef88f5f82d21e968ad1abb624de741693dc01i0",
  "f5fbc7413677503eabe62611144bb12a8ec9e476871a18110e1250299c711602i0",
  "9afffcdfebd0df486cbb8b0b8e86aa5f153b7df34cc8c943998179a61dee1702i0",
  "d38985bf7ed2a9f7be984a93da5bee22d09b72e62bd8478c85988140a6bea002i0",
  "d51f26387d97d8d55544a084841939c01672f14d4cf7c678018a254feb518b03i0",
  "b44cc4720072ea8a6dd8837e9237bedb397b07c63b39d95759bcbae5065fb803i0",
  "5044c5236e69928df709f76c9c61bdd5f52d4c23afa88156c7e96bfba96af803i0",
  "53e3c0b6f5589abcf05dfe35b4e0023933787da01f223c4d17d801e9e3e80d04i0",
  "54517e970598406d2b487bd620ea952b99785ecbd4cf5865e5db95925c5b1604i0",
  "b0b95130f5659b6c8f4e87ff9c426295a6b5df285b3c516f820c3049b29a5f04i0",
  "414bbc234994f0b4e8b3b826ef141f240be44dce5ae6b09801925dd48572b104i0",
  "b220b7f974c1719a71108287170012e0428b2c8a6baeb6eb6876b263ddc81205i0",
  "e7a451061b9043584d6d1c278bcb8b2c1ea7bd116016508619a4e564029d3d05i0",
  "638955980e77a2b6c38518538be06a51ac8ffa9884319ef1d1e1ef26e3824a05i0",
  "fdc4303422eca25b12ed69d6832c14a599e9af090071ae976c7a5833a427a206i0",
  "23c34e59842171475cc2b7d0ba6a9b35f4712c59bb7597f278849fd6ec2daf06i0",
  "f5cef7960f1c2d515a7b2044ee33f32b2f41ced5605408e6000b2cec5be8f706i0",
  "f171d7e00135e23e1bd820a75bf37f44ff2115fdb55e2137210d0a4e4d6e4107i0",
  "9c80bf348585c475e4bd02af352f704c53d122024a53273c0586a36e8f0ed607i0",
  "dfe2a4606b3f10d6b620441e8db7cab3eb0541a9a051cb852f7a2e7b3356e607i0",
  "731596d21190c22ae04170b8fdbcc109a41922535aa0d2047c1a15cac4a71208i0",
  "7b82ca665437b192726db547be440641d72f293c10b18705f861015c8f692608i0",
  "a7198a7fa4e21f42f5fec9f4f137ef7f0e99d1d83948ee75aa0c6e214d8b3e08i0",
  "f86f6c8132353cb228593791622f39c64041aef5b9a0568d3328fd794898bc08i0",
  "eccda674954814a4b2eece2821b37f82e32217cdf0ebd80befdbd28f1f4a6009i0",
  "c437ec5b4a8c77e8c25ff84b69039baea1a959deccf5dcec5c453931aa4ba909i0",
  "bf80cfeb7bd90375f8534c18653d6db6fcca96d5dff7be9031b72e31c2e5ca09i0",
  "e752e4eb2eccbd718b04733cb97fd21eb1dce9b874a01d9a215a256f8fa1fc09i0",
  "05bb239337c851cd8b341ef37203245663745e6d74579d5971dbf6490cd32e0ai0",
  "5bb86eac9e74833dda9ab7403a67e43b3cf2f0b68177e5f521533f6d058d720ai0",
  "daa35b89297541f6a147fb854d45e224c29003d2eedae43a4fd3dbfb5458ff0ai0",
  "ccce60747a70bcfd1f2f28448eb1582dc080abf243e15fa3961af447d8d92c0bi0",
  "34285a6f67b859c6b36efcd267b388cf0a66e62fefb0487af100592cde0b880bi0",
  "b0e93949ed71a1d3f8cee8d4e979da71366a45012b0f9a67e8d4acc6c2ddc70bi0",
  "7f56f1d8ba862a38c6f5c65e9f7a28b4fe38d287a2e81203d217e9962003100ci0",
  "52c489c2ae799fa7901f4090a12bd49fe50fd55af74d6b7a2f8685791eb1440ci0",
  "c5ed1d08b06a885e32899264bd5cf8ea90e7f4fc103e938b5622187b55e85a0ci0",
  "d9daf634bb5a5ea3cd0f9b0a29a26a740300aa4268523bbe081ae17c90125e0ci0",
  "6f8b93c4eece4662180db7f9e0b078023a1957282cae1388752ab0b39ca3a60ci0",
  "742d3bf68907855659efc7ed1f210f00daea349ed1159cb6a7856f54f2b3ce0ci0",
  "aa8712324f8f964372ef9a30b94e303c8f782a89d4c53a367cffda94ff811a0di0",
  "aa9195fd06bf331941b26ef9bf3b074b4b5f948bd7241145f06210a5a8e81b0di0",
  "45c6cf56de3b5e2558adbff895322fb38bb2b947b6b1590fcbf87e4397b2b30di0",
  "e3d931db293453efeeff4cd6d911c8888b33101d4f37f1485b98969126e4ed0di0",
  "12732770d28c9b37351938c9bcd4bf832dfb1c5d0ebbf601fbdc215ceafa1b0ei0",
  "5415e9d22b58b78428055d6046e5236641bfc7de1b884f7030e558273b2b7d0ei0",
  "d53a0059ccf5a04c6674b6d93502bf33f8204b867ddc2c43d772e04bf5ac7e0ei0",
  "039da46eb9ab9f6a36eb8f0f8ae9a1fe8e6ad8d7bd110ebe56565599fb1cbe0ei0",
  "9a6b7243597b9bcf6d5f211930df716e6ff142f1a62e2b7ba9fcb97a3b2c3b0fi0",
  "3e54a97f46f4a33683a51b033b8224d702bb84215d0be1274d17fc686b54790fi0",
  "504d40e0572a01193a88aacfd258abd64f9be2f164ad5bb72ab443763575890fi0",
  "c9bcea4f8e6b770a26cba06168a99c451c60d4a10e8a00fca384ed0dfbb8c90fi0",
  "a931f86be74872f7e3f15fc6ddd3e43186d2a88d5069bd076fcf7353a4415910i0",
  "b9150c4e90a23bab5c747fb0de08e49f64d20d54d306b2c97291510ce90b6b10i0",
  "c26faeb09614b4cdfd400c44d04db1faf93cbc42e10d379054d55a4dbcb29210i0",
  "179e1fbbc6957544709de2e7965312d467cc1944345d11efca47cac57ba6d910i0",
  "8750d75d6efb8fb303e0f5154d0e90762560b8cf69e27e0f52324a2c93321811i0",
  "371479ac0b3a69e7f3c3b03c045f2760d8da07938bc96466f6256ec8839e2411i0",
  "ebbd544c1a7f0d2670274e302601b054fc142145d623d999064d55a7079e3711i0",
  "9dd6dd78f8370167b668ab13dfca0b8e3b28b065ab97f353a7c638745f006611i0",
  "749e0df06a6c7626e964c3d332655a4af46066c9a2b39bd9e3526c236e187e11i0",
  "52d7a2a5c8046681e4bf622752aa280d75ab7a1ba69a2d4fa7e98c72b4caed11i0",
  "1dff6da4e5f7aab88b4d09b0832664b4ffbfe1e080b2993f8a5a15e8912d5d12i0",
  "c38d2e2af0374f3a5c6b351a64c69d38c4c35a994368c50635267d87b09fb812i0",
  "b4d796071e95fd62fe5649069c8b8ae7907ea4d6379b9427ba7997ddc62fbd12i0",
  "f38dd84f4ceb56b4db06fcd2bdfed54b220d8955d26024c4ca4e1bbb9a0c2613i0",
  "3c338a791dd789ed5fd605e2a0b025663b702f78221e3581ef5c1781da0f6913i0",
  "86b3958a5e4ad9f7b5715564e8cb5819c2b3ecb6f74b558f051c27b430967c13i0",
  "f3a060bee95927f4f442f811c2243011f36b7cb3392fdefd8fa776e824078a13i0",
  "8450203df5309db18dc6184b0e4befb6f92a5471c7bfb0d3ccc0eafb22dae213i0",
  "d796fd91923714804f3762650bb83719c2f53c3417604f71b8df8c4c8fd7fe13i0",
  "5ce362ad4919e8608eee5c08c600574a86bd677b00c4866a114e694913d05014i0",
  "6c5e24c2bc3241a7eb40fd64bd3433b59968785fab1343152e479456daacdf14i0",
  "aed98016d45e6ce9d260685ab1cbcb3fa5803c72294ea877329e0620a63ce114i0",
  "bc73e10878b2e8613531e65867fbbc5c05a51fa50410745320486edfb72c5b15i0",
  "87e4cc3be70fce88b5e7a21807494f418dfb823243d38783ebb1a6763ba88915i0",
  "36881a0c229f48549359ebe77cf8c19ddcce72cfd69a9dfaad6f3011c2a39915i0",
  "f8fbfabdb412efb0d5bddb1b728d680c6ccdbf0ab9dd9b1b98beee750e68c715i0",
  "dabb760a324538c421ca39348f350c42d17f7757a505cef7d0ed98c61eb7e015i0",
  "16a8c9504db92f5caeb9f08bcd84542f67685825fb5df86220312e4f0f13ee15i0",
  "b256957bad27e7e914054f2be3e3cf6c0e8fa452d9ca960fe47a58f602ba0216i0",
  "80b6fc78e52b3c93e4d0bf4c355c5915886910d6582795a120aeb86497b71016i0",
  "47081b6c8b09486db4aec86489f9c184baff06121675337af1940cd715c72b16i0",
  "5126dafbccb1c86b4791aa8f8e161fdeecfd86fb6abc41b692507107d11f7816i0",
  "3c0ce82833bc1ad310e9500451facdfa6ab11593b82e20d71c0629ed8d66a816i0",
  "a121fe196bc92723c51a1f01e5ef23b467dbb16f614a3068de269e0eaa944017i0",
  "a15afe5e58e151c64574edee52abb088f4edf955ac282b212309f4c5b5d95717i0",
];

export const SATURN_KEY = process.env.SATURN_KEY;
export const UNISAT_KEY = process.env.UNISAT_KEY;

export const SATURN_URL = "https://indexer-dev.saturnbtc.io";

export const POOL_ID =
  "e8b4908464fc5bef0bfe70146666a0dcda4a9e59b84dd60e1f14d5aca53bdae7";

export const RUNE_TOKEN_NAME_1 = "THISISFIRSTRUNE";
export const RUNE_TOKEN_NAME_2 = "sat";
export const SATURN_CONNECT_URL = "https://api-dev.saturnbtc.io";

export enum WalletTypes {
  UNISAT = 0,
  XVERSE = 1,
}

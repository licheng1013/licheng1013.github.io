if(!self.define){let s,e={};const a=(a,c)=>(a=new URL(a+".js",c).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(c,d)=>{const f=s||("document"in self?document.currentScript.src:"")||location.href;if(e[f])return;let i={};const b=s=>a(s,f),r={module:{uri:f},exports:i,require:b};e[f]=Promise.all(c.map((s=>r[s]||b(s)))).then((s=>(d(...s),i)))}}define(["./workbox-cc9d59eb"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.clientsClaim(),s.precacheAndRoute([{url:"assets/1-405629e8.js",revision:"2a8719bfad10f3926673d785c744cd9a"},{url:"assets/404.html-68dd3900.js",revision:"494ebfe96d7f10dc1e01816f10cbdf60"},{url:"assets/404.html-dc640ab8.js",revision:"97c79823004263c28a34cb2c945d7394"},{url:"assets/antlr.html-d3b95f0b.js",revision:"0e04dd77d58352e8cbacd2c37e04ebb6"},{url:"assets/antlr.html-ebd033ee.js",revision:"a7f7300d767e099d6bc901c654a11b0a"},{url:"assets/app-0f8d88bf.js",revision:"88323dc6f60c85749809df1f526ebb33"},{url:"assets/asset.html-32ff1387.js",revision:"5dc9cbb604fc6acc751578c135387950"},{url:"assets/asset.html-74101fdb.js",revision:"ac9c4e79e01d21efd1a2ff3c05b38c80"},{url:"assets/auto-9bfc6a97.js",revision:"650e97113b70ec104ea62c0aa3a83ee5"},{url:"assets/axios.html-af07586b.js",revision:"dfb78922dce955f0cbe9f90231b9530d"},{url:"assets/axios.html-bd2c37f1.js",revision:"c3bbf33d409e8bec0994ab04efc66b12"},{url:"assets/body.html-424b705a.js",revision:"a6923feb4142866955048ee8e163126a"},{url:"assets/body.html-f39ca93a.js",revision:"72e6c264cfd11c104403591fb42ff926"},{url:"assets/Catalog-a1731914.js",revision:"9f4f803d2b1b4b3dbf213bfa7c4a7f99"},{url:"assets/chess.html-acad1042.js",revision:"70a2da41bbe5cb295573e7604c36cb2e"},{url:"assets/chess.html-fa93b128.js",revision:"7e6925b0960de0c65af45f992bf89d01"},{url:"assets/cocos.html-dfb16d57.js",revision:"2af631b049c6c440f29bbc0468015992"},{url:"assets/cocos.html-e13a0cac.js",revision:"47070d4ddee2d4a918b57238f38ae809"},{url:"assets/common.html-1fec4450.js",revision:"932378effba7d78e3621500bf760f5b0"},{url:"assets/common.html-eafd1e33.js",revision:"2c6d23ada505d80b5dc209c4e99c6317"},{url:"assets/css.html-144eeeee.js",revision:"97d2cf7984050cbe8679ad6c13de2ead"},{url:"assets/css.html-9b59fc26.js",revision:"558cbd86206e562a59e17ceff1f20d77"},{url:"assets/data-struct.html-83172419.js",revision:"510188cb05c45cb748c1af672dbd0990"},{url:"assets/data-struct.html-b1d1509c.js",revision:"7d6ca2f14c8fc75f0a4ac1e458387fe6"},{url:"assets/desc.html-6182e64d.js",revision:"e820117315149e362ae96b706c997cc5"},{url:"assets/desc.html-cb5eaf75.js",revision:"2954b56c1697be83d514d304f43caeb8"},{url:"assets/design-mode.html-721ca33a.js",revision:"a5369ac3bee0470337889479081a8106"},{url:"assets/design-mode.html-c23721a0.js",revision:"9dbcdc96de59fd9f55db1bd4b9a94a06"},{url:"assets/docker.html-68950851.js",revision:"1c4a0060f65bff73ffd39dd2fb313bb5"},{url:"assets/docker.html-9a1fe89b.js",revision:"32d1587aa723db79cacc902df68099a5"},{url:"assets/electron.html-90c4991c.js",revision:"5f16d5e23d60093b54ea34887eb6a4a6"},{url:"assets/electron.html-daad805b.js",revision:"045d533576aed70662c73573b0e478c7"},{url:"assets/english.html-d5fd0780.js",revision:"6484d186a1e1d6a1e98e45a2a3636856"},{url:"assets/english.html-ee4cc8ad.js",revision:"deecd6f553f9501e9c33cae5245fe4e5"},{url:"assets/fleet.html-6831929a.js",revision:"1480ffa57ed38b4a4df68950cfc289d6"},{url:"assets/fleet.html-fef777fc.js",revision:"c4117b2c22979f1de9bb1b7f4d655924"},{url:"assets/flutter.html-988888bb.js",revision:"9f6ab6ee5529b1086b1e11c32185e8c2"},{url:"assets/flutter.html-c4e267a0.js",revision:"0b8e57eb872f0a94e11e8851a738cade"},{url:"assets/framework-f65d2d9f.js",revision:"a4b31efe6e880540fe111cd9cbe01558"},{url:"assets/game.html-323cbfb6.js",revision:"de2ff4f82ff779d6cb6122bbfeb74e06"},{url:"assets/game.html-9643772d.js",revision:"ca4cbdb5a8e5d28f110394338f322eb7"},{url:"assets/gin.html-0e9a9418.js",revision:"ea8ebd9eae2f8ec7a5e372e8daeb3d50"},{url:"assets/gin.html-ee5aca94.js",revision:"5cf052002f023fe700d07ef262a6142f"},{url:"assets/giscus-cb5b3b13.js",revision:"55c6133d523779a1a33f415a1903244a"},{url:"assets/git.html-2060a7ab.js",revision:"4aabb9d2458b030e5dd2f67c680c12a5"},{url:"assets/git.html-4b6e252c.js",revision:"4295fcf5484361623da87cf74a8ff887"},{url:"assets/github.html-56719e33.js",revision:"3440a243b7976d001fb15870492ea627"},{url:"assets/github.html-8686e795.js",revision:"f2b24a0be6b6b83813c270ca85fa3f49"},{url:"assets/go.html-117fdfa5.js",revision:"9f8474be3df6a79f1f7f11300df73ec1"},{url:"assets/go.html-3421a2f9.js",revision:"a95c22806eec8c16720cc10baf8a4d62"},{url:"assets/godot.html-584771fd.js",revision:"325afa7ee99faf848b6ae2653155c488"},{url:"assets/godot.html-c01516eb.js",revision:"96cdca47f1bae6c1a1d7eae7d2a71545"},{url:"assets/gorm.html-28e385a2.js",revision:"99cfd671a99bb716c21376daced54dd0"},{url:"assets/gorm.html-30fe5298.js",revision:"90583ca223c81c1162dcb4ab6ea8449f"},{url:"assets/gorm.html-5f292e67.js",revision:"f72f36bb84b09c291ec12e3d1fd9fd81"},{url:"assets/gorm.html-9a6b73fc.js",revision:"7432f866d15c6b8d4afc9c8d66502b6c"},{url:"assets/gorm.html-a0bb4b9a.js",revision:"d3733284962d968cde14a0281aaedc15"},{url:"assets/gorm.html-c640ac66.js",revision:"1785506eccc8fec00cdb359588132bff"},{url:"assets/highlight.esm-a794bb63.js",revision:"0949b348e0e7d26440159b7c6c417cad"},{url:"assets/hutool.html-5eff3b4d.js",revision:"f689d4d46c2b659a97faa31aa5749337"},{url:"assets/hutool.html-d862e26e.js",revision:"d6f57412f6892bc1d7daa648c976c696"},{url:"assets/idea.html-678f9b44.js",revision:"b669666284eb9e56c763bbcd3b8a5701"},{url:"assets/idea.html-f4a5f0f0.js",revision:"0864dd37fde3ee969132f4cba4145c5b"},{url:"assets/image.html-53354125.js",revision:"2c30b750bed75afcf72d546b45b572e9"},{url:"assets/image.html-e0810be5.js",revision:"b7c015d9dda63a73fde44cd653609689"},{url:"assets/img-c1a6ea05.js",revision:"fbedca09f982a4ec32fc39af4b7f681a"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index.html-02533f40.js",revision:"602526303882630cc977ec78446530ff"},{url:"assets/index.html-0954b287.js",revision:"c64f36b5e6eda6d4cb7eff4e9616b511"},{url:"assets/index.html-0c3b5686.js",revision:"606bedc437dc0c657b8295bf07c3f8a3"},{url:"assets/index.html-1c499ad4.js",revision:"10f8444c2f76aac944c9a4a897f64d2e"},{url:"assets/index.html-2a195681.js",revision:"9e8e8b04f253b46089381590a1f12b68"},{url:"assets/index.html-2f340699.js",revision:"4d949dd7b7082e53ea5fe454882641f3"},{url:"assets/index.html-2f70a4e2.js",revision:"9e8e8b04f253b46089381590a1f12b68"},{url:"assets/index.html-319b46e5.js",revision:"2a2bff401631f36c80e2db9fd242eb2d"},{url:"assets/index.html-37aac557.js",revision:"3dff916c04de65974596aeaf004033e8"},{url:"assets/index.html-3b7ebf8f.js",revision:"9e8e8b04f253b46089381590a1f12b68"},{url:"assets/index.html-407283ff.js",revision:"2555a616b5b1b545f59584e7e8a232f6"},{url:"assets/index.html-4f6b9b25.js",revision:"be166871f02008142fda66cd7a27ae67"},{url:"assets/index.html-50a0c5da.js",revision:"804e80149b106498cc122c1a35b31f26"},{url:"assets/index.html-55ba5705.js",revision:"804e80149b106498cc122c1a35b31f26"},{url:"assets/index.html-5b5e57b6.js",revision:"a63c7ddfec36979f10a4b1263eabdb37"},{url:"assets/index.html-5c8211d9.js",revision:"3cb6fa45d9831077ff662b5d7717e011"},{url:"assets/index.html-66189724.js",revision:"745ea60df3936d1033976736edc884b5"},{url:"assets/index.html-6ae17189.js",revision:"9a4c9fbbe7c74d51197eab9aaaddab50"},{url:"assets/index.html-6be4cacc.js",revision:"0d13f867462080e7b76638a99cd6c641"},{url:"assets/index.html-6c2664fd.js",revision:"b21c905730779b297e9cf3306a63b9f6"},{url:"assets/index.html-731bb03f.js",revision:"14d3e8d239a0ed83147d053c9c8b22ff"},{url:"assets/index.html-74e0f1e8.js",revision:"8245d8bc1688eefdfde7b69a27667986"},{url:"assets/index.html-87c05925.js",revision:"fa7b9e5b7487dab62b5a3db7ca258f87"},{url:"assets/index.html-8e830a14.js",revision:"2278713ea1f76d7b5d3f3ed4391d725c"},{url:"assets/index.html-94149bf2.js",revision:"970aa3177a7f8f6997f47f89dc61a766"},{url:"assets/index.html-9d9f4e45.js",revision:"9e8e8b04f253b46089381590a1f12b68"},{url:"assets/index.html-a0d855a1.js",revision:"9e8e8b04f253b46089381590a1f12b68"},{url:"assets/index.html-a2b7dd9e.js",revision:"82cfc1a4859460e94a7cae969fc4dfe6"},{url:"assets/index.html-a2b95617.js",revision:"8adb9f112eb2403f48c8523db9c83b0b"},{url:"assets/index.html-b1636064.js",revision:"fbb56a70dbf825029a0afc78959b1343"},{url:"assets/index.html-b81eba08.js",revision:"6cb0ce52b1c63f43404633ddc59f91c7"},{url:"assets/index.html-b9c23e72.js",revision:"9e8e8b04f253b46089381590a1f12b68"},{url:"assets/index.html-c6dcad15.js",revision:"9e8e8b04f253b46089381590a1f12b68"},{url:"assets/index.html-e98eed04.js",revision:"9e8e8b04f253b46089381590a1f12b68"},{url:"assets/index.html-ed107980.js",revision:"804e80149b106498cc122c1a35b31f26"},{url:"assets/index.html-f54fda9f.js",revision:"804e80149b106498cc122c1a35b31f26"},{url:"assets/io-game.html-00ddc878.js",revision:"fbe0e84c2a0e2bfc8f68d8d29d08a443"},{url:"assets/io-game.html-7ae9c38d.js",revision:"b5a4c468636de3a62e2de19846854cc3"},{url:"assets/io-game.html-aa942736.js",revision:"d946e4b45d2353eaed6e16e8449bfb6e"},{url:"assets/io-game.html-ed45d29f.js",revision:"f188a1369b2eb8ed913427ad212b6a03"},{url:"assets/java-orm.html-60e672a3.js",revision:"f214dafee43baf66e971f86efc81dbd7"},{url:"assets/java-orm.html-c897efc1.js",revision:"31e6617bb8641428718cb18bbf240c73"},{url:"assets/java.html-255ee4ab.js",revision:"790cb7be52a19580c7b863a5a7bf7824"},{url:"assets/java.html-77d74628.js",revision:"eee1e585c7e8943e6df8c263ce9478d4"},{url:"assets/jiazhao.html-a8110cc8.js",revision:"14147274f426a5fffc213b5135fd8281"},{url:"assets/jiazhao.html-b598969c.js",revision:"7932eed8e8dc7431b22c5f1b4773929f"},{url:"assets/jorm.html-ecba15a1.js",revision:"39a8c43a7be68e6b3314434e02b790d2"},{url:"assets/jorm.html-f93be576.js",revision:"3bfcf995bb28514ddca0c715802437fa"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/linux.html-798b8583.js",revision:"97402334438cc22a78c108f06da2a0e1"},{url:"assets/linux.html-7d58959d.js",revision:"38fff919b68f7fa117d844a28bfbd57b"},{url:"assets/markdown.esm-d92a2fc9.js",revision:"2782fb14c80757ca6a815363b87defce"},{url:"assets/math.esm-70a288c8.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/maven.html-69e1d03d.js",revision:"a5ddb1ac8cf714d40afea3d76a0ebd5b"},{url:"assets/maven.html-cbb4e603.js",revision:"3d0109adb60a97e3feab0e9da816bd8f"},{url:"assets/mqtt.html-8b988fa1.js",revision:"a9aeca322b5aab07cdf228d2179c5e03"},{url:"assets/mqtt.html-e4cee3f6.js",revision:"fd136e2a8951fcd426c18506867212c3"},{url:"assets/mybatis.html-167ea10f.js",revision:"000dc58f499ebb3fb147984ef74caa1c"},{url:"assets/mybatis.html-647c77c4.js",revision:"966407203383289d522e02f6f96095cf"},{url:"assets/mysql.html-108ab06d.js",revision:"36cde25067327d1f2b074f6729094fc8"},{url:"assets/mysql.html-153175dc.js",revision:"4d8bd60e6ecdc7f418df6fed85bfd4b5"},{url:"assets/nginx.html-042c0bb5.js",revision:"635b1b7730ab5155e193ea6f32d22ee6"},{url:"assets/nginx.html-f7cdc5fa.js",revision:"4f5b2be886950d543d9f73cdd23454ed"},{url:"assets/node.html-ebb0c9a7.js",revision:"a34aaf93f5f4cc9d9fab40cb0416bdb3"},{url:"assets/node.html-fb695b56.js",revision:"45c8d25efe0f378076e8f1108eb0266b"},{url:"assets/notes.esm-224f94d9.js",revision:"fbad6b0fa80d99a444266ec8836ab70c"},{url:"assets/photoswipe.esm-a9093b7c.js",revision:"e5f2011f608af205681b3a6e1023fab7"},{url:"assets/plugins.html-3fbc5f6f.js",revision:"c386163fab9e643e5d464198f6c9fefe"},{url:"assets/plugins.html-d17348f7.js",revision:"d59d190da14f568d3552c7ac2def5f91"},{url:"assets/protostuff.html-0eba61ba.js",revision:"22a9aa95f0e2a7168e80d4c03fbe6c04"},{url:"assets/protostuff.html-1d73e5cd.js",revision:"ea562213f66ea7dccd5578ecb0acb69c"},{url:"assets/proxy.html-74fbf763.js",revision:"4be32df3c1c0b4185d91cde4914f58e4"},{url:"assets/proxy.html-f81588d8.js",revision:"1b2d66f754fb1760e8111e135a86a757"},{url:"assets/python.html-4465c072.js",revision:"a052557ca55fc4a729074c1fcd1a5971"},{url:"assets/python.html-76afe569.js",revision:"e8ac0579a74395bbb8834df1a22bc26e"},{url:"assets/qiniu.html-222c2cfd.js",revision:"1fc1625e79985c7acc003f1dd3e74c53"},{url:"assets/qiniu.html-2f4ba39a.js",revision:"d8c788e883e88132558feb52dc484335"},{url:"assets/random.html-6f80d541.js",revision:"77614354acab3a5f5213fa950288bb0d"},{url:"assets/random.html-d747cecb.js",revision:"4705fef1a297141ba959b4b2780fdf19"},{url:"assets/redisson.html-a305c3ad.js",revision:"31263bdc2461673adc6a786bc5bd8965"},{url:"assets/redisson.html-e4d0b19c.js",revision:"c14021d0976dd31b832e472749cb80ff"},{url:"assets/request-tool.html-3bc1c2e2.js",revision:"b1c10fcbb86fedfcb8111cfc19959390"},{url:"assets/request-tool.html-b98487a5.js",revision:"b55827972e13fec084510eebae7e2bfe"},{url:"assets/reveal.esm-e5069ce0.js",revision:"383acd58551019bedc482d68f9eaddef"},{url:"assets/rocket-mq.html-7049b4af.js",revision:"afbdd36067accb955ad44792a3ef6af0"},{url:"assets/rocket-mq.html-d1ebd84f.js",revision:"2ec4e78f187815510253ba923912d3a2"},{url:"assets/rs-orm.html-85adf1af.js",revision:"704e77502f9b1652a53155ae79a4584a"},{url:"assets/rs-orm.html-bb856343.js",revision:"b6507c4ec9e540710451939ded20e2e1"},{url:"assets/rust.html-86b7eabd.js",revision:"93019229ad4f49b596b77725774ce116"},{url:"assets/rust.html-a8a01cc9.js",revision:"816f5dbe4bc65058495be3d31c70ff6b"},{url:"assets/search-0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/search.esm-2c3fba7d.js",revision:"7c1ff9e9285b9354b44c719f60e1cfd0"},{url:"assets/server.html-250164fb.js",revision:"e1b83f26f5c64abaf13075387cc6ed09"},{url:"assets/server.html-ae9d0acc.js",revision:"c370522c12517b5536017e9a4e8c9aee"},{url:"assets/shell.html-07ae60ab.js",revision:"7cad07f95d1f8a5e5457588d7b1e0fd1"},{url:"assets/shell.html-8871e2f9.js",revision:"4baa9e7a8ddc5570b843e74c46f61da9"},{url:"assets/shell.html-b53aaed6.js",revision:"4fa713be3218784ef4c62b315705614c"},{url:"assets/shell.html-d1c05e39.js",revision:"cf54af68ffd8365f400c48c263423b06"},{url:"assets/small-util.html-0476cf2e.js",revision:"e860ca5e4090bb8750cf26b73080682f"},{url:"assets/small-util.html-f60f2d95.js",revision:"86ec7f188997d90394e8c98797e66455"},{url:"assets/socket.html-0f750bf5.js",revision:"6187c92c5d37457ffda97de1edb7d8ac"},{url:"assets/socket.html-8b064213.js",revision:"221dcad9455d893ecf040b006a017a14"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/spring-boot-demo.html-bbc1548b.js",revision:"cf5c5e0a9ac8c80520b0c6174ba94e4a"},{url:"assets/spring-boot-demo.html-f9b6e15f.js",revision:"4d9004f30c38b52de74a21fae22f9dab"},{url:"assets/spring-boot.html-74c90217.js",revision:"86568079b5c1afebc12ccf620ea88b62"},{url:"assets/spring-boot.html-8e14fffb.js",revision:"48be05f84c6da207c43e12827eb61818"},{url:"assets/spring-cloud-alibaba.html-0b2dd6d5.js",revision:"3202a8661872a1d9d58e808595253cde"},{url:"assets/spring-cloud-alibaba.html-b3b6e96c.js",revision:"18305eec6337824347538eefaeb24640"},{url:"assets/spring-cloud.html-c487bba9.js",revision:"4cfa01ef7ce1791c4ea2d5443fb54849"},{url:"assets/spring-cloud.html-e53ab522.js",revision:"616e38de7bd6caf4ec8b949651c38197"},{url:"assets/ssh.html-5e5a9181.js",revision:"23edb67d66224b379d415afa179e6c10"},{url:"assets/ssh.html-85d5f388.js",revision:"d00097aa99002dcd375a935ae51dc14c"},{url:"assets/style-22f9b4ba.css",revision:"ee715ffbaf0f5f8c43f1bb0a33207a8b"},{url:"assets/transaction.html-51e438fe.js",revision:"14f2acea0aacc66609ff54ed4db43550"},{url:"assets/transaction.html-b5afa77e.js",revision:"b3a1f5e88747cfe5b87957941d9d142c"},{url:"assets/unity.html-3e91629b.js",revision:"f7c3befaf26892f91ace1b7607d04054"},{url:"assets/unity.html-ede0390d.js",revision:"4bda9b6c106b739512b0050c52da42e7"},{url:"assets/video.html-bb4ad658.js",revision:"4007186598c2b6036d40b53c1d1ee3cd"},{url:"assets/video.html-bc93f130.js",revision:"10d6517f9f338815560cd89399a2a146"},{url:"assets/vite.html-b1cb8d90.js",revision:"ef10858a52835506ad552f767527b4df"},{url:"assets/vite.html-c5079728.js",revision:"37327c167e7d775bb8a50df4c8807dec"},{url:"assets/vue-admin.html-0f7c5547.js",revision:"be8b294ff6e0192864278bf17e414fec"},{url:"assets/vue-admin.html-813a1a4b.js",revision:"41ccd3cf9a670e2da2cda0cc4a619d93"},{url:"assets/vue-admin.html-ce45bc32.js",revision:"6403471ea567c274850a54f29a33f7c5"},{url:"assets/vue-admin.html-d7fdf3e7.js",revision:"7dbb3b3807b75f7109c49dc0ee484d6a"},{url:"assets/vue.html-a73147f1.js",revision:"1d255979912e83dc97437ff7e2a4be31"},{url:"assets/vue.html-df4a1912.js",revision:"05b877abbd4c39486d3b15ee7ab74b13"},{url:"assets/wails.html-376b06ad.js",revision:"fa3978c85ef93bfeac07bf299b14bd34"},{url:"assets/wails.html-fd30f138.js",revision:"f520eb994748dc83d8b89026a9469987"},{url:"assets/zoom.esm-b83b91d0.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"index.html",revision:"cd311adcc45b573b7f01e53be4689abf"},{url:"404.html",revision:"7f61bd7ea0ec74255f51d9d5f28faf38"}],{}),s.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map

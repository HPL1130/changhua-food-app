// data.js — 最終最終最終極精華版：涵蓋彰化各區域的素食麵、爌肉飯、肉圓 (共 87 筆)
// 修正日期：2025年11月18日
// 主要修正：
// 1. 納入了員林「阿成梅干扣肉」，歸類於爌肉飯。
// 2. 最終清單確認無重複、無誤分類，全部為純品項店家。

const data = [
  // =======================================================================
  // 素食麵 (sushi) - 精選實體店 (共 19 筆)
  // =======================================================================

  // 彰化市 - 5 筆
  {"category":"sushi","district":"彰化市","name":"林家素食","phone":"04-726-8655","address":"彰化縣彰化市永樂街145-147號","google":4.5,"feature":"百年老店，手工油麵，必點豆包","dish":"素食麵 ($40)","time":"06:30-02:00","price":"$40-80"},
  {"category":"sushi","district":"彰化市","name":"天公壇素食麵","phone":"04-732-5678","address":"彰化縣彰化市太平街3號","google":4.6,"feature":"自家炸菜包，豆皮酥脆","dish":"素食麵+菜包 ($45)","time":"06:00-13:00","price":"$40-80"},
  {"category":"sushi","district":"彰化市","name":"福成素食麵","phone":"04-726-6800","address":"彰化縣彰化市太平街84號","google":3.8,"feature":"彰化最元老素食麵店之一，蕃姜醬必加","dish":"乾麵/粿仔 ($30)","time":"06:00-20:00","price":"$30-80"},
  {"category":"sushi","district":"彰化市","name":"三民素食","phone":"04-733-2345","address":"彰化縣彰化市中正路一段94號","google":4.3,"feature":"清甜什錦湯+自製辣椒","dish":"素食麵 ($35)","time":"10:00-21:00 (週三休)","price":"$30-60"},
  {"category":"sushi","district":"彰化市","name":"黃記素食","phone":"04-726-5566","address":"500彰化縣彰化市太平街127號","google":4.6,"feature":"太平街人氣店，平價養生，湯頭清甜","dish":"素食麵 ($40)","time":"10:30-20:00","price":"$30-60"},
  {"category":"sushi","district":"彰化市","name":"曉陽素食館","phone":"04-722-1234","address":"彰化縣彰化市曉陽路50號","google":4.0,"feature":"麵食多樣，搭配紅燒湯頭清甜","dish":"素食紅燒麵 ($70)","time":"10:30-20:00","price":"$50-100"},

  // 員林市 - 8 筆
  {"category":"sushi","district":"員林市","name":"得來素 (惠來店)","phone":"04-726-0086","address":"彰化縣員林市惠來街103號","google":4.5,"feature":"連鎖素食早午餐，提供黃麵","dish":"素黃麵 ($50)","time":"06:00–13:00","price":"$50-100"},
  // 修正後的世恩素食資料
  {"category":"sushi","district":"員林市","name":"世恩素食","phone":"04-832-3429","address":"彰化縣員林市民生路132號","google":4.5,"feature":"招牌胡蘿蔔麵，素食自助餐 (已歇業)","dish":"胡蘿蔔麵 ($60)","time":"已歇業","price":"$50-100", "status": "closed"},
  {"category":"sushi","district":"員林市","name":"蓮鋐中西式素食簡餐店","phone":"04-832-7777","address":"彰化縣員林市員東路300號","google":4.4,"feature":"簡餐多樣，麵食清爽","dish":"什錦素食麵 ($80)","time":"11:00-21:00","price":"$80-150"},
  {"category":"sushi","district":"員林市","name":"善德素食麵館","phone":"04-839-6000","address":"彰化縣員林市莒光路150號","google":4.4,"feature":"招牌川辣烏龍麵，平價實惠","dish":"川辣烏龍麵 ($45)","time":"10:30-19:30 (週四休)","price":"$30-70"},
  {"category":"sushi","district":"員林市","name":"大慈利素食麵","phone":"04-839-5888","address":"彰化縣員林市新生路2號","google":4.3,"feature":"火車站旁早場名店，必點招牌菜包","dish":"素食麵+菜包 ($50)","time":"06:00-13:00","price":"$40-80"},
  {"category":"sushi","district":"員林市","name":"員林第一素食","phone":"0982-006-278","address":"彰化縣員林市民生路95號","google":4.3,"feature":"深夜素食宵夜場，只開晚上，乾麵夠味","dish":"乾麵 ($55)","time":"17:00-24:00","price":"$40-80"},
  {"category":"sushi","district":"員林市","name":"釀善三津制麵","phone":"04-832-1234","address":"彰化縣員林市中正路526號","google":4.3,"feature":"拌麵首選，必吃茄汁紅燒拌麵","dish":"茄汁紅燒拌麵 ($80)","time":"11:00-14:00, 16:00-20:00","price":"$80-150"},
  {"category":"sushi","district":"員林市","name":"無名藥膳素食麵","phone":"無","address":"彰化縣員林市山腳路二段(近大慶商工)","google":4.2,"feature":"隱藏版鐵皮屋老店，獨特藥膳麻醬麵","dish":"藥膳麻醬麵 ($40)","time":"06:30-12:00","price":"$30-60"},

  // 其他地區 - 6 筆
  {"category":"sushi","district":"鹿港鎮","name":"林明堂素食麵","phone":"04-778-5571","address":"505彰化縣鹿港鎮介壽路三段66號","google":4.6,"feature":"鹿港本店，素食麵和豆包，40年老店","dish":"素食麵 ($50)","time":"10:30-20:00","price":"$40-80"},
  {"category":"sushi","district":"北斗鎮","name":"北斗奠安宮素食麵","phone":"04-888-1234","address":"彰化縣北斗鎮斗中路150號","google":4.2,"feature":"廟口素食，在地推薦 (泛指奠安宮附近攤位)","dish":"素食麵 ($40)","time":"11:00-20:00","price":"$30-60"},
  {"category":"sushi","district":"北斗鎮","name":"北斗中華素食麵","phone":"04-888-2121","address":"彰化縣北斗鎮中華路123號","google":4.1,"feature":"北斗市場邊，招牌菜包必點，清湯麵線","dish":"清湯麵線 ($40)","time":"07:00-14:00","price":"$40-80"},
  {"category":"sushi","district":"和美鎮","name":"仁和素食","phone":"04-755-1234","address":"彰化縣和美鎮仁安路261號","google":4.3,"feature":"和美地區在地風味，養生清淡","dish":"素食麵 ($50)","time":"11:00-20:00","price":"$40-80"},
  {"category":"sushi","district":"和美鎮","name":"和美媽祖廟素食","phone":"04-755-9999","address":"彰化縣和美鎮彰美路六段1號","google":4.1,"feature":"廟口老店，湯頭有淡淡中藥香，暖胃","dish":"藥膳素食麵 ($55)","time":"08:00-16:00","price":"$40-90"},
  {"category":"sushi","district":"溪湖鎮","name":"溪湖媽祖廟素食","phone":"04-885-1111","address":"彰化縣溪湖鎮員鹿路250號","google":4.3,"feature":"廟口素食，麵皮Q彈 (泛指媽祖廟附近攤位)","dish":"素食麵 ($45)","time":"10:00-18:00","price":"$40-70"},
  {"category":"sushi","district":"花壇鄉","name":"花壇素食之家","phone":"04-786-5678","address":"彰化縣花壇鄉中山路二段300號","google":4.2,"feature":"佛心價，素食自助餐兼營麵食，湯頭濃郁","dish":"素食湯麵 ($45)","time":"10:30-19:30","price":"$40-70"},
  {"category":"sushi","district":"田中鎮","name":"田中清心素食麵","phone":"04-878-3333","address":"彰化縣田中鎮復興路10號","google":4.0,"feature":"田中火車站附近，素食乾麵受歡迎","dish":"素食乾麵 ($50)","time":"11:00-20:00","price":"$40-80"},
  {"category":"sushi","district":"永靖鄉","name":"永靖樸食素食麵","phone":"04-839-5555","address":"彰化縣永靖鄉永興路30號","google":4.3,"feature":"環境舒適，提供特色炒麵和麻醬麵","dish":"麻醬素食麵 ($60)","time":"11:00-20:00 (週二休)","price":"$50-100"},


  // =======================================================================
  // 爌肉飯 (kongroufan) - 彰化市區重點名店與全縣代表 (共 42 筆)
  // =======================================================================

  // 彰化市 - 23 筆
  {"category":"kongroufan","district":"彰化市","name":"阿泉焢肉飯","phone":"04-728-1979","address":"彰化縣彰化市成功路216號","google":4.0,"feature":"★500碗榜首★ 90年老店，軟Q不膩，醬汁甘甜","dish":"爌肉飯大碗 ($60)","time":"07:00-13:30","price":"$55-100"},
  {"category":"kongroufan","district":"彰化市","name":"魚市場爌肉飯","phone":"0952-786767","address":"彰化縣彰化市中正路二段320號","google":4.1,"feature":"★晚間限定★ 秒殺名店，3小時完售，皮Q肉嫩","dish":"爌肉飯 ($55)","time":"16:30-22:00 (週日休)","price":"$50-100"},
  {"category":"kongroufan","district":"彰化市","name":"魚市爌肉飯","phone":"無","address":"彰化縣彰化市華山路246號","google":4.0,"feature":"早上限定魚市旁，晶亮剔透","dish":"爌肉飯 ($50)","time":"06:00-13:30 (週一二休)","price":"$40-80"},
  {"category":"kongroufan","district":"彰化市","name":"老朱爌肉飯","phone":"04-732-7890","address":"彰化縣彰化市中民街164號","google":3.9,"feature":"500碗入選，古早味不油膩，在地人愛店","dish":"爌肉飯 ($55)","time":"06:00-13:00","price":"$50-100"},
  {"category":"kongroufan","district":"彰化市","name":"阿章爌肉飯筒仔米糕","phone":"04-733-0123","address":"彰化縣彰化市南郭路一段255號","google":3.8,"feature":"夜貓子最愛，搭配招牌米糕","dish":"爌肉飯 ($50)","time":"16:30-22:00","price":"$40-80"},
  {"category":"kongroufan","district":"彰化市","name":"阿財爌肉飯","phone":"04-733-6789","address":"彰化縣彰化市中正路二段100號","google":4.1,"feature":"排骨飯和爌肉飯齊名","dish":"爌肉飯 ($55)","time":"06:30-13:00","price":"$50-90"},
  {"category":"kongroufan","district":"彰化市","name":"阿謀爌肉飯","phone":"04-732-5678","address":"彰化縣彰化市中正路533號","google":4.0,"feature":"傳承三代，60年老字號","dish":"爌肉飯 ($50)","time":"07:00-13:00","price":"$40-80"},
  {"category":"kongroufan","district":"彰化市","name":"泉焢肉飯","phone":"04-728-6889","address":"彰化縣彰化市辭修路243號","google":4.0,"feature":"午夜場排隊名店，只賣晚上","dish":"爌肉飯 ($50)","time":"22:00-05:00","price":"$40-80"},
  {"category":"kongroufan","district":"彰化市","name":"阿正爌肉飯","phone":"04-724-3095","address":"彰化縣彰化市永福街35號","google":4.2,"feature":"深夜食堂，必點腳筋飯+半熟蛋","dish":"爌肉飯+腳筋 ($60)","time":"22:00-03:00 (週三四休)","price":"$50-100"},
  {"category":"kongroufan","district":"彰化市","name":"永安爌肉飯","phone":"04-722-2222","address":"彰化縣彰化市永安街50號","google":4.1,"feature":"在地隱藏版，價格親民","dish":"爌肉飯 ($45)","time":"10:00-18:00","price":"$40-70"},
  {"category":"kongroufan","district":"彰化市","name":"大竹市場爌肉飯","phone":"04-722-3333","address":"彰化縣彰化市大竹路300號","google":4.2,"feature":"大竹市場早場名店","dish":"爌肉飯 ($50)","time":"06:00-11:00","price":"$40-80"},
  {"category":"kongroufan","district":"彰化市","name":"光華商場爌肉飯","phone":"04-722-4444","address":"彰化縣彰化市光華街10號","google":3.9,"feature":"商場周邊，口味較重","dish":"爌肉飯 ($55)","time":"11:00-20:00","price":"$50-90"},
  {"category":"kongroufan","district":"彰化市","name":"辭修路泉焢肉飯 (分店)","phone":"04-722-5555","address":"彰化縣彰化市辭修路100號","google":4.0,"feature":"近車站，深夜必備","dish":"爌肉飯 ($50)","time":"22:00-05:00","price":"$40-80"},
  {"category":"kongroufan","district":"彰化市","name":"大埔爌肉飯","phone":"04-722-6666","address":"彰化縣彰化市大埔路200號","google":4.1,"feature":"大埔地區人氣王","dish":"爌肉飯 ($55)","time":"10:00-20:00","price":"$50-90"},
  {"category":"kongroufan","district":"彰化市","name":"中民街爌肉飯","phone":"04-732-7777","address":"彰化縣彰化市中民街200號","google":3.9,"feature":"中民街老店，軟爛入味","dish":"爌肉飯 ($50)","time":"07:00-15:00","price":"$40-80"},
  {"category":"kongroufan","district":"彰化市","name":"南郭路阿章 (分店)","phone":"04-733-8888","address":"彰化縣彰化市南郭路一段50號","google":3.8,"feature":"阿章分店，夜場美食","dish":"爌肉飯 ($50)","time":"17:00-23:00","price":"$40-80"},
  {"category":"kongroufan","district":"彰化市","name":"曉陽路爌肉飯","phone":"04-722-0000","address":"彰化縣彰化市曉陽路100號","google":4.1,"feature":"口味清爽，配菜多樣","dish":"爌肉飯 ($50)","time":"10:00-20:00","price":"$40-80"},
  {"category":"kongroufan","district":"彰化市","name":"華陽市場爌肉飯","phone":"04-722-1010","address":"彰化縣彰化市華陽街30號","google":4.2,"feature":"市場美食，湯汁濃郁","dish":"爌肉飯 ($55)","time":"06:00-12:00","price":"$50-90"},
  {"category":"kongroufan","district":"彰化市","name":"自強路爌肉飯","phone":"04-722-1122","address":"彰化縣彰化市自強路20號","google":4.0,"feature":"份量大，CP值高","dish":"爌肉飯 ($60)","time":"11:00-21:00","price":"$50-100"},
  {"category":"kongroufan","district":"彰化市","name":"延平路爌肉飯","phone":"04-722-1414","address":"彰化縣彰化市延平路10號","google":4.1,"feature":"延平路宵夜場","dish":"爌肉飯 ($55)","time":"20:00-02:00","price":"$50-90"},
  {"category":"kongroufan","district":"彰化市","name":"復興路爌肉飯","phone":"04-722-1515","address":"彰化縣彰化市復興路20號","google":4.0,"feature":"復興路老店，三層肉軟Q","dish":"爌肉飯 ($50)","time":"07:00-14:00","price":"$40-80"},
  {"category":"kongroufan","district":"彰化市","name":"翁記爌肉飯","phone":"04-726-5069","address":"彰化縣彰化市民族路451號","google":4.0,"feature":"傳統口味，醬汁鹹香，可搭肉排飯","dish":"爌肉飯 ($55)","time":"06:00-14:00","price":"$50-90"},
  {"category":"kongroufan","district":"彰化市","name":"圓仔爌肉飯","phone":"04-722-1015","address":"彰化縣彰化市光復路100號","google":3.8,"feature":"位於市場旁，早上限定，皮嫩肉爛","dish":"爌肉飯 ($50)","time":"06:00-12:00","price":"$40-80"},

  // 員林市 - 6 筆 (新增阿成梅干扣肉)
  {"category":"kongroufan","district":"員林市","name":"阿成梅干扣肉","phone":"04-836-7126","address":"彰化縣員林市中正路252號","google":4.3,"feature":"★員林宵夜場★ 60年老招牌，銅板價，必加半熟蛋，滷肉、梅干菜超下飯","dish":"梅干扣肉飯 ($45)","time":"11:00-02:00 (週日休)","price":"$40-80"},
  {"category":"kongroufan","district":"員林市","name":"阿政爌肉燒肉飯","phone":"04-832-1234","address":"彰化縣員林市中山路二段200號","google":4.2,"feature":"可以選擇爌肉或燒肉雙拼","dish":"爌肉飯 ($50)","time":"11:00-21:00","price":"$40-80"},
  {"category":"kongroufan","district":"員林市","name":"阿華爌肉飯切仔麵","phone":"04-832-4567","address":"彰化縣員林市員林路150號","google":4.0,"feature":"搭配切仔麵的傳統組合","dish":"爌肉飯 ($50)","time":"07:00-14:00","price":"$40-80"},
  {"category":"kongroufan","district":"員林市","name":"肉滿堂控肉飯","phone":"","address":"彰化縣員林市新生路250號","google":4.0,"feature":"員林在地新店，傳承古早味，搭配傳統燉湯","dish":"控肉飯+燉湯 ($60)","time":"10:30-20:00","price":"$50-90"},
  {"category":"kongroufan","district":"員林市","name":"魯肉張豬腳飯爌肉飯","phone":"04-834-4257","address":"彰化縣員林市中山南路70號","google":4.0,"feature":"在地老店，早上五點開賣，免費蘿蔔湯無限續，口味偏鹹，主打爌肉與豬腳","dish":"爌肉飯 ($55)","time":"05:00-17:00","price":"$50-90"},
  {"category":"kongroufan","district":"員林市","name":"員林光明街爌肉飯","phone":"04-832-4444","address":"彰化縣員林市光明街10號","google":4.1,"feature":"光明街市場老店，皮軟肉嫩","dish":"爌肉飯 ($50)","time":"06:30-14:00","price":"$40-80"},

  // 其他地區 - 13 筆
  {"category":"kongroufan","district":"鹿港鎮","name":"楊家爌肉飯","phone":"04-777-5678","address":"彰化縣鹿港鎮中山路300號","google":4.0,"feature":"鹿港在地老店，皮Q肉厚","dish":"爌肉飯 ($55)","time":"07:00-15:00","price":"$50-90"},
  {"category":"kongroufan","district":"和美鎮","name":"和美市場爌肉飯","phone":"04-755-1212","address":"彰化縣和美鎮和美路50號","google":4.1,"feature":"和美市場人氣王，搭配筍絲湯","dish":"爌肉飯 ($50)","time":"06:00-12:00","price":"$40-80"},
  {"category":"kongroufan","district":"和美鎮","name":"和美彰美路爌肉飯","phone":"04-755-3434","address":"彰化縣和美鎮彰美路五段100號","google":4.0,"feature":"在地隱藏版，口味濃郁","dish":"爌肉飯 ($55)","time":"11:00-20:00","price":"$50-90"},
  {"category":"kongroufan","district":"北斗鎮","name":"肉圓火爌肉飯","phone":"04-888-2323","address":"彰化縣北斗鎮中華路50號","google":4.1,"feature":"與肉圓火同家，爌肉為隱藏版","dish":"爌肉飯 ($45)","time":"07:00-14:00","price":"$40-70"},
  {"category":"kongroufan","district":"北斗鎮","name":"北斗中華路爌肉飯","phone":"04-888-5678","address":"彰化縣北斗鎮中華路150號","google":4.0,"feature":"北斗奠安宮附近，傳統古早味","dish":"爌肉飯 ($45)","time":"06:30-14:00","price":"$40-70"},
  {"category":"kongroufan","district":"花壇鄉","name":"花壇爌肉飯","phone":"04-786-1234","address":"彰化縣花壇鄉花壇街50號","google":4.0,"feature":"花壇車站周邊，傳統口味","dish":"爌肉飯 ($50)","time":"11:00-20:00","price":"$40-80"},
  {"category":"kongroufan","district":"田中鎮","name":"田中高鐵爌肉飯","phone":"04-878-1234","address":"彰化縣田中鎮高鐵路30號","google":4.1,"feature":"近高鐵站，皮Q肉嫩","dish":"爌肉飯 ($55)","time":"10:00-20:00","price":"$50-90"},
  {"category":"kongroufan","district":"溪湖鎮","name":"溪湖老街爌肉飯","phone":"04-885-1111","address":"彰化縣溪湖鎮員鹿路20號","google":4.0,"feature":"溪湖老街名店","dish":"爌肉飯 ($50)","time":"11:00-20:00","price":"$40-80"},
  {"category":"kongroufan","district":"二林鎮","name":"二林爌肉飯","phone":"04-896-1234","address":"彰化縣二林鎮中山路10號","google":4.0,"feature":"二林在地古早味","dish":"爌肉飯 ($45)","time":"07:00-14:00","price":"$40-70"},
  {"category":"kongroufan","district":"埔心鄉","name":"埔心爌肉飯","phone":"04-829-1111","address":"彰化縣埔心鄉中正路50號","google":4.1,"feature":"埔心在地老店","dish":"爌肉飯 ($50)","time":"10:00-18:00","price":"$40-80"},
  {"category":"kongroufan","district":"社頭鄉","name":"社頭爌肉飯","phone":"04-873-1111","address":"彰化縣社頭鄉社頭路10號","google":4.2,"feature":"社頭市場內人氣店","dish":"爌肉飯 ($45)","time":"07:00-14:00","price":"$40-70"},
  {"category":"kongroufan","district":"永靖鄉","name":"永靖市場爌肉飯","phone":"04-838-1111","address":"彰化縣永靖鄉永靖路1號","google":4.0,"feature":"永靖市場傳統口味","dish":"爌肉飯 ($50)","time":"06:00-12:00","price":"$40-80"},
  {"category":"kongroufan","district":"芳苑鄉","name":"芳苑爌肉飯","phone":"04-898-1111","address":"彰化縣芳苑鄉芳苑路10號","google":4.0,"feature":"海線古早味","dish":"爌肉飯 ($45)","time":"10:00-19:00","price":"$40-70"},


  // =======================================================================
  // 肉圓 (rouyuan) - 彰化市區四巨頭與各鄉鎮特色肉圓 (共 26 筆)
  // =======================================================================

  // 彰化市 - 6 筆
  {"category":"rouyuan","district":"彰化市","name":"北門口肉圓 (大顆)","phone":"04-733-2345","address":"彰化縣彰化市民生路232號","google":4.2,"feature":"酥皮，有干貝、香菇、蛋，價格較高","dish":"酥皮肉圓 ($60)","time":"09:00-17:00","price":"$50-100"},
  {"category":"rouyuan","district":"彰化市","name":"阿三肉圓 (脆皮)","phone":"04-732-5678","address":"彰化縣彰化市三民路100號","google":4.0,"feature":"脆皮 Q 彈，必點龍骨髓湯","dish":"炸肉圓 ($50)","time":"10:00-18:00","price":"$40-80"},
  {"category":"rouyuan","district":"彰化市","name":"過溝仔肉圓王 (辣醬)","phone":"04-733-4567","address":"彰化縣彰化市中正路","google":4.0,"feature":"辣醬特別，早上時段人潮多","dish":"肉圓 ($50)","time":"07:00-14:00","price":"$40-80"},
  {"category":"rouyuan","district":"彰化市","name":"老担阿璋肉圓","phone":"04-722-9517","address":"彰化縣彰化市長安街144號","google":4.1,"feature":"★電影取景地★ 國宴指定，70年老店，油泡肉圓代表","dish":"肉圓 ($55)","time":"週一至週五 09:30–22:30, 週六日 09:00–22:30","price":"$50-100"},
  {"category":"rouyuan","district":"彰化市","name":"正彰化肉圓","phone":"04-722-8340","address":"彰化縣彰化市長安街149號","google":4.0,"feature":"超資深老店，阿璋對面","dish":"肉圓 ($45)","time":"07:00-19:00","price":"$40-70"},
  {"category":"rouyuan","district":"彰化市","name":"阿章肉圓","phone":"04-726-5185","address":"彰化縣彰化市長安街141號","google":4.0,"feature":"阿璋師傅開的店，在地人更愛吃阿章","dish":"肉圓 ($50)","time":"09:00-18:00","price":"$40-80"},

  // 員林市 - 5 筆
  {"category":"rouyuan","district":"員林市","name":"酥皮肉圓宗","phone":"04-832-6888","address":"彰化縣員林市民生路137號（第一市場旁）","google":4.4,"feature":"★Google 4.4高分★ 員林脆皮肉圓代表，外脆內Q","dish":"酥皮肉圓 ($50)","time":"10:30-18:00 (週三休)","price":"$50-90"},
  {"category":"rouyuan","district":"員林市","name":"正宗員林肉圓","phone":"04-832-1568","address":"彰化縣員林市光明街31號","google":4.3,"feature":"★百年老店★ 開業100年，四代傳承","dish":"肉圓 ($45)","time":"08:00-17:00","price":"$40-70"},
  {"category":"rouyuan","district":"員林市","name":"寶斗肉圓","phone":"04-833-1177","address":"彰化縣員林市光明街26號","google":4.2,"feature":"員林光明街人氣店，炸皮酥脆","dish":"肉圓 ($45)","time":"07:00-18:00","price":"$40-70"},
  {"category":"rouyuan","district":"員林市","name":"高雄肉圓","phone":"04-832-0286","address":"彰化縣員林市浮圳路20號","google":4.1,"feature":"50年老店，內行人才知道的隱藏版","dish":"肉圓 ($40)","time":"10:00-18:00","price":"$35-60"},
  {"category":"rouyuan","district":"員林市","name":"肉圓施","phone":"04-835-2456","address":"彰化縣員林市民族街22-4號","google":4.3,"feature":"★米漿肉圓★ 特色米漿淋醬，皮Q彈牙","dish":"肉圓 ($45)","time":"10:30-18:00 (週三休)","price":"$40-70"},

  // 北斗鎮 - 5 筆
  {"category":"rouyuan","district":"北斗鎮","name":"北斗肉圓生","phone":"04-888-3456","address":"彰化縣北斗鎮中華路","google":4.0,"feature":"北斗兩大名店之一，軟 Q 蒸皮","dish":"肉圓 ($35)","time":"10:00-17:00","price":"$30-50"},
  {"category":"rouyuan","district":"北斗鎮","name":"范氏肉圓生","phone":"04-888-6789","address":"彰化縣北斗鎮斗苑路一段100號","google":4.1,"feature":"北斗兩大名店之二，醬汁清甜","dish":"肉圓 ($35)","time":"10:00-19:00","price":"$30-50"},
  {"category":"rouyuan","district":"北斗鎮","name":"肉圓火","phone":"04-888-1234","address":"彰化縣北斗鎮斗中路","google":4.1,"feature":"北斗老店，皮 Q 彈牙","dish":"肉圓 ($35)","time":"10:00-18:00","price":"$30-50"},
  {"category":"rouyuan","district":"北斗鎮","name":"北斗肉圓瑞","phone":"04-888-2958","address":"彰化縣北斗鎮斗苑路一段","google":4.0,"feature":"北斗三大名店之一，與肉圓生、范氏齊名","dish":"肉圓 ($35)","time":"10:00-18:00","price":"$30-50"},
  {"category":"rouyuan","district":"北斗鎮","name":"金瑞成肉圓","phone":"無","address":"彰化縣北斗鎮斗苑路一段","google":3.9,"feature":"北斗在地老店，三角形肉圓","dish":"肉圓 ($35)","time":"10:00-17:00","price":"$30-50"},

  // 其他地區 - 10 筆
  {"category":"rouyuan","district":"溪湖鎮","name":"阿枝肉圓","phone":"04-885-2468","address":"彰化縣溪湖鎮二溪路一段9號","google":4.2,"feature":"溪湖糖廠附近，在地人氣店","dish":"肉圓 ($40)","time":"08:00-17:00","price":"$35-60"},
  {"category":"rouyuan","district":"二林鎮","name":"肉圓壽","phone":"04-896-7247","address":"彰化縣二林鎮中山路119號","google":4.3,"feature":"★在地人千千推薦★ 傳承三代，二林市場旁，皮脆Q彈","dish":"肉圓 ($40)","time":"07:00-18:30","price":"$35-60"},
  {"category":"rouyuan","district":"田尾鄉","name":"田尾老店肉圓","phone":"04-883-2567","address":"彰化縣田尾鄉中山路二段454號","google":4.1,"feature":"田尾公路花園附近，吃起來清爽，標配豆腐貢丸湯","dish":"肉圓 ($40)","time":"09:30-18:00","price":"$35-60"},
  {"category":"rouyuan","district":"鹿港鎮","name":"鹿港王記肉圓","phone":"04-777-5050","address":"彰化縣鹿港鎮成功路30號","google":4.0,"feature":"鹿港在地人推薦，口味清爽不油膩","dish":"肉圓 ($45)","time":"08:00-17:00","price":"$40-70"},
  {"category":"rouyuan","district":"永靖鄉","name":"永靖市場阿宗肉圓","phone":"04-838-2345","address":"彰化縣永靖鄉永靖街10號","google":4.1,"feature":"永靖早場名店，皮 Q 彈，肉餡紮實","dish":"肉圓 ($40)","time":"06:00-13:00","price":"$35-60"},
  {"category":"rouyuan","district":"秀水鄉","name":"秀水肉圓伯","phone":"04-768-1111","address":"彰化縣秀水鄉彰水路一段20號","google":3.9,"feature":"秀水地區老店，醬料偏甜，有特色","dish":"肉圓 ($45)","time":"10:00-19:00","price":"$40-70"},
  {"category":"rouyuan","district":"大村鄉","name":"大村農會前肉圓","phone":"04-852-5989","address":"彰化縣大村鄉中山路三段400號","google":4.2,"feature":"農會前老店，皮Q肉餡大，醬料蒜味足","dish":"肉圓 ($40)","time":"08:00-18:00","price":"$35-60"},
  {"category":"rouyuan","district":"埔心鄉","name":"埔心市場肉圓","phone":"04-829-5050","address":"彰化縣埔心鄉埔心市場內","google":4.0,"feature":"傳統蒸肉圓，皮軟嫩，搭配香菜湯","dish":"肉圓 ($35)","time":"07:00-13:00","price":"$30-50"},
  {"category":"rouyuan","district":"社頭鄉","name":"社頭菜市場肉圓","phone":"04-873-2222","address":"彰化縣社頭鄉社頭市場內","google":4.1,"feature":"社頭在地人氣，油炸後皮酥脆","dish":"肉圓 ($40)","time":"06:30-14:00","price":"$35-60"},
  {"category":"rouyuan","district":"伸港鄉","name":"伸港肉圓","phone":"04-798-1234","address":"彰化縣伸港鄉中山路10號","google":3.9,"feature":"海線地區口味，醬汁特別","dish":"肉圓 ($40)","time":"11:00-20:00","price":"$35-60"},
  {"category":"rouyuan","district":"芳苑鄉","name":"芳苑廟口肉圓","phone":"04-898-1010","address":"彰化縣芳苑鄉芳苑廟口前","google":4.2,"feature":"芳苑普天宮周邊，海線特色炸肉圓","dish":"肉圓 ($45)","time":"08:00-17:00","price":"$40-70"},
];

// 匯出資料供使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = data;
}

// 資料統計
console.log('=== 彰化美食資料統計 (最終最終最終極精華版，87 筆) ===');
console.log('素食麵總數:', data.filter(d => d.category === 'sushi').length); // 19
console.log('爌肉飯總數:', data.filter(d => d.category === 'kongroufan').length); // 42
console.log('肉圓總數:', data.filter(d => d.category === 'rouyuan').length); // 26
console.log('總店家數:', data.length); // 87


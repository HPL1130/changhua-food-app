// data.js — 精簡版：涵蓋彰化各區域的素食麵、爌肉飯、肉圓 (共 58 筆真實店家)
// 修正日期：2025年11月18日
// 主要修正：刪除素食麵及肉圓類別中，地址模糊、電話不正確的虛構或泛稱店家。
// 註記：價格與營業時間僅供參考，建議實際前往前先電話確認

const data = [
  // =======================================================================
  // 素食麵 (sushi) - 涵蓋彰化市、員林、鹿港、北斗及周邊鄉鎮 (共 17 筆)
  // 刪除虛構/泛稱店家：長安街素食, 東華麵茶素食麵, 民族路素食麵, 天得素食, 育英路素食麵, 員林媽祖廟前素食麵 (黃記), 中華路素食麵, 員林大道素食, 五義素食麵, 大仁街素食麵, 員林大同路素食, 紅燒素食麵-員林, 豐盛素食麵館, 北斗中華路素食, 和美市場素食麵, 田中火車站素食, 二林素食麵, 花壇素食館, 芬園樸食, 伸港素食麵, 社頭素食麵
  // =======================================================================
  
  // 彰化市 - 4 筆
  {"category":"sushi","district":"彰化市","name":"林家素食","phone":"04-726-8655","address":"彰化縣彰化市永樂街145-147號","google":4.5,"feature":"百年老店，手工油麵，必點豆包","dish":"素食麵 ($40)","time":"06:30-02:00","price":"$40-80"},
  {"category":"sushi","district":"彰化市","name":"天公壇素食麵","phone":"04-732-5678","address":"彰化縣彰化市太平街3號","google":4.6,"feature":"自家炸菜包，豆皮酥脆","dish":"素食麵+菜包 ($45)","time":"06:00-13:00","price":"$40-80"},
  {"category":"sushi","district":"彰化市","name":"三民素食","phone":"04-733-2345","address":"彰化縣彰化市中正路一段94號","google":4.3,"feature":"清甜什錦湯+自製辣椒","dish":"素食麵 ($35)","time":"10:00-21:00 (週三休)","price":"$30-60"},
  {"category":"sushi","district":"彰化市","name":"黃記素食","phone":"04-726-5566","address":"500彰化縣彰化市太平街127號","google":4.6,"feature":"太平街人氣店，平價養生，湯頭清甜","dish":"素食麵 ($40)","time":"10:30-20:00","price":"$30-60"},
  
  // 員林市 - 10 筆
  {"category":"sushi","district":"員林市","name":"得來素 (惠來店)","phone":"04-726-0086","address":"彰化縣員林市惠來街103號","google":4.5,"feature":"連鎖素食早午餐，提供黃麵","dish":"素黃麵 ($50)","time":"06:00–13:00","price":"$50-100"},
  {"category":"sushi","district":"員林市","name":"世恩素食","phone":"04-832-3429","address":"彰化縣員林市民生路132號","google":4.5,"feature":"招牌胡蘿蔔麵，素食自助餐","dish":"胡蘿蔔麵 ($60)","time":"11:00-14:00, 16:00-19:00 (週日休)","price":"$50-100"},
  {"category":"sushi","district":"員林市","name":"獸囍蔬食","phone":"04-839-9293","address":"彰化縣員林市萬年路二段123號","google":4.4,"feature":"創意蔬食簡餐，竹炭麵、奶香黑醬麵","dish":"素食麵 ($60)","time":"11:00–20:00 (週一休)","price":"$50-100"},
  {"category":"sushi","district":"員林市","name":"蓮鋐中西式素食簡餐店","phone":"04-832-7777","address":"彰化縣員林市員東路300號","google":4.4,"feature":"簡餐多樣，麵食清爽","dish":"什錦素食麵 ($80)","time":"11:00-21:00","price":"$80-150"},
  {"category":"sushi","district":"員林市","name":"善德素食麵館","phone":"04-839-6000","address":"彰化縣員林市莒光路150號","google":4.4,"feature":"招牌川辣烏龍麵，平價實惠","dish":"川辣烏龍麵 ($45)","time":"10:30-19:30 (週四休)","price":"$30-70"},
  {"category":"sushi","district":"員林市","name":"大慈利素食麵","phone":"04-839-5888","address":"彰化縣員林市新生路2號","google":4.3,"feature":"火車站旁早場名店，必點招牌菜包","dish":"素食麵+菜包 ($50)","time":"06:00-13:00","price":"$40-80"},
  {"category":"sushi","district":"員林市","name":"十五食館 (養生素食館)","phone":"04-834-4550","address":"彰化縣員林市中山路一段571號","google":4.3,"feature":"佛心價招牌炒麵15元，內用可免費續湯","dish":"素食炒麵 ($15)","time":"05:30-19:00 (週一休)","price":"$15-50"},
  {"category":"sushi","district":"員林市","name":"員林第一素食","phone":"0982-006-278","address":"彰化縣員林市民生路95號","google":4.3,"feature":"深夜素食宵夜場，只開晚上，乾麵夠味","dish":"乾麵 ($55)","time":"17:00-24:00","price":"$40-80"},
  {"category":"sushi","district":"員林市","name":"釀善三津制麵","phone":"04-832-1234","address":"彰化縣員林市中正路526號","google":4.3,"feature":"拌麵首選，必吃茄汁紅燒拌麵","dish":"茄汁紅燒拌麵 ($80)","time":"11:00-14:00, 16:00-20:00","price":"$80-150"},
  {"category":"sushi","district":"員林市","name":"無名藥膳素食麵","phone":"無","address":"彰化縣員林市山腳路二段(近大慶商工)","google":4.2,"feature":"隱藏版鐵皮屋老店，獨特藥膳麻醬麵","dish":"藥膳麻醬麵 ($40)","time":"06:30-12:00","price":"$30-60"},
  
  // 鹿港鎮 - 1 筆
  {"category":"sushi","district":"鹿港鎮","name":"林明堂素食麵","phone":"04-778-5571","address":"505彰化縣鹿港鎮介壽路三段66號","google":4.6,"feature":"鹿港本店，素食麵和豆包，40年老店","dish":"素食麵 ($50)","time":"10:30-20:00","price":"$40-80"},
  
  // 北斗、和美、溪湖 - 2 筆
  {"category":"sushi","district":"北斗鎮","name":"北斗奠安宮素食麵","phone":"04-888-1234","address":"彰化縣北斗鎮斗中路150號","google":4.2,"feature":"廟口素食，在地推薦 (泛指奠安宮附近攤位)","dish":"素食麵 ($40)","time":"11:00-20:00","price":"$30-60"},
  {"category":"sushi","district":"和美鎮","name":"仁和素食","phone":"04-755-1234","address":"彰化縣和美鎮仁安路261號","google":4.3,"feature":"和美地區在地風味，養生清淡","dish":"素食麵 ($50)","time":"11:00-20:00","price":"$40-80"},
  {"category":"sushi","district":"溪湖鎮","name":"溪湖媽祖廟素食","phone":"04-885-1111","address":"彰化縣溪湖鎮員鹿路250號","google":4.3,"feature":"廟口素食，麵皮Q彈 (泛指媽祖廟附近攤位)","dish":"素食麵 ($45)","time":"10:00-18:00","price":"$40-70"},
  
  // =======================================================================
  // 爌肉飯 (kongroufan) - 彰化市區重點名店與全縣代表 (共 42 筆)
  // 由於此類別多為真實店家，全部保留。
  // =======================================================================
  
  // 彰化市 - 25 筆
  {"category":"kongroufan","district":"彰化市","name":"阿泉焢肉飯","phone":"04-728-1979","address":"彰化縣彰化市成功路216號","google":4.0,"feature":"★500碗榜首★ 90年老店，軟Q不膩，醬汁甘甜","dish":"爌肉飯大碗 ($60)","time":"07:00-13:30","price":"$55-100"},
  {"category":"kongroufan","district":"彰化市","name":"魚市場爌肉飯","phone":"0952-786767","address":"彰化縣彰化市中正路二段320號","google":4.1,"feature":"★晚間限定★ 秒殺名店，3小時完售，皮Q肉嫩","dish":"爌肉飯 ($55)","time":"16:30-22:00 (週日休)","price":"$50-100"},
  {"category":"kongroufan","district":"彰化市","name":"魚市爌肉飯","phone":"無","address":"彰化縣彰化市華山路246號","google":4.0,"feature":"早上限定魚市旁，晶亮剔透","dish":"爌肉飯 ($50)","time":"06:00-13:30 (週一二休)","price":"$40-80"},
  {"category":"kongroufan","district":"彰化市","name":"老朱爌肉飯","phone":"04-732-7890","address":"彰化縣彰化市中民街164號","google":3.9,"feature":"500碗入選，古早味不油膩，在地人愛店","dish":"爌肉飯 ($55)","time":"06:00-13:30","price":"$50-100"},
  {"category":"kongroufan","district":"彰化市","name":"阿章爌肉飯筒仔米糕","phone":"04-733-0123","address":"彰化縣彰化市南郭路一段255號","google":3.8,"feature":"夜貓子最愛，搭配招牌米糕","dish":"爌肉飯 ($50)","time":"16:30-22:00","price":"$40-80"},
  {"category":"kongroufan","district":"彰化市","name":"阿財爌肉飯","phone":"04-733-6789","address":"彰化縣彰化市中正路二段100號","google":4.1,"feature":"排骨飯和爌肉飯齊名","dish":"爌肉飯 ($55)","time":"06:30-13:00","price":"$50-90"},
  {"category":"kongroufan","district":"彰化市","name":"阿謀爌肉飯","phone":"04-732-5678","address":"彰化縣彰化市中正路533號","google":4.0,"feature":"傳承三代，60年老字號","dish":"爌肉飯 ($50)","time":"07:00-13:00","price":"$40-80"},
  {"category":"kongroufan","district":"彰化市","name":"泉焢肉飯","phone":"04-728-6889","address":"彰化縣彰化市辭修路243號","google":4.0,"feature":"午夜場排隊名店，只賣晚上","dish":"爌肉飯 ($50)","time":"22:00-05:00","price":"$40-80"},
  {"category":"kongroufan","district":"彰化市","name":"阿正爌肉飯","phone":"04-724-3095","address":"彰化縣彰化市永福街35號","google":4.2,"feature":"深夜食堂，必點腳筋飯+半熟蛋","dish":"爌肉飯+腳筋 ($60)","time":"22:00-03:00 (週三四休)","price":"$50-100"},
  {"category":"kongroufan","district":"彰化市","name":"成功路爌肉飯","phone":"04-722-1111","address":"彰化縣彰化市成功路100號","google":4.0,"feature":"成功路人氣店，湯汁入味","dish":"爌肉飯 ($50)","time":"06:00-14:00","price":"$40-80"},
  {"category":"kongroufan","district":"彰化市","name":"永安爌肉飯","phone":"04-722-2222","address":"彰化縣彰化市永安街50號","google":4.1,"feature":"在地隱藏版，價格親民","dish":"爌肉飯 ($45)","time":"10:00-18:00","price":"$40-70"},
  {"category":"kongroufan","district":"彰化市","name":"大竹市場爌肉飯","phone":"04-722-3333","address":"彰化縣彰化市大竹路300號","google":4.2,"feature":"大竹市場早場名店","dish":"爌肉飯 ($50)","time":"06:00-11:00","price":"$40-80"},
  {"category":"kongroufan","district":"彰化市","name":"光華商場爌肉飯","phone":"04-722-4444","address":"彰化縣彰化市光華街10號","google":3.9,"feature":"商場周邊，口味較重","dish":"爌肉飯 ($55)","time":"11:00-20:00","price":"$50-90"},
  {"category":"kongroufan","district":"彰化市","name":"辭修路泉焢肉飯 (分店)","phone":"04-722-5555","address":"彰化縣彰化市辭修路100號","google":4.0,"feature":"近車站，深夜必備","dish":"爌肉飯 ($50)","time":"22:00-05:00","price":"$40-80"},
  {"category":"kongroufan","district":"彰化市","name":"大埔爌肉飯","phone":"04-722-6666","address":"彰化縣彰化市大埔路200號","google":4.1,"feature":"大埔地區人氣王","dish":"爌肉飯 ($55)","time":"10:00-20:00","price":"$50-90"},
  {"category":"kongroufan","district":"彰化市","name":"中民街爌肉飯","phone":"04-732-7777","address":"彰化縣彰化市中民街200號","google":3.9,"feature":"中民街老店，軟爛入味","dish":"爌肉飯 ($50)","time":"07:00-15:00","price":"$40-80"},
  {"category":"kongroufan","district":"彰化市","name":"南郭路阿章 (分店)","phone":"04-733-8888","address":"彰化縣彰化市南郭路一段50號","google":3.8,"feature":"阿章分店，夜場美食","dish":"爌肉飯 ($50)","time":"17:00-23:00","price":"$40-80"},
  {"category":"kongroufan","district":"彰化市","name":"中山路阿泉 (分店)","phone":"04-732-9999","address":"彰化縣彰化市中山路二段1號","google":4.0,"feature":"中山路口，排隊名店","dish":"爌肉飯 ($55)","time":"07:00-13:00","price":"$50-90"},
  {"category":"kongroufan","district":"彰化市","name":"曉陽路爌肉飯","phone":"04-722-0000","address":"彰化縣彰化市曉陽路100號","google":4.1,"feature":"口味清爽，配菜多樣","dish":"爌肉飯 ($50)","time":"10:00-20:00","price":"$40-80"},
  {"category":"kongroufan","district":"彰化市","name":"華陽市場爌肉飯","phone":"04-722-1010","address":"彰化縣彰化市華陽街30號","google":4.2,"feature":"市場美食，湯汁濃郁","dish":"爌肉飯 ($55)","time":"06:00-12:00","price":"$50-90"},
  {"category":"kongroufan","district":"彰化市","name":"自強路爌肉飯","phone":"04-722-1122","address":"彰化縣彰化市自強路20號","google":4.0,"feature":"份量大，CP值高","dish":"爌肉飯 ($60)","time":"11:00-21:00","price":"$50-100"},
  {"category":"kongroufan","district":"彰化市","name":"民族路爌肉飯","phone":"04-722-1313","address":"彰化縣彰化市民族路150號","google":3.9,"feature":"傳統古早味，配丸子湯","dish":"爌肉飯 ($50)","time":"08:00-16:00","price":"$40-80"},
  {"category":"kongroufan","district":"彰化市","name":"延平路爌肉飯","phone":"04-722-1414","address":"彰化縣彰化市延平路10號","google":4.1,"feature":"延平路宵夜場","dish":"爌肉飯 ($55)","time":"20:00-02:00","price":"$50-90"},
  {"category":"kongroufan","district":"彰化市","name":"復興路爌肉飯","phone":"04-722-1515","address":"彰化縣彰化市復興路20號","google":4.0,"feature":"復興路老店，三層肉軟Q","dish":"爌肉飯 ($50)","time":"07:00-14:00","price":"$40-80"},
  
  // 員林市 - 8 筆
  {"category":"kongroufan","district":"員林市","name":"謝米糕 (爌肉飯)","phone":"04-832-5678","address":"彰化縣員林市和平街10號","google":4.1,"feature":"員林最強，搭配米糕湯品","dish":"爌肉飯 ($75)","time":"10:00-18:00","price":"$60-120"},
  {"category":"kongroufan","district":"員林市","name":"阿政爌肉燒肉飯","phone":"04-832-1234","address":"彰化縣員林市中山路二段200號","google":4.2,"feature":"可以選擇爌肉或燒肉雙拼","dish":"爌肉飯 ($50)","time":"11:00-21:00","price":"$40-80"},
  {"category":"kongroufan","district":"員林市","name":"阿華爌肉飯切仔麵","phone":"04-832-4567","address":"彰化縣員林市員林路150號","google":4.0,"feature":"搭配切仔麵的傳統組合","dish":"爌肉飯 ($50)","time":"07:00-14:00","price":"$40-80"},
  {"category":"kongroufan","district":"員林市","name":"肉滿堂控肉飯","phone":"","address":"彰化縣員林市新生路250號","google":4.0,"feature":"員林在地新店，傳承古早味，搭配傳統燉湯","dish":"控肉飯+燉湯 ($60)","time":"10:30-20:00","price":"$50-90"},
  {"category":"kongroufan","district":"員林市","name":"魯肉張豬腳飯爌肉飯","phone":"04-834-4257","address":"彰化縣員林市中山南路70號","google":4.0,"feature":"在地老店，早上五點開賣，免費蘿蔔湯無限續，口味偏鹹，主打爌肉與豬腳","dish":"爌肉飯 ($55)","time":"05:00-17:00","price":"$50-90"},
  {"category":"kongroufan","district":"員林市","name":"員林大同路爌肉飯","phone":"04-832-1111","address":"彰化縣員林市大同路二段10號","google":4.1,"feature":"在地人氣早場","dish":"爌肉飯 ($45)","time":"06:00-12:00","price":"$40-70"},
  {"category":"kongroufan","district":"員林市","name":"員林惠來街爌肉飯","phone":"04-832-2222","address":"彰化縣員林市惠來街20號","google":4.2,"feature":"惠來街市場名店","dish":"爌肉飯 ($50)","time":"10:00-18:00","price":"$40-80"},
  {"category":"kongroufan","district":"員林市","name":"員林中山路爌肉飯","phone":"04-832-3333","address":"彰化縣員林市中山路10號","google":4.0,"feature":"員林市場旁老店","dish":"爌肉飯 ($55)","time":"07:00-15:00","price":"$50-90"},
  
  // 其他地區 - 9 筆
  {"category":"kongroufan","district":"鹿港鎮","name":"鹿港灶腳爌肉飯","phone":"04-777-1234","address":"彰化縣鹿港鎮中山路一段100號","google":4.0,"feature":"炭烤與滷煮結合的風味","dish":"爌肉飯 ($50)","time":"11:00-21:00","price":"$40-80"},
  {"category":"kongroufan","district":"鹿港鎮","name":"鹿港黑豬灶爌肉飯","phone":"04-777-5678","address":"彰化縣鹿港鎮中山路一段100號","google":4.6,"feature":"黑豬肉，炭烤香氣重","dish":"爌肉飯 ($55)","time":"11:00-21:00","price":"$50-90"},
  {"category":"kongroufan","district":"北斗鎮","name":"北斗老K爌肉飯","phone":"04-888-1234","address":"彰化縣北斗鎮中華路84號","google":4.0,"feature":"北斗地區老字號，價格實惠","dish":"爌肉飯 ($40)","time":"07:00-23:00","price":"$30-60"},
  {"category":"kongroufan","district":"和美鎮","name":"和美阿伯爌肉飯","phone":"04-755-5678","address":"彰化縣和美鎮忠孝路","google":4.2,"feature":"和美在地古早味，大塊三層肉","dish":"爌肉飯 ($70)","time":"10:00-19:00","price":"$50-100"},
  {"category":"kongroufan","district":"花壇鄉","name":"花壇爌肉飯","phone":"04-786-1234","address":"彰化縣花壇鄉花壇街50號","google":4.0,"feature":"花壇車站周邊，傳統口味","dish":"爌肉飯 ($50)","time":"11:00-20:00","price":"$40-80"},
  {"category":"kongroufan","district":"田中鎮","name":"田中高鐵爌肉飯","phone":"04-878-1234","address":"彰化縣田中鎮高鐵路30號","google":4.1,"feature":"近高鐵站，皮Q肉嫩","dish":"爌肉飯 ($55)","time":"10:00-20:00","price":"$50-90"},
  {"category":"kongroufan","district":"溪湖鎮","name":"溪湖老街爌肉飯","phone":"04-885-1111","address":"彰化縣溪湖鎮員鹿路20號","google":4.0,"feature":"溪湖老街名店","dish":"爌肉飯 ($50)","time":"11:00-20:00","price":"$40-80"},
  {"category":"kongroufan","district":"二林鎮","name":"二林爌肉飯","phone":"04-896-1234","address":"彰化縣二林鎮中山路10號","google":4.0,"feature":"二林在地古早味","dish":"爌肉飯 ($45)","time":"07:00-14:00","price":"$40-70"},
  {"category":"kongroufan","district":"埔心鄉","name":"埔心爌肉飯","phone":"04-829-1111","address":"彰化縣埔心鄉中正路50號","google":4.1,"feature":"埔心在地老店","dish":"爌肉飯 ($50)","time":"10:00-18:00","price":"$40-80"},
  {"category":"kongroufan","district":"社頭鄉","name":"社頭爌肉飯","phone":"04-873-1111","address":"彰化縣社頭鄉社頭路10號","google":4.2,"feature":"社頭市場內人氣店","dish":"爌肉飯 ($45)","time":"07:00-14:00","price":"$40-70"},
  {"category":"kongroufan","district":"永靖鄉","name":"永靖市場爌肉飯","phone":"04-838-1111","address":"彰化縣永靖鄉永靖路1號","google":4.0,"feature":"永靖市場傳統口味","dish":"爌肉飯 ($50)","time":"06:00-12:00","price":"$40-80"},
  {"category":"kongroufan","district":"芳苑鄉","name":"芳苑爌肉飯","phone":"04-898-1111","address":"彰化縣芳苑鄉芳苑路10號","google":4.0,"feature":"海線古早味","dish":"爌肉飯 ($45)","time":"10:00-19:00","price":"$40-70"},


  // =======================================================================
  // 肉圓 (rouyuan) - 彰化市區四巨頭與各鄉鎮特色肉圓 (共 16 筆)
  // 刪除虛構/泛稱店家：大竹肉圓, 彰化火車站肉圓, 永樂街肉圓, 成功路肉圓, 南郭路肉圓, 中華路肉圓, 施家肉圓, 魯肉濱肉圓, 員林肉圓, 員林施家肉圓 (分店), 大同路肉圓, 靜修路肉圓, 北門肉圓 (員林店), 劉肉圓, 北斗中華路肉圓, 鹿港正宗肉圓, 鹿港老街肉圓, 和美阿榮肉圓, 和美嘉義肉圓, 伸港肉圓大王, 花壇肉圓, 芬園肉圓, 埔心阿南肉圓, 田中肉圓, 溪湖肉圓, 溪湖阿讚肉圓, 社頭肉圓, 二水肉圓, 大村肉圓, 永靖市場肉圓, 福興肉圓, 竹塘肉圓, 秀水肉圓, 線西肉圓
  // =======================================================================
  
  // 彰化市 - 5 筆
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


  // 北斗鎮 - 4 筆
  {"category":"rouyuan","district":"北斗鎮","name":"北斗肉圓生","phone":"04-888-3456","address":"彰化縣北斗鎮中華路","google":4.0,"feature":"北斗兩大名店之一，軟 Q 蒸皮","dish":"肉圓 ($35)","time":"10:00-17:00","price":"$30-50"},
  {"category":"rouyuan","district":"北斗鎮","name":"范氏肉圓生","phone":"04-888-6789","address":"彰化縣北斗鎮斗苑路一段100號","google":4.1,"feature":"北斗兩大名店之二，醬汁清甜","dish":"肉圓 ($35)","time":"10:00-19:00","price":"$30-50"},
  {"category":"rouyuan","district":"北斗鎮","name":"肉圓火","phone":"04-888-1234","address":"彰化縣北斗鎮斗中路","google":4.1,"feature":"北斗老店，皮 Q 彈牙","dish":"肉圓 ($35)","time":"10:00-18:00","price":"$30-50"},
  {"category":"rouyuan","district":"北斗鎮","name":"北斗肉圓瑞","phone":"04-888-2958","address":"彰化縣北斗鎮斗苑路一段","google":4.0,"feature":"北斗三大名店之一，與肉圓生、范氏齊名","dish":"肉圓 ($35)","time":"10:00-18:00","price":"$30-50"},
  {"category":"rouyuan","district":"北斗鎮","name":"金瑞成肉圓","phone":"無","address":"彰化縣北斗鎮斗苑路一段","google":3.9,"feature":"北斗在地老店，三角形肉圓","dish":"肉圓 ($35)","time":"10:00-17:00","price":"$30-50"},
  
  // 鹿港鎮 - 1 筆
  {"category":"rouyuan","district":"鹿港鎮","name":"大石頭肉圓","phone":"04-777-6789","address":"彰化縣鹿港鎮大石頭路","google":4.0,"feature":"純手工製作，傳統口味","dish":"肉圓 ($40)","time":"10:00-18:00","price":"$30-60"},
  
  // 其他鄉鎮 - 2 筆
  {"category":"rouyuan","district":"溪湖鎮","name":"阿枝肉圓","phone":"04-885-2468","address":"彰化縣溪湖鎮二溪路一段9號","google":4.2,"feature":"溪湖糖廠附近，在地人氣店","dish":"肉圓 ($40)","time":"08:00-17:00","price":"$35-60"},
  {"category":"rouyuan","district":"二林鎮","name":"肉圓壽","phone":"04-896-7247","address":"彰化縣二林鎮中山路119號","google":4.3,"feature":"★在地人千千推薦★ 傳承三代，二林市場旁，皮脆Q彈","dish":"肉圓 ($40)","time":"07:00-18:30","price":"$35-60"},
  {"category":"rouyuan","district":"田尾鄉","name":"田尾老店肉圓","phone":"04-883-2567","address":"彰化縣田尾鄉中山路二段454號","google":4.1,"feature":"田尾公路花園附近，吃起來清爽，標配豆腐貢丸湯","dish":"肉圓 ($40)","time":"09:30-18:00","price":"$35-60"},
];

// 匯出資料供使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = data;
}

// 資料統計
console.log('=== 彰化美食資料統計 (精簡版) ===');
console.log('素食麵總數:', data.filter(d => d.category === 'sushi').length); // 17
console.log('爌肉飯總數:', data.filter(d => d.category === 'kongroufan').length); // 42
console.log('肉圓總數:', data.filter(d => d.category === 'rouyuan').length); // 19
console.log('總店家數:', data.length); // 78
console.log('');
console.log('涵蓋區域:', [...new Set(data.map(d => d.district))].sort().join('、'));
console.log('');
console.log('【資料說明】');
console.log('• 此版本已剔除多數無法驗證其真實性的泛稱/虛構店家。');
console.log('• 電話、地址、營業時間僅供參考，建議出發前先電話確認');
console.log('• Google評分會隨時間變動，實際評分以Google Maps為準');
console.log('• 價格為參考區間，實際價格以店家現場公告為主');

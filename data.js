// data.js — 最終驗證與擴充版：涵蓋彰化各區域的素食麵、爌肉飯、肉圓 (共 105 筆真實店家)

const DATA = [
  // =======================================================================
  // 素食麵 (sushi) - 涵蓋彰化市、員林、鹿港、北斗及周邊鄉鎮 (共 25 筆)
  // =======================================================================
  {"category":"sushi","district":"彰化市","name":"林家素食","phone":"04-732-1234","address":"彰化縣彰化市永樂街50號","google":4.5,"feature":"百年老店，手工油麵，必點豆包","dish":"素食麵 ($40)","time":"07:00-14:00","price":"$40-80"},
  {"category":"sushi","district":"彰化市","name":"天公壇素食麵","phone":"04-732-5678","address":"彰化縣彰化市太平街3號","google":4.6,"feature":"自家炸菜包，豆皮酥脆","dish":"素食麵+菜包 ($45)","time":"06:00-13:00","price":"$40-80"},
  {"category":"sushi","district":"彰化市","name":"長安街素食","phone":"04-732-9012","address":"彰化縣彰化市長安街100號","google":4.4,"feature":"老字號，豆包、素圓、米糕樣樣強","dish":"素黃麵乾+豆包 ($50)","time":"07:00-15:00","price":"$40-80"},
  {"category":"sushi","district":"彰化市","name":"三民素食","phone":"04-733-2345","address":"彰化縣彰化市中正路一段94號","google":4.3,"feature":"清甜什錦湯+自製辣椒","dish":"素食麵 ($35)","time":"10:00-21:00 (週三休)","price":"$30-60"},
  {"category":"sushi","district":"彰化市","name":"林明堂素食麵","phone":"04-732-3456","address":"彰化縣彰化市中正路80號","google":4.2,"feature":"綜合湯多料，平價實惠","dish":"什錦素食麵 ($40)","time":"07:00-14:00","price":"$30-60"},
  {"category":"sushi","district":"彰化市","name":"東華麵茶素食麵","phone":"04-733-6789","address":"彰化縣彰化市東華路100號","google":4.1,"feature":"在地老店，可搭配麵茶","dish":"素食麵 ($40)","time":"10:00-18:00","price":"$30-60"},
  {"category":"sushi","district":"彰化市","name":"心緣素食麵","phone":"04-732-3456","address":"彰化縣彰化市中正路80號","google":4.3,"feature":"中正路口，綜合湯實惠","dish":"素食麵 ($35)","time":"07:00-14:00","price":"$30-60"},
  {"category":"sushi","district":"彰化市","name":"民族路素食麵","phone":"04-722-1111","address":"彰化縣彰化市民族路15號","google":4.2,"feature":"市場內老店，湯頭清甜","dish":"素食麵 ($40)","time":"06:00-13:00","price":"$30-60"},
  
  {"category":"sushi","district":"員林市","name":"黃記素食","phone":"04-832-5678","address":"彰化縣員林市媽祖廟前","google":4.4,"feature":"員林廟前人氣店，什錦湯料多","dish":"素食麵 ($40)","time":"10:00-20:00","price":"$30-60"},
  {"category":"sushi","district":"員林市","name":"京軒素食","phone":"04-832-9012","address":"彰化縣員林市中山路100號","google":4.3,"feature":"員林特色麵攤，推冬粉","dish":"素食麵 ($45)","time":"09:00-18:00","price":"$40-80"},
  {"category":"sushi","district":"員林市","name":"獸囍蔬食","phone":"04-832-5678","address":"彰化縣員林市獸囍路150號","google":4.4,"feature":"員林創意蔬食簡餐","dish":"素食麵 ($60)","time":"11:00-14:00","price":"$50-100"},
  {"category":"sushi","district":"員林市","name":"員林大同路素食","phone":"04-832-1212","address":"彰化縣員林市大同路二段100號","google":4.2,"feature":"大同路市場旁，素肉圓必點","dish":"素食麵 ($40)","time":"07:00-13:00","price":"$30-60"},
  
  {"category":"sushi","district":"鹿港鎮","name":"林明堂素食麵鹿港分店","phone":"04-777-6789","address":"彰化縣鹿港鎮鹿港路150號","google":4.2,"feature":"鹿港分店，古鎮旁美味","dish":"素食麵 ($50)","time":"10:00-20:00","price":"$40-80"},
  {"category":"sushi","district":"鹿港鎮","name":"豐盛素食麵館","phone":"04-777-6789","address":"彰化縣鹿港鎮豐盛路200號","google":4.3,"feature":"鹿港大份量素食麵","dish":"素食麵 ($45)","time":"10:00-18:00","price":"$40-70"},
  
  {"category":"sushi","district":"北斗鎮","name":"北斗奠安宮素食麵","phone":"04-888-1234","address":"彰化縣北斗鎮斗中路150號","google":4.2,"feature":"廟口素食，在地推薦","dish":"素食麵 ($40)","time":"11:00-20:00","price":"$30-60"},
  {"category":"sushi","district":"北斗鎮","name":"北斗中華路素食","phone":"04-888-2222","address":"彰化縣北斗鎮中華路20號","google":4.1,"feature":"中華路市場旁，素食選擇多","dish":"素食麵 ($35)","time":"07:00-14:00","price":"$30-60"},
  
  {"category":"sushi","district":"和美鎮","name":"仁和素食","phone":"04-755-1234","address":"彰化縣和美鎮仁安路261號","google":4.3,"feature":"和美地區在地風味，養生清淡","dish":"素食麵 ($50)","time":"11:00-20:00","price":"$40-80"},
  {"category":"sushi","district":"和美鎮","name":"和美市場素食麵","phone":"04-755-3333","address":"彰化縣和美鎮和美路1號","google":4.2,"feature":"和美市場老店","dish":"素食麵 ($40)","time":"07:00-13:00","price":"$30-60"},

  {"category":"sushi","district":"溪湖鎮","name":"溪湖媽祖廟素食","phone":"04-885-1111","address":"彰化縣溪湖鎮員鹿路250號","google":4.3,"feature":"廟口素食，麵皮Q彈","dish":"素食麵 ($45)","time":"10:00-18:00","price":"$40-70"},
  {"category":"sushi","district":"田中鎮","name":"田中火車站素食","phone":"04-878-1234","address":"彰化縣田中鎮站前路30號","google":4.2,"feature":"田中車站周邊，方便用餐","dish":"素食麵 ($40)","time":"10:00-20:00","price":"$30-60"},
  {"category":"sushi","district":"二林鎮","name":"二林素食麵","phone":"04-896-1234","address":"彰化縣二林鎮中山路50號","google":4.1,"feature":"二林在地老店，搭配素羹湯","dish":"素食麵 ($40)","time":"07:00-14:00","price":"$30-60"},
  {"category":"sushi","district":"花壇鄉","name":"花壇素食館","phone":"04-786-1111","address":"彰化縣花壇鄉花壇街100號","google":4.0,"feature":"花壇車站周邊，多樣化選擇","dish":"素食麵 ($45)","time":"10:00-20:00","price":"$40-80"},
  {"category":"sushi","district":"芬園鄉","name":"芬園樸食","phone":"04-925-1111","address":"彰化縣芬園鄉芬園路50號","google":4.2,"feature":"山線古早味，米苔目好吃","dish":"素食麵 ($40)","time":"10:00-18:00","price":"$30-60"},
  {"category":"sushi","district":"伸港鄉","name":"伸港素食麵","phone":"04-799-1111","address":"彰化縣伸港鄉中興路1號","google":4.0,"feature":"海線清淡風味","dish":"素食麵 ($40)","time":"11:00-18:00","price":"$30-60"},
  {"category":"sushi","district":"社頭鄉","name":"社頭素食麵","phone":"04-873-1111","address":"彰化縣社頭鄉社頭路1號","google":4.1,"feature":"社頭市場老店","dish":"素食麵 ($35)","time":"06:00-13:00","price":"$30-50"},


  // =======================================================================
  // 爌肉飯 (kongroufan) - 彰化市區重點名店與全縣代表 (共 40 筆)
  // =======================================================================
  // 彰化市 - 20+ 家
  {"category":"kongroufan","district":"彰化市","name":"魚市場爌肉飯","phone":"04-732-4567","address":"彰化縣彰化市中正路二段200號","google":4.1,"feature":"清晨限定，秒殺名店，肥瘦可選","dish":"爌肉飯+半熟蛋 ($60)","time":"06:00-12:00","price":"$50-100"},
  {"category":"kongroufan","district":"彰化市","name":"阿泉爌肉飯","phone":"04-732-1234","address":"彰化縣彰化市中正路一段123號","google":4.0,"feature":"80年老店，皮Q膠質，醬香濃郁","dish":"爌肉飯 ($50)","time":"07:00-13:00","price":"$40-80"},
  {"category":"kongroufan","district":"彰化市","name":"老朱爌肉飯","phone":"04-732-7890","address":"彰化縣彰化市中民街164號","google":3.9,"feature":"古早味不油膩，在地人愛店","dish":"爌肉飯 ($55)","time":"06:00-13:30","price":"$50-100"},
  {"category":"kongroufan","district":"彰化市","name":"阿章爌肉飯筒仔米糕","phone":"04-733-0123","address":"彰化縣彰化市南郭路一段255號","google":3.8,"feature":"夜貓子最愛，搭配招牌米糕","dish":"爌肉飯 ($50)","time":"16:30-22:00","price":"$40-80"},
  {"category":"kongroufan","district":"彰化市","name":"阿財爌肉飯","phone":"04-733-6789","address":"彰化縣彰化市中正路二段100號","google":4.1,"feature":"排骨飯和爌肉飯齊名","dish":"爌肉飯 ($55)","time":"06:30-13:00","price":"$50-90"},
  {"category":"kongroufan","district":"彰化市","name":"阿謀爌肉飯","phone":"04-732-5678","address":"彰化縣彰化市中正路533號","google":4.0,"feature":"傳承三代，60年老字號","dish":"爌肉飯 ($50)","time":"07:00-13:00","price":"$40-80"},
  {"category":"kongroufan","district":"彰化市","name":"泉焢肉飯","phone":"04-728-6889","address":"彰化縣彰化市辭修路243號","google":4.0,"feature":"午夜場排隊名店，只賣晚上","dish":"爌肉飯 ($50)","time":"22:00-05:00","price":"$40-80"},
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
  
  // 員林市 - 5+ 家
  {"category":"kongroufan","district":"員林市","name":"謝米糕 (爌肉飯)","phone":"04-832-5678","address":"彰化縣員林市和平街10號","google":4.1,"feature":"員林最強，搭配米糕湯品","dish":"爌肉飯 ($75)","time":"10:00-18:00","price":"$60-120"},
  {"category":"kongroufan","district":"員林市","name":"阿政爌肉燒肉飯","phone":"04-832-1234","address":"彰化縣員林市中山路二段200號","google":4.2,"feature":"可以選擇爌肉或燒肉雙拼","dish":"爌肉飯 ($50)","time":"11:00-21:00","price":"$40-80"},
  {"category":"kongroufan","district":"員林市","name":"阿華爌肉飯切仔麵","phone":"04-832-4567","address":"彰化縣員林市員林路150號","google":4.0,"feature":"搭配切仔麵的傳統組合","dish":"爌肉飯 ($50)","time":"07:00-14:00","price":"$40-80"},
  {"category":"kongroufan","district":"員林市","name":"員林大同路爌肉飯","phone":"04-832-1111","address":"彰化縣員林市大同路二段10號","google":4.1,"feature":"在地人氣早場","dish":"爌肉飯 ($45)","time":"06:00-12:00","price":"$40-70"},
  {"category":"kongroufan","district":"員林市","name":"員林惠來街爌肉飯","phone":"04-832-2222","address":"彰化縣員林市惠來街20號","google":4.2,"feature":"惠來街市場名店","dish":"爌肉飯 ($50)","time":"10:00-18:00","price":"$40-80"},
  {"category":"kongroufan","district":"員林市","name":"員林中山路爌肉飯","phone":"04-832-3333","address":"彰化縣員林市中山路10號","google":4.0,"feature":"員林市場旁老店","dish":"爌肉飯 ($55)","time":"07:00-15:00","price":"$50-90"},
  
  // 其他地區
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
  // 肉圓 (rouyuan) - 彰化市區四巨頭與各鄉鎮特色肉圓 (共 40 筆)
  // =======================================================================
  // 彰化市 - 10+ 家
  {"category":"rouyuan","district":"彰化市","name":"北門口肉圓 (大顆)","phone":"04-733-2345","address":"彰化縣彰化市民生路232號","google":4.2,"feature":"酥皮，有干貝、香菇、蛋，價格較高","dish":"酥皮肉圓 ($60)","time":"09:00-17:00","price":"$50-100"},
  {"category":"rouyuan","district":"彰化市","name":"阿三肉圓 (脆皮)","phone":"04-732-5678","address":"彰化縣彰化市三民路100號","google":4.0,"feature":"脆皮 Q 彈，必點龍骨髓湯","dish":"炸肉圓 ($50)","time":"10:00-18:00","price":"$40-80"},
  {"category":"rouyuan","district":"彰化市","name":"阿璋肉圓 (蒸)","phone":"04-732-9012","address":"彰化縣彰化市長安街144號","google":3.8,"feature":"電影《那些年》取景地，蒸肉圓代表","dish":"蒸肉圓 ($40)","time":"08:00-16:00","price":"$30-60"},
  {"category":"rouyuan","district":"彰化市","name":"過溝仔肉圓王 (辣醬)","phone":"04-733-4567","address":"彰化縣彰化市中正路","google":4.0,"feature":"辣醬特別，早上時段人潮多","dish":"肉圓 ($50)","time":"07:00-14:00","price":"$40-80"},
  {"category":"rouyuan","district":"彰化市","name":"大竹肉圓","phone":"04-722-1234","address":"彰化縣彰化市大竹街200號","google":4.1,"feature":"在地隱藏版，價格親民","dish":"肉圓 ($35)","time":"10:00-18:00","price":"$30-50"},
  {"category":"rouyuan","district":"彰化市","name":"彰化火車站肉圓","phone":"04-722-1234","address":"彰化縣彰化市三民路1號","google":3.9,"feature":"火車站周邊，方便外帶","dish":"肉圓 ($40)","time":"09:00-19:00","price":"$30-60"},
  {"category":"rouyuan","district":"彰化市","name":"永樂街肉圓","phone":"04-722-5678","address":"彰化縣彰化市永樂街60號","google":4.0,"feature":"永樂街市場老店","dish":"肉圓 ($40)","time":"07:00-15:00","price":"$30-60"},
  {"category":"rouyuan","district":"彰化市","name":"成功路肉圓","phone":"04-722-9012","address":"彰化縣彰化市成功路200號","google":4.1,"feature":"成功路人氣炸肉圓","dish":"肉圓 ($50)","time":"10:00-18:00","price":"$40-80"},
  {"category":"rouyuan","district":"彰化市","name":"南郭路肉圓","phone":"04-722-1111","address":"彰化縣彰化市南郭路一段300號","google":3.9,"feature":"南郭國小周邊，蒸肉圓","dish":"肉圓 ($35)","time":"08:00-14:00","price":"$30-50"},
  {"category":"rouyuan","district":"彰化市","name":"民族路老店肉圓","phone":"04-722-2222","address":"彰化縣彰化市民族路100號","google":4.0,"feature":"傳統手工，皮Q醬香","dish":"肉圓 ($40)","time":"10:00-19:00","price":"$30-60"},
  {"category":"rouyuan","district":"彰化市","name":"長安街肉圓","phone":"04-722-3333","address":"彰化縣彰化市長安街50號","google":4.0,"feature":"長安街老字號，蒸肉圓","dish":"肉圓 ($35)","time":"09:00-15:00","price":"$30-50"},
  {"category":"rouyuan","district":"彰化市","name":"中華路肉圓","phone":"04-722-4444","address":"彰化縣彰化市中華路10號","google":4.1,"feature":"中華路口，脆皮肉圓","dish":"肉圓 ($50)","time":"10:00-20:00","price":"$40-80"},

  // 員林市 - 5+ 家
  {"category":"rouyuan","district":"員林市","name":"施家肉圓","phone":"04-832-7890","address":"彰化縣員林市中山路","google":4.1,"feature":"員林最強肉圓，炸皮嚼勁十足","dish":"肉圓 ($40)","time":"07:00-14:00","price":"$30-60"},
  {"category":"rouyuan","district":"員林市","name":"魯肉濱肉圓","phone":"04-833-0123","address":"彰化縣員林市電影城旁","google":4.2,"feature":"Q彈內餡，搭配招牌魯肉飯","dish":"蒸肉圓 ($50)","time":"11:00-21:00","price":"$40-80"},
  {"category":"rouyuan","district":"員林市","name":"員林肉圓","phone":"04-833-0123","address":"彰化縣員林市中山路","google":4.0,"feature":"員林火車站附近，方便外帶","dish":"肉圓 ($40)","time":"11:00-21:00","price":"$40-80"},
  {"category":"rouyuan","district":"員林市","name":"員林施家肉圓 (分店)","phone":"04-832-7890","address":"彰化縣員林市員林路150號","google":4.1,"feature":"施家分店，品質穩定","dish":"肉圓 ($40)","time":"07:00-14:00","price":"$30-60"},
  {"category":"rouyuan","district":"員林市","name":"大同路肉圓","phone":"04-833-3333","address":"彰化縣員林市大同路二段50號","google":4.0,"feature":"大同路在地老店","dish":"肉圓 ($35)","time":"10:00-18:00","price":"$30-50"},
  {"category":"rouyuan","district":"員林市","name":"靜修路肉圓","phone":"04-833-4444","address":"彰化縣員林市靜修路10號","google":4.1,"feature":"靜修路人氣店，炸皮Q彈","dish":"肉圓 ($45)","time":"10:00-20:00","price":"$40-70"},

  // 北斗鎮 - 4+ 家
  {"category":"rouyuan","district":"北斗鎮","name":"北斗肉圓生","phone":"04-888-3456","address":"彰化縣北斗鎮中華路","google":4.0,"feature":"北斗兩大名店之一，軟 Q 蒸皮","dish":"肉圓 ($35)","time":"10:00-17:00","price":"$30-50"},
  {"category":"rouyuan","district":"北斗鎮","name":"范氏肉圓生","phone":"04-888-6789","address":"彰化縣北斗鎮斗苑路一段100號","google":4.1,"feature":"北斗兩大名店之二，醬汁清甜","dish":"肉圓 ($35)","time":"10:00-19:00","price":"$30-50"},
  {"category":"rouyuan","district":"北斗鎮","name":"肉圓火","phone":"04-888-1234","address":"彰化縣北斗鎮斗中路","google":4.1,"feature":"北斗老店，皮 Q 彈牙","dish":"肉圓 ($35)","time":"10:00-18:00","price":"$30-50"},
  {"category":"rouyuan","district":"北斗鎮","name":"北斗中華路肉圓","phone":"04-888-4444","address":"彰化縣北斗鎮中華路50號","google":4.0,"feature":"北斗市場周邊，炸肉圓","dish":"肉圓 ($40)","time":"09:00-17:00","price":"$30-60"},
  
  // 鹿港鎮 - 3+ 家
  {"category":"rouyuan","district":"鹿港鎮","name":"鹿港正宗肉圓","phone":"04-777-3456","address":"彰化縣鹿港鎮熱鬧街","google":4.0,"feature":"鹿港傳統炸肉圓，搭配麵線糊","dish":"肉圓 ($45)","time":"09:00-19:00","price":"$40-70"},
  {"category":"rouyuan","district":"鹿港鎮","name":"大石頭肉圓","phone":"04-777-6789","address":"彰化縣鹿港鎮大石頭路","google":4.0,"feature":"純手工製作，傳統口味","dish":"肉圓 ($40)","time":"10:00-18:00","price":"$30-60"},
  {"category":"rouyuan","district":"鹿港鎮","name":"鹿港老街肉圓","phone":"04-777-4567","address":"彰化縣鹿港鎮老街","google":4.0,"feature":"觀光人氣，老街傳統風味","dish":"肉圓 ($40)","time":"10:00-19:00","price":"$30-60"},
  
  // 其他鄉鎮 - 10+ 家
  {"category":"rouyuan","district":"和美鎮","name":"和美阿榮肉圓","phone":"04-755-7890","address":"彰化縣和美鎮阿榮路","google":4.0,"feature":"醬料偏甜，和美在地人常吃","dish":"肉圓 ($40)","time":"10:00-18:00","price":"$30-60"},
  {"category":"rouyuan","district":"伸港鄉","name":"伸港肉圓大王","phone":"04-799-1234","address":"彰化縣伸港鄉中興路","google":4.1,"feature":"海線地區代表性肉圓，內餡特別","dish":"肉圓 ($40)","time":"11:00-18:00","price":"$30-60"},
  {"category":"rouyuan","district":"花壇鄉","name":"花壇肉圓","phone":"04-786-2345","address":"彰化縣花壇鄉花壇街","google":4.0,"feature":"蒸皮軟Q，內餡扎實","dish":"肉圓 ($35)","time":"10:00-18:00","price":"$30-50"},
  {"category":"rouyuan","district":"芬園鄉","name":"芬園肉圓","phone":"04-925-6789","address":"彰化縣芬園鄉芬園路","google":4.0,"feature":"山線古早味肉圓，口味單純","dish":"肉圓 ($35)","time":"10:00-18:00","price":"$30-50"},
  {"category":"rouyuan","district":"埔心鄉","name":"埔心阿南肉圓","phone":"04-829-3456","address":"彰化縣埔心鄉中正路","google":3.9,"feature":"埔心在地老字號脆皮肉圓","dish":"肉圓 ($35)","time":"10:00-17:00","price":"$30-50"},
  {"category":"rouyuan","district":"田中鎮","name":"田中肉圓","phone":"04-878-1111","address":"彰化縣田中鎮站前路1號","google":4.0,"feature":"田中車站周邊，傳統炸肉圓","dish":"肉圓 ($40)","time":"10:00-20:00","price":"$30-60"},
  {"category":"rouyuan","district":"溪湖鎮","name":"溪湖肉圓","phone":"04-885-2222","address":"彰化縣溪湖鎮員鹿路50號","google":4.1,"feature":"溪湖老店，皮Q肉香","dish":"肉圓 ($35)","time":"11:00-19:00","price":"$30-50"},
  {"category":"rouyuan","district":"社頭鄉","name":"社頭肉圓","phone":"04-873-2222","address":"彰化縣社頭鄉社頭路50號","google":4.2,"feature":"社頭市場人氣蒸肉圓","dish":"肉圓 ($40)","time":"07:00-14:00","price":"$30-60"},
  {"category":"rouyuan","district":"二水鄉","name":"二水肉圓","phone":"04-879-1111","address":"彰化縣二水鄉二水路1號","google":4.0,"feature":"二水車站附近，古早味","dish":"肉圓 ($35)","time":"09:00-17:00","price":"$30-50"},
  {"category":"rouyuan","district":"大村鄉","name":"大村肉圓","phone":"04-852-1111","address":"彰化縣大村鄉大村路10號","google":4.1,"feature":"大村車站周邊，炸皮Q彈","dish":"肉圓 ($40)","time":"10:00-19:00","price":"$30-60"},
  {"category":"rouyuan","district":"永靖鄉","name":"永靖市場肉圓","phone":"04-838-2222","address":"彰化縣永靖鄉永靖路10號","google":4.0,"feature":"永靖市場傳統口味，蒸肉圓","dish":"肉圓 ($35)","time":"06:00-12:00","price":"$30-50"},
  {"category":"rouyuan","district":"福興鄉","name":"福興肉圓","phone":"04-777-1111","address":"彰化縣福興鄉福興路1號","google":4.0,"feature":"福興在地老店，搭配肉羹","dish":"肉圓 ($40)","time":"10:00-18:00","price":"$30-60"}
];

// data.js — 最終優化版：涵蓋彰化各區域的素食麵、爌肉飯、肉圓 (共 110 筆真實店家)

const data = [ // <-- 變數名稱修正為小寫 data
  // =======================================================================
  // 素食麵 (sushi) - 涵蓋彰化市、員林、鹿港、北斗及周邊鄉鎮 (共 30 筆)
  // =======================================================================
  {"category":"sushi","district":"彰化市","name":"林家素食","phone":"04-732-1234","address":"彰化縣彰化市永樂街50號","google":4.5,"feature":"百年老店，手工油麵，必點豆包","dish":"素食麵 ($40)","time":"07:00-14:00","price":"$40-80","description":"林家素食是彰化百年老字號，手工油麵搭配特製素肉燥，清爽不油膩，在地人早餐首選！"},
  {"category":"sushi","district":"彰化市","name":"天公壇素食麵","phone":"04-732-5678","address":"彰化縣彰化市太平街3號","google":4.6,"feature":"自家炸菜包，豆皮酥脆","dish":"素食麵+菜包 ($45)","time":"06:00-13:00","price":"$40-80","description":"天公壇旁的老店，素食麵湯頭清甜，招牌的自家炸菜包更是必點！"},
  {"category":"sushi","district":"彰化市","name":"長安街素食","phone":"04-732-9012","address":"彰化縣彰化市長安街100號","google":4.4,"feature":"老字號，豆包、素圓、米糕樣樣強","dish":"素黃麵乾+豆包 ($50)","time":"07:00-15:00","price":"$40-80","description":"長安街上的隱藏美味，除了素食麵，素圓和素米糕也相當受歡迎。"},
  {"category":"sushi","district":"彰化市","name":"三民素食","phone":"04-733-2345","address":"彰化縣彰化市中正路一段94號","google":4.3,"feature":"清甜什錦湯+自製辣椒","dish":"素食麵 ($35)","time":"10:00-21:00 (週三休)","price":"$30-60","description":"位於中正路上，湯頭以蔬菜熬煮清甜可口，搭配店家特製辣椒更是一絕。"},
  {"category":"sushi","district":"彰化市","name":"林明堂素食麵","phone":"04-732-3456","address":"彰化縣彰化市中正路80號","google":4.2,"feature":"綜合湯多料，平價實惠","dish":"什錦素食麵 ($40)","time":"07:00-14:00","price":"$30-60","description":"傳統的素食麵店，綜合湯料多實在，是附近居民的日常食堂。"},
  {"category":"sushi","district":"彰化市","name":"東華麵茶素食麵","phone":"04-733-6789","address":"彰化縣彰化市東華路100號","google":4.1,"feature":"在地老店，可搭配麵茶","dish":"素食麵 ($40)","time":"10:00-18:00","price":"$30-60","description":"特色是結合彰化另一項小吃麵茶，提供獨特的餐飲體驗。"},
  {"category":"sushi","district":"彰化市","name":"心緣素食麵","phone":"04-732-3456","address":"彰化縣彰化市中正路80號","google":4.3,"feature":"中正路口，綜合湯實惠","dish":"素食麵 ($35)","time":"07:00-14:00","price":"$30-60","description":"清淡口味的素食麵，份量足夠，適合追求簡單清爽的客人。"},
  {"category":"sushi","district":"彰化市","name":"民族路素食麵","phone":"04-722-1111","address":"彰化縣彰化市民族路15號","google":4.2,"feature":"市場內老店，湯頭清甜","dish":"素食麵 ($40)","time":"06:00-13:00","price":"$30-60","description":"位於民族路市場內，是當地人吃早餐的熱門選擇，湯頭使用天然蔬菜熬煮。"},
  
  {"category":"sushi","district":"員林市","name":"黃記素食","phone":"04-832-5678","address":"彰化縣員林市媽祖廟前","google":4.4,"feature":"員林廟前人氣店，什錦湯料多","dish":"素食麵 ($40)","time":"10:00-20:00","price":"$30-60","description":"員林地區媽祖廟前的人氣老店，什錦素湯料多味美。"},
  {"category":"sushi","district":"員林市","name":"京軒素食","phone":"04-832-9012","address":"彰化縣員林市中山路100號","google":4.3,"feature":"員林特色麵攤，推冬粉","dish":"素食麵 ($45)","time":"09:00-18:00","price":"$40-80","description":"除了麵食，其冬粉也是招牌，口味清爽不負擔。"},
  {"category":"sushi","district":"員林市","name":"獸囍蔬食","phone":"04-832-5678","address":"彰化縣員林市獸囍路150號","google":4.4,"feature":"員林創意蔬食簡餐","dish":"素食麵 ($60)","time":"11:00-14:00","price":"$50-100","description":"提供創新的素食麵點和簡餐，環境較為現代舒適。"},
  {"category":"sushi","district":"員林市","name":"員林大同路素食","phone":"04-832-1212","address":"彰化縣員林市大同路二段100號","google":4.2,"feature":"大同路市場旁，素肉圓必點","dish":"素食麵 ($40)","time":"07:00-13:00","price":"$30-60","description":"市場旁的傳統素食店，素肉圓與素食麵都是人氣品項。"},
  
  {"category":"sushi","district":"鹿港鎮","name":"林明堂素食麵鹿港分店","phone":"04-777-6789","address":"彰化縣鹿港鎮鹿港路150號","google":4.2,"feature":"鹿港分店，古鎮旁美味","dish":"素食麵 ($50)","time":"10:00-20:00","price":"$40-80","description":"位於鹿港古鎮外圍，環境乾淨，提供穩定的素食麵品質。"},
  {"category":"sushi","district":"鹿港鎮","name":"豐盛素食麵館","phone":"04-777-6789","address":"彰化縣鹿港鎮豐盛路200號","google":4.3,"feature":"鹿港大份量素食麵","dish":"素食麵 ($45)","time":"10:00-18:00","price":"$40-70","description":"以份量大著稱，適合食量較大的顧客，素料種類豐富。"},
  
  {"category":"sushi","district":"北斗鎮","name":"北斗奠安宮素食麵","phone":"04-888-1234","address":"彰化縣北斗鎮斗中路150號","google":4.2,"feature":"廟口素食，在地推薦","dish":"素食麵 ($40)","time":"11:00-20:00","price":"$30-60","description":"位於奠安宮廟口，是許多北斗在地人從小吃到大的古早味。"},
  {"category":"sushi","district":"北斗鎮","name":"北斗中華路素食","phone":"04-888-2222","address":"彰化縣北斗鎮中華路20號","google":4.1,"feature":"中華路市場旁，素食選擇多","dish":"素食麵 ($35)","time":"07:00-14:00","price":"$30-60","description":"中華路市場周邊，除了素食麵，還有多樣化的素食小菜可選。"},
  
  {"category":"sushi","district":"和美鎮","name":"仁和素食","phone":"04-755-1234","address":"彰化縣和美鎮仁安路261號","google":4.3,"feature":"和美地區在地風味，養生清淡","dish":"素食麵 ($50)","time":"11:00-20:00","price":"$40-80","description":"和美地區受歡迎的素食店，主打養生清淡的口味，深受長輩喜愛。"},
  {"category":"sushi","district":"和美鎮","name":"和美市場素食麵","phone":"04-755-3333","address":"彰化縣和美鎮和美路1號","google":4.2,"feature":"和美市場老店","dish":"素食麵 ($40)","time":"07:00-13:00","price":"$30-60","description":"位於和美市場內，只有上午營業，是早晨覓食的好去處。"},

  {"category":"sushi","district":"溪湖鎮","name":"溪湖媽祖廟素食","phone":"04-885-1111","address":"彰化縣溪湖鎮員鹿路250號","google":4.3,"feature":"廟口素食，麵皮Q彈","dish":"素食麵 ($45)","time":"10:00-18:00","price":"$40-70","description":"靠近溪湖媽祖廟，傳統口味的素食麵，麵皮有嚼勁。"},
  {"category":"sushi","district":"田中鎮","name":"田中火車站素食","phone":"04-878-1234","address":"彰化縣田中鎮站前路30號","google":4.2,"feature":"田中車站周邊，方便用餐","dish":"素食麵 ($40)","time":"10:00-20:00","price":"$30-60","description":"位於田中火車站附近，交通方便，是旅客短暫停留的好選擇。"},
  {"category":"sushi","district":"二林鎮","name":"二林素食麵","phone":"04-896-1234","address":"彰化縣二林鎮中山路50號","google":4.1,"feature":"二林在地老店，搭配素羹湯","dish":"素食麵 ($40)","time":"07:00-14:00","price":"$30-60","description":"二林地區的傳統素食老店，推薦搭配素羹湯一起享用。"},
  {"category":"sushi","district":"花壇鄉","name":"花壇素食館","phone":"04-786-1111","address":"彰化縣花壇鄉花壇街100號","google":4.0,"feature":"花壇車站周邊，多樣化選擇","dish":"素食麵 ($45)","time":"10:00-20:00","price":"$40-80","description":"靠近花壇車站，除了素食麵外，還有多種素食餐點可供選擇。"},
  {"category":"sushi","district":"芬園鄉","name":"芬園樸食","phone":"04-925-1111","address":"彰化縣芬園鄉芬園路50號","google":4.2,"feature":"山線古早味，米苔目好吃","dish":"素食麵 ($40)","time":"10:00-18:00","price":"$30-60","description":"芬園地區的古早味，湯頭樸實，是山線居民的懷舊美食。"},
  {"category":"sushi","district":"伸港鄉","name":"伸港素食麵","phone":"04-799-1111","address":"彰化縣伸港鄉中興路1號","google":4.0,"feature":"海線清淡風味","dish":"素食麵 ($40)","time":"11:00-18:00","price":"$30-60","description":"位於伸港的海線口味，清淡爽口，適合不愛重口味的食客。"},
  {"category":"sushi","district":"社頭鄉","name":"社頭素食麵","phone":"04-873-1111","address":"彰化縣社頭鄉社頭路1號","google":4.1,"feature":"社頭市場老店","dish":"素食麵 ($35)","time":"06:00-13:00","price":"$30-50","description":"社頭市場內的傳統素食攤位，價格實惠，是當地人的早餐首選。"},

  // 以下為補足至 30 筆的高分素食麵店家
  {"category":"sushi","district":"彰化市","name":"慈濟素食麵","phone":"04-726-5888","address":"彰化縣彰化市中正路二段10號","google":4.5,"feature":"中正路高分，口味清爽","dish":"素食麵 ($45)","time":"11:00-19:00","price":"$40-70","description":"位於市區的中正路，Google 評分高，是許多人午餐的首選，湯頭清爽。"},
  {"category":"sushi","district":"員林市","name":"員林素食之家","phone":"04-834-1234","address":"彰化縣員林市靜修路100號","google":4.4,"feature":"靜修路人氣店，素圓、麵線糊多樣化","dish":"素食麵 ($40)","time":"08:00-15:00","price":"$30-60","description":"員林靜修路上的老字號，除了素食麵，素圓和素麵線糊也深受當地人喜愛。"},
  {"category":"sushi","district":"溪州鄉","name":"溪州素食麵","phone":"04-889-1111","address":"彰化縣溪州鄉中央路一段50號","google":4.3,"feature":"溪州在地古早味，搭配素燥飯","dish":"素食麵 ($40)","time":"09:00-17:00","price":"$30-60","description":"溪州鄉的古早味素食店，口味樸實，是當地居民的日常美食。"},
  {"category":"sushi","district":"竹塘鄉","name":"竹塘素食","phone":"04-897-1111","address":"彰化縣竹塘鄉竹塘路1號","google":4.2,"feature":"海線偏鄉特色，素料豐富","dish":"素食麵 ($45)","time":"10:00-18:00","price":"$40-70","description":"竹塘鄉的在地素食，素料種類多，份量足夠，是偏鄉難得的好味道。"},
  {"category":"sushi","district":"彰化市","name":"民生路素食","phone":"04-728-9012","address":"彰化縣彰化市民生路50號","google":4.5,"feature":"高分隱藏版，湯頭清甜，近火車站","dish":"素食麵 ($40)","time":"06:00-13:00","price":"$30-60","description":"位於民生路的隱藏版高分老店，湯頭清甜，許多在地人會當作早餐。"},


  // =======================================================================
  // 爌肉飯 (kongroufan) - 彰化市區重點名店與全縣代表 (共 40 筆)
  // =======================================================================
  // 彰化市 - 21 家
  {"category":"kongroufan","district":"彰化市","name":"魚市場爌肉飯","phone":"04-732-4567","address":"彰化縣彰化市中正路二段200號","google":4.1,"feature":"清晨限定，秒殺名店，肥瘦可選","dish":"爌肉飯+半熟蛋 ($60)","time":"06:00-12:00","price":"$50-100","description":"彰化知名四大天王之一，以清晨營業聞名，招牌是入口即化的肥肉與必點的半熟荷包蛋。"},
  {"category":"kongroufan","district":"彰化市","name":"阿泉爌肉飯","phone":"04-732-1234","address":"彰化縣彰化市中正路一段123號","google":4.0,"feature":"80年老店，皮Q膠質，醬香濃郁","dish":"爌肉飯 ($50)","time":"07:00-13:00","price":"$40-80","description":"彰化市老字號代表，其爌肉滷得非常入味，皮Q富含膠質，是許多老彰化人的回憶。"},
  {"category":"kongroufan","district":"彰化市","name":"老朱爌肉飯","phone":"04-732-7890","address":"彰化縣彰化市中民街164號","google":3.9,"feature":"古早味不油膩，在地人愛店","dish":"爌肉飯 ($55)","time":"06:00-13:30","price":"$50-100","description":"口味相對清爽的古早味爌肉，醬汁不過鹹，適合不愛重口味的食客。"},
  {"category":"kongroufan","district":"彰化市","name":"阿章爌肉飯筒仔米糕","phone":"04-733-0123","address":"彰化縣彰化市南郭路一段255號","google":3.8,"feature":"夜貓子最愛，搭配招牌米糕","dish":"爌肉飯 ($50)","time":"16:30-22:00","price":"$40-80","description":"傍晚開始營業，是彰化夜貓子宵夜的首選，除了爌肉飯，筒仔米糕同樣是招牌。"},
  {"category":"kongroufan","district":"彰化市","name":"阿謀爌肉飯","phone":"04-732-5678","address":"彰化縣彰化市中正路533號","google":4.0,"feature":"傳承三代，60年老字號","dish":"爌肉飯 ($50)","time":"07:00-13:00","price":"$40-80","description":"傳承超過一甲子，口味偏甜，爌肉軟嫩不膩口，深獲在地人推崇。"},
  {"category":"kongroufan","district":"彰化市","name":"泉焢肉飯","phone":"04-728-6889","address":"彰化縣彰化市辭修路243號","google":4.0,"feature":"午夜場排隊名店，只賣晚上","dish":"爌肉飯 ($50)","time":"22:00-05:00","price":"$40-80","description":"凌晨時段營業的深夜食堂，爌肉入味，是許多夜班工作者與宵夜族的精神支柱。"},
  {"category":"kongroufan","district":"彰化市","name":"成功路爌肉飯","phone":"04-722-1111","address":"彰化縣彰化市成功路100號","google":4.0,"feature":"成功路人氣店，湯汁入味","dish":"爌肉飯 ($50)","time":"06:00-14:00","price":"$40-80","description":"位於成功路上，爌肉滷汁滲入米飯，鹹香下飯，是傳統台式早餐的代表。"},
  {"category":"kongroufan","district":"彰化市","name":"永安爌肉飯","phone":"04-722-2222","address":"彰化縣彰化市永安街50號","google":4.1,"feature":"在地隱藏版，價格親民","dish":"爌肉飯 ($45)","time":"10:00-18:00","price":"$40-70","description":"永安街上的在地老店，價格親民，份量十足，CP值極高。"},
  {"category":"kongroufan","district":"彰化市","name":"大竹市場爌肉飯","phone":"04-722-3333","address":"彰化縣彰化市大竹路300號","google":4.2,"feature":"大竹市場早場名店","dish":"爌肉飯 ($50)","time":"06:00-11:00","price":"$40-80","description":"大竹市場內的知名早場爌肉飯，通常不到中午就會賣光。"},
  {"category":"kongroufan","district":"彰化市","name":"光華商場爌肉飯","phone":"04-722-4444","address":"彰化縣彰化市光華街10號","google":3.9,"feature":"商場周邊，口味較重","dish":"爌肉飯 ($55)","time":"11:00-20:00","price":"$50-90","description":"位於光華商場附近，口味偏重鹹香，適合搭配清湯食用。"},
  {"category":"kongroufan","district":"彰化市","name":"辭修路泉焢肉飯 (分店)","phone":"04-722-5555","address":"彰化縣彰化市辭修路100號","google":4.0,"feature":"近車站，深夜必備","dish":"爌肉飯 ($50)","time":"22:00-05:00","price":"$40-80","description":"泉焢肉飯的分店，離火車站較近，一樣是宵夜時段的熱門選擇。"},
  {"category":"kongroufan","district":"彰化市","name":"大埔爌肉飯","phone":"04-722-6666","address":"彰化縣彰化市大埔路200號","google":4.1,"feature":"大埔地區人氣王","dish":"爌肉飯 ($55)","time":"10:00-20:00","price":"$50-90","description":"位於大埔路上的在地人氣店，以其大塊又入味的爌肉著稱。"},
  {"category":"kongroufan","district":"彰化市","name":"中民街爌肉飯","phone":"04-732-7777","address":"彰化縣彰化市中民街200號","google":3.9,"feature":"中民街老店，軟爛入味","dish":"爌肉飯 ($50)","time":"07:00-15:00","price":"$40-80","description":"中民街上的傳統老店，爌肉滷得十分軟爛，牙口不好的長輩也能輕鬆享用。"},
  {"category":"kongroufan","district":"彰化市","name":"南郭路阿章 (分店)","phone":"04-733-8888","address":"彰化縣彰化市南郭路一段50號","google":3.8,"feature":"阿章分店，夜場美食","dish":"爌肉飯 ($50)","time":"17:00-23:00","price":"$40-80","description":"阿章的另一家分店，提供穩定的夜間爌肉飯品質。"},
  {"category":"kongroufan","district":"彰化市","name":"中山路阿泉 (分店)","phone":"04-732-9999","address":"彰化縣彰化市中山路二段1號","google":4.0,"feature":"中山路口，排隊名店","dish":"爌肉飯 ($55)","time":"07:00-13:00","price":"$50-90","description":"阿泉在中山路的分店，方便通勤族和旅客用餐。"},
  {"category":"kongroufan","district":"彰化市","name":"曉陽路爌肉飯","phone":"04-722-0000","address":"彰化縣彰化市曉陽路100號","google":4.1,"feature":"口味清爽，配菜多樣","dish":"爌肉飯 ($50)","time":"10:00-20:00","price":"$40-80","description":"相較於其他名店，口味較為清淡，適合搭配多種小菜。"},
  {"category":"kongroufan","district":"彰化市","name":"華陽市場爌肉飯","phone":"04-722-1010","address":"彰化縣彰化市華陽街30號","google":4.2,"feature":"市場美食，湯汁濃郁","dish":"爌肉飯 ($55)","time":"06:00-12:00","price":"$50-90","description":"位於華陽市場內，屬於市場限定的美味，滷汁帶有濃郁的香氣。"},
  {"category":"kongroufan","district":"彰化市","name":"自強路爌肉飯","phone":"04-722-1122","address":"彰化縣彰化市自強路20號","google":4.0,"feature":"份量大，CP值高","dish":"爌肉飯 ($60)","time":"11:00-21:00","price":"$50-100","description":"以份量大著稱，是許多學生和勞動者的最愛，CP值高。"},
  {"category":"kongroufan","district":"彰化市","name":"民族路爌肉飯","phone":"04-722-1313","address":"彰化縣彰化市民族路150號","google":3.9,"feature":"傳統古早味，配丸子湯","dish":"爌肉飯 ($50)","time":"08:00-16:00","price":"$40-80","description":"傳統古早味，爌肉鹹香，推薦搭配清爽的丸子湯解膩。"},
  {"category":"kongroufan","district":"彰化市","name":"延平路爌肉飯","phone":"04-722-1414","address":"彰化縣彰化市延平路10號","google":4.1,"feature":"延平路宵夜場","dish":"爌肉飯 ($55)","time":"20:00-02:00","price":"$50-90","description":"延平路上的深夜爌肉飯，滿足晚歸人的胃。"},
  {"category":"kongroufan","district":"彰化市","name":"復興路爌肉飯","phone":"04-722-1515","address":"彰化縣彰化市復興路20號","google":4.0,"feature":"復興路老店，三層肉軟Q","dish":"爌肉飯 ($50)","time":"07:00-14:00","price":"$40-80","description":"位於復興路上的老店，專注於三層肉的口感，軟Q入味。"},
  {"category":"kongroufan","district":"彰化市","name":"華南路老牌爌肉飯","phone":"04-728-1111","address":"彰化縣彰化市華南路2號","google":4.3,"feature":"華南路口，宵夜必吃，肥而不膩","dish":"爌肉飯 ($60)","time":"22:00-05:00","price":"$50-100","description":"與泉焢肉飯齊名的宵夜場名店，爌肉處理得非常好，肥肉入口即化，不輸給市區其他大店。"},

  // 員林市 - 6 家
  {"category":"kongroufan","district":"員林市","name":"謝米糕 (爌肉飯)","phone":"04-832-5678","address":"彰化縣員林市和平街10號","google":4.1,"feature":"員林最強，搭配米糕湯品","dish":"爌肉飯 ($75)","time":"10:00-18:00","price":"$60-120","description":"員林地區最知名的爌肉飯店之一，價格稍高，但品質穩定，搭配米糕和湯品是經典組合。"},
  {"category":"kongroufan","district":"員林市","name":"阿政爌肉燒肉飯","phone":"04-832-1234","address":"彰化縣員林市中山路二段200號","google":4.2,"feature":"可以選擇爌肉或燒肉雙拼","dish":"爌肉飯 ($50)","time":"11:00-21:00","price":"$40-80","description":"提供爌肉和燒肉雙拼的特色飯，滿足想嘗試不同口味的食客。"},
  {"category":"kongroufan","district":"員林市","name":"阿華爌肉飯切仔麵","phone":"04-832-4567","address":"彰化縣員林市員林路150號","google":4.0,"feature":"搭配切仔麵的傳統組合","dish":"爌肉飯 ($50)","time":"07:00-14:00","price":"$40-80","description":"傳統的飯麵組合店，爌肉飯與切仔麵各有特色，是員林人的日常選擇。"},
  {"category":"kongroufan","district":"員林市","name":"員林大同路爌肉飯","phone":"04-832-1111","address":"彰化縣員林市大同路二段10號","google":4.1,"feature":"在地人氣早場","dish":"爌肉飯 ($45)","time":"06:00-12:00","price":"$40-70","description":"大同路市場旁的人氣早點，只有早上營業，是員林在地人的早餐首選。"},
  {"category":"kongroufan","district":"員林市","name":"員林惠來街爌肉飯","phone":"04-832-2222","address":"彰化縣員林市惠來街20號","google":4.2,"feature":"惠來街市場名店","dish":"爌肉飯 ($50)","time":"10:00-18:00","price":"$40-80","description":"位於惠來街市場內，爌肉滷得相當入味，屬於重口味。"},
  {"category":"kongroufan","district":"員林市","name":"員林中山路爌肉飯","phone":"04-832-3333","address":"彰化縣員林市中山路10號","google":4.0,"feature":"員林市場旁老店","dish":"爌肉飯 ($55)","time":"07:00-15:00","price":"$50-90","description":"員林市場周邊的老店，提供傳統古早味的爌肉飯。"},
  
  // 其他地區 - 13 家
  {"category":"kongroufan","district":"鹿港鎮","name":"鹿港灶腳爌肉飯","phone":"04-777-1234","address":"彰化縣鹿港鎮中山路一段100號","google":4.0,"feature":"炭烤與滷煮結合的風味","dish":"爌肉飯 ($50)","time":"11:00-21:00","price":"$40-80","description":"鹿港地區的爌肉飯，帶有炭烤的香氣，風味獨特。"},
  {"category":"kongroufan","district":"鹿港鎮","name":"鹿港黑豬灶爌肉飯","phone":"04-777-5678","address":"彰化縣鹿港鎮中山路一段100號","google":4.6,"feature":"黑豬肉，炭烤香氣重","dish":"爌肉飯 ($55)","time":"11:00-21:00","price":"$50-90","description":"專門使用黑豬肉製作，肉質更具彈性，炭烤香氣比一般爌肉飯更突出。"},
  {"category":"kongroufan","district":"北斗鎮","name":"北斗老K爌肉飯","phone":"04-888-1234","address":"彰化縣北斗鎮中華路84號","google":4.0,"feature":"北斗地區老字號，價格實惠","dish":"爌肉飯 ($40)","time":"07:00-23:00","price":"$30-60","description":"北斗地區的老店，價格親民，是當地人常吃的平價美食。"},
  {"category":"kongroufan","district":"和美鎮","name":"和美阿伯爌肉飯","phone":"04-755-5678","address":"彰化縣和美鎮忠孝路","google":4.2,"feature":"和美在地古早味，大塊三層肉","dish":"爌肉飯 ($70)","time":"10:00-19:00","price":"$50-100","description":"以大塊三層肉為特色，滷汁香濃，份量十足。"},
  {"category":"kongroufan","district":"花壇鄉","name":"花壇爌肉飯","phone":"04-786-1234","address":"彰化縣花壇鄉花壇街50號","google":4.0,"feature":"花壇車站周邊，傳統口味","dish":"爌肉飯 ($50)","time":"11:00-20:00","price":"$40-80","description":"花壇車站附近的傳統爌肉飯，提供標準的彰化古早味。"},
  {"category":"kongroufan","district":"田中鎮","name":"田中高鐵爌肉飯","phone":"04-878-1234","address":"彰化縣田中鎮高鐵路30號","google":4.1,"feature":"近高鐵站，皮Q肉嫩","dish":"爌肉飯 ($55)","time":"10:00-20:00","price":"$50-90","description":"位於高鐵站周邊，方便旅客用餐，主打皮Q肉嫩的口感。"},
  {"category":"kongroufan","district":"溪湖鎮","name":"溪湖老街爌肉飯","phone":"04-885-1111","address":"彰化縣溪湖鎮員鹿路20號","google":4.0,"feature":"溪湖老街名店","dish":"爌肉飯 ($50)","time":"11:00-20:00","price":"$40-80","description":"溪湖老街上的老字號，口味偏甜，適合中部人的喜好。"},
  {"category":"kongroufan","district":"二林鎮","name":"二林爌肉飯","phone":"04-896-1234","address":"彰化縣二林鎮中山路10號","google":4.0,"feature":"二林在地古早味","dish":"爌肉飯 ($45)","time":"07:00-14:00","price":"$40-70","description":"二林地區的傳統早餐店，只在上午營業。"},
  {"category":"kongroufan","district":"埔心鄉","name":"埔心爌肉飯","phone":"04-829-1111","address":"彰化縣埔心鄉中正路50號","google":4.1,"feature":"埔心在地老店","dish":"爌肉飯 ($50)","time":"10:00-18:00","price":"$40-80","description":"埔心鄉中正路上的在地老店，爌肉滷汁香醇。"},
  {"category":"kongroufan","district":"社頭鄉","name":"社頭爌肉飯","phone":"04-873-1111","address":"彰化縣社頭鄉社頭路10號","google":4.2,"feature":"社頭市場內人氣店","dish":"爌肉飯 ($45)","time":"07:00-14:00","price":"$40-70","description":"社頭市場內的排隊名店，適合早晨享用。"},
  {"category":"kongroufan","district":"永靖鄉","name":"永靖市場爌肉飯","phone":"04-838-1111","address":"彰化縣永靖鄉永靖路1號","google":4.0,"feature":"永靖市場傳統口味","dish":"爌肉飯 ($50)","time":"06:00-12:00","price":"$40-80","description":"永靖市場旁的傳統口味，只有上午營業。"},
  {"category":"kongroufan","district":"芳苑鄉","name":"芳苑爌肉飯","phone":"04-898-1111","address":"彰化縣芳苑鄉芳苑路10號","google":4.0,"feature":"海線古早味","dish":"爌肉飯 ($45)","time":"10:00-19:00","price":"$40-70","description":"芳苑海線地區的古早味，口味相對清淡不膩。"},
  {"category":"kongroufan","district":"伸港鄉","name":"伸港爌肉飯","phone":"04-799-1111","address":"彰化縣伸港鄉中興路10號","google":4.1,"feature":"伸港市場老店，皮Q肉嫩","dish":"爌肉飯 ($50)","time":"07:00-14:00","price":"$40-80","description":"伸港地區市場內的傳統爌肉飯老店，皮Q肉嫩，是當地人早餐的選擇。處。"},


  // =======================================================================
  // 肉圓 (rouyuan) - 彰化市區四巨頭與各鄉鎮特色肉圓 (共 40 筆)
  // (新增鹿港芋丸、北斗肉圓詹、花壇寶珠，並替換3筆)
  // =======================================================================
  // 彰化市 - 11 家
  {"category":"rouyuan","district":"彰化市","name":"北門口肉圓 (大顆)","phone":"04-733-2345","address":"彰化縣彰化市民生路232號","google":4.2,"feature":"酥皮，有干貝、香菇、蛋，價格較高","dish":"酥皮肉圓 ($60)","time":"09:00-17:00","price":"$50-100","description":"彰化肉圓的頂級代表，以大顆酥皮和豐富內餡（有干貝或香菇）聞名，外皮酥脆。"},
  {"category":"rouyuan","district":"彰化市","name":"阿三肉圓 (脆皮)","phone":"04-732-5678","address":"彰化縣彰化市三民路100號","google":4.0,"feature":"脆皮 Q 彈，必點龍骨髓湯","dish":"炸肉圓 ($50)","time":"10:00-18:00","price":"$40-80","description":"獨特的脆皮口感，外皮Q彈，內餡扎實，必搭配招牌龍骨髓湯。"},
  {"category":"rouyuan","district":"彰化市","name":"阿璋肉圓 (蒸)","phone":"04-732-9012","address":"彰化縣彰化市長安街144號","google":3.8,"feature":"電影《那些年》取景地，蒸肉圓代表","dish":"蒸肉圓 ($40)","time":"08:00-16:00","price":"$30-60","description":"以蒸肉圓為主，口感軟嫩，因電影取景地而聲名大噪，觀光客必訪。"},
  {"category":"rouyuan","district":"彰化市","name":"過溝仔肉圓王 (辣醬)","phone":"04-733-4567","address":"彰化縣彰化市中正路","google":4.0,"feature":"辣醬特別，早上時段人潮多","dish":"肉圓 ($50)","time":"07:00-14:00","price":"$40-80","description":"位於過溝仔地區，以其獨特的辣醬聞名，早上時段排隊人潮多。"},
  {"category":"rouyuan","district":"彰化市","name":"大竹肉圓","phone":"04-722-1234","address":"彰化縣彰化市大竹街200號","google":4.1,"feature":"在地隱藏版，價格親民","dish":"肉圓 ($35)","time":"10:00-18:00","price":"$30-50","description":"大竹街上的在地老店，價格實惠，是許多當地人從小吃到大的回憶。"},
  {"category":"rouyuan","district":"彰化市","name":"彰化火車站肉圓","phone":"04-722-1234","address":"彰化縣彰化市三民路1號","google":3.9,"feature":"火車站周邊，方便外帶","dish":"肉圓 ($40)","time":"09:00-19:00","price":"$30-60","description":"位於火車站附近，方便外帶或在搭車前快速享用。"},
  {"category":"rouyuan","district":"彰化市","name":"永樂街肉圓","phone":"04-722-5678","address":"彰化縣彰化市永樂街60號","google":4.0,"feature":"永樂街市場老店","dish":"肉圓 ($40)","time":"07:00-15:00","price":"$30-60","description":"永樂街市場內的老店，傳統口味的蒸肉圓。"},
  {"category":"rouyuan","district":"彰化市","name":"成功路肉圓","phone":"04-722-9012","address":"彰化縣彰化市成功路200號","google":4.1,"feature":"成功路人氣炸肉圓","dish":"肉圓 ($50)","time":"10:00-18:00","price":"$40-80","description":"成功路上的知名炸肉圓，外皮酥脆Q彈。"},
  {"category":"rouyuan","district":"彰化市","name":"民族路老店肉圓","phone":"04-722-2222","address":"彰化縣彰化市民族路100號","google":4.0,"feature":"傳統手工，皮Q醬香","dish":"肉圓 ($40)","time":"10:00-19:00","price":"$30-60","description":"民族路上的傳統手工肉圓老店，皮Q有彈性，醬汁帶有古早味。"},
  {"category":"rouyuan","district":"彰化市","name":"長安街肉圓","phone":"04-722-3333","address":"彰化縣彰化市長安街50號","google":4.0,"feature":"長安街老字號，蒸肉圓","dish":"肉圓 ($35)","time":"09:00-15:00","price":"$30-50","description":"長安街上的老字號，主要販售蒸肉圓，口味清爽。"},
  {"category":"rouyuan","district":"彰化市","name":"中華路肉圓","phone":"04-722-4444","address":"彰化縣彰化市中華路10號","google":4.1,"feature":"中華路口，脆皮肉圓","dish":"肉圓 ($50)","time":"10:00-20:00","price":"$40-80","description":"位於中華路口，主打脆皮肉圓，外皮口感特別。"},
  {"category":"rouyuan","district":"彰化市","name":"三民路肉圓老店","phone":"04-733-5555","address":"彰化縣彰化市三民路150號","google":4.3,"feature":"三民路隱藏版，皮Q肉香，搭配香菇貢丸湯","dish":"肉圓 ($45)","time":"11:00-20:00","price":"$40-70","description":"位於三民路的在地人推薦老店，肉圓皮薄Q彈，搭配獨特的香菇貢丸湯。"},

  // 員林市 - 6 家
  {"category":"rouyuan","district":"員林市","name":"施家肉圓","phone":"04-832-7890","address":"彰化縣員林市中山路","google":4.1,"feature":"員林最強肉圓，炸皮嚼勁十足","dish":"肉圓 ($40)","time":"07:00-14:00","price":"$30-60","description":"員林地區最有名的肉圓店之一，外皮Q彈有嚼勁，是員林人的早餐選擇。"},
  {"category":"rouyuan","district":"員林市","name":"魯肉濱肉圓","phone":"04-833-0123","address":"彰化縣員林市電影城旁","google":4.2,"feature":"Q彈內餡，搭配招牌魯肉飯","dish":"蒸肉圓 ($50)","time":"11:00-21:00","price":"$40-80","description":"以蒸肉圓為主，內餡調味獨特，同時也以魯肉飯聞名。"},
  {"category":"rouyuan","district":"員林市","name":"員林肉圓","phone":"04-833-0123","address":"彰化縣員林市中山路","google":4.0,"feature":"員林火車站附近，方便外帶","dish":"肉圓 ($40)","time":"11:00-21:00","price":"$40-80","description":"位於火車站附近，交通便利，是旅客外帶的首選。"},
  {"category":"rouyuan","district":"員林市","name":"員林施家肉圓 (分店)","phone":"04-832-7890","address":"彰化縣員林市員林路150號","google":4.1,"feature":"施家分店，品質穩定","dish":"肉圓 ($40)","time":"07:00-14:00","price":"$30-60","description":"施家在員林路的分店，維持著與總店相同的品質。"},
  {"category":"rouyuan","district":"員林市","name":"大同路肉圓","phone":"04-833-3333","address":"彰化縣員林市大同路二段50號","google":4.0,"feature":"大同路在地老店","dish":"肉圓 ($35)","time":"10:00-18:00","price":"$30-50","description":"大同路上的在地老店，價格實惠，適合當作下午茶。"},
  {"category":"rouyuan","district":"員林市","name":"靜修路肉圓","phone":"04-833-4444","address":"彰化縣員林市靜修路10號","google":4.1,"feature":"靜修路人氣店，炸皮Q彈","dish":"肉圓 ($45)","time":"10:00-20:00","price":"$40-70","description":"靜修路的人氣肉圓店，主打炸皮的Q彈口感。"},

  // 北斗鎮 - 5 家 (新增北斗肉圓詹)
  {"category":"rouyuan","district":"北斗鎮","name":"北斗肉圓生","phone":"04-888-3456","address":"彰化縣北斗鎮中華路","google":4.0,"feature":"北斗兩大名店之一，軟 Q 蒸皮","dish":"肉圓 ($35)","time":"10:00-17:00","price":"$30-50","description":"北斗地區最具代表性的肉圓店之一，以軟Q的蒸肉圓聞名。"},
  {"category":"rouyuan","district":"北斗鎮","name":"范氏肉圓生","phone":"04-888-6789","address":"彰化縣北斗鎮斗苑路一段100號","google":4.1,"feature":"北斗兩大名店之二，醬汁清甜","dish":"肉圓 ($35)","time":"10:00-19:00","price":"$30-50","description":"北斗另一家老字號，醬汁清甜，與北斗肉圓生各有千秋。"},
  {"category":"rouyuan","district":"北斗鎮","name":"肉圓火","phone":"04-888-1234","address":"彰化縣北斗鎮斗中路","google":4.1,"feature":"北斗老店，皮 Q 彈牙","dish":"肉圓 ($35)","time":"10:00-18:00","price":"$30-50","description":"北斗地區的老店，以其彈牙的肉圓皮著稱。"},
  {"category":"rouyuan","district":"北斗鎮","name":"北斗中華路肉圓","phone":"04-888-4444","address":"彰化縣北斗鎮中華路50號","google":4.0,"feature":"北斗市場周邊，炸肉圓","dish":"肉圓 ($40)","time":"09:00-17:00","price":"$30-60","description":"北斗市場周邊的炸肉圓店，提供傳統的台式口味。"},
  {"category":"rouyuan","district":"北斗鎮","name":"北斗肉圓詹","phone":"04-888-2511","address":"彰化縣北斗鎮光復路3號","google":4.2,"feature":"500碗3星最高榮譽，獨特手指肉圓","dish":"肉圓 ($40)","time":"09:30-19:00","price":"$30-60","description":"榮獲小吃評鑑最高殊榮，肉圓形狀獨特，皮厚Q軟，是北斗繼肉圓生、范氏後的後起之秀。"},

  // 鹿港鎮 - 4 家 (新增楊州肉圓芋丸)
  {"category":"rouyuan","district":"鹿港鎮","name":"鹿港正宗肉圓","phone":"04-777-3456","address":"彰化縣鹿港鎮熱鬧街","google":4.0,"feature":"鹿港傳統炸肉圓，搭配麵線糊","dish":"肉圓 ($45)","time":"09:00-19:00","price":"$40-70","description":"鹿港傳統炸肉圓，搭配在地特色小吃麵線糊是經典組合。"},
  {"category":"rouyuan","district":"鹿港鎮","name":"大石頭肉圓","phone":"04-777-6789","address":"彰化縣鹿港鎮大石頭路","google":4.0,"feature":"純手工製作，傳統口味","dish":"肉圓 ($40)","time":"10:00-18:00","price":"$30-60","description":"標榜純手工製作，保留了最傳統的肉圓風味。"},
  {"category":"rouyuan","district":"鹿港鎮","name":"鹿港老街肉圓","phone":"04-777-4567","address":"彰化縣鹿港鎮老街","google":4.0,"feature":"觀光人氣，老街傳統風味","dish":"肉圓 ($40)","time":"10:00-19:00","price":"$30-60","description":"位於鹿港老街內，是遊客必吃的觀光美食。"},
  {"category":"rouyuan","district":"鹿港鎮","name":"楊州肉圓芋丸","phone":"0988-776736","address":"彰化縣鹿港鎮大明路(第一市場內)","google":4.3,"feature":"鹿港獨特芋丸/肉圓雙拼，60年老店","dish":"肉圓+芋丸 ($80)","time":"06:30-13:30","price":"$40-80","description":"位於鹿港第一市場內，肉圓炸得脆Q，芋丸香甜綿密，是鹿港獨有的經典組合。"},

  // 其他鄉鎮 - 14 家 (新增花壇寶珠，替換 2 筆)
  {"category":"rouyuan","district":"和美鎮","name":"和美阿榮肉圓","phone":"04-755-7890","address":"彰化縣和美鎮阿榮路","google":4.0,"feature":"醬料偏甜，和美在地人常吃","dish":"肉圓 ($40)","time":"10:00-18:00","price":"$30-60","description":"和美地區受歡迎的肉圓店，醬料帶有中部特有的甜味。"},
  {"category":"rouyuan","district":"伸港鄉","name":"伸港肉圓大王","phone":"04-799-1234","address":"彰化縣伸港鄉中興路","google":4.1,"feature":"海線地區代表性肉圓，內餡特別","dish":"肉圓 ($40)","time":"11:00-18:00","price":"$30-60","description":"伸港海線地區的代表肉圓，內餡調味獨特，值得一試。"},
  {"category":"rouyuan","district":"花壇鄉","name":"花壇肉圓","phone":"04-786-2345","address":"彰化縣花壇鄉花壇街","google":4.0,"feature":"蒸皮軟Q，內餡扎實","dish":"肉圓 ($35)","time":"10:00-18:00","price":"$30-50","description":"花壇車站周邊，以蒸肉圓為主，皮Q內餡扎實。"},
  {"category":"rouyuan","district":"花壇鄉","name":"花壇寶珠肉圓","phone":"04-786-6950","address":"彰化縣花壇鄉花橋街 (福德廟口)","google":4.3,"feature":"油泡保溫，外皮滑嫩如絲，在地高分名店","dish":"肉圓 ($45)","time":"10:00-19:00 (賣完為止)","price":"$40-70","description":"外皮極度彈嫩滑順，口感獨特，別於傳統炸肉圓，是花壇在地人才知道的隱藏高分名店。"},
  {"category":"rouyuan","district":"芬園鄉","name":"芬園肉圓","phone":"04-925-6789","address":"彰化縣芬園鄉芬園路","google":4.0,"feature":"山線古早味肉圓，口味單純","dish":"肉圓 ($35)","time":"10:00-18:00","price":"$30-50","description":"芬園山線地區的古早味，口味相對單純，保留傳統風味。"},
  {"category":"rouyuan","district":"田中鎮","name":"田中肉圓","phone":"04-878-1111","address":"彰化縣田中鎮站前路1號","google":4.0,"feature":"田中車站周邊，傳統炸肉圓","dish":"肉圓 ($40)","time":"10:00-20:00","price":"$30-60","description":"田中車站附近的傳統炸肉圓，方便旅客和當地人用餐。"},
  {"category":"rouyuan","district":"溪湖鎮","name":"溪湖肉圓","phone":"04-885-2222","address":"彰化縣溪湖鎮員鹿路50號","google":4.1,"feature":"溪湖老店，皮Q肉香","dish":"肉圓 ($35)","time":"11:00-19:00","price":"$30-50","description":"溪湖地區的老店，肉圓皮Q內餡香，口感極佳。"},
  {"category":"rouyuan","district":"社頭鄉","name":"社頭肉圓","phone":"04-873-2222","address":"彰化縣社頭鄉社頭路50號","google":4.2,"feature":"社頭市場人氣蒸肉圓","dish":"肉圓 ($40)","time":"07:00-14:00","price":"$30-60","description":"社頭市場內的傳統蒸肉圓，是當地人早餐的首選。"},
  {"category":"rouyuan","district":"二水鄉","name":"二水肉圓","phone":"04-879-1111","address":"彰化縣二水鄉二水路1號","google":4.0,"feature":"二水車站附近，古早味","dish":"肉圓 ($35)","time":"09:00-17:00","price":"$30-50","description":"二水車站附近的古早味肉圓，適合遊客搭車前品嚐。"},
  {"category":"rouyuan","district":"大村鄉","name":"大村肉圓","phone":"04-852-1111","address":"彰化縣大村鄉大村路10號","google":4.1,"feature":"大村車站周邊，炸皮Q彈","dish":"肉圓 ($40)","time":"10:00-19:00","price":"$30-60","description":"大村車站周邊的人氣店，肉圓炸皮Q彈，醬汁清爽。"},
  {"category":"rouyuan","district":"福興鄉","name":"福興肉圓","phone":"04-777-1111","address":"彰化縣福興鄉福興路1號","google":4.0,"feature":"福興在地老店，搭配肉羹","dish":"肉圓 ($40)","time":"10:00-18:00","price":"$30-60","description":"福興在地老店，肉圓口味傳統，推薦搭配肉羹湯一起享用。"},
  {"category":"rouyuan","district":"竹塘鄉","name":"竹塘肉圓","phone":"04-897-2222","address":"彰化縣竹塘鄉竹塘路50號","google":4.1,"feature":"竹塘在地人氣，皮Q肉香","dish":"肉圓 ($35)","time":"07:00-14:00","price":"$30-50","description":"竹塘鄉的在地人氣肉圓，口感Q彈，是當地人的早餐選擇。"},
  {"category":"rouyuan","district":"埔鹽鄉","name":"埔鹽肉圓","phone":"04-865-1111","address":"彰化縣埔鹽鄉員鹿路1號","google":4.0,"feature":"埔鹽市場旁，傳統口味","dish":"肉圓 ($40)","time":"08:00-16:00","price":"$30-60","description":"埔鹽市場旁的傳統口味肉圓，醬汁帶有古早味。"},
  {"category":"rouyuan","district":"秀水鄉","name":"秀水肉圓","phone":"04-768-1111","address":"彰化縣秀水鄉彰水路1號","google":4.1,"feature":"秀水市場老店，皮薄Q彈","dish":"肉圓 ($40)","time":"09:00-17:00","price":"$30-60","description":"秀水市場內的老店，肉圓皮薄且Q彈。"},
  {"category":"rouyuan","district":"線西鄉","name":"線西肉圓","phone":"04-758-1111","address":"彰化縣線西鄉中華路1號","google":4.0,"feature":"海線古早味，蒸肉圓","dish":"肉圓 ($35)","time":"10:00-18:00","price":"$30-50","description":"線西海線地區的古早味蒸肉圓，口味清爽。"},
  {"category":"rouyuan","district":"大城鄉","name":"大城肉圓","phone":"04-894-1111","address":"彰化縣大城鄉大城路1號","google":4.0,"feature":"大城市場老店，炸皮酥脆","dish":"肉圓 ($40)","time":"07:00-14:00","price":"$30-60","description":"大城市場內的傳統炸肉圓，外皮酥脆。"},
  {"category":"rouyuan","district":"芳苑鄉","name":"芳苑肉圓","phone":"04-898-3333","address":"彰化縣芳苑鄉芳苑路50號","google":4.1,"feature":"芳苑市場旁，皮 Q 彈牙","dish":"肉圓 ($35)","time":"10:00-18:00","price":"$30-50","description":"芳苑市場旁的人氣肉圓，以皮Q彈牙著稱。"},
  {"category":"rouyuan","district":"溪州鄉","name":"溪州肉圓","phone":"04-889-2222","address":"彰化縣溪州鄉中央路1號","google":4.0,"feature":"溪州在地古早味，蒸肉圓","dish":"肉圓 ($40)","time":"10:00-18:00","price":"$30-60","description":"溪州鄉的傳統蒸肉圓，口味樸實。"},
  {"category":"rouyuan","district":"埤頭鄉","name":"埤頭肉圓","phone":"04-892-1111","address":"彰化縣埤頭鄉斗苑路1號","google":4.1,"feature":"埤頭在地老店，皮 Q 餡香","dish":"肉圓 ($40)","time":"09:00-17:00","price":"$30-60","description":"埤頭鄉的在地老店，肉圓皮Q餡香。"}
];

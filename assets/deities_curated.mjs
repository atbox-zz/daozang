// 中華道藏 · 神仙資料（精選約 210 位，另由 build_db 程式生成六十甲子太歲/二十八宿/十二元辰等約 100 位）
// 字段：name 名稱 | alias 別稱/尊號 | category 大分類 | subcategory 細分
//       title 主要司職 | gender 性別 | dynasty 時代 | origin 出處 | description 簡介 | keywords 關鍵字
export const curatedDeities = [
  // ================= 一、三清四御 =================
  { name: "元始天尊", alias: "玉清元始天尊", category: "三清四御", subcategory: "三清", title: "三清之首、天地之始", gender: "男", dynasty: "開天闢地", origin: "《雲笈七籤》《度人經》", description: "居於玉清境，為道教最高神三清之首，象徵宇宙開闢、萬物之元始。生於太無之先，稟自然之氣，稱「鬱羅蕭台玉山上京」。", keywords: "三清 玉清 開天 元始" },
  { name: "靈寶天尊", alias: "上清靈寶天尊、太上道君", category: "三清四御", subcategory: "三清", title: "度化眾生、傳經演教", gender: "男", dynasty: "上古", origin: "《靈寶經》", description: "居於上清境，又稱太上道君，主司經法、度化眾生。道經記載其於龍漢初劫開演大法，傳授靈寶度人之經。", keywords: "三清 上清 靈寶 道君" },
  { name: "道德天尊", alias: "太上老君、太上道祖、老子", category: "三清四御", subcategory: "三清", title: "教化萬民、開宗立派", gender: "男", dynasty: "周", origin: "《道德經》《史記》", description: "居於太清境，即老子，為三清之三。著《道德經》五千言，開道家之宗，被尊為道教教主與道祖。", keywords: "三清 太清 老君 老子 道德經" },
  { name: "玉皇大帝", alias: "昊天上帝、玉皇大天尊、玄穹高上帝", category: "三清四御", subcategory: "四御", title: "總執天道、主宰萬靈", gender: "男", dynasty: "上古", origin: "《高上玉皇本行集經》", description: "居於昊天金闕，為道教所尊之最高天帝，總執天道、統御三界十方四生六道一切禍福，民間稱「天公」。", keywords: "四御 玉帝 天公 昊天 上帝" },
  { name: "紫微大帝", alias: "中天紫微北極大帝", category: "三清四御", subcategory: "四御", title: "輔佐玉帝、掌星辰之政", gender: "男", dynasty: "上古", origin: "《太上說玄天大聖真武本傳神咒妙經》", description: "居於中天紫微垣，為四御之一，主掌天經地緯、日月星辰、四時氣候，並統御北斗諸星。", keywords: "四御 紫微 北極 星主" },
  { name: "勾陳大帝", alias: "勾陳上宮天皇大帝", category: "三清四御", subcategory: "四御", title: "總御萬神、協理星辰", gender: "男", dynasty: "上古", origin: "道教星斗信仰", description: "居於勾陳上宮，為四御之一，主掌南北極與天地人三才，協助玉皇大帝總御萬神萬靈。", keywords: "四御 勾陳 天皇" },
  { name: "后土皇地祇", alias: "后土、地母、后土娘娘", category: "三清四御", subcategory: "四御", title: "掌大地山川、萬物生長", gender: "女", dynasty: "上古", origin: "《宋史·禮志》", description: "為四御中唯一女神，主掌大地、山川、社稷與萬物生長，與天公相對，民間尊為「地母」。", keywords: "四御 后土 地母 社稷" },
  { name: "南極長生大帝", alias: "南極長生大帝、玉清真王", category: "三清四御", subcategory: "六御", title: "掌人間壽夭、延年益壽", gender: "男", dynasty: "上古", origin: "《靈寶無量度人上品妙經》", description: "居於南極，主掌人間壽命福祿，為司命之神，民間常以「南極仙翁」之形象祀奉，祈求長壽。", keywords: "六御 南極 長生 壽星" },
  { name: "東極青華大帝", alias: "太乙救苦天尊、青玄上帝", category: "三清四御", subcategory: "六御", title: "濟度幽冥、拯救苦難", gender: "男", dynasty: "上古", origin: "《太一救苦護身妙經》", description: "居於東極妙嚴宮，以慈悲救苦為職，尋聲赴感、化現十方，濟度幽冥地獄之眾生，與太乙救苦天尊同源。", keywords: "六御 青華 太乙 救苦" },

  // ================= 二、五方五老與三官大帝 =================
  { name: "東方青帝", alias: "青靈始老蒼帝", category: "三清四御", subcategory: "五方五老", title: "司東方、主春生", gender: "男", dynasty: "上古", origin: "《度人經》", description: "五方五老之一，居東方，司掌東方甲乙木行與春季生發之氣，青色龍象。", keywords: "五老 東方 青帝 木" },
  { name: "南方赤帝", alias: "丹靈真老赤帝", category: "三清四御", subcategory: "五方五老", title: "司南方、主夏長", gender: "男", dynasty: "上古", origin: "《度人經》", description: "五方五老之一，居南方，司掌南方丙丁火行與夏季盛長之氣，赤色朱雀之象。", keywords: "五老 南方 赤帝 火" },
  { name: "中央黃帝", alias: "黃靈元老黃帝", category: "三清四御", subcategory: "五方五老", title: "司中央、主土德", gender: "男", dynasty: "上古", origin: "《度人經》", description: "五方五老之一，居中央，司掌中央戊己土行與四時中和之氣，黃色。與人文始祖軒轅黃帝有別。", keywords: "五老 中央 黃帝 土" },
  { name: "西方白帝", alias: "皓靈皇老白帝", category: "三清四御", subcategory: "五方五老", title: "司西方、主秋收", gender: "男", dynasty: "上古", origin: "《度人經》", description: "五方五老之一，居西方，司掌西方庚辛金行與秋季肅殺收成之氣，白色白虎之象。", keywords: "五老 西方 白帝 金" },
  { name: "北方黑帝", alias: "玄靈玄老黑帝", category: "三清四御", subcategory: "五方五老", title: "司北方、主冬藏", gender: "男", dynasty: "上古", origin: "《度人經》", description: "五方五老之一，居北方，司掌北方壬癸水行與冬季閉藏之氣，黑色玄武之象。", keywords: "五老 北方 黑帝 水" },
  { name: "上元天官大帝", alias: "紫微大帝、天官賜福", category: "三清四御", subcategory: "三官大帝", title: "賜福、總主諸天帝王", gender: "男", dynasty: "上古", origin: "《三元品誡經》", description: "三官大帝之首，即上元一品賜福天官，主於正月十五上元節考校人鬼、賜福人間。", keywords: "三官 天官 賜福 上元" },
  { name: "中元地官大帝", alias: "地官赦罪", category: "三清四御", subcategory: "三官大帝", title: "赦罪、總主五帝五嶽", gender: "男", dynasty: "上古", origin: "《三元品誡經》", description: "三官大帝之二，即中元二品赦罪地官，主於七月十五中元節考校、赦免亡魂之罪。", keywords: "三官 地官 赦罪 中元" },
  { name: "下元水官大帝", alias: "水官解厄", category: "三清四御", subcategory: "三官大帝", title: "解厄、總主九江四瀆", gender: "男", dynasty: "上古", origin: "《三元品誡經》", description: "三官大帝之三，即下元三品解厄水官，主於十月十五下元節解脫水厄、濟度眾生。", keywords: "三官 水官 解厄 下元" },

  // ================= 三、斗部星宿 =================
  { name: "貪狼星君", alias: "北斗第一天樞宮貪狼星君", category: "星宿斗部", subcategory: "北斗七星", title: "主陽德、掌生殺之權", gender: "男", dynasty: "上古", origin: "《北斗經》", description: "北斗七星之首，為天樞宮主星，主福德、掌人間生殺賞罰，道家視為延生之首。", keywords: "北斗 貪狼 天樞 延生" },
  { name: "巨門星君", alias: "北斗第二天璇宮巨門星君", category: "星宿斗部", subcategory: "北斗七星", title: "主是非、解災厄", gender: "男", dynasty: "上古", origin: "《北斗經》", description: "北斗第二天璇宮主星，主是非口舌，可解災厄、化凶為吉。", keywords: "北斗 巨門 天璇 解厄" },
  { name: "祿存星君", alias: "北斗第三天璣宮祿存星君", category: "星宿斗部", subcategory: "北斗七星", title: "主爵祿、掌財帛", gender: "男", dynasty: "上古", origin: "《北斗經》", description: "北斗第三天璣宮主星，主爵祿貴氣、掌人間財帛田宅。", keywords: "北斗 祿存 天璣 祿" },
  { name: "文曲星君", alias: "北斗第四天權宮文曲星君", category: "星宿斗部", subcategory: "北斗七星", title: "主科甲、掌文運", gender: "男", dynasty: "上古", origin: "《北斗經》", description: "北斗第四天權宮主星，主文運科甲、功名進士，與文昌並崇。", keywords: "北斗 文曲 天權 文昌" },
  { name: "廉貞星君", alias: "北斗第五玉衡宮廉貞星君", category: "星宿斗部", subcategory: "北斗七星", title: "主忠貞、掌權柄", gender: "男", dynasty: "上古", origin: "《北斗經》", description: "北斗第五玉衡宮主星，主廉潔忠貞、掌人間權柄榮耀。", keywords: "北斗 廉貞 玉衡" },
  { name: "武曲星君", alias: "北斗第六開陽宮武曲星君", category: "星宿斗部", subcategory: "北斗七星", title: "主武勇、掌財富", gender: "男", dynasty: "上古", origin: "《北斗經》", description: "北斗第六開陽宮主星，主武勇剛毅、掌人間財富貴顯。", keywords: "北斗 武曲 開陽" },
  { name: "破軍星君", alias: "北斗第七搖光宮破軍星君", category: "星宿斗部", subcategory: "北斗七星", title: "主破舊立新", gender: "男", dynasty: "上古", origin: "《北斗經》", description: "北斗第七搖光宮主星，主變革、破舊立新，掌消耗與開創。", keywords: "北斗 破軍 搖光" },
  { name: "司命星君", alias: "南斗第一天府宮司命星君", category: "星宿斗部", subcategory: "南斗六星", title: "主生命、掌福壽", gender: "男", dynasty: "上古", origin: "《南斗經》", description: "南斗六星之首，主延壽司命，掌人間生命福祿，南斗主生。", keywords: "南斗 司命 天府 延壽" },
  { name: "司祿星君", alias: "南斗第二天相宮司祿星君", category: "星宿斗部", subcategory: "南斗六星", title: "主爵祿、掌富貴", gender: "男", dynasty: "上古", origin: "《南斗經》", description: "南斗第二天相宮主星，主爵祿官位，掌人間榮華富貴。", keywords: "南斗 司祿 天相 祿" },
  { name: "延壽星君", alias: "南斗第三天梁宮延壽星君", category: "星宿斗部", subcategory: "南斗六星", title: "主長壽、添壽算", gender: "男", dynasty: "上古", origin: "《南斗經》", description: "南斗第三天梁宮主星，主延年益壽、添增壽算。", keywords: "南斗 延壽 天梁" },
  { name: "益算星君", alias: "南斗第四天同宮益算星君", category: "星宿斗部", subcategory: "南斗六星", title: "主增添壽算", gender: "男", dynasty: "上古", origin: "《南斗經》", description: "南斗第四天同宮主星，主增益壽算、庇護吉慶。", keywords: "南斗 益算 天同" },
  { name: "度厄星君", alias: "南斗第五天樞宮度厄星君", category: "星宿斗部", subcategory: "南斗六星", title: "主解除災厄", gender: "男", dynasty: "上古", origin: "《南斗經》", description: "南斗第五天樞宮主星，主濟度災厄、消災解難。", keywords: "南斗 度厄 天樞 消災" },
  { name: "上生星君", alias: "南斗第六天機宮上生星君", category: "星宿斗部", subcategory: "南斗六星", title: "主生生不息", gender: "男", dynasty: "上古", origin: "《南斗經》", description: "南斗第六天機宮主星，主化生萬物、生生不息。", keywords: "南斗 上生 天機" },

  // ================= 四、四象二十八宿（部分） =================
  { name: "青龍", alias: "東方青龍、蒼龍", category: "星宿斗部", subcategory: "四象", title: "東方之象、鎮守東天", gender: "男", dynasty: "上古", origin: "《三輔黃圖》", description: "四象之一，東方七宿之總象，為青龍之神，主東方木、春季，象徵威嚴與生發。", keywords: "四象 青龍 東方 七宿" },
  { name: "白虎", alias: "西方白虎", category: "星宿斗部", subcategory: "四象", title: "西方之象、鎮守西天", gender: "男", dynasty: "上古", origin: "《三輔黃圖》", description: "四象之一，西方七宿之總象，為白虎之神，主西方金、秋季，象徵肅殺與威猛。", keywords: "四象 白虎 西方 金" },
  { name: "朱雀", alias: "南方朱雀", category: "星宿斗部", subcategory: "四象", title: "南方之象、鎮守南天", gender: "男", dynasty: "上古", origin: "《三輔黃圖》", description: "四象之一，南方七宿之總象，為朱雀之神，主南方火、夏季，象徵光明與熱烈。", keywords: "四象 朱雀 南方 火" },
  { name: "玄武", alias: "北方玄武、真武", category: "星宿斗部", subcategory: "四象", title: "北方之象、鎮守北天", gender: "男", dynasty: "上古", origin: "《三輔黃圖》", description: "四象之一，北方七宿之總象，龜蛇合體，主北方水、冬季，象徵鎮守與長壽。", keywords: "四象 玄武 北方 水 真武" },

  // ================= 五、雷部與護法 =================
  { name: "雷祖", alias: "九天應元雷聲普化天尊、雷神", category: "雷部護法", subcategory: "雷部", title: "總司五雷、掌懲惡", gender: "男", dynasty: "上古", origin: "《雷霆玉樞寶經》", description: "雷部至尊，統御雷公電母、風伯雨師諸神，主掌雷霆號令，賞善罰惡、斬妖除魔。", keywords: "雷部 雷祖 普化天尊 五雷" },
  { name: "雷公", alias: "雷神、雷師", category: "雷部護法", subcategory: "雷部", title: "擊雷行罰", gender: "男", dynasty: "上古", origin: "《山海經》", description: "掌天之雷，以雷錘擊鼓發雷，懲治妖邪、誅滅惡人，常與電母並稱。", keywords: "雷部 雷公 行雷" },
  { name: "電母", alias: "電母娘娘、閃電娘娘", category: "雷部護法", subcategory: "雷部", title: "司閃電、輔雷行威", gender: "女", dynasty: "上古", origin: "《封神演義》", description: "掌天之閃電，以寶鏡射出電光，與雷公配合，先電後雷。", keywords: "雷部 電母 閃電" },
  { name: "風伯", alias: "風師、飛廉", category: "雷部護法", subcategory: "雷部", title: "司風、呼風", gender: "男", dynasty: "上古", origin: "《楚辭》", description: "掌天之風，能呼風喚雨，以風袋、扇具布風，為雷部屬神。", keywords: "雷部 風伯 風師 呼風" },
  { name: "雨師", alias: "雨神、玄冥", category: "雷部護法", subcategory: "雷部", title: "司雨、降雨", gender: "男", dynasty: "上古", origin: "《山海經》", description: "掌天之雨，能興雲佈雨、潤澤蒼生，為農業社會普遍祀奉之神。", keywords: "雷部 雨師 降雨" },
  { name: "四大天王", alias: "持國天王、增長天王、廣目天王、多聞天王", category: "雷部護法", subcategory: "護法", title: "護持佛法、鎮守四方", gender: "男", dynasty: "上古", origin: "佛教傳入後道教吸收", description: "分持琵琶、寶劍、絹索、寶傘，鎮守四方天門，護持道場與眾生，為道教宮觀常見護法。", keywords: "護法 天王 四方" },
  { name: "六丁六甲", alias: "六丁神、六甲神", category: "雷部護法", subcategory: "護法", title: "護法神將、隨侍左右", gender: "男", dynasty: "上古", origin: "《靈寶六丁秘法》", description: "道教護法神將之總稱，六丁屬陰、六甲屬陽，共十二位，隨侍天帝與高真左右，驅邪護法。", keywords: "護法 六丁六甲 神將" },
  { name: "王靈官", alias: "隆恩真君、豁落靈官", category: "雷部護法", subcategory: "護法", title: "護法監壇、糾察三界", gender: "男", dynasty: "宋", origin: "《道法會元》", description: "道教第一大護法，赤面三目、手持金鞭，鎮守山門，糾察善惡，為道觀入門第一神。", keywords: "護法 靈官 王天君 監壇" },
  { name: "殷郊", alias: "太歲神、殷元帥", category: "雷部護法", subcategory: "護法", title: "統領六十太歲、掌吉凶", gender: "男", dynasty: "商", origin: "《封神演義》", description: "道教護法與值年太歲之主帥，統率六十甲子太歲，掌人間一年吉凶禍福，又稱殷元帥。", keywords: "太歲 殷郊 元帥 值年" },
  { name: "馬靈官", alias: "華光大帝、馬天君", category: "雷部護法", subcategory: "護法", title: "火部之神、驅邪", gender: "男", dynasty: "宋", origin: "《南遊記》", description: "三眼四臂、手持金磚火輪，為火部之神，與王靈官並稱，護法驅邪、廣受祀奉。", keywords: "護法 馬靈官 華光 火神" },
  { name: "趙元帥", alias: "趙公明、正一玄壇元帥", category: "雷部護法", subcategory: "護法", title: "護法招財、統率五路", gender: "男", dynasty: "秦", origin: "《封神演義》", description: "黑面濃鬚、騎黑虎執金鞭，為護法元帥兼武財神，統領招寶、納珍、招財、利市四使者。", keywords: "護法 財神 趙公明 玄壇" },
  { name: "關元帥", alias: "關聖帝君、關羽", category: "雷部護法", subcategory: "護法", title: "護法伏魔、忠義之神", gender: "男", dynasty: "三國", origin: "《三國志》《歷代神仙通鑑》", description: "忠義千秋，被奉為關聖帝君，既為武財神、護法伽藍，又為伏魔大帝，三教共尊。", keywords: "護法 關公 忠義 武財神" },
  { name: "溫元帥", alias: "溫瓊、溫太保", category: "雷部護法", subcategory: "護法", title: "驅瘟逐疫、護佑", gender: "男", dynasty: "宋", origin: "《三教源流搜神大全》", description: "道教護法四帥之一，青面獠牙、手執金環，主驅除瘟疫、護佑蒼生。", keywords: "護法 溫瓊 驅瘟" },
  { name: "岳元帥", alias: "岳飛、岳武穆", category: "雷部護法", subcategory: "護法", title: "精忠護國、驅邪", gender: "男", dynasty: "宋", origin: "《宋史》", description: "南宋抗金名將，精忠報國，死後被奉為神，任護法神將，護國佑民、驅邪鎮煞。", keywords: "護法 岳飛 忠義" },

  // ================= 六、幽冥地府 =================
  { name: "東嶽大帝", alias: "泰山神、天齊仁聖大帝", category: "幽冥地府", subcategory: "地府主宰", title: "掌幽冥、判生死", gender: "男", dynasty: "上古", origin: "《三教源流搜神大全》", description: "居泰山之巔，為冥府最高主宰，總管人間生死、幽冥魂魄，統率十殿閻王。", keywords: "幽冥 東嶽 泰山 地府" },
  { name: "酆都大帝", alias: "北陰酆都玄卿大帝", category: "幽冥地府", subcategory: "地府主宰", title: "統御幽冥、總管鬼魂", gender: "男", dynasty: "上古", origin: "《雲笈七籤》", description: "居於羅酆山（酆都），為幽冥之主，總管天下鬼魂、陰司刑罰，與東嶽大帝並掌冥府。", keywords: "幽冥 酆都 地府" },
  { name: "秦廣王", alias: "十殿閻王第一殿", category: "幽冥地府", subcategory: "十殿閻王", title: "審查亡魂、勾銷善惡", gender: "男", dynasty: "宋", origin: "《玉曆寶鈔》", description: "十殿閻王第一殿，主審亡魂生前善惡，善者超生、惡者押入地獄。", keywords: "閻王 秦廣王 十殿" },
  { name: "楚江王", alias: "十殿閻王第二殿", category: "幽冥地府", subcategory: "十殿閻王", title: "掌活大地獄", gender: "男", dynasty: "宋", origin: "《玉曆寶鈔》", description: "十殿閻王第二殿，掌活大地獄，審判刑責之罪。", keywords: "閻王 楚江王 十殿" },
  { name: "宋帝王", alias: "十殿閻王第三殿", category: "幽冥地府", subcategory: "十殿閻王", title: "掌黑繩大地獄", gender: "男", dynasty: "宋", origin: "《玉曆寶鈔》", description: "十殿閻王第三殿，掌黑繩大地獄，審判謗法等罪。", keywords: "閻王 宋帝王 十殿" },
  { name: "五官王", alias: "十殿閻王第四殿", category: "幽冥地府", subcategory: "十殿閻王", title: "掌合大地獄", gender: "男", dynasty: "宋", origin: "《玉曆寶鈔》", description: "十殿閻王第四殿，掌合大地獄，審判漏稅欺詐等罪。", keywords: "閻王 五官王 十殿" },
  { name: "閻羅王", alias: "十殿閻王第五殿、閻羅天子", category: "幽冥地府", subcategory: "十殿閻王", title: "掌叫喚大地獄", gender: "男", dynasty: "宋", origin: "《玉曆寶鈔》", description: "十殿閻王第五殿，為閻王中名氣最著者，掌叫喚大地獄，審判殺生等重罪。", keywords: "閻王 閻羅王 十殿" },
  { name: "卞城王", alias: "十殿閻王第六殿", category: "幽冥地府", subcategory: "十殿閻王", title: "掌大叫喚大地獄", gender: "男", dynasty: "宋", origin: "《玉曆寶鈔》", description: "十殿閻王第六殿，掌大叫喚大地獄。", keywords: "閻王 卞城王 十殿" },
  { name: "泰山王", alias: "十殿閻王第七殿", category: "幽冥地府", subcategory: "十殿閻王", title: "掌熱惱地獄", gender: "男", dynasty: "宋", origin: "《玉曆寶鈔》", description: "十殿閻王第七殿，掌熱惱地獄，審判離間、販毒等罪。", keywords: "閻王 泰山王 十殿" },
  { name: "都市王", alias: "十殿閻王第八殿", category: "幽冥地府", subcategory: "十殿閻王", title: "掌大熱惱地獄", gender: "男", dynasty: "宋", origin: "《玉曆寶鈔》", description: "十殿閻王第八殿，掌大熱惱地獄，審判不孝等罪。", keywords: "閻王 都市王 十殿" },
  { name: "平等王", alias: "十殿閻王第九殿", category: "幽冥地府", subcategory: "十殿閻王", title: "掌阿鼻大地獄", gender: "男", dynasty: "宋", origin: "《玉曆寶鈔》", description: "十殿閻王第九殿，掌阿鼻大地獄，審判重惡之罪。", keywords: "閻王 平等王 十殿" },
  { name: "轉輪王", alias: "十殿閻王第十殿", category: "幽冥地府", subcategory: "十殿閻王", title: "定輪迴、發往六道", gender: "男", dynasty: "宋", origin: "《玉曆寶鈔》", description: "十殿閻王第十殿，掌六道輪迴，依亡魂功過定其轉世去處。", keywords: "閻王 轉輪王 十殿 輪迴" },
  { name: "孟婆", alias: "孟婆神、醧忘臺主", category: "幽冥地府", subcategory: "陰司官吏", title: "掌奈何橋、遣忘前塵", gender: "女", dynasty: "明", origin: "《玉曆寶鈔》", description: "居奈何橋畔、醧忘臺前，以孟婆湯令亡魂忘卻前世，方能入輪迴。", keywords: "幽冥 孟婆 奈何橋 輪迴" },
  { name: "判官", alias: "陰司判官、崔府君", category: "幽冥地府", subcategory: "陰司官吏", title: "主生死簿、定賞罰", gender: "男", dynasty: "唐", origin: "《西遊記》", description: "陰曹地府之司法官吏，掌生死簿冊，依善惡功過判定亡魂去留。", keywords: "幽冥 判官 生死簿" },
  { name: "牛頭馬面", alias: "牛頭獄卒、馬面獄卒", category: "幽冥地府", subcategory: "陰司官吏", title: "押解亡魂、執法獄卒", gender: "男", dynasty: "唐", origin: "佛道信仰交融", description: "陰司執法獄卒，牛頭人身與馬面人身，專司押解亡魂、執掌刑罰。", keywords: "幽冥 牛頭 馬面 獄卒" },

  // ================= 七、山川水澤與海嶽 =================
  { name: "東海龍王", alias: "敖廣", category: "山川水澤", subcategory: "四海龍王", title: "司東海、行雲布雨", gender: "男", dynasty: "上古", origin: "《西遊記》《封神演義》", description: "四海龍王之首，統領東海水族，司行雲布雨、興波作浪。", keywords: "龍王 東海 敖廣 水神" },
  { name: "南海龍王", alias: "敖欽", category: "山川水澤", subcategory: "四海龍王", title: "司南海、掌水族", gender: "男", dynasty: "上古", origin: "《西遊記》", description: "四海龍王之一，統領南海水族，司風調雨順。", keywords: "龍王 南海 敖欽" },
  { name: "西海龍王", alias: "敖閏", category: "山川水澤", subcategory: "四海龍王", title: "司西海、掌水族", gender: "男", dynasty: "上古", origin: "《西遊記》", description: "四海龍王之一，統領西海水族。", keywords: "龍王 西海 敖閏" },
  { name: "北海龍王", alias: "敖順", category: "山川水澤", subcategory: "四海龍王", title: "司北海、掌水族", gender: "男", dynasty: "上古", origin: "《西遊記》", description: "四海龍王之一，統領北海海水族，司北方之雨。", keywords: "龍王 北海 敖順" },
  { name: "東嶽泰山", alias: "五嶽之首、岱宗", category: "山川水澤", subcategory: "五嶽", title: "五嶽至尊、主生死", gender: "男", dynasty: "上古", origin: "《五嶽真形圖》", description: "五嶽之東嶽泰山，歷代帝王封禪之地，道教尊為群山之祖，主掌人間生死貴賤。", keywords: "五嶽 泰山 東嶽" },
  { name: "西嶽華山", alias: "太華、西鎮", category: "山川水澤", subcategory: "五嶽", title: "司西方、主金氣", gender: "男", dynasty: "上古", origin: "《五嶽真形圖》", description: "五嶽之西嶽華山，以險峻著稱，道教名山，為全真派聖地。", keywords: "五嶽 華山 西嶽" },
  { name: "中嶽嵩山", alias: "中嶽、嵩高", category: "山川水澤", subcategory: "五嶽", title: "居中鎮四方", gender: "男", dynasty: "上古", origin: "《五嶽真形圖》", description: "五嶽之中嶽嵩山，居天地之中，為儒釋道三教薈萃之名山。", keywords: "五嶽 嵩山 中嶽" },
  { name: "南嶽衡山", alias: "壽岳、南鎮", category: "山川水澤", subcategory: "五嶽", title: "司南方、主壽", gender: "男", dynasty: "上古", origin: "《五嶽真形圖》", description: "五嶽之南嶽衡山，道教尊為壽岳，主南方之火德。", keywords: "五嶽 衡山 南嶽 壽" },
  { name: "北嶽恆山", alias: "常山、北鎮", category: "山川水澤", subcategory: "五嶽", title: "司北方、主水", gender: "男", dynasty: "上古", origin: "《五嶽真形圖》", description: "五嶽之北嶽恆山，主北方之水德，為道教名山。", keywords: "五嶽 恆山 北嶽" },
  { name: "河伯", alias: "河神、馮夷", category: "山川水澤", subcategory: "江河之神", title: "司黃河之神", gender: "男", dynasty: "上古", origin: "《莊子》《楚辭》", description: "黃河之神，傳說為馮夷所化，先秦即有祀奉，主司黃河水患與灌溉。", keywords: "水神 河伯 黃河 馮夷" },
  { name: "湘君", alias: "湘水之神、舜帝", category: "山川水澤", subcategory: "江河之神", title: "司湘水之神", gender: "男", dynasty: "上古", origin: "《楚辭·九歌》", description: "湘水男神，一說為舜帝，與湘夫人並祀，源於楚地水神信仰。", keywords: "水神 湘君 湘水" },
  { name: "湘夫人", alias: "湘水女神、娥皇女英", category: "山川水澤", subcategory: "江河之神", title: "司湘水女神", gender: "女", dynasty: "上古", origin: "《楚辭·九歌》", description: "湘水女神，一說為堯之二女娥皇、女英，嫁與舜帝，投江殉情後為水神。", keywords: "水神 湘夫人 娥皇 女英" },
  { name: "洛神", alias: "宓妃、洛水之神", category: "山川水澤", subcategory: "江河之神", title: "司洛水女神", gender: "女", dynasty: "上古", origin: "《楚辭》《洛神賦》", description: "洛水女神，傳說為宓羲之女宓妃，曹植《洛神賦》詠之，為美之化身。", keywords: "水神 洛神 宓妃" },
  { name: "媽祖", alias: "天上聖母、天后、林默娘", category: "山川水澤", subcategory: "海神", title: "海上守護、庇佑航海", gender: "女", dynasty: "宋", origin: "《天妃顯聖錄》", description: "原名林默，福建湄洲人，生前多行善救人，歿後屢顯靈護航，被尊為海上女神，遍祀於沿海與臺灣。", keywords: "海神 媽祖 天后 湄洲 默娘" },
  { name: "水仙尊王", alias: "水仙王", category: "山川水澤", subcategory: "海神", title: "護佑航海、水陸平安", gender: "男", dynasty: "宋", origin: "民間信仰", description: "沿海水神，被奉為航海保護神，祈求水路平安、商旅順遂。", keywords: "海神 水仙 航海" },

  // ================= 八、八仙 =================
  { name: "鐵拐李", alias: "李鐵拐、李玄", category: "八仙", subcategory: "八仙", title: "八仙之首、濟世救人", gender: "男", dynasty: "隋唐", origin: "《歷代神仙通鑑》", description: "八仙之首，跛足拄鐵拐，身背葫蘆，精通藥理，濟世救人。", keywords: "八仙 鐵拐李 李玄" },
  { name: "漢鍾離", alias: "鍾離權、正陽子", category: "八仙", subcategory: "八仙", title: "點化呂洞賓之師", gender: "男", dynasty: "漢", origin: "《歷代神仙通鑑》", description: "八仙之一，漢代將軍出身，得道後點化呂洞賓，手持芭蕉扇，為全真教祖師。", keywords: "八仙 鍾離權 芭蕉扇" },
  { name: "張果老", alias: "張果", category: "八仙", subcategory: "八仙", title: "倒騎驢、長生不老", gender: "男", dynasty: "唐", origin: "《舊唐書》", description: "八仙之一，常倒騎白驢、雲遊四方，傳說已有數百歲，唐玄宗曾召見之。", keywords: "八仙 張果老 倒騎驢" },
  { name: "呂洞賓", alias: "呂岩、純陽子、孚佑帝君", category: "八仙", subcategory: "八仙", title: "八仙核心、劍仙之祖", gender: "男", dynasty: "唐", origin: "《呂祖全書》", description: "八仙中最著名者，得鍾離權點化，身背寶劍、斬妖除魔，被奉為純陽祖師、全真五祖之一。", keywords: "八仙 呂洞賓 純陽 孚佑" },
  { name: "何仙姑", alias: "何瓊", category: "八仙", subcategory: "八仙", title: "八仙中唯一女仙", gender: "女", dynasty: "唐", origin: "《歷代神仙通鑑》", description: "八仙中唯一女性，手持荷花，得道於廣州增城，精通道法、預言禍福。", keywords: "八仙 何仙姑 荷花" },
  { name: "藍采和", alias: "藍采和真人", category: "八仙", subcategory: "八仙", title: "踏歌乞食、逍遙自在", gender: "男", dynasty: "唐", origin: "《續仙傳》", description: "八仙之一，手持花籃、擊板踏歌，裝瘋賣傻而道行高深，逍遙自在。", keywords: "八仙 藍采和 花籃" },
  { name: "韓湘子", alias: "韓湘", category: "八仙", subcategory: "八仙", title: "吹簫度人、韓愈之侄", gender: "男", dynasty: "唐", origin: "《酉陽雜俎》", description: "八仙之一，唐代文學家韓愈之侄孫，善吹紫金簫，能令花開頃刻、度人向道。", keywords: "八仙 韓湘子 吹簫" },
  { name: "曹國舅", alias: "曹景休", category: "八仙", subcategory: "八仙", title: "皇親國戚得道", gender: "男", dynasty: "宋", origin: "《歷代神仙通鑑》", description: "八仙之一，宋仁宗曹皇后之弟，看破紅塵、隱跡修道，手持玉笏，為八仙中最末得道者。", keywords: "八仙 曹國舅 玉笏" },

  // ================= 九、財神 =================
  { name: "趙公明", alias: "正財神、玄壇真君、寒單爺", category: "財神", subcategory: "正財神", title: "統領五路、招財進寶", gender: "男", dynasty: "秦", origin: "《封神演義》", description: "財神之正宗，黑面騎虎、手執金鞭，統率招寶、納珍、招財、利市四使者，主管天下財帛。", keywords: "財神 趙公明 玄壇 五路財神" },
  { name: "比干", alias: "文財神", category: "財神", subcategory: "文財神", title: "無心公正、掌祿", gender: "男", dynasty: "商", origin: "《封神演義》", description: "商朝忠臣，剖心明志，因其「無心」故被奉為文財神，象徵公正無私、不偏不倚。", keywords: "財神 比干 文財神" },
  { name: "范蠡", alias: "陶朱公、文財神", category: "財神", subcategory: "文財神", title: "三聚三散、商聖", gender: "男", dynasty: "春秋", origin: "《史記·貨殖列傳》", description: "春秋越國名臣，功成身退，經商致富三聚三散，被尊為商聖與文財神。", keywords: "財神 范蠡 陶朱公 商聖" },
  { name: "五路財神", alias: "五顯財神、五路神", category: "財神", subcategory: "五路財神", title: "招寶納珍、招財利市", gender: "男", dynasty: "明清", origin: "《封神演義》", description: "指玄壇趙公明及招寶天尊、納珍天尊、招財使者、利市仙官五神，掌東西南北中五路財源。", keywords: "財神 五路 招寶 納珍 利市" },
  { name: "關聖帝君", alias: "關公、武財神、協天大帝", category: "財神", subcategory: "武財神", title: "忠義武財神、伏魔", gender: "男", dynasty: "三國", origin: "《三國演義》", description: "三國名將關羽，忠義仁勇，被尊為關聖帝君，兼具武財神、伏魔大帝、護法神多種神格。", keywords: "財神 關公 武財神 忠義" },
  { name: "招財童子", alias: "善財童子", category: "財神", subcategory: "部屬財神", title: "招財進寶、童子送財", gender: "男", dynasty: "明清", origin: "民間信仰", description: "財神部屬之童子，手持元寶，主招財進寶，常與利市仙官並列於財神座前。", keywords: "財神 招財童子 元寶" },
  { name: "利市仙官", alias: "利市婆官", category: "財神", subcategory: "部屬財神", title: "利市三倍、招徠買賣", gender: "男", dynasty: "明清", origin: "民間信仰", description: "財神部屬，掌買賣利市，使商賈獲利三倍，為商家普遍祀奉之神。", keywords: "財神 利市仙官 買賣" },

  // ================= 十、福祿壽喜與人生守護 =================
  { name: "福星", alias: "天官大帝、福神", category: "福祿壽喜", subcategory: "三星", title: "賜福、添福氣", gender: "男", dynasty: "明清", origin: "《三教源流搜神大全》", description: "福祿壽三星之一，主賜福澤，常與祿星、壽星同祀，祈求福氣滿門。", keywords: "三星 福星 賜福" },
  { name: "祿星", alias: "祿神、文昌", category: "福祿壽喜", subcategory: "三星", title: "司祿、掌官運", gender: "男", dynasty: "明清", origin: "民間信仰", description: "福祿壽三星之一，主祿位官運、富貴榮華，保佑功名利祿。", keywords: "三星 祿星 官運 功名" },
  { name: "壽星", alias: "南極仙翁、老人星", category: "福祿壽喜", subcategory: "三星", title: "司壽、添壽延年", gender: "男", dynasty: "明清", origin: "《史記·天官書》", description: "福祿壽三星之一，即南極老人星，白鬚持杖捧桃，主長壽安康。", keywords: "三星 壽星 南極仙翁 長壽" },
  { name: "喜神", alias: "喜鵲神", category: "福祿壽喜", subcategory: "四喜", title: "主喜慶、和合", gender: "男", dynasty: "明清", origin: "民間信仰", description: "主司人間喜慶之事，婚嫁喜事多迎喜神，祈求喜事連連。", keywords: "喜神 喜慶 和合" },
  { name: "月老", alias: "月下老人、紅娘", category: "福祿壽喜", subcategory: "姻緣", title: "主婚配、牽紅線", gender: "男", dynasty: "唐", origin: "《續幽怪錄》", description: "掌人間姻緣之神，以紅線繫足天下男女，使其結為夫婦，為求姻緣者普遍祀奉。", keywords: "姻緣 月老 紅線 婚配" },
  { name: "註生娘娘", alias: "註生媽、送子娘娘", category: "福祿壽喜", subcategory: "婦幼", title: "主生育、掌子嗣", gender: "女", dynasty: "宋", origin: "民間信仰", description: "主掌人間生育、子嗣之神，婦女祈求懷孕、順產、保佑嬰孩，為閩臺普遍信仰。", keywords: "婦幼 註生娘娘 生育 送子" },
  { name: "床公床母", alias: "床神", category: "福祿壽喜", subcategory: "婦幼", title: "庇佑幼兒安眠", gender: "男", dynasty: "宋", origin: "民間信仰", description: "守護床榻之神，庇佑嬰孩安睡、驅除驚嚇，祭於床邊。", keywords: "婦幼 床神 安眠" },
  { name: "文昌帝君", alias: "梓潼帝君、文昌", category: "福祿壽喜", subcategory: "功名", title: "主文運、掌功名", gender: "男", dynasty: "唐", origin: "《梓潼帝君化書》", description: "主掌科甲功名、文運昌盛之神，源於蜀地梓潼神，文人學子普遍崇祀，祈求金榜題名。", keywords: "功名 文昌 梓潼 科甲" },
  { name: "魁星", alias: "魁斗星君", category: "福祿壽喜", subcategory: "功名", title: "主文運、點狀元", gender: "男", dynasty: "明", origin: "《三教源流搜神大全》", description: "北斗之魁星，獨佔鼇頭、點定狀元，主宰文章興衰，考生祈求高中。", keywords: "功名 魁星 狀元 點鬥" },

  // ================= 十一、民間神祇 =================
  { name: "城隍爺", alias: "城隍、綏靖侯", category: "民間神祇", subcategory: "城隍土地", title: "守城護民、察善惡", gender: "男", dynasty: "三國", origin: "《北齊書》", description: "守護城池、護佑一方之神，陰司派駐人間之地方官，兼掌賞善罰惡、審查亡魂。", keywords: "城隍 守護 地方神" },
  { name: "福德正神", alias: "土地公、土地神、后土", category: "民間神祇", subcategory: "城隍土地", title: "守土一方、護祐田宅", gender: "男", dynasty: "上古", origin: "《禮記·郊特牲》", description: "最親民的土地之神，掌管一方土地、庇祐農作田宅與家宅平安，遍立於村頭巷尾。", keywords: "土地公 福德正神 守土" },
  { name: "灶君", alias: "灶神、司命灶君、灶王爺", category: "民間神祇", subcategory: "家宅神明", title: "監察善惡、司一家", gender: "男", dynasty: "周", origin: "《禮記·祭法》", description: "司掌一家灶火與飲食之神，臘月二十四日上天稟報一家善惡，民間祭灶祈福。", keywords: "灶神 灶君 家宅" },
  { name: "門神", alias: "神荼鬱壘、秦瓊尉遲恭", category: "民間神祇", subcategory: "家宅神明", title: "鎮守門戶、驅邪避鬼", gender: "男", dynasty: "唐", origin: "《山海經》《西遊記》", description: "貼於門上以鎮宅驅邪之神，古有神荼、鬱壘，後多繪秦瓊、尉遲恭二將。", keywords: "門神 驅邪 鎮宅" },
  { name: "井神", alias: "井泉童子", category: "民間神祇", subcategory: "家宅神明", title: "司井泉、護水", gender: "男", dynasty: "宋", origin: "民間信仰", description: "守護井泉之神，保佑水源清潔、家宅平安，年節祭井。", keywords: "井神 井泉 水" },
  { name: "鍾馗", alias: "鍾進士、驅魔真君", category: "民間神祇", subcategory: "驅邪神", title: "捉鬼驅邪、斬妖除魔", gender: "男", dynasty: "唐", origin: "《隋唐嘉話》", description: "傳說為唐代進士，剛正不阿，死後立誓捉鬼，被奉為驅魔逐邪之神，畫像常懸於門上。", keywords: "驅邪 鍾馗 捉鬼" },
  { name: "虎爺", alias: "虎爺將軍、下壇元帥", category: "民間神祇", subcategory: "動物神", title: "鎮煞除妖、守護壇界", gender: "男", dynasty: "明清", origin: "民間信仰", description: "神之坐騎與部將，供於神案之下，主鎮煞、驅邪、招財，小兒多拜以保平安。", keywords: "虎爺 鎮煞 驅邪" },
  { name: "石敢當", alias: "泰山石敢當", category: "民間神祇", subcategory: "厭勝物", title: "鎮宅辟邪、擋煞", gender: "男", dynasty: "唐宋", origin: "《繼古叢編》", description: "刻「石敢當」之石碑，立於巷口宅前以鎮壓邪煞、辟邪擋災，源於泰山鎮壓之信仰。", keywords: "石敢當 鎮煞 辟邪" },
  { name: "境主公", alias: "境主尊王、大眾爺", category: "民間神祇", subcategory: "地方守護", title: "守護境內、保境安民", gender: "男", dynasty: "明清", origin: "民間信仰", description: "一方境域之守護神，管轄境內居民之吉凶禍福，為庄頭之守護主神。", keywords: "境主 地方守護 保境" },
  { name: "有應公", alias: "萬應公、百姓公", category: "民間神祇", subcategory: "陰廟", title: "收容孤魂、應求必應", gender: "男", dynasty: "明清", origin: "民間信仰", description: "收容無主孤魂之神，廟稱有應廟、大眾廟，信眾祈求有求必應、庇佑平安。", keywords: "有應公 孤魂 陰廟" },
  { name: "地基主", alias: "地基主公", category: "民間神祇", subcategory: "家宅神明", title: "守護宅基、宅內安寧", gender: "男", dynasty: "明清", origin: "閩臺民間信仰", description: "守護宅基與家宅之神，安宅前祭拜，祈求居家安寧、出入平安。", keywords: "地基主 家宅 安寧" },
  { name: "三山國王", alias: "巾山國王、明山國王、獨山國王", category: "民間神祇", subcategory: "客籍神明", title: "客家守護、鎮山安民", gender: "男", dynasty: "隋", origin: "廣東潮汕信仰", description: "廣東揭陽三山之神，隨客家人遷徙而傳播，為客家移民之守護神，庇佑鄉里。", keywords: "三山國王 客家 守護" },

  // ================= 十二、上古神話 =================
  { name: "女媧", alias: "女媧娘娘、媧皇", category: "上古神話", subcategory: "創世神", title: "摶土造人、煉石補天", gender: "女", dynasty: "創世", origin: "《淮南子》《風俗通》", description: "上古創世女神，摶黃土造人、煉五色石補天，被尊為人類之母與社稷之女神。", keywords: "創世 女媧 造人 補天" },
  { name: "伏羲", alias: "太昊、庖犧", category: "上古神話", subcategory: "創世神", title: "畫八卦、啟人文", gender: "男", dynasty: "創世", origin: "《周易·繫辭》", description: "上古三皇之首，仰觀俯察而畫八卦，教民結網漁獵、始作書契，為人文始祖。", keywords: "伏羲 八卦 三皇 人文" },
  { name: "神農", alias: "炎帝、神農氏", category: "上古神話", subcategory: "醫藥始祖", title: "嘗百草、教稼穡", gender: "男", dynasty: "上古", origin: "《淮南子》", description: "三皇之一炎帝，嘗百草以辨藥性、教民耕作、發明耒耜，被尊為農業與醫藥之神。", keywords: "神農 炎帝 醫藥 農業" },
  { name: "軒轅黃帝", alias: "黃帝、軒轅氏", category: "上古神話", subcategory: "人文始祖", title: "中華始祖、開文明", gender: "男", dynasty: "上古", origin: "《史記·五帝本紀》", description: "中華民族人文始祖，統一諸部、教民製衣冠舟車，傳說訪道於廣成子，為道教所尊。", keywords: "黃帝 軒轅 始祖 道教" },
  { name: "西王母", alias: "王母娘娘、金母元君", category: "上古神話", subcategory: "女神", title: "女仙之宗、掌不死藥", gender: "女", dynasty: "上古", origin: "《山海經》《穆天子傳》", description: "居崑崙山，為女仙之宗主，掌蟠桃與不死之藥，民間尊為王母娘娘。", keywords: "西王母 王母 蟠桃 女仙" },
  { name: "東王公", alias: "東華帝君、木公", category: "上古神話", subcategory: "男神", title: "男仙之宗、掌陽氣", gender: "男", dynasty: "上古", origin: "《神異經》", description: "居於東海方諸山，為男仙之宗主，與西王母並列，掌陰陽中之陽、木公之氣。", keywords: "東王公 東華 木公 男仙" },
  { name: "九天玄女", alias: "玄女、九天娘娘", category: "上古神話", subcategory: "女神", title: "授兵法、助黃帝破敵", gender: "女", dynasty: "上古", origin: "《黃帝九鼎神丹經訣》", description: "道教女神，傳授黃帝兵法與道法，助其戰勝蚩尤，掌奇門遁甲，為兵家與玄學所尊。", keywords: "九天玄女 兵法 奇門 女神" },
  { name: "太乙真人", alias: "太乙救苦天尊", category: "上古神話", subcategory: "高真", title: "救苦濟度、化現無方", gender: "男", dynasty: "上古", origin: "《太一救苦護身妙經》", description: "道教高真，大慈大悲、尋聲赴感，化現十方救度苦難，亦為《封神演義》中哪吒之師。", keywords: "太乙 救苦 高真" },
  { name: "二郎神", alias: "楊戩、清源妙道真君", category: "上古神話", subcategory: "戰神", title: "斬蛟治水、護國佑民", gender: "男", dynasty: "宋", origin: "《二郎神醉射鎖魔鏡》", description: "三眼神將，額間天眼能洞察妖邪，率哮天犬斬妖除魔、治水患，民間信仰極盛。", keywords: "二郎神 楊戩 三眼 戰神" },
  { name: "哪吒", alias: "三太子、中壇元帥", category: "上古神話", subcategory: "戰神", title: "降妖伏魔、少年英雄", gender: "男", dynasty: "商", origin: "《封神演義》", description: "靈珠子轉世，蓮花化身，腳踏風火輪、手持火尖槍，降妖除魔，為道教護法少年神。", keywords: "哪吒 三太子 中壇元帥" },
  { name: "嫦娥", alias: "姮娥", category: "上古神話", subcategory: "月神", title: "奔月之神、掌月宮", gender: "女", dynasty: "上古", origin: "《淮南子·覽冥訓》", description: "后羿之妻，竊食不死藥而奔月，居廣寒宮，為月宮女神，中秋拜月之象徵。", keywords: "嫦娥 月神 奔月 廣寒" },
  { name: "后羿", alias: "羿、大羿", category: "上古神話", subcategory: "戰神", title: "射日除害、英雄之神", gender: "男", dynasty: "上古", origin: "《淮南子》", description: "上古神射手，傳說射落九日、誅滅六害，拯救蒼生，為英雄之神。", keywords: "后羿 射日 神射手" },
  { name: "牛郎織女", alias: "牽牛織女、七夕二星", category: "上古神話", subcategory: "星辰神話", title: "七夕相會、忠貞愛情", gender: "男", dynasty: "上古", origin: "《古詩十九首》", description: "牽牛星與織女星之神，因犯天規分居銀河兩岸，唯七夕相會，象徵忠貞愛情。", keywords: "牛郎 織女 七夕 銀河" },
  { name: "倉頡", alias: "倉頡先師", category: "上古神話", subcategory: "文教", title: "造字聖祖、啟文明", gender: "男", dynasty: "上古", origin: "《淮南子》", description: "黃帝之史官，傳說觀鳥獸蹄迒之跡而造字，天雨粟、鬼夜哭，被尊為文字之神。", keywords: "倉頡 造字 文字" },
  { name: "盤古", alias: "盤古氏", category: "上古神話", subcategory: "創世神", title: "開天闢地、化生萬物", gender: "男", dynasty: "創世", origin: "《三五歷紀》", description: "混沌初開之創世神，以斧開天闢地，身化山川日月、萬物由此而生。", keywords: "盤古 開天 創世" },

  // ================= 十三、文教醫藥 =================
  { name: "藥王", alias: "孫思邈、藥王真人", category: "文教醫藥", subcategory: "醫藥神", title: "懸壺濟世、醫聖", gender: "男", dynasty: "唐", origin: "《舊唐書》", description: "唐代大醫家孫思邈，著《千金要方》，醫德高尚，被尊為藥王，廟宇遍及四方。", keywords: "醫藥 藥王 孫思邈 千金方" },
  { name: "保生大帝", alias: "吳夲、大道公", category: "文教醫藥", subcategory: "醫藥神", title: "醫術濟人、閩臺醫神", gender: "男", dynasty: "宋", origin: "《保生大帝實錄》", description: "北宋醫者吳夲，醫術高明、濟世救人，歿後被奉為保生大帝，為閩南臺灣醫藥守護神。", keywords: "醫藥 保生大帝 吳夲 大道公" },
  { name: "華佗", alias: "神醫華佗", category: "文教醫藥", subcategory: "醫藥神", title: "外科之祖、醫術超群", gender: "男", dynasty: "東漢", origin: "《三國志》", description: "東漢神醫，精通內外婦兒諸科，首創麻沸散與五禽戲，被尊為外科之祖。", keywords: "醫藥 華佗 外科 麻沸散" },
  { name: "張仲景", alias: "張機、醫聖", category: "文教醫藥", subcategory: "醫藥神", title: "醫聖、《傷寒論》", gender: "男", dynasty: "東漢", origin: "《傷寒雜病論》", description: "東漢醫家，著《傷寒雜病論》，奠定中醫辨證論治體系，被尊為醫聖。", keywords: "醫藥 張仲景 傷寒論 醫聖" },
  { name: "扁鵲", alias: "秦越人、盧醫", category: "文教醫藥", subcategory: "醫藥神", title: "望聞問切、脈學之祖", gender: "男", dynasty: "春秋戰國", origin: "《史記·扁鵲列傳》", description: "戰國名醫，精於望診與脈診，奠定望聞問切四診法，被尊為脈學之祖。", keywords: "醫藥 扁鵲 脈學 四診" },
  { name: "孔子", alias: "至聖先師、文宣王", category: "文教醫藥", subcategory: "文教神", title: "萬世師表、儒家始祖", gender: "男", dynasty: "春秋", origin: "《論語》", description: "儒家始祖，刪述六經、開私學之風，被尊為至聖先師，歷代尊崇不絕。", keywords: "文教 孔子 至聖 儒教" },
  { name: "魁斗星君", alias: "魁星爺", category: "文教醫藥", subcategory: "文教神", title: "司文章、點魁首", gender: "男", dynasty: "明", origin: "《三教源流搜神大全》", description: "北斗魁星之神，掌文章之盛衰，考生祭拜以求奪魁高中、魁星點斗。", keywords: "文教 魁星 文章 科考" },
  { name: "文昌梓潼", alias: "文昌帝君、梓潼帝君", category: "文教醫藥", subcategory: "文教神", title: "主文運、掌祿籍", gender: "男", dynasty: "唐", origin: "《梓潼帝君化書》", description: "蜀地梓潼神，掌文昌六星、司人間祿籍功名，與魁星並為士子所奉。", keywords: "文教 文昌 梓潼 祿籍" },

  // ================= 十四、歷史人物神化 =================
  { name: "關羽", alias: "關公、關聖帝君", category: "歷史人物神化", subcategory: "武聖", title: "忠義仁勇、武聖", gender: "男", dynasty: "三國", origin: "《三國志》", description: "三國蜀漢名將，忠義貫千秋，被儒釋道三教共尊，佛為伽藍、道為帝君、民為武財神。", keywords: "關羽 關公 武聖 忠義" },
  { name: "李冰", alias: "李冰父子、川主", category: "歷史人物神化", subcategory: "治水功臣", title: "都江堰、治水之神", gender: "男", dynasty: "戰國", origin: "《史記·河渠書》", description: "戰國蜀郡太守，主持修建都江堰水利工程，澤被千秋，父子同被尊為治水之神。", keywords: "李冰 都江堰 治水" },
  { name: "屈原", alias: "屈子、三閭大夫", category: "歷史人物神化", subcategory: "忠烈", title: "忠君愛國、詩魂", gender: "男", dynasty: "戰國", origin: "《離騷》", description: "戰國楚國詩人，憂國憂民而投汨羅江，開創楚辭，端午節紀念之，被奉為忠烈之神。", keywords: "屈原 離騷 端午 忠烈" },
  { name: "諸葛亮", alias: "武侯、臥龍", category: "歷史人物神化", subcategory: "智聖", title: "鞠躬盡瘁、智慧化身", gender: "男", dynasty: "三國", origin: "《三國志》", description: "蜀漢丞相，鞠躬盡瘁、死而後已，料事如神，被尊為智慧之化身，廟祀香火不絕。", keywords: "諸葛亮 武侯 臥龍 智慧" },
  { name: "開漳聖王", alias: "陳元光", category: "歷史人物神化", subcategory: "閩南守護", title: "開發漳州、閩南守護", gender: "男", dynasty: "唐", origin: "《漳州府志》", description: "唐代將領陳元光，率眾開發漳州、教化民風，被漳州人及移民奉為守護神。", keywords: "開漳聖王 陳元光 閩南" },
  { name: "廣澤尊王", alias: "郭聖王、保安尊王", category: "歷史人物神化", subcategory: "閩南守護", title: "孝感動天、保境安民", gender: "男", dynasty: "五代", origin: "福建南安信仰", description: "五代福建南安人郭忠福，以孝聞名，得道成神，被奉為廣澤尊王，庇佑鄉里。", keywords: "廣澤尊王 郭聖王 孝" },
  { name: "開臺聖王", alias: "鄭成功、國姓爺", category: "歷史人物神化", subcategory: "臺灣守護", title: "驅荷開臺、民族英雄", gender: "男", dynasty: "明末清初", origin: "《臺灣外記》", description: "明末鄭成功率軍驅逐荷蘭人、開墾臺灣，被臺灣人尊為開臺聖王、國姓爺，崇祀極盛。", keywords: "鄭成功 開臺聖王 國姓爺" },
  { name: "五府千歲", alias: "李府千歲、池府千歲、吳府千歲、朱府千歲、范府千歲", category: "歷史人物神化", subcategory: "王爺信仰", title: "代天巡狩、驅瘟保境", gender: "男", dynasty: "明清", origin: "閩臺王爺信仰", description: "閩臺「王爺」信仰代表，五位千歲奉玉旨代天巡狩、驅瘟除疫、保境安民，香火鼎盛。", keywords: "五府千歲 王爺 代天巡狩" },
  { name: "雷震子", alias: "雷震子真人", category: "歷史人物神化", subcategory: "神話人物", title: "雷部神將、雙翅飛天", gender: "男", dynasty: "商", origin: "《封神演義》", description: "《封神演義》人物，生而異稟、雙肋生翅，為雷部神將，助周伐紂。", keywords: "雷震子 封神 雷部" },
  { name: "李靖", alias: "托塔天王、李天王", category: "歷史人物神化", subcategory: "神話人物", title: "托塔天王、統領天兵", gender: "男", dynasty: "商", origin: "《封神演義》《西遊記》", description: "哪吒之父，執玲瓏寶塔，統領天兵天將，鎮守天庭，為著名護法天王。", keywords: "李靖 托塔天王 天兵" },
];





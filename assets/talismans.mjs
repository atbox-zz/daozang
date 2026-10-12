// 中華道藏 · 符咒圖騰資料
// 字段：name 名稱 | category 分類 | svg_key 前端渲染鍵 | meaning 涵義 | description 說明
//       image 道藏真符 PNG（/src/assets/talismans/<key>.png，無則空字串）| origin 出處標籤
const TOTEM_ORIGIN = "圖騰／法器（非道藏書寫符籙）";
const DRAW_ORIGIN = "意繪示意（道藏無同名原版可考）";
export const talismans = [
  { name: "太極圖", category: "太極圖騰", svg_key: "taiji", meaning: "陰陽合一、萬物之本", description: "以陰陽二魚迴旋而成，象徵天地未分之前的混沌與陰陽消長、生生不息之道，為道教最高哲學圖騰。", image: "", origin: TOTEM_ORIGIN },
  { name: "先天八卦", category: "八卦圖騰", svg_key: "bagua_xiantian", meaning: "開天定位、法象自然", description: "伏羲所作先天八卦，依「天地定位」順序排列，揭示宇宙萬物之先天秩序，為道家易學之本。", image: "", origin: TOTEM_ORIGIN },
  { name: "後天八卦", category: "八卦圖騰", svg_key: "bagua_houtian", meaning: "流行變化、致用於世", description: "文王所作後天八卦，依「帝出乎震」之序運行，揭示四時五行之流布與人事日用之道。", image: "", origin: TOTEM_ORIGIN },
  { name: "八卦陣", category: "八卦圖騰", svg_key: "bagua_array", meaning: "陰陽相濟、辟邪鎮煞", description: "將八卦環列成陣，太極居中，可集聚天地靈氣、辟邪鎮煞，多用於建築與法器之佈置。", image: "", origin: TOTEM_ORIGIN },
  { name: "河圖", category: "太極圖騰", svg_key: "hetu", meaning: "天垂之象、陰陽之數", description: "傳說龍馬負圖而出，為陰陽五行數理之源，一六共宗、二七同道，揭示生成之數與天地之道。", image: "", origin: TOTEM_ORIGIN },
  { name: "洛書", category: "太極圖騰", svg_key: "luoshu", meaning: "九宮之數、變化之樞", description: "傳說神龜負書而出，九宮之數縱橫皆十五，為奇門遁甲、堪輿風水數理之根基。", image: "", origin: TOTEM_ORIGIN },
  { name: "北斗七星符", category: "星斗符", svg_key: "beidou", meaning: "延生度厄、禮斗消災", description: "以北斗七星排列成符，禮斗求壽、禳星解厄，道教視北斗為掌人間生死之主。", image: "/src/assets/talismans/beidou.png", origin: "取自《北斗治法武威經》（明正統道藏）北斗七星斗圖" },
  { name: "南斗六星符", category: "星斗符", svg_key: "nandou", meaning: "添壽益算、延年保命", description: "以南方六星列符，南斗主生，能添壽算、延年益壽，與北斗並稱「南斗注生，北斗注死」。", image: "/src/assets/talismans/nandou.png", origin: "取自《太上說南斗六司延壽度人妙經》南斗六司符·第一天府司命上將鎮國真君符（六符之首）" },
  { name: "五雷符", category: "符籙", svg_key: "wulei", meaning: "雷霆號令、斬妖伏魔", description: "道教雷法之符，聚五雷之炁，用以召雷降妖、驅邪懲惡，為雷部高功常用之符。", image: "/src/assets/talismans/wulei.png", origin: "取自《道法會元》卷一百二「五雷祈禱大法」五雷散土炁符" },
  { name: "鎮宅符", category: "符籙", svg_key: "zhenzhai", meaning: "安宅護家、辟邪鎮煞", description: "書貼於宅門或廳堂，以鎮壓宅中之邪煞、保一家平安，為最常見之居家符籙。", image: "/src/assets/talismans/zhenzhai.png", origin: "取自《太上秘法鎮宅靈符》「厭鎮兇惡之鬼」鎮宅靈符" },
  { name: "平安符", category: "符籙", svg_key: "pingan", meaning: "出入平安、消災解厄", description: "隨身佩帶以保平安、驅邪護身，祈求行旅順遂、無病無災。", image: "/src/assets/talismans/pingan.png", origin: "取自《上清靈寶大法》卷三十七 神虎護身儀軌第一符（護身驅邪真符）" },
  { name: "招財進寶符", category: "符籙", svg_key: "caishen", meaning: "招財進寶、利市亨通", description: "書以招引財氣、廣納四方之財，商人祈求生意興隆、財源廣進。", image: "", origin: DRAW_ORIGIN },
  { name: "文昌符", category: "符籙", svg_key: "wenchang", meaning: "開智慧、助功名", description: "求學應試者佩之，能啟發智慧、文思泉湧、金榜題名，為士子所重。", image: "", origin: DRAW_ORIGIN },
  { name: "辟邪符", category: "符籙", svg_key: "bixie", meaning: "驅邪避祟、護身鎮煞", description: "用以驅逐邪祟、化解沖煞，隨身或置於宅中，求身心安泰、邪魔不侵。", image: "/src/assets/talismans/bixie.png", origin: "取自《上清靈寶大法》卷二十一·經句符書門「右符鎮宅去惡鬼」符" },
  { name: "太歲符", category: "符籙", svg_key: "taisui", meaning: "安太歲、化煞祈福", description: "值年犯太歲者安奉此符，以化解流年沖煞、祈福消災，保一年順遂。", image: "/src/assets/talismans/taisui.png", origin: "取自《上清瓊宮靈飛六甲籙》靈飛六甲之甲子符（六十甲子干支之首，對應太歲干支體系）" },
  { name: "淨心符", category: "符籙", svg_key: "jingxin", meaning: "靜心定神、去妄除煩", description: "書符靜心，用以安定心神、去除雜念妄念，助修道者入靜入定。", image: "", origin: DRAW_ORIGIN },
  { name: "敕水符", category: "符籙", svg_key: "chishui", meaning: "敕水潔淨、灑淨壇場", description: "高功作法時敕化法水，以淨壇滌穢、潔淨道場，為科儀之基礎。", image: "", origin: DRAW_ORIGIN },
  { name: "八卦鏡", category: "法器圖騰", svg_key: "bagua_mirror", meaning: "反射邪煞、化煞鎮宅", description: "圓鏡周列八卦，懸掛於門窗樑上，以反射煞氣、鎮宅辟邪，為常見化煞法器。", image: "", origin: TOTEM_ORIGIN },
  { name: "斬鬼符", category: "符籙", svg_key: "zhangui", meaning: "斬妖除鬼、驅逐陰邪", description: "雷法驅邪之符，威力剛猛，用以斬除妖魔鬼祟，多由高功法師書用。", image: "/src/assets/talismans/zhangui.png", origin: "取自《上清靈寶大法》卷三十七「神虎玄範門」十五使者追鬼符（追攝制鬼神）" },
  { name: "桃木劍", category: "法器圖騰", svg_key: "taomu", meaning: "斬邪除妖、辟邪法器", description: "以桃木所製之劍，桃木有辟邪之性，用以斬除妖邪、鎮壓煞氣，為道士常用法器。", image: "", origin: TOTEM_ORIGIN },
  { name: "天師寶印", category: "寶印", svg_key: "tianshi_yin", meaning: "法印鎮邪、威令萬神", description: "正一天師之法印，印文符篆，印蓋符籙以增其威，有鎮邪護法、號令鬼神之義。", image: "", origin: TOTEM_ORIGIN },
  { name: "紫微諱", category: "寶印", svg_key: "ziwei_huiji", meaning: "萬神朝禮、諸邪遠避", description: "道家秘諱「紫微」之雲篆合體，隱含諸神名諱，書於符上以號令鬼神、辟邪鎮壇。", image: "/src/assets/talismans/ziwei_huiji.png", origin: "取自《道法會元》卷五·紫皇妙道心章雲篆（清微雲篆合體字）" },
];

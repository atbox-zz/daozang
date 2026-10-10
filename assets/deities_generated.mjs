// 生成式神仙資料（六十甲子太歲 60 + 二十八宿 28 + 十二元辰 12 = 100 位）

const STEMS = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const BRANCHES = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

// 六十甲子太歲
export function genTaisui() {
  const out = [];
  for (let i = 0; i < 60; i++) {
    const gan = STEMS[i % 10];
    const zhi = BRANCHES[i % 12];
    const name = `${gan}${zhi}太歲`;
    out.push({
      name,
      alias: "值年太歲",
      category: "星宿斗部",
      subcategory: "六十甲子太歲",
      title: "值年掌歲、司人間吉凶",
      gender: "男",
      dynasty: "上古",
      origin: "《太上靈華至德歲君解厄延生法懺》",
      description: `六十甲子太歲之一，${name}，主其輪值之年，掌該年人間吉凶禍福、流年運勢，為該歲當值之神。`,
      keywords: `太歲 值年 ${gan}${zhi} 流年 犯太歲`,
    });
  }
  return out;
}

// 二十八宿
const XIU = [
  ["角木蛟", "角宿", "東方青龍七宿之首，屬木，為蛟"],
  ["亢金龍", "亢宿", "東方青龍七宿，屬金，為龍"],
  ["氐土貉", "氐宿", "東方青龍七宿，屬土，為貉"],
  ["房日兔", "房宿", "東方青龍七宿，屬日，為兔"],
  ["心月狐", "心宿", "東方青龍七宿，屬月，為狐"],
  ["尾火虎", "尾宿", "東方青龍七宿，屬火，為虎"],
  ["箕水豹", "箕宿", "東方青龍七宿，屬水，為豹"],
  ["斗木獬", "斗宿", "北方玄武七宿之首，屬木，為獬"],
  ["牛金牛", "牛宿", "北方玄武七宿，屬金，為牛"],
  ["女土蝠", "女宿", "北方玄武七宿，屬土，為蝠"],
  ["虛日鼠", "虛宿", "北方玄武七宿，屬日，為鼠"],
  ["危月燕", "危宿", "北方玄武七宿，屬月，為燕"],
  ["室火豬", "室宿", "北方玄武七宿，屬火，為豬"],
  ["壁水貐", "壁宿", "北方玄武七宿，屬水，為貐"],
  ["奎木狼", "奎宿", "西方白虎七宿之首，屬木，為狼"],
  ["婁金狗", "婁宿", "西方白虎七宿，屬金，為狗"],
  ["胃土雉", "胃宿", "西方白虎七宿，屬土，為雉"],
  ["昴日雞", "昴宿", "西方白虎七宿，屬日，為雞"],
  ["畢月烏", "畢宿", "西方白虎七宿，屬月，為烏"],
  ["觜火猴", "觜宿", "西方白虎七宿，屬火，為猴"],
  ["參水猿", "參宿", "西方白虎七宿，屬水，為猿"],
  ["井木犴", "井宿", "南方朱雀七宿之首，屬木，為犴"],
  ["鬼金羊", "鬼宿", "南方朱雀七宿，屬金，為羊"],
  ["柳土獐", "柳宿", "南方朱雀七宿，屬土，為獐"],
  ["星日馬", "星宿", "南方朱雀七宿，屬日，為馬"],
  ["張月鹿", "張宿", "南方朱雀七宿，屬月，為鹿"],
  ["翼火蛇", "翼宿", "南方朱雀七宿，屬火，為蛇"],
  ["軫水蚓", "軫宿", "南方朱雀七宿，屬水，為蚓"],
];

export function genXiu() {
  const out = [];
  for (const [name, xiu, desc] of XIU) {
    const dir = xiu.startsWith("角") || xiu.startsWith("亢") || xiu.startsWith("氐") || xiu.startsWith("房") || xiu.startsWith("心") || xiu.startsWith("尾") || xiu.startsWith("箕")
      ? "東方青龍"
      : xiu.startsWith("斗") || xiu.startsWith("牛") || xiu.startsWith("女") || xiu.startsWith("虛") || xiu.startsWith("危") || xiu.startsWith("室") || xiu.startsWith("壁")
      ? "北方玄武"
      : xiu.startsWith("奎") || xiu.startsWith("婁") || xiu.startsWith("胃") || xiu.startsWith("昴") || xiu.startsWith("畢") || xiu.startsWith("觜") || xiu.startsWith("參")
      ? "西方白虎"
      : "南方朱雀";
    out.push({
      name,
      alias: `${dir}${xiu}`,
      category: "星宿斗部",
      subcategory: "二十八宿",
      title: `二十八宿之一（${dir}）`,
      gender: "男",
      dynasty: "上古",
      origin: "《尚書》《史記·天官書》",
      description: `${desc}，主管天之某方分野，觀象授時、察吉凶，為道教星斗信仰重要神明。`,
      keywords: `二十八宿 ${xiu} ${dir} 星宿`,
    });
  }
  return out;
}

// 十二元辰（生肖守護神）
const ZODIAC = [
  ["子鼠", "子", "鼠"],
  ["丑牛", "丑", "牛"],
  ["寅虎", "寅", "虎"],
  ["卯兔", "卯", "兔"],
  ["辰龍", "辰", "龍"],
  ["巳蛇", "巳", "蛇"],
  ["午馬", "午", "馬"],
  ["未羊", "未", "羊"],
  ["申猴", "申", "猴"],
  ["酉雞", "酉", "雞"],
  ["戌狗", "戌", "狗"],
  ["亥豬", "亥", "豬"],
];

export function genYuanchen() {
  const out = [];
  for (const [name, zhi, animal] of ZODIAC) {
    out.push({
      name: `${name}元辰`,
      alias: `${zhi}神、${animal}生肖守護神`,
      category: "星宿斗部",
      subcategory: "十二元辰",
      title: `本命元辰、${animal}年守護`,
      gender: "男",
      dynasty: "上古",
      origin: "道教本命星斗信仰",
      description: `十二元辰之一，對應${zhi}支與${animal}生肖，為該年生肖者之本命守護神，主流年運勢與本命平安。`,
      keywords: `元辰 本命 ${animal} ${zhi} 生肖`,
    });
  }
  return out;
}

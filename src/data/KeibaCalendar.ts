export type Props = {
  id: number;
  tag: string;
  date: string;
  place: string;
  name: string;
  conditions: string;
  course: string;
  big: boolean;
};

export const currentTag = '2022a';
export const tags = ['2021', '2022a'];

export const KeibaCalendar = [
  {
    id: 1,
    tag: '2021',
    date: '2021/02/21',
    place: '東京',
    name: 'フェブラリーS',
    conditions: '4歳以上',
    course: 'ダ1,600メートル',
    big: false,
  },
  {
    id: 2,
    tag: '2021',
    date: '2021/03/28',
    place: '中京',
    name: '高松宮記念',
    conditions: '4歳以上',
    course: '芝1,200メートル',
    big: false,
  },
  {
    id: 3,
    tag: '2021',
    date: '2021/04/04',
    place: '阪神',
    name: '大阪杯',
    conditions: '4歳以上',
    course: '芝2,000メートル',
    big: false,
  },
  {
    id: 4,
    tag: '2021',
    date: '2021/04/11',
    place: '阪神',
    name: '桜花賞',
    conditions: '3歳牝',
    course: '芝1,600メートル',
    big: false,
  },
  {
    id: 5,
    tag: '2021',
    date: '2021/04/18',
    place: '中山',
    name: '皐月賞',
    conditions: '3歳牡・牝',
    course: '芝2,000メートル',
    big: true,
  },
  {
    id: 6,
    tag: '2021',
    date: '2021/05/02',
    place: '京都',
    name: '天皇賞（春）',
    conditions: '4歳以上',
    course: '芝3,200メートル',
    big: true,
  },
  {
    id: 7,
    tag: '2021',
    date: '2021/05/09',
    place: '東京',
    name: 'NHKマイルC',
    conditions: '3歳牡・牝',
    course: '芝1,600メートル',
    big: false,
  },
  {
    id: 8,
    tag: '2021',
    date: '2021/05/16',
    place: '東京',
    name: 'ヴィクトリアマイル',
    conditions: '4歳以上牝',
    course: '芝1,600メートル',
    big: false,
  },
  {
    id: 9,
    tag: '2021',
    date: '2021/05/23',
    place: '東京',
    name: 'オークス',
    conditions: '3歳牝',
    course: '芝2,400メートル',
    big: false,
  },
  {
    id: 10,
    tag: '2021',
    date: '2021/05/30',
    place: '東京',
    name: '日本ダービー',
    conditions: '3歳牡・牝',
    course: '芝2,400メートル',
    big: true,
  },
  {
    id: 11,
    tag: '2021',
    date: '2021/06/06',
    place: '東京',
    name: '安田記念',
    conditions: '3歳以上',
    course: '芝1,600メートル',
    big: false,
  },
  {
    id: 12,
    tag: '2021',
    date: '2021/06/27',
    place: '阪神',
    name: '宝塚記念',
    conditions: '3歳以上',
    course: '芝2,200メートル',
    big: true,
  },
  {
    id: 13,
    tag: '2021',
    date: '2021/10/03',
    place: '中山',
    name: 'スプリンターズS',
    conditions: '3歳以上',
    course: '芝1,200メートル',
    big: false,
  },
  {
    id: 14,
    tag: '2021',
    date: '2021/10/17',
    place: '京都',
    name: '秋華賞',
    conditions: '3歳牝',
    course: '芝2,000メートル',
    big: false,
  },
  {
    id: 15,
    tag: '2021',
    date: '2021/10/24',
    place: '京都',
    name: '菊花賞',
    conditions: '3歳牡・牝',
    course: '芝3,000メートル',
    big: true,
  },
  {
    id: 16,
    tag: '2021',
    date: '2021/10/31',
    place: '東京',
    name: '天皇賞（秋）',
    conditions: '3歳以上',
    course: '芝2,000メートル',
    big: true,
  },
  {
    id: 17,
    tag: '2021',
    date: '2021/11/14',
    place: '阪神',
    name: 'エリザベス女王杯',
    conditions: '3歳以上牝',
    course: '芝2,200メートル',
    big: false,
  },
  {
    id: 18,
    tag: '2021',
    date: '2021/11/21',
    place: '阪神',
    name: 'マイルチャンピオンシップ',
    conditions: '3歳以上',
    course: '芝1,600メートル',
    big: false,
  },
  {
    id: 19,
    tag: '2021',
    date: '2021/11/28',
    place: '東京',
    name: 'ジャパンC',
    conditions: '3歳以上',
    course: '芝2,400メートル',
    big: true,
  },
  {
    id: 20,
    tag: '2021',
    date: '2021/12/05',
    place: '中京',
    name: 'チャンピオンズC',
    conditions: '3歳以上',
    course: 'ダ1,800メートル',
    big: false,
  },
  {
    id: 21,
    tag: '2021',
    date: '2021/12/12',
    place: '阪神',
    name: '阪神ジュベナイルF',
    conditions: '2歳牝',
    course: '芝1,600メートル',
    big: false,
  },
  {
    id: 22,
    tag: '2021',
    date: '2021/12/19',
    place: '阪神',
    name: '朝日杯フューチュリティS',
    conditions: '2歳牡・牝',
    course: '芝1,600メートル',
    big: false,
  },
  {
    id: 23,
    tag: '2021',
    date: '2021/12/26',
    place: '中山',
    name: '有馬記念',
    conditions: '3歳以上',
    course: '芝2,500メートル',
    big: true,
  },
  {
    id: 24,
    tag: '2021',
    date: '2021/12/28',
    place: '中山',
    name: 'ホープフルS',
    conditions: '2歳牡・牝',
    course: '芝2,000メートル',
    big: false,
  },
  {
    id: 22101,
    tag: '2022a',
    date: '2022/02/20',
    place: '東京',
    name: 'フェブラリーS',
    conditions: '4歳以上',
    course: 'ダ1,600メートル',
    big: false,
  },
  {
    id: 22102,
    tag: '2022a',
    date: '2022/03/27',
    place: '中京',
    name: '高松宮記念',
    conditions: '4歳以上',
    course: '芝1,200メートル',
    big: false,
  },
  {
    id: 22103,
    tag: '2022a',
    date: '2022/04/03',
    place: '阪神',
    name: '大阪杯',
    conditions: '4歳以上',
    course: '芝2,000メートル',
    big: false,
  },
  {
    id: 22104,
    tag: '2022a',
    date: '2022/04/10',
    place: '阪神',
    name: '桜花賞',
    conditions: '3歳牝',
    course: '芝1,600メートル',
    big: false,
  },
  {
    id: 22105,
    tag: '2022a',
    date: '2022/04/17',
    place: '中山',
    name: '皐月賞',
    conditions: '3歳牡・牝',
    course: '芝2,000メートル',
    big: true,
  },
  {
    id: 22106,
    tag: '2022a',
    date: '2022/05/01',
    place: '阪神',
    name: '天皇賞（春）',
    conditions: '4歳以上',
    course: '芝3,200メートル',
    big: true,
  },
  {
    id: 22107,
    tag: '2022a',
    date: '2022/05/08',
    place: '東京',
    name: 'NHKマイルC',
    conditions: '3歳牡・牝',
    course: '芝1,600メートル',
    big: false,
  },
  {
    id: 22108,
    tag: '2022a',
    date: '2022/05/15',
    place: '東京',
    name: 'ヴィクトリアマイル',
    conditions: '4歳以上牝',
    course: '芝1,600メートル',
    big: false,
  },
  {
    id: 22109,
    tag: '2022a',
    date: '2022/05/22',
    place: '東京',
    name: 'オークス',
    conditions: '3歳牝',
    course: '芝2,400メートル',
    big: false,
  },
  {
    id: 22110,
    tag: '2022a',
    date: '2022/05/29',
    place: '東京',
    name: '日本ダービー',
    conditions: '3歳牡・牝',
    course: '芝2,400メートル',
    big: true,
  },
  {
    id: 22111,
    tag: '2022a',
    date: '2022/06/05',
    place: '東京',
    name: '安田記念',
    conditions: '3歳以上',
    course: '芝1,600メートル',
    big: false,
  },
  {
    id: 22112,
    tag: '2022a',
    date: '2022/06/26',
    place: '阪神',
    name: '宝塚記念',
    conditions: '3歳以上',
    course: '芝2,200メートル',
    big: true,
  },
  {
    id: 22201,
    tag: '2022b',
    date: '2022/10/02',
    place: '中山',
    name: 'スプリンターズS',
    conditions: '3歳以上',
    course: '芝1,200メートル',
    big: false,
  },
  {
    id: 22202,
    tag: '2022b',
    date: '2022/10/16',
    place: '阪神',
    name: '秋華賞',
    conditions: '3歳牝',
    course: '芝2,000メートル',
    big: false,
  },
  {
    id: 22203,
    tag: '2022b',
    date: '2022/10/23',
    place: '阪神',
    name: '菊花賞',
    conditions: '3歳牡・牝',
    course: '芝3,000メートル',
    big: true,
  },
  {
    id: 22204,
    tag: '2022b',
    date: '2022/10/30',
    place: '東京',
    name: '天皇賞（秋）',
    conditions: '3歳以上',
    course: '芝2,000メートル',
    big: true,
  },
  {
    id: 22205,
    tag: '2022b',
    date: '2022/11/13',
    place: '阪神',
    name: 'エリザベス女王杯',
    conditions: '3歳以上牝',
    course: '芝2,200メートル',
    big: false,
  },
  {
    id: 22206,
    tag: '2022b',
    date: '2022/11/20',
    place: '阪神',
    name: 'マイルチャンピオンシップ',
    conditions: '3歳以上',
    course: '芝1,600メートル',
    big: false,
  },
  {
    id: 22207,
    tag: '2022b',
    date: '2022/11/27',
    place: '東京',
    name: 'ジャパンC',
    conditions: '3歳以上',
    course: '芝2,400メートル',
    big: true,
  },
  {
    id: 22208,
    tag: '2022b',
    date: '2022/12/04',
    place: '中京',
    name: 'チャンピオンズC',
    conditions: '3歳以上',
    course: 'ダ1,800メートル',
    big: false,
  },
  {
    id: 22209,
    tag: '2022b',
    date: '2022/12/11',
    place: '阪神',
    name: '阪神ジュベナイルF',
    conditions: '2歳牝',
    course: '芝1,600メートル',
    big: false,
  },
  {
    id: 22210,
    tag: '2022b',
    date: '2022/12/18',
    place: '阪神',
    name: '朝日杯フューチュリティS',
    conditions: '2歳牡・牝',
    course: '芝1,600メートル',
    big: false,
  },
  {
    id: 22211,
    tag: '2022b',
    date: '2022/12/25',
    place: '中山',
    name: '有馬記念',
    conditions: '3歳以上',
    course: '芝2,500メートル',
    big: true,
  },
  {
    id: 22212,
    tag: '2022b',
    date: '2022/12/28',
    place: '中山',
    name: 'ホープフルS',
    conditions: '2歳牡・牝',
    course: '芝2,000メートル',
    big: false,
  },
];
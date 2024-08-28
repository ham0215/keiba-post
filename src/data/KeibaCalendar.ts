export type Props = {
  id: string;
  tag: string;
  date: string;
  name: string;
  big: boolean;
};

export const CURRENT_TAG = '2024b' as const;
export const TAGS = [
  '2021',
  '2022a',
  '2022b',
  '2023a',
  '2023b',
  '2024a',
  '2024b',
] as const;

export const RULE_2022_TAGS = ['2022b', '2022a', '2021'] as const;

export const KeibaCalendar: Props[] = [
  {
    id: '1',
    tag: '2021',
    date: '2021/02/21',
    name: 'フェブラリーS',
    big: false,
  },
  {
    id: '2',
    tag: '2021',
    date: '2021/03/28',
    name: '高松宮記念',
    big: false,
  },
  {
    id: '3',
    tag: '2021',
    date: '2021/04/04',
    name: '大阪杯',
    big: false,
  },
  {
    id: '4',
    tag: '2021',
    date: '2021/04/11',
    name: '桜花賞',
    big: false,
  },
  {
    id: '5',
    tag: '2021',
    date: '2021/04/18',
    name: '皐月賞',
    big: true,
  },
  {
    id: '6',
    tag: '2021',
    date: '2021/05/02',
    name: '天皇賞（春）',
    big: true,
  },
  {
    id: '7',
    tag: '2021',
    date: '2021/05/09',
    name: 'NHKマイルC',
    big: false,
  },
  {
    id: '8',
    tag: '2021',
    date: '2021/05/16',
    name: 'ヴィクトリアマイル',
    big: false,
  },
  {
    id: '9',
    tag: '2021',
    date: '2021/05/23',
    name: 'オークス',
    big: false,
  },
  {
    id: '10',
    tag: '2021',
    date: '2021/05/30',
    name: '日本ダービー',
    big: true,
  },
  {
    id: '11',
    tag: '2021',
    date: '2021/06/06',
    name: '安田記念',
    big: false,
  },
  {
    id: '12',
    tag: '2021',
    date: '2021/06/27',
    name: '宝塚記念',
    big: true,
  },
  {
    id: '13',
    tag: '2021',
    date: '2021/10/03',
    name: 'スプリンターズS',
    big: false,
  },
  {
    id: '14',
    tag: '2021',
    date: '2021/10/17',
    name: '秋華賞',
    big: false,
  },
  {
    id: '15',
    tag: '2021',
    date: '2021/10/24',
    name: '菊花賞',
    big: true,
  },
  {
    id: '16',
    tag: '2021',
    date: '2021/10/31',
    name: '天皇賞（秋）',
    big: true,
  },
  {
    id: '17',
    tag: '2021',
    date: '2021/11/14',
    name: 'エリザベス女王杯',
    big: false,
  },
  {
    id: '18',
    tag: '2021',
    date: '2021/11/21',
    name: 'マイルチャンピオンシップ',
    big: false,
  },
  {
    id: '19',
    tag: '2021',
    date: '2021/11/28',
    name: 'ジャパンC',
    big: true,
  },
  {
    id: '20',
    tag: '2021',
    date: '2021/12/05',
    name: 'チャンピオンズC',
    big: false,
  },
  {
    id: '21',
    tag: '2021',
    date: '2021/12/12',
    name: '阪神ジュベナイルF',
    big: false,
  },
  {
    id: '22',
    tag: '2021',
    date: '2021/12/19',
    name: '朝日杯フューチュリティS',
    big: false,
  },
  {
    id: '23',
    tag: '2021',
    date: '2021/12/26',
    name: '有馬記念',
    big: true,
  },
  {
    id: '24',
    tag: '2021',
    date: '2021/12/28',
    name: 'ホープフルS',
    big: false,
  },
  {
    id: '22101',
    tag: '2022a',
    date: '2022/02/20',
    name: 'フェブラリーS',
    big: false,
  },
  {
    id: '22102',
    tag: '2022a',
    date: '2022/03/27',
    name: '高松宮記念',
    big: false,
  },
  {
    id: '22103',
    tag: '2022a',
    date: '2022/04/03',
    name: '大阪杯',
    big: false,
  },
  {
    id: '22104',
    tag: '2022a',
    date: '2022/04/10',
    name: '桜花賞',
    big: false,
  },
  {
    id: '22105',
    tag: '2022a',
    date: '2022/04/17',
    name: '皐月賞',
    big: true,
  },
  {
    id: '22106',
    tag: '2022a',
    date: '2022/05/01',
    name: '天皇賞（春）',
    big: true,
  },
  {
    id: '22107',
    tag: '2022a',
    date: '2022/05/08',
    name: 'NHKマイルC',
    big: false,
  },
  {
    id: '22108',
    tag: '2022a',
    date: '2022/05/15',
    name: 'ヴィクトリアマイル',
    big: false,
  },
  {
    id: '22109',
    tag: '2022a',
    date: '2022/05/22',
    name: 'オークス',
    big: false,
  },
  {
    id: '22110',
    tag: '2022a',
    date: '2022/05/29',
    name: '日本ダービー',
    big: true,
  },
  {
    id: '22111',
    tag: '2022a',
    date: '2022/06/05',
    name: '安田記念',
    big: false,
  },
  {
    id: '22112',
    tag: '2022a',
    date: '2022/06/26',
    name: '宝塚記念',
    big: true,
  },
  {
    id: '22201',
    tag: '2022b',
    date: '2022/10/02',
    name: 'スプリンターズS',
    big: false,
  },
  {
    id: '22202',
    tag: '2022b',
    date: '2022/10/16',
    name: '秋華賞',
    big: false,
  },
  {
    id: '22203',
    tag: '2022b',
    date: '2022/10/23',
    name: '菊花賞',
    big: true,
  },
  {
    id: '22204',
    tag: '2022b',
    date: '2022/10/30',
    name: '天皇賞（秋）',
    big: true,
  },
  {
    id: '22205',
    tag: '2022b',
    date: '2022/11/13',
    name: 'エリザベス女王杯',
    big: false,
  },
  {
    id: '22206',
    tag: '2022b',
    date: '2022/11/20',
    name: 'マイルチャンピオンシップ',
    big: false,
  },
  {
    id: '22207',
    tag: '2022b',
    date: '2022/11/27',
    name: 'ジャパンC',
    big: true,
  },
  {
    id: '22208',
    tag: '2022b',
    date: '2022/12/04',
    name: 'チャンピオンズC',
    big: false,
  },
  {
    id: '22209',
    tag: '2022b',
    date: '2022/12/11',
    name: '阪神ジュベナイルF',
    big: false,
  },
  {
    id: '22210',
    tag: '2022b',
    date: '2022/12/18',
    name: '朝日杯フューチュリティS',
    big: false,
  },
  {
    id: '22211',
    tag: '2022b',
    date: '2022/12/25',
    name: '有馬記念',
    big: true,
  },
  {
    id: '22212',
    tag: '2022b',
    date: '2022/12/28',
    name: 'ホープフルS',
    big: false,
  },
  {
    id: '23101',
    tag: '2023a',
    date: '2023/02/19',
    name: 'フェブラリーS',
    big: false,
  },
  {
    id: '23102',
    tag: '2023a',
    date: '2023/03/26',
    name: '高松宮記念',
    big: false,
  },
  {
    id: '23103',
    tag: '2023a',
    date: '2023/04/02',
    name: '大阪杯',
    big: false,
  },
  {
    id: '23104',
    tag: '2023a',
    date: '2023/04/09',
    name: '桜花賞',
    big: false,
  },
  {
    id: '23105',
    tag: '2023a',
    date: '2023/04/16',
    name: '皐月賞',
    big: false,
  },
  {
    id: '23106',
    tag: '2023a',
    date: '2023/04/30',
    name: '天皇賞（春）',
    big: false,
  },
  {
    id: '23107',
    tag: '2023a',
    date: '2023/05/07',
    name: 'NHKマイルC',
    big: false,
  },
  {
    id: '23108',
    tag: '2023a',
    date: '2023/05/14',
    name: 'ヴィクトリアマイル',
    big: false,
  },
  {
    id: '23109',
    tag: '2023a',
    date: '2023/05/21',
    name: 'オークス',
    big: false,
  },
  {
    id: '23110',
    tag: '2023a',
    date: '2023/05/28',
    name: '日本ダービー',
    big: false,
  },
  {
    id: '23111',
    tag: '2023a',
    date: '2023/06/04',
    name: '安田記念',
    big: false,
  },
  {
    id: '23112',
    tag: '2023a',
    date: '2023/06/25',
    name: '宝塚記念',
    big: true,
  },
  {
    id: '23201',
    tag: '2023b',
    date: '2023/10/01',
    name: 'スプリンターズS',
    big: false,
  },
  {
    id: '23202',
    tag: '2023b',
    date: '2023/10/15',
    name: '秋華賞',
    big: false,
  },
  {
    id: '23203',
    tag: '2023b',
    date: '2023/10/22',
    name: '菊花賞',
    big: false,
  },
  {
    id: '23204',
    tag: '2023b',
    date: '2023/10/29',
    name: '天皇賞（秋）',
    big: false,
  },
  {
    id: '23205',
    tag: '2023b',
    date: '2023/11/12',
    name: 'エリザベス女王杯',
    big: false,
  },
  {
    id: '23206',
    tag: '2023b',
    date: '2023/11/19',
    name: 'マイルチャンピオンシップ',
    big: false,
  },
  {
    id: '23207',
    tag: '2023b',
    date: '2023/11/26',
    name: 'ジャパンC',
    big: false,
  },
  {
    id: '23208',
    tag: '2023b',
    date: '2023/12/03',
    name: 'チャンピオンズC',
    big: false,
  },
  {
    id: '23209',
    tag: '2023b',
    date: '2023/12/10',
    name: '阪神ジュベナイルF',
    big: false,
  },
  {
    id: '23210',
    tag: '2023b',
    date: '2023/12/17',
    name: '朝日杯フューチュリティS',
    big: false,
  },
  {
    id: '23211',
    tag: '2023b',
    date: '2023/12/24',
    name: '有馬記念',
    big: true,
  },
  {
    id: '23212',
    tag: '2023b',
    date: '2023/12/28',
    name: 'ホープフルS',
    big: false,
  },
  {
    id: '24101',
    tag: '2024a',
    date: '2024/02/18',
    name: 'フェブラリーS',
    big: false,
  },
  {
    id: '24102',
    tag: '2024a',
    date: '2024/03/24',
    name: '高松宮記念',
    big: false,
  },
  {
    id: '24103',
    tag: '2024a',
    date: '2024/03/31',
    name: '大阪杯',
    big: false,
  },
  {
    id: '24104',
    tag: '2024a',
    date: '2024/04/07',
    name: '桜花賞',
    big: false,
  },
  {
    id: '24105',
    tag: '2024a',
    date: '2024/04/14',
    name: '皐月賞',
    big: false,
  },
  {
    id: '24106',
    tag: '2024a',
    date: '2024/04/28',
    name: '天皇賞（春）',
    big: false,
  },
  {
    id: '24107',
    tag: '2024a',
    date: '2024/05/05',
    name: 'NHKマイルC',
    big: false,
  },
  {
    id: '24108',
    tag: '2024a',
    date: '2024/05/12',
    name: 'ヴィクトリアマイル',
    big: false,
  },
  {
    id: '24109',
    tag: '2024a',
    date: '2024/05/19',
    name: 'オークス',
    big: false,
  },
  {
    id: '24110',
    tag: '2024a',
    date: '2024/05/26',
    name: '日本ダービー',
    big: false,
  },
  {
    id: '24111',
    tag: '2024a',
    date: '2024/06/02',
    name: '安田記念',
    big: false,
  },
  {
    id: '24112',
    tag: '2024a',
    date: '2024/06/23',
    name: '宝塚記念',
    big: true,
  },
  {
    id: '24201',
    tag: '2024b',
    date: '2024/09/29',
    name: 'スプリンターズS',
    big: false,
  },
  {
    id: '24202',
    tag: '2024b',
    date: '2024/10/13',
    name: '秋華賞',
    big: false,
  },
  {
    id: '24203',
    tag: '2024b',
    date: '2024/10/20',
    name: '菊花賞',
    big: false,
  },
  {
    id: '24204',
    tag: '2024b',
    date: '2024/10/27',
    name: '天皇賞（秋）',
    big: false,
  },
  {
    id: '24205',
    tag: '2024b',
    date: '2024/11/10',
    name: 'エリザベス女王杯',
    big: false,
  },
  {
    id: '24206',
    tag: '2024b',
    date: '2024/11/17',
    name: 'マイルチャンピオンシップ',
    big: false,
  },
  {
    id: '24207',
    tag: '2024b',
    date: '2024/11/24',
    name: 'ジャパンC',
    big: false,
  },
  {
    id: '24208',
    tag: '2024b',
    date: '2024/12/01',
    name: 'チャンピオンズC',
    big: false,
  },
  {
    id: '24209',
    tag: '2024b',
    date: '2024/12/08',
    name: '阪神ジュベナイルF',
    big: false,
  },
  {
    id: '24210',
    tag: '2024b',
    date: '2024/12/15',
    name: '朝日杯フューチュリティS',
    big: false,
  },
  {
    id: '24211',
    tag: '2024b',
    date: '2024/12/22',
    name: '有馬記念',
    big: true,
  },
  {
    id: '24212',
    tag: '2024b',
    date: '2024/12/28',
    name: 'ホープフルS',
    big: false,
  },
];

import { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from 'libs/ui/Modal';

export default function Rule() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        ルール
      </Button>
      <Modal open={open} setOpen={setOpen}>
        <div>
          【ルール】
          <br />
          ①1レース1,000円、一部のレースは3,000円
          <br />
          ②軸馬を決め、必ず軸馬を絡めて買う
          <br />
          ③払戻金額ではなく、回収率を競います
          <br />
          ④軸馬的中も競います。馬券当たらなくても、軸馬が3着以内で的中とします
          <br />
          <br />
          【期間】
          <br />
          ○上半期○
          <br />
          フェブラリーS～宝塚記念(12R)
          <br />
          ※3,000円のレース
          <br />
          天皇賞(春)、皐月賞、ダービー、宝塚記念
          <br />
          ○下半期○
          <br />
          スプリンターズS～有馬記念(12R)
          <br />
          ※3,000円のレース
          <br />
          菊花賞、天皇賞(秋)、ジャパンカップ、有馬記念
          <br />
          <br />
          【買い方の例】
          <br />
          ①番が軸の場合
          <br />
          例1.①複勝1,000円
          <br />
          例2.①-②③馬連各500円
          <br />
          例3.①-②③④⑤⑥三連複軸1頭流し各100円
          <br />
          例4.①-②③④三連単1着固定流し各100円 ＋ ①単勝400円
          <br />
          ×の例.①②③④⑤BOX
          <br />
        </div>
      </Modal>
    </>
  );
}

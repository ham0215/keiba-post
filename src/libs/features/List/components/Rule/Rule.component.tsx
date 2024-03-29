import Button from '@mui/material/Button';
import { Modal } from 'libs/ui/Modal';
import { useState } from 'react';

export function Rule() {
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
          ①1レース2,000円、一部のレースは3,000円
          <br />
          ②軸馬を決め、必ず軸馬を絡めて買う
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
          宝塚記念
          <br />
          ○下半期○
          <br />
          スプリンターズS～有馬記念(12R)
          <br />
          ※3,000円のレース
          <br />
          有馬記念
          <br />
          <br />
          【買い方の例】
          <br />
          ①番が軸の場合
          <br />
          例1.①複勝2,000円
          <br />
          例2.①-②③馬連各1,000円
          <br />
          例3.①-②③④⑤⑥三連複軸1頭流し各200円
          <br />
          例4.①-②③④三連単1着固定流し各200円 ＋ ①単勝800円
          <br />
          ×の例.①②③④⑤BOX
          <br />
        </div>
      </Modal>
    </>
  );
}

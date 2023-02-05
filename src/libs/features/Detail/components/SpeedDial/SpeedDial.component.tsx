import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MuiSpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';

import { useSpeedDialPresenter } from './SpeedDial.presenter';

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  keibaId: string;
  canResult: boolean;
};

export function SpeedDial({ open, setOpen, keibaId, canResult }: Props) {
  const { handleClickText, handleClickResult } = useSpeedDialPresenter({
    keibaId,
  });

  return (
    <MuiSpeedDial
      ariaLabel="SpeedDial"
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      hidden={false}
      icon={<SpeedDialIcon />}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <SpeedDialAction
        key="text"
        icon={<BedroomBabyIcon />}
        tooltipTitle="投票"
        tooltipOpen
        onClick={handleClickText}
      />
      {canResult && (
        <SpeedDialAction
          key="result"
          icon={<EmojiEventsIcon />}
          tooltipTitle="結果"
          tooltipOpen
          onClick={handleClickResult}
        />
      )}
    </MuiSpeedDial>
  );
}

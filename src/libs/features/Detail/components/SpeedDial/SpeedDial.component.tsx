import MuiSpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import { useSpeedDialPresenter } from './SpeedDial.presenter';

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  keibaId: number;
  canPost: boolean;
};

export function SpeedDial({ open, setOpen, keibaId, canPost }: Props) {
  const { handleClickText, handleClickResult } = useSpeedDialPresenter({ keibaId });

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
      {canPost ? (
        <SpeedDialAction
          key="text"
          icon={<BedroomBabyIcon />}
          tooltipTitle="投票"
          tooltipOpen
          onClick={handleClickText}
        />
      ) : (
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
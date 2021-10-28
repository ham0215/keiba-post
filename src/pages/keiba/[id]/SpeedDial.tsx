import { useCallback } from 'react';
import { useRouter } from 'next/router';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import TextFieldsIcon from '@mui/icons-material/TextFields';

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  keibaId: number;
};

export default function SpeedDialTooltipOpen({ open, setOpen, keibaId }: Props) {
  const router = useRouter();

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onClickText = useCallback(() => {
    router.push(`/keiba/${keibaId}/post`);
  }, [keibaId, router]);

  return (
    <SpeedDial
      ariaLabel="SpeedDial"
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      hidden={false}
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      <SpeedDialAction key="text" icon={<TextFieldsIcon />} tooltipTitle="text" tooltipOpen onClick={onClickText} />
    </SpeedDial>
  );
}

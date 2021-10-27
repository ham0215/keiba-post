import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import TextFieldsIcon from '@mui/icons-material/TextFields';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    speedDial: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  })
);

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  keibaId: number;
};

export default function SpeedDialTooltipOpen({ open, setOpen, keibaId }: Props) {
  const classes = useStyles();
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
      className={classes.speedDial}
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

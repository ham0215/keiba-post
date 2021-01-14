import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import ImageIcon from '@material-ui/icons/Image';
import TextFieldsIcon from '@material-ui/icons/TextFields';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    speedDial: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }),
);

type Props = {
  open: boolean;
  setOpen: ((open: boolean) => void);
  keibaId: number;
}

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

  const onClickImage = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

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
      <SpeedDialAction
        key='text'
        icon={<TextFieldsIcon />}
        tooltipTitle='text'
        tooltipOpen
        onClick={onClickText}
      />
      <SpeedDialAction
        key='image'
        icon={<ImageIcon />}
        tooltipTitle='image'
        tooltipOpen
        onClick={onClickImage}
      />
    </SpeedDial>
  );
}

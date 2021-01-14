import styled from 'styled-components'
import { format } from 'date-fns'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PreWrapTypography from '../../../components/PreWrapTypography';

const CustomCard = styled(Card)`
  margin: 8px 8px 8px 8px;
`;

export default function PostCard({ text }: { text: string }) {
  return (
    <CustomCard>
      <CardHeader
        avatar={
          <Avatar aria-label="avatar">
            H
          </Avatar>
        }
        action={
          <IconButton aria-label="menu">
            <MoreVertIcon />
          </IconButton>
        }
        title="hamada"
        subheader={format(new Date(), 'yyyy-MM-dd HH:mm')}
      />
      <CardContent>
        <PreWrapTypography variant="body1">
          {text}
        </PreWrapTypography>
      </CardContent>
    </CustomCard>
  );
}

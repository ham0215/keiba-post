import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styled from 'styled-components';
import ExternalLink from 'components/ExternalLink';
import { FaTrophy } from 'react-icons/fa';

type Props = {
  title: string;
  winner?: string;
  url: string;
};

const Span = styled.span`
  margin-left: 10px;
  margin-right: 5px;
`;

export default function ResultCard({ title, winner, url }: Props) {
  return (
    <Card>
      <CardContent>
        <ExternalLink href={url} variant="body1">
          {title}
        </ExternalLink>
        <Span>
          <FaTrophy color="orange" />
        </Span>
        {winner}
      </CardContent>
    </Card>
  );
}

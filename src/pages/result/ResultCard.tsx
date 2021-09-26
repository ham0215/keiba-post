import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';
import ExternalLink from 'components/ExternalLink';
import { Icon } from 'semantic-ui-react';

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
          <Icon name="trophy" size="large" color="yellow" />
        </Span>
        {winner}
      </CardContent>
    </Card>
  );
}

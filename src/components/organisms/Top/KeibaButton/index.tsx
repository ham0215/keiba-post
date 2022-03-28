import { useContext } from 'react';
import styled from '@emotion/styled';
import ButtonBase from '@mui/material/Button';
import { GiHorseHead } from 'react-icons/gi';
import Link from 'components/atoms/Link';
import { UserContext } from 'UserContext';

const Button = styled(ButtonBase)`
  margin-bottom: 5rem;
  width: 90%;
  max-width: 30rem;
  height: 5rem;
  font-size: 2rem;
`;

export default function KeibaButton() {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      {currentUser && currentUser.enabled && (
        <Link href="/keiba">
          <Button variant="contained" color="success">
            <GiHorseHead />
            レース選択
            <GiHorseHead />
          </Button>
        </Link>
      )}
    </>
  );
}

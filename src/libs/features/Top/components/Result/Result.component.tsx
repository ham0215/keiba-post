import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import type { User } from 'libs/firestore/User';

import { ResultCard } from '../ResultCard';
import * as Styles from './Result.styles';

type Props = {
  currentUser: User;
};

export function Result({ currentUser }: Props) {
  return (
    <>
      {currentUser && currentUser.enabled && (
        <Styles.Card>
          <CardContent>
            <Grid container spacing={4}>
              <ResultCard
                url="https://public.flourish.studio/visualisation/15280945/"
                title="2023年後半戦"
                winner="??"
              />
              <ResultCard
                url="https://public.flourish.studio/visualisation/12399742/"
                title="2023年前半戦"
                winner="ham"
                avatar="https://furusato-ippin.co.jp/user_data/img/detail/sakurahum-img1.jpg"
              />
              <ResultCard
                url="https://public.flourish.studio/visualisation/10524869/"
                title="2022年後半戦"
                winner="natsu"
                avatar="https://cdn.netkeiba.com/img.news/?pid=news_img&id=336842"
              />
              <ResultCard
                url="https://public.flourish.studio/visualisation/8528389/"
                title="2022年前半戦"
                winner="mc"
                avatar="https://3.bp.blogspot.com/-BI9UKCTfC2U/WzC9rMr8rcI/AAAAAAABM6w/pfdTvR6aEFcXoaKWCwtQS8hK1F-xnO6owCLcBGAs/s800/keiba_yosouya.png"
              />
              <ResultCard
                url="https://public.flourish.studio/visualisation/7367172/"
                title="2021年後半戦"
                winner="mc"
                avatar="https://3.bp.blogspot.com/-BI9UKCTfC2U/WzC9rMr8rcI/AAAAAAABM6w/pfdTvR6aEFcXoaKWCwtQS8hK1F-xnO6owCLcBGAs/s800/keiba_yosouya.png"
              />
              <ResultCard
                url="https://public.flourish.studio/visualisation/5349437/"
                title="2021年前半戦"
                winner="t"
                avatar="https://prtimes.jp/i/19292/8/resize/d19292-8-952037-0.jpg"
              />
              <ResultCard
                url="https://public.flourish.studio/visualisation/3919343/"
                title="2020年後半戦"
                winner="natsu"
                avatar="https://cdn.netkeiba.com/img.news/?pid=news_img&id=336842"
              />
              <ResultCard
                url="https://public.flourish.studio/visualisation/1807679/"
                title="2020年前半戦"
                winner="ham"
                avatar="https://furusato-ippin.co.jp/user_data/img/detail/sakurahum-img1.jpg"
              />
            </Grid>
          </CardContent>
        </Styles.Card>
      )}
    </>
  );
}

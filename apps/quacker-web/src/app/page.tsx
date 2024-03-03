import { Button } from '@mui/material';
import styles from './page.module.scss';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <>
      <h1 className='text-bold bg-red-600'>hello</h1>
      <Button className='bg-red-500' variant="contained">Contained</Button>
    </>
  );
}

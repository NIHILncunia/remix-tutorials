import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { setMeta } from '@/utils';

export const meta: MetaFunction = () => {
  return setMeta({
    data: {
      title: 'Home',
      url: '/',
    },
  });
};

export default function Index() {
  return (
    <>
      <h1>Home</h1>
      <Link to='/test'>Test</Link>

      <form method='post' action='/test'>
        <input type='text' name='test' />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}

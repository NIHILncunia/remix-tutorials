import type { MetaFunction, LoaderFunction, ActionFunction } from '@remix-run/node';
import { Link, useActionData, useLoaderData } from '@remix-run/react';

export const loader: LoaderFunction = async ({ request, }) => {
  console.log('loader: test');
  return {
    message: 'Hello, world!',
  };
};

export const action: ActionFunction = (
  async ({ request, }) => {
    console.log('action: test', {});

    return {};
  }
);

export const meta: MetaFunction = () => {
  return [
    { title: 'Test', },
  ];
};

export default function Test() {
  const { message, } = useLoaderData<typeof loader>();

  const onClick = () => {
    fetch('/api/test', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <div>
      <h1>{message}</h1>

      <button onClick={onClick} className='bg-blue-500 text-white'>Click me</button>

      <Link to='/'>Home</Link>
    </div>
  );
}

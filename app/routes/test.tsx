import type { MetaFunction, ActionFunctionArgs } from '@remix-run/node';

export const loader = async () => {
  console.log('loader: test');
  return {};
};

export const action = (
  async ({ request, }: ActionFunctionArgs) => {
    console.log('action: test');
    return {};
  }
);

export const meta: MetaFunction = () => {
  return [
    { title: 'Test', },
  ];
};

export default function Test() {
  return (
    <div>Test</div>
  );
}

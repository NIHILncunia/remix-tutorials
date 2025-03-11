import { type ActionFunction, type LoaderFunction } from '@remix-run/node';

// GET일 때에 loader가 실행되고, action은 실행되지 않는다.
export const loader: LoaderFunction = (
  ({ request, }) => {
    console.log('GET');
    return Response.json({
      test: 'test',
    }, {
      status: 200,
    });
  }
);

// get을 제외한 http method는 action이 먼저 실행된다.
// 그 후에 loader가 실행된다.
export const action: ActionFunction = (
  ({ request, }) => {
    switch (request.method) {
    case 'POST':
      console.log('POST');
      return Response.json({
        test: 'test',
      });
    case 'PATCH':
      console.log('PATCH');
      return Response.json({
        test: 'test',
      });
    case 'DELETE':
      console.log('DELETE');
      return Response.json({
        test: 'test',
      });
    default:
      console.log('DEFAULT');
      return Response.json({
        error: 'Method not allowed',
      }, { status: 405, });
    }
  }
);

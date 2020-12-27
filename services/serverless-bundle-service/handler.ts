import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { mypackage } from 'my-package'

export const hello: APIGatewayProxyHandler = async (_event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: mypackage()
    }, null, 2),
  };
}

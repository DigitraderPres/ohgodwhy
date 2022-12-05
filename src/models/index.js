// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ProductList } = initSchema(schema);

export {
  ProductList
};
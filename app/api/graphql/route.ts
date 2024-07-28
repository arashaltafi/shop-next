import { schema } from '@/utils/graphql-schema';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

const handler = startServerAndCreateNextHandler(schema);

export { handler as GET, handler as POST };
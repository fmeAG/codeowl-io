import { GraphQLClient } from 'graphql-request';

export const apiGraphQLClient = new GraphQLClient(process.env.GRAPHCMS_URL, {
  headers:
    process.env.NODE_ENV === 'development' ||
    process.env.VERCEL_ENV === 'preview' ||
    process.env.VERCEL_ENV === 'development'
      ? { 'gcms-stage': 'DRAFT' }
      : {},
});

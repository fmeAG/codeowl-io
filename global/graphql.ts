import { GraphQLClient } from 'graphql-request';
import { isDev, isPreview } from './constants';

export const apiGraphQLClient = new GraphQLClient(process.env.GRAPHCMS_URL, {
  headers: isDev || isPreview ? { 'gcms-stage': 'DRAFT' } : {},
});

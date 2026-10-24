import type { Dict } from './i18n';

// The API reference's sections, as [anchor, heading]: the docs' contents link to them and the page lists them.
export const apiSections = (d: Dict): [string, string][] => {
  const A = d.docs.api;
  return [['setup', A.setupTitle], ['limits', A.limitsTitle], ['engines', A.enginesTitle], ['endpoints', A.endpointsTitle], ['errors', A.errorsTitle], ['examples', A.examplesTitle], ['security', A.securityTitle]];
};

import S from '@sanity/desk-tool/structure-builder';
import { MdWeb, MdSettings, MdHome } from 'react-icons/md';

export default () =>
  S.list()
    .title('GMartinez website')
    .items([
      S.listItem()
        .title('Website')
        .icon(MdWeb)
        .child(
          S.list()
            .title('Website')
            .items([
              S.listItem()
                .title('Site configuration')
                .icon(MdSettings)
                .child(S.document().title('Site configuration').schemaType('siteSettings').documentId('siteSettings')),
               
            ]),
        ),
        S.divider(),
        S.listItem()
        .title('Front Page')
        .icon(MdHome)
        .child(S.document().title('Site configuration').schemaType('frontPage').documentId('frontPage'),
        ),
       ...S.documentTypeListItems().filter(item => !['siteSettings', 'frontPage'].includes(item.getId()))
    ]);



export const getDefaultDocumentNode = (props) => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */

  return S.document().views([S.view.form()]);
};
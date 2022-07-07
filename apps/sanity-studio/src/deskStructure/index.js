import S from '@sanity/desk-tool/structure-builder';
import { MdWeb, MdSettings } from 'react-icons/md';

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
    ]);

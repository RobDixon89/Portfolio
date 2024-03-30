import { HomeIcon } from '@sanity/icons';
import { ListItemBuilder, StructureBuilder } from 'sanity/structure';

export const myStructure = (S: StructureBuilder) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Home')
        .icon(HomeIcon)
        .child(S.document().schemaType('homepage').documentId('homepage')),
      ...S.documentTypeListItems().filter(
        (listItem: ListItemBuilder) =>
          !['homepage'].includes(listItem.getId() as string)
      ),
    ]);

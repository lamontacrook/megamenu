export const navigationListQuery = `{
  topList {
    items {
      menuItems {
        menuName
        items {
          ... on LinksModel {
            linkName
            linkURL
            isBold
          }
        }
      }
    }
  }
}`;
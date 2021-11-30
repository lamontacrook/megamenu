export const navigationListQuery = `{
  topList {
    items {
      menuItems {
        _path
        menuName
        items {
          ... on CategoryListModel {
            _path
            categoryName
            category {
              linkName
              linkURL
              isBold
            }
          }
        }
        
      }
    }
  }
}`;
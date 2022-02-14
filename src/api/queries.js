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

export const screenQuery = `{
  screenList {
    items {
      navigation {
        ... on TopModel {
          menuItems {
            menuName
            items {
              ... on CategoryListModel {
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
      block {
        ... on TeaserModel {
          teaserImage {
            ... on ImageRef {
              _authorUrl
              width
              height
              mimeType
            }
          }
          teaserTitle
          teaserDescription {
            html
          }
          entityType
        }
      }
    }
  }
}`;
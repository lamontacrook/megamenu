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

export function screenQuery(name) {
  return `{
  screenList(filter: {
    screenName: {
      _expressions: {
        value: "${name}"
        _ignoreCase: true
      }
    }
  }) {
    items {
      navigation {
        ... on TopModel {
          menuItems {
            menuName
            items {
              __typename
              ... on LinksModel {
                linkURL
                linkName
              }
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
        __typename
        ... on TeaserModel {
          _model {
            _path
            title
          }
          teaserImage {
            ... on ImageRef {
              _authorUrl
              _publishUrl
              width
              height
              mimeType
            }
          }
          teaserTitle
          teaserDescription {
            html
            plaintext
          }
          entityType
        }
        ... on ExperienceFragmentModel {
          _model {
            title
          }
          name
          experienceFragment {
            ... on PageRef { 
              _publishUrl
            
            }
          }
        }
      }
    }
  }
}`;
}

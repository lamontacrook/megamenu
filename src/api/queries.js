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
              linkurl
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
            menuLink
            items {
              __typename
              ... on LinksModel {
                linkurl
                linkName
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
          teaserPreTitle
          teaserCallToAction
          teaserLink
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
              _authorUrl
            }
          }
        }
        ... on RichTextModel {
          _model {
            title
          }
          content {
            html
          }
          entityType
        }
      }
    }
  }
}`;
}

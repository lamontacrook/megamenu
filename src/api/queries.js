export const navigationQuery = `{
  topList {
    items {
      menuItems {
        ... on ScreenModel {
          screenName
          _path
        }
      }
    }
  }
}`;

export function screenByPath(path) {
  path = path.replaceAll(":", "/");
  return `{
  screen: screenByPath(_path: "${path}") {
    body: item {
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
        ... on ImageListModel {
          _model {
            _path
            title
          }
          imageListPromoAssets {
            promoLink
            promoScreenReference {
              ... on ScreenModel {
                _path
              }
            }
            promoTitle
            promoPretitle
            promoImage {
              ... on ImageRef {
                _publishUrl
                _authorUrl
              }
            }
          }
        }
      }
    }
  }
}`;
}

export function screenQuery(name) {
  return `{
    screen: screenList(filter: {
    screenName: {
      _expressions: {
        value: "${name}"
        _ignoreCase: true
      }
    }
  }) {
    body: items {
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
        ... on ImageListModel {
          _model {
            _path
            title
          }
          imageListPromoAssets {
            promoLink
            promoScreenReference {
              ... on ScreenModel {
                _path
              }
            }
            promoTitle
            promoPretitle
            promoImage {
              ... on ImageRef {
                _publishUrl
                _authorUrl
              }
            }
          }
        }
      }
    }
  }
}`;
}

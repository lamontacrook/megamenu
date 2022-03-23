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

export  const xfShare = `{
  experienceFragmentList(filter: {
    shareThisStory: {
      _expressions: {
        value: true
      }
    }
  }) {
    items {
      shareThisStory
      xfName
    }
  }
}`;

export function screenByPath(path) {
  path = path.replaceAll(":", "/");
  return `{
    screen: screenByPath(
      _path: "${path}"
    ) {
      body: item {
        _path
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
            xfName
            xfMainImage {
              ... on ImageRef {
                _publishUrl
              }
            }
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
            imageListTitle
            imageListPromoAssets {
              ... on PromoContentModel {
                promoLink
                promoScreenReference {
                  ... on ScreenModel {
                    _path
                  }
                }
                promoTitle
                promoDescription {
                  plaintext
                }
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
    }
  }`;
}

export function screenQuery(name) {
  name = name.replaceAll("-", " ");
  return `{
    screen: screenList(
      filter: {screenName: {_expressions: {value: "${name}", _ignoreCase: true}}}
    ) {
      body: items {
        _path
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
            xfMainImage {
              ... on ImageRef {
                _publishUrl
                
              }
            }
            xfName
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
              ... on WkndGqlAdventureModel {
                promoTitle: adventureTitle
                promoDescription: adventureDescription {
                  plaintext
                }
                promoImage: adventurePrimaryImage {
                  ... on ImageRef {
                    _publishUrl
                  }
                }
              }
              ...on ExperienceFragmentModel {
                promoTitle: xfName
                promoDescription: xfDescription {
                  plaintext
                }
                promoScreenReference: xfScreenReference {
                  ... on ScreenModel {
                    _path
                  }
                }
                promoImage: xfMainImage {
                  ... on ImageRef {
                    _publishUrl
                  }
                }
              }
            }
          }
        }
      }
    }
  }`;
}

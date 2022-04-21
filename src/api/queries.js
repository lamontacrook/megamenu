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
      _references {
        ... on ImageRef {
          _publishUrl
          _path
          __typename
        }
      }
      body: item {
        _path
        block {
          __typename
          ... on ArticleModel {
            _model {
              _path
              title
            }
            articleBody {
              json
              
            }
            articleTitle
            articleMainImage {
              ... on ImageRef {
                _publishUrl
              }
            }
            sideRail: articleStory2Share {
              ... on ScreenModel {
                _path
                screenName
              }
            }
          }
          ... on TeaserModel {
            _model {
              _path
              title
            }
            teaserPreTitle
            teaserCallToAction
            teaserLink {
              ... on ScreenModel {
                _path
              }
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
            xfName
            sideRail: xfStorytoShare {
              ... on ScreenModel {
                screenName
                _path
              }
            }
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
              ... on ScreenModel {
                _path
                block {
                  ... on ArticleModel {
                    _path
                    promoTitle: articleTitle
                    promoDescription: articleSummary {
                      plaintext
                    }
                    promoImage: articleMainImage {
                      ... on ImageRef {
                        _publishUrl
                      }
                    }
                  }
                  ... on ExperienceFragmentModel {
                    _path
                    promoTitle: xfName
                    promoDescription: xfDescription {
                      plaintext
                    }
                    promoImage: xfMainImage {
                      ... on ImageRef {
                        _publishUrl
                      }
                    }
                  }
                }
              }
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
          ... on AdventureGridModel {
            _model {
              _path
              title
            }
            content: gridTitle {
              plaintext
              html
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
          ... on ArticleModel {
            _model {
              _path
              title
            }
            articleBody {
              json
              
            }
            articleTitle
            articleMainImage {
              ... on ImageRef {
                _publishUrl
              }
            }
            sideRail: articleStory2Share {
              ... on ScreenModel {
                _path
                screenName
              }
            }
          }
          ... on TeaserModel {
            _model {
              _path
              title
            }
            teaserPreTitle
            teaserCallToAction
            teaserLink {
              ... on ScreenModel {
                _path
              }
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
              ... on ScreenModel {
                _path
                block {
                  ... on ArticleModel {
                    _path
                    promoTitle: articleTitle
                    promoDescription: articleSummary {
                      plaintext
                    }
                    promoImage: articleMainImage {
                      ... on ImageRef {
                        _publishUrl
                      }
                    }
                  }
                  ... on ExperienceFragmentModel {
                    _path
                    promoTitle: xfName
                    promoDescription: xfDescription {
                      plaintext
                    }
                    promoImage: xfMainImage {
                      ... on ImageRef {
                        _publishUrl
                      }
                    }
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

export const adventureList = `{
	adventureList {
    items {
      adventureTitle
      adventureDescription {
        plaintext
      }
      adventurePrimaryImage {
        ... on ImageRef {
          _publishUrl
        }
      }
    }
  }
}`;

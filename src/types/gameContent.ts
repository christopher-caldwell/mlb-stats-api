export interface GameContentResponse {
  copyright: string
  link: string
  editorial: {
    preview: {}
    articles: null
    recap: {
      mlb: {
        type: string
        state: string
        date: string
        headline: string
        seoTitle: string
        slug: string
        blurb: string
        keywordsAll: (
          | {
              value: string
              displayName: string
            }
          | {
              type: string
              value: string
              displayName: string
            }
        )[]
        keywordsDisplay: unknown[]
        image: {
          title: string
          altText: string
          templateUrl: string
          cuts: {
            aspectRatio: string
            width: number
            height: number
            src: string
            at2x: string
            at3x: string
          }[]
        }
        seoKeywords: string
        body: string
        contributors: {
          name: string
        }[]
        photo: {
          title: string
          altText: string
          templateUrl: string
          cuts: {
            aspectRatio: string
            width: number
            height: number
            src: string
            at2x: string
            at3x: string
          }[]
        }
        url: string
        media: {
          type: string
          state: string
          date: string
          id: string
          headline: string
          seoTitle: string
          slug: string
          blurb: string
          keywordsAll: {
            type: string
            value: string
            displayName: string
          }[]
          keywordsDisplay: unknown[]
          image: {
            title: string
            altText: null
            templateUrl: string
            cuts: {
              aspectRatio: string
              width: number
              height: number
              src: string
              at2x: string
              at3x: string
            }[]
          }
          noIndex: boolean
          mediaPlaybackId: string
          title: string
          description: string
          duration: string
          guid: string
          mediaPlaybackUrl: string
          playbacks: {
            name: string
            url: string
            width: string
            height: string
          }[]
        }
      }
    }
    wrap: {}
  }
  media: {
    epg: (
      | {
          title: string
          items: {
            callLetters: string
            espnAuthRequired: boolean
            tbsAuthRequired: boolean
            espn2AuthRequired: boolean
            gameDate: string
            contentId: string
            fs1AuthRequired: boolean
            mediaId: string
            mediaFeedType: string
            mlbnAuthRequired: boolean
            foxAuthRequired: boolean
            mediaFeedSubType: string
            freeGame: boolean
            id: number
            mediaState: string
            abcAuthRequired: boolean
          }[]
        }
      | {
          title: string
          items: {
            mediaFeedType: string
            renditionName: string
            description: string
            language: string
            id: number
            type: string
          }[]
        }
      | {
          title: string
          items: {
            callLetters: string
            mediaFeedSubType: string
            contentId: string
            language: string
            id: number
            mediaState: string
            mediaId: string
            type: string
          }[]
        }
    )[]
    epgAlternate: {
      items: {
        type: string
        state: string
        date: string
        id: string
        headline: string
        seoTitle: string
        slug: string
        blurb: string
        keywordsAll: {
          type: string
          value: string
          displayName: string
        }[]
        keywordsDisplay: {
          type: string
          value: string
          displayName: string
        }[]
        image: {
          title: string
          altText: null
          templateUrl: string
          cuts: {
            aspectRatio: string
            width: number
            height: number
            src: string
            at2x: string
            at3x: string
          }[]
        }
        noIndex: boolean
        mediaPlaybackId: string
        title: string
        description: string
        duration: string
        mediaPlaybackUrl: string
        playbacks: {
          name: string
          url: string
          width: string
          height: string
        }[]
      }[]
      title: string
    }[]
    milestones: null
    featuredMedia: {
      id: string
    }
    freeGame: boolean
    enhancedGame: boolean
  }
  highlights: {
    scoreboard: null
    gameCenter: null
    milestone: null
    highlights: {
      items: (
        | {
            type: string
            state: string
            date: string
            id: string
            headline: string
            seoTitle: string
            slug: string
            blurb: string
            keywordsAll: {
              type: string
              value: string
              displayName: string
            }[]
            keywordsDisplay: {
              type: string
              value: string
              displayName: string
            }[]
            image: {
              title: string
              altText: null
              templateUrl: string
              cuts: {
                aspectRatio: string
                width: number
                height: number
                src: string
                at2x: string
                at3x: string
              }[]
            }
            noIndex: boolean
            mediaPlaybackId: string
            title: string
            description: string
            duration: string
            mediaPlaybackUrl: string
            playbacks: {
              name: string
              url: string
              width: string
              height: string
            }[]
          }
        | {
            type: string
            state: string
            date: string
            id: string
            headline: string
            seoTitle: string
            slug: string
            blurb: string
            keywordsAll: {
              type: string
              value: string
              displayName: string
            }[]
            keywordsDisplay: unknown[]
            image: {
              title: string
              altText: null
              templateUrl: string
              cuts: {
                aspectRatio: string
                width: number
                height: number
                src: string
                at2x: string
                at3x: string
              }[]
            }
            noIndex: boolean
            mediaPlaybackId: string
            title: string
            description: string
            duration: string
            guid: string
            mediaPlaybackUrl: string
            playbacks: {
              name: string
              url: string
              width: string
              height: string
            }[]
          }
        | {
            type: string
            state: string
            date: string
            id: string
            headline: string
            seoTitle: string
            slug: string
            blurb: string
            keywordsAll: {
              type: string
              value: string
              displayName: string
            }[]
            keywordsDisplay: unknown[]
            image: {
              title: string
              altText: null
              templateUrl: string
              cuts: {
                aspectRatio: string
                width: number
                height: number
                src: string
                at2x: string
                at3x: string
              }[]
            }
            noIndex: boolean
            mediaPlaybackId: string
            title: string
            description: string
            duration: string
            mediaPlaybackUrl: string
            playbacks: {
              name: string
              url: string
              width: string
              height: string
            }[]
          }
      )[]
    }
    live: {
      items: unknown[]
    }
    scoreboardPreview: {
      items: unknown[]
    }
  }
  summary: {
    hasPreviewArticle: boolean
    hasRecapArticle: boolean
    hasWrapArticle: boolean
    hasHighlightsVideo: boolean
  }
  gameNotes: {}
}

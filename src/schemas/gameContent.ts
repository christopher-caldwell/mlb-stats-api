import { z } from 'zod'

import type { TypeGenConfig } from '../types'

export const gameContentSchema = z
  .object({
    copyright: z.string(),
    link: z.string(),
    editorial: z.object({
      preview: z.object({}),
      articles: z.null(),
      recap: z.object({
        mlb: z.object({
          type: z.string(),
          state: z.string(),
          date: z.string(),
          headline: z.string(),
          seoTitle: z.string(),
          slug: z.string(),
          blurb: z.string(),
          keywordsAll: z.array(
            z.union([
              z.object({ value: z.string(), displayName: z.string() }),
              z.object({
                type: z.string(),
                value: z.string(),
                displayName: z.string(),
              }),
            ])
          ),
          keywordsDisplay: z.array(z.unknown()),
          image: z.object({
            title: z.string(),
            altText: z.string(),
            templateUrl: z.string(),
            cuts: z.array(
              z.object({
                aspectRatio: z.string(),
                width: z.number(),
                height: z.number(),
                src: z.string(),
                at2x: z.string(),
                at3x: z.string(),
              })
            ),
          }),
          seoKeywords: z.string(),
          body: z.string(),
          contributors: z.array(z.object({ name: z.string() })),
          photo: z.object({
            title: z.string(),
            altText: z.string(),
            templateUrl: z.string(),
            cuts: z.array(
              z.object({
                aspectRatio: z.string(),
                width: z.number(),
                height: z.number(),
                src: z.string(),
                at2x: z.string(),
                at3x: z.string(),
              })
            ),
          }),
          url: z.string(),
          media: z.object({
            type: z.string(),
            state: z.string(),
            date: z.string(),
            id: z.string(),
            headline: z.string(),
            seoTitle: z.string(),
            slug: z.string(),
            blurb: z.string(),
            keywordsAll: z.array(
              z.object({
                type: z.string(),
                value: z.string(),
                displayName: z.string(),
              })
            ),
            keywordsDisplay: z.array(z.unknown()),
            image: z.object({
              title: z.string(),
              altText: z.null(),
              templateUrl: z.string(),
              cuts: z.array(
                z.object({
                  aspectRatio: z.string(),
                  width: z.number(),
                  height: z.number(),
                  src: z.string(),
                  at2x: z.string(),
                  at3x: z.string(),
                })
              ),
            }),
            noIndex: z.boolean(),
            mediaPlaybackId: z.string(),
            title: z.string(),
            description: z.string(),
            duration: z.string(),
            guid: z.string(),
            mediaPlaybackUrl: z.string(),
            playbacks: z.array(
              z.object({
                name: z.string(),
                url: z.string(),
                width: z.string(),
                height: z.string(),
              })
            ),
          }),
        }),
      }),
      wrap: z.object({}),
    }),
    media: z.object({
      epg: z.array(
        z.union([
          z.object({
            title: z.string(),
            items: z.array(
              z.object({
                callLetters: z.string(),
                espnAuthRequired: z.boolean(),
                tbsAuthRequired: z.boolean(),
                espn2AuthRequired: z.boolean(),
                gameDate: z.string(),
                contentId: z.string(),
                fs1AuthRequired: z.boolean(),
                mediaId: z.string(),
                mediaFeedType: z.string(),
                mlbnAuthRequired: z.boolean(),
                foxAuthRequired: z.boolean(),
                mediaFeedSubType: z.string(),
                freeGame: z.boolean(),
                id: z.number(),
                mediaState: z.string(),
                abcAuthRequired: z.boolean(),
              })
            ),
          }),
          z.object({
            title: z.string(),
            items: z.array(
              z.object({
                mediaFeedType: z.string(),
                renditionName: z.string(),
                description: z.string(),
                language: z.string(),
                id: z.number(),
                type: z.string(),
              })
            ),
          }),
          z.object({
            title: z.string(),
            items: z.array(
              z.object({
                callLetters: z.string(),
                mediaFeedSubType: z.string(),
                contentId: z.string(),
                language: z.string(),
                id: z.number(),
                mediaState: z.string(),
                mediaId: z.string(),
                type: z.string(),
              })
            ),
          }),
        ])
      ),
      epgAlternate: z.array(
        z.object({
          items: z.array(
            z.object({
              type: z.string(),
              state: z.string(),
              date: z.string(),
              id: z.string(),
              headline: z.string(),
              seoTitle: z.string(),
              slug: z.string(),
              blurb: z.string(),
              keywordsAll: z.array(
                z.object({
                  type: z.string(),
                  value: z.string(),
                  displayName: z.string(),
                })
              ),
              keywordsDisplay: z.array(
                z.object({
                  type: z.string(),
                  value: z.string(),
                  displayName: z.string(),
                })
              ),
              image: z.object({
                title: z.string(),
                altText: z.null(),
                templateUrl: z.string(),
                cuts: z.array(
                  z.object({
                    aspectRatio: z.string(),
                    width: z.number(),
                    height: z.number(),
                    src: z.string(),
                    at2x: z.string(),
                    at3x: z.string(),
                  })
                ),
              }),
              noIndex: z.boolean(),
              mediaPlaybackId: z.string(),
              title: z.string(),
              description: z.string(),
              duration: z.string(),
              mediaPlaybackUrl: z.string(),
              playbacks: z.array(
                z.object({
                  name: z.string(),
                  url: z.string(),
                  width: z.string(),
                  height: z.string(),
                })
              ),
            })
          ),
          title: z.string(),
        })
      ),
      milestones: z.null(),
      featuredMedia: z.object({ id: z.string() }),
      freeGame: z.boolean(),
      enhancedGame: z.boolean(),
    }),
    highlights: z.object({
      scoreboard: z.null(),
      gameCenter: z.null(),
      milestone: z.null(),
      highlights: z.object({
        items: z.array(
          z.union([
            z.object({
              type: z.string(),
              state: z.string(),
              date: z.string(),
              id: z.string(),
              headline: z.string(),
              seoTitle: z.string(),
              slug: z.string(),
              blurb: z.string(),
              keywordsAll: z.array(
                z.object({
                  type: z.string(),
                  value: z.string(),
                  displayName: z.string(),
                })
              ),
              keywordsDisplay: z.array(
                z.object({
                  type: z.string(),
                  value: z.string(),
                  displayName: z.string(),
                })
              ),
              image: z.object({
                title: z.string(),
                altText: z.null(),
                templateUrl: z.string(),
                cuts: z.array(
                  z.object({
                    aspectRatio: z.string(),
                    width: z.number(),
                    height: z.number(),
                    src: z.string(),
                    at2x: z.string(),
                    at3x: z.string(),
                  })
                ),
              }),
              noIndex: z.boolean(),
              mediaPlaybackId: z.string(),
              title: z.string(),
              description: z.string(),
              duration: z.string(),
              mediaPlaybackUrl: z.string(),
              playbacks: z.array(
                z.object({
                  name: z.string(),
                  url: z.string(),
                  width: z.string(),
                  height: z.string(),
                })
              ),
            }),
            z.object({
              type: z.string(),
              state: z.string(),
              date: z.string(),
              id: z.string(),
              headline: z.string(),
              seoTitle: z.string(),
              slug: z.string(),
              blurb: z.string(),
              keywordsAll: z.array(
                z.object({
                  type: z.string(),
                  value: z.string(),
                  displayName: z.string(),
                })
              ),
              keywordsDisplay: z.array(z.unknown()),
              image: z.object({
                title: z.string(),
                altText: z.null(),
                templateUrl: z.string(),
                cuts: z.array(
                  z.object({
                    aspectRatio: z.string(),
                    width: z.number(),
                    height: z.number(),
                    src: z.string(),
                    at2x: z.string(),
                    at3x: z.string(),
                  })
                ),
              }),
              noIndex: z.boolean(),
              mediaPlaybackId: z.string(),
              title: z.string(),
              description: z.string(),
              duration: z.string(),
              guid: z.string(),
              mediaPlaybackUrl: z.string(),
              playbacks: z.array(
                z.object({
                  name: z.string(),
                  url: z.string(),
                  width: z.string(),
                  height: z.string(),
                })
              ),
            }),
            z.object({
              type: z.string(),
              state: z.string(),
              date: z.string(),
              id: z.string(),
              headline: z.string(),
              seoTitle: z.string(),
              slug: z.string(),
              blurb: z.string(),
              keywordsAll: z.array(
                z.object({
                  type: z.string(),
                  value: z.string(),
                  displayName: z.string(),
                })
              ),
              keywordsDisplay: z.array(z.unknown()),
              image: z.object({
                title: z.string(),
                altText: z.null(),
                templateUrl: z.string(),
                cuts: z.array(
                  z.object({
                    aspectRatio: z.string(),
                    width: z.number(),
                    height: z.number(),
                    src: z.string(),
                    at2x: z.string(),
                    at3x: z.string(),
                  })
                ),
              }),
              noIndex: z.boolean(),
              mediaPlaybackId: z.string(),
              title: z.string(),
              description: z.string(),
              duration: z.string(),
              mediaPlaybackUrl: z.string(),
              playbacks: z.array(
                z.object({
                  name: z.string(),
                  url: z.string(),
                  width: z.string(),
                  height: z.string(),
                })
              ),
            }),
          ])
        ),
      }),
      live: z.object({ items: z.array(z.unknown()) }),
      scoreboardPreview: z.object({ items: z.array(z.unknown()) }),
    }),
    summary: z.object({
      hasPreviewArticle: z.boolean(),
      hasRecapArticle: z.boolean(),
      hasWrapArticle: z.boolean(),
      hasHighlightsVideo: z.boolean(),
    }),
    gameNotes: z.object({}),
  })
  .describe('Game Content')

export type GameContentSchemaResponse = z.infer<typeof gameContentSchema>

export const gameContentGen: TypeGenConfig = {
  typeName: 'GameContentResponse',
  outputFileName: 'gameContent.ts',
  schema: gameContentSchema,
}

export interface GetGameContentArgs {
  highlightLimit?: string | number
  gamePk: string | number
}

export interface GameResponse {
  copyright: string
  gamePk: number
  link: string
  metaData: {
    wait: number
    timeStamp: string
    gameEvents: string[]
    logicalEvents: string[]
  }
  gameData: {
    game: {
      pk: number
      type: string
      doubleHeader: string
      id: string
      gamedayType: string
      tiebreaker: string
      gameNumber: number
      calendarEventID: string
      season: string
      seasonDisplay: string
    }
    datetime: {
      dateTime: string
      originalDate: string
      officialDate: string
      dayNight: string
      time: string
      ampm: string
    }
    status: {
      abstractGameState: string
      codedGameState: string
      detailedState: string
      statusCode: string
      startTimeTBD: boolean
      abstractGameCode: string
    }
    teams: {
      away: {
        springLeague: {
          id: number
          name: string
          link: string
          abbreviation: string
        }
        allStarStatus: string
        id: number
        name: string
        link: string
        season: number
        venue: {
          id: number
          name: string
          link: string
        }
        springVenue: {
          id: number
          link: string
        }
        teamCode: string
        fileCode: string
        abbreviation: string
        teamName: string
        locationName: string
        firstYearOfPlay: string
        league: {
          id: number
          name: string
          link: string
        }
        division: {
          id: number
          name: string
          link: string
        }
        sport: {
          id: number
          link: string
          name: string
        }
        shortName: string
        record: {
          gamesPlayed: number
          wildCardGamesBack: string
          leagueGamesBack: string
          springLeagueGamesBack: string
          sportGamesBack: string
          divisionGamesBack: string
          conferenceGamesBack: string
          leagueRecord: {
            wins: number
            losses: number
            ties: number
            pct: string
          }
          records: {}
          divisionLeader: boolean
          wins: number
          losses: number
          winningPercentage: string
        }
        franchiseName: string
        clubName: string
        active: boolean
      }
      home: {
        springLeague: {
          id: number
          name: string
          link: string
          abbreviation: string
        }
        allStarStatus: string
        id: number
        name: string
        link: string
        season: number
        venue: {
          id: number
          name: string
          link: string
        }
        springVenue: {
          id: number
          link: string
        }
        teamCode: string
        fileCode: string
        abbreviation: string
        teamName: string
        locationName: string
        firstYearOfPlay: string
        league: {
          id: number
          name: string
          link: string
        }
        division: {
          id: number
          name: string
          link: string
        }
        sport: {
          id: number
          link: string
          name: string
        }
        shortName: string
        record: {
          gamesPlayed: number
          wildCardGamesBack: string
          leagueGamesBack: string
          springLeagueGamesBack: string
          sportGamesBack: string
          divisionGamesBack: string
          conferenceGamesBack: string
          leagueRecord: {
            wins: number
            losses: number
            ties: number
            pct: string
          }
          records: {}
          divisionLeader: boolean
          wins: number
          losses: number
          winningPercentage: string
        }
        franchiseName: string
        clubName: string
        active: boolean
      }
    }
  }
  players?:
    | {
        [x: string]: {
          id: number
          fullName?: (string | null) | undefined
          link: string
          firstName?: (string | null) | undefined
          lastName?: (string | null) | undefined
          birthDate?: (string | null) | undefined
          currentAge?: (number | null) | undefined
          birthCity?: (string | null) | undefined
          birthStateProvince?: (string | null) | undefined
          birthCountry?: (string | null) | undefined
          height?: (string | null) | undefined
          weight?: (number | null) | undefined
          active?: (boolean | null) | undefined
          primaryPosition: {
            code: string
            name: string
            type: string
            abbreviation: string
          }
          useName?: (string | null) | undefined
          useLastName?: (string | null) | undefined
          middleName?: (string | null) | undefined
          boxscoreName?: (string | null) | undefined
          gender?: (string | null) | undefined
          isPlayer?: (boolean | null) | undefined
          isVerified?: (boolean | null) | undefined
          draftYear?: (number | null) | undefined
          batSide?:
            | ({
                code: string
                description: string
              } | null)
            | undefined
          pitchHand?:
            | ({
                code: string
                description: string
              } | null)
            | undefined
          nameFirstLast?: (string | null) | undefined
          nameSlug?: (string | null) | undefined
          firstLastName?: (string | null) | undefined
          lastFirstName?: (string | null) | undefined
          lastInitName?: (string | null) | undefined
          initLastName?: (string | null) | undefined
          fullFMLName?: (string | null) | undefined
          fullLFMName?: (string | null) | undefined
          strikeZoneTop?: (number | null) | undefined
          strikeZoneBottom?: (number | null) | undefined
        }
      }
    | undefined
  liveData: {
    plays: {
      allPlays: {
        result: {
          type: string
          event: string
          eventType?: string | undefined
          description: string
          rbi: number
          awayScore?: number | undefined
          homeScore?: number | undefined
          isOut: boolean
        }
        about: {
          atBatIndex: number
          halfInning: string
          isTopInning: boolean
          inning: number
          startTime: string
          endTime: string
          isComplete: boolean
          isScoringPlay?: boolean | undefined
          hasReview: boolean
          hasOut: boolean
          captivatingIndex: number
        }
        count: {
          balls: number
          strikes: number
          outs: number
        }
        matchup: {
          batter: {
            id: number
            fullName: string
            link: string
          }
          batSide: {
            code: string
            description: string
          }
          pitcher: {
            id: number
            fullName: string
            link: string
          }
          pitchHand: {
            code: string
            description: string
          }
          postOnFirst?:
            | ({
                id: number
                fullName: string
                link: string
              } | null)
            | undefined
          batterHotColdZones: unknown[]
          pitcherHotColdZones: unknown[]
          splits: {
            batter: string
            pitcher: string
            menOnBase: string
          }
        }
        pitchIndex: number[]
        actionIndex: number[]
        runnerIndex: number[]
        runners: {
          movement: {
            originBase?: (string | null) | undefined
            start?: (string | null) | undefined
            end?: (string | null) | undefined
            outBase?: (string | null) | undefined
            isOut: boolean
            outNumber?: (number | null) | undefined
          }
          details: {
            event: string
            eventType?: string | undefined
            movementReason?: (string | null) | undefined
            runner: {
              id: number
              fullName: string
              link: string
            }
            responsiblePitcher?:
              | ({
                  id: number
                  link: string
                } | null)
              | undefined
            isScoringEvent: boolean
            rbi: boolean
            earned: boolean
            teamUnearned: boolean
            playIndex: number
          }
          credits: unknown[]
        }[]
        playEvents: {
          details: {
            description?: string | undefined
            event?: string | undefined
            eventType?: string | undefined
            awayScore?: number | undefined
            homeScore?: number | undefined
            isScoringPlay?: boolean | undefined
            isOut: boolean
            hasReview: boolean
          }
          count: {
            balls: number
            strikes: number
            outs: number
          }
          index: number
          startTime: string
          endTime: string
          isPitch: boolean
          type: string
          player?:
            | {
                id: number
                link: string
              }
            | undefined
        }[]
      }[]
      currentPlay: {
        result: {
          type: string
          event: string
          eventType?: string | undefined
          description: string
          rbi: number
          awayScore?: number | undefined
          homeScore?: number | undefined
          isOut: boolean
        }
        about: {
          atBatIndex: number
          halfInning: string
          isTopInning: boolean
          inning: number
          startTime: string
          endTime: string
          isComplete: boolean
          isScoringPlay?: boolean | undefined
          hasReview: boolean
          hasOut: boolean
          captivatingIndex: number
        }
        count: {
          balls: number
          strikes: number
          outs: number
        }
        matchup: {
          batter: {
            id: number
            fullName: string
            link: string
          }
          batSide: {
            code: string
            description: string
          }
          pitcher: {
            id: number
            fullName: string
            link: string
          }
          pitchHand: {
            code: string
            description: string
          }
          postOnFirst?:
            | ({
                id: number
                fullName: string
                link: string
              } | null)
            | undefined
          batterHotColdZones: unknown[]
          pitcherHotColdZones: unknown[]
          splits: {
            batter: string
            pitcher: string
            menOnBase: string
          }
        }
        pitchIndex: number[]
        actionIndex: number[]
        runnerIndex: number[]
        runners: {
          movement: {
            originBase?: (string | null) | undefined
            start?: (string | null) | undefined
            end?: (string | null) | undefined
            outBase?: (string | null) | undefined
            isOut: boolean
            outNumber?: (number | null) | undefined
          }
          details: {
            event: string
            eventType?: string | undefined
            movementReason?: (string | null) | undefined
            runner: {
              id: number
              fullName: string
              link: string
            }
            responsiblePitcher?:
              | ({
                  id: number
                  link: string
                } | null)
              | undefined
            isScoringEvent: boolean
            rbi: boolean
            earned: boolean
            teamUnearned: boolean
            playIndex: number
          }
          credits: unknown[]
        }[]
        playEvents: {
          details: {
            description?: string | undefined
            event?: string | undefined
            eventType?: string | undefined
            awayScore?: number | undefined
            homeScore?: number | undefined
            isScoringPlay?: boolean | undefined
            isOut: boolean
            hasReview: boolean
          }
          count: {
            balls: number
            strikes: number
            outs: number
          }
          index: number
          startTime: string
          endTime: string
          isPitch: boolean
          type: string
          player?:
            | {
                id: number
                link: string
              }
            | undefined
        }[]
      }
      scoringPlays: number[]
      playsByInning: {
        startIndex: number
        endIndex: number
        top: number[]
        bottom: number[]
        hits: {
          away: unknown[]
          home: {
            team: {
              springLeague: {
                id: number
                name: string
                link: string
                abbreviation: string
              }
              allStarStatus: string
              id: number
              name: string
              link: string
            }
            inning: number
            pitcher: {
              id: number
              fullName: string
              link: string
            }
            batter: {
              id: number
              fullName: string
              link: string
            }
            coordinates: {
              x: number
              y: number
            }
            type: string
            description: string
          }[]
        }
      }[]
    }
    boxscore: {
      teams: {
        away: {
          team: {
            springLeague: {
              id: number
              name: string
              link: string
              abbreviation: string
            }
            allStarStatus: string
            id: number
            name: string
            link: string
          }
          teamStats: {
            batting: {
              flyOuts?: number | undefined
              groundOuts?: number | undefined
              runs?: number | undefined
              doubles?: number | undefined
              triples?: number | undefined
              homeRuns?: number | undefined
              strikeOuts?: number | undefined
              baseOnBalls?: number | undefined
              intentionalWalks?: number | undefined
              hits?: number | undefined
              hitByPitch?: number | undefined
              avg: string
              atBats?: number | undefined
              obp: string
              slg: string
              ops: string
              caughtStealing?: number | undefined
              stolenBases?: number | undefined
              stolenBasePercentage?: string | undefined
              groundIntoDoublePlay?: number | undefined
              groundIntoTriplePlay?: number | undefined
              plateAppearances?: number | undefined
              totalBases?: number | undefined
              rbi?: number | undefined
              leftOnBase?: number | undefined
              sacBunts?: number | undefined
              sacFlies?: number | undefined
              catchersInterference?: number | undefined
              pickoffs?: number | undefined
              atBatsPerHomeRun?: string | undefined
            }
            pitching: {
              groundOuts: number
              airOuts: number
              runs: number
              doubles: number
              triples: number
              homeRuns: number
              strikeOuts: number
              baseOnBalls: number
              intentionalWalks: number
              hits: number
              hitByPitch: number
              atBats: number
              obp: string
              caughtStealing: number
              stolenBases: number
              stolenBasePercentage: string
              numberOfPitches: number
              era: string
              inningsPitched: string
              saveOpportunities: number
              earnedRuns: number
              whip: string
              battersFaced: number
              outs: number
              completeGames: number
              shutouts: number
              pitchesThrown: number
              balls: number
              strikes: number
              strikePercentage: string
              hitBatsmen: number
              balks: number
              wildPitches: number
              pickoffs?: number | undefined
              groundOutsToAirouts: string
              rbi: number
              pitchesPerInning: string
              runsScoredPer9: string
              homeRunsPer9: string
              inheritedRunners: number
              inheritedRunnersScored: number
              catchersInterference?: number | undefined
              sacBunts?: number | undefined
              sacFlies?: number | undefined
              passedBall: number
            }
            fielding: {
              caughtStealing: number
              stolenBases: number
              stolenBasePercentage: string
              assists: number
              putOuts: number
              errors: number
              chances?: number | undefined
              passedBall: number
              pickoffs: number
            }
          }
          players?:
            | {
                [x: string]: {
                  person: {
                    id: number
                    fullName: string
                    link: string
                  }
                  jerseyNumber: string
                  position: {
                    code: string
                    name: string
                    type: string
                    abbreviation: string
                  }
                  status: {
                    code: string
                    description: string
                  }
                  parentTeamId: number
                  battingOrder?: string | undefined
                  stats: {
                    batting: {
                      summary?: string | undefined
                      gamesPlayed?: number | undefined
                      flyOuts?: number | undefined
                      groundOuts?: number | undefined
                      runs?: number | undefined
                      doubles?: number | undefined
                      triples?: number | undefined
                      homeRuns?: number | undefined
                      strikeOuts?: number | undefined
                      baseOnBalls?: number | undefined
                      intentionalWalks?: number | undefined
                      hits?: number | undefined
                      hitByPitch?: number | undefined
                      atBats?: number | undefined
                      caughtStealing?: number | undefined
                      stolenBases?: number | undefined
                      stolenBasePercentage?: string | undefined
                      groundIntoDoublePlay?: number | undefined
                      groundIntoTriplePlay?: number | undefined
                      plateAppearances?: number | undefined
                      totalBases?: number | undefined
                      rbi?: number | undefined
                      leftOnBase?: number | undefined
                      sacBunts?: number | undefined
                      sacFlies?: number | undefined
                      catchersInterference?: number | undefined
                      pickoffs?: number | undefined
                      atBatsPerHomeRun?: string | undefined
                    }
                    pitching: {}
                    fielding: {
                      gamesStarted?: number | undefined
                      caughtStealing?: number | undefined
                      stolenBases?: number | undefined
                      stolenBasePercentage?: string | undefined
                      assists?: number | undefined
                      putOuts?: number | undefined
                      errors?: number | undefined
                      chances?: number | undefined
                      fielding?: string | undefined
                      passedBall?: number | undefined
                      pickoffs?: number | undefined
                    }
                  }
                  seasonStats: {
                    batting: {
                      gamesPlayed: number
                      flyOuts: number
                      groundOuts: number
                      runs: number
                      doubles?: number | undefined
                      triples?: number | undefined
                      homeRuns?: number | undefined
                      strikeOuts?: number | undefined
                      baseOnBalls?: number | undefined
                      intentionalWalks?: number | undefined
                      hits?: number | undefined
                      hitByPitch?: number | undefined
                      avg: string
                      atBats?: number | undefined
                      obp: string
                      slg: string
                      ops: string
                      caughtStealing?: number | undefined
                      stolenBases?: number | undefined
                      stolenBasePercentage?: string | undefined
                      groundIntoDoublePlay?: number | undefined
                      groundIntoTriplePlay?: number | undefined
                      plateAppearances?: number | undefined
                      totalBases?: number | undefined
                      rbi?: number | undefined
                      leftOnBase?: number | undefined
                      sacBunts?: number | undefined
                      sacFlies?: number | undefined
                      babip: string
                      catchersInterference?: number | undefined
                      pickoffs?: number | undefined
                      atBatsPerHomeRun?: string | undefined
                    }
                    pitching: {
                      gamesPlayed: number
                      gamesStarted?: number | undefined
                      groundOuts: number
                      airOuts: number
                      runs: number
                      doubles: number
                      triples: number
                      homeRuns: number
                      strikeOuts?: number | undefined
                      baseOnBalls: number
                      intentionalWalks: number
                      hits: number
                      hitByPitch: number
                      atBats: number
                      obp: string
                      caughtStealing: number
                      stolenBases: number
                      stolenBasePercentage: string
                      numberOfPitches: number
                      era: string
                      inningsPitched: string
                      wins: number
                      losses: number
                      saves: number
                      saveOpportunities: number
                      holds: number
                      blownSaves: number
                      earnedRuns: number
                      whip: string
                      battersFaced: number
                      outs: number
                      gamesPitched: number
                      completeGames: number
                      shutouts: number
                      balls: number
                      strikes: number
                      strikePercentage: string
                      hitBatsmen: number
                      balks: number
                      wildPitches: number
                      pickoffs?: number | undefined
                      groundOutsToAirouts: string
                      rbi: number
                      winPercentage: string
                      pitchesPerInning: string
                      gamesFinished: number
                      strikeoutWalkRatio: string
                      strikeoutsPer9Inn: string
                      walksPer9Inn: string
                      hitsPer9Inn: string
                      runsScoredPer9: string
                      homeRunsPer9: string
                      inheritedRunners: number
                      inheritedRunnersScored: number
                      catchersInterference: number
                      sacBunts: number
                      sacFlies: number
                      passedBall: number
                    }
                    fielding: {
                      gamesStarted?: number | undefined
                      caughtStealing: number
                      stolenBases: number
                      stolenBasePercentage: string
                      assists: number
                      putOuts: number
                      errors: number
                      chances: number
                      fielding: string
                      passedBall: number
                      pickoffs: number
                    }
                  }
                  gameStatus: {
                    isCurrentBatter: boolean
                    isCurrentPitcher: boolean
                    isOnBench: boolean
                    isSubstitute: boolean
                  }
                  allPositions?:
                    | {
                        code: string
                        name: string
                        type: string
                        abbreviation: string
                      }[]
                    | undefined
                }
              }
            | undefined
          /** Array of player IDs that bat */
          batters: number[]
          /** Array of player IDs that pitch */
          pitchers: number[]
          bench: number[]
          bullpen: number[]
          battingOrder?: number[] | undefined
          info: {
            title: string
            fieldList: {
              label: string
              value?: string | undefined
            }[]
          }[]
          note: {
            label: string
            value: string
          }[]
        }
        home: {
          team: {
            springLeague: {
              id: number
              name: string
              link: string
              abbreviation: string
            }
            allStarStatus: string
            id: number
            name: string
            link: string
          }
          teamStats: {
            batting: {
              flyOuts?: number | undefined
              groundOuts?: number | undefined
              runs?: number | undefined
              doubles?: number | undefined
              triples?: number | undefined
              homeRuns?: number | undefined
              strikeOuts?: number | undefined
              baseOnBalls?: number | undefined
              intentionalWalks?: number | undefined
              hits?: number | undefined
              hitByPitch?: number | undefined
              avg: string
              atBats?: number | undefined
              obp: string
              slg: string
              ops: string
              caughtStealing?: number | undefined
              stolenBases?: number | undefined
              stolenBasePercentage?: string | undefined
              groundIntoDoublePlay?: number | undefined
              groundIntoTriplePlay?: number | undefined
              plateAppearances?: number | undefined
              totalBases?: number | undefined
              rbi?: number | undefined
              leftOnBase?: number | undefined
              sacBunts?: number | undefined
              sacFlies?: number | undefined
              catchersInterference?: number | undefined
              pickoffs?: number | undefined
              atBatsPerHomeRun?: string | undefined
            }
            pitching: {
              groundOuts: number
              airOuts: number
              runs: number
              doubles: number
              triples: number
              homeRuns: number
              strikeOuts: number
              baseOnBalls: number
              intentionalWalks: number
              hits: number
              hitByPitch: number
              atBats: number
              obp: string
              caughtStealing: number
              stolenBases: number
              stolenBasePercentage: string
              numberOfPitches: number
              era: string
              inningsPitched: string
              saveOpportunities: number
              earnedRuns: number
              whip: string
              battersFaced: number
              outs: number
              completeGames: number
              shutouts: number
              pitchesThrown: number
              balls: number
              strikes: number
              strikePercentage: string
              hitBatsmen: number
              balks: number
              wildPitches: number
              pickoffs?: number | undefined
              groundOutsToAirouts: string
              rbi: number
              pitchesPerInning: string
              runsScoredPer9: string
              homeRunsPer9: string
              inheritedRunners: number
              inheritedRunnersScored: number
              catchersInterference?: number | undefined
              sacBunts?: number | undefined
              sacFlies?: number | undefined
              passedBall: number
            }
            fielding: {
              caughtStealing: number
              stolenBases: number
              stolenBasePercentage: string
              assists: number
              putOuts: number
              errors: number
              chances?: number | undefined
              passedBall: number
              pickoffs: number
            }
          }
          players?:
            | {
                [x: string]: {
                  person: {
                    id: number
                    fullName: string
                    link: string
                  }
                  jerseyNumber: string
                  position: {
                    code: string
                    name: string
                    type: string
                    abbreviation: string
                  }
                  status: {
                    code: string
                    description: string
                  }
                  parentTeamId: number
                  battingOrder?: string | undefined
                  stats: {
                    batting: {
                      summary?: string | undefined
                      gamesPlayed?: number | undefined
                      flyOuts?: number | undefined
                      groundOuts?: number | undefined
                      runs?: number | undefined
                      doubles?: number | undefined
                      triples?: number | undefined
                      homeRuns?: number | undefined
                      strikeOuts?: number | undefined
                      baseOnBalls?: number | undefined
                      intentionalWalks?: number | undefined
                      hits?: number | undefined
                      hitByPitch?: number | undefined
                      atBats?: number | undefined
                      caughtStealing?: number | undefined
                      stolenBases?: number | undefined
                      stolenBasePercentage?: string | undefined
                      groundIntoDoublePlay?: number | undefined
                      groundIntoTriplePlay?: number | undefined
                      plateAppearances?: number | undefined
                      totalBases?: number | undefined
                      rbi?: number | undefined
                      leftOnBase?: number | undefined
                      sacBunts?: number | undefined
                      sacFlies?: number | undefined
                      catchersInterference?: number | undefined
                      pickoffs?: number | undefined
                      atBatsPerHomeRun?: string | undefined
                    }
                    pitching: {}
                    fielding: {
                      gamesStarted?: number | undefined
                      caughtStealing?: number | undefined
                      stolenBases?: number | undefined
                      stolenBasePercentage?: string | undefined
                      assists?: number | undefined
                      putOuts?: number | undefined
                      errors?: number | undefined
                      chances?: number | undefined
                      fielding?: string | undefined
                      passedBall?: number | undefined
                      pickoffs?: number | undefined
                    }
                  }
                  seasonStats: {
                    batting: {
                      gamesPlayed: number
                      flyOuts: number
                      groundOuts: number
                      runs: number
                      doubles?: number | undefined
                      triples?: number | undefined
                      homeRuns?: number | undefined
                      strikeOuts?: number | undefined
                      baseOnBalls?: number | undefined
                      intentionalWalks?: number | undefined
                      hits?: number | undefined
                      hitByPitch?: number | undefined
                      avg: string
                      atBats?: number | undefined
                      obp: string
                      slg: string
                      ops: string
                      caughtStealing?: number | undefined
                      stolenBases?: number | undefined
                      stolenBasePercentage?: string | undefined
                      groundIntoDoublePlay?: number | undefined
                      groundIntoTriplePlay?: number | undefined
                      plateAppearances?: number | undefined
                      totalBases?: number | undefined
                      rbi?: number | undefined
                      leftOnBase?: number | undefined
                      sacBunts?: number | undefined
                      sacFlies?: number | undefined
                      babip: string
                      catchersInterference?: number | undefined
                      pickoffs?: number | undefined
                      atBatsPerHomeRun?: string | undefined
                    }
                    pitching: {
                      gamesPlayed: number
                      gamesStarted?: number | undefined
                      groundOuts: number
                      airOuts: number
                      runs: number
                      doubles: number
                      triples: number
                      homeRuns: number
                      strikeOuts?: number | undefined
                      baseOnBalls: number
                      intentionalWalks: number
                      hits: number
                      hitByPitch: number
                      atBats: number
                      obp: string
                      caughtStealing: number
                      stolenBases: number
                      stolenBasePercentage: string
                      numberOfPitches: number
                      era: string
                      inningsPitched: string
                      wins: number
                      losses: number
                      saves: number
                      saveOpportunities: number
                      holds: number
                      blownSaves: number
                      earnedRuns: number
                      whip: string
                      battersFaced: number
                      outs: number
                      gamesPitched: number
                      completeGames: number
                      shutouts: number
                      balls: number
                      strikes: number
                      strikePercentage: string
                      hitBatsmen: number
                      balks: number
                      wildPitches: number
                      pickoffs?: number | undefined
                      groundOutsToAirouts: string
                      rbi: number
                      winPercentage: string
                      pitchesPerInning: string
                      gamesFinished: number
                      strikeoutWalkRatio: string
                      strikeoutsPer9Inn: string
                      walksPer9Inn: string
                      hitsPer9Inn: string
                      runsScoredPer9: string
                      homeRunsPer9: string
                      inheritedRunners: number
                      inheritedRunnersScored: number
                      catchersInterference: number
                      sacBunts: number
                      sacFlies: number
                      passedBall: number
                    }
                    fielding: {
                      gamesStarted?: number | undefined
                      caughtStealing: number
                      stolenBases: number
                      stolenBasePercentage: string
                      assists: number
                      putOuts: number
                      errors: number
                      chances: number
                      fielding: string
                      passedBall: number
                      pickoffs: number
                    }
                  }
                  gameStatus: {
                    isCurrentBatter: boolean
                    isCurrentPitcher: boolean
                    isOnBench: boolean
                    isSubstitute: boolean
                  }
                  allPositions?:
                    | {
                        code: string
                        name: string
                        type: string
                        abbreviation: string
                      }[]
                    | undefined
                }
              }
            | undefined
          /** Array of player IDs that bat */
          batters: number[]
          /** Array of player IDs that pitch */
          pitchers: number[]
          bench: number[]
          bullpen: number[]
          battingOrder?: number[] | undefined
          info: {
            title: string
            fieldList: {
              label: string
              value?: string | undefined
            }[]
          }[]
          note: {
            label: string
            value: string
          }[]
        }
      }
      officials: {
        official: {
          id: number
          fullName: string
          link: string
        }
        officialType: string
      }[]
      info: {
        label: string
        value?: string | undefined
      }[]
      pitchingNotes: string[]
    }
    linescore: {}
    decisions: {
      winner: {
        id: number
        fullName: string
        link: string
      }
      loser: {
        id: number
        fullName: string
        link: string
      }
    }
    leaders: {
      hitDistance: {}
      hitSpeed: {}
      pitchSpeed: {}
    }
  }
}

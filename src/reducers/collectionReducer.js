const initState = {
  collections: [
    {
      id: "1",
      collectionName: "Capitan América",
      description: "Mis cómics del Capitan América",
      total: 2,
      comics: [
        {
          id: 280,
          digitalId: 4035,
          title: "Captain America (2002) #20",
          issueNumber: 20,
          variantDescription: "",
          description:
            '"CAPTAIN AMERICA LIVES AGAIN!"  the Conclusion!\r\nThe Red Skull and the Nazi Army control the world after their victory in World War II. Can Captain America make the world right again!?\r\n32 PGS./MARVEL PSR...$2.99',
          modified: "2018-06-08T09:14:24-0400",
          isbn: "",
          upc: "75960605153302011",
          diamondCode: "SEP031584",
          ean: "",
          issn: "",
          format: "Comic",
          pageCount: 0,
          textObjects: [
            {
              type: "issue_solicit_text",
              language: "en-us",
              text:
                '"CAPTAIN AMERICA LIVES AGAIN!"  the Conclusion!\r\nThe Red Skull and the Nazi Army control the world after their victory in World War II. Can Captain America make the world right again!?\r\n32 PGS./MARVEL PSR...$2.99'
            }
          ],
          resourceURI: "http://gateway.marvel.com/v1/public/comics/280",
          urls: [
            {
              type: "detail",
              url:
                "http://marvel.com/comics/issue/280/captain_america_2002_20?utm_campaign=apiRef&utm_source=3b46b9c54721040bdc0a44a5758d23c9"
            },
            {
              type: "purchase",
              url:
                "http://comicstore.marvel.com/Captain-America-20/digital-comic/4035?utm_campaign=apiRef&utm_source=3b46b9c54721040bdc0a44a5758d23c9"
            },
            {
              type: "reader",
              url:
                "http://marvel.com/digitalcomics/view.htm?iid=4035&utm_campaign=apiRef&utm_source=3b46b9c54721040bdc0a44a5758d23c9"
            },
            {
              type: "inAppLink",
              url:
                "https://applink.marvel.com/issue/4035?utm_campaign=apiRef&utm_source=3b46b9c54721040bdc0a44a5758d23c9"
            }
          ],
          series: {
            resourceURI: "http://gateway.marvel.com/v1/public/series/485",
            name: "Captain America (2002 - 2004)"
          },
          variants: [],
          collections: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/1226",
              name:
                "Captain America Vol. IV: Captain America Lives Again (Trade Paperback)"
            }
          ],
          collectedIssues: [],
          dates: [
            {
              type: "onsaleDate",
              date: "2004-01-01T00:00:00-0500"
            },
            {
              type: "focDate",
              date: "-0001-11-30T00:00:00-0500"
            },
            {
              type: "unlimitedDate",
              date: "2007-11-13T00:00:00-0500"
            },
            {
              type: "digitalPurchaseDate",
              date: "2014-03-04T00:00:00-0500"
            }
          ],
          prices: [
            {
              type: "printPrice",
              price: 0
            },
            {
              type: "digitalPurchasePrice",
              price: 1.99
            }
          ],
          thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/c/70/5bc78bc7a915a",
            extension: "jpg"
          },
          images: [
            {
              path: "http://i.annihil.us/u/prod/marvel/i/mg/c/70/5bc78bc7a915a",
              extension: "jpg"
            }
          ],
          creators: {
            available: 8,
            collectionURI:
              "http://gateway.marvel.com/v1/public/comics/280/creators",
            items: [
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/creators/8635",
                name: "Vc Randy Gentile",
                role: "letterer"
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/creators/293",
                name: "Dave Gibbons",
                role: "writer"
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/creators/292",
                name: "Gene Ha",
                role: "penciller (cover)"
              },
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/creators/4300",
                name: "Nick Lowe",
                role: "editor"
              },
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/creators/13152",
                name: "Joe Quesada",
                role: "editor"
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/creators/527",
                name: "Tom Palmer",
                role: "inker"
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/creators/501",
                name: "Dave Stewart",
                role: "colorist"
              },
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/creators/8991",
                name: "Lee Weeks",
                role: "penciler"
              }
            ],
            returned: 8
          },
          characters: {
            available: 18,
            collectionURI:
              "http://gateway.marvel.com/v1/public/comics/280/characters",
            items: [
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/characters/1009169",
                name: "Baron Strucker"
              },
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/characters/1009167",
                name: "Bruce Banner"
              },
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/characters/1009211",
                name: "Bucky"
              },
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/characters/1009220",
                name: "Captain America"
              },
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/characters/1010330",
                name: "Donald Blake"
              },
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/characters/1009229",
                name: "Frank Castle"
              },
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/characters/1009320",
                name: "Giant Man"
              },
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/characters/1011490",
                name: "Hank Pym"
              },
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/characters/1009368",
                name: "Iron Man"
              },
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/characters/1009215",
                name: "Luke Cage"
              },
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/characters/1009471",
                name: "Nick Fury"
              },
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/characters/1009535",
                name: "Red Skull"
              },
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/characters/1010901",
                name: "Stephen Strange"
              },
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/characters/1009631",
                name: "Sue Storm"
              },
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/characters/1009664",
                name: "Thor"
              },
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/characters/1009624",
                name: "Tony Stark"
              },
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/characters/1010324",
                name: "Victor Von Doom"
              },
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/characters/1009707",
                name: "Wasp"
              }
            ],
            returned: 18
          },
          stories: {
            available: 2,
            collectionURI:
              "http://gateway.marvel.com/v1/public/comics/280/stories",
            items: [
              {
                resourceURI: "http://gateway.marvel.com/v1/public/stories/1500",
                name: "Interior #1500",
                type: "interiorStory"
              },
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/stories/65402",
                name: "Captain America (2002) #20",
                type: "cover"
              }
            ],
            returned: 2
          },
          events: {
            available: 0,
            collectionURI:
              "http://gateway.marvel.com/v1/public/comics/280/events",
            items: [],
            returned: 0
          }
        },
        {
          id: 305,
          digitalId: 1620,
          title: "Captain America (2002) #21",
          issueNumber: 21,
          variantDescription: "",
          description:
            '"HOMELAND," pt. 1 (of 5)\r\nA new CAP era begins, from the new regular creative team of writer Robert Morales (TRUTH: RED, WHITE & BLACK), artist Chris Bachalo (NEW X-MEN) and new editor Axel Alonso (AMAZING SPIDER-MAN)! \r\nIn a storyline ripped from today\'s headlines, after a daring rescue in the Florida Everglades, the U.S. government taps Cap to embark on what might be his most life-changing mission ever.\r\nThis new direction will culminate later next year in one of the most surprising and unexpected developments ever in the career of Captain America, and a major change for the Marvel Universe!\r\n32 PGS./MARVEL PSR...$2.99',
          modified: "2018-06-08T09:14:26-0400",
          isbn: "",
          upc: "75960605153302111",
          diamondCode: "OCT031547",
          ean: "",
          issn: "",
          format: "Comic",
          pageCount: 0,
          textObjects: [
            {
              type: "issue_solicit_text",
              language: "en-us",
              text:
                '"HOMELAND," pt. 1 (of 5)\r\nA new CAP era begins, from the new regular creative team of writer Robert Morales (TRUTH: RED, WHITE & BLACK), artist Chris Bachalo (NEW X-MEN) and new editor Axel Alonso (AMAZING SPIDER-MAN)! \r\nIn a storyline ripped from today\'s headlines, after a daring rescue in the Florida Everglades, the U.S. government taps Cap to embark on what might be his most life-changing mission ever.\r\nThis new direction will culminate later next year in one of the most surprising and unexpected developments ever in the career of Captain America, and a major change for the Marvel Universe!\r\n32 PGS./MARVEL PSR...$2.99'
            }
          ],
          resourceURI: "http://gateway.marvel.com/v1/public/comics/305",
          urls: [
            {
              type: "detail",
              url:
                "http://marvel.com/comics/issue/305/captain_america_2002_21?utm_campaign=apiRef&utm_source=3b46b9c54721040bdc0a44a5758d23c9"
            },
            {
              type: "purchase",
              url:
                "http://comicstore.marvel.com/Captain-America-21/digital-comic/1620?utm_campaign=apiRef&utm_source=3b46b9c54721040bdc0a44a5758d23c9"
            },
            {
              type: "reader",
              url:
                "http://marvel.com/digitalcomics/view.htm?iid=1620&utm_campaign=apiRef&utm_source=3b46b9c54721040bdc0a44a5758d23c9"
            },
            {
              type: "inAppLink",
              url:
                "https://applink.marvel.com/issue/1620?utm_campaign=apiRef&utm_source=3b46b9c54721040bdc0a44a5758d23c9"
            }
          ],
          series: {
            resourceURI: "http://gateway.marvel.com/v1/public/series/485",
            name: "Captain America (2002 - 2004)"
          },
          variants: [],
          collections: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/1334",
              name: "Captain America Vol. 5: Homeland (Trade Paperback)"
            }
          ],
          collectedIssues: [],
          dates: [
            {
              type: "onsaleDate",
              date: "2003-12-03T00:00:00-0500"
            },
            {
              type: "focDate",
              date: "-0001-11-30T00:00:00-0500"
            },
            {
              type: "unlimitedDate",
              date: "2007-11-13T00:00:00-0500"
            },
            {
              type: "digitalPurchaseDate",
              date: "2014-03-11T00:00:00-0400"
            }
          ],
          prices: [
            {
              type: "printPrice",
              price: 0
            },
            {
              type: "digitalPurchasePrice",
              price: 1.99
            }
          ],
          thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/e/20/56e8351389390",
            extension: "jpg"
          },
          images: [
            {
              path: "http://i.annihil.us/u/prod/marvel/i/mg/e/20/56e8351389390",
              extension: "jpg"
            },
            {
              path: "http://i.annihil.us/u/prod/marvel/i/mg/a/10/56e6e821d58fc",
              extension: "jpg"
            }
          ],
          creators: {
            available: 4,
            collectionURI:
              "http://gateway.marvel.com/v1/public/comics/305/creators",
            items: [
              {
                resourceURI: "http://gateway.marvel.com/v1/public/creators/232",
                name: "Chris Bachalo",
                role: "penciller"
              },
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/creators/8635",
                name: "Vc Randy Gentile",
                role: "letterer"
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/creators/301",
                name: "Robert Morales",
                role: "writer"
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/creators/427",
                name: "Tim Townsend",
                role: "inker"
              }
            ],
            returned: 4
          },
          characters: {
            available: 1,
            collectionURI:
              "http://gateway.marvel.com/v1/public/comics/305/characters",
            items: [
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/characters/1009220",
                name: "Captain America"
              }
            ],
            returned: 1
          },
          stories: {
            available: 2,
            collectionURI:
              "http://gateway.marvel.com/v1/public/comics/305/stories",
            items: [
              {
                resourceURI: "http://gateway.marvel.com/v1/public/stories/1501",
                name: "CAPTAIN AMERICA (2002) #21",
                type: "cover"
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/stories/1502",
                name: "Interior #1502",
                type: "interiorStory"
              }
            ],
            returned: 2
          },
          events: {
            available: 0,
            collectionURI:
              "http://gateway.marvel.com/v1/public/comics/305/events",
            items: [],
            returned: 0
          }
        }
      ]
    },
    {
      id: "2",
      collectionName: "Viuda Negra",
      description: "Wish List de cómics de la Viuda Negra",
      total: 2,
      comics: [
        {
          id: 4695,
          digitalId: 632,
          title: "Black Widow (2004) #1",
          issueNumber: 1,
          variantDescription: "",
          description: null,
          modified: "2014-02-28T10:07:46-0500",
          isbn: "",
          upc: "759606055501000111",
          diamondCode: "JUL041957",
          ean: "",
          issn: "",
          format: "Comic",
          pageCount: 0,
          textObjects: [],
          resourceURI: "http://gateway.marvel.com/v1/public/comics/4695",
          urls: [
            {
              type: "detail",
              url:
                "http://marvel.com/comics/issue/4695/black_widow_2004_1?utm_campaign=apiRef&utm_source=3b46b9c54721040bdc0a44a5758d23c9"
            },
            {
              type: "reader",
              url:
                "http://marvel.com/digitalcomics/view.htm?iid=632&utm_campaign=apiRef&utm_source=3b46b9c54721040bdc0a44a5758d23c9"
            }
          ],
          series: {
            resourceURI: "http://gateway.marvel.com/v1/public/series/758",
            name: "Black Widow (2004 - 2005)"
          },
          variants: [],
          collections: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/1844",
              name: "Black Widow: Homecoming (Trade Paperback)"
            }
          ],
          collectedIssues: [],
          dates: [
            {
              type: "onsaleDate",
              date: "2004-11-01T00:00:00-0500"
            },
            {
              type: "focDate",
              date: "-0001-11-30T00:00:00-0500"
            },
            {
              type: "unlimitedDate",
              date: "2007-11-13T00:00:00-0500"
            }
          ],
          prices: [
            {
              type: "printPrice",
              price: 0
            }
          ],
          thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/c/70/4bc37e337b8af",
            extension: "jpg"
          },
          images: [
            {
              path: "http://i.annihil.us/u/prod/marvel/i/mg/c/70/4bc37e337b8af",
              extension: "jpg"
            }
          ],
          creators: {
            available: 4,
            collectionURI:
              "http://gateway.marvel.com/v1/public/comics/4695/creators",
            items: [
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/creators/11543",
                name: "Dan Brown",
                role: "colorist"
              },
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/creators/9319",
                name: "Richard Morgan",
                role: "writer"
              },
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/creators/12980",
                name: "Vc Cory Petit",
                role: "letterer"
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/creators/26",
                name: "Bill Sienkiewicz",
                role: "penciler"
              }
            ],
            returned: 4
          },
          characters: {
            available: 0,
            collectionURI:
              "http://gateway.marvel.com/v1/public/comics/4695/characters",
            items: [],
            returned: 0
          },
          stories: {
            available: 2,
            collectionURI:
              "http://gateway.marvel.com/v1/public/comics/4695/stories",
            items: [
              {
                resourceURI: "http://gateway.marvel.com/v1/public/stories/548",
                name: "Interior #548",
                type: "interiorStory"
              },
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/stories/65370",
                name: "BLACK WIDOW 1 cover",
                type: "cover"
              }
            ],
            returned: 2
          },
          events: {
            available: 0,
            collectionURI:
              "http://gateway.marvel.com/v1/public/comics/4695/events",
            items: [],
            returned: 0
          }
        },
        {
          id: 39,
          digitalId: 1549,
          title: "Black Widow (2004) #3",
          issueNumber: 3,
          variantDescription: "",
          description:
            "The intrigue continues as the spy who melted Siberia - Natasha Romanova - uses herself as bait to get vital info.  Meanwhile, her hunters in our nation's capital track her down, meaning - you guessed it - a guest appearance by Nick Fury!  Join mega-watt stars Richard K. Morgan & Bill Sienkiewicz (and cover artist Greg Land) as they heat up Marvel's hardboiled redhead this November!",
          modified: "-0001-11-30T00:00:00-0500",
          isbn: "",
          upc: "5960605550-00311",
          diamondCode: "",
          ean: "",
          issn: "",
          format: "Comic",
          pageCount: 0,
          textObjects: [
            {
              type: "issue_solicit_text",
              language: "en-us",
              text:
                "The intrigue continues as the spy who melted Siberia - Natasha Romanova - uses herself as bait to get vital info.  Meanwhile, her hunters in our nation's capital track her down, meaning - you guessed it - a guest appearance by Nick Fury!  Join mega-watt stars Richard K. Morgan & Bill Sienkiewicz (and cover artist Greg Land) as they heat up Marvel's hardboiled redhead this November!"
            }
          ],
          resourceURI: "http://gateway.marvel.com/v1/public/comics/39",
          urls: [
            {
              type: "detail",
              url:
                "http://marvel.com/comics/issue/39/black_widow_2004_3?utm_campaign=apiRef&utm_source=3b46b9c54721040bdc0a44a5758d23c9"
            },
            {
              type: "reader",
              url:
                "http://marvel.com/digitalcomics/view.htm?iid=1549&utm_campaign=apiRef&utm_source=3b46b9c54721040bdc0a44a5758d23c9"
            }
          ],
          series: {
            resourceURI: "http://gateway.marvel.com/v1/public/series/758",
            name: "Black Widow (2004 - 2005)"
          },
          variants: [],
          collections: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/1844",
              name: "Black Widow: Homecoming (Trade Paperback)"
            }
          ],
          collectedIssues: [],
          dates: [
            {
              type: "onsaleDate",
              date: "2004-11-24T00:00:00-0500"
            },
            {
              type: "focDate",
              date: "-0001-11-30T00:00:00-0500"
            },
            {
              type: "unlimitedDate",
              date: "2007-11-13T00:00:00-0500"
            }
          ],
          prices: [
            {
              type: "printPrice",
              price: 2.99
            }
          ],
          thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/a/30/4f576f5c8e81b",
            extension: "jpg"
          },
          images: [
            {
              path: "http://i.annihil.us/u/prod/marvel/i/mg/a/30/4f576f5c8e81b",
              extension: "jpg"
            }
          ],
          creators: {
            available: 7,
            collectionURI:
              "http://gateway.marvel.com/v1/public/comics/39/creators",
            items: [
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/creators/11543",
                name: "Dan Brown",
                role: "colorist"
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/creators/360",
                name: "Justin Ponsor",
                role: "colorist"
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/creators/425",
                name: "Greg Land",
                role: "penciller (cover)"
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/creators/811",
                name: "Richard K. Morgan",
                role: "writer"
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/creators/674",
                name: "Goran Parlov",
                role: "penciller"
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/creators/361",
                name: "Cory Petit",
                role: "letterer"
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/creators/26",
                name: "Bill Sienkiewicz",
                role: "inker"
              }
            ],
            returned: 7
          },
          characters: {
            available: 2,
            collectionURI:
              "http://gateway.marvel.com/v1/public/comics/39/characters",
            items: [
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/characters/1009189",
                name: "Black Widow"
              },
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/characters/1009471",
                name: "Nick Fury"
              }
            ],
            returned: 2
          },
          stories: {
            available: 2,
            collectionURI:
              "http://gateway.marvel.com/v1/public/comics/39/stories",
            items: [
              {
                resourceURI: "http://gateway.marvel.com/v1/public/stories/3534",
                name: "Black Widow (2004) #3",
                type: "cover"
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/stories/3535",
                name: "Black Widow (2004) #3",
                type: "interiorStory"
              }
            ],
            returned: 2
          },
          events: {
            available: 0,
            collectionURI:
              "http://gateway.marvel.com/v1/public/comics/39/events",
            items: [],
            returned: 0
          }
        }
      ]
    }
  ]
};

const collectionReducer = (state = initState, action) => {
  return state;
};

export default collectionReducer;

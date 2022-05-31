const musicEvents = [
  {
    name: "Paul McCartney",
    type: "event",
    id: "Z7r9jZ1Ad8ekd",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1Ad8ekd",
    locale: "en-us",
    images: [
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "2022-02-22T14:05:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-13T00:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-12",
        localTime: "20:00:00",
        dateTime: "2022-06-13T00:00:00Z",
        dateTBD: false,
        dateTBA: false,
        timeTBA: false,
        noSpecificTime: false,
      },
      status: {
        code: "onsale",
      },
      spanMultipleDays: false,
    },
    classifications: [
      {
        primary: true,
        segment: {
          id: "KZFzniwnSyZfZ7v7nJ",
          name: "Music",
        },
        genre: {
          id: "KnvZfZ7vAeA",
          name: "Rock",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v6A7",
          name: "Classic Rock",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://www.mlb.com/orioles",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/paul-mccartney-baltimore-maryland-06-12-2022/event/Zu0FM1R0e5tanYt",
        type: "tmMarketPlace",
      },
    ],
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1Ad8ekd?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ9171uq0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZd6ee?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Camden Yards",
          type: "venue",
          id: "Z6r9jZd6ee",
          test: false,
          locale: "en-us",
          postalCode: "21201",
          timezone: "America/New_York",
          city: {
            name: "Baltimore",
          },
          state: {
            name: "Maryland",
            stateCode: "MD",
          },
          country: {
            name: "United States Of America",
            countryCode: "US",
          },
          address: {
            line1: "333 West Camden St.",
          },
          location: {
            longitude: "-76.622597",
            latitude: "39.293999",
          },
          dmas: [
            {
              id: 224,
            },
          ],
          upcomingEvents: {
            _total: 59,
            tmr: 58,
            ticketmaster: 1,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZd6ee?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Paul McCartney",
          type: "attraction",
          id: "K8vZ9171uq0",
          test: false,
          url: "https://www.ticketmaster.com/paul-mccartney-tickets/artist/735610",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/user/PAULMCCARTNEY",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/PaulMcCartney",
              },
            ],
            lastfm: [
              {
                url: "http://www.last.fm/music/Paul+McCartney",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/PaulMcCartney",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Paul_McCartney",
              },
            ],
            musicbrainz: [
              {
                id: "ba550d0e-adac-4864-b88b-407cab5e76af",
              },
            ],
            homepage: [
              {
                url: "http://www.paulmccartney.com/",
              },
            ],
          },
          aliases: [
            "mcartney",
            "paul mccartney",
            "paul macartney",
            "paul mcartney",
            "paul mccarthy",
            "paul mccartny",
          ],
          images: [
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7nI",
                name: "Undefined",
              },
              subType: {
                id: "KZFzBErXgnZfZ7v7lJ",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 11,
            tmr: 3,
            ticketmaster: 8,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171uq0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "PAUL McCARTNEY GOT BACK",
    type: "event",
    id: "Z7r9jZ1AdC9f8",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdC9f8",
    locale: "en-us",
    images: [
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "2022-02-25T15:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-07T22:30:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-07",
        localTime: "18:30:00",
        dateTime: "2022-06-07T22:30:00Z",
        dateTBD: false,
        dateTBA: false,
        timeTBA: false,
        noSpecificTime: false,
      },
      status: {
        code: "onsale",
      },
      spanMultipleDays: false,
    },
    classifications: [
      {
        primary: true,
        segment: {
          id: "KZFzniwnSyZfZ7v7nJ",
          name: "Music",
        },
        genre: {
          id: "KnvZfZ7vAeA",
          name: "Rock",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v6A7",
          name: "Classic Rock",
        },
        family: false,
      },
    ],
    promoter: {
      id: "653",
      name: "LIVE NATION MUSIC",
      description: "LIVE NATION MUSIC / NTL / USA",
    },
    promoters: [
      {
        id: "653",
        name: "LIVE NATION MUSIC",
        description: "LIVE NATION MUSIC / NTL / USA",
      },
    ],
    outlets: [
      {
        url: "http://RedSox.com/PaulMcCartney",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/paul-mccartney-got-back-boston-massachusetts-06-07-2022/event/Zu0FM1R0e5tu1la",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/551-2031-2-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdC9f8?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ9171uq0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkkee?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Fenway Park",
          type: "venue",
          id: "Z6r9jZkkee",
          test: false,
          locale: "en-us",
          postalCode: "02215",
          timezone: "America/New_York",
          city: {
            name: "Boston",
          },
          state: {
            name: "Massachusetts",
            stateCode: "MA",
          },
          country: {
            name: "United States Of America",
            countryCode: "US",
          },
          address: {
            line1: "4 Yawkey Way",
          },
          location: {
            longitude: "-71.102501",
            latitude: "42.346901",
          },
          dmas: [
            {
              id: 235,
            },
          ],
          upcomingEvents: {
            _total: 83,
            tmr: 67,
            ticketmaster: 16,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkkee?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Paul McCartney",
          type: "attraction",
          id: "K8vZ9171uq0",
          test: false,
          url: "https://www.ticketmaster.com/paul-mccartney-tickets/artist/735610",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/user/PAULMCCARTNEY",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/PaulMcCartney",
              },
            ],
            lastfm: [
              {
                url: "http://www.last.fm/music/Paul+McCartney",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/PaulMcCartney",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Paul_McCartney",
              },
            ],
            musicbrainz: [
              {
                id: "ba550d0e-adac-4864-b88b-407cab5e76af",
              },
            ],
            homepage: [
              {
                url: "http://www.paulmccartney.com/",
              },
            ],
          },
          aliases: [
            "mcartney",
            "paul mccartney",
            "paul macartney",
            "paul mcartney",
            "paul mccarthy",
            "paul mccartny",
          ],
          images: [
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7nI",
                name: "Undefined",
              },
              subType: {
                id: "KZFzBErXgnZfZ7v7lJ",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 11,
            tmr: 3,
            ticketmaster: 8,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171uq0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "PAUL McCARTNEY GOT BACK",
    type: "event",
    id: "k7vGF97JMbABS",
    test: false,
    url: "https://www.ticketmaster.com/paul-mccartney-got-back-east-rutherford-new-jersey-06-16-2022/event/00005C49B7605EB3",
    locale: "en-us",
    images: [
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "2022-02-25T15:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-17T02:00:00Z",
      },
      presales: [
        {
          startDateTime: "2022-02-22T15:00:00Z",
          endDateTime: "2022-02-25T03:00:00Z",
          name: "American Express® Card Member Presale",
        },
        {
          startDateTime: "2022-02-22T15:00:00Z",
          endDateTime: "2022-02-22T17:00:00Z",
          name: "American Express® VIP Package",
        },
        {
          startDateTime: "2022-02-22T17:00:00Z",
          endDateTime: "2022-02-25T13:00:00Z",
          name: "VIP Package Presale",
        },
        {
          startDateTime: "2022-02-22T17:00:00Z",
          endDateTime: "2022-02-25T13:00:00Z",
          name: "Paul McCartney Fan Presale",
        },
        {
          startDateTime: "2022-02-24T15:00:00Z",
          endDateTime: "2022-02-25T13:00:00Z",
          name: "Ticketmaster Presale",
        },
        {
          startDateTime: "2022-02-24T15:00:00Z",
          endDateTime: "2022-02-25T13:00:00Z",
          name: "Spotify Presale",
        },
        {
          startDateTime: "2022-02-25T15:00:00Z",
          endDateTime: "2022-06-17T00:00:00Z",
          name: "American Express® Card Member Onsale",
        },
        {
          startDateTime: "2022-02-25T15:00:00Z",
          endDateTime: "2022-06-02T21:00:00Z",
          name: "VIP Package Onsale",
        },
        {
          startDateTime: "2022-02-22T15:00:00Z",
          endDateTime: "2022-02-25T13:00:00Z",
          name: "Official Platinum Presale",
        },
        {
          startDateTime: "2022-02-25T15:00:00Z",
          endDateTime: "2022-06-17T00:00:00Z",
          name: "Official Platinum Onsale",
        },
      ],
    },
    dates: {
      start: {
        localDate: "2022-06-16",
        localTime: "20:00:00",
        dateTime: "2022-06-17T00:00:00Z",
        dateTBD: false,
        dateTBA: false,
        timeTBA: false,
        noSpecificTime: false,
      },
      timezone: "America/New_York",
      status: {
        code: "onsale",
      },
      spanMultipleDays: false,
    },
    classifications: [
      {
        primary: true,
        segment: {
          id: "KZFzniwnSyZfZ7v7nJ",
          name: "Music",
        },
        genre: {
          id: "KnvZfZ7vAeA",
          name: "Rock",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v6F1",
          name: "Pop",
        },
        type: {
          id: "KZAyXgnZfZ7v7nI",
          name: "Undefined",
        },
        subType: {
          id: "KZFzBErXgnZfZ7v7lJ",
          name: "Undefined",
        },
        family: false,
      },
    ],
    promoter: {
      id: "494",
      name: "PROMOTED BY VENUE",
      description: "PROMOTED BY VENUE / NTL / USA",
    },
    promoters: [
      {
        id: "494",
        name: "PROMOTED BY VENUE",
        description: "PROMOTED BY VENUE / NTL / USA",
      },
    ],
    pleaseNote:
      "To allow for more Card Members to enjoy the show, American Express has set a two-order limit for this offer. This limit applies across all Cards associated with all of your American Express accounts. Prepaid Cards are not eligible.",
    priceRanges: [
      {
        type: "standard",
        currency: "USD",
        min: 39.5,
        max: 399.5,
      },
    ],
    seatmap: {
      staticUrl:
        "https://maps.ticketmaster.com/maps/geometry/3/event/00005C49B7605EB3/staticImage?type=png&systemId=HOST",
    },
    accessibility: {
      ticketLimit: 4,
    },
    ticketLimit: {
      info: "There is an overall (8) eight ticket limit for this event. There is a four ticket limit for VIP packages.",
    },
    ageRestrictions: {
      legalAgeEnforced: false,
    },
    code: "NY1:ENM0616",
    _links: {
      self: {
        href: "/discovery/v2/events/k7vGF97JMbABS?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ9171uq0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/KovZpakS7e?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "MetLife Stadium",
          type: "venue",
          id: "KovZpakS7e",
          test: false,
          url: "https://www.ticketmaster.com/metlife-stadium-tickets-east-rutherford/venue/1233",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dbimages/12804v.",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              url: "https://s1.ticketm.net/dam/v/793/22834897-5c42-42cd-ab62-f0addc54f793_417571_SOURCE.jpg",
              width: 2955,
              height: 1812,
              fallback: false,
              attribution: "CC BY 2.0 via Wikipedia",
            },
          ],
          postalCode: "07073",
          timezone: "America/New_York",
          city: {
            name: "East Rutherford",
          },
          state: {
            name: "New Jersey",
            stateCode: "NJ",
          },
          country: {
            name: "United States Of America",
            countryCode: "US",
          },
          address: {
            line1: "One MetLife Stadium Drive",
          },
          location: {
            longitude: "-74.074493",
            latitude: "40.81359",
          },
          markets: [
            {
              name: "New York/Tri-State Area",
              id: "35",
            },
            {
              name: "Northern New Jersey",
              id: "55",
            },
            {
              name: "Connecticut",
              id: "124",
            },
          ],
          dmas: [
            {
              id: 296,
            },
            {
              id: 345,
            },
            {
              id: 422,
            },
          ],
          social: {
            twitter: {
              handle: "@MLStadium",
            },
          },
          boxOfficeInfo: {
            phoneNumberDetail:
              "Box Office: 201.559.1300, tickets@metlifestadium.com - General Ticket Inquiries - ADA Ticket Inquiries Guest Services: 201.559.1515, info@metlifestadium.com",
            openHoursDetail:
              "MetLife Stadium Box Office is open Monday – Friday 11am – 5pm. The Box Office is located in the West VIP lobby. Please park in Lot G, enter through MetLife Gate and into the large glass doors labeled “West VIP.”",
            acceptedPaymentDetail:
              "The MetLife Stadium Box Office will accept cash, Visa, Mastercard, Discover, and American Express. Personal checks will not be accepted.",
            willCallDetail:
              "Ticketmaster Will Call may be picked up at any open ticket window. For all events, non-Ticketmaster will call orders may be picked up at the designated will call window. Will call tickets will be available beginning at least 2 hours prior to the scheduled start time for the event.",
          },
          parkingDetail:
            "General Parking Information: * MetLife Stadium Parking Availability: There are approximately 23,000 parking spaces available that are distributed among 14 lots. * There is no street parking available near the stadium. * Parking fees will vary by event. * Accessible parking is available in Lots E, F, & G. Accessible parking is available on a first come / first serve basis. You must have parking pass and state- issued person with disabilities placard or license plate to park in an accessible parking space. Violators will be subject to citation and possible revocation of season or event parking privileges. *Taxi / Black Car, Limousine, and Guest drop offs will be permitted in Lot C. * Bus and R/V Parking is available in Lot L. * All vehicles parking within the stadiums secured parking perimeter are subject to security inspection before being permitted to park. * Hours of Operation will vary per event. For NFL games, parking lots will open 5 hours prior to kickoff. All other events are subject to vary. * Parking passes are valid only for the event or game noted on the pass and for the specific lot. *Please note, all parking information may be amended based on the nature of the event, please contact the stadium at 201-559-1515 or info@metlifestadium.com with any specific questions not addressed above.",
          accessibleSeatingDetail:
            "MetLife Stadium is fully accessible including all concession stand locations, merchandise stands, ATM's and seating areas. Accessible seating for guests with special needs is available on all levels and in all price ranges. Elevators are located in the southeast (SAP), southwest (Verizon), and northwest (Pepsi) corners of the stadium. Ramps are located at the north and south entrances. Seats with removable armrests are located throughout the stadium. A limited number of wheelchairs are located at each of the entrance gates to transport guests with limited mobility to their seating area. Guests may contact the MetLife Stadium at 201-559-1515 or ADAinfo@metlifestadium.com for more information or any additional needs for non-NFL events. MetLife Stadium ADA Ticket Questions call 201-559-1300. New York Giants ADA Ticket Purchases call 201-935-8222. New York Jets ADA Ticket Purchases call 973-549-4585. For wheelchair accessible and limited mobility patrons for non-NFL events, please click on the Request Accessible Tickets icon on the right side of the page to be taken to a dedicated page for accessible seating purchases. Please request the total number of wheelchair plus companion seats or limited mobility plus companion seats within the same wheelchair dropdown box so you may sit together.",
          generalInfo: {
            generalRule:
              "MetLife Stadium is committed to promoting a memorable event day experience for all fans. With that goal in mind, we have developed our Guest Code of Conduct to which we strongly encourage all guests to adhere. Keeping MetLife Stadium and Plaza SMOKE-FREE",
            childRule:
              "For non-NFL events, children under 34” in height do not require a ticket of their own but must share a seat with an accompanying adult. All children taller than 34” inches require a ticket of their own. For New York Jets games this 34 rule applies For New York Giants games all guest need a ticket regardless of age. Please contact the stadium directly regarding the suitability of an event for children.",
          },
          upcomingEvents: {
            _total: 39,
            ticketmaster: 39,
            _filtered: 0,
          },
          ada: {
            adaPhones:
              "For NFL New York Giants: 201-935-8222 For NFL New York Jets: 973-549-4585 For NON-NFL Events: 1-800-877-7575 ",
            adaCustomCopy:
              "For NFL New York Giants: 201-935-8222 For NFL New York Jets: 973-549-4585 For NON-NFL Events: 1-800-877-7575",
            adaHours: "See Above",
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/KovZpakS7e?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Paul McCartney",
          type: "attraction",
          id: "K8vZ9171uq0",
          test: false,
          url: "https://www.ticketmaster.com/paul-mccartney-tickets/artist/735610",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/user/PAULMCCARTNEY",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/PaulMcCartney",
              },
            ],
            lastfm: [
              {
                url: "http://www.last.fm/music/Paul+McCartney",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/PaulMcCartney",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Paul_McCartney",
              },
            ],
            musicbrainz: [
              {
                id: "ba550d0e-adac-4864-b88b-407cab5e76af",
              },
            ],
            homepage: [
              {
                url: "http://www.paulmccartney.com/",
              },
            ],
          },
          aliases: [
            "mcartney",
            "paul mccartney",
            "paul macartney",
            "paul mcartney",
            "paul mccarthy",
            "paul mccartny",
          ],
          images: [
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7nI",
                name: "Undefined",
              },
              subType: {
                id: "KZFzBErXgnZfZ7v7lJ",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 11,
            tmr: 3,
            ticketmaster: 8,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171uq0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Paul McCartney",
    type: "event",
    id: "Z7r9jZ1Ad8kue",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1Ad8kue",
    locale: "en-us",
    images: [
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "2022-03-04T15:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-08T21:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-08",
        localTime: "17:00:00",
        dateTime: "2022-06-08T21:00:00Z",
        dateTBD: false,
        dateTBA: false,
        timeTBA: false,
        noSpecificTime: false,
      },
      status: {
        code: "onsale",
      },
      spanMultipleDays: false,
    },
    classifications: [
      {
        primary: true,
        segment: {
          id: "KZFzniwnSyZfZ7v7nJ",
          name: "Music",
        },
        genre: {
          id: "KnvZfZ7vAeA",
          name: "Rock",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v6A7",
          name: "Classic Rock",
        },
        family: false,
      },
    ],
    promoter: {
      id: "653",
      name: "LIVE NATION MUSIC",
      description: "LIVE NATION MUSIC / NTL / USA",
    },
    promoters: [
      {
        id: "653",
        name: "LIVE NATION MUSIC",
        description: "LIVE NATION MUSIC / NTL / USA",
      },
    ],
    outlets: [
      {
        url: "http://www.RedSox.com/PaulMcCartney",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/paul-mccartney-boston-massachusetts-06-08-2022/event/Zu0FM1R0e5taYBn",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/551-2031-2-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1Ad8kue?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ9171uq0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkkee?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Fenway Park",
          type: "venue",
          id: "Z6r9jZkkee",
          test: false,
          locale: "en-us",
          postalCode: "02215",
          timezone: "America/New_York",
          city: {
            name: "Boston",
          },
          state: {
            name: "Massachusetts",
            stateCode: "MA",
          },
          country: {
            name: "United States Of America",
            countryCode: "US",
          },
          address: {
            line1: "4 Yawkey Way",
          },
          location: {
            longitude: "-71.102501",
            latitude: "42.346901",
          },
          dmas: [
            {
              id: 235,
            },
          ],
          upcomingEvents: {
            _total: 83,
            tmr: 67,
            ticketmaster: 16,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkkee?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Paul McCartney",
          type: "attraction",
          id: "K8vZ9171uq0",
          test: false,
          url: "https://www.ticketmaster.com/paul-mccartney-tickets/artist/735610",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/user/PAULMCCARTNEY",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/PaulMcCartney",
              },
            ],
            lastfm: [
              {
                url: "http://www.last.fm/music/Paul+McCartney",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/PaulMcCartney",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Paul_McCartney",
              },
            ],
            musicbrainz: [
              {
                id: "ba550d0e-adac-4864-b88b-407cab5e76af",
              },
            ],
            homepage: [
              {
                url: "http://www.paulmccartney.com/",
              },
            ],
          },
          aliases: [
            "mcartney",
            "paul mccartney",
            "paul macartney",
            "paul mcartney",
            "paul mccarthy",
            "paul mccartny",
          ],
          images: [
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7nI",
                name: "Undefined",
              },
              subType: {
                id: "KZFzBErXgnZfZ7v7lJ",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 11,
            tmr: 3,
            ticketmaster: 8,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171uq0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "PAUL McCARTNEY GOT BACK",
    type: "event",
    id: "k7vGFpyr1uoeH",
    test: false,
    url: "https://www.ticketmaster.com/paul-mccartney-got-back-syracuse-new-york-06-04-2022/event/00005B978A3510BC",
    locale: "en-us",
    images: [
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "2022-02-25T15:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-05T01:00:00Z",
      },
      presales: [
        {
          startDateTime: "2022-02-22T15:00:00Z",
          endDateTime: "2022-02-25T03:00:00Z",
          name: "American Express® Card Member Presale",
        },
        {
          startDateTime: "2022-02-22T15:00:00Z",
          endDateTime: "2022-02-22T17:00:00Z",
          name: "American Express® VIP Package",
        },
        {
          startDateTime: "2022-02-22T17:00:00Z",
          endDateTime: "2022-02-25T13:00:00Z",
          name: "VIP Package Presale",
        },
        {
          startDateTime: "2022-02-22T17:00:00Z",
          endDateTime: "2022-02-25T13:00:00Z",
          name: "Paul McCartney Fan Presale",
        },
        {
          startDateTime: "2022-02-24T15:00:00Z",
          endDateTime: "2022-02-25T13:00:00Z",
          name: "Ticketmaster Presale",
        },
        {
          startDateTime: "2022-02-24T15:00:00Z",
          endDateTime: "2022-02-25T13:00:00Z",
          name: "Spotify Presale",
        },
        {
          startDateTime: "2022-02-24T15:00:00Z",
          endDateTime: "2022-02-25T13:00:00Z",
          name: "Venue / AEG Presale",
        },
        {
          startDateTime: "2022-02-22T15:00:00Z",
          endDateTime: "2022-02-25T13:00:00Z",
          name: "Official Platinum Presale",
        },
        {
          startDateTime: "2022-02-25T15:00:00Z",
          endDateTime: "2022-05-22T02:00:00Z",
          name: "American Express® Card Member Onsale",
        },
        {
          startDateTime: "2022-02-25T15:00:00Z",
          endDateTime: "2022-05-21T21:00:00Z",
          name: "VIP Package Onsale",
        },
        {
          startDateTime: "2022-02-25T15:00:00Z",
          endDateTime: "2022-06-05T00:00:00Z",
          name: "Official Platinum",
        },
      ],
    },
    dates: {
      start: {
        localDate: "2022-06-04",
        localTime: "20:00:00",
        dateTime: "2022-06-05T00:00:00Z",
        dateTBD: false,
        dateTBA: false,
        timeTBA: false,
        noSpecificTime: false,
      },
      timezone: "America/New_York",
      status: {
        code: "onsale",
      },
      spanMultipleDays: false,
    },
    classifications: [
      {
        primary: true,
        segment: {
          id: "KZFzniwnSyZfZ7v7nJ",
          name: "Music",
        },
        genre: {
          id: "KnvZfZ7vAeA",
          name: "Rock",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v6F1",
          name: "Pop",
        },
        type: {
          id: "KZAyXgnZfZ7v7nI",
          name: "Undefined",
        },
        subType: {
          id: "KZFzBErXgnZfZ7v7lJ",
          name: "Undefined",
        },
        family: false,
      },
    ],
    promoter: {
      id: "830",
      name: "AEG LIVE",
      description: "AEG LIVE / NTL / USA",
    },
    promoters: [
      {
        id: "830",
        name: "AEG LIVE",
        description: "AEG LIVE / NTL / USA",
      },
    ],
    pleaseNote:
      "To allow for more Card Members to enjoy the show, American Express has set a two-order limit for this offer. This limit applies across all Cards associated with all of your American Express accounts. Prepaid Cards are not eligible. As of March 26, 2022 attendees will no longer be required to demonstrate proof of vaccination or a negative COVID test prior to entry to the stadium. In addition, vaccinated individuals are no longer required to wear masks. Please visit cuse.com/dome for further details.",
    priceRanges: [
      {
        type: "standard",
        currency: "USD",
        min: 29.5,
        max: 299.5,
      },
    ],
    products: [
      {
        name: "Carrier Dome Parking: Paul McCartney Concert",
        id: "k7vGF9eK6I9rG",
        url: "https://www.ticketmaster.com/carrier-dome-parking-paul-mccartney-concert-syracuse-new-york-06-04-2022/event/00005C24C7A1778C",
        type: "Upsell",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7vAva",
              name: "Parking",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAFe",
              name: "Parking",
            },
            family: false,
          },
        ],
      },
    ],
    seatmap: {
      staticUrl:
        "https://maps.ticketmaster.com/maps/geometry/3/event/00005B978A3510BC/staticImage?type=png&systemId=HOST",
    },
    accessibility: {
      info: "Click on the above blue Down Arrow: For additional accommodations please conact a Carrier Dome representative at 1-888-366-3849 and option Four. Monday - Friday 8:30am- 4:30pm",
      ticketLimit: 4,
      url: "https://cuse.com/sports/2009/2/3/GEN_0203095918.aspx",
      urlText: "Or visit cuse.com/dome",
    },
    ticketLimit: {
      info: "There is an overall 8 ticket limit for this event.",
    },
    ageRestrictions: {
      legalAgeEnforced: false,
    },
    code: "NY1:ECD0604",
    _links: {
      self: {
        href: "/discovery/v2/events/k7vGFpyr1uoeH?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ9171uq0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/KovZpakwYe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "JMA Wireless Dome ",
          type: "venue",
          id: "KovZpakwYe",
          test: false,
          url: "https://www.ticketmaster.com/jma-wireless-dome-tickets-syracuse/venue/167",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dbimages/18449v.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/v/05b/9706d81c-875e-4e80-8e96-577df769605b_404121_SOURCE.jpg",
              width: 3264,
              height: 2448,
              fallback: false,
              attribution: "CC BY-SA 3.0 via Wikipedia",
            },
          ],
          postalCode: "13244",
          timezone: "America/New_York",
          city: {
            name: "Syracuse",
          },
          state: {
            name: "New York",
            stateCode: "NY",
          },
          country: {
            name: "United States Of America",
            countryCode: "US",
          },
          address: {
            line1: "900 Irving Avenue",
          },
          location: {
            longitude: "-76.1361305",
            latitude: "43.03626312",
          },
          markets: [
            {
              name: "Upstate New York",
              id: "44",
            },
          ],
          dmas: [
            {
              id: 213,
            },
            {
              id: 231,
            },
            {
              id: 237,
            },
            {
              id: 270,
            },
            {
              id: 372,
            },
            {
              id: 394,
            },
            {
              id: 406,
            },
            {
              id: 410,
            },
          ],
          boxOfficeInfo: {
            phoneNumberDetail: "888-366-3849",
            openHoursDetail: "Monday Through Friday 8:30AM-4:30PM",
            acceptedPaymentDetail:
              "Cash, Visa, Mastercard, American Express and Discover",
            willCallDetail:
              "Customers can pick-up tickets any time day of show! Customer must present the actual credit card used to place order and a photo i.d.",
          },
          parkingDetail:
            "Day of event parking at Syracuse University major events (Men’s basketball, football, concerts, etc.) is available at Manley and Skytop lots, with a shuttle service to and from the Dome included in the price. Dome West lots are available for smaller events. Call our Box Office for RV and Bus pricing, or other questions.",
          generalInfo: {
            childRule:
              "Children under 12 months old do not need a ticket and are expected to sit on an adult’s lap during the event.",
          },
          upcomingEvents: {
            _total: 2,
            ticketmaster: 2,
            _filtered: 0,
          },
          ada: {
            adaPhones: " 888-DOME-TIX (366-3849), Option 4",
            adaCustomCopy:
              "For reserved seat accessible Wheelchair and Companion seats (maximum of three), please click the Filters Icon on the Buy screen for the game you are interested in, and click the Accessibility option on. Any available Accessible seating will then highlight. Note that for Women’s Basketball and Men’s Lacrosse, accessible seating is in the General Admission area, where Dome staff will direct you when you enter the game. You may also contact the Dome Box Office at 888-DOME-TIX during regular business hours (except when closed for holidays) for further assistance with your ticket purchase.",
            adaHours: "Monday Through Friday 8:30AM-4:30PM ",
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/KovZpakwYe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Paul McCartney",
          type: "attraction",
          id: "K8vZ9171uq0",
          test: false,
          url: "https://www.ticketmaster.com/paul-mccartney-tickets/artist/735610",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/user/PAULMCCARTNEY",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/PaulMcCartney",
              },
            ],
            lastfm: [
              {
                url: "http://www.last.fm/music/Paul+McCartney",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/PaulMcCartney",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Paul_McCartney",
              },
            ],
            musicbrainz: [
              {
                id: "ba550d0e-adac-4864-b88b-407cab5e76af",
              },
            ],
            homepage: [
              {
                url: "http://www.paulmccartney.com/",
              },
            ],
          },
          aliases: [
            "mcartney",
            "paul mccartney",
            "paul macartney",
            "paul mcartney",
            "paul mccarthy",
            "paul mccartny",
          ],
          images: [
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7nI",
                name: "Undefined",
              },
              subType: {
                id: "KZFzBErXgnZfZ7v7lJ",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 11,
            tmr: 3,
            ticketmaster: 8,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171uq0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Imagine Dragons: Mercury World Tour",
    type: "event",
    id: "Z7r9jZ1Ad8S4v",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1Ad8S4v",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "2022-04-01T14:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-08-20T22:15:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-08-20",
        localTime: "18:15:00",
        dateTime: "2022-08-20T22:15:00Z",
        dateTBD: false,
        dateTBA: false,
        timeTBA: false,
        noSpecificTime: false,
      },
      status: {
        code: "onsale",
      },
      spanMultipleDays: false,
    },
    classifications: [
      {
        primary: true,
        segment: {
          id: "KZFzniwnSyZfZ7v7nJ",
          name: "Music",
        },
        genre: {
          id: "KnvZfZ7vAev",
          name: "Pop",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7vkEl",
          name: "Pop Rock",
        },
        family: false,
      },
    ],
    promoter: {
      id: "653",
      name: "LIVE NATION MUSIC",
      description: "LIVE NATION MUSIC / NTL / USA",
    },
    promoters: [
      {
        id: "653",
        name: "LIVE NATION MUSIC",
        description: "LIVE NATION MUSIC / NTL / USA",
      },
    ],
    outlets: [
      {
        url: "http://www.redsox.com/imaginedragons",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/imagine-dragons-mercury-world-tour-boston-massachusetts-08-20-2022/event/Zu0FM1R0e5taqAD",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/551-1-2-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1Ad8S4v?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917GSz7?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ917pG-f?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/Z7r9jZa8PM?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkkee?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Fenway Park",
          type: "venue",
          id: "Z6r9jZkkee",
          test: false,
          locale: "en-us",
          postalCode: "02215",
          timezone: "America/New_York",
          city: {
            name: "Boston",
          },
          state: {
            name: "Massachusetts",
            stateCode: "MA",
          },
          country: {
            name: "United States Of America",
            countryCode: "US",
          },
          address: {
            line1: "4 Yawkey Way",
          },
          location: {
            longitude: "-71.102501",
            latitude: "42.346901",
          },
          dmas: [
            {
              id: 235,
            },
          ],
          upcomingEvents: {
            _total: 83,
            tmr: 67,
            ticketmaster: 16,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkkee?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Imagine Dragons",
          type: "attraction",
          id: "K8vZ917GSz7",
          test: false,
          url: "https://www.ticketmaster.com/imagine-dragons-tickets/artist/1435919",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/channel/UCT9zcQNlyht7fRlcjmflRSA",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/Imaginedragons",
              },
            ],
            itunes: [
              {
                url: "https://music.apple.com/us/artist/imagine-dragons/358714030",
              },
            ],
            lastfm: [
              {
                url: "http://www.last.fm/music/Imagine+Dragons",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/ImagineDragons",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Imagine_Dragons",
              },
            ],
            spotify: [
              {
                url: "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q",
              },
            ],
            instagram: [
              {
                url: "http://instagram.com/imaginedragons/",
              },
              {
                url: "http://instagram.com/imaginedragons",
              },
            ],
            musicbrainz: [
              {
                id: "012151a8-0f9a-44c9-997f-ebd68b5389f9",
              },
            ],
            homepage: [
              {
                url: "http://www.imaginedragonsmusic.com/",
              },
            ],
          },
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7nI",
                name: "Undefined",
              },
              subType: {
                id: "KZFzBErXgnZfZ7v7lJ",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 43,
            mfx_nl: 2,
            tmr: 1,
            mfx_de: 7,
            mfx_es: 6,
            ticketmaster: 23,
            mfx_cz: 2,
            _filtered: 0,
            mfx_se: 2,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917GSz7?locale=en-us",
            },
          },
        },
        {
          name: "Macklemore",
          type: "attraction",
          id: "K8vZ917pG-f",
          test: false,
          url: "https://www.ticketmaster.com/macklemore-tickets/artist/2400469",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/user/RyanLewisProductions",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/macklemore",
              },
            ],
            lastfm: [
              {
                url: "https://www.last.fm/music/Macklemore",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Macklemore",
              },
            ],
            musicbrainz: [
              {
                id: "b6d7ec94-830c-44dd-b699-ce66556b7e55",
              },
            ],
            homepage: [
              {
                url: "http://macklemore.com/",
              },
            ],
          },
          images: [
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAv1",
                name: "Hip-Hop/Rap",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vkvl",
                name: "Hip-Hop/Rap",
              },
              type: {
                id: "KZAyXgnZfZ7v7la",
                name: "Individual",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAd7",
                name: "Musician",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 23,
            tmr: 1,
            mfx_no: 2,
            ticketmaster: 20,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917pG-f?locale=en-us",
            },
          },
        },
        {
          name: "Kings Elliot",
          type: "attraction",
          id: "Z7r9jZa8PM",
          test: false,
          locale: "en-us",
          images: [
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/c/060/c5c08e7a-9912-456c-a060-2758be94e060_105881_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/060/c5c08e7a-9912-456c-a060-2758be94e060_105881_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/060/c5c08e7a-9912-456c-a060-2758be94e060_105881_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/060/c5c08e7a-9912-456c-a060-2758be94e060_105881_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/060/c5c08e7a-9912-456c-a060-2758be94e060_105881_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/060/c5c08e7a-9912-456c-a060-2758be94e060_105881_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/060/c5c08e7a-9912-456c-a060-2758be94e060_105881_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/060/c5c08e7a-9912-456c-a060-2758be94e060_105881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/060/c5c08e7a-9912-456c-a060-2758be94e060_105881_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/060/c5c08e7a-9912-456c-a060-2758be94e060_105881_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: true,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAvl",
                name: "Other",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vk1I",
                name: "Other",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 22,
            tmr: 1,
            ticketmaster: 21,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/Z7r9jZa8PM?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "PAUL McCARTNEY GOT BACK",
    type: "event",
    id: "G5viZ97EI6MbZ",
    test: false,
    url: "https://www.ticketmaster.com/paul-mccartney-got-back-knoxville-tennessee-05-31-2022/event/1B005C49E81F7600",
    locale: "en-us",
    images: [
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "2022-02-25T15:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-01T02:00:00Z",
      },
      presales: [
        {
          startDateTime: "2022-02-22T15:00:00Z",
          endDateTime: "2022-02-25T13:00:00Z",
          name: "Official Platinum Presale",
        },
        {
          startDateTime: "2022-02-25T15:00:00Z",
          endDateTime: "2022-06-01T00:00:00Z",
          name: "Official Platinum",
        },
        {
          startDateTime: "2022-02-22T17:00:00Z",
          endDateTime: "2022-02-25T13:00:00Z",
          name: "Paul McCartney Fan Presale",
        },
        {
          startDateTime: "2022-02-22T17:00:00Z",
          endDateTime: "2022-06-01T00:00:00Z",
          name: "Preferred Seating",
        },
        {
          startDateTime: "2022-02-24T15:00:00Z",
          endDateTime: "2022-02-25T13:00:00Z",
          name: "Live Nation Presale",
        },
        {
          startDateTime: "2022-02-24T15:00:00Z",
          endDateTime: "2022-02-25T13:00:00Z",
          name: "Venue Presale",
        },
        {
          startDateTime: "2022-02-24T15:00:00Z",
          endDateTime: "2022-02-25T13:00:00Z",
          name: "Spotify Presale",
        },
        {
          startDateTime: "2022-02-24T15:00:00Z",
          endDateTime: "2022-02-25T13:00:00Z",
          name: "Ticketmaster Presale",
        },
        {
          startDateTime: "2022-02-22T17:00:00Z",
          endDateTime: "2022-02-25T13:00:00Z",
          name: "VIP Package Presale",
        },
        {
          startDateTime: "2022-02-25T15:00:00Z",
          endDateTime: "2022-05-17T21:00:00Z",
          name: "VIP Package Onsale",
        },
        {
          startDateTime: "2022-02-22T15:00:00Z",
          endDateTime: "2022-02-22T17:00:00Z",
          name: "American Express® VIP Packages",
        },
        {
          startDateTime: "2022-02-22T15:00:00Z",
          endDateTime: "2022-02-25T03:00:00Z",
          name: "American Express® Card Member Presale",
        },
        {
          startDateTime: "2022-02-25T15:00:00Z",
          endDateTime: "2022-06-01T00:00:00Z",
          name: "American Express® Card Member Onsale",
        },
        {
          startDateTime: "2022-02-22T15:00:00Z",
          endDateTime: "2022-02-25T03:00:00Z",
          name: "American Express® Preferred Seating",
        },
      ],
    },
    dates: {
      start: {
        localDate: "2022-05-31",
        localTime: "20:00:00",
        dateTime: "2022-06-01T00:00:00Z",
        dateTBD: false,
        dateTBA: false,
        timeTBA: false,
        noSpecificTime: false,
      },
      timezone: "America/New_York",
      status: {
        code: "onsale",
      },
      spanMultipleDays: false,
    },
    classifications: [
      {
        primary: true,
        segment: {
          id: "KZFzniwnSyZfZ7v7nJ",
          name: "Music",
        },
        genre: {
          id: "KnvZfZ7vAeA",
          name: "Rock",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v6F1",
          name: "Pop",
        },
        type: {
          id: "KZAyXgnZfZ7v7nI",
          name: "Undefined",
        },
        subType: {
          id: "KZFzBErXgnZfZ7v7lJ",
          name: "Undefined",
        },
        family: false,
      },
    ],
    promoter: {
      id: "653",
      name: "LIVE NATION MUSIC",
      description: "LIVE NATION MUSIC / NTL / USA",
    },
    promoters: [
      {
        id: "653",
        name: "LIVE NATION MUSIC",
        description: "LIVE NATION MUSIC / NTL / USA",
      },
    ],
    pleaseNote:
      "The Clear Bag Policy is in effect for all events at Thompson-Boling Arena. To allow for more Card Members to enjoy the show, American Express has set a two-order limit for this offer. This limit applies across all Cards associated with all of your American Express accounts. Prepaid Cards are not eligible.",
    priceRanges: [
      {
        type: "standard",
        currency: "USD",
        min: 49.5,
        max: 370,
      },
    ],
    seatmap: {
      staticUrl:
        "https://maps.ticketmaster.com/maps/geometry/3/event/1B005C49E81F7600/staticImage?type=png&systemId=HOST",
    },
    accessibility: {
      ticketLimit: 4,
    },
    ticketLimit: {
      info: "There is an overall 6 ticket limit for this event.",
    },
    ageRestrictions: {
      legalAgeEnforced: false,
    },
    code: "SCS:ETA0531",
    _links: {
      self: {
        href: "/discovery/v2/events/G5viZ97EI6MbZ?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ9171uq0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/KovZpZA1eE1A?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Thompson-Boling Arena",
          type: "venue",
          id: "KovZpZA1eE1A",
          test: false,
          url: "https://www.ticketmaster.com/thompsonboling-arena-tickets-knoxville/venue/221890",
          locale: "en-us",
          postalCode: "37996",
          timezone: "America/New_York",
          city: {
            name: "Knoxville",
          },
          state: {
            name: "Tennessee",
            stateCode: "TN",
          },
          country: {
            name: "United States Of America",
            countryCode: "US",
          },
          address: {
            line1: "1600 Phillip Fulmer Way",
          },
          location: {
            longitude: "-83.925366",
            latitude: "35.9517627",
          },
          markets: [
            {
              name: " Knoxville & More",
              id: "31",
            },
          ],
          dmas: [
            {
              id: 236,
            },
            {
              id: 247,
            },
            {
              id: 312,
            },
            {
              id: 343,
            },
          ],
          boxOfficeInfo: {
            phoneNumberDetail: "865-656-1200",
            openHoursDetail:
              "The University of Tennessee Athletic Ticket Office is open Monday through Friday, 8:30 am until 6:00 pm ET. The ticket office is located at 1600 Phillip Fulmer Way in Thompson-Boling Arena. On game day, the Athletic Ticket Office remains open until the end of the first half. For weekend games, the Athletic Ticket Office opens three (3) hours prior to tip off.",
            acceptedPaymentDetail:
              "The University of Tennessee Athletic Ticket Office accepts Visa, MasterCard and Discover, as well as cash.",
            willCallDetail:
              "Game Day Will Call is available at the Athletic Ticket Office at Thompson-Boling Arena three (3) hours prior to tip off and until end of first half. A photo ID of the ticket purchaser is required.",
          },
          parkingDetail: "Please call Parking Services at 865-974-6031.",
          accessibleSeatingDetail:
            "Please contact the University of Tennessee Athletic Ticket Office at 865-696-1200.",
          generalInfo: {
            generalRule:
              "REGULATIONS • Everyone regardless of age must have a ticket. • All articles, including purses, are subject to search. • Gates open 90 minutes prior to tip off. • No passouts are permitted • Smoking is prohibited in the seating area and concourses. • Tickets not obtained directly from the UT Ticket Office or its authorized agents may not be honored. • No refund or exchange of tickets allowed. PROHIBITED ITEMS • Weapons • Alcoholic beverages • Cans, bottles, coolers • Radios without headsets • Open umbrellas • Video cameras • Stadium seats with arms • Large bags or parcels, including backpacks and large purses • Artificial noisemakers",
            childRule: "Everyone, regardless of age, MUST HAVE A TICKET.",
          },
          upcomingEvents: {
            _total: 8,
            tmr: 2,
            ticketmaster: 6,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/KovZpZA1eE1A?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Paul McCartney",
          type: "attraction",
          id: "K8vZ9171uq0",
          test: false,
          url: "https://www.ticketmaster.com/paul-mccartney-tickets/artist/735610",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/user/PAULMCCARTNEY",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/PaulMcCartney",
              },
            ],
            lastfm: [
              {
                url: "http://www.last.fm/music/Paul+McCartney",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/PaulMcCartney",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Paul_McCartney",
              },
            ],
            musicbrainz: [
              {
                id: "ba550d0e-adac-4864-b88b-407cab5e76af",
              },
            ],
            homepage: [
              {
                url: "http://www.paulmccartney.com/",
              },
            ],
          },
          aliases: [
            "mcartney",
            "paul mccartney",
            "paul macartney",
            "paul mcartney",
            "paul mccarthy",
            "paul mccartny",
          ],
          images: [
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7nI",
                name: "Undefined",
              },
              subType: {
                id: "KZFzBErXgnZfZ7v7lJ",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 11,
            tmr: 3,
            ticketmaster: 8,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171uq0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Imagine Dragons: Mercury World Tour",
    type: "event",
    id: "G5vzZ96h0cPBi",
    test: false,
    url: "https://www.ticketmaster.com/imagine-dragons-mercury-world-tour-salt-lake-city-utah-08-05-2022/event/1E005C76E4B65EAC",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "2022-04-01T16:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-08-06T02:30:00Z",
      },
      presales: [
        {
          startDateTime: "2022-03-28T16:00:00Z",
          endDateTime: "2022-04-01T04:00:00Z",
          name: "Official Platinum Presale",
        },
        {
          startDateTime: "2022-04-01T16:00:00Z",
          endDateTime: "2022-08-06T01:30:00Z",
          name: "Official Platinum Onsale",
        },
        {
          startDateTime: "2022-03-29T16:00:00Z",
          endDateTime: "2022-04-01T04:00:00Z",
          name: "Artist Presale",
        },
        {
          startDateTime: "2022-03-31T16:00:00Z",
          endDateTime: "2022-04-01T04:00:00Z",
          name: "Spotify Presale",
        },
        {
          startDateTime: "2022-03-28T16:00:00Z",
          endDateTime: "2022-04-01T04:00:00Z",
          name: "VIP Packages Presale",
        },
        {
          startDateTime: "2022-04-01T16:00:00Z",
          endDateTime: "2022-07-30T04:00:00Z",
          name: "VIP Packages Onsale",
        },
        {
          startDateTime: "2022-03-31T16:00:00Z",
          endDateTime: "2022-04-01T04:00:00Z",
          name: "Radio/Venue Presale",
        },
        {
          startDateTime: "2022-03-31T16:00:00Z",
          endDateTime: "2022-04-01T04:00:00Z",
          name: "Live Nation Presale",
        },
        {
          startDateTime: "2022-03-28T16:00:00Z",
          endDateTime: "2022-04-01T04:00:00Z",
          name: "Verizon Up Presale Tickets",
        },
        {
          startDateTime: "2022-05-03T12:00:00Z",
          endDateTime: "2022-05-04T05:59:00Z",
          name: "Citi® Cardmember Presale",
        },
        {
          startDateTime: "2022-05-03T12:00:00Z",
          endDateTime: "2022-05-03T17:59:00Z",
          name: "Concert Week Citi® Cardmember Presale",
        },
        {
          startDateTime: "2022-05-03T16:00:00Z",
          endDateTime: "2022-05-03T17:59:00Z",
          name: "Rakuten Concert Week Promotion",
        },
        {
          startDateTime: "2022-05-04T14:00:00Z",
          endDateTime: "2022-05-11T05:59:00Z",
          name: "Concert Week Promotion",
        },
      ],
    },
    dates: {
      start: {
        localDate: "2022-08-05",
        localTime: "18:30:00",
        dateTime: "2022-08-06T00:30:00Z",
        dateTBD: false,
        dateTBA: false,
        timeTBA: false,
        noSpecificTime: false,
      },
      timezone: "America/Denver",
      status: {
        code: "onsale",
      },
      spanMultipleDays: false,
    },
    classifications: [
      {
        primary: true,
        segment: {
          id: "KZFzniwnSyZfZ7v7nJ",
          name: "Music",
        },
        genre: {
          id: "KnvZfZ7vAeA",
          name: "Rock",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v6F1",
          name: "Pop",
        },
        type: {
          id: "KZAyXgnZfZ7v7nI",
          name: "Undefined",
        },
        subType: {
          id: "KZFzBErXgnZfZ7v7lJ",
          name: "Undefined",
        },
        family: false,
      },
    ],
    promoter: {
      id: "653",
      name: "LIVE NATION MUSIC",
      description: "LIVE NATION MUSIC / NTL / USA",
    },
    promoters: [
      {
        id: "653",
        name: "LIVE NATION MUSIC",
        description: "LIVE NATION MUSIC / NTL / USA",
      },
    ],
    pleaseNote:
      "Entry requirements are subject to change. By purchasing tickets to this event you agree to abide by entry requirements in effect at the time of the event. Check the venue website leading up to your event for the latest protocol.",
    priceRanges: [
      {
        type: "standard",
        currency: "USD",
        min: 39.5,
        max: 154.5,
      },
    ],
    seatmap: {
      staticUrl:
        "https://maps.ticketmaster.com/maps/geometry/3/event/1E005C76E4B65EAC/staticImage?type=png&systemId=HOST",
    },
    accessibility: {
      ticketLimit: 6,
    },
    ticketLimit: {
      info: "There is an overall 6 ticket limit for this event.",
    },
    ageRestrictions: {
      legalAgeEnforced: false,
    },
    code: "MTN:ERE0805",
    _links: {
      self: {
        href: "/discovery/v2/events/G5vzZ96h0cPBi?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917GSz7?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ917pG-f?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ917QfR7?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/KovZpZAdEt6A?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Rice-Eccles Stadium",
          type: "venue",
          id: "KovZpZAdEt6A",
          test: false,
          url: "https://www.ticketmaster.com/riceeccles-stadium-tickets-salt-lake-city/venue/246158",
          locale: "en-us",
          images: [
            {
              url: "https://s1.ticketm.net/dam/v/a24/943935b3-9e46-4baf-844c-a3c1a64bea24_319042_SOURCE.jpg",
              width: 1944,
              height: 2456,
              fallback: false,
              attribution: "CC BY-SA 2.0 via wikipedia",
            },
          ],
          postalCode: "84112",
          timezone: "America/Denver",
          city: {
            name: "Salt Lake City",
          },
          state: {
            name: "Utah",
            stateCode: "UT",
          },
          country: {
            name: "United States Of America",
            countryCode: "US",
          },
          address: {
            line1: "451 South 1400 East",
          },
          location: {
            longitude: "-111.850261",
            latitude: "40.7596422",
          },
          markets: [
            {
              name: " Montana & Idaho",
              id: "45",
            },
          ],
          dmas: [
            {
              id: 378,
            },
          ],
          boxOfficeInfo: {
            phoneNumberDetail:
              "For more information regarding the show, please call (801)325-SEAT.",
            openHoursDetail:
              "Monday-Friday 10:00am-6:00pm Saturday 10:00am-8:00pm Closed Sunday Box Office is located at Southwest Ticket Office.",
            acceptedPaymentDetail:
              "Visa, MasterCard, Discover, American Express and Cash are accepted at the box office. No Checks!",
            willCallDetail: "Box office opens at 10:00am day of event.",
          },
          parkingDetail:
            "Various parking lots surround the stadium. Facility fee pays for parking. Patron dropoff at 500 South.",
          generalInfo: {
            generalRule:
              "No cameras, videos, audio. No smoking, except in designated areas.",
            childRule:
              "All ages are allowed. Minimum ticketing requirements for children are dependent on each performance.",
          },
          upcomingEvents: {
            _total: 3,
            ticketmaster: 3,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/KovZpZAdEt6A?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Imagine Dragons",
          type: "attraction",
          id: "K8vZ917GSz7",
          test: false,
          url: "https://www.ticketmaster.com/imagine-dragons-tickets/artist/1435919",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/channel/UCT9zcQNlyht7fRlcjmflRSA",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/Imaginedragons",
              },
            ],
            itunes: [
              {
                url: "https://music.apple.com/us/artist/imagine-dragons/358714030",
              },
            ],
            lastfm: [
              {
                url: "http://www.last.fm/music/Imagine+Dragons",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/ImagineDragons",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Imagine_Dragons",
              },
            ],
            spotify: [
              {
                url: "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q",
              },
            ],
            instagram: [
              {
                url: "http://instagram.com/imaginedragons/",
              },
              {
                url: "http://instagram.com/imaginedragons",
              },
            ],
            musicbrainz: [
              {
                id: "012151a8-0f9a-44c9-997f-ebd68b5389f9",
              },
            ],
            homepage: [
              {
                url: "http://www.imaginedragonsmusic.com/",
              },
            ],
          },
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7nI",
                name: "Undefined",
              },
              subType: {
                id: "KZFzBErXgnZfZ7v7lJ",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 43,
            mfx_nl: 2,
            tmr: 1,
            mfx_de: 7,
            mfx_es: 6,
            ticketmaster: 23,
            mfx_cz: 2,
            _filtered: 0,
            mfx_se: 2,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917GSz7?locale=en-us",
            },
          },
        },
        {
          name: "Macklemore",
          type: "attraction",
          id: "K8vZ917pG-f",
          test: false,
          url: "https://www.ticketmaster.com/macklemore-tickets/artist/2400469",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/user/RyanLewisProductions",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/macklemore",
              },
            ],
            lastfm: [
              {
                url: "https://www.last.fm/music/Macklemore",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Macklemore",
              },
            ],
            musicbrainz: [
              {
                id: "b6d7ec94-830c-44dd-b699-ce66556b7e55",
              },
            ],
            homepage: [
              {
                url: "http://macklemore.com/",
              },
            ],
          },
          images: [
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAv1",
                name: "Hip-Hop/Rap",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vkvl",
                name: "Hip-Hop/Rap",
              },
              type: {
                id: "KZAyXgnZfZ7v7la",
                name: "Individual",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAd7",
                name: "Musician",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 23,
            tmr: 1,
            mfx_no: 2,
            ticketmaster: 20,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917pG-f?locale=en-us",
            },
          },
        },
        {
          name: "Kings Elliot",
          type: "attraction",
          id: "K8vZ917QfR7",
          test: false,
          url: "https://www.ticketmaster.com/kings-elliot-tickets/artist/2872896",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: true,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: true,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7la",
                name: "Individual",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAde",
                name: "Singer/Vocalist",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 22,
            tmr: 1,
            ticketmaster: 21,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917QfR7?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Imagine Dragons: Mercury World Tour",
    type: "event",
    id: "G5vjZ9653l0CE",
    test: false,
    url: "https://www.ticketmaster.com/imagine-dragons-mercury-world-tour-las-vegas-nevada-09-10-2022/event/17005C72D2AE43A7",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "2022-04-01T17:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-09-11T05:30:00Z",
      },
      presales: [
        {
          startDateTime: "2022-03-31T17:00:00Z",
          endDateTime: "2022-04-01T05:00:00Z",
          name: "Live Nation Presale",
        },
        {
          startDateTime: "2022-03-31T17:00:00Z",
          endDateTime: "2022-04-01T05:00:00Z",
          name: "Raiders Presale",
        },
        {
          startDateTime: "2022-03-31T17:00:00Z",
          endDateTime: "2022-04-01T05:00:00Z",
          name: "Allegiant Stadium Presale",
        },
        {
          startDateTime: "2022-03-31T17:00:00Z",
          endDateTime: "2022-04-01T05:00:00Z",
          name: "Spotify Presale",
        },
        {
          startDateTime: "2022-03-29T17:00:00Z",
          endDateTime: "2022-04-01T05:00:00Z",
          name: "Artist Presale",
        },
        {
          startDateTime: "2022-03-28T17:00:00Z",
          endDateTime: "2022-04-01T05:00:00Z",
          name: "Official Platinum Presale",
        },
        {
          startDateTime: "2022-04-01T17:00:00Z",
          endDateTime: "2022-09-11T05:30:00Z",
          name: "Official Platinum Onsale",
        },
        {
          startDateTime: "2022-03-28T17:00:00Z",
          endDateTime: "2022-04-01T05:00:00Z",
          name: "Verizon Up Presale Tickets",
        },
        {
          startDateTime: "2022-03-31T17:00:00Z",
          endDateTime: "2022-04-01T05:00:00Z",
          name: "MGM Rewards Presale",
        },
        {
          startDateTime: "2022-03-28T17:00:00Z",
          endDateTime: "2022-04-01T05:00:00Z",
          name: "VIP Packages Presale",
        },
        {
          startDateTime: "2022-04-01T17:00:00Z",
          endDateTime: "2022-09-04T05:00:00Z",
          name: "VIP Packages Onsale",
        },
        {
          startDateTime: "2022-05-04T14:00:00Z",
          endDateTime: "2022-05-11T06:59:00Z",
          name: "Concert Week Promotion",
        },
        {
          startDateTime: "2022-05-03T12:00:00Z",
          endDateTime: "2022-05-04T06:59:00Z",
          name: "Concert Week Citi® Cardmember Presale",
        },
        {
          startDateTime: "2022-05-03T16:00:00Z",
          endDateTime: "2022-05-04T06:59:00Z",
          name: "Rakuten Concert Week Promotion",
        },
      ],
    },
    dates: {
      start: {
        localDate: "2022-09-10",
        localTime: "18:30:00",
        dateTime: "2022-09-11T01:30:00Z",
        dateTBD: false,
        dateTBA: false,
        timeTBA: false,
        noSpecificTime: false,
      },
      timezone: "America/Los_Angeles",
      status: {
        code: "onsale",
      },
      spanMultipleDays: false,
    },
    classifications: [
      {
        primary: true,
        segment: {
          id: "KZFzniwnSyZfZ7v7nJ",
          name: "Music",
        },
        genre: {
          id: "KnvZfZ7vAeA",
          name: "Rock",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v6F1",
          name: "Pop",
        },
        type: {
          id: "KZAyXgnZfZ7v7nI",
          name: "Undefined",
        },
        subType: {
          id: "KZFzBErXgnZfZ7v7lJ",
          name: "Undefined",
        },
        family: false,
      },
    ],
    promoter: {
      id: "653",
      name: "LIVE NATION MUSIC",
      description: "LIVE NATION MUSIC / NTL / USA",
    },
    promoters: [
      {
        id: "653",
        name: "LIVE NATION MUSIC",
        description: "LIVE NATION MUSIC / NTL / USA",
      },
    ],
    priceRanges: [
      {
        type: "standard",
        currency: "USD",
        min: 34.51,
        max: 195,
      },
    ],
    products: [
      {
        name: "Imagine Dragons - Early Entry Picnic Upgrade (TICKET NOT INCLUDED)",
        id: "G5vjZ96Jx4oVC",
        url: "https://www.ticketmaster.com/imagine-dragons-early-entry-picnic-upgrade-las-vegas-nevada-09-10-2022/event/17005C79A2551D0E",
        type: "Special Entry",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7v7lv",
              name: "Special Entry",
            },
            family: false,
          },
        ],
      },
    ],
    seatmap: {
      staticUrl:
        "https://maps.ticketmaster.com/maps/geometry/3/event/17005C72D2AE43A7/staticImage?type=png&systemId=HOST",
    },
    accessibility: {
      ticketLimit: 4,
    },
    ageRestrictions: {
      legalAgeEnforced: false,
    },
    code: "NEV:EAS0910",
    _links: {
      self: {
        href: "/discovery/v2/events/G5vjZ9653l0CE?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917GSz7?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ917pG-f?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ917QfR7?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/KovZ917Ax7n?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Allegiant Stadium",
          type: "venue",
          id: "KovZ917Ax7n",
          test: false,
          url: "https://www.ticketmaster.com/allegiant-stadium-tickets-las-vegas/venue/189482",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dbimages/22052v.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
          ],
          postalCode: "89118",
          timezone: "America/Los_Angeles",
          city: {
            name: "Las Vegas ",
          },
          state: {
            name: "Nevada",
            stateCode: "NV",
          },
          country: {
            name: "United States Of America",
            countryCode: "US",
          },
          address: {
            line1: "3333 Al Davis Way",
          },
          location: {
            longitude: "-115.628831",
            latitude: "36.256861",
          },
          markets: [
            {
              name: "Las Vegas",
              id: "14",
            },
          ],
          dmas: [
            {
              id: 319,
            },
          ],
          upcomingEvents: {
            _total: 55,
            tmr: 6,
            ticketmaster: 49,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/KovZ917Ax7n?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Imagine Dragons",
          type: "attraction",
          id: "K8vZ917GSz7",
          test: false,
          url: "https://www.ticketmaster.com/imagine-dragons-tickets/artist/1435919",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/channel/UCT9zcQNlyht7fRlcjmflRSA",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/Imaginedragons",
              },
            ],
            itunes: [
              {
                url: "https://music.apple.com/us/artist/imagine-dragons/358714030",
              },
            ],
            lastfm: [
              {
                url: "http://www.last.fm/music/Imagine+Dragons",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/ImagineDragons",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Imagine_Dragons",
              },
            ],
            spotify: [
              {
                url: "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q",
              },
            ],
            instagram: [
              {
                url: "http://instagram.com/imaginedragons/",
              },
              {
                url: "http://instagram.com/imaginedragons",
              },
            ],
            musicbrainz: [
              {
                id: "012151a8-0f9a-44c9-997f-ebd68b5389f9",
              },
            ],
            homepage: [
              {
                url: "http://www.imaginedragonsmusic.com/",
              },
            ],
          },
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7nI",
                name: "Undefined",
              },
              subType: {
                id: "KZFzBErXgnZfZ7v7lJ",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 43,
            mfx_nl: 2,
            tmr: 1,
            mfx_de: 7,
            mfx_es: 6,
            ticketmaster: 23,
            mfx_cz: 2,
            _filtered: 0,
            mfx_se: 2,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917GSz7?locale=en-us",
            },
          },
        },
        {
          name: "Macklemore",
          type: "attraction",
          id: "K8vZ917pG-f",
          test: false,
          url: "https://www.ticketmaster.com/macklemore-tickets/artist/2400469",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/user/RyanLewisProductions",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/macklemore",
              },
            ],
            lastfm: [
              {
                url: "https://www.last.fm/music/Macklemore",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Macklemore",
              },
            ],
            musicbrainz: [
              {
                id: "b6d7ec94-830c-44dd-b699-ce66556b7e55",
              },
            ],
            homepage: [
              {
                url: "http://macklemore.com/",
              },
            ],
          },
          images: [
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAv1",
                name: "Hip-Hop/Rap",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vkvl",
                name: "Hip-Hop/Rap",
              },
              type: {
                id: "KZAyXgnZfZ7v7la",
                name: "Individual",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAd7",
                name: "Musician",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 23,
            tmr: 1,
            mfx_no: 2,
            ticketmaster: 20,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917pG-f?locale=en-us",
            },
          },
        },
        {
          name: "Kings Elliot",
          type: "attraction",
          id: "K8vZ917QfR7",
          test: false,
          url: "https://www.ticketmaster.com/kings-elliot-tickets/artist/2872896",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: true,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: true,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7la",
                name: "Individual",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAde",
                name: "Singer/Vocalist",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 22,
            tmr: 1,
            ticketmaster: 21,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917QfR7?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Imagine Dragons: Mercury World Tour",
    type: "event",
    id: "vvG1FZ96QyDAgo",
    test: false,
    url: "https://www.ticketmaster.com/imagine-dragons-mercury-world-tour-hershey-pennsylvania-08-12-2022/event/02005C76B9EC5D51",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "2022-04-01T14:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-08-12T23:00:00Z",
      },
      presales: [
        {
          startDateTime: "2022-03-29T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Artist Presale",
        },
        {
          startDateTime: "2022-03-31T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Live Nation Presale",
        },
        {
          startDateTime: "2022-03-31T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Spotify Presale",
        },
        {
          startDateTime: "2022-03-31T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Venue/Radio Presale",
        },
        {
          startDateTime: "2022-03-28T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "VIP Packages Presale",
        },
        {
          startDateTime: "2022-04-01T14:00:00Z",
          endDateTime: "2022-08-06T02:00:00Z",
          name: "VIP Packages Onsale",
        },
        {
          startDateTime: "2022-03-28T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Official Platinum Presale",
        },
        {
          startDateTime: "2022-04-01T14:00:00Z",
          endDateTime: "2022-08-12T23:00:00Z",
          name: "Official Platinum",
        },
        {
          startDateTime: "2022-03-28T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Verizon Up Presale Tickets",
        },
        {
          startDateTime: "2022-05-03T12:00:00Z",
          endDateTime: "2022-05-04T03:59:00Z",
          name: "Concert Week Citi® Cardmember Presale",
        },
        {
          startDateTime: "2022-05-03T16:00:00Z",
          endDateTime: "2022-05-04T03:59:00Z",
          name: "Rakuten Concert Week Promotion",
        },
        {
          startDateTime: "2022-05-04T14:00:00Z",
          endDateTime: "2022-05-11T03:59:00Z",
          name: "Concert Week Promotion",
        },
      ],
    },
    dates: {
      start: {
        localDate: "2022-08-12",
        localTime: "18:30:00",
        dateTime: "2022-08-12T22:30:00Z",
        dateTBD: false,
        dateTBA: false,
        timeTBA: false,
        noSpecificTime: false,
      },
      timezone: "America/New_York",
      status: {
        code: "onsale",
      },
      spanMultipleDays: false,
    },
    classifications: [
      {
        primary: true,
        segment: {
          id: "KZFzniwnSyZfZ7v7nJ",
          name: "Music",
        },
        genre: {
          id: "KnvZfZ7vAeA",
          name: "Rock",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v6F1",
          name: "Pop",
        },
        type: {
          id: "KZAyXgnZfZ7v7nI",
          name: "Undefined",
        },
        subType: {
          id: "KZFzBErXgnZfZ7v7lJ",
          name: "Undefined",
        },
        family: false,
      },
    ],
    promoter: {
      id: "653",
      name: "LIVE NATION MUSIC",
      description: "LIVE NATION MUSIC / NTL / USA",
    },
    promoters: [
      {
        id: "653",
        name: "LIVE NATION MUSIC",
        description: "LIVE NATION MUSIC / NTL / USA",
      },
    ],
    info: "We are now a cashless venue. All major credit cards are accepted. Patrons 2yrs and older require a ticket. Artist(s) subject to change. Due to security enhancements, please arrive at least 45-60 minutes prior to event time. Please only bring essential items with you. Hersheypark Stadium will only permit bags/backpacks that are 12x12x6 or smaller and clear 1-gallon bags. Any bags/backpacks that are larger in size will need to be returned to the owners vehicle or disposed of. No audio/video recording. Rain Or Shine Tickets can be purchased online up until the event start time. After this time, if tickets are still available, they can be purchased at the Hersheypark Stadium Box Office.",
    pleaseNote:
      "Entry requirements are subject to change. By purchasing tickets to this event you agree to abide by entry requirements in effect at the time of the event. Check the venue website leading up to your event for the latest protocol.",
    priceRanges: [
      {
        type: "standard",
        currency: "USD",
        min: 25,
        max: 1140.4,
      },
    ],
    products: [
      {
        name: "Imagine Dragons - Early Entry Picnic Upgrade (TICKET NOT INCLUDED)",
        id: "vvG1FZ96E554fi",
        url: "https://www.ticketmaster.com/imagine-dragons-early-entry-picnic-upgrade-hershey-pennsylvania-08-12-2022/event/02005C79CB2D552C",
        type: "Special Entry",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7v7lv",
              name: "Special Entry",
            },
            family: false,
          },
        ],
      },
    ],
    seatmap: {
      staticUrl:
        "https://maps.ticketmaster.com/maps/geometry/3/event/02005C76B9EC5D51/staticImage?type=png&systemId=HOST",
    },
    accessibility: {
      ticketLimit: 4,
    },
    ticketLimit: {
      info: "There is an overall 6 ticket limit for this event.",
    },
    ageRestrictions: {
      legalAgeEnforced: false,
    },
    code: "PHI:EHS0812",
    _links: {
      self: {
        href: "/discovery/v2/events/vvG1FZ96QyDAgo?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917GSz7?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ917pG-f?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ917QfR7?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/KovZpaoU8e?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Hersheypark Stadium",
          type: "venue",
          id: "KovZpaoU8e",
          test: false,
          url: "https://www.ticketmaster.com/hersheypark-stadium-tickets-hershey/venue/16394",
          locale: "en-us",
          aliases: ["hershey", "hersheypark", "hershey stadium"],
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dbimages/22384v.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
          ],
          postalCode: "17033",
          timezone: "America/New_York",
          city: {
            name: "Hershey",
          },
          state: {
            name: "Pennsylvania",
            stateCode: "PA",
          },
          country: {
            name: "United States Of America",
            countryCode: "US",
          },
          address: {
            line1: "100 W Hersheypark Dr",
          },
          location: {
            longitude: "-76.660281",
            latitude: "40.290715",
          },
          markets: [
            {
              name: "Philadelphia",
              id: "18",
            },
          ],
          dmas: [
            {
              id: 294,
            },
            {
              id: 358,
            },
            {
              id: 416,
            },
          ],
          boxOfficeInfo: {
            phoneNumberDetail:
              "(717) 534-3911 www.hersheypa.com (All Venues) www.giantcenter.net (Giant Center)",
            openHoursDetail:
              "Hersheypark Stadium BOX OFFICE is only open on day of event.",
            acceptedPaymentDetail: "Cash, Check and all major credit cards.",
            willCallDetail:
              "Pick up tickets on day of show at the Stadium Box Office, after 9:00a.m. Bring a valid photo I.D. for tickets and confirmation number and credit card used.",
          },
          parkingDetail: "Parking fee is charged.",
          accessibleSeatingDetail:
            "Fully Acessible. All special seating needs please contact the box office at 717-534-3911.",
          generalInfo: {
            generalRule:
              "All hand carried items, including backpacks, belt bag and purses will be searched.Guests are encouraged to keep nonessential items in their vehicles. -No umbrellas,lawn chairs, food, beverages or coolers. -No audio/video tape recording devises allowed. -Smoking only in designated areas. -No food, beverages, or coolers permitted. -Once in the venue, you may not leave the premises. If so, you will be recharged admission to enter. -No camping or loitering. -Posters and signs are not permitted into the Venue. -All events are all-weather events.",
            childRule:
              "All patrons who have reached their 2nd birthday need a ticket, however, for some family shows (ex:Sesame) anyone aged 1 or over needs a ticket.",
          },
          upcomingEvents: {
            _total: 11,
            ticketmaster: 11,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/KovZpaoU8e?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Imagine Dragons",
          type: "attraction",
          id: "K8vZ917GSz7",
          test: false,
          url: "https://www.ticketmaster.com/imagine-dragons-tickets/artist/1435919",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/channel/UCT9zcQNlyht7fRlcjmflRSA",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/Imaginedragons",
              },
            ],
            itunes: [
              {
                url: "https://music.apple.com/us/artist/imagine-dragons/358714030",
              },
            ],
            lastfm: [
              {
                url: "http://www.last.fm/music/Imagine+Dragons",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/ImagineDragons",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Imagine_Dragons",
              },
            ],
            spotify: [
              {
                url: "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q",
              },
            ],
            instagram: [
              {
                url: "http://instagram.com/imaginedragons/",
              },
              {
                url: "http://instagram.com/imaginedragons",
              },
            ],
            musicbrainz: [
              {
                id: "012151a8-0f9a-44c9-997f-ebd68b5389f9",
              },
            ],
            homepage: [
              {
                url: "http://www.imaginedragonsmusic.com/",
              },
            ],
          },
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7nI",
                name: "Undefined",
              },
              subType: {
                id: "KZFzBErXgnZfZ7v7lJ",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 43,
            mfx_nl: 2,
            tmr: 1,
            mfx_de: 7,
            mfx_es: 6,
            ticketmaster: 23,
            mfx_cz: 2,
            _filtered: 0,
            mfx_se: 2,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917GSz7?locale=en-us",
            },
          },
        },
        {
          name: "Macklemore",
          type: "attraction",
          id: "K8vZ917pG-f",
          test: false,
          url: "https://www.ticketmaster.com/macklemore-tickets/artist/2400469",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/user/RyanLewisProductions",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/macklemore",
              },
            ],
            lastfm: [
              {
                url: "https://www.last.fm/music/Macklemore",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Macklemore",
              },
            ],
            musicbrainz: [
              {
                id: "b6d7ec94-830c-44dd-b699-ce66556b7e55",
              },
            ],
            homepage: [
              {
                url: "http://macklemore.com/",
              },
            ],
          },
          images: [
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAv1",
                name: "Hip-Hop/Rap",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vkvl",
                name: "Hip-Hop/Rap",
              },
              type: {
                id: "KZAyXgnZfZ7v7la",
                name: "Individual",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAd7",
                name: "Musician",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 23,
            tmr: 1,
            mfx_no: 2,
            ticketmaster: 20,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917pG-f?locale=en-us",
            },
          },
        },
        {
          name: "Kings Elliot",
          type: "attraction",
          id: "K8vZ917QfR7",
          test: false,
          url: "https://www.ticketmaster.com/kings-elliot-tickets/artist/2872896",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: true,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: true,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7la",
                name: "Individual",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAde",
                name: "Singer/Vocalist",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 22,
            tmr: 1,
            ticketmaster: 21,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917QfR7?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Imagine Dragons: Mercury World Tour",
    type: "event",
    id: "vvG1YZ96xLhNRL",
    test: false,
    url: "https://concerts.livenation.com/imagine-dragons-mercury-world-tour-dallas-texas-09-03-2022/event/0C005C789F6E3BDF",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "2022-04-01T15:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-09-04T02:00:00Z",
      },
      presales: [
        {
          startDateTime: "2022-03-28T15:00:00Z",
          endDateTime: "2022-04-01T03:00:00Z",
          name: "Verizon Up Presale Tickets",
        },
        {
          startDateTime: "2022-03-28T15:00:00Z",
          endDateTime: "2022-04-01T03:00:00Z",
          name: "Official Platinum Presale",
        },
        {
          startDateTime: "2022-03-28T15:00:00Z",
          endDateTime: "2022-04-01T03:00:00Z",
          name: "VIP Packages Presale",
        },
        {
          startDateTime: "2022-03-29T15:00:00Z",
          endDateTime: "2022-04-01T03:00:00Z",
          name: "Artist Presale",
        },
        {
          startDateTime: "2022-03-31T15:00:00Z",
          endDateTime: "2022-04-01T03:00:00Z",
          name: "Live Nation Presale",
        },
        {
          startDateTime: "2022-03-31T15:00:00Z",
          endDateTime: "2022-04-01T03:00:00Z",
          name: "Spotify Presale",
        },
        {
          startDateTime: "2022-03-31T15:00:00Z",
          endDateTime: "2022-04-04T03:00:00Z",
          name: "Season Ticket Holder Presale",
        },
        {
          startDateTime: "2022-05-04T14:00:00Z",
          endDateTime: "2022-05-11T04:59:00Z",
          name: "Concert Week Promotion",
        },
        {
          startDateTime: "2022-05-03T16:00:00Z",
          endDateTime: "2022-05-04T04:59:00Z",
          name: "Rakuten Concert Week Promotion",
        },
        {
          startDateTime: "2022-05-03T12:00:00Z",
          endDateTime: "2022-05-04T04:59:00Z",
          name: "Concert Week Citi® Cardmember Presale",
        },
        {
          startDateTime: "2022-04-01T15:00:00Z",
          endDateTime: "2022-08-28T03:00:00Z",
          name: "VIP Packages Onsale",
        },
        {
          startDateTime: "2022-04-01T15:00:00Z",
          endDateTime: "2022-09-04T02:00:00Z",
          name: "Official Platinum Onsale",
        },
      ],
    },
    dates: {
      start: {
        localDate: "2022-09-03",
        localTime: "19:00:00",
        dateTime: "2022-09-04T00:00:00Z",
        dateTBD: false,
        dateTBA: false,
        timeTBA: false,
        noSpecificTime: false,
      },
      timezone: "America/Chicago",
      status: {
        code: "onsale",
      },
      spanMultipleDays: false,
    },
    classifications: [
      {
        primary: true,
        segment: {
          id: "KZFzniwnSyZfZ7v7nJ",
          name: "Music",
        },
        genre: {
          id: "KnvZfZ7vAeA",
          name: "Rock",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v6F1",
          name: "Pop",
        },
        type: {
          id: "KZAyXgnZfZ7v7nI",
          name: "Undefined",
        },
        subType: {
          id: "KZFzBErXgnZfZ7v7lJ",
          name: "Undefined",
        },
        family: false,
      },
    ],
    promoter: {
      id: "653",
      name: "LIVE NATION MUSIC",
      description: "LIVE NATION MUSIC / NTL / USA",
    },
    promoters: [
      {
        id: "653",
        name: "LIVE NATION MUSIC",
        description: "LIVE NATION MUSIC / NTL / USA",
      },
    ],
    pleaseNote: "Rain or Shine All patrons require a ticket. No PDF's allowed.",
    priceRanges: [
      {
        type: "standard",
        currency: "USD",
        min: 49.5,
        max: 189.5,
      },
    ],
    products: [
      {
        name: "Imagine Dragons - Early Entry Picnic Upgrade (TICKET NOT INCLUDED)",
        id: "vvG1YZ96JX1g5O",
        url: "https://concerts.livenation.com/imagine-dragons-early-entry-picnic-upgrade-dallas-texas-09-03-2022/event/0C005C79BE2B52E0",
        type: "Special Entry",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7v7lv",
              name: "Special Entry",
            },
            family: false,
          },
        ],
      },
      {
        name: "Dos Equis Pavilion VIP Parking: Imagine Dragons",
        id: "vvG1YZ96S76NCD",
        url: "https://concerts.livenation.com/dos-equis-pavilion-vip-parking-imagine-dallas-texas-09-03-2022/event/0C005C7CC41E33BB",
        type: "Parking",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7vAva",
              name: "Parking",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAFe",
              name: "Parking",
            },
            family: false,
          },
        ],
      },
      {
        name: "Dos Equis Pavilion Fast Lane Access: Imagine Dragons",
        id: "vvG1YZ96SAJd89",
        url: "https://concerts.livenation.com/dos-equis-pavilion-fast-lane-access-dallas-texas-09-03-2022/event/0C005C7CC5983417",
        type: "Special Entry",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAFF",
              name: "FastLane Access",
            },
            family: false,
          },
        ],
      },
      {
        name: "Lawn Chair Rental: Imagine Dragons",
        id: "vvG1YZ96SQPKwK",
        url: "https://concerts.livenation.com/lawn-chair-rental-imagine-dragons-dallas-texas-09-03-2022/event/0C005C7CDA953C93",
        type: "Merchandise Voucher",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAF1",
              name: "Lawn Chair Rental",
            },
            family: false,
          },
        ],
      },
      {
        name: "Live Nation Lounge Imagine Dragons",
        id: "vvG1YZ96S_nKc3",
        url: "https://concerts.livenation.com/live-nation-lounge-imagine-dragons-dallas-texas-09-03-2022/event/0C005C7CD9A93B52",
        type: "Club Access",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAFJ",
              name: "VIP Club Access",
            },
            family: false,
          },
        ],
      },
      {
        name: "Lonestar Cabana: Imagine Dragons",
        id: "vvG1YZ96ShzdSl",
        url: "https://concerts.livenation.com/lonestar-cabana-imagine-dragons-dallas-texas-09-03-2022/event/0C005C7CDBE03CEB",
        type: "Club Access",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7v7lF",
              name: "Club Access",
            },
            family: false,
          },
        ],
      },
      {
        name: "Dos Equis Pavilion Ultra VIP Parking: Imagine Dragons",
        id: "vvG1YZ9FoTbfPx",
        url: "https://concerts.livenation.com/dos-equis-pavilion-ultra-vip-parking-dallas-texas-09-03-2022/event/0C005C847F614962",
        type: "Parking",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7vAva",
              name: "Parking",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAFk",
              name: "Premier",
            },
            family: false,
          },
        ],
      },
    ],
    seatmap: {
      staticUrl:
        "https://maps.ticketmaster.com/maps/geometry/3/event/0C005C789F6E3BDF/staticImage?type=png&systemId=HOST",
    },
    accessibility: {
      ticketLimit: 4,
    },
    ticketLimit: {
      info: "There is a six (6) ticket limit for this event.",
    },
    ageRestrictions: {
      legalAgeEnforced: false,
    },
    code: "DAL:EDX0903",
    _links: {
      self: {
        href: "/discovery/v2/events/vvG1YZ96xLhNRL?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917GSz7?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ917QfR7?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/KovZpZAEAFeA?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Dos Equis Pavilion",
          type: "venue",
          id: "KovZpZAEAFeA",
          test: false,
          url: "https://www.ticketmaster.com/dos-equis-pavilion-tickets-dallas/venue/98330",
          locale: "en-us",
          aliases: [
            "smirnoff music center",
            "smirnoff music centre",
            "starplex",
          ],
          images: [
            {
              ratio: "3_1",
              url: "https://s1.ticketm.net/dam/v/a92/3cd78c12-b7f7-4347-a0f1-bf1ac35fea92_627091_SOURCE.jpg",
              width: 1500,
              height: 500,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dbimages/22185v.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
          ],
          postalCode: "75210",
          timezone: "America/Chicago",
          city: {
            name: "Dallas",
          },
          state: {
            name: "Texas",
            stateCode: "TX",
          },
          country: {
            name: "United States Of America",
            countryCode: "US",
          },
          address: {
            line1: "3839 S Fitzhugh",
          },
          location: {
            longitude: "-96.75646586",
            latitude: "32.77507215",
          },
          markets: [
            {
              name: "Dallas - Fort Worth and More",
              id: "5",
            },
          ],
          dmas: [
            {
              id: 212,
            },
            {
              id: 218,
            },
            {
              id: 261,
            },
            {
              id: 326,
            },
            {
              id: 386,
            },
            {
              id: 405,
            },
            {
              id: 415,
            },
          ],
          boxOfficeInfo: {
            phoneNumberDetail: "214-421-1111",
            openHoursDetail:
              "For the safety of our employees and guests, the box office will be closed until further notice. Please keep checking back here for updates as to when we re-open. We appreciate your understanding.",
            acceptedPaymentDetail:
              "Cash, Visa, MasterCard, Discover and American Express",
            willCallDetail:
              "Tickets may be picked up 90 minutes prior to showtime or door time. Tickets must be picked-up by the cardholder with the credit card used to place the order and valid photo I.D.",
          },
          parkingDetail:
            "Parking is only charged if the price is NOT included in the ticket.",
          accessibleSeatingDetail:
            "100 Level : Accessible seating is available on Platforms in the back of sections 100 and 102. 200 Level : Accessible seating is available on Platforms in front of sections 200 and 205. LAWN : Accessible seating is available on Platforms on the front of the lawn behind sections 200 and 205.",
          generalInfo: {
            generalRule:
              "No food, drinks, coolers, lawn chairs, umbrellas allowed. The amphitheatre institutes a No re-entry policy for all events. Gates into the pavilion open ninety minutes prior to the scheduled performance time. Certain shows may restrict all beer and wine sales at that performers request. Note the clock in the concession stand indicates the time that the sale of alcoholic beverages is scheduled to be discontinued. Certain events may also ban blankets for lawn seating. Events go on as scheduled, rain or shine. If it rains on the day of an event, lawn seat patrons are encouraged to bring a blanket or plastic tarp to sit on. Camera Policy: Personal cameras are allowed in the venue. Flash photography, video and removable lens cameras are not permitted without venue approval.",
            childRule:
              "If a child has celebrated their 2nd birthday they must have a ticket. Prices are the same for children as adults.",
          },
          upcomingEvents: {
            _total: 30,
            ticketmaster: 30,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/KovZpZAEAFeA?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Imagine Dragons",
          type: "attraction",
          id: "K8vZ917GSz7",
          test: false,
          url: "https://concerts.livenation.com/imagine-dragons-tickets/artist/1435919",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/channel/UCT9zcQNlyht7fRlcjmflRSA",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/Imaginedragons",
              },
            ],
            itunes: [
              {
                url: "https://music.apple.com/us/artist/imagine-dragons/358714030",
              },
            ],
            lastfm: [
              {
                url: "http://www.last.fm/music/Imagine+Dragons",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/ImagineDragons",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Imagine_Dragons",
              },
            ],
            spotify: [
              {
                url: "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q",
              },
            ],
            instagram: [
              {
                url: "http://instagram.com/imaginedragons/",
              },
              {
                url: "http://instagram.com/imaginedragons",
              },
            ],
            musicbrainz: [
              {
                id: "012151a8-0f9a-44c9-997f-ebd68b5389f9",
              },
            ],
            homepage: [
              {
                url: "http://www.imaginedragonsmusic.com/",
              },
            ],
          },
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7nI",
                name: "Undefined",
              },
              subType: {
                id: "KZFzBErXgnZfZ7v7lJ",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 43,
            mfx_nl: 2,
            tmr: 1,
            mfx_de: 7,
            mfx_es: 6,
            ticketmaster: 23,
            mfx_cz: 2,
            _filtered: 0,
            mfx_se: 2,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917GSz7?locale=en-us",
            },
          },
        },
        {
          name: "Kings Elliot",
          type: "attraction",
          id: "K8vZ917QfR7",
          test: false,
          url: "https://concerts.livenation.com/kings-elliot-tickets/artist/2872896",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: true,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: true,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7la",
                name: "Individual",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAde",
                name: "Singer/Vocalist",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 22,
            tmr: 1,
            ticketmaster: 21,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917QfR7?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Imagine Dragons: Mercury World Tour",
    type: "event",
    id: "vvG1IZ96NvbwQH",
    test: false,
    url: "https://www.ticketmaster.com/imagine-dragons-mercury-world-tour-los-angeles-california-09-15-2022/event/0A005C78C16326BC",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "2022-04-01T17:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-09-16T03:30:00Z",
      },
      presales: [
        {
          startDateTime: "2022-03-28T17:00:00Z",
          endDateTime: "2022-04-01T05:00:00Z",
          name: "Verizon Up Presale Tickets",
        },
        {
          startDateTime: "2022-03-28T17:00:00Z",
          endDateTime: "2022-04-01T05:00:00Z",
          name: "VIP Packages Presale",
        },
        {
          startDateTime: "2022-03-29T17:00:00Z",
          endDateTime: "2022-04-01T05:00:00Z",
          name: "Artist Presale",
        },
        {
          startDateTime: "2022-03-31T17:00:00Z",
          endDateTime: "2022-04-01T05:00:00Z",
          name: "Live Nation Presale",
        },
        {
          startDateTime: "2022-03-31T17:00:00Z",
          endDateTime: "2022-04-01T05:00:00Z",
          name: "Venue Presale",
        },
        {
          startDateTime: "2022-03-31T17:00:00Z",
          endDateTime: "2022-04-01T05:00:00Z",
          name: "Spotify Presale",
        },
        {
          startDateTime: "2022-03-28T17:00:00Z",
          endDateTime: "2022-04-01T05:00:00Z",
          name: "Official Platinum Presale",
        },
        {
          startDateTime: "2022-04-01T17:00:00Z",
          endDateTime: "2022-09-16T01:30:00Z",
          name: "Official Platinum",
        },
        {
          startDateTime: "2022-04-01T17:00:00Z",
          endDateTime: "2022-09-09T05:00:00Z",
          name: "VIP Packages Onsale",
        },
        {
          startDateTime: "2022-05-03T12:00:00Z",
          endDateTime: "2022-05-04T06:59:00Z",
          name: "Concert Week Citi® Cardmember Presale",
        },
        {
          startDateTime: "2022-05-03T16:00:00Z",
          endDateTime: "2022-05-04T06:59:00Z",
          name: "Rakuten Concert Week Promotion",
        },
        {
          startDateTime: "2022-05-04T14:00:00Z",
          endDateTime: "2022-05-11T06:59:00Z",
          name: "Concert Week Promotion",
        },
      ],
    },
    dates: {
      start: {
        localDate: "2022-09-15",
        localTime: "18:30:00",
        dateTime: "2022-09-16T01:30:00Z",
        dateTBD: false,
        dateTBA: false,
        timeTBA: false,
        noSpecificTime: false,
      },
      timezone: "America/Los_Angeles",
      status: {
        code: "onsale",
      },
      spanMultipleDays: false,
    },
    classifications: [
      {
        primary: true,
        segment: {
          id: "KZFzniwnSyZfZ7v7nJ",
          name: "Music",
        },
        genre: {
          id: "KnvZfZ7vAeA",
          name: "Rock",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v6F1",
          name: "Pop",
        },
        type: {
          id: "KZAyXgnZfZ7v7nI",
          name: "Undefined",
        },
        subType: {
          id: "KZFzBErXgnZfZ7v7lJ",
          name: "Undefined",
        },
        family: false,
      },
    ],
    promoter: {
      id: "653",
      name: "LIVE NATION MUSIC",
      description: "LIVE NATION MUSIC / NTL / USA",
    },
    promoters: [
      {
        id: "653",
        name: "LIVE NATION MUSIC",
        description: "LIVE NATION MUSIC / NTL / USA",
      },
    ],
    pleaseNote:
      "Entry requirements are subject to change. By purchasing tickets to this event you agree to abide by entry requirements in effect at the time of the event. Check the venue website leading up to your event for the latest protocols.",
    priceRanges: [
      {
        type: "standard",
        currency: "USD",
        min: 39.5,
        max: 189.5,
      },
    ],
    products: [
      {
        name: "Imagine Dragons - Early Entry Picnic Upgrade (TICKET NOT INCLUDED)",
        id: "vvG1IZ96J09-ya",
        url: "https://www.ticketmaster.com/imagine-dragons-early-entry-picnic-upgrade-los-angeles-california-09-15-2022/event/0A005C79A45E1E49",
        type: "Special Entry",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7v7lv",
              name: "Special Entry",
            },
            family: false,
          },
        ],
      },
      {
        name: "Banc of California Stadium Parking",
        id: "vvG1IZ9FOuU4I9",
        url: "https://www.ticketmaster.com/banc-of-california-stadium-parking-los-angeles-california-09-15-2022/event/0A005C880DD95A17",
        type: "Parking",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7vAva",
              name: "Parking",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAFe",
              name: "Parking",
            },
            family: false,
          },
        ],
      },
    ],
    seatmap: {
      staticUrl:
        "https://maps.ticketmaster.com/maps/geometry/3/event/0A005C78C16326BC/staticImage?type=png&systemId=HOST",
    },
    accessibility: {
      ticketLimit: 6,
    },
    ticketLimit: {
      info: "There is a six (6) ticket limit for this event.",
    },
    ageRestrictions: {
      legalAgeEnforced: false,
    },
    code: "WES:EBOC0915",
    _links: {
      self: {
        href: "/discovery/v2/events/vvG1IZ96NvbwQH?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917GSz7?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ917pG-f?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ917QfR7?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/KovZ917A3c0?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Banc of California Stadium",
          type: "venue",
          id: "KovZ917A3c0",
          test: false,
          url: "https://www.ticketmaster.com/banc-of-california-stadium-tickets-los-angeles/venue/82799",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dbimages/21644v.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
          ],
          postalCode: "90037",
          timezone: "America/Los_Angeles",
          city: {
            name: "Los Angeles",
          },
          state: {
            name: "California",
            stateCode: "CA",
          },
          country: {
            name: "United States Of America",
            countryCode: "US",
          },
          address: {
            line1: "3939 S. Figueroa St",
          },
          location: {
            longitude: "-118.284926",
            latitude: "34.012879",
          },
          markets: [
            {
              name: "Los Angeles",
              id: "27",
            },
          ],
          dmas: [
            {
              id: 223,
            },
            {
              id: 324,
            },
            {
              id: 354,
            },
            {
              id: 383,
            },
          ],
          boxOfficeInfo: {
            phoneNumberDetail: "(213) 519-9900",
            openHoursDetail:
              "Monday - Friday, 10:00 am - 6:00 pm. Hours are extended to accommodate the needs of specific events.",
            acceptedPaymentDetail:
              "All major credit cards are accepted, including Visa, MasterCard, Discover and American Express. Cash is also accepted. Contactless payment including Apple Pay, Android Pay, and Samsung pay are accepted at all points of sale and encouraged. You can also pay by loading your credit card into your digital wallet.",
            willCallDetail:
              "Will Call is located at the Box Office off the Northwest Plaza on Christmas Tree Lane. Hours of operation are 10am-6pm Monday through Friday and 10am until halftime on match days.",
          },
          parkingDetail:
            "Parking at Expo Park is limited; plan to arrive early. Parking at Expo Park is $35 day of event.",
          accessibleSeatingDetail:
            "Banc of California Stadium is committed to providing an enjoyable experience for all guests in attendance at each event, including guests with disabilities. The venue has been designed and built to meet or exceed the requirements of the Americans with Disabilities Act (ADA). Banc of California Stadium staff will assist you with any specific accommodations you have before, during, and after an event. Services include: Wheelchair escorts & storage, Assisted Listening Devices, Captioning Services & Devices, and Interpretation Services (requires at least 2-week lead time)",
          generalInfo: {
            generalRule:
              "We aim to provide an enjoyable, yet exciting environment for ALL fans attending games. In order to achieve that, the following are prohibited: - Abusive, foul or disruptive language or clothing- Alcohol and illegal drugs- All bags, including clear bags, backpacks, and purses, that are larger than 12” x 6” x 12”- Animals (with the exception of service animals)- Any type of marketing collateral such as pamphlets, product samples, etc.- Balloons, beach balls, frisbees, markers, brooms, skateboards, roller blades, skates, etc.- Clothing containing wires, batteries, or other electronic components- Coolers, outside food, beverages (with the exception of a single factory sealed plastic water bottle no more than 20oz), cans, flasks, bottles, etc. (F&B needed for infants or medical reason will be permitted with approval)- Drums & Drumsticks- Explosives, pepper spray, tear gas, etc.- Flags larger than 3’ x 4’, Flag/banner poles - Folding/beach chairs- Items containing adhesive ie. Stickers, Decals, etc.- Laptops & tablets- Loud noise-making devices such as air horns, plastic horns, vuvuzelas, whistles, megaphones, etc.- Objects that can be thrown or viewed as projectiles- Professional camera equipment, tripods, GoPros, etc. - Selfie Sticks- Smoking of any kind including E-cigarettes & Vaporizers- Streamers, Confetti, Register tape, etc.- Umbrellas- Unmanned and Remote-Controlled Aircraft Systems- Water guns, toy/replica weapons, squirt bottles, etc.- Weapons of any kind, fireworks, slingshots, smoke/stink bombs, laser pointers, etc.- 2-way radio devices- At the discretion of Banc of California Stadium Management, any other item determined to be prohibited. - Any attempt to bring alcohol into the Stadium will be considered a violation of the Code of Conduct and may result in an ejection or refusal of entry, arrested, or tickets being revoked. All persons and/or their belongings are subject to search. Violators of the rules of any State or City laws will be refused admission, asked to leave, or ejected from Stadium property. Banc of California Stadium cannot safeguard items which are not permitted to be brought into the stadium. Please keep in mind that permitted or prohibited items may vary depending on the event. Banc of California Stadium management will communicate any deviations from the standard house policy as necessary.",
            childRule:
              "Children two and under will be admitted free but will be required to sit on a ticket holders lap. Children who have had their third birthday, or who require their own seat will require a ticket.",
          },
          upcomingEvents: {
            _total: 25,
            ticketmaster: 25,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/KovZ917A3c0?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Imagine Dragons",
          type: "attraction",
          id: "K8vZ917GSz7",
          test: false,
          url: "https://www.ticketmaster.com/imagine-dragons-tickets/artist/1435919",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/channel/UCT9zcQNlyht7fRlcjmflRSA",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/Imaginedragons",
              },
            ],
            itunes: [
              {
                url: "https://music.apple.com/us/artist/imagine-dragons/358714030",
              },
            ],
            lastfm: [
              {
                url: "http://www.last.fm/music/Imagine+Dragons",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/ImagineDragons",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Imagine_Dragons",
              },
            ],
            spotify: [
              {
                url: "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q",
              },
            ],
            instagram: [
              {
                url: "http://instagram.com/imaginedragons/",
              },
              {
                url: "http://instagram.com/imaginedragons",
              },
            ],
            musicbrainz: [
              {
                id: "012151a8-0f9a-44c9-997f-ebd68b5389f9",
              },
            ],
            homepage: [
              {
                url: "http://www.imaginedragonsmusic.com/",
              },
            ],
          },
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7nI",
                name: "Undefined",
              },
              subType: {
                id: "KZFzBErXgnZfZ7v7lJ",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 43,
            mfx_nl: 2,
            tmr: 1,
            mfx_de: 7,
            mfx_es: 6,
            ticketmaster: 23,
            mfx_cz: 2,
            _filtered: 0,
            mfx_se: 2,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917GSz7?locale=en-us",
            },
          },
        },
        {
          name: "Macklemore",
          type: "attraction",
          id: "K8vZ917pG-f",
          test: false,
          url: "https://www.ticketmaster.com/macklemore-tickets/artist/2400469",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/user/RyanLewisProductions",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/macklemore",
              },
            ],
            lastfm: [
              {
                url: "https://www.last.fm/music/Macklemore",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Macklemore",
              },
            ],
            musicbrainz: [
              {
                id: "b6d7ec94-830c-44dd-b699-ce66556b7e55",
              },
            ],
            homepage: [
              {
                url: "http://macklemore.com/",
              },
            ],
          },
          images: [
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAv1",
                name: "Hip-Hop/Rap",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vkvl",
                name: "Hip-Hop/Rap",
              },
              type: {
                id: "KZAyXgnZfZ7v7la",
                name: "Individual",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAd7",
                name: "Musician",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 23,
            tmr: 1,
            mfx_no: 2,
            ticketmaster: 20,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917pG-f?locale=en-us",
            },
          },
        },
        {
          name: "Kings Elliot",
          type: "attraction",
          id: "K8vZ917QfR7",
          test: false,
          url: "https://www.ticketmaster.com/kings-elliot-tickets/artist/2872896",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: true,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: true,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7la",
                name: "Individual",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAde",
                name: "Singer/Vocalist",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 22,
            tmr: 1,
            ticketmaster: 21,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917QfR7?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Imagine Dragons: Mercury World Tour",
    type: "event",
    id: "vvG18Z96bALVaK",
    test: false,
    url: "https://concerts.livenation.com/imagine-dragons-mercury-world-tour-tinley-park-illinois-08-26-2022/event/04005C76057F4253",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "2022-04-01T15:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-08-27T01:30:00Z",
      },
      presales: [
        {
          startDateTime: "2022-03-31T15:00:00Z",
          endDateTime: "2022-04-01T03:00:00Z",
          name: "Live Nation Presale",
        },
        {
          startDateTime: "2022-03-31T15:00:00Z",
          endDateTime: "2022-04-01T03:00:00Z",
          name: "Spotify Presale",
        },
        {
          startDateTime: "2022-03-31T15:00:00Z",
          endDateTime: "2022-04-01T03:00:00Z",
          name: "Radio Presale",
        },
        {
          startDateTime: "2022-03-29T15:00:00Z",
          endDateTime: "2022-04-01T03:00:00Z",
          name: "Artist Presale",
        },
        {
          startDateTime: "2022-03-28T15:00:00Z",
          endDateTime: "2022-04-01T03:00:00Z",
          name: "Verizon Up Presale Tickets",
        },
        {
          startDateTime: "2022-03-28T15:00:00Z",
          endDateTime: "2022-04-01T03:00:00Z",
          name: "VIP Packages Presale",
        },
        {
          startDateTime: "2022-04-01T15:00:00Z",
          endDateTime: "2022-08-20T03:00:00Z",
          name: "VIP Packages Onsale",
        },
        {
          startDateTime: "2022-05-03T12:00:00Z",
          endDateTime: "2022-05-04T04:59:00Z",
          name: "Concert Week Citi® Cardmember Presale",
        },
        {
          startDateTime: "2022-03-28T15:00:00Z",
          endDateTime: "2022-04-01T03:00:00Z",
          name: "Official Platinum Presale",
        },
        {
          startDateTime: "2022-04-01T15:00:00Z",
          endDateTime: "2022-08-27T01:30:00Z",
          name: "Official Platinum Onsale",
        },
        {
          startDateTime: "2022-05-04T14:00:00Z",
          endDateTime: "2022-05-11T04:59:00Z",
          name: "Concert Week Promotion",
        },
        {
          startDateTime: "2022-05-03T16:00:00Z",
          endDateTime: "2022-05-04T04:59:00Z",
          name: "Rakuten Concert Week Promotion",
        },
      ],
    },
    dates: {
      start: {
        localDate: "2022-08-26",
        localTime: "18:30:00",
        dateTime: "2022-08-26T23:30:00Z",
        dateTBD: false,
        dateTBA: false,
        timeTBA: false,
        noSpecificTime: false,
      },
      timezone: "America/Chicago",
      status: {
        code: "onsale",
      },
      spanMultipleDays: false,
    },
    classifications: [
      {
        primary: true,
        segment: {
          id: "KZFzniwnSyZfZ7v7nJ",
          name: "Music",
        },
        genre: {
          id: "KnvZfZ7vAeA",
          name: "Rock",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v6F1",
          name: "Pop",
        },
        type: {
          id: "KZAyXgnZfZ7v7nI",
          name: "Undefined",
        },
        subType: {
          id: "KZFzBErXgnZfZ7v7lJ",
          name: "Undefined",
        },
        family: false,
      },
    ],
    promoter: {
      id: "653",
      name: "LIVE NATION MUSIC",
      description: "LIVE NATION MUSIC / NTL / USA",
    },
    promoters: [
      {
        id: "653",
        name: "LIVE NATION MUSIC",
        description: "LIVE NATION MUSIC / NTL / USA",
      },
    ],
    priceRanges: [
      {
        type: "standard",
        currency: "USD",
        min: 49.5,
        max: 210.5,
      },
    ],
    products: [
      {
        name: "Imagine Dragons - Early Entry Picnic Upgrade (TICKET NOT INCLUDED)",
        id: "vvG18Z96JWswVM",
        url: "https://concerts.livenation.com/imagine-dragons-early-entry-picnic-upgrade-tinley-park-illinois-08-26-2022/event/04005C79BDC72D37",
        type: "Special Entry",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7v7lv",
              name: "Special Entry",
            },
            family: false,
          },
        ],
      },
      {
        name: "Fast Lane Access: IMAGINE DRAGONS (Not a Concert Ticket)",
        id: "vvG18Z96j43SoV",
        url: "https://concerts.livenation.com/fast-lane-access-imagine-dragons-not-tinley-park-illinois-08-26-2022/event/04005C77154B3474",
        type: "Special Entry",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAFF",
              name: "FastLane Access",
            },
            family: false,
          },
        ],
      },
      {
        name: "Stage Left Lounge: IMAGINE DRAGONS (Not a Concert Ticket)",
        id: "vvG18Z96j4UK37",
        url: "https://concerts.livenation.com/stage-left-lounge-imagine-dragons-not-tinley-park-illinois-08-26-2022/event/04005C7715D93484",
        type: "Club Access",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7v7lF",
              name: "Club Access",
            },
            family: false,
          },
        ],
      },
      {
        name: "Premier Parking: IMAGINE DRAGONS (Not a Concert Ticket)",
        id: "vvG18Z96j9cS3X",
        url: "https://concerts.livenation.com/premier-parking-imagine-dragons-not-a-tinley-park-illinois-08-26-2022/event/04005C7717B734BE",
        type: "Parking",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7vAva",
              name: "Parking",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAFk",
              name: "Premier",
            },
            family: false,
          },
        ],
      },
      {
        name: "Premium Reserved Parking: IMAGINE DRAGONS (Not a Concert Ticket)",
        id: "vvG18Z96jb2dKF",
        url: "https://concerts.livenation.com/premium-reserved-parking-imagine-dragons-not-tinley-park-illinois-08-26-2022/event/04005C77183C34C8",
        type: "Parking",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7vAva",
              name: "Parking",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAFk",
              name: "Premier",
            },
            family: false,
          },
        ],
      },
      {
        name: "Lawn Chair Rental: IMAGINE DRAGONS (Not a Concert Ticket)",
        id: "vvG18Z96jbSSK4",
        url: "https://concerts.livenation.com/lawn-chair-rental-imagine-dragons-not-tinley-park-illinois-08-26-2022/event/04005C7718CF34D5",
        type: "Merchandise Voucher",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAF1",
              name: "Lawn Chair Rental",
            },
            family: false,
          },
        ],
      },
      {
        name: "VIP Club: IMAGINE DRAGONS (Not a Concert Ticket)",
        id: "vvG18Z96jpxN3-",
        url: "https://concerts.livenation.com/vip-club-imagine-dragons-not-a-tinley-park-illinois-08-26-2022/event/04005C77168A34A1",
        type: "Club Access",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAFJ",
              name: "VIP Club Access",
            },
            family: false,
          },
        ],
      },
      {
        name: "EZ Out Parking - IMAGINE DRAGON - Not a Concert Ticket",
        id: "vvG18Z9aSNU7W5",
        url: "https://concerts.livenation.com/ez-out-parking-imagine-dragon-not-tinley-park-illinois-08-26-2022/event/04005C9CE3D84F4B",
        type: "Parking",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7vAva",
              name: "Parking",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAFe",
              name: "Parking",
            },
            family: false,
          },
        ],
      },
    ],
    seatmap: {
      staticUrl:
        "https://maps.ticketmaster.com/maps/geometry/3/event/04005C76057F4253/staticImage?type=png&systemId=HOST",
    },
    accessibility: {
      ticketLimit: 20,
    },
    ticketLimit: {
      info: "There is an overall 6 ticket limit for this event.",
    },
    ageRestrictions: {
      legalAgeEnforced: false,
    },
    code: "CH1:EHA0826",
    _links: {
      self: {
        href: "/discovery/v2/events/vvG18Z96bALVaK?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917GSz7?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ917pG-f?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ917QfR7?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/KovZpZAEktFA?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Hollywood Casino Amphitheatre - Chicago, IL",
          type: "venue",
          id: "KovZpZAEktFA",
          test: false,
          url: "https://www.ticketmaster.com/hollywood-casino-amphitheatre-chicago-il-tickets-tinley-park/venue/32837",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dbimages/22233v.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
          ],
          postalCode: "60477",
          timezone: "America/Chicago",
          city: {
            name: "Tinley Park",
          },
          state: {
            name: "Illinois",
            stateCode: "IL",
          },
          country: {
            name: "United States Of America",
            countryCode: "US",
          },
          address: {
            line1: "19100 S Ridgeland",
            line2: "Po Box 189",
          },
          location: {
            longitude: "-87.7711753",
            latitude: "41.5426094",
          },
          markets: [
            {
              name: "Chicagoland and Northern Il",
              id: "3",
            },
          ],
          dmas: [
            {
              id: 249,
            },
            {
              id: 373,
            },
          ],
          social: {
            twitter: {
              handle: "@HollywoodAmpChi",
            },
          },
          boxOfficeInfo: {
            phoneNumberDetail:
              "Box Office: (708) 614-1616 Season Tickets: (866) 847-8499",
            openHoursDetail:
              "For the safety of our employees and guests, the box office will be closed until further notice. Please keep checking back here for updates as to when we re-open. We appreciate your understanding.",
            acceptedPaymentDetail:
              "The Box Office accepts Visa, Mastercard, American Express, Discover, and cash.",
            willCallDetail:
              "Will Call tickets purchased through Ticketmaster.com and LiveNation.com are available for pick-up during normal box office hours, both in advance and on the day of the show. BAND TICKETS / FAN CLUB TICKETS: These tickets are not available for pickup prior to the actual date of each event! Please be sure to bring your order confirmation number when picking up your tickets at the box office. You must present a photo ID which matches the Will Call name on your order to receive your tickets. TICKETS MAY NOT BE DROPPED OFF OR LEFT FOR OTHER GUESTS.",
          },
          parkingDetail:
            "Premier Parking: Premier Parking is located close to the front gates and is held until show time. Look for our Premier Parking signs or ask a parking attendant when you arrive at the venue. We'll be more than happy to point you in the right direction! Premier Parking prices start at $29. Limo & Oversized Vehicle Parking: Taking a limo, bus, or RV to the show? We've got room for you too! Limo Parking is available for an additional charge of $20.00.* Oversized Vehicle Parking (Buses, RVs, Tractor Trailers, etc.) is available for an additional charge of $50.00.* All Parking Passes can be purchased in advance online, at the box office, and on the day of the show in our parking lots (subject to availability.) *Subject to change based on event",
          accessibleSeatingDetail:
            "Hollywood Casino Amphitheatre is fully accessible for guests who need special seating arrangements. Accessible seating may be purchased through Ticketmaster any time after the show goes on sale (subject to availability.) Please inform the representative that you require accessible seating at time of purchase.",
          generalInfo: {
            generalRule:
              "SUBJECT TO CHANGE BASED ON EVENTS Items PERMITTED in this venue include: - Snack food in clear plastic gallon-size bag or 6-pack size soft sided cooler. - Factory sealed water up to a gallon in size - Low profile beach chair (no taller than 9” off the ground.) - Backpacks (subject to change based on event.) - Diaper bags when a child is present. Items NOT PERMITTED in this venue include: - Weapons - Alcohol - Drugs - Lawn chairs over 9” from the ground - Umbrellas - Laser pointers - Skates - Wallet chains - Ice chests - Banners - Flyers - Beach balls - Frisbees - Fireworks - Outside food or beverage (except as noted above) - Video and audio recording devices (unless otherwise noted) Camera Policy: - Personal cameras ARE allowed in the venue. - Flash photography, video and removable lens cameras ARE NOT permitted without venue approval. **PLEASE NOTE: These guidelines are subject to change and are at the discretion of management.**",
            childRule:
              "There are no age restrictions. Children under 2 are admitted free, but must sit on a parents lap. Parents are encouraged to use reasonable discretion as some concerts may not be suitable for children.",
          },
          upcomingEvents: {
            _total: 35,
            ticketmaster: 35,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/KovZpZAEktFA?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Imagine Dragons",
          type: "attraction",
          id: "K8vZ917GSz7",
          test: false,
          url: "https://concerts.livenation.com/imagine-dragons-tickets/artist/1435919",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/channel/UCT9zcQNlyht7fRlcjmflRSA",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/Imaginedragons",
              },
            ],
            itunes: [
              {
                url: "https://music.apple.com/us/artist/imagine-dragons/358714030",
              },
            ],
            lastfm: [
              {
                url: "http://www.last.fm/music/Imagine+Dragons",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/ImagineDragons",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Imagine_Dragons",
              },
            ],
            spotify: [
              {
                url: "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q",
              },
            ],
            instagram: [
              {
                url: "http://instagram.com/imaginedragons/",
              },
              {
                url: "http://instagram.com/imaginedragons",
              },
            ],
            musicbrainz: [
              {
                id: "012151a8-0f9a-44c9-997f-ebd68b5389f9",
              },
            ],
            homepage: [
              {
                url: "http://www.imaginedragonsmusic.com/",
              },
            ],
          },
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7nI",
                name: "Undefined",
              },
              subType: {
                id: "KZFzBErXgnZfZ7v7lJ",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 43,
            mfx_nl: 2,
            tmr: 1,
            mfx_de: 7,
            mfx_es: 6,
            ticketmaster: 23,
            mfx_cz: 2,
            _filtered: 0,
            mfx_se: 2,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917GSz7?locale=en-us",
            },
          },
        },
        {
          name: "Macklemore",
          type: "attraction",
          id: "K8vZ917pG-f",
          test: false,
          url: "https://concerts.livenation.com/macklemore-tickets/artist/2400469",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/user/RyanLewisProductions",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/macklemore",
              },
            ],
            lastfm: [
              {
                url: "https://www.last.fm/music/Macklemore",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Macklemore",
              },
            ],
            musicbrainz: [
              {
                id: "b6d7ec94-830c-44dd-b699-ce66556b7e55",
              },
            ],
            homepage: [
              {
                url: "http://macklemore.com/",
              },
            ],
          },
          images: [
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAv1",
                name: "Hip-Hop/Rap",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vkvl",
                name: "Hip-Hop/Rap",
              },
              type: {
                id: "KZAyXgnZfZ7v7la",
                name: "Individual",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAd7",
                name: "Musician",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 23,
            tmr: 1,
            mfx_no: 2,
            ticketmaster: 20,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917pG-f?locale=en-us",
            },
          },
        },
        {
          name: "Kings Elliot",
          type: "attraction",
          id: "K8vZ917QfR7",
          test: false,
          url: "https://concerts.livenation.com/kings-elliot-tickets/artist/2872896",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: true,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: true,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7la",
                name: "Individual",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAde",
                name: "Singer/Vocalist",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 22,
            tmr: 1,
            ticketmaster: 21,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917QfR7?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Imagine Dragons: Mercury World Tour",
    type: "event",
    id: "G5vYZ96pBVNWc",
    test: false,
    url: "https://concerts.livenation.com/imagine-dragons-mercury-world-tour-mountain-view-california-09-08-2022/event/1C005C75BAD23F6D",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "2022-04-01T17:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-09-09T03:30:00Z",
      },
      presales: [
        {
          startDateTime: "2022-03-31T17:00:00Z",
          endDateTime: "2022-04-01T05:00:00Z",
          name: "Live Nation Presale",
        },
        {
          startDateTime: "2022-05-03T12:00:00Z",
          endDateTime: "2022-05-04T06:59:00Z",
          name: "Concert Week Citi® Cardmember Presale",
        },
        {
          startDateTime: "2022-05-04T14:00:00Z",
          endDateTime: "2022-05-11T06:59:00Z",
          name: "Concert Week Promotion",
        },
        {
          startDateTime: "2022-05-03T16:00:00Z",
          endDateTime: "2022-05-04T06:59:00Z",
          name: "Rakuten Concert Week Promotion",
        },
        {
          startDateTime: "2022-03-28T17:00:00Z",
          endDateTime: "2022-04-01T05:00:00Z",
          name: "Official Platinum Presale",
        },
        {
          startDateTime: "2022-04-01T17:00:00Z",
          endDateTime: "2022-09-09T03:30:00Z",
          name: "Official Platinum",
        },
        {
          startDateTime: "2022-03-28T17:00:00Z",
          endDateTime: "2022-04-01T05:00:00Z",
          name: "Verizon Up Presale Tickets",
        },
        {
          startDateTime: "2022-03-31T17:00:00Z",
          endDateTime: "2022-04-01T05:00:00Z",
          name: "Season Ticket Holder Offer",
        },
        {
          startDateTime: "2022-03-28T17:00:00Z",
          endDateTime: "2022-04-01T05:00:00Z",
          name: "VIP Packages Presale",
        },
        {
          startDateTime: "2022-04-01T17:00:00Z",
          endDateTime: "2022-09-02T05:00:00Z",
          name: "VIP Packages Onsale",
        },
        {
          startDateTime: "2022-03-29T17:00:00Z",
          endDateTime: "2022-04-01T05:00:00Z",
          name: "Artist Presale",
        },
        {
          startDateTime: "2022-03-31T17:00:00Z",
          endDateTime: "2022-04-01T05:00:00Z",
          name: "Spotify Presale",
        },
      ],
    },
    dates: {
      start: {
        localDate: "2022-09-08",
        localTime: "18:30:00",
        dateTime: "2022-09-09T01:30:00Z",
        dateTBD: false,
        dateTBA: false,
        timeTBA: false,
        noSpecificTime: false,
      },
      timezone: "America/Los_Angeles",
      status: {
        code: "onsale",
      },
      spanMultipleDays: false,
    },
    classifications: [
      {
        primary: true,
        segment: {
          id: "KZFzniwnSyZfZ7v7nJ",
          name: "Music",
        },
        genre: {
          id: "KnvZfZ7vAeA",
          name: "Rock",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v6F1",
          name: "Pop",
        },
        type: {
          id: "KZAyXgnZfZ7v7nI",
          name: "Undefined",
        },
        subType: {
          id: "KZFzBErXgnZfZ7v7lJ",
          name: "Undefined",
        },
        family: false,
      },
    ],
    promoter: {
      id: "653",
      name: "LIVE NATION MUSIC",
      description: "LIVE NATION MUSIC / NTL / USA",
    },
    promoters: [
      {
        id: "653",
        name: "LIVE NATION MUSIC",
        description: "LIVE NATION MUSIC / NTL / USA",
      },
    ],
    priceRanges: [
      {
        type: "standard",
        currency: "USD",
        min: 49.5,
        max: 189.5,
      },
    ],
    products: [
      {
        name: "Imagine Dragons - Early Entry Picnic Upgrade (TICKET NOT INCLUDED)",
        id: "G5vYZ96Jx8PsM",
        url: "https://concerts.livenation.com/imagine-dragons-early-entry-picnic-upgrade-mountain-view-california-09-08-2022/event/1C005C79A2425C77",
        type: "Special Entry",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7v7lv",
              name: "Special Entry",
            },
            family: false,
          },
        ],
      },
      {
        name: "Premier Parking: Imagine Dragons",
        id: "G5vYZ96pS0SJ1",
        url: "https://concerts.livenation.com/premier-parking-imagine-dragons-mountain-view-california-09-08-2022/event/1C005C75B393398A",
        type: "Parking",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7vAva",
              name: "Parking",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAFk",
              name: "Premier",
            },
            family: false,
          },
        ],
      },
      {
        name: "Lawn Chair Rental - Not a Concert Ticket - Imagine Dragons",
        id: "G5vYZ96pVRdId",
        url: "https://concerts.livenation.com/lawn-chair-rental-not-a-concert-mountain-view-california-09-08-2022/event/1C005C75B4BC3A03",
        type: "Merchandise Voucher",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAF1",
              name: "Lawn Chair Rental",
            },
            family: false,
          },
        ],
      },
      {
        name: "The Hideaway: Imagine Dragons",
        id: "G5vYZ96ps5Sx3",
        url: "https://concerts.livenation.com/the-hideaway-imagine-dragons-mountain-view-california-09-08-2022/event/1C005C75B12F3892",
        type: "Upsell",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7v7lF",
              name: "Club Access",
            },
            family: false,
          },
        ],
      },
      {
        name: "Fast Lane: Imagine Dragons",
        id: "G5vYZ96pw7NND",
        url: "https://concerts.livenation.com/fast-lane-imagine-dragons-mountain-view-california-09-08-2022/event/1C005C75B21238FB",
        type: "Special Entry",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAFF",
              name: "FastLane Access",
            },
            family: false,
          },
        ],
      },
      {
        name: "VIP Terrace: Imagine Dragons",
        id: "G5vYZ96pwONPv",
        url: "https://concerts.livenation.com/vip-terrace-imagine-dragons-mountain-view-california-09-08-2022/event/1C005C75B2823941",
        type: "Club Access",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7v7lF",
              name: "Club Access",
            },
            family: false,
          },
        ],
      },
    ],
    seatmap: {
      staticUrl:
        "https://maps.ticketmaster.com/maps/geometry/3/event/1C005C75BAD23F6D/staticImage?type=png&systemId=HOST",
    },
    accessibility: {
      ticketLimit: 4,
    },
    ticketLimit: {
      info: "There is an overall 6 ticket limit for this event.",
    },
    ageRestrictions: {
      legalAgeEnforced: false,
    },
    code: "NCA:ESH0908",
    _links: {
      self: {
        href: "/discovery/v2/events/G5vYZ96pBVNWc?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917GSz7?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ917pG-f?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ917QfR7?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/KovZpZA6ta1A?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Shoreline Amphitheatre",
          type: "venue",
          id: "KovZpZA6ta1A",
          test: false,
          url: "https://www.ticketmaster.com/shoreline-amphitheatre-tickets-mountain-view/venue/229414",
          locale: "en-us",
          aliases: [
            "shoreline amp",
            "shoreline amphitheatre",
            "shoreline amphitheater",
            "shoreline ampitheater",
          ],
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dbimages/21935v.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "3_1",
              url: "https://s1.ticketm.net/dam/v/fd2/3d90c4c2-b262-4295-b3f8-aadecc752fd2_379141_SOURCE.jpg",
              width: 1500,
              height: 500,
              fallback: false,
            },
          ],
          postalCode: "94043",
          timezone: "America/Los_Angeles",
          city: {
            name: "Mountain View",
          },
          state: {
            name: "California",
            stateCode: "CA",
          },
          country: {
            name: "United States Of America",
            countryCode: "US",
          },
          address: {
            line1: "One Amphitheatre Parkway",
          },
          location: {
            longitude: "-122.080722",
            latitude: "37.426718",
          },
          markets: [
            {
              name: "N. California/N. Nevada",
              id: "41",
            },
          ],
          dmas: [
            {
              id: 250,
            },
            {
              id: 273,
            },
            {
              id: 282,
            },
            {
              id: 341,
            },
            {
              id: 368,
            },
            {
              id: 374,
            },
            {
              id: 382,
            },
          ],
          boxOfficeInfo: {
            phoneNumberDetail: "Box Office: 650-967-4040 Office: 650-967-3000",
            openHoursDetail:
              "For the safety of our employees and guests, the box office will be closed until further notice. Please keep checking back here for updates as to when we re-open. We appreciate your understanding.",
            acceptedPaymentDetail:
              "The Shoreline Box Office accepts CASH, VISA, MASTERCARD, DISCOVER and AMEX but NO CHECKS.",
          },
          parkingDetail:
            "General Parking is included in the ticket price for most events at Shoreline Amphitheatre. When it is not included, there will be a fee per car. Premier Parking is available for purchase for most concerts, prices may vary. Your Premier Parking space will be in a paved lot closest to the Amphitheatre entrance. Your Premier Parking space is reserved in the Premier Parking Lot until show time. DIRECTIONS TO THE PREMIER PARKING LOT: From HWY 101, take Amphitheatre Pkwy (from the South) or Rengstorff Blvd (from the North) Exit. Follow the signs along Amphitheatre Pkwy to the Premier Parking Lot.",
          accessibleSeatingDetail:
            "Shoreline Amphitheatre and all on-site amenities are 100% wheelchair accessible. Accessible parking spaces are available in the front lots.",
          generalInfo: {
            generalRule:
              "All shows go on RAIN OR SHINE. By city ordinance, the following are restricted at Shoreline Amphitheatre: - Smoking is not permitted at Shoreline Amphitheatre. - Alcoholic beverages, barbeques, and tailgating are not permitted in the parking lots. This is strictly enforced by the Shoreline Amphitheatre and Mountain View Police Department. GENERAL POLICIES: The general policies listed below are subject to change on an event-by-event basis. It is STRONGLY suggested that you call the Shoreline Business Office at 650-967-3000 on the day of the show you are attending to get the specific rules for that event. Permitted Items include: - Bags and backpacks - subject to search - Factory sealed water bottles up to one gallon in size - Low back lawn chairs (with rounded legs no higher than 9 inches off the ground) - Small blankets - Sealed water bottles For a more detailed list of permitted and non-permitted items, please visit: https://www.livenation.com/venuesecurity/ CHAIR & BLANKET POLICY- the following are permitted for most shows: - Blankets/towels no larger than 4’x4’ Chairs: Only beach/sand type chairs are allowed. The chair should have a rounded frame with no pad or pointed footings. The height can be no taller than 34 inches with the back legs measuring 6 inches and the front legs 12 inches high. FOOD & BEVERAGE POLICY- the following are permitted for most shows: - Food provided it fits in a clear plastic bag, no larger than 1 gallon in size. One bag per guest. - One factory sealed plastic bottle, 20 oz or smaller, containing a non-alcoholic beverage (not frozen) per guest. CAMERA/VIDEO POLICY: In general, small digital and disposable cameras are allowed in the venue for most shows. Video recorders, flash photography, removable lens cameras, and iPads/Kindles/E-Readers/GoPros are NOT permitted. The venue has the right to restrict ALL CAMERAS, at any time, without prior warning. The following items are NOT permitted: - Glass containers, cans, alcoholic beverages - Coolers, backpacks or oversized bags/purses - Audio or video recording equipment - Professional cameras, including iPads/Kindles/E-Readers/GoPros - Large lawn chairs - Umbrellas, Pets, Stickers, Skateboards, Aerosol Cans, Tables, Barbecues - Laser pointers, wallet chains, knives or weapons **ALL POLICIES ABOVE ARE SUBJECT TO CHANGE ON AN EVENT-BY-EVENT BASIS** The venue has the right to restrict any items at any time without prior warning. It is STRONGLY suggested that you call the Shoreline Business Office at 650-967-3000 on the day of the show you are attending to get the specific policies for that event.",
            childRule: "Children ages 35 months & under are admitted free.",
          },
          upcomingEvents: {
            _total: 39,
            ticketmaster: 39,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/KovZpZA6ta1A?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Imagine Dragons",
          type: "attraction",
          id: "K8vZ917GSz7",
          test: false,
          url: "https://concerts.livenation.com/imagine-dragons-tickets/artist/1435919",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/channel/UCT9zcQNlyht7fRlcjmflRSA",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/Imaginedragons",
              },
            ],
            itunes: [
              {
                url: "https://music.apple.com/us/artist/imagine-dragons/358714030",
              },
            ],
            lastfm: [
              {
                url: "http://www.last.fm/music/Imagine+Dragons",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/ImagineDragons",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Imagine_Dragons",
              },
            ],
            spotify: [
              {
                url: "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q",
              },
            ],
            instagram: [
              {
                url: "http://instagram.com/imaginedragons/",
              },
              {
                url: "http://instagram.com/imaginedragons",
              },
            ],
            musicbrainz: [
              {
                id: "012151a8-0f9a-44c9-997f-ebd68b5389f9",
              },
            ],
            homepage: [
              {
                url: "http://www.imaginedragonsmusic.com/",
              },
            ],
          },
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7nI",
                name: "Undefined",
              },
              subType: {
                id: "KZFzBErXgnZfZ7v7lJ",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 43,
            mfx_nl: 2,
            tmr: 1,
            mfx_de: 7,
            mfx_es: 6,
            ticketmaster: 23,
            mfx_cz: 2,
            _filtered: 0,
            mfx_se: 2,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917GSz7?locale=en-us",
            },
          },
        },
        {
          name: "Macklemore",
          type: "attraction",
          id: "K8vZ917pG-f",
          test: false,
          url: "https://concerts.livenation.com/macklemore-tickets/artist/2400469",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/user/RyanLewisProductions",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/macklemore",
              },
            ],
            lastfm: [
              {
                url: "https://www.last.fm/music/Macklemore",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Macklemore",
              },
            ],
            musicbrainz: [
              {
                id: "b6d7ec94-830c-44dd-b699-ce66556b7e55",
              },
            ],
            homepage: [
              {
                url: "http://macklemore.com/",
              },
            ],
          },
          images: [
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAv1",
                name: "Hip-Hop/Rap",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vkvl",
                name: "Hip-Hop/Rap",
              },
              type: {
                id: "KZAyXgnZfZ7v7la",
                name: "Individual",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAd7",
                name: "Musician",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 23,
            tmr: 1,
            mfx_no: 2,
            ticketmaster: 20,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917pG-f?locale=en-us",
            },
          },
        },
        {
          name: "Kings Elliot",
          type: "attraction",
          id: "K8vZ917QfR7",
          test: false,
          url: "https://concerts.livenation.com/kings-elliot-tickets/artist/2872896",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: true,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: true,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7la",
                name: "Individual",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAde",
                name: "Singer/Vocalist",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 22,
            tmr: 1,
            ticketmaster: 21,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917QfR7?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Imagine Dragons: Mercury World Tour",
    type: "event",
    id: "vvG1FZ969_LkKk",
    test: false,
    url: "https://concerts.livenation.com/imagine-dragons-mercury-world-tour-holmdel-new-jersey-08-18-2022/event/02005C75D97C64C6",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "2022-04-01T14:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-08-19T01:00:00Z",
      },
      presales: [
        {
          startDateTime: "2022-03-31T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Live Nation Presale",
        },
        {
          startDateTime: "2022-03-31T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "HOB Foundation Room Member Presale",
        },
        {
          startDateTime: "2022-03-29T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Artist Presale",
        },
        {
          startDateTime: "2022-03-31T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Spotify Presale",
        },
        {
          startDateTime: "2022-03-31T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Ticket + VIP Club Bundle Offer",
        },
        {
          startDateTime: "2022-03-31T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Ticket + Lawn Chair Rental Bundle Offer",
        },
        {
          startDateTime: "2022-03-31T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Ticket + Cabana Club Bundle Offer",
        },
        {
          startDateTime: "2022-03-31T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Season Ticket Holder Presale",
        },
        {
          startDateTime: "2022-03-28T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Verizon Up Presale Tickets",
        },
        {
          startDateTime: "2022-03-28T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "VIP Packages Presale",
        },
        {
          startDateTime: "2022-04-01T14:00:00Z",
          endDateTime: "2022-08-12T02:00:00Z",
          name: "VIP Packages Onsale",
        },
        {
          startDateTime: "2022-03-28T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Official Platinum Presale",
        },
        {
          startDateTime: "2022-04-01T14:00:00Z",
          endDateTime: "2022-08-19T01:00:00Z",
          name: "Official Platinum",
        },
        {
          startDateTime: "2022-05-03T12:00:00Z",
          endDateTime: "2022-05-04T03:59:00Z",
          name: "Concert Week Citi® Cardmember Presale",
        },
        {
          startDateTime: "2022-05-03T16:00:00Z",
          endDateTime: "2022-05-04T03:59:00Z",
          name: "Rakuten Concert Week Promotion",
        },
        {
          startDateTime: "2022-05-04T14:00:00Z",
          endDateTime: "2022-05-11T03:59:00Z",
          name: "Concert Week Promotion",
        },
      ],
    },
    dates: {
      start: {
        localDate: "2022-08-18",
        localTime: "18:30:00",
        dateTime: "2022-08-18T22:30:00Z",
        dateTBD: false,
        dateTBA: false,
        timeTBA: false,
        noSpecificTime: false,
      },
      timezone: "America/New_York",
      status: {
        code: "onsale",
      },
      spanMultipleDays: false,
    },
    classifications: [
      {
        primary: true,
        segment: {
          id: "KZFzniwnSyZfZ7v7nJ",
          name: "Music",
        },
        genre: {
          id: "KnvZfZ7vAeA",
          name: "Rock",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v6F1",
          name: "Pop",
        },
        type: {
          id: "KZAyXgnZfZ7v7nI",
          name: "Undefined",
        },
        subType: {
          id: "KZFzBErXgnZfZ7v7lJ",
          name: "Undefined",
        },
        family: false,
      },
    ],
    promoter: {
      id: "653",
      name: "LIVE NATION MUSIC",
      description: "LIVE NATION MUSIC / NTL / USA",
    },
    promoters: [
      {
        id: "653",
        name: "LIVE NATION MUSIC",
        description: "LIVE NATION MUSIC / NTL / USA",
      },
    ],
    priceRanges: [
      {
        type: "standard",
        currency: "USD",
        min: 49.5,
        max: 159.5,
      },
    ],
    products: [
      {
        name: "VIP Club Access: Imagine Dragons - This is NOT a Concert Ticket",
        id: "vvG1FZ969QVpfF",
        url: "https://concerts.livenation.com/vip-club-access-imagine-dragons-this-holmdel-new-jersey-08-18-2022/event/02005C75DAD16508",
        type: "Club Access",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAFJ",
              name: "VIP Club Access",
            },
            family: false,
          },
        ],
      },
      {
        name: "VIP Fast Lane: Imagine Dragons - This is NOT a Concert Ticket",
        id: "vvG1FZ969h0k4Q",
        url: "https://concerts.livenation.com/vip-fast-lane-imagine-dragons-this-holmdel-new-jersey-08-18-2022/event/02005C75DB90655A",
        type: "Special Entry",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAFF",
              name: "FastLane Access",
            },
            family: false,
          },
        ],
      },
      {
        name: "Premier Parking: Imagine Dragons - This is NOT a Concert Ticket",
        id: "vvG1FZ969jIUpL",
        url: "https://concerts.livenation.com/premier-parking-imagine-dragons-this-is-holmdel-new-jersey-08-18-2022/event/02005C75DCA3659F",
        type: "Parking",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7vAva",
              name: "Parking",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAFk",
              name: "Premier",
            },
            family: false,
          },
        ],
      },
      {
        name: "Lawn Chair Rental: Imagine Dragons - This is NOT a Concert Ticket",
        id: "vvG1FZ969q5p98",
        url: "https://concerts.livenation.com/lawn-chair-rental-imagine-dragons-this-holmdel-new-jersey-08-18-2022/event/02005C75DD2D65D0",
        type: "Merchandise Voucher",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAF1",
              name: "Lawn Chair Rental",
            },
            family: false,
          },
        ],
      },
      {
        name: "The Shore Club Cabanas: Imagine Dragons - This is NOT a Concert Ticket",
        id: "vvG1FZ969qsUbt",
        url: "https://concerts.livenation.com/the-shore-club-cabanas-imagine-dragons-holmdel-new-jersey-08-18-2022/event/02005C75DDC76629",
        type: "Club Access",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7v7lF",
              name: "Club Access",
            },
            family: false,
          },
        ],
      },
      {
        name: "Imagine Dragons - Early Entry Picnic Upgrade (TICKET NOT INCLUDED)",
        id: "vvG1FZ96E5rP4V",
        url: "https://concerts.livenation.com/imagine-dragons-early-entry-picnic-upgrade-holmdel-new-jersey-08-18-2022/event/02005C79CB7A5574",
        type: "Special Entry",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7v7lv",
              name: "Special Entry",
            },
            family: false,
          },
        ],
      },
    ],
    seatmap: {
      staticUrl:
        "https://maps.ticketmaster.com/maps/geometry/3/event/02005C75D97C64C6/staticImage?type=png&systemId=HOST",
    },
    accessibility: {
      ticketLimit: 4,
    },
    ticketLimit: {
      info: "There is an overall 6 ticket limit for this event.",
    },
    ageRestrictions: {
      legalAgeEnforced: false,
    },
    code: "PHI:EGS0818",
    _links: {
      self: {
        href: "/discovery/v2/events/vvG1FZ969_LkKk?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917GSz7?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ917pG-f?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ917QfR7?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/KovZpZAEAIIA?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "PNC Bank Arts Center",
          type: "venue",
          id: "KovZpZAEAIIA",
          test: false,
          url: "https://www.ticketmaster.com/pnc-bank-arts-center-tickets-holmdel/venue/16839",
          locale: "en-us",
          aliases: ["pnc art center", "pnc bank", "pnc bank art center"],
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dbimages/22376v.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "3_1",
              url: "https://s1.ticketm.net/dam/v/e05/d241741c-d3b3-4b80-bc38-1570367f1e05_527791_SOURCE.jpg",
              width: 1500,
              height: 500,
              fallback: false,
            },
          ],
          postalCode: "07733",
          timezone: "America/New_York",
          city: {
            name: "Holmdel",
          },
          state: {
            name: "New Jersey",
            stateCode: "NJ",
          },
          country: {
            name: "United States Of America",
            countryCode: "US",
          },
          address: {
            line1: "Exit 116, Garden State Pkwy",
          },
          location: {
            longitude: "-74.1377399",
            latitude: "40.410434",
          },
          markets: [
            {
              name: "New York/Tri-State Area",
              id: "35",
            },
            {
              name: "Northern New Jersey",
              id: "55",
            },
            {
              name: "Connecticut",
              id: "124",
            },
          ],
          dmas: [
            {
              id: 296,
            },
            {
              id: 345,
            },
            {
              id: 422,
            },
          ],
          boxOfficeInfo: {
            phoneNumberDetail:
              "There is an $8 box office service charge per ticket applied to all walk up sales at the venue.",
            openHoursDetail:
              "Due to the ongoing global pandemic, and to protect the health and safety of our guests and venue staff members, the box office at PNC Bank Arts Center will be open on-day-of-show only. If you’d like to purchase tickets, please visit us at www.livenation.com. If you’re looking to obtain a refund for a show that was either canceled, postponed or rescheduled, please visit us at www.livenation.com/refund for more information. We look forward to seeing you at our next show at PNC Bank Arts Center",
            acceptedPaymentDetail:
              "Cash, AmEx, Visa, MC, DSC, A service charge is applied to each ticket.",
            willCallDetail:
              "Pick up tickets one hour prior to show. Customer must present the actual credit card used to place the order and a photo ID.",
          },
          parkingDetail:
            "ADA parking is on a first-come-first-serve basis and no additional Preminum parking tickets are needed For Premium Parking see www.ticketmaster.com, reserve your space and show up when you want. Parking lots will open 1 hour prior to doors.",
          accessibleSeatingDetail:
            "Special needs seating is available through either the box office at (732) 203-2500 ext. 3714, or by calling Ticketmaster. Accessible parking: New Jersey Disabled license plates or state permit required to park in the wheelchair accessible parking area. Parking is located south of the amphitheater. The amphitheater has special needs seating located in the Loge and Orchestra sections. Accessible lawn seating is also available. For more information concerning special needs, please contact the PNC Bank Arts Center at (732) 203-2500 ext. 3714.",
          generalInfo: {
            generalRule:
              "The PNC Bank Arts Center enforces the law prohibiting underage consumption of alcohol anywhere on site. Violators will be prosecuted. NO recording equipment, radios, TVs or unauthorized electronic equipment. NO alcoholic beverages, smoking, bottles, cans, coolers, weapons, personal Lawn Chair NO Laser Pointers. One factory sealed bottle of water per person. Camera Policy: Personal cameras are allowed in the venue. Flash photography, video and removable lens cameras are not permitted without venue approval.",
          },
          upcomingEvents: {
            _total: 43,
            ticketmaster: 43,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/KovZpZAEAIIA?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Imagine Dragons",
          type: "attraction",
          id: "K8vZ917GSz7",
          test: false,
          url: "https://concerts.livenation.com/imagine-dragons-tickets/artist/1435919",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/channel/UCT9zcQNlyht7fRlcjmflRSA",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/Imaginedragons",
              },
            ],
            itunes: [
              {
                url: "https://music.apple.com/us/artist/imagine-dragons/358714030",
              },
            ],
            lastfm: [
              {
                url: "http://www.last.fm/music/Imagine+Dragons",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/ImagineDragons",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Imagine_Dragons",
              },
            ],
            spotify: [
              {
                url: "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q",
              },
            ],
            instagram: [
              {
                url: "http://instagram.com/imaginedragons/",
              },
              {
                url: "http://instagram.com/imaginedragons",
              },
            ],
            musicbrainz: [
              {
                id: "012151a8-0f9a-44c9-997f-ebd68b5389f9",
              },
            ],
            homepage: [
              {
                url: "http://www.imaginedragonsmusic.com/",
              },
            ],
          },
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7nI",
                name: "Undefined",
              },
              subType: {
                id: "KZFzBErXgnZfZ7v7lJ",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 43,
            mfx_nl: 2,
            tmr: 1,
            mfx_de: 7,
            mfx_es: 6,
            ticketmaster: 23,
            mfx_cz: 2,
            _filtered: 0,
            mfx_se: 2,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917GSz7?locale=en-us",
            },
          },
        },
        {
          name: "Macklemore",
          type: "attraction",
          id: "K8vZ917pG-f",
          test: false,
          url: "https://concerts.livenation.com/macklemore-tickets/artist/2400469",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/user/RyanLewisProductions",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/macklemore",
              },
            ],
            lastfm: [
              {
                url: "https://www.last.fm/music/Macklemore",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Macklemore",
              },
            ],
            musicbrainz: [
              {
                id: "b6d7ec94-830c-44dd-b699-ce66556b7e55",
              },
            ],
            homepage: [
              {
                url: "http://macklemore.com/",
              },
            ],
          },
          images: [
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAv1",
                name: "Hip-Hop/Rap",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vkvl",
                name: "Hip-Hop/Rap",
              },
              type: {
                id: "KZAyXgnZfZ7v7la",
                name: "Individual",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAd7",
                name: "Musician",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 23,
            tmr: 1,
            mfx_no: 2,
            ticketmaster: 20,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917pG-f?locale=en-us",
            },
          },
        },
        {
          name: "Kings Elliot",
          type: "attraction",
          id: "K8vZ917QfR7",
          test: false,
          url: "https://concerts.livenation.com/kings-elliot-tickets/artist/2872896",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: true,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: true,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7la",
                name: "Individual",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAde",
                name: "Singer/Vocalist",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 22,
            tmr: 1,
            ticketmaster: 21,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917QfR7?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Imagine Dragons: Mercury World Tour",
    type: "event",
    id: "G5vzZ96LmH0nN",
    test: false,
    url: "https://www.ticketmaster.com/imagine-dragons-mercury-world-tour-commerce-city-colorado-09-05-2022/event/1E005C77EEF24AA3",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "2022-04-01T16:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-09-06T02:30:00Z",
      },
      presales: [
        {
          startDateTime: "2022-03-28T16:00:00Z",
          endDateTime: "2022-04-01T04:00:00Z",
          name: "VIP Packages Presale",
        },
        {
          startDateTime: "2022-03-29T16:00:00Z",
          endDateTime: "2022-04-01T04:00:00Z",
          name: "Artist Presale",
        },
        {
          startDateTime: "2022-03-31T16:00:00Z",
          endDateTime: "2022-04-01T04:00:00Z",
          name: "Spotify Presale",
        },
        {
          startDateTime: "2022-03-28T16:00:00Z",
          endDateTime: "2022-04-01T04:00:00Z",
          name: "Official Platinum Presale",
        },
        {
          startDateTime: "2022-04-01T16:00:00Z",
          endDateTime: "2022-08-30T04:00:00Z",
          name: "VIP Packages Onsale",
        },
        {
          startDateTime: "2022-04-01T16:00:00Z",
          endDateTime: "2022-09-06T02:30:00Z",
          name: "Official Platinum Onsale",
        },
        {
          startDateTime: "2022-03-28T16:00:00Z",
          endDateTime: "2022-04-01T04:00:00Z",
          name: "Verizon Up Presale Tickets",
        },
        {
          startDateTime: "2022-03-31T16:00:00Z",
          endDateTime: "2022-04-01T04:00:00Z",
          name: "Live Nation Presale",
        },
      ],
    },
    dates: {
      start: {
        localDate: "2022-09-05",
        localTime: "18:30:00",
        dateTime: "2022-09-06T00:30:00Z",
        dateTBD: false,
        dateTBA: false,
        timeTBA: false,
        noSpecificTime: false,
      },
      timezone: "America/Denver",
      status: {
        code: "onsale",
      },
      spanMultipleDays: false,
    },
    classifications: [
      {
        primary: true,
        segment: {
          id: "KZFzniwnSyZfZ7v7nJ",
          name: "Music",
        },
        genre: {
          id: "KnvZfZ7vAeA",
          name: "Rock",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v6F1",
          name: "Pop",
        },
        type: {
          id: "KZAyXgnZfZ7v7nI",
          name: "Undefined",
        },
        subType: {
          id: "KZFzBErXgnZfZ7v7lJ",
          name: "Undefined",
        },
        family: false,
      },
    ],
    promoter: {
      id: "653",
      name: "LIVE NATION MUSIC",
      description: "LIVE NATION MUSIC / NTL / USA",
    },
    promoters: [
      {
        id: "653",
        name: "LIVE NATION MUSIC",
        description: "LIVE NATION MUSIC / NTL / USA",
      },
    ],
    info: "Entry requirements are subject to change. By purchasing tickets to this event you agree to abide by entry requirements in effect at the time of the event. Check the venue website leading up to your event for the latest protocol.",
    pleaseNote:
      "Entry requirements are subject to change. By purchasing tickets to this event you agree to abide by entry requirements in effect at the time of the event. Check the venue website leading up to your event for the latest protocol.",
    priceRanges: [
      {
        type: "standard",
        currency: "USD",
        min: 39.5,
        max: 185.5,
      },
    ],
    products: [
      {
        name: "Imagine Dragons - Early Entry Picnic Upgrade (TICKET NOT INCLUDED)",
        id: "G5vzZ96JYCxHx",
        url: "https://www.ticketmaster.com/imagine-dragons-early-entry-picnic-upgrade-commerce-city-colorado-09-05-2022/event/1E005C79B03A2F22",
        type: "Special Entry",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7v7lv",
              name: "Special Entry",
            },
            family: false,
          },
        ],
      },
    ],
    seatmap: {
      staticUrl:
        "https://maps.ticketmaster.com/maps/geometry/3/event/1E005C77EEF24AA3/staticImage?type=png&systemId=HOST",
    },
    accessibility: {
      ticketLimit: 4,
    },
    ticketLimit: {
      info: "There is an overall 6 ticket limit for this event.",
    },
    ageRestrictions: {
      legalAgeEnforced: false,
    },
    code: "MTN:ED20905",
    _links: {
      self: {
        href: "/discovery/v2/events/G5vzZ96LmH0nN?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917GSz7?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ917pG-f?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ917QfR7?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/KovZpZAE7aJA?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "DICK'S Sporting Goods Park",
          type: "venue",
          id: "KovZpZAE7aJA",
          test: false,
          url: "https://www.ticketmaster.com/dicks-sporting-goods-park-tickets-commerce-city/venue/246830",
          locale: "en-us",
          images: [
            {
              url: "https://s1.ticketm.net/dam/v/76e/46da87c6-e78a-4d2d-bd20-3fbf5f0f476e_312262_SOURCE.jpg",
              width: 4639,
              height: 2194,
              fallback: false,
              attribution: "CC BY-SA 4.0 via wikipedia",
            },
          ],
          postalCode: "80022",
          timezone: "America/Denver",
          city: {
            name: "Commerce City",
          },
          state: {
            name: "Colorado",
            stateCode: "CO",
          },
          country: {
            name: "United States Of America",
            countryCode: "US",
          },
          address: {
            line1: "6000 Victory Way",
          },
          location: {
            longitude: "-104.891082",
            latitude: "39.805674",
          },
          markets: [
            {
              name: "Denver and More",
              id: "6",
            },
          ],
          dmas: [
            {
              id: 248,
            },
            {
              id: 254,
            },
            {
              id: 264,
            },
            {
              id: 285,
            },
            {
              id: 347,
            },
          ],
          boxOfficeInfo: {
            phoneNumberDetail:
              "For more information you can also go to the Dick’s Sporting Goods Park website https://www.dickssportinggoodspark.com/",
            openHoursDetail:
              "The Box Office will open 90 minutes prior to the event start time.",
            acceptedPaymentDetail:
              "The Box Office no longer sells tickets. All sales must be done in advance online.",
            willCallDetail:
              "WILL CALL is no longer accepted at the Box Office. All tickets are digital and must be managed that way.",
          },
          parkingDetail:
            "Dick’s Sporting Goods Park is located at the Southwest corner of the Rocky Mountain Arsenal National Wildlife Refuge in Commerce City, Colorado, at the intersection of 60th & Quebec. For additional information, please visit https://m.dickssportinggoodspark.com/parking.html Is there accessible seating?",
          accessibleSeatingDetail:
            "Dick’s Sporting Goods Park is committed to providing every Guest with a comfortable and enjoyable experience in the arena, including Guests with disabilities. Wheelchair and accessible seating tickets and companion seating is available for purchase in each of the wheelchair seating sections.",
          generalInfo: {
            generalRule:
              "For FAQs, please visit: https://www.dickssportinggoodspark.com/stadium-field-complex/field-complex-info/rules-and-regulations/",
          },
          upcomingEvents: {
            _total: 16,
            ticketmaster: 16,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/KovZpZAE7aJA?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Imagine Dragons",
          type: "attraction",
          id: "K8vZ917GSz7",
          test: false,
          url: "https://www.ticketmaster.com/imagine-dragons-tickets/artist/1435919",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/channel/UCT9zcQNlyht7fRlcjmflRSA",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/Imaginedragons",
              },
            ],
            itunes: [
              {
                url: "https://music.apple.com/us/artist/imagine-dragons/358714030",
              },
            ],
            lastfm: [
              {
                url: "http://www.last.fm/music/Imagine+Dragons",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/ImagineDragons",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Imagine_Dragons",
              },
            ],
            spotify: [
              {
                url: "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q",
              },
            ],
            instagram: [
              {
                url: "http://instagram.com/imaginedragons/",
              },
              {
                url: "http://instagram.com/imaginedragons",
              },
            ],
            musicbrainz: [
              {
                id: "012151a8-0f9a-44c9-997f-ebd68b5389f9",
              },
            ],
            homepage: [
              {
                url: "http://www.imaginedragonsmusic.com/",
              },
            ],
          },
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7nI",
                name: "Undefined",
              },
              subType: {
                id: "KZFzBErXgnZfZ7v7lJ",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 43,
            mfx_nl: 2,
            tmr: 1,
            mfx_de: 7,
            mfx_es: 6,
            ticketmaster: 23,
            mfx_cz: 2,
            _filtered: 0,
            mfx_se: 2,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917GSz7?locale=en-us",
            },
          },
        },
        {
          name: "Macklemore",
          type: "attraction",
          id: "K8vZ917pG-f",
          test: false,
          url: "https://www.ticketmaster.com/macklemore-tickets/artist/2400469",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/user/RyanLewisProductions",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/macklemore",
              },
            ],
            lastfm: [
              {
                url: "https://www.last.fm/music/Macklemore",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Macklemore",
              },
            ],
            musicbrainz: [
              {
                id: "b6d7ec94-830c-44dd-b699-ce66556b7e55",
              },
            ],
            homepage: [
              {
                url: "http://macklemore.com/",
              },
            ],
          },
          images: [
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAv1",
                name: "Hip-Hop/Rap",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vkvl",
                name: "Hip-Hop/Rap",
              },
              type: {
                id: "KZAyXgnZfZ7v7la",
                name: "Individual",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAd7",
                name: "Musician",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 23,
            tmr: 1,
            mfx_no: 2,
            ticketmaster: 20,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917pG-f?locale=en-us",
            },
          },
        },
        {
          name: "Kings Elliot",
          type: "attraction",
          id: "K8vZ917QfR7",
          test: false,
          url: "https://www.ticketmaster.com/kings-elliot-tickets/artist/2872896",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: true,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: true,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7la",
                name: "Individual",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAde",
                name: "Singer/Vocalist",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 22,
            tmr: 1,
            ticketmaster: 21,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917QfR7?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Imagine Dragons: Mercury World Tour",
    type: "event",
    id: "G5vfZ96foQ4eZ",
    test: false,
    url: "https://concerts.livenation.com/imagine-dragons-mercury-world-tour-bristow-virginia-08-14-2022/event/15005C7511695080",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "2022-04-01T14:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-08-15T01:00:00Z",
      },
      presales: [
        {
          startDateTime: "2022-03-28T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Verizon Up Presale Tickets",
        },
        {
          startDateTime: "2022-03-28T14:00:00Z",
          endDateTime: "2022-08-15T01:00:00Z",
          name: "Official Platinum",
        },
        {
          startDateTime: "2022-03-28T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "VIP Packages Presale",
        },
        {
          startDateTime: "2022-03-29T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Artist Presale",
        },
        {
          startDateTime: "2022-03-31T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Live Nation Presale",
        },
        {
          startDateTime: "2022-03-31T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Spotify Presale",
        },
        {
          startDateTime: "2022-03-31T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Season Ticket Holder Offer",
        },
        {
          startDateTime: "2022-03-31T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "HOB Foundation Room Member Presale",
        },
        {
          startDateTime: "2022-04-01T14:00:00Z",
          endDateTime: "2022-08-08T02:00:00Z",
          name: "VIP Packages Onsale",
        },
        {
          startDateTime: "2022-05-03T12:00:00Z",
          endDateTime: "2022-05-04T03:59:00Z",
          name: "Concert Week Citi® Cardmember Presale",
        },
        {
          startDateTime: "2022-05-04T14:00:00Z",
          endDateTime: "2022-05-11T03:59:00Z",
          name: "Concert Week Promotion",
        },
        {
          startDateTime: "2022-05-03T16:00:00Z",
          endDateTime: "2022-05-04T03:59:00Z",
          name: "Rakuten Concert Week Promotion",
        },
      ],
    },
    dates: {
      start: {
        localDate: "2022-08-14",
        localTime: "18:30:00",
        dateTime: "2022-08-14T22:30:00Z",
        dateTBD: false,
        dateTBA: false,
        timeTBA: false,
        noSpecificTime: false,
      },
      timezone: "America/New_York",
      status: {
        code: "onsale",
      },
      spanMultipleDays: false,
    },
    classifications: [
      {
        primary: true,
        segment: {
          id: "KZFzniwnSyZfZ7v7nJ",
          name: "Music",
        },
        genre: {
          id: "KnvZfZ7vAeA",
          name: "Rock",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v6F1",
          name: "Pop",
        },
        type: {
          id: "KZAyXgnZfZ7v7nI",
          name: "Undefined",
        },
        subType: {
          id: "KZFzBErXgnZfZ7v7lJ",
          name: "Undefined",
        },
        family: false,
      },
    ],
    promoter: {
      id: "653",
      name: "LIVE NATION MUSIC",
      description: "LIVE NATION MUSIC / NTL / USA",
    },
    promoters: [
      {
        id: "653",
        name: "LIVE NATION MUSIC",
        description: "LIVE NATION MUSIC / NTL / USA",
      },
    ],
    info: "GA PIT is STANDING ROOM ONLY. There are no seats in the GA PIT for this show. The GA PIT is general admission",
    pleaseNote:
      "Entry requirements are subject to change. By purchasing tickets to this event you agree to abide by entry requirements in effect at the time of the event. Check the venue website leading up to your event for the latest protocol.",
    priceRanges: [
      {
        type: "standard",
        currency: "USD",
        min: 49.5,
        max: 159.5,
      },
    ],
    products: [
      {
        name: "Imagine Dragons - Early Entry Picnic Upgrade (TICKET NOT INCLUDED)",
        id: "G5vfZ96E5fPE0",
        url: "https://concerts.livenation.com/imagine-dragons-early-entry-picnic-upgrade-bristow-virginia-08-14-2022/event/15005C79CB5259E4",
        type: "Special Entry",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7v7lv",
              name: "Special Entry",
            },
            family: false,
          },
        ],
      },
      {
        name: "Jiffy Lube Live Premier Parking",
        id: "G5vfZ96sDtv8V",
        url: "https://concerts.livenation.com/jiffy-lube-live-premier-parking-bristow-virginia-08-14-2022/event/15005C7C7BA41434",
        type: "Parking",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7vAva",
              name: "Parking",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAFk",
              name: "Premier",
            },
            family: false,
          },
        ],
      },
      {
        name: "Jiffy Lube Live VIP Parking",
        id: "G5vfZ96sHOvoX",
        url: "https://concerts.livenation.com/jiffy-lube-live-vip-parking-bristow-virginia-08-14-2022/event/15005C7C7C80147E",
        type: "Parking",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7vAva",
              name: "Parking",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAFk",
              name: "Premier",
            },
            family: false,
          },
        ],
      },
      {
        name: "Jiffy Lube Live Oversize Vehicle Parking (Bus / RV / Limo)",
        id: "G5vfZ96sHe-oC",
        url: "https://concerts.livenation.com/jiffy-lube-live-oversize-vehicle-parking-bristow-virginia-08-14-2022/event/15005C7C7C0A144E",
        type: "Parking",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7vAva",
              name: "Parking",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAF6",
              name: "Other (inc. RV, oversized)",
            },
            family: false,
          },
        ],
      },
      {
        name: "Jiffy Lube Live Early Parking Lot",
        id: "G5vfZ96sHy-KJ",
        url: "https://concerts.livenation.com/jiffy-lube-live-early-parking-lot-bristow-virginia-08-14-2022/event/15005C7C7CE614E6",
        type: "Parking",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7vAva",
              name: "Parking",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAF6",
              name: "Other (inc. RV, oversized)",
            },
            family: false,
          },
        ],
      },
      {
        name: "Jiffy Lube Live Fast Lane",
        id: "G5vfZ96sWTo4k",
        url: "https://concerts.livenation.com/jiffy-lube-live-fast-lane-bristow-virginia-08-14-2022/event/15005C7C7DFD1546",
        type: "Special Entry",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAFF",
              name: "FastLane Access",
            },
            family: false,
          },
        ],
      },
      {
        name: "Jiffy Lube Live Dominion Lounge",
        id: "G5vfZ96sWnofs",
        url: "https://concerts.livenation.com/jiffy-lube-live-dominion-lounge-bristow-virginia-08-14-2022/event/15005C7C7DA91531",
        type: "Club Access",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7v7lF",
              name: "Club Access",
            },
            family: false,
          },
        ],
      },
      {
        name: "Jiffy Lube Live Lawn Blankets",
        id: "G5vfZ96sWovKT",
        url: "https://concerts.livenation.com/jiffy-lube-live-lawn-blankets-bristow-virginia-08-14-2022/event/15005C7C7D4414FF",
        type: "Merchandise Voucher",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAke",
              name: "Merchandise Voucher",
            },
            family: false,
          },
        ],
      },
      {
        name: "Jiffy Lube Live VIP Club",
        id: "G5vfZ96sXbo4x",
        url: "https://concerts.livenation.com/jiffy-lube-live-vip-club-bristow-virginia-08-14-2022/event/15005C7C7E611562",
        type: "Club Access",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAFJ",
              name: "VIP Club Access",
            },
            family: false,
          },
        ],
      },
      {
        name: "Jiffy Lube Live Lawn Chair Rental",
        id: "G5vfZ96sXlv4H",
        url: "https://concerts.livenation.com/jiffy-lube-live-lawn-chair-rental-bristow-virginia-08-14-2022/event/15005C7C7EAC157C",
        type: "Merchandise Voucher",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAF1",
              name: "Lawn Chair Rental",
            },
            family: false,
          },
        ],
      },
    ],
    seatmap: {
      staticUrl:
        "https://maps.ticketmaster.com/maps/geometry/3/event/15005C7511695080/staticImage?type=png&systemId=HOST",
    },
    accessibility: {
      ticketLimit: 4,
    },
    ticketLimit: {
      info: "There is an overall 6 ticket limit for this event.",
    },
    ageRestrictions: {
      legalAgeEnforced: false,
    },
    code: "WDC:EJL0814E",
    _links: {
      self: {
        href: "/discovery/v2/events/G5vfZ96foQ4eZ?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917GSz7?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ917pG-f?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ917QfR7?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/KovZpZAEk6JA?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Jiffy Lube Live",
          type: "venue",
          id: "KovZpZAEk6JA",
          test: false,
          url: "https://www.ticketmaster.com/jiffy-lube-live-tickets-bristow/venue/172099",
          locale: "en-us",
          images: [
            {
              ratio: "3_1",
              url: "https://s1.ticketm.net/dam/v/cf1/c042e2ce-190c-4e10-8f53-d6ecd2716cf1_526301_SOURCE.jpg",
              width: 1500,
              height: 500,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dbimages/21867v.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
          ],
          postalCode: "20136",
          timezone: "America/New_York",
          city: {
            name: "Bristow",
          },
          state: {
            name: "Virginia",
            stateCode: "VA",
          },
          country: {
            name: "United States Of America",
            countryCode: "US",
          },
          address: {
            line1: "7800 Cellar Door Drive",
          },
          location: {
            longitude: "-77.587777",
            latitude: "38.7861199",
          },
          markets: [
            {
              name: "Virginia",
              id: "46",
            },
            {
              name: " DC and Maryland",
              id: "47",
            },
          ],
          dmas: [
            {
              id: 224,
            },
            {
              id: 370,
            },
            {
              id: 377,
            },
            {
              id: 409,
            },
          ],
          boxOfficeInfo: {
            phoneNumberDetail: "Main..703-754-6400 TTY...703-754-1696",
            openHoursDetail:
              "For the safety of our employees and guests, the box office will be closed until further notice. Please keep checking back here for updates as to when we re-open. We appreciate your understanding.",
            acceptedPaymentDetail:
              "Visa, Mastercard, American Express ****There is a $6.00 convenience charge on each ticket when purchased at the box office****",
            willCallDetail:
              "Will Call can only be picked up on the day of the show (starting approx 4 hours before show time). The customer must have the Confirmation # and a valid Photo ID to pick up tickets. ID must match name of purchaser to pick up tickets. 2ND Party Will Call is subject to Ticketmaster policy. Please refer inquiries to Ticketmaster Customer Service (800-745-3000).",
          },
          parkingDetail:
            "All parking lots are adjacent to Jiffy Lube Live. A parking fee is added to each ticket at the point of sale. Upgrade to Premier parking is available online and in the lot at point of purchase (if available day of show). Limited spaces available in Premier lot.",
          accessibleSeatingDetail:
            "Mobility Requests can be made through Ticketmaster. Hearing & Visual Impaired - please call 703-754-6400 ask for Box office",
          generalInfo: {
            generalRule:
              "All items are subject to change per artist restrictions. NO bottles, coolers, or pets. NO weapons or recording devices are permitted. Blankets and cushions are allowed (restricted on some shows). Call venue for more info. Lawn chairs will be allowed into the venue for most events. Food will be allowed inside the venue in a clear 1 gallon sized plastic bag. No alcoholic or non-alcoholic beverages will be admitted except for one sealed bottle of water. Guests are allowed to bring in (1) sealed plastic container of bottled water (1 per guest). Guests may also bring small personal (tote-type) umbrellas, blankets, & binoculars for most events. Please call the venue on the day of show for an updated list of approved items. You can also find this information for each show on facebook.com/jiffylubelive Camera Policy: Generally, Personal cameras are allowed in the venue. Flash photography, video and removable lens cameras are not permitted without tour publicity approval. Tailgating Policy All tailgating activities must be conducted in accordance with Virginia law. Underage drinking is illegal and will be addressed aggressively by Prince William County Police, Virginia ABC and JLL staff. Please cut and paste this link: www.livenation.com/jlltailgating : for the complete tailgating policy and tailgating guidelines.",
            childRule: "Children ages 2 and older need a ticket.",
          },
          upcomingEvents: {
            _total: 28,
            ticketmaster: 28,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/KovZpZAEk6JA?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Imagine Dragons",
          type: "attraction",
          id: "K8vZ917GSz7",
          test: false,
          url: "https://concerts.livenation.com/imagine-dragons-tickets/artist/1435919",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/channel/UCT9zcQNlyht7fRlcjmflRSA",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/Imaginedragons",
              },
            ],
            itunes: [
              {
                url: "https://music.apple.com/us/artist/imagine-dragons/358714030",
              },
            ],
            lastfm: [
              {
                url: "http://www.last.fm/music/Imagine+Dragons",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/ImagineDragons",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Imagine_Dragons",
              },
            ],
            spotify: [
              {
                url: "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q",
              },
            ],
            instagram: [
              {
                url: "http://instagram.com/imaginedragons/",
              },
              {
                url: "http://instagram.com/imaginedragons",
              },
            ],
            musicbrainz: [
              {
                id: "012151a8-0f9a-44c9-997f-ebd68b5389f9",
              },
            ],
            homepage: [
              {
                url: "http://www.imaginedragonsmusic.com/",
              },
            ],
          },
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7nI",
                name: "Undefined",
              },
              subType: {
                id: "KZFzBErXgnZfZ7v7lJ",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 43,
            mfx_nl: 2,
            tmr: 1,
            mfx_de: 7,
            mfx_es: 6,
            ticketmaster: 23,
            mfx_cz: 2,
            _filtered: 0,
            mfx_se: 2,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917GSz7?locale=en-us",
            },
          },
        },
        {
          name: "Macklemore",
          type: "attraction",
          id: "K8vZ917pG-f",
          test: false,
          url: "https://concerts.livenation.com/macklemore-tickets/artist/2400469",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/user/RyanLewisProductions",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/macklemore",
              },
            ],
            lastfm: [
              {
                url: "https://www.last.fm/music/Macklemore",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Macklemore",
              },
            ],
            musicbrainz: [
              {
                id: "b6d7ec94-830c-44dd-b699-ce66556b7e55",
              },
            ],
            homepage: [
              {
                url: "http://macklemore.com/",
              },
            ],
          },
          images: [
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAv1",
                name: "Hip-Hop/Rap",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vkvl",
                name: "Hip-Hop/Rap",
              },
              type: {
                id: "KZAyXgnZfZ7v7la",
                name: "Individual",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAd7",
                name: "Musician",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 23,
            tmr: 1,
            mfx_no: 2,
            ticketmaster: 20,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917pG-f?locale=en-us",
            },
          },
        },
        {
          name: "Kings Elliot",
          type: "attraction",
          id: "K8vZ917QfR7",
          test: false,
          url: "https://concerts.livenation.com/kings-elliot-tickets/artist/2872896",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: true,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: true,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7la",
                name: "Individual",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAde",
                name: "Singer/Vocalist",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 22,
            tmr: 1,
            ticketmaster: 21,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917QfR7?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Imagine Dragons: Mercury World Tour",
    type: "event",
    id: "vvG1OZ96Ltsp-f",
    test: false,
    url: "https://www.ticketmaster.com/imagine-dragons-mercury-world-tour-clarkston-michigan-08-24-2022/event/08005C77E9C56854",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "2022-04-01T14:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-08-24T22:30:00Z",
      },
      presales: [
        {
          startDateTime: "2022-03-31T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "313 Presents Presale",
        },
        {
          startDateTime: "2022-03-31T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Live Nation Presale",
        },
        {
          startDateTime: "2022-03-28T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Verizon Up Presale Tickets",
        },
        {
          startDateTime: "2022-03-29T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Artist Presale",
        },
        {
          startDateTime: "2022-03-28T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Official Platinum Presale",
        },
        {
          startDateTime: "2022-04-01T14:00:00Z",
          endDateTime: "2022-08-24T22:30:00Z",
          name: "Official Platinum",
        },
        {
          startDateTime: "2022-03-31T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Spotify Presale",
        },
        {
          startDateTime: "2022-03-28T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "VIP Package Presale",
        },
        {
          startDateTime: "2022-04-01T14:00:00Z",
          endDateTime: "2022-08-18T02:00:00Z",
          name: "VIP Package Onsale",
        },
      ],
    },
    dates: {
      start: {
        localDate: "2022-08-24",
        localTime: "18:30:00",
        dateTime: "2022-08-24T22:30:00Z",
        dateTBD: false,
        dateTBA: false,
        timeTBA: false,
        noSpecificTime: false,
      },
      timezone: "America/New_York",
      status: {
        code: "onsale",
      },
      spanMultipleDays: false,
    },
    classifications: [
      {
        primary: true,
        segment: {
          id: "KZFzniwnSyZfZ7v7nJ",
          name: "Music",
        },
        genre: {
          id: "KnvZfZ7vAeA",
          name: "Rock",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v6F1",
          name: "Pop",
        },
        type: {
          id: "KZAyXgnZfZ7v7nI",
          name: "Undefined",
        },
        subType: {
          id: "KZFzBErXgnZfZ7v7lJ",
          name: "Undefined",
        },
        family: false,
      },
    ],
    promoter: {
      id: "653",
      name: "LIVE NATION MUSIC",
      description: "LIVE NATION MUSIC / NTL / USA",
    },
    promoters: [
      {
        id: "653",
        name: "LIVE NATION MUSIC",
        description: "LIVE NATION MUSIC / NTL / USA",
      },
    ],
    info: "There is a $5.00 traffic control fee included in the price of your ticket. Guests are permitted to bring in beach style chairs (chair must be less than 12 inches from the ground from the bottom of the seat when unfolded) for most amphitheater shows. This is subject to change based on different tour or show requests. Food & beverage is not permitted to be brought into the venue. All events at Pine Knob Music Theatre are Rain or Shine events. Only in extreme inclement weather are shows cancelled or postponed. We encourage you to check our social media channels and the 313Presents.com news section for updates.",
    pleaseNote:
      "Policy Updates: All bags, purses and clutches are prohibited, Wallets sized (4 x 6 x 1.5 or smaller) and Diaper Bags/Medical Bags (14 x 14 x 6 ) allowed. All tickets are MOBILE. Please download the Ticketmaster or District Detroit App to view your tickets. Please arrive early to reduce your wait time to enter the venue. There are currently no vaccination/test results requirements in place for this event. Masks are recommended. For additional venue information visit 313Presents.com",
    priceRanges: [
      {
        type: "standard",
        currency: "USD",
        min: 39.5,
        max: 169.5,
      },
    ],
    products: [
      {
        name: "Imagine Dragons - Early Entry Picnic Upgrade (TICKET NOT INCLUDED)",
        id: "vvG1OZ96E5sN0J",
        url: "https://www.ticketmaster.com/imagine-dragons-early-entry-picnic-upgrade-clarkston-michigan-08-24-2022/event/08005C79CBC63926",
        type: "Special Entry",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7v7lv",
              name: "Special Entry",
            },
            family: false,
          },
        ],
      },
      {
        name: "PARKWHIZ PINE KNOB MUSIC THEATRE",
        id: "vvG1OZ96SQdV7x",
        url: "https://www.ticketmaster.com/parkwhiz-pine-knob-music-theatre-clarkston-michigan-08-24-2022/event/08005C7CDA0F4122",
        type: "Upsell",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7vAva",
              name: "Parking",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAFe",
              name: "Parking",
            },
            family: false,
          },
        ],
      },
    ],
    seatmap: {
      staticUrl:
        "https://maps.ticketmaster.com/maps/geometry/3/event/08005C77E9C56854/staticImage?type=png&systemId=HOST",
    },
    accessibility: {
      ticketLimit: 20,
    },
    ticketLimit: {
      info: "There is an overall 6 ticket limit for this event.",
    },
    ageRestrictions: {
      legalAgeEnforced: false,
    },
    code: "DET:ED082422",
    _links: {
      self: {
        href: "/discovery/v2/events/vvG1OZ96Ltsp-f?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917GSz7?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ917pG-f?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ917QfR7?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/KovZpa3swe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Pine Knob Music Theatre",
          type: "venue",
          id: "KovZpa3swe",
          test: false,
          url: "https://www.ticketmaster.com/pine-knob-music-theatre-tickets-clarkston/venue/65563",
          locale: "en-us",
          aliases: [
            "dte energy music theater",
            "dte energy music theatre",
            "pine knob",
            "pine knob music theatre",
            "pine knob music theater",
          ],
          images: [
            {
              ratio: "3_1",
              url: "https://s1.ticketm.net/dam/v/70c/fd7fc51b-88c6-4740-a99b-8dcc3f28170c_378641_SOURCE.jpg",
              width: 1500,
              height: 500,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dbimages/22302v.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
          ],
          postalCode: "48348",
          timezone: "America/New_York",
          city: {
            name: "Clarkston",
          },
          state: {
            name: "Michigan",
            stateCode: "MI",
          },
          country: {
            name: "United States Of America",
            countryCode: "US",
          },
          address: {
            line1: "33 Bob Seger Drive",
          },
          location: {
            longitude: "-83.3802299",
            latitude: "42.75098483",
          },
          markets: [
            {
              name: " Toledo & More",
              id: "7",
            },
          ],
          dmas: [
            {
              id: 266,
            },
            {
              id: 277,
            },
            {
              id: 317,
            },
            {
              id: 398,
            },
          ],
          social: {
            twitter: {
              handle: "@pineknobmusic",
            },
          },
          boxOfficeInfo: {
            phoneNumberDetail: "Box Office/ADA Phone: 313-471-7929",
            openHoursDetail:
              "The box office at Pine Knob Music Theatre will open for the season on Monday May 9, 2022 and will be open Monday thru Friday, 11:00am - 5:30pm and 11:00am - Intermission on Event Days. Tickets for all events at Pine Knob Music Theatre can also be purchased at the Xfinity Box Office at Little Caesars Arena, which is open year round, with daily hours of Monday to Friday, 11:00am - 5:30pm, and also on event days from 11:00am - intermission.",
            acceptedPaymentDetail:
              "MasterCard, Visa, Discover, American Express, cash, Personal checks can only be accepted 7 days prior to event with proper I.D.",
            willCallDetail:
              "Tickets can be picked up at the Box Offices 90 minutes prior to the show/event Will Call tickets may be picked up at any of the box offices where the event is scheduled. Bring a picture I.D., the credit card used to purchase the tickets also the confirmation number are required.",
          },
          parkingDetail:
            "Traffic Control Fee: A $5.00 traffic control fee is added to each ticket Parking lot opens at 4:00 for most shows Parking for disabled guests is located outside the east entrance.",
          accessibleSeatingDetail:
            "The disabled seating locations for Pine Knob Music Theatre are located in the rear of the pavilion. There is a raised platform located in the left section of the pavilion, which is usually priced as a pavilion ticket. One companion seat may be purchased with the disabled seat. Additional companion seats may be purchased but will be placed in the rows ahead of the disabled section, if available. Patrons may also purchase tickets to sit behind the right or center sections. These tickets are priced at the lawn price. Please be aware that other patrons standing may obstruct patrons who chose the lawn priced disabled seats. To purchase tickets in these sections please call: 313-471-7929",
          generalInfo: {
            generalRule:
              "All bags, purses, and clutches are prohibited. Wallets sized 4 x 6 x 1.5 or smaller) and Diaper Bags/Medical Bags (14 x 14 x 6) allowed. No carry-ins (including food & beverage, coolers, umbrellas). No cameras or recording devices. No Smoking. Binoculars ARE allowed.",
            childRule:
              "Children age 2 & over must have a ticket. (Subject to promoters discretion)",
          },
          upcomingEvents: {
            _total: 48,
            ticketmaster: 48,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/KovZpa3swe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Imagine Dragons",
          type: "attraction",
          id: "K8vZ917GSz7",
          test: false,
          url: "https://www.ticketmaster.com/imagine-dragons-tickets/artist/1435919",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/channel/UCT9zcQNlyht7fRlcjmflRSA",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/Imaginedragons",
              },
            ],
            itunes: [
              {
                url: "https://music.apple.com/us/artist/imagine-dragons/358714030",
              },
            ],
            lastfm: [
              {
                url: "http://www.last.fm/music/Imagine+Dragons",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/ImagineDragons",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Imagine_Dragons",
              },
            ],
            spotify: [
              {
                url: "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q",
              },
            ],
            instagram: [
              {
                url: "http://instagram.com/imaginedragons/",
              },
              {
                url: "http://instagram.com/imaginedragons",
              },
            ],
            musicbrainz: [
              {
                id: "012151a8-0f9a-44c9-997f-ebd68b5389f9",
              },
            ],
            homepage: [
              {
                url: "http://www.imaginedragonsmusic.com/",
              },
            ],
          },
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7nI",
                name: "Undefined",
              },
              subType: {
                id: "KZFzBErXgnZfZ7v7lJ",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 43,
            mfx_nl: 2,
            tmr: 1,
            mfx_de: 7,
            mfx_es: 6,
            ticketmaster: 23,
            mfx_cz: 2,
            _filtered: 0,
            mfx_se: 2,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917GSz7?locale=en-us",
            },
          },
        },
        {
          name: "Macklemore",
          type: "attraction",
          id: "K8vZ917pG-f",
          test: false,
          url: "https://www.ticketmaster.com/macklemore-tickets/artist/2400469",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/user/RyanLewisProductions",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/macklemore",
              },
            ],
            lastfm: [
              {
                url: "https://www.last.fm/music/Macklemore",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Macklemore",
              },
            ],
            musicbrainz: [
              {
                id: "b6d7ec94-830c-44dd-b699-ce66556b7e55",
              },
            ],
            homepage: [
              {
                url: "http://macklemore.com/",
              },
            ],
          },
          images: [
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAv1",
                name: "Hip-Hop/Rap",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vkvl",
                name: "Hip-Hop/Rap",
              },
              type: {
                id: "KZAyXgnZfZ7v7la",
                name: "Individual",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAd7",
                name: "Musician",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 23,
            tmr: 1,
            mfx_no: 2,
            ticketmaster: 20,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917pG-f?locale=en-us",
            },
          },
        },
        {
          name: "Kings Elliot",
          type: "attraction",
          id: "K8vZ917QfR7",
          test: false,
          url: "https://www.ticketmaster.com/kings-elliot-tickets/artist/2872896",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: true,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: true,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7la",
                name: "Individual",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAde",
                name: "Singer/Vocalist",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 22,
            tmr: 1,
            ticketmaster: 21,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917QfR7?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Imagine Dragons: Mercury World Tour",
    type: "event",
    id: "G5dIZ96b_l_xl",
    test: false,
    url: "https://concerts.livenation.com/imagine-dragons-mercury-world-tour-woodlands-texas-09-01-2022/event/3A005C7619AD98AB",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "2022-04-01T15:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-09-02T01:45:00Z",
      },
      presales: [
        {
          startDateTime: "2022-03-28T15:00:00Z",
          endDateTime: "2022-04-01T03:00:00Z",
          name: "VIP Packages Presale",
        },
        {
          startDateTime: "2022-03-29T15:00:00Z",
          endDateTime: "2022-04-01T03:00:00Z",
          name: "Artist Presale",
        },
        {
          startDateTime: "2022-03-31T15:00:00Z",
          endDateTime: "2022-04-01T03:00:00Z",
          name: "Spotify Presale",
        },
        {
          startDateTime: "2022-03-28T15:00:00Z",
          endDateTime: "2022-04-01T03:00:00Z",
          name: "Official Platinum Presale",
        },
        {
          startDateTime: "2022-03-31T15:00:00Z",
          endDateTime: "2022-04-01T03:00:00Z",
          name: "LIVE NATION PRESALE",
        },
        {
          startDateTime: "2022-03-31T15:00:00Z",
          endDateTime: "2022-04-01T03:00:00Z",
          name: "VENUE PRESALE",
        },
        {
          startDateTime: "2022-03-31T15:00:00Z",
          endDateTime: "2022-04-01T03:00:00Z",
          name: "WOODFOREST PRESALE",
        },
        {
          startDateTime: "2022-04-01T15:00:00Z",
          endDateTime: "2022-08-26T03:00:00Z",
          name: "VIP Packages Onsale",
        },
        {
          startDateTime: "2022-04-01T15:00:00Z",
          endDateTime: "2022-09-02T01:30:00Z",
          name: "Official Platinum Onsale",
        },
        {
          startDateTime: "2022-05-03T12:00:00Z",
          endDateTime: "2022-05-04T04:59:00Z",
          name: "Concert Week Citi® Cardmember Presale",
        },
        {
          startDateTime: "2022-03-28T15:00:00Z",
          endDateTime: "2022-04-01T03:00:00Z",
          name: "Verizon Up Presale Tickets",
        },
        {
          startDateTime: "2022-05-03T16:00:00Z",
          endDateTime: "2022-05-04T04:59:00Z",
          name: "Rakuten Concert Week Promotion",
        },
        {
          startDateTime: "2022-05-04T14:00:00Z",
          endDateTime: "2022-05-11T04:59:00Z",
          name: "Concert Week Promotion",
        },
      ],
    },
    dates: {
      start: {
        localDate: "2022-09-01",
        localTime: "18:45:00",
        dateTime: "2022-09-01T23:45:00Z",
        dateTBD: false,
        dateTBA: false,
        timeTBA: false,
        noSpecificTime: false,
      },
      timezone: "America/Chicago",
      status: {
        code: "onsale",
      },
      spanMultipleDays: false,
    },
    classifications: [
      {
        primary: true,
        segment: {
          id: "KZFzniwnSyZfZ7v7nJ",
          name: "Music",
        },
        genre: {
          id: "KnvZfZ7vAeA",
          name: "Rock",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v6F1",
          name: "Pop",
        },
        type: {
          id: "KZAyXgnZfZ7v7nI",
          name: "Undefined",
        },
        subType: {
          id: "KZFzBErXgnZfZ7v7lJ",
          name: "Undefined",
        },
        family: false,
      },
    ],
    promoter: {
      id: "653",
      name: "LIVE NATION MUSIC",
      description: "LIVE NATION MUSIC / NTL / USA",
    },
    promoters: [
      {
        id: "653",
        name: "LIVE NATION MUSIC",
        description: "LIVE NATION MUSIC / NTL / USA",
      },
    ],
    info: "There is a STRICT bag size requirement for this show. All bags and purses (unless clear) must be smaller than 4.5 inches x 6.5 inches. Clear bags must be smaller than 12 inches x 12 inches. For more information, visit www.woodlandscenter.org.",
    pleaseNote:
      "There is a STRICT bag size requirement for this show. All bags and purses (unless clear) must be smaller than 4.5 inches x 6.5 inches. Clear bags must be smaller than 12 inches x 12 inches. For more information, visit www.woodlandscenter.org.",
    priceRanges: [
      {
        type: "standard",
        currency: "USD",
        min: 49.5,
        max: 169.5,
      },
    ],
    products: [
      {
        name: "Imagine Dragons - Early Entry Picnic Upgrade (TICKET NOT INCLUDED)",
        id: "G5dIZ96JXA7B2",
        url: "https://concerts.livenation.com/imagine-dragons-early-entry-picnic-upgrade-woodlands-texas-09-01-2022/event/3A005C79BE144E8F",
        type: "Special Entry",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7v7lv",
              name: "Special Entry",
            },
            family: false,
          },
        ],
      },
      {
        name: "Imagine Dragons - Garage Parking",
        id: "G5dIZ9FAMU-hL",
        url: "https://concerts.livenation.com/imagine-dragons-garage-parking-woodlands-texas-09-01-2022/event/3A005C8177DA16DF",
        type: "Parking",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7vAva",
              name: "Parking",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAFe",
              name: "Parking",
            },
            family: false,
          },
        ],
      },
      {
        name: "Imagine Dragons - Lawn Chair Rental",
        id: "G5dIZ9FAzm-x4",
        url: "https://concerts.livenation.com/imagine-dragons-lawn-chair-rental-woodlands-texas-09-01-2022/event/3A005C8178BA1895",
        type: "Special Entry",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7v7lv",
              name: "Special Entry",
            },
            family: false,
          },
        ],
      },
    ],
    seatmap: {
      staticUrl:
        "https://maps.ticketmaster.com/maps/geometry/3/event/3A005C7619AD98AB/staticImage?type=png&systemId=HOST",
    },
    accessibility: {
      info: "Seating - Accessible seating in various sections of the seating area and at various prices for guests with mobility impairments. Seating near the stage is available for guests with visual or hearing impairments. Limited Mobility seating does not have wheelchair access.",
      ticketLimit: 4,
      url: "http://www.woodlandscenter.org/disabilities.html",
      urlText: "GUESTS WITH DISABILITIES",
    },
    ticketLimit: {
      info: "There is an overall 6 ticket limit for this event.",
    },
    ageRestrictions: {
      legalAgeEnforced: false,
    },
    code: "DL2:EHW0901",
    _links: {
      self: {
        href: "/discovery/v2/events/G5dIZ96b_l_xl?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917GSz7?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ917pG-f?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ917QfR7?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/KovZpZAE6k6A?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "The Cynthia Woods Mitchell Pavilion presented by Huntsman",
          type: "venue",
          id: "KovZpZAE6k6A",
          test: false,
          url: "https://www.ticketmaster.com/the-cynthia-woods-mitchell-pavilion-presented-tickets-woodlands/venue/475245",
          locale: "en-us",
          aliases: [
            "cynthia woods mitchell pavilion",
            "woodlands pavilion",
            "woodland pavilion",
            "woodland pavillion",
            "woodlands pavillion",
            "the cynthia woods mitchell pavilion",
            "the woodlands pavilion",
            "the woodlands",
          ],
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dbimages/21869v.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "3_1",
              url: "https://s1.ticketm.net/dam/v/e6e/ad382d52-5153-4213-814c-f42c8a4c7e6e_379671_SOURCE.jpg",
              width: 1500,
              height: 500,
              fallback: false,
            },
          ],
          postalCode: "77380",
          timezone: "America/Chicago",
          city: {
            name: "Woodlands",
          },
          state: {
            name: "Texas",
            stateCode: "TX",
          },
          country: {
            name: "United States Of America",
            countryCode: "US",
          },
          address: {
            line1: "2005 Lake Robbins Dr",
          },
          location: {
            longitude: "-95.46435087",
            latitude: "30.16190839",
          },
          markets: [
            {
              name: "Houston and More",
              id: "22",
            },
            {
              name: "Beaumont",
              id: "123",
            },
          ],
          dmas: [
            {
              id: 227,
            },
            {
              id: 300,
            },
            {
              id: 408,
            },
          ],
          social: {
            twitter: {
              handle: "@thepavilion_tx",
            },
          },
          boxOfficeInfo: {
            phoneNumberDetail:
              "Event related questions may be handled by Ticketmaster phone agents and ticket center sellers. Group sales for 20 or more are available on most performing arts events through 281-364-3010. Contemporary rock/pop/etc events do NOT allow group purchases.",
            openHoursDetail:
              "10am-5pm Mon-Fri (Closed on Saturdays unless it is an event day.) 10am-Intermission (Monday-Saturday Event Days) 12noon-Intermission (Sunday Event Days - for doors at Noon the box office will open at 10am )",
            acceptedPaymentDetail:
              "Cash, MasterCard, Visa, American Express and Discover",
            willCallDetail:
              "Customers may pick up their tickets 48 hours after ordering. They must present a photo ID, the credit card used in the purchase, and their confirmation number. The box office is located at the North entrance.",
          },
          parkingDetail:
            "Prepaid Preferred Parking in the Gold Lot Parking Garage off Six Pines South is available from Ticketmaster by phone at 800-745-3000 or www.ticketmaster.com (these parking passes go OFF sale by phone/online 10 days before show date) or at any Ticketmaster Ticket Center including select, Walmart, Fiesta, and HEB stores until the day of the show, subject to availability. There is no free accessible parking in the garage. Free accessible parking is available on a 1st come basis in the adjacent gold lot with accessible plates or placards. Free Parking is available within walking distance to the facility off of Grogans Mill Rd. and Timberloch Pl. For sold out performances parking could be limited.",
          accessibleSeatingDetail:
            "Special seating is available for guests with disabilities. Visit the venue's official website for additional information: https/www.woodlandscenter.org/disabilities.html",
          generalInfo: {
            generalRule:
              "No Laser Pointers, Bottles, Strollers, Lawn Chairs, Cameras, Recorders, Cans, Beverages, Coolers, Weapons or stadium chairs allowed inside. Customers may bring beach towels, pillows, umbrellas, or binoculars. Some performers may have different restrictions. FOOD is now permitted into the venue at all events. At contemporary events, each guest is permitted to bring in a one gallon plastic bag of food for personal consumption. At performing arts events (symphony, ballet, opera, etc), guests also can bring in food, but are not limited to a one gallon plastic bag. NO BEVERAGES CAN BE BROUGHT INTO THE VENUE AT ANY TIME!",
            childRule:
              "Reserved seating - Child age 2 and under is free if seated in an adults lap. Children's performances 1 and under free. Lawn - Children 5 years of age and under are admitted free to the lawn.",
          },
          upcomingEvents: {
            _total: 41,
            ticketmaster: 41,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/KovZpZAE6k6A?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Imagine Dragons",
          type: "attraction",
          id: "K8vZ917GSz7",
          test: false,
          url: "https://concerts.livenation.com/imagine-dragons-tickets/artist/1435919",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/channel/UCT9zcQNlyht7fRlcjmflRSA",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/Imaginedragons",
              },
            ],
            itunes: [
              {
                url: "https://music.apple.com/us/artist/imagine-dragons/358714030",
              },
            ],
            lastfm: [
              {
                url: "http://www.last.fm/music/Imagine+Dragons",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/ImagineDragons",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Imagine_Dragons",
              },
            ],
            spotify: [
              {
                url: "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q",
              },
            ],
            instagram: [
              {
                url: "http://instagram.com/imaginedragons/",
              },
              {
                url: "http://instagram.com/imaginedragons",
              },
            ],
            musicbrainz: [
              {
                id: "012151a8-0f9a-44c9-997f-ebd68b5389f9",
              },
            ],
            homepage: [
              {
                url: "http://www.imaginedragonsmusic.com/",
              },
            ],
          },
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7nI",
                name: "Undefined",
              },
              subType: {
                id: "KZFzBErXgnZfZ7v7lJ",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 43,
            mfx_nl: 2,
            tmr: 1,
            mfx_de: 7,
            mfx_es: 6,
            ticketmaster: 23,
            mfx_cz: 2,
            _filtered: 0,
            mfx_se: 2,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917GSz7?locale=en-us",
            },
          },
        },
        {
          name: "Macklemore",
          type: "attraction",
          id: "K8vZ917pG-f",
          test: false,
          url: "https://concerts.livenation.com/macklemore-tickets/artist/2400469",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/user/RyanLewisProductions",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/macklemore",
              },
            ],
            lastfm: [
              {
                url: "https://www.last.fm/music/Macklemore",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Macklemore",
              },
            ],
            musicbrainz: [
              {
                id: "b6d7ec94-830c-44dd-b699-ce66556b7e55",
              },
            ],
            homepage: [
              {
                url: "http://macklemore.com/",
              },
            ],
          },
          images: [
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAv1",
                name: "Hip-Hop/Rap",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vkvl",
                name: "Hip-Hop/Rap",
              },
              type: {
                id: "KZAyXgnZfZ7v7la",
                name: "Individual",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAd7",
                name: "Musician",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 23,
            tmr: 1,
            mfx_no: 2,
            ticketmaster: 20,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917pG-f?locale=en-us",
            },
          },
        },
        {
          name: "Kings Elliot",
          type: "attraction",
          id: "K8vZ917QfR7",
          test: false,
          url: "https://concerts.livenation.com/kings-elliot-tickets/artist/2872896",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: true,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: true,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7la",
                name: "Individual",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAde",
                name: "Singer/Vocalist",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 22,
            tmr: 1,
            ticketmaster: 21,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917QfR7?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Imagine Dragons: Mercury World Tour",
    type: "event",
    id: "G5vbZ96G7zE4B",
    test: false,
    url: "https://www.ticketmaster.com/imagine-dragons-mercury-world-tour-cincinnati-ohio-08-28-2022/event/16005C7304E2757A",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "2022-04-01T14:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-08-28T23:30:00Z",
      },
      presales: [
        {
          startDateTime: "2022-03-29T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Artist Presale",
        },
        {
          startDateTime: "2022-03-31T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Live Nation Presale",
        },
        {
          startDateTime: "2022-03-31T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Spotify Presale",
        },
        {
          startDateTime: "2022-03-31T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Radio/Venue Presale",
        },
        {
          startDateTime: "2022-03-28T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Verizon Up Presale Tickets",
        },
        {
          startDateTime: "2022-03-28T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "VIP Packages Presale",
        },
        {
          startDateTime: "2022-04-01T14:00:00Z",
          endDateTime: "2022-08-22T02:00:00Z",
          name: "VIP Packages Onsale",
        },
        {
          startDateTime: "2022-03-28T14:00:00Z",
          endDateTime: "2022-04-01T02:00:00Z",
          name: "Official Platinum Presale",
        },
        {
          startDateTime: "2022-04-01T14:00:00Z",
          endDateTime: "2022-08-28T23:30:00Z",
          name: "Official Platinum",
        },
      ],
    },
    dates: {
      start: {
        localDate: "2022-08-28",
        localTime: "18:30:00",
        dateTime: "2022-08-28T22:30:00Z",
        dateTBD: false,
        dateTBA: false,
        timeTBA: false,
        noSpecificTime: false,
      },
      timezone: "America/New_York",
      status: {
        code: "onsale",
      },
      spanMultipleDays: false,
    },
    classifications: [
      {
        primary: true,
        segment: {
          id: "KZFzniwnSyZfZ7v7nJ",
          name: "Music",
        },
        genre: {
          id: "KnvZfZ7vAeA",
          name: "Rock",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v6F1",
          name: "Pop",
        },
        type: {
          id: "KZAyXgnZfZ7v7nI",
          name: "Undefined",
        },
        subType: {
          id: "KZFzBErXgnZfZ7v7lJ",
          name: "Undefined",
        },
        family: false,
      },
    ],
    promoter: {
      id: "494",
      name: "PROMOTED BY VENUE",
      description: "PROMOTED BY VENUE / NTL / USA",
    },
    promoters: [
      {
        id: "494",
        name: "PROMOTED BY VENUE",
        description: "PROMOTED BY VENUE / NTL / USA",
      },
      {
        id: "653",
        name: "LIVE NATION MUSIC",
        description: "LIVE NATION MUSIC / NTL / USA",
      },
    ],
    info: "General parking is included in the final purchase price This show has a General Admission Pit, which is standing room only",
    pleaseNote:
      "General parking is included in the final purchase price This show has a General Admission Pit, which is standing room only Entry requirements are subject to change. By purchasing tickets to this event you agree to abide by entry requirements in effect at the time of the event. Check the venue website leading up to your event for the latest protocol.",
    priceRanges: [
      {
        type: "standard",
        currency: "USD",
        min: 29.5,
        max: 1149.5,
      },
    ],
    products: [
      {
        name: "Imagine Dragons - Early Entry Picnic Upgrade (TICKET NOT INCLUDED)",
        id: "G5vbZ96E5TA6H",
        url: "https://www.ticketmaster.com/imagine-dragons-early-entry-picnic-upgrade-cincinnati-ohio-08-28-2022/event/16005C79CBFC51FC",
        type: "Special Entry",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7n1",
              name: "Miscellaneous",
            },
            genre: {
              id: "KnvZfZ7v7ll",
              name: "Undefined",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vAv1",
              name: "Undefined",
            },
            type: {
              id: "KZAyXgnZfZ7v7nJ",
              name: "Upsell",
            },
            subType: {
              id: "KZFzBErXgnZfZ7v7lv",
              name: "Special Entry",
            },
            family: false,
          },
        ],
      },
    ],
    seatmap: {
      staticUrl:
        "https://maps.ticketmaster.com/maps/geometry/3/event/16005C7304E2757A/staticImage?type=png&systemId=HOST",
    },
    accessibility: {
      info: "IMPORTANT: Accessible tickets are for fans with disabilities and their companions only. Accessible seating is available for patrons in wheelchairs; with mobility or vision impairments, as well as their companions.",
      ticketLimit: 4,
    },
    ticketLimit: {
      info: "There is a six (6) ticket limit for this event.",
    },
    ageRestrictions: {
      legalAgeEnforced: false,
    },
    ticketing: {
      healthCheck: {
        summary: "Health Check Required",
        description:
          "The Event Organizer is requiring Health Checks to attend this event. Please check their website for details.",
        learnMoreUrl:
          "https://blog.ticketmaster.com/what-you-need-to-know-about-required-health-checks",
      },
      safeTix: {
        enabled: false,
      },
    },
    code: "CH6:ERB08282",
    _links: {
      self: {
        href: "/discovery/v2/events/G5vbZ96G7zE4B?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917GSz7?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ917pG-f?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ917QfR7?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/KovZpZA6tdaA?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Riverbend Music Center",
          type: "venue",
          id: "KovZpZA6tdaA",
          test: false,
          url: "https://www.ticketmaster.com/riverbend-music-center-tickets-cincinnati/venue/180337",
          locale: "en-us",
          images: [
            {
              ratio: "3_1",
              url: "https://s1.ticketm.net/dam/v/511/4ac845b3-88dc-4d39-ba3f-5d758dbe5511_526081_SOURCE.jpg",
              width: 1500,
              height: 500,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dbimages/RiverbendMC_OH_180337_4Z.gif",
              width: 205,
              height: 115,
              fallback: false,
            },
          ],
          postalCode: "45230",
          timezone: "America/New_York",
          city: {
            name: "Cincinnati",
          },
          state: {
            name: "Ohio",
            stateCode: "OH",
          },
          country: {
            name: "United States Of America",
            countryCode: "US",
          },
          address: {
            line1: "6295 Kellogg Avenue",
          },
          location: {
            longitude: "-84.416862",
            latitude: "39.052082",
          },
          markets: [
            {
              name: "Cincinnati and Dayton",
              id: "4",
            },
          ],
          dmas: [
            {
              id: 251,
            },
            {
              id: 263,
            },
          ],
          social: {
            twitter: {
              handle: "@riverbendpnc",
            },
          },
          boxOfficeInfo: {
            phoneNumberDetail:
              "Riverbend Music Center General Information - (513)232-6220 Cincinnati Symphony Orchestra - (513)381-3300",
            openHoursDetail:
              "The box office is open during the summer concert season. For seasonal hours please refer to www.riverbend.org",
            acceptedPaymentDetail:
              "The Box Office accepts Visa, MasterCard, American Express, Discover, and Cash.",
            willCallDetail:
              "Will Call tickets can be picked up anytime after 6:00 PM on the evening of the show at the Will Call Window. Customers must present the actual credit card, a picture ID, and the confirmation number.",
          },
          parkingDetail:
            "Parking is included in the final purchase price with your ticket. Parking is good at event lots only.",
          accessibleSeatingDetail:
            "There are accessible seats for this venue available through all points of sale. Patrons MUST SPECIFY if they need seating for the physically challenged, hearing impaired, or visually impaired. A ticket will be sold in the designated ADA section on a best available basis. These seats allow for one to three companions.",
          generalInfo: {
            generalRule:
              "Please visit www.riverbend.org with questions regarding acceptable items. Please refrain from smoking in the Pavilion at all times. Tailgating is never allowed on Riverbend's property or the surrounding lots.",
            childRule:
              "Everyone must have a ticket in the reserved sections of the amphitheatre. Children under 5 years old are admitted free on the lawn when accompanied by a paying adult.",
          },
          upcomingEvents: {
            _total: 32,
            ticketmaster: 32,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/KovZpZA6tdaA?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Imagine Dragons",
          type: "attraction",
          id: "K8vZ917GSz7",
          test: false,
          url: "https://www.ticketmaster.com/imagine-dragons-tickets/artist/1435919",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/channel/UCT9zcQNlyht7fRlcjmflRSA",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/Imaginedragons",
              },
            ],
            itunes: [
              {
                url: "https://music.apple.com/us/artist/imagine-dragons/358714030",
              },
            ],
            lastfm: [
              {
                url: "http://www.last.fm/music/Imagine+Dragons",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/ImagineDragons",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Imagine_Dragons",
              },
            ],
            spotify: [
              {
                url: "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q",
              },
            ],
            instagram: [
              {
                url: "http://instagram.com/imaginedragons/",
              },
              {
                url: "http://instagram.com/imaginedragons",
              },
            ],
            musicbrainz: [
              {
                id: "012151a8-0f9a-44c9-997f-ebd68b5389f9",
              },
            ],
            homepage: [
              {
                url: "http://www.imaginedragonsmusic.com/",
              },
            ],
          },
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7nI",
                name: "Undefined",
              },
              subType: {
                id: "KZFzBErXgnZfZ7v7lJ",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 43,
            mfx_nl: 2,
            tmr: 1,
            mfx_de: 7,
            mfx_es: 6,
            ticketmaster: 23,
            mfx_cz: 2,
            _filtered: 0,
            mfx_se: 2,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917GSz7?locale=en-us",
            },
          },
        },
        {
          name: "Macklemore",
          type: "attraction",
          id: "K8vZ917pG-f",
          test: false,
          url: "https://www.ticketmaster.com/macklemore-tickets/artist/2400469",
          locale: "en-us",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/user/RyanLewisProductions",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/macklemore",
              },
            ],
            lastfm: [
              {
                url: "https://www.last.fm/music/Macklemore",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Macklemore",
              },
            ],
            musicbrainz: [
              {
                id: "b6d7ec94-830c-44dd-b699-ce66556b7e55",
              },
            ],
            homepage: [
              {
                url: "http://macklemore.com/",
              },
            ],
          },
          images: [
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/e68/18f65099-4c1a-4325-94fc-a6e2e7213e68_1315791_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAv1",
                name: "Hip-Hop/Rap",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vkvl",
                name: "Hip-Hop/Rap",
              },
              type: {
                id: "KZAyXgnZfZ7v7la",
                name: "Individual",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAd7",
                name: "Musician",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 23,
            tmr: 1,
            mfx_no: 2,
            ticketmaster: 20,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917pG-f?locale=en-us",
            },
          },
        },
        {
          name: "Kings Elliot",
          type: "attraction",
          id: "K8vZ917QfR7",
          test: false,
          url: "https://www.ticketmaster.com/kings-elliot-tickets/artist/2872896",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: true,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: true,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
                name: "Music",
              },
              genre: {
                id: "KnvZfZ7vAeA",
                name: "Rock",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
                name: "Pop",
              },
              type: {
                id: "KZAyXgnZfZ7v7la",
                name: "Individual",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAde",
                name: "Singer/Vocalist",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 22,
            tmr: 1,
            ticketmaster: 21,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917QfR7?locale=en-us",
            },
          },
        },
      ],
    },
  },
];

module.exports = musicEvents;
const sportEvents = [
  {
    name: "Tampa Bay Rays vs. New York Yankees",
    type: "event",
    id: "Z7r9jZ1AdFEe8",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFEe8",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-05-29T17:40:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-05-29",
        localTime: "13:40:00",
        dateTime: "2022-05-29T17:40:00Z",
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
          id: "KZFzniwnSyZfZ7v7nE",
          name: "Sports",
        },
        genre: {
          id: "KnvZfZ7vAdv",
          name: "Baseball",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7vF1n",
          name: "MLB",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://www.mlb.com/rays",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/tampa-bay-rays-vs-new-york-saint-petersburg-florida-05-29-2022/event/Zu0FM1R0e5t82na",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/graphics/TMResale/2/VenueMaps/1741-840-3-0-TropicanaFieldTampaBayRays.png",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFEe8?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ9171b17?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ9171okV?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/ZFr9jZeFAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Tropicana Field",
          type: "venue",
          id: "ZFr9jZeFAe",
          test: false,
          locale: "en-us",
          postalCode: "33705",
          timezone: "America/New_York",
          city: {
            name: "Saint Petersburg",
          },
          state: {
            name: "Florida",
            stateCode: "FL",
          },
          country: {
            name: "United States Of America",
            countryCode: "US",
          },
          address: {
            line1: "One Tropicana Dr.",
          },
          location: {
            longitude: "-82.646103",
            latitude: "27.737301",
          },
          dmas: [
            {
              id: 396,
            },
          ],
          upcomingEvents: {
            _total: 55,
            tmr: 55,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/ZFr9jZeFAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Tampa Bay Rays",
          type: "attraction",
          id: "K8vZ9171b17",
          test: false,
          url: "https://www.ticketmaster.com/tampa-bay-rays-tickets/artist/806027",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/Raysbaseball",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Tampa_Bay_Rays",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Rays",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/raysbaseball",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/rays",
              },
            ],
          },
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 178,
            tmr: 98,
            ticketmaster: 80,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171b17?locale=en-us",
            },
          },
        },
        {
          name: "New York Yankees",
          type: "attraction",
          id: "K8vZ9171okV",
          test: false,
          url: "https://www.ticketmaster.com/new-york-yankees-tickets/artist/805992",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/Yankees",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/New_York_Yankees",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Yankees",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/yankees",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/yankees",
              },
            ],
          },
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 256,
            tmr: 50,
            ticketmaster: 206,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171okV?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Los Angeles Dodgers vs. Pittsburgh Pirates",
    type: "event",
    id: "Z7r9jZ1AdFYv7",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFYv7",
    locale: "en-us",
    images: [
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-05-31T02:10:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-05-30",
        localTime: "19:10:00",
        dateTime: "2022-05-31T02:10:00Z",
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
          id: "KZFzniwnSyZfZ7v7nE",
          name: "Sports",
        },
        genre: {
          id: "KnvZfZ7vAdv",
          name: "Baseball",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7vF1n",
          name: "MLB",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://www.mlb.com/dodgers",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/los-angeles-dodgers-vs-pittsburgh-pirates-los-angeles-california-05-30-2022/event/Zu0FM1R0e5t8NDF",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/graphics/TMResale/2/VenueMaps/475-481-3-0-DodgerStadiumLADodgers.png",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFYv7?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ9171oA0?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ9171oAV?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZAFke?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Dodger Stadium",
          type: "venue",
          id: "Z6r9jZAFke",
          test: false,
          locale: "en-us",
          images: [
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/v/780/ba52a468-7514-4146-b4ad-a13d99696780_344012_SOURCE.jpg",
              width: 2288,
              height: 1712,
              fallback: false,
              attribution: "CC BY-SA 2.0 via wikipedia",
            },
          ],
          postalCode: "90012",
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
            line1: "1000 Elysian Park Ave.",
          },
          location: {
            longitude: "-118.2388",
            latitude: "34.0658",
          },
          dmas: [
            {
              id: 324,
            },
          ],
          upcomingEvents: {
            _total: 67,
            tmr: 64,
            ticketmaster: 3,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZAFke?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Los Angeles Dodgers",
          type: "attraction",
          id: "K8vZ9171oA0",
          test: false,
          url: "https://www.ticketmaster.com/los-angeles-dodgers-tickets/artist/805959",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/Dodgers",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Los_Angeles_Dodgers",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Dodgers/",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/dodgers/",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/dodgers",
              },
            ],
          },
          aliases: ["dodgers baseball", "los angeles dodgers", "la dodgers"],
          images: [
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 118,
            tmr: 93,
            ticketmaster: 25,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171oA0?locale=en-us",
            },
          },
        },
        {
          name: "Pittsburgh Pirates",
          type: "attraction",
          id: "K8vZ9171oAV",
          test: false,
          url: "https://www.ticketmaster.com/pittsburgh-pirates-tickets/artist/806006",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/Pirates",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Pittsburgh_Pirates",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Pirates",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/pittsburghpirates",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/pirates",
              },
            ],
          },
          images: [
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/aee/a040f9a2-3aea-48d4-a3eb-b2fbc61bcaee_1343851_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/aee/a040f9a2-3aea-48d4-a3eb-b2fbc61bcaee_1343851_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/aee/a040f9a2-3aea-48d4-a3eb-b2fbc61bcaee_1343851_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/aee/a040f9a2-3aea-48d4-a3eb-b2fbc61bcaee_1343851_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/aee/a040f9a2-3aea-48d4-a3eb-b2fbc61bcaee_1343851_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/aee/a040f9a2-3aea-48d4-a3eb-b2fbc61bcaee_1343851_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/aee/a040f9a2-3aea-48d4-a3eb-b2fbc61bcaee_1343851_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/aee/a040f9a2-3aea-48d4-a3eb-b2fbc61bcaee_1343851_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/aee/a040f9a2-3aea-48d4-a3eb-b2fbc61bcaee_1343851_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/aee/a040f9a2-3aea-48d4-a3eb-b2fbc61bcaee_1343851_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 131,
            tmr: 103,
            ticketmaster: 28,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171oAV?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Tampa Bay Rays vs. New York Yankees",
    type: "event",
    id: "Z7r9jZ1AdFEeo",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFEeo",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-05-28T20:10:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-05-28",
        localTime: "16:10:00",
        dateTime: "2022-05-28T20:10:00Z",
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
          id: "KZFzniwnSyZfZ7v7nE",
          name: "Sports",
        },
        genre: {
          id: "KnvZfZ7vAdv",
          name: "Baseball",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7vF1n",
          name: "MLB",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://www.mlb.com/rays",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/tampa-bay-rays-vs-new-york-saint-petersburg-florida-05-28-2022/event/Zu0FM1R0e5t82nV",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/graphics/TMResale/2/VenueMaps/1741-840-3-0-TropicanaFieldTampaBayRays.png",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFEeo?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ9171b17?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ9171okV?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/ZFr9jZeFAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Tropicana Field",
          type: "venue",
          id: "ZFr9jZeFAe",
          test: false,
          locale: "en-us",
          postalCode: "33705",
          timezone: "America/New_York",
          city: {
            name: "Saint Petersburg",
          },
          state: {
            name: "Florida",
            stateCode: "FL",
          },
          country: {
            name: "United States Of America",
            countryCode: "US",
          },
          address: {
            line1: "One Tropicana Dr.",
          },
          location: {
            longitude: "-82.646103",
            latitude: "27.737301",
          },
          dmas: [
            {
              id: 396,
            },
          ],
          upcomingEvents: {
            _total: 55,
            tmr: 55,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/ZFr9jZeFAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Tampa Bay Rays",
          type: "attraction",
          id: "K8vZ9171b17",
          test: false,
          url: "https://www.ticketmaster.com/tampa-bay-rays-tickets/artist/806027",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/Raysbaseball",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Tampa_Bay_Rays",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Rays",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/raysbaseball",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/rays",
              },
            ],
          },
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/8d0/697e0f0b-9251-4e7c-a2cc-69d0d47778d0_1343331_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 178,
            tmr: 98,
            ticketmaster: 80,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171b17?locale=en-us",
            },
          },
        },
        {
          name: "New York Yankees",
          type: "attraction",
          id: "K8vZ9171okV",
          test: false,
          url: "https://www.ticketmaster.com/new-york-yankees-tickets/artist/805992",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/Yankees",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/New_York_Yankees",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Yankees",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/yankees",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/yankees",
              },
            ],
          },
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 256,
            tmr: 50,
            ticketmaster: 206,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171okV?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Los Angeles Dodgers vs. New York Mets",
    type: "event",
    id: "Z7r9jZ1AdFYvA",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFYvA",
    locale: "en-us",
    images: [
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-03T02:10:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-02",
        localTime: "19:10:00",
        dateTime: "2022-06-03T02:10:00Z",
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
          id: "KZFzniwnSyZfZ7v7nE",
          name: "Sports",
        },
        genre: {
          id: "KnvZfZ7vAdv",
          name: "Baseball",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7vF1n",
          name: "MLB",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://www.mlb.com/dodgers",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/los-angeles-dodgers-vs-new-york-los-angeles-california-06-02-2022/event/Zu0FM1R0e5t8ND5",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/graphics/TMResale/2/VenueMaps/475-481-3-0-DodgerStadiumLADodgers.png",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFYvA?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ9171oA0?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ91718B7?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZAFke?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Dodger Stadium",
          type: "venue",
          id: "Z6r9jZAFke",
          test: false,
          locale: "en-us",
          images: [
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/v/780/ba52a468-7514-4146-b4ad-a13d99696780_344012_SOURCE.jpg",
              width: 2288,
              height: 1712,
              fallback: false,
              attribution: "CC BY-SA 2.0 via wikipedia",
            },
          ],
          postalCode: "90012",
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
            line1: "1000 Elysian Park Ave.",
          },
          location: {
            longitude: "-118.2388",
            latitude: "34.0658",
          },
          dmas: [
            {
              id: 324,
            },
          ],
          upcomingEvents: {
            _total: 67,
            tmr: 64,
            ticketmaster: 3,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZAFke?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Los Angeles Dodgers",
          type: "attraction",
          id: "K8vZ9171oA0",
          test: false,
          url: "https://www.ticketmaster.com/los-angeles-dodgers-tickets/artist/805959",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/Dodgers",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Los_Angeles_Dodgers",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Dodgers/",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/dodgers/",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/dodgers",
              },
            ],
          },
          aliases: ["dodgers baseball", "los angeles dodgers", "la dodgers"],
          images: [
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 117,
            tmr: 93,
            ticketmaster: 24,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171oA0?locale=en-us",
            },
          },
        },
        {
          name: "New York Mets",
          type: "attraction",
          id: "K8vZ91718B7",
          test: false,
          url: "https://www.ticketmaster.com/new-york-mets-tickets/artist/805990",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/Mets",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/New_York_Mets",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Mets",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/mets",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/mets",
              },
            ],
          },
          aliases: ["ny mets", "new york mets"],
          images: [
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 125,
            tmr: 100,
            ticketmaster: 25,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ91718B7?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "San Francisco Giants vs. Los Angeles Dodgers",
    type: "event",
    id: "Z7r9jZ1AdF0ZV",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdF0ZV",
    locale: "en-us",
    images: [
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-11T23:15:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-11",
        localTime: "16:15:00",
        dateTime: "2022-06-11T23:15:00Z",
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
          id: "KZFzniwnSyZfZ7v7nE",
          name: "Sports",
        },
        genre: {
          id: "KnvZfZ7vAdv",
          name: "Baseball",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7vF1n",
          name: "MLB",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://www.mlb.com/giants",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/san-francisco-giants-vs-los-angeles-san-francisco-california-06-11-2022/event/Zu0FM1R0e5t8v0O",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/graphics/TMResale/2/VenueMaps/1265-759-3-1-ATTParkSFGiants.png",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdF0ZV?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ91718Df?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ9171oA0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/ZFr9jZed6k?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Oracle Park",
          type: "venue",
          id: "ZFr9jZed6k",
          test: false,
          locale: "en-us",
          postalCode: "94107",
          timezone: "America/Los_Angeles",
          city: {
            name: "San Francisco",
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
            line1: "24 Willie Mays Plaza",
            line2: "-",
          },
          location: {
            longitude: "-122.395203",
            latitude: "37.7757",
          },
          dmas: [
            {
              id: 382,
            },
            {
              id: 801,
            },
          ],
          upcomingEvents: {
            _total: 59,
            tmr: 57,
            ticketmaster: 2,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/ZFr9jZed6k?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "San Francisco Giants",
          type: "attraction",
          id: "K8vZ91718Df",
          test: false,
          url: "https://www.ticketmaster.com/san-francisco-giants-tickets/artist/806016",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/SFGiants",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/San_Francisco_Giants",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Giants",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/SFGiants",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/giants",
              },
            ],
          },
          aliases: ["sf giants", "san francisco giants"],
          images: [
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 117,
            tmr: 87,
            ticketmaster: 30,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ91718Df?locale=en-us",
            },
          },
        },
        {
          name: "Los Angeles Dodgers",
          type: "attraction",
          id: "K8vZ9171oA0",
          test: false,
          url: "https://www.ticketmaster.com/los-angeles-dodgers-tickets/artist/805959",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/Dodgers",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Los_Angeles_Dodgers",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Dodgers/",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/dodgers/",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/dodgers",
              },
            ],
          },
          aliases: ["dodgers baseball", "los angeles dodgers", "la dodgers"],
          images: [
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 117,
            tmr: 93,
            ticketmaster: 24,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171oA0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Los Angeles Dodgers vs. Pittsburgh Pirates",
    type: "event",
    id: "Z7r9jZ1AdFYve",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFYve",
    locale: "en-us",
    images: [
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-01T02:10:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-05-31",
        localTime: "19:10:00",
        dateTime: "2022-06-01T02:10:00Z",
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
          id: "KZFzniwnSyZfZ7v7nE",
          name: "Sports",
        },
        genre: {
          id: "KnvZfZ7vAdv",
          name: "Baseball",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7vF1n",
          name: "MLB",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://www.mlb.com/dodgers",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/los-angeles-dodgers-vs-pittsburgh-pirates-los-angeles-california-05-31-2022/event/Zu0FM1R0e5t8NDn",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/graphics/TMResale/2/VenueMaps/475-481-3-0-DodgerStadiumLADodgers.png",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFYve?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ9171oA0?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ9171oAV?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZAFke?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Dodger Stadium",
          type: "venue",
          id: "Z6r9jZAFke",
          test: false,
          locale: "en-us",
          images: [
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/v/780/ba52a468-7514-4146-b4ad-a13d99696780_344012_SOURCE.jpg",
              width: 2288,
              height: 1712,
              fallback: false,
              attribution: "CC BY-SA 2.0 via wikipedia",
            },
          ],
          postalCode: "90012",
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
            line1: "1000 Elysian Park Ave.",
          },
          location: {
            longitude: "-118.2388",
            latitude: "34.0658",
          },
          dmas: [
            {
              id: 324,
            },
          ],
          upcomingEvents: {
            _total: 67,
            tmr: 64,
            ticketmaster: 3,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZAFke?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Los Angeles Dodgers",
          type: "attraction",
          id: "K8vZ9171oA0",
          test: false,
          url: "https://www.ticketmaster.com/los-angeles-dodgers-tickets/artist/805959",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/Dodgers",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Los_Angeles_Dodgers",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Dodgers/",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/dodgers/",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/dodgers",
              },
            ],
          },
          aliases: ["dodgers baseball", "los angeles dodgers", "la dodgers"],
          images: [
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 118,
            tmr: 93,
            ticketmaster: 25,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171oA0?locale=en-us",
            },
          },
        },
        {
          name: "Pittsburgh Pirates",
          type: "attraction",
          id: "K8vZ9171oAV",
          test: false,
          url: "https://www.ticketmaster.com/pittsburgh-pirates-tickets/artist/806006",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/Pirates",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Pittsburgh_Pirates",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Pirates",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/pittsburghpirates",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/pirates",
              },
            ],
          },
          images: [
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/aee/a040f9a2-3aea-48d4-a3eb-b2fbc61bcaee_1343851_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/aee/a040f9a2-3aea-48d4-a3eb-b2fbc61bcaee_1343851_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/aee/a040f9a2-3aea-48d4-a3eb-b2fbc61bcaee_1343851_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/aee/a040f9a2-3aea-48d4-a3eb-b2fbc61bcaee_1343851_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/aee/a040f9a2-3aea-48d4-a3eb-b2fbc61bcaee_1343851_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/aee/a040f9a2-3aea-48d4-a3eb-b2fbc61bcaee_1343851_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/aee/a040f9a2-3aea-48d4-a3eb-b2fbc61bcaee_1343851_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/aee/a040f9a2-3aea-48d4-a3eb-b2fbc61bcaee_1343851_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/aee/a040f9a2-3aea-48d4-a3eb-b2fbc61bcaee_1343851_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/aee/a040f9a2-3aea-48d4-a3eb-b2fbc61bcaee_1343851_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 131,
            tmr: 103,
            ticketmaster: 28,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171oAV?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "San Francisco Giants vs. Los Angeles Dodgers",
    type: "event",
    id: "Z7r9jZ1AdF0ZI",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdF0ZI",
    locale: "en-us",
    images: [
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-11T02:15:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-10",
        localTime: "19:15:00",
        dateTime: "2022-06-11T02:15:00Z",
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
          id: "KZFzniwnSyZfZ7v7nE",
          name: "Sports",
        },
        genre: {
          id: "KnvZfZ7vAdv",
          name: "Baseball",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7vF1n",
          name: "MLB",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://www.mlb.com/giants",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/san-francisco-giants-vs-los-angeles-san-francisco-california-06-10-2022/event/Zu0FM1R0e5t8v0K",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/graphics/TMResale/2/VenueMaps/1265-759-3-1-ATTParkSFGiants.png",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdF0ZI?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ91718Df?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ9171oA0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/ZFr9jZed6k?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Oracle Park",
          type: "venue",
          id: "ZFr9jZed6k",
          test: false,
          locale: "en-us",
          postalCode: "94107",
          timezone: "America/Los_Angeles",
          city: {
            name: "San Francisco",
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
            line1: "24 Willie Mays Plaza",
            line2: "-",
          },
          location: {
            longitude: "-122.395203",
            latitude: "37.7757",
          },
          dmas: [
            {
              id: 382,
            },
            {
              id: 801,
            },
          ],
          upcomingEvents: {
            _total: 59,
            tmr: 57,
            ticketmaster: 2,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/ZFr9jZed6k?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "San Francisco Giants",
          type: "attraction",
          id: "K8vZ91718Df",
          test: false,
          url: "https://www.ticketmaster.com/san-francisco-giants-tickets/artist/806016",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/SFGiants",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/San_Francisco_Giants",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Giants",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/SFGiants",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/giants",
              },
            ],
          },
          aliases: ["sf giants", "san francisco giants"],
          images: [
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 117,
            tmr: 87,
            ticketmaster: 30,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ91718Df?locale=en-us",
            },
          },
        },
        {
          name: "Los Angeles Dodgers",
          type: "attraction",
          id: "K8vZ9171oA0",
          test: false,
          url: "https://www.ticketmaster.com/los-angeles-dodgers-tickets/artist/805959",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/Dodgers",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Los_Angeles_Dodgers",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Dodgers/",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/dodgers/",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/dodgers",
              },
            ],
          },
          aliases: ["dodgers baseball", "los angeles dodgers", "la dodgers"],
          images: [
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 117,
            tmr: 93,
            ticketmaster: 24,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171oA0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Los Angeles Dodgers vs. New York Mets",
    type: "event",
    id: "Z7r9jZ1AdFYvk",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFYvk",
    locale: "en-us",
    images: [
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-04T02:10:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-03",
        localTime: "19:10:00",
        dateTime: "2022-06-04T02:10:00Z",
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
          id: "KZFzniwnSyZfZ7v7nE",
          name: "Sports",
        },
        genre: {
          id: "KnvZfZ7vAdv",
          name: "Baseball",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7vF1n",
          name: "MLB",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://www.mlb.com/dodgers",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/los-angeles-dodgers-vs-new-york-los-angeles-california-06-03-2022/event/Zu0FM1R0e5t8NDY",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/graphics/TMResale/2/VenueMaps/475-481-3-0-DodgerStadiumLADodgers.png",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFYvk?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ9171oA0?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ91718B7?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZAFke?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Dodger Stadium",
          type: "venue",
          id: "Z6r9jZAFke",
          test: false,
          locale: "en-us",
          images: [
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/v/780/ba52a468-7514-4146-b4ad-a13d99696780_344012_SOURCE.jpg",
              width: 2288,
              height: 1712,
              fallback: false,
              attribution: "CC BY-SA 2.0 via wikipedia",
            },
          ],
          postalCode: "90012",
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
            line1: "1000 Elysian Park Ave.",
          },
          location: {
            longitude: "-118.2388",
            latitude: "34.0658",
          },
          dmas: [
            {
              id: 324,
            },
          ],
          upcomingEvents: {
            _total: 67,
            tmr: 64,
            ticketmaster: 3,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZAFke?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Los Angeles Dodgers",
          type: "attraction",
          id: "K8vZ9171oA0",
          test: false,
          url: "https://www.ticketmaster.com/los-angeles-dodgers-tickets/artist/805959",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/Dodgers",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Los_Angeles_Dodgers",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Dodgers/",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/dodgers/",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/dodgers",
              },
            ],
          },
          aliases: ["dodgers baseball", "los angeles dodgers", "la dodgers"],
          images: [
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 117,
            tmr: 93,
            ticketmaster: 24,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171oA0?locale=en-us",
            },
          },
        },
        {
          name: "New York Mets",
          type: "attraction",
          id: "K8vZ91718B7",
          test: false,
          url: "https://www.ticketmaster.com/new-york-mets-tickets/artist/805990",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/Mets",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/New_York_Mets",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Mets",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/mets",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/mets",
              },
            ],
          },
          aliases: ["ny mets", "new york mets"],
          images: [
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 125,
            tmr: 100,
            ticketmaster: 25,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ91718B7?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "San Francisco Giants vs. Los Angeles Dodgers",
    type: "event",
    id: "Z7r9jZ1AdF0Z6",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdF0Z6",
    locale: "en-us",
    images: [
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-12T20:05:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-12",
        localTime: "13:05:00",
        dateTime: "2022-06-12T20:05:00Z",
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
          id: "KZFzniwnSyZfZ7v7nE",
          name: "Sports",
        },
        genre: {
          id: "KnvZfZ7vAdv",
          name: "Baseball",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7vF1n",
          name: "MLB",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://www.mlb.com/giants",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/san-francisco-giants-vs-los-angeles-san-francisco-california-06-12-2022/event/Zu0FM1R0e5t8v06",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/graphics/TMResale/2/VenueMaps/1265-759-3-1-ATTParkSFGiants.png",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdF0Z6?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ91718Df?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ9171oA0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/ZFr9jZed6k?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Oracle Park",
          type: "venue",
          id: "ZFr9jZed6k",
          test: false,
          locale: "en-us",
          postalCode: "94107",
          timezone: "America/Los_Angeles",
          city: {
            name: "San Francisco",
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
            line1: "24 Willie Mays Plaza",
            line2: "-",
          },
          location: {
            longitude: "-122.395203",
            latitude: "37.7757",
          },
          dmas: [
            {
              id: 382,
            },
            {
              id: 801,
            },
          ],
          upcomingEvents: {
            _total: 59,
            tmr: 57,
            ticketmaster: 2,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/ZFr9jZed6k?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "San Francisco Giants",
          type: "attraction",
          id: "K8vZ91718Df",
          test: false,
          url: "https://www.ticketmaster.com/san-francisco-giants-tickets/artist/806016",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/SFGiants",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/San_Francisco_Giants",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Giants",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/SFGiants",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/giants",
              },
            ],
          },
          aliases: ["sf giants", "san francisco giants"],
          images: [
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/f3a/ed4308d3-9689-452a-90ab-f2881fca7f3a_1343801_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 117,
            tmr: 87,
            ticketmaster: 30,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ91718Df?locale=en-us",
            },
          },
        },
        {
          name: "Los Angeles Dodgers",
          type: "attraction",
          id: "K8vZ9171oA0",
          test: false,
          url: "https://www.ticketmaster.com/los-angeles-dodgers-tickets/artist/805959",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/Dodgers",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Los_Angeles_Dodgers",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Dodgers/",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/dodgers/",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/dodgers",
              },
            ],
          },
          aliases: ["dodgers baseball", "los angeles dodgers", "la dodgers"],
          images: [
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 117,
            tmr: 93,
            ticketmaster: 24,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171oA0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Los Angeles Dodgers vs. Los Angeles Angels",
    type: "event",
    id: "Z7r9jZ1AdFYva",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFYva",
    locale: "en-us",
    images: [
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-15T02:10:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-14",
        localTime: "19:10:00",
        dateTime: "2022-06-15T02:10:00Z",
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
          id: "KZFzniwnSyZfZ7v7nE",
          name: "Sports",
        },
        genre: {
          id: "KnvZfZ7vAdv",
          name: "Baseball",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7vF1n",
          name: "MLB",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://www.mlb.com/dodgers",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/los-angeles-dodgers-vs-los-angeles-los-angeles-california-06-14-2022/event/Zu0FM1R0e5t8NDJ",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/graphics/TMResale/2/VenueMaps/475-481-3-0-DodgerStadiumLADodgers.png",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFYva?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ9171oA0?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ91718D0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZAFke?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Dodger Stadium",
          type: "venue",
          id: "Z6r9jZAFke",
          test: false,
          locale: "en-us",
          images: [
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/v/780/ba52a468-7514-4146-b4ad-a13d99696780_344012_SOURCE.jpg",
              width: 2288,
              height: 1712,
              fallback: false,
              attribution: "CC BY-SA 2.0 via wikipedia",
            },
          ],
          postalCode: "90012",
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
            line1: "1000 Elysian Park Ave.",
          },
          location: {
            longitude: "-118.2388",
            latitude: "34.0658",
          },
          dmas: [
            {
              id: 324,
            },
          ],
          upcomingEvents: {
            _total: 67,
            tmr: 64,
            ticketmaster: 3,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZAFke?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Los Angeles Dodgers",
          type: "attraction",
          id: "K8vZ9171oA0",
          test: false,
          url: "https://www.ticketmaster.com/los-angeles-dodgers-tickets/artist/805959",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/Dodgers",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Los_Angeles_Dodgers",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Dodgers/",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/dodgers/",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/dodgers",
              },
            ],
          },
          aliases: ["dodgers baseball", "los angeles dodgers", "la dodgers"],
          images: [
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 117,
            tmr: 93,
            ticketmaster: 24,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171oA0?locale=en-us",
            },
          },
        },
        {
          name: "Los Angeles Angels",
          type: "attraction",
          id: "K8vZ91718D0",
          test: false,
          url: "https://www.ticketmaster.com/los-angeles-angels-tickets/artist/805892",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/Angels",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Los_Angeles_Angels",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Angels",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/angels/",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/angels",
              },
            ],
          },
          aliases: [
            "anahiem angels",
            "anaheim angels",
            "angels baseball",
            "los angeles angels",
          ],
          images: [
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/33b/156b75e5-0e4b-497b-8d9e-0c81ce9e833b_1344201_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/33b/156b75e5-0e4b-497b-8d9e-0c81ce9e833b_1344201_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/33b/156b75e5-0e4b-497b-8d9e-0c81ce9e833b_1344201_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/33b/156b75e5-0e4b-497b-8d9e-0c81ce9e833b_1344201_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/33b/156b75e5-0e4b-497b-8d9e-0c81ce9e833b_1344201_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/33b/156b75e5-0e4b-497b-8d9e-0c81ce9e833b_1344201_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/33b/156b75e5-0e4b-497b-8d9e-0c81ce9e833b_1344201_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/33b/156b75e5-0e4b-497b-8d9e-0c81ce9e833b_1344201_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/33b/156b75e5-0e4b-497b-8d9e-0c81ce9e833b_1344201_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/33b/156b75e5-0e4b-497b-8d9e-0c81ce9e833b_1344201_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 141,
            tmr: 97,
            ticketmaster: 44,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ91718D0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Los Angeles Dodgers vs. New York Mets",
    type: "event",
    id: "Z7r9jZ1AdFYvF",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFYvF",
    locale: "en-us",
    images: [
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-05T20:10:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-05",
        localTime: "13:10:00",
        dateTime: "2022-06-05T20:10:00Z",
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
          id: "KZFzniwnSyZfZ7v7nE",
          name: "Sports",
        },
        genre: {
          id: "KnvZfZ7vAdv",
          name: "Baseball",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7vF1n",
          name: "MLB",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://www.mlb.com/dodgers",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/los-angeles-dodgers-vs-new-york-los-angeles-california-06-05-2022/event/Zu0FM1R0e5t8ND8",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/graphics/TMResale/2/VenueMaps/475-481-3-0-DodgerStadiumLADodgers.png",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFYvF?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ9171oA0?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ91718B7?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZAFke?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Dodger Stadium",
          type: "venue",
          id: "Z6r9jZAFke",
          test: false,
          locale: "en-us",
          images: [
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/v/780/ba52a468-7514-4146-b4ad-a13d99696780_344012_SOURCE.jpg",
              width: 2288,
              height: 1712,
              fallback: false,
              attribution: "CC BY-SA 2.0 via wikipedia",
            },
          ],
          postalCode: "90012",
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
            line1: "1000 Elysian Park Ave.",
          },
          location: {
            longitude: "-118.2388",
            latitude: "34.0658",
          },
          dmas: [
            {
              id: 324,
            },
          ],
          upcomingEvents: {
            _total: 67,
            tmr: 64,
            ticketmaster: 3,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZAFke?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Los Angeles Dodgers",
          type: "attraction",
          id: "K8vZ9171oA0",
          test: false,
          url: "https://www.ticketmaster.com/los-angeles-dodgers-tickets/artist/805959",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/Dodgers",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Los_Angeles_Dodgers",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Dodgers/",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/dodgers/",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/dodgers",
              },
            ],
          },
          aliases: ["dodgers baseball", "los angeles dodgers", "la dodgers"],
          images: [
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 117,
            tmr: 93,
            ticketmaster: 24,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171oA0?locale=en-us",
            },
          },
        },
        {
          name: "New York Mets",
          type: "attraction",
          id: "K8vZ91718B7",
          test: false,
          url: "https://www.ticketmaster.com/new-york-mets-tickets/artist/805990",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/Mets",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/New_York_Mets",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Mets",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/mets",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/mets",
              },
            ],
          },
          aliases: ["ny mets", "new york mets"],
          images: [
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 125,
            tmr: 100,
            ticketmaster: 25,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ91718B7?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Boston Red Sox vs. New York Yankees",
    type: "event",
    id: "Z7r9jZ1AdFN_N",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFN_N",
    locale: "en-us",
    images: [
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-07-08T23:10:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-07-08",
        localTime: "19:10:00",
        dateTime: "2022-07-08T23:10:00Z",
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
          id: "KZFzniwnSyZfZ7v7nE",
          name: "Sports",
        },
        genre: {
          id: "KnvZfZ7vAdv",
          name: "Baseball",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7vF1n",
          name: "MLB",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://www.mlb.com/redsox",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/boston-red-sox-vs-new-york-boston-massachusetts-07-08-2022/event/Zu0FM1R0e5t8bPb",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/graphics/TMResale/1/VenueMaps/551-107-3-0-FenwayParkBostonRedSox.png",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFN_N?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ9171okf?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ9171okV?locale=en-us",
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
            _total: 87,
            tmr: 71,
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
          name: "Boston Red Sox",
          type: "attraction",
          id: "K8vZ9171okf",
          test: false,
          url: "https://www.ticketmaster.com/boston-red-sox-tickets/artist/805904",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/redsox",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Boston_Red_Sox",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/RedSox",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/redsox",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/redsox",
              },
            ],
          },
          images: [
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 159,
            tmr: 100,
            ticketmaster: 59,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171okf?locale=en-us",
            },
          },
        },
        {
          name: "New York Yankees",
          type: "attraction",
          id: "K8vZ9171okV",
          test: false,
          url: "https://www.ticketmaster.com/new-york-yankees-tickets/artist/805992",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/Yankees",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/New_York_Yankees",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Yankees",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/yankees",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/yankees",
              },
            ],
          },
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 256,
            tmr: 50,
            ticketmaster: 206,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171okV?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Los Angeles Dodgers vs. Pittsburgh Pirates",
    type: "event",
    id: "Z7r9jZ1AdFYvd",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFYvd",
    locale: "en-us",
    images: [
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-02T00:10:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-01",
        localTime: "17:10:00",
        dateTime: "2022-06-02T00:10:00Z",
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
          id: "KZFzniwnSyZfZ7v7nE",
          name: "Sports",
        },
        genre: {
          id: "KnvZfZ7vAdv",
          name: "Baseball",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7vF1n",
          name: "MLB",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://www.mlb.com/dodgers",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/los-angeles-dodgers-vs-pittsburgh-pirates-los-angeles-california-06-01-2022/event/Zu0FM1R0e5t8NDt",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/graphics/TMResale/2/VenueMaps/475-481-3-0-DodgerStadiumLADodgers.png",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFYvd?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ9171oA0?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ9171oAV?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZAFke?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Dodger Stadium",
          type: "venue",
          id: "Z6r9jZAFke",
          test: false,
          locale: "en-us",
          images: [
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/v/780/ba52a468-7514-4146-b4ad-a13d99696780_344012_SOURCE.jpg",
              width: 2288,
              height: 1712,
              fallback: false,
              attribution: "CC BY-SA 2.0 via wikipedia",
            },
          ],
          postalCode: "90012",
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
            line1: "1000 Elysian Park Ave.",
          },
          location: {
            longitude: "-118.2388",
            latitude: "34.0658",
          },
          dmas: [
            {
              id: 324,
            },
          ],
          upcomingEvents: {
            _total: 67,
            tmr: 64,
            ticketmaster: 3,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZAFke?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Los Angeles Dodgers",
          type: "attraction",
          id: "K8vZ9171oA0",
          test: false,
          url: "https://www.ticketmaster.com/los-angeles-dodgers-tickets/artist/805959",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/Dodgers",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Los_Angeles_Dodgers",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Dodgers/",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/dodgers/",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/dodgers",
              },
            ],
          },
          aliases: ["dodgers baseball", "los angeles dodgers", "la dodgers"],
          images: [
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 118,
            tmr: 93,
            ticketmaster: 25,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171oA0?locale=en-us",
            },
          },
        },
        {
          name: "Pittsburgh Pirates",
          type: "attraction",
          id: "K8vZ9171oAV",
          test: false,
          url: "https://www.ticketmaster.com/pittsburgh-pirates-tickets/artist/806006",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/Pirates",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Pittsburgh_Pirates",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Pirates",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/pittsburghpirates",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/pirates",
              },
            ],
          },
          images: [
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/aee/a040f9a2-3aea-48d4-a3eb-b2fbc61bcaee_1343851_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/aee/a040f9a2-3aea-48d4-a3eb-b2fbc61bcaee_1343851_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/aee/a040f9a2-3aea-48d4-a3eb-b2fbc61bcaee_1343851_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/aee/a040f9a2-3aea-48d4-a3eb-b2fbc61bcaee_1343851_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/aee/a040f9a2-3aea-48d4-a3eb-b2fbc61bcaee_1343851_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/aee/a040f9a2-3aea-48d4-a3eb-b2fbc61bcaee_1343851_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/aee/a040f9a2-3aea-48d4-a3eb-b2fbc61bcaee_1343851_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/aee/a040f9a2-3aea-48d4-a3eb-b2fbc61bcaee_1343851_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/aee/a040f9a2-3aea-48d4-a3eb-b2fbc61bcaee_1343851_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/aee/a040f9a2-3aea-48d4-a3eb-b2fbc61bcaee_1343851_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 131,
            tmr: 103,
            ticketmaster: 28,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171oAV?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Seattle Seahawks vs. Denver Broncos",
    type: "event",
    id: "vvG1HZ9anLHoEI",
    test: false,
    url: "https://www.ticketmaster.com/seattle-seahawks-vs-denver-broncos-seattle-washington-09-12-2022/event/0F005C9A9FF119E8",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c75/edea12b6-7239-4bdf-a0bb-afa002d9ec75_1325461_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c75/edea12b6-7239-4bdf-a0bb-afa002d9ec75_1325461_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c75/edea12b6-7239-4bdf-a0bb-afa002d9ec75_1325461_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c75/edea12b6-7239-4bdf-a0bb-afa002d9ec75_1325461_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c75/edea12b6-7239-4bdf-a0bb-afa002d9ec75_1325461_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c75/edea12b6-7239-4bdf-a0bb-afa002d9ec75_1325461_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c75/edea12b6-7239-4bdf-a0bb-afa002d9ec75_1325461_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c75/edea12b6-7239-4bdf-a0bb-afa002d9ec75_1325461_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c75/edea12b6-7239-4bdf-a0bb-afa002d9ec75_1325461_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/c75/edea12b6-7239-4bdf-a0bb-afa002d9ec75_1325461_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "2022-05-12T22:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-09-13T01:15:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-09-12",
        localTime: "17:15:00",
        dateTime: "2022-09-13T00:15:00Z",
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
          id: "KZFzniwnSyZfZ7v7nE",
          name: "Sports",
        },
        genre: {
          id: "KnvZfZ7vAdE",
          name: "Football",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7vFE1",
          name: "NFL",
        },
        type: {
          id: "KZAyXgnZfZ7v7l1",
          name: "Group",
        },
        subType: {
          id: "KZFzBErXgnZfZ7vA7d",
          name: "Team",
        },
        family: false,
      },
    ],
    promoter: {
      id: "705",
      name: "NFL REGULAR SEASON",
      description: "NFL REGULAR SEASON / NTL / USA",
    },
    promoters: [
      {
        id: "705",
        name: "NFL REGULAR SEASON",
        description: "NFL REGULAR SEASON / NTL / USA",
      },
      {
        id: "4635",
        name: "SEATGEEK",
        description: "SEATGEEK / NTL / USA",
      },
    ],
    priceRanges: [
      {
        type: "standard",
        currency: "USD",
        min: 175,
        max: 1275,
      },
    ],
    seatmap: {
      staticUrl:
        "https://maps.ticketmaster.com/maps/geometry/3/event/0F005C9A9FF119E8/staticImage?type=png&systemId=HOST",
    },
    accessibility: {
      ticketLimit: 4,
    },
    ticketLimit: {
      info: "There is an overall 8 ticket limit for this event.",
    },
    ageRestrictions: {
      legalAgeEnforced: false,
    },
    code: "SEA:ELF22DEN",
    _links: {
      self: {
        href: "/discovery/v2/events/vvG1HZ9anLHoEI?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ9171oU7?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ9171og7?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/KovZpZAEknnA?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lumen Field",
          type: "venue",
          id: "KovZpZAEknnA",
          test: false,
          url: "https://www.ticketmaster.com/lumen-field-tickets-seattle/venue/123449",
          locale: "en-us",
          aliases: ["seahawk stadium", "seahawks stadium", "qwest field"],
          postalCode: "98134",
          timezone: "America/Los_Angeles",
          city: {
            name: "Seattle",
          },
          state: {
            name: "Washington",
            stateCode: "WA",
          },
          country: {
            name: "United States Of America",
            countryCode: "US",
          },
          address: {
            line1: "800 Occidental Ave S",
          },
          location: {
            longitude: "-122.331607",
            latitude: "47.595083",
          },
          markets: [
            {
              name: "Seattle Area",
              id: "42",
            },
          ],
          dmas: [
            {
              id: 385,
            },
            {
              id: 391,
            },
            {
              id: 418,
            },
          ],
          boxOfficeInfo: {
            phoneNumberDetail: "Gameday: (206) 381-7848",
            openHoursDetail:
              "Open 3 hours prior to kickoff on gameday. Weekday hours will vary. Located in the Northwest corner of the Stadium.",
            acceptedPaymentDetail:
              "Visa, MasterCard, American Express, Discover and Cash.",
            willCallDetail:
              "Located at Northwest corner of Lumen Field. Opens 3 Hours prior to kickoff on gameday.",
          },
          parkingDetail:
            "Lumen Field manages three parking lots: the North Lot, Lumen Field Event Center Garage, and Union Station Garage. Gameday parking costs may vary. For further information please call the Seahawks ticket office at 1-888-NFL-HAWK (1-888-635-4295) or visit www.ipmseattle.com",
          accessibleSeatingDetail:
            "There are disabled seats (wheelchair convertible) dispersed through all areas and price levels of Lumen Field. Disabled seating and access for all is fully compliant with the Americans with Disabilities Act, (ADA).",
          generalInfo: {
            generalRule: "",
            childRule:
              "Children under the age of 3 are free but must sit on adult's lap.",
          },
          upcomingEvents: {
            _total: 34,
            ticketmaster: 34,
            _filtered: 0,
          },
          ada: {
            adaPhones: "206-381-7848",
            adaCustomCopy: "ADA seats are available",
            adaHours:
              "Varies by event. Seahawks: 3 hours prior to game. For Concerts and other events: Generally 90 minutes prior to event. Lumen Field & Lumen Field Field Event Center is located in the Northwest corner of the Stadium. Box Office hours vary by season. ",
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/KovZpZAEknnA?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Seattle Seahawks",
          type: "attraction",
          id: "K8vZ9171oU7",
          test: false,
          url: "https://www.ticketmaster.com/seattle-seahawks-tickets/artist/806020",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/Seahawks",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Seahawks/",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Seattle_Seahawks",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/seahawks/",
              },
            ],
            homepage: [
              {
                url: "https://www.seahawks.com/",
              },
            ],
          },
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c75/edea12b6-7239-4bdf-a0bb-afa002d9ec75_1325461_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c75/edea12b6-7239-4bdf-a0bb-afa002d9ec75_1325461_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c75/edea12b6-7239-4bdf-a0bb-afa002d9ec75_1325461_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c75/edea12b6-7239-4bdf-a0bb-afa002d9ec75_1325461_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c75/edea12b6-7239-4bdf-a0bb-afa002d9ec75_1325461_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c75/edea12b6-7239-4bdf-a0bb-afa002d9ec75_1325461_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c75/edea12b6-7239-4bdf-a0bb-afa002d9ec75_1325461_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c75/edea12b6-7239-4bdf-a0bb-afa002d9ec75_1325461_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c75/edea12b6-7239-4bdf-a0bb-afa002d9ec75_1325461_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/c75/edea12b6-7239-4bdf-a0bb-afa002d9ec75_1325461_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdE",
                name: "Football",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vFE1",
                name: "NFL",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 20,
            tmr: 1,
            ticketmaster: 19,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171oU7?locale=en-us",
            },
          },
        },
        {
          name: "Denver Broncos",
          type: "attraction",
          id: "K8vZ9171og7",
          test: false,
          url: "https://www.ticketmaster.com/denver-broncos-tickets/artist/805934",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/broncos",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Broncos/",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Denver_Broncos",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/broncos/",
              },
            ],
            homepage: [
              {
                url: "https://www.denverbroncos.com/",
              },
            ],
          },
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/288/a45a97f0-10a7-4850-82f1-1a36a2989288_1325131_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/288/a45a97f0-10a7-4850-82f1-1a36a2989288_1325131_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/288/a45a97f0-10a7-4850-82f1-1a36a2989288_1325131_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/288/a45a97f0-10a7-4850-82f1-1a36a2989288_1325131_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/288/a45a97f0-10a7-4850-82f1-1a36a2989288_1325131_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/288/a45a97f0-10a7-4850-82f1-1a36a2989288_1325131_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/288/a45a97f0-10a7-4850-82f1-1a36a2989288_1325131_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/288/a45a97f0-10a7-4850-82f1-1a36a2989288_1325131_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/288/a45a97f0-10a7-4850-82f1-1a36a2989288_1325131_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/288/a45a97f0-10a7-4850-82f1-1a36a2989288_1325131_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdE",
                name: "Football",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vFE1",
                name: "NFL",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 20,
            tmr: 1,
            ticketmaster: 19,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171og7?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Boston Red Sox vs. New York Yankees",
    type: "event",
    id: "Z7r9jZ1AdFN_A",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFN_A",
    locale: "en-us",
    images: [
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-07-07T23:10:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-07-07",
        localTime: "19:10:00",
        dateTime: "2022-07-07T23:10:00Z",
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
          id: "KZFzniwnSyZfZ7v7nE",
          name: "Sports",
        },
        genre: {
          id: "KnvZfZ7vAdv",
          name: "Baseball",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7vF1n",
          name: "MLB",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://www.mlb.com/redsox",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/boston-red-sox-vs-new-york-boston-massachusetts-07-07-2022/event/Zu0FM1R0e5t8bP5",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/graphics/TMResale/1/VenueMaps/551-107-3-0-FenwayParkBostonRedSox.png",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFN_A?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ9171okf?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ9171okV?locale=en-us",
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
            _total: 87,
            tmr: 71,
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
          name: "Boston Red Sox",
          type: "attraction",
          id: "K8vZ9171okf",
          test: false,
          url: "https://www.ticketmaster.com/boston-red-sox-tickets/artist/805904",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/redsox",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Boston_Red_Sox",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/RedSox",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/redsox",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/redsox",
              },
            ],
          },
          images: [
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 159,
            tmr: 100,
            ticketmaster: 59,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171okf?locale=en-us",
            },
          },
        },
        {
          name: "New York Yankees",
          type: "attraction",
          id: "K8vZ9171okV",
          test: false,
          url: "https://www.ticketmaster.com/new-york-yankees-tickets/artist/805992",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/Yankees",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/New_York_Yankees",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Yankees",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/yankees",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/yankees",
              },
            ],
          },
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 256,
            tmr: 50,
            ticketmaster: 206,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171okV?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Las Vegas Raiders Vs San Francisco 49ers",
    type: "event",
    id: "G5vjZ9a1z--CQ",
    test: false,
    url: "https://www.ticketmaster.com/las-vegas-raiders-vs-san-francisco-las-vegas-nevada-01-01-2023/event/17005C92B886139A",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "2022-05-13T00:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2023-01-01T23:05:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2023-01-01",
        localTime: "13:05:00",
        dateTime: "2023-01-01T21:05:00Z",
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
          id: "KZFzniwnSyZfZ7v7nE",
          name: "Sports",
        },
        genre: {
          id: "KnvZfZ7vAdE",
          name: "Football",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7vFE1",
          name: "NFL",
        },
        type: {
          id: "KZAyXgnZfZ7v7l1",
          name: "Group",
        },
        subType: {
          id: "KZFzBErXgnZfZ7vA7d",
          name: "Team",
        },
        family: false,
      },
    ],
    promoter: {
      id: "705",
      name: "NFL REGULAR SEASON",
      description: "NFL REGULAR SEASON / NTL / USA",
    },
    promoters: [
      {
        id: "705",
        name: "NFL REGULAR SEASON",
        description: "NFL REGULAR SEASON / NTL / USA",
      },
    ],
    priceRanges: [
      {
        type: "standard",
        currency: "USD",
        min: 200,
        max: 800,
      },
    ],
    products: [
      {
        name: "PARKING - Raiders Vs 49ers",
        id: "G5vjZ9aCA0v72",
        url: "https://www.ticketmaster.com/parking-raiders-vs-49ers-las-vegas-nevada-01-01-2023/event/17005C938590110F",
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
        "https://maps.ticketmaster.com/maps/geometry/3/event/17005C92B886139A/staticImage?type=png&systemId=HOST",
    },
    accessibility: {
      ticketLimit: 4,
    },
    ageRestrictions: {
      legalAgeEnforced: false,
    },
    code: "NEV:ERAD2SAN",
    _links: {
      self: {
        href: "/discovery/v2/events/G5vjZ9a1z--CQ?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ9171oVV?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ9171oMV?locale=en-us",
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
            _total: 58,
            tmr: 6,
            ticketmaster: 52,
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
          name: "Las Vegas Raiders",
          type: "attraction",
          id: "K8vZ9171oVV",
          test: false,
          url: "https://www.ticketmaster.com/las-vegas-raiders-tickets/artist/805994",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://www.twitter.com/raiders",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/raiders",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Las_Vegas_Raiders",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/raiders",
              },
            ],
            homepage: [
              {
                url: "https://www.raiders.com/",
              },
            ],
          },
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdE",
                name: "Football",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vFE1",
                name: "NFL",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 22,
            ticketmaster: 22,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171oVV?locale=en-us",
            },
          },
        },
        {
          name: "San Francisco 49ers",
          type: "attraction",
          id: "K8vZ9171oMV",
          test: false,
          url: "https://www.ticketmaster.com/san-francisco-49ers-tickets/artist/806015",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/49ers",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/SANFRANCISCO49ERS/",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/San_Francisco_49ers",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/49ers/",
              },
            ],
            homepage: [
              {
                url: "https://www.49ers.com/",
              },
            ],
          },
          aliases: ["niners", "sfo 49ers"],
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/b7d/d7460515-712c-4e09-b404-69c1b86e7b7d_1325511_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/b7d/d7460515-712c-4e09-b404-69c1b86e7b7d_1325511_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/b7d/d7460515-712c-4e09-b404-69c1b86e7b7d_1325511_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/b7d/d7460515-712c-4e09-b404-69c1b86e7b7d_1325511_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/b7d/d7460515-712c-4e09-b404-69c1b86e7b7d_1325511_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/b7d/d7460515-712c-4e09-b404-69c1b86e7b7d_1325511_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/b7d/d7460515-712c-4e09-b404-69c1b86e7b7d_1325511_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/b7d/d7460515-712c-4e09-b404-69c1b86e7b7d_1325511_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/b7d/d7460515-712c-4e09-b404-69c1b86e7b7d_1325511_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/b7d/d7460515-712c-4e09-b404-69c1b86e7b7d_1325511_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdE",
                name: "Football",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vFE1",
                name: "NFL",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 19,
            ticketmaster: 19,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171oMV?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Buffalo Bills vs. Tennessee Titans",
    type: "event",
    id: "k7vGF9anxhJp5",
    test: false,
    url: "https://www.ticketmaster.com/buffalo-bills-vs-tennessee-titans-orchard-park-new-york-09-19-2022/event/00005C9AA26E658B",
    locale: "en-us",
    images: [
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/b37/f62cde9b-e0b9-4791-8d0b-929f42b7bb37_1325001_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/b37/f62cde9b-e0b9-4791-8d0b-929f42b7bb37_1325001_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/b37/f62cde9b-e0b9-4791-8d0b-929f42b7bb37_1325001_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/b37/f62cde9b-e0b9-4791-8d0b-929f42b7bb37_1325001_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/b37/f62cde9b-e0b9-4791-8d0b-929f42b7bb37_1325001_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/b37/f62cde9b-e0b9-4791-8d0b-929f42b7bb37_1325001_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/b37/f62cde9b-e0b9-4791-8d0b-929f42b7bb37_1325001_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/b37/f62cde9b-e0b9-4791-8d0b-929f42b7bb37_1325001_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/b37/f62cde9b-e0b9-4791-8d0b-929f42b7bb37_1325001_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/b37/f62cde9b-e0b9-4791-8d0b-929f42b7bb37_1325001_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "2022-05-09T12:10:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-09-20T00:15:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-09-19",
        localTime: "19:15:00",
        dateTime: "2022-09-19T23:15:00Z",
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
          id: "KZFzniwnSyZfZ7v7nE",
          name: "Sports",
        },
        genre: {
          id: "KnvZfZ7vAdE",
          name: "Football",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7vFE1",
          name: "NFL",
        },
        type: {
          id: "KZAyXgnZfZ7v7l1",
          name: "Group",
        },
        subType: {
          id: "KZFzBErXgnZfZ7vA7d",
          name: "Team",
        },
        family: false,
      },
    ],
    promoter: {
      id: "705",
      name: "NFL REGULAR SEASON",
      description: "NFL REGULAR SEASON / NTL / USA",
    },
    promoters: [
      {
        id: "705",
        name: "NFL REGULAR SEASON",
        description: "NFL REGULAR SEASON / NTL / USA",
      },
    ],
    priceRanges: [
      {
        type: "standard",
        currency: "USD",
        min: 159,
        max: 590,
      },
    ],
    seatmap: {
      staticUrl:
        "https://maps.ticketmaster.com/maps/geometry/3/event/00005C9AA26E658B/staticImage?type=png&systemId=HOST",
    },
    accessibility: {
      ticketLimit: 50,
      url: "http://prod.static.bills.clubs.nfl.com/assets/pdf/ticket-office-policies.pdf",
      urlText: "For Buffalo Bills Seating Policies",
    },
    ticketLimit: {
      info: "There is an eight (8) ticket limit for this event. Alcohol-Free area and Bluezone - Limit of six (6) tickets per game, per account",
    },
    ageRestrictions: {
      legalAgeEnforced: false,
    },
    code: "NY1:EVZTEN22",
    _links: {
      self: {
        href: "/discovery/v2/events/k7vGF9anxhJp5?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ9171oGf?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ91719u7?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/KovZpZAdJ1vA?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Highmark Stadium",
          type: "venue",
          id: "KovZpZAdJ1vA",
          test: false,
          url: "https://www.ticketmaster.com/highmark-stadium-tickets-orchard-park/venue/154",
          locale: "en-us",
          aliases: ["new era field", "bills stadium"],
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dbimages/22189v.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
          ],
          postalCode: "14127",
          timezone: "America/New_York",
          city: {
            name: "Orchard Park",
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
            line1: "1 Bills Drive",
          },
          location: {
            longitude: "-78.786955",
            latitude: "42.773743",
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
            phoneNumberDetail: "1-877-BB-TICKS (228-4257)",
            openHoursDetail:
              "Box Office Hours Season Hours: 9am - 5pm, Monday - Friday 9am - 1pm, Saturdays before home games Open 4 hours prior to kick off on game days through the end of the 3rd Quarter Off Season Hours: 9am - 5pm, Monday - Friday For Buffalo Bills Tickets Only.",
            acceptedPaymentDetail:
              "Cash - Visa - MasterCard - American Express - Discover",
            willCallDetail:
              "The Will Call Booth at Highmark Stadium is located in between gates 3 and 4. Guests may pick up their pre-paid tickets on game day. This location is open 4 hours prior to kickoff. PROPER PHOTO IDENTIFICATION IS REQUIRED. Tickets will only be released to the person who purchased the tickets.",
          },
          parkingDetail: "https://www.buffalobills.com/stadium/",
          accessibleSeatingDetail:
            "Available at the Box Office and through Ticketmaster. Phone #: 1-877-BB-TICKS (228-4257) https://www.buffalobills.com/tickets/policies",
          generalInfo: {
            generalRule:
              "A complete collection of all stadium policies and procedures can be found in the Buffalo Bills Stadium Guide or online at https://www.buffalobills.com/stadium/. For any questions or clarifications on these policies, please contact a customer service representative at 1-877-BB-TICKS (228-4257).",
            childRule:
              "All Children 2 years of age and older must have a ticket. Children under the age of 2 do not need a ticket and are expected to sit on the lap of a parent or guardian during the game.",
          },
          upcomingEvents: {
            _total: 13,
            ticketmaster: 13,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/KovZpZAdJ1vA?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Buffalo Bills",
          type: "attraction",
          id: "K8vZ9171oGf",
          test: false,
          url: "https://www.ticketmaster.com/buffalo-bills-tickets/artist/805905",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/buffalobills",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/BuffaloBills/",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Buffalo_Bills",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/buffalobills/",
              },
            ],
            homepage: [
              {
                url: "https://www.buffalobills.com/",
              },
            ],
          },
          images: [
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/b37/f62cde9b-e0b9-4791-8d0b-929f42b7bb37_1325001_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/b37/f62cde9b-e0b9-4791-8d0b-929f42b7bb37_1325001_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/b37/f62cde9b-e0b9-4791-8d0b-929f42b7bb37_1325001_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/b37/f62cde9b-e0b9-4791-8d0b-929f42b7bb37_1325001_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/b37/f62cde9b-e0b9-4791-8d0b-929f42b7bb37_1325001_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/b37/f62cde9b-e0b9-4791-8d0b-929f42b7bb37_1325001_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/b37/f62cde9b-e0b9-4791-8d0b-929f42b7bb37_1325001_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/b37/f62cde9b-e0b9-4791-8d0b-929f42b7bb37_1325001_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/b37/f62cde9b-e0b9-4791-8d0b-929f42b7bb37_1325001_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/b37/f62cde9b-e0b9-4791-8d0b-929f42b7bb37_1325001_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdE",
                name: "Football",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vFE1",
                name: "NFL",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 21,
            ticketmaster: 21,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171oGf?locale=en-us",
            },
          },
        },
        {
          name: "Tennessee Titans",
          type: "attraction",
          id: "K8vZ91719u7",
          test: false,
          url: "https://www.ticketmaster.com/tennessee-titans-tickets/artist/806030",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/titans",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/titans",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Tennessee_Titans",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/titans",
              },
            ],
            homepage: [
              {
                url: "https://www.tennesseetitans.com/",
              },
            ],
          },
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4dd/e507c701-281a-4eff-8e6d-a636153e24dd_1325331_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4dd/e507c701-281a-4eff-8e6d-a636153e24dd_1325331_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4dd/e507c701-281a-4eff-8e6d-a636153e24dd_1325331_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4dd/e507c701-281a-4eff-8e6d-a636153e24dd_1325331_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/4dd/e507c701-281a-4eff-8e6d-a636153e24dd_1325331_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4dd/e507c701-281a-4eff-8e6d-a636153e24dd_1325331_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/4dd/e507c701-281a-4eff-8e6d-a636153e24dd_1325331_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4dd/e507c701-281a-4eff-8e6d-a636153e24dd_1325331_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/4dd/e507c701-281a-4eff-8e6d-a636153e24dd_1325331_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/4dd/e507c701-281a-4eff-8e6d-a636153e24dd_1325331_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdE",
                name: "Football",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vFE1",
                name: "NFL",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 20,
            ticketmaster: 20,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ91719u7?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Atlanta Braves vs. Los Angeles Dodgers",
    type: "event",
    id: "vvG1zZpUJ2Fxb3",
    test: false,
    url: "https://www.ticketmaster.com/atlanta-braves-vs-los-angeles-dodgers-atlanta-georgia-06-25-2022/event/0E005B698F222612",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/880/2c96bb81-1225-423b-9ce3-86a3c2565880_1344381_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/880/2c96bb81-1225-423b-9ce3-86a3c2565880_1344381_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/880/2c96bb81-1225-423b-9ce3-86a3c2565880_1344381_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/880/2c96bb81-1225-423b-9ce3-86a3c2565880_1344381_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/880/2c96bb81-1225-423b-9ce3-86a3c2565880_1344381_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/880/2c96bb81-1225-423b-9ce3-86a3c2565880_1344381_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/880/2c96bb81-1225-423b-9ce3-86a3c2565880_1344381_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/880/2c96bb81-1225-423b-9ce3-86a3c2565880_1344381_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/880/2c96bb81-1225-423b-9ce3-86a3c2565880_1344381_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/880/2c96bb81-1225-423b-9ce3-86a3c2565880_1344381_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "2021-11-19T17:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-26T01:15:00Z",
      },
      presales: [
        {
          startDateTime: "2021-11-18T14:00:00Z",
          endDateTime: "2021-11-19T14:00:00Z",
          name: "Corporate Partner Presale",
        },
        {
          startDateTime: "2021-11-18T16:00:00Z",
          endDateTime: "2021-11-19T14:00:00Z",
          name: "Braves Friends & Family Presale",
        },
        {
          startDateTime: "2021-11-18T18:00:00Z",
          endDateTime: "2021-11-19T14:00:00Z",
          name: "Braves RU Presale",
        },
        {
          startDateTime: "2021-11-19T15:00:00Z",
          endDateTime: "2021-11-19T16:59:00Z",
          name: "Mastercard Presale",
          description: "Mastercard must be used to purchase tickets.",
        },
      ],
    },
    dates: {
      start: {
        localDate: "2022-06-25",
        localTime: "19:15:00",
        dateTime: "2022-06-25T23:15:00Z",
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
          id: "KZFzniwnSyZfZ7v7nE",
          name: "Sports",
        },
        genre: {
          id: "KnvZfZ7vAdv",
          name: "Baseball",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7vF1n",
          name: "MLB",
        },
        type: {
          id: "KZAyXgnZfZ7v7l1",
          name: "Group",
        },
        subType: {
          id: "KZFzBErXgnZfZ7vA7d",
          name: "Team",
        },
        family: false,
      },
    ],
    promoter: {
      id: "685",
      name: "MLB REGULAR SEASON",
      description: "MLB REGULAR SEASON / NTL / USA",
    },
    promoters: [
      {
        id: "685",
        name: "MLB REGULAR SEASON",
        description: "MLB REGULAR SEASON / NTL / USA",
      },
    ],
    pleaseNote:
      "Ticket holder assumes all risk of injury from balls and bats entering the stands. For more information on which seating sections have netting or screening in front of them, please visit braves.com/netting. If you purchase tickets, you may receive customer service messages via email from the Atlanta Braves, including optional surveys regarding your baseball experience. Please adhere to published ticket limits. If you exceed the ticket limit, you may have any or all of your orders and tickets canceled without notice. Delivery will be delayed until March 17, 2022.",
    priceRanges: [
      {
        type: "standard",
        currency: "USD",
        min: 18,
        max: 400,
      },
    ],
    products: [
      {
        name: "Atlanta Braves Batting Practice Experience",
        id: "vvG1zZ9aRjuk2c",
        url: "https://www.ticketmaster.com/atlanta-braves-batting-practice-experience-atlanta-georgia-06-25-2022/event/0E005C9BDC3463ED",
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
        name: "Tours: Truist Park",
        id: "vvG1zZ9emG1o9p",
        url: "https://www.ticketmaster.com/tours-truist-park-atlanta-georgia-06-25-2022/event/0E005C2B8C2915D6",
        type: "Parking",
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7nE",
              name: "Sports",
            },
            genre: {
              id: "KnvZfZ7vAdv",
              name: "Baseball",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7vF1n",
              name: "MLB",
            },
            type: {
              id: "KZAyXgnZfZ7v7lt",
              name: "Event Style",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAvv",
              name: "Sightseeing/Facility",
            },
            family: false,
          },
        ],
      },
      {
        name: "Braves VIP Experience",
        id: "vvG1zZ9kJhdvnH",
        url: "https://www.ticketmaster.com/braves-vip-experience-atlanta-georgia-06-25-2022/event/0E005C699B0C1ABC",
        type: "VIP",
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
              id: "KZAyXgnZfZ7v7lt",
              name: "Event Style",
            },
            subType: {
              id: "KZFzBErXgnZfZ7vAvv",
              name: "Sightseeing/Facility",
            },
            family: false,
          },
        ],
      },
      {
        name: "Atlanta Braves Parking",
        id: "vvG1zZ9kko7xtg",
        url: "https://www.ticketmaster.com/atlanta-braves-parking-atlanta-georgia-06-25-2022/event/0E005C6191122A75",
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
        "https://maps.ticketmaster.com/maps/geometry/3/event/0E005B698F222612/staticImage?type=png&systemId=HOST",
    },
    accessibility: {
      ticketLimit: 19,
    },
    ageRestrictions: {
      legalAgeEnforced: false,
    },
    code: "ATL:EZBB0625",
    _links: {
      self: {
        href: "/discovery/v2/events/vvG1zZpUJ2Fxb3?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ9171oA7?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ9171oA0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/KovZpZAtv11A?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Truist Park",
          type: "venue",
          id: "KovZpZAtv11A",
          test: false,
          url: "https://www.ticketmaster.com/truist-park-tickets-atlanta/venue/115786",
          locale: "en-us",
          aliases: ["suntrust park"],
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dbimages/21892v.jpg",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/v/59a/5a485c8d-cd7f-4a4d-b374-f2c6a372059a_320972_SOURCE.jpg",
              width: 3456,
              height: 2304,
              fallback: false,
              attribution: "CC0 via wikipedia",
            },
          ],
          postalCode: "30339",
          timezone: "America/New_York",
          city: {
            name: "Atlanta",
          },
          state: {
            name: "Georgia",
            stateCode: "GA",
          },
          country: {
            name: "United States Of America",
            countryCode: "US",
          },
          address: {
            line1: "755 Battery Avenue",
          },
          location: {
            longitude: "-84.468127",
            latitude: "33.890304",
          },
          markets: [
            {
              name: "Atlanta",
              id: "10",
            },
          ],
          dmas: [
            {
              id: 220,
            },
            {
              id: 221,
            },
            {
              id: 258,
            },
            {
              id: 327,
            },
            {
              id: 384,
            },
          ],
          boxOfficeInfo: {
            phoneNumberDetail:
              "404.522.7630 Braves Switchboard 404.577.9100 Groups sales and season tickets",
            openHoursDetail:
              "10:00am - 4:00pm - Mon-Fri (NON-GAME DAYS) 10:00am - 4:00pm - Sat (NON-GAME DAY) Noon - 4:00pm - Sun (NON-GAME DAY) 10:00am - 6th inning of the game (GAME DAYS)",
            acceptedPaymentDetail:
              "CASH,VISA,DISCOVER,MASTERCARD,AMERICAN EXPRESS",
            willCallDetail:
              "HOURS : Opens 2 hrs prior to game time. Located on Battery Avenue, around the corner from the Right Field Gate PLEASE BRING A PICTURE ID, THE ACTUAL CREDIT CARD USED TO PURCHASE THE TICKETS, AND YOUR ORDER NUMBER.",
          },
          parkingDetail:
            "There are a number of parking lots surrounding Truist Park for pre-paid and cash customers. It is recommended that guests arrive early and use the Waze app to be navigated directly to their parking lot. Guests should also check braves.com/parking for details on their parking lot. BUS, LIMOUSINE & ALL OTHER OVERSIZED VEHICLE parking is available in Lot 29 off of Circle 75 Parkway. There is a designated passenger drop-off location near the third-base gate. HANDICAPPED PARKING is available on a first-come, first-serve basis in the Red Deck and Lot 29, both off of Circle 75 Parkway. Only vehicles with a valid, state issued disabled parking permit or license plate will be permitted to park in the disabled spaces. Parking at the Battery is managed by Laz Parking.",
          accessibleSeatingDetail:
            "Truist Park can accommodate all accessibilities Companion service animals are allowed in Truist Park.",
          generalInfo: {
            generalRule:
              "Outside food and beverages, except for sealed plastic water bottles, are not allowed inside the gates of Truist Park on game days. However, guests can enjoy food and beverages from The Battery Atlanta outside in the plaza.",
            childRule:
              "Children 3 and older must have a ticket. Children under 3 are free on lap.",
          },
          upcomingEvents: {
            _total: 129,
            ticketmaster: 129,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/KovZpZAtv11A?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Atlanta Braves",
          type: "attraction",
          id: "K8vZ9171oA7",
          test: false,
          url: "https://www.ticketmaster.com/atlanta-braves-tickets/artist/805896",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/Braves",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Atlanta_Braves",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Braves",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/braves",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/braves",
              },
            ],
          },
          aliases: ["braves baseball"],
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/880/2c96bb81-1225-423b-9ce3-86a3c2565880_1344381_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/880/2c96bb81-1225-423b-9ce3-86a3c2565880_1344381_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/880/2c96bb81-1225-423b-9ce3-86a3c2565880_1344381_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/880/2c96bb81-1225-423b-9ce3-86a3c2565880_1344381_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/880/2c96bb81-1225-423b-9ce3-86a3c2565880_1344381_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/880/2c96bb81-1225-423b-9ce3-86a3c2565880_1344381_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/880/2c96bb81-1225-423b-9ce3-86a3c2565880_1344381_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/880/2c96bb81-1225-423b-9ce3-86a3c2565880_1344381_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/880/2c96bb81-1225-423b-9ce3-86a3c2565880_1344381_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/880/2c96bb81-1225-423b-9ce3-86a3c2565880_1344381_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 122,
            tmr: 50,
            ticketmaster: 72,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171oA7?locale=en-us",
            },
          },
        },
        {
          name: "Los Angeles Dodgers",
          type: "attraction",
          id: "K8vZ9171oA0",
          test: false,
          url: "https://www.ticketmaster.com/los-angeles-dodgers-tickets/artist/805959",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/Dodgers",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Los_Angeles_Dodgers",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Dodgers/",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/dodgers/",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/dodgers",
              },
            ],
          },
          aliases: ["dodgers baseball", "los angeles dodgers", "la dodgers"],
          images: [
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 117,
            tmr: 93,
            ticketmaster: 24,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171oA0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Boston Red Sox vs. New York Yankees",
    type: "event",
    id: "Z7r9jZ1AdFNbI",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFNbI",
    locale: "en-us",
    images: [
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-07-09T23:15:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-07-09",
        localTime: "19:15:00",
        dateTime: "2022-07-09T23:15:00Z",
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
          id: "KZFzniwnSyZfZ7v7nE",
          name: "Sports",
        },
        genre: {
          id: "KnvZfZ7vAdv",
          name: "Baseball",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7vF1n",
          name: "MLB",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://www.mlb.com/redsox",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/boston-red-sox-vs-new-york-boston-massachusetts-07-09-2022/event/Zu0FM1R0e5t8bEK",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/graphics/TMResale/1/VenueMaps/551-107-3-0-FenwayParkBostonRedSox.png",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFNbI?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ9171okf?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ9171okV?locale=en-us",
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
            _total: 87,
            tmr: 71,
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
          name: "Boston Red Sox",
          type: "attraction",
          id: "K8vZ9171okf",
          test: false,
          url: "https://www.ticketmaster.com/boston-red-sox-tickets/artist/805904",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/redsox",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Boston_Red_Sox",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/RedSox",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/redsox",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/redsox",
              },
            ],
          },
          images: [
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 159,
            tmr: 100,
            ticketmaster: 59,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171okf?locale=en-us",
            },
          },
        },
        {
          name: "New York Yankees",
          type: "attraction",
          id: "K8vZ9171okV",
          test: false,
          url: "https://www.ticketmaster.com/new-york-yankees-tickets/artist/805992",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/Yankees",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/New_York_Yankees",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/Yankees",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/yankees",
              },
            ],
            homepage: [
              {
                url: "https://www.mlb.com/yankees",
              },
            ],
          },
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdv",
                name: "Baseball",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vF1n",
                name: "MLB",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 256,
            tmr: 50,
            ticketmaster: 206,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171okV?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Los Angeles Chargers vs. Las Vegas Raiders",
    type: "event",
    id: "vvG1IZ9a9KiSJq",
    test: false,
    url: "https://www.ticketmaster.com/los-angeles-chargers-vs-las-vegas-inglewood-california-09-11-2022/event/0A005C95D3B3399D",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/bd0/e2cf0fbc-7e18-45ee-b651-60f99f94dbd0_1325431_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/bd0/e2cf0fbc-7e18-45ee-b651-60f99f94dbd0_1325431_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/bd0/e2cf0fbc-7e18-45ee-b651-60f99f94dbd0_1325431_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/bd0/e2cf0fbc-7e18-45ee-b651-60f99f94dbd0_1325431_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/bd0/e2cf0fbc-7e18-45ee-b651-60f99f94dbd0_1325431_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/bd0/e2cf0fbc-7e18-45ee-b651-60f99f94dbd0_1325431_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/bd0/e2cf0fbc-7e18-45ee-b651-60f99f94dbd0_1325431_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/bd0/e2cf0fbc-7e18-45ee-b651-60f99f94dbd0_1325431_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/bd0/e2cf0fbc-7e18-45ee-b651-60f99f94dbd0_1325431_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/bd0/e2cf0fbc-7e18-45ee-b651-60f99f94dbd0_1325431_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "2022-05-13T02:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-09-11T21:25:00Z",
      },
      presales: [
        {
          startDateTime: "2022-05-12T22:00:00Z",
          endDateTime: "2022-05-13T02:00:00Z",
          name: "Season Ticket Member Presale",
        },
        {
          startDateTime: "2022-05-13T01:00:00Z",
          endDateTime: "2022-05-13T02:00:00Z",
          name: "Newsletter Members Presale",
        },
      ],
    },
    dates: {
      start: {
        localDate: "2022-09-11",
        localTime: "13:25:00",
        dateTime: "2022-09-11T20:25:00Z",
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
          id: "KZFzniwnSyZfZ7v7nE",
          name: "Sports",
        },
        genre: {
          id: "KnvZfZ7vAdE",
          name: "Football",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7vFE1",
          name: "NFL",
        },
        type: {
          id: "KZAyXgnZfZ7v7l1",
          name: "Group",
        },
        subType: {
          id: "KZFzBErXgnZfZ7vA7d",
          name: "Team",
        },
        family: false,
      },
    ],
    promoter: {
      id: "705",
      name: "NFL REGULAR SEASON",
      description: "NFL REGULAR SEASON / NTL / USA",
    },
    promoters: [
      {
        id: "705",
        name: "NFL REGULAR SEASON",
        description: "NFL REGULAR SEASON / NTL / USA",
      },
    ],
    priceRanges: [
      {
        type: "standard",
        currency: "USD",
        min: 210,
        max: 1175,
      },
    ],
    products: [
      {
        name: "PARKWHIZ SOFI STADIUM",
        id: "vvG1IZ91UIY4sF",
        url: "https://www.ticketmaster.com/parkwhiz-sofi-stadium-inglewood-california-09-11-2022/event/0A005CADA8C15C48",
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
      {
        name: "Parking - Los Angeles Chargers vs Las Vegas Raiders",
        id: "vvG1IZ91h-tPF1",
        url: "https://www.ticketmaster.com/parking-los-angeles-chargers-vs-las-inglewood-california-09-11-2022/event/0A005CA6E1A6520A",
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
        "https://maps.ticketmaster.com/maps/geometry/3/event/0A005C95D3B3399D/staticImage?type=png&systemId=HOST",
    },
    accessibility: {
      ticketLimit: 4,
    },
    ticketLimit: {
      info: "There is an overall ticket limit of 8 for this event.",
    },
    ageRestrictions: {
      legalAgeEnforced: false,
    },
    code: "WES:ELAC2LVR",
    _links: {
      self: {
        href: "/discovery/v2/events/vvG1IZ9a9KiSJq?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ9171og0?locale=en-us",
        },
        {
          href: "/discovery/v2/attractions/K8vZ9171oVV?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/KovZ917ACh0?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "SoFi Stadium",
          type: "venue",
          id: "KovZ917ACh0",
          test: false,
          url: "https://www.ticketmaster.com/sofi-stadium-tickets-inglewood/venue/82789",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dbimages/21790v.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
          ],
          postalCode: "90301",
          timezone: "America/Los_Angeles",
          city: {
            name: "Inglewood",
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
            line1: "1001 S. Stadium Dr",
          },
          location: {
            longitude: "-118.343767",
            latitude: "33.950529",
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
          upcomingEvents: {
            _total: 33,
            ticketmaster: 33,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/KovZ917ACh0?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Los Angeles Chargers",
          type: "attraction",
          id: "K8vZ9171og0",
          test: false,
          url: "https://www.ticketmaster.com/los-angeles-chargers-tickets/artist/806013",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://twitter.com/Chargers",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/chargers/",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Los_Angeles_Chargers",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/chargers/",
              },
            ],
            homepage: [
              {
                url: "https://www.chargers.com/",
              },
            ],
          },
          aliases: [
            "la chargers",
            "l.a. chargers",
            "la charger",
            "l.a. charger",
          ],
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/bd0/e2cf0fbc-7e18-45ee-b651-60f99f94dbd0_1325431_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/bd0/e2cf0fbc-7e18-45ee-b651-60f99f94dbd0_1325431_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/bd0/e2cf0fbc-7e18-45ee-b651-60f99f94dbd0_1325431_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/bd0/e2cf0fbc-7e18-45ee-b651-60f99f94dbd0_1325431_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/bd0/e2cf0fbc-7e18-45ee-b651-60f99f94dbd0_1325431_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/bd0/e2cf0fbc-7e18-45ee-b651-60f99f94dbd0_1325431_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/bd0/e2cf0fbc-7e18-45ee-b651-60f99f94dbd0_1325431_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/bd0/e2cf0fbc-7e18-45ee-b651-60f99f94dbd0_1325431_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/bd0/e2cf0fbc-7e18-45ee-b651-60f99f94dbd0_1325431_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/bd0/e2cf0fbc-7e18-45ee-b651-60f99f94dbd0_1325431_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdE",
                name: "Football",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vFE1",
                name: "NFL",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 20,
            ticketmaster: 20,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171og0?locale=en-us",
            },
          },
        },
        {
          name: "Las Vegas Raiders",
          type: "attraction",
          id: "K8vZ9171oVV",
          test: false,
          url: "https://www.ticketmaster.com/las-vegas-raiders-tickets/artist/805994",
          locale: "en-us",
          externalLinks: {
            twitter: [
              {
                url: "https://www.twitter.com/raiders",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/raiders",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Las_Vegas_Raiders",
              },
            ],
            instagram: [
              {
                url: "https://www.instagram.com/raiders",
              },
            ],
            homepage: [
              {
                url: "https://www.raiders.com/",
              },
            ],
          },
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nE",
                name: "Sports",
              },
              genre: {
                id: "KnvZfZ7vAdE",
                name: "Football",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vFE1",
                name: "NFL",
              },
              type: {
                id: "KZAyXgnZfZ7v7l1",
                name: "Group",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA7d",
                name: "Team",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 22,
            ticketmaster: 22,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ9171oVV?locale=en-us",
            },
          },
        },
      ],
    },
  },
];


module.exports = sportEvents;
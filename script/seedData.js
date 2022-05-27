const test = {
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
          _total: 56,
          tmr: 56,
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
          _total: 179,
          tmr: 99,
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
          _total: 257,
          tmr: 51,
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
};

module.exports = test;
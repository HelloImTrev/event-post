const artEvents = [
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFAq-",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFAq-",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-07-12T23:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-07-12",
        localTime: "19:00:00",
        dateTime: "2022-07-12T23:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-07-12-2022/event/Zu0FM1R0e5t85UZ",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFAq-?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFAjJ",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFAjJ",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-18T17:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-18",
        localTime: "13:00:00",
        dateTime: "2022-06-18T17:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-06-18-2022/event/Zu0FM1R0e5t85Rf",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFAjJ?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1Adu4PA",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1Adu4PA",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T06:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-16T02:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-15",
        localTime: "19:00:00",
        dateTime: "2022-06-16T02:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://sfcurran.com/",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-san-francisco-california-06-15-2022/event/Zu0FM1R0e5tBAQ5",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/437-1-4-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1Adu4PA?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Curran Theatre",
          type: "venue",
          id: "Z6r9jZA7Fe",
          test: false,
          locale: "en-us",
          postalCode: "94102",
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
            line1: "445 Geary St",
          },
          location: {
            longitude: "-122.419502",
            latitude: "37.779499",
          },
          dmas: [
            {
              id: 382,
            },
          ],
          upcomingEvents: {
            _total: 173,
            tmr: 173,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1Adu40s",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1Adu40s",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T06:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-18T20:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-18",
        localTime: "13:00:00",
        dateTime: "2022-06-18T20:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://sfcurran.com/",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-san-francisco-california-06-18-2022/event/Zu0FM1R0e5tBAvz",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/437-1-4-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1Adu40s?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Curran Theatre",
          type: "venue",
          id: "Z6r9jZA7Fe",
          test: false,
          locale: "en-us",
          postalCode: "94102",
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
            line1: "445 Geary St",
          },
          location: {
            longitude: "-122.419502",
            latitude: "37.779499",
          },
          dmas: [
            {
              id: 382,
            },
          ],
          upcomingEvents: {
            _total: 173,
            tmr: 173,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1Adu4Og",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1Adu4Og",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T06:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-18T02:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-17",
        localTime: "19:00:00",
        dateTime: "2022-06-18T02:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://sfcurran.com/",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-san-francisco-california-06-17-2022/event/Zu0FM1R0e5tBA_i",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/437-1-4-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1Adu4Og?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Curran Theatre",
          type: "venue",
          id: "Z6r9jZA7Fe",
          test: false,
          locale: "en-us",
          postalCode: "94102",
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
            line1: "445 Geary St",
          },
          location: {
            longitude: "-122.419502",
            latitude: "37.779499",
          },
          dmas: [
            {
              id: 382,
            },
          ],
          upcomingEvents: {
            _total: 173,
            tmr: 173,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFAq7",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFAq7",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-18T23:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-18",
        localTime: "19:00:00",
        dateTime: "2022-06-18T23:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-06-18-2022/event/Zu0FM1R0e5t85UF",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFAq7?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFAqe",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFAqe",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-16T23:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-16",
        localTime: "19:00:00",
        dateTime: "2022-06-16T23:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-06-16-2022/event/Zu0FM1R0e5t85Un",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFAqe?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1Adu4-M",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1Adu4-M",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T06:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-17T02:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-16",
        localTime: "19:00:00",
        dateTime: "2022-06-17T02:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://sfcurran.com/",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-san-francisco-california-06-16-2022/event/Zu0FM1R0e5tBAZ9",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/437-1-4-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1Adu4-M?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Curran Theatre",
          type: "venue",
          id: "Z6r9jZA7Fe",
          test: false,
          locale: "en-us",
          postalCode: "94102",
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
            line1: "445 Geary St",
          },
          location: {
            longitude: "-122.419502",
            latitude: "37.779499",
          },
          dmas: [
            {
              id: 382,
            },
          ],
          upcomingEvents: {
            _total: 173,
            tmr: 173,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFAjP",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFAjP",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-15T17:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-15",
        localTime: "13:00:00",
        dateTime: "2022-06-15T17:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-06-15-2022/event/Zu0FM1R0e5t85RQ",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFAjP?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFAqv",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFAqv",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-15T23:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-15",
        localTime: "19:00:00",
        dateTime: "2022-06-15T23:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-06-15-2022/event/Zu0FM1R0e5t85UD",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFAqv?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFAqU",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFAqU",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-07-02T17:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-07-02",
        localTime: "13:00:00",
        dateTime: "2022-07-02T17:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-07-02-2022/event/Zu0FM1R0e5t85UL",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFAqU?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFAjE",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFAjE",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-19T17:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-19",
        localTime: "13:00:00",
        dateTime: "2022-06-19T17:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-06-19-2022/event/Zu0FM1R0e5t85R2",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFAjE?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFAqd",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFAqd",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-17T23:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-17",
        localTime: "19:00:00",
        dateTime: "2022-06-17T23:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-06-17-2022/event/Zu0FM1R0e5t85Ut",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFAqd?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFAqk",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFAqk",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-22T23:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-22",
        localTime: "19:00:00",
        dateTime: "2022-06-22T23:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-06-22-2022/event/Zu0FM1R0e5t85UY",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFAqk?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFAjt",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFAjt",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-25T17:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-25",
        localTime: "13:00:00",
        dateTime: "2022-06-25T17:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-06-25-2022/event/Zu0FM1R0e5t85Ry",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFAjt?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1Adu40V",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1Adu40V",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T06:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-19T02:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-18",
        localTime: "19:00:00",
        dateTime: "2022-06-19T02:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://sfcurran.com/",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-san-francisco-california-06-18-2022/event/Zu0FM1R0e5tBAvO",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/437-1-4-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1Adu40V?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Curran Theatre",
          type: "venue",
          id: "Z6r9jZA7Fe",
          test: false,
          locale: "en-us",
          postalCode: "94102",
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
            line1: "445 Geary St",
          },
          location: {
            longitude: "-122.419502",
            latitude: "37.779499",
          },
          dmas: [
            {
              id: 382,
            },
          ],
          upcomingEvents: {
            _total: 173,
            tmr: 173,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFAqA",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFAqA",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-21T23:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-21",
        localTime: "19:00:00",
        dateTime: "2022-06-21T23:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-06-21-2022/event/Zu0FM1R0e5t85U5",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFAqA?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1Ad387P",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1Ad387P",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T06:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-07-17T21:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-07-17",
        localTime: "14:00:00",
        dateTime: "2022-07-17T21:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://sfcurran.com/",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-san-francisco-california-07-17-2022/event/Zu0FM1R0e5t7aFQ",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/437-1-4-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1Ad387P?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Curran Theatre",
          type: "venue",
          id: "Z6r9jZA7Fe",
          test: false,
          locale: "en-us",
          postalCode: "94102",
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
            line1: "445 Geary St",
          },
          location: {
            longitude: "-122.419502",
            latitude: "37.779499",
          },
          dmas: [
            {
              id: 382,
            },
          ],
          upcomingEvents: {
            _total: 173,
            tmr: 173,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFAqo",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFAqo",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-29T23:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-29",
        localTime: "19:00:00",
        dateTime: "2022-06-29T23:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-06-29-2022/event/Zu0FM1R0e5t85UV",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFAqo?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1Ad387E",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1Ad387E",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T06:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-19T21:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-19",
        localTime: "14:00:00",
        dateTime: "2022-06-19T21:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://sfcurran.com/",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-san-francisco-california-06-19-2022/event/Zu0FM1R0e5t7aF2",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/437-1-4-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1Ad387E?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Curran Theatre",
          type: "venue",
          id: "Z6r9jZA7Fe",
          test: false,
          locale: "en-us",
          postalCode: "94102",
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
            line1: "445 Geary St",
          },
          location: {
            longitude: "-122.419502",
            latitude: "37.779499",
          },
          dmas: [
            {
              id: 382,
            },
          ],
          upcomingEvents: {
            _total: 173,
            tmr: 173,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1Ad3A7p",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1Ad3A7p",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T06:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-22T20:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-22",
        localTime: "13:00:00",
        dateTime: "2022-06-22T20:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://sfcurran.com/",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-san-francisco-california-06-22-2022/event/Zu0FM1R0e5t75Fg",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/437-1-4-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1Ad3A7p?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Curran Theatre",
          type: "venue",
          id: "Z6r9jZA7Fe",
          test: false,
          locale: "en-us",
          postalCode: "94102",
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
            line1: "445 Geary St",
          },
          location: {
            longitude: "-122.419502",
            latitude: "37.779499",
          },
          dmas: [
            {
              id: 382,
            },
          ],
          upcomingEvents: {
            _total: 173,
            tmr: 173,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFAre",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFAre",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-07-16T17:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-07-16",
        localTime: "13:00:00",
        dateTime: "2022-07-16T17:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-07-16-2022/event/Zu0FM1R0e5t85Mn",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFAre?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFAOt",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFAOt",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-09-03T17:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-09-03",
        localTime: "13:00:00",
        dateTime: "2022-09-03T17:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-09-03-2022/event/Zu0FM1R0e5t85_y",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFAOt?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1Adu4PN",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1Adu4PN",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T06:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-25T20:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-25",
        localTime: "13:00:00",
        dateTime: "2022-06-25T20:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://sfcurran.com/",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-san-francisco-california-06-25-2022/event/Zu0FM1R0e5tBAQb",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/437-1-4-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1Adu4PN?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Curran Theatre",
          type: "venue",
          id: "Z6r9jZA7Fe",
          test: false,
          locale: "en-us",
          postalCode: "94102",
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
            line1: "445 Geary St",
          },
          location: {
            longitude: "-122.419502",
            latitude: "37.779499",
          },
          dmas: [
            {
              id: 382,
            },
          ],
          upcomingEvents: {
            _total: 173,
            tmr: 173,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1Adu4P7",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1Adu4P7",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T06:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-24T02:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-23",
        localTime: "19:00:00",
        dateTime: "2022-06-24T02:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://sfcurran.com/",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-san-francisco-california-06-23-2022/event/Zu0FM1R0e5tBAQF",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/437-1-4-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1Adu4P7?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Curran Theatre",
          type: "venue",
          id: "Z6r9jZA7Fe",
          test: false,
          locale: "en-us",
          postalCode: "94102",
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
            line1: "445 Geary St",
          },
          location: {
            longitude: "-122.419502",
            latitude: "37.779499",
          },
          dmas: [
            {
              id: 382,
            },
          ],
          upcomingEvents: {
            _total: 173,
            tmr: 173,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFAjI",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFAjI",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-22T17:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-22",
        localTime: "13:00:00",
        dateTime: "2022-06-22T17:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-06-22-2022/event/Zu0FM1R0e5t85RK",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFAjI?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1Adu4--",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1Adu4--",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T06:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-07-30T02:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-07-29",
        localTime: "19:00:00",
        dateTime: "2022-07-30T02:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://sfcurran.com/",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-san-francisco-california-07-29-2022/event/Zu0FM1R0e5tBAZZ",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/437-1-4-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1Adu4--?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Curran Theatre",
          type: "venue",
          id: "Z6r9jZA7Fe",
          test: false,
          locale: "en-us",
          postalCode: "94102",
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
            line1: "445 Geary St",
          },
          location: {
            longitude: "-122.419502",
            latitude: "37.779499",
          },
          dmas: [
            {
              id: 382,
            },
          ],
          upcomingEvents: {
            _total: 173,
            tmr: 173,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFAq8",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFAq8",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-28T23:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-28",
        localTime: "19:00:00",
        dateTime: "2022-06-28T23:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-06-28-2022/event/Zu0FM1R0e5t85Ua",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFAq8?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFAqK",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFAqK",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-07-01T23:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-07-01",
        localTime: "19:00:00",
        dateTime: "2022-07-01T23:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-07-01-2022/event/Zu0FM1R0e5t85U4",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFAqK?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFAq_",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFAq_",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-07-08T23:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-07-08",
        localTime: "19:00:00",
        dateTime: "2022-07-08T23:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-07-08-2022/event/Zu0FM1R0e5t85UP",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFAq_?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFAjY",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFAjY",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-26T17:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-26",
        localTime: "13:00:00",
        dateTime: "2022-06-26T17:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-06-26-2022/event/Zu0FM1R0e5t85RN",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFAjY?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFAq3",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFAq3",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-30T23:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-30",
        localTime: "19:00:00",
        dateTime: "2022-06-30T23:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-06-30-2022/event/Zu0FM1R0e5t85U7",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFAq3?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1Adu4OI",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1Adu4OI",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T06:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-23T02:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-22",
        localTime: "19:00:00",
        dateTime: "2022-06-23T02:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://sfcurran.com/",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-san-francisco-california-06-22-2022/event/Zu0FM1R0e5tBA_K",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/437-1-4-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1Adu4OI?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Curran Theatre",
          type: "venue",
          id: "Z6r9jZA7Fe",
          test: false,
          locale: "en-us",
          postalCode: "94102",
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
            line1: "445 Geary St",
          },
          location: {
            longitude: "-122.419502",
            latitude: "37.779499",
          },
          dmas: [
            {
              id: 382,
            },
          ],
          upcomingEvents: {
            _total: 173,
            tmr: 173,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFAqI",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFAqI",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-07-21T23:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-07-21",
        localTime: "19:00:00",
        dateTime: "2022-07-21T23:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-07-21-2022/event/Zu0FM1R0e5t85UK",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFAqI?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFAq4",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFAq4",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-07-03T23:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-07-03",
        localTime: "19:00:00",
        dateTime: "2022-07-03T23:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-07-03-2022/event/Zu0FM1R0e5t85UA",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFAq4?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFArA",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFArA",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-07-23T17:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-07-23",
        localTime: "13:00:00",
        dateTime: "2022-07-23T17:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-07-23-2022/event/Zu0FM1R0e5t85M5",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFArA?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdaZbP",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdaZbP",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T06:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-07-03T02:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-07-02",
        localTime: "19:00:00",
        dateTime: "2022-07-03T02:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://sfcurran.com/",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-san-francisco-california-07-02-2022/event/Zu0FM1R0e5tJ0EQ",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/437-1-4-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdaZbP?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Curran Theatre",
          type: "venue",
          id: "Z6r9jZA7Fe",
          test: false,
          locale: "en-us",
          postalCode: "94102",
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
            line1: "445 Geary St",
          },
          location: {
            longitude: "-122.419502",
            latitude: "37.779499",
          },
          dmas: [
            {
              id: 382,
            },
          ],
          upcomingEvents: {
            _total: 173,
            tmr: 173,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1Ad387_",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1Ad387_",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T06:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-07-03T21:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-07-03",
        localTime: "14:00:00",
        dateTime: "2022-07-03T21:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://sfcurran.com/",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-san-francisco-california-07-03-2022/event/Zu0FM1R0e5t7aFP",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/437-1-4-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1Ad387_?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Curran Theatre",
          type: "venue",
          id: "Z6r9jZA7Fe",
          test: false,
          locale: "en-us",
          postalCode: "94102",
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
            line1: "445 Geary St",
          },
          location: {
            longitude: "-122.419502",
            latitude: "37.779499",
          },
          dmas: [
            {
              id: 382,
            },
          ],
          upcomingEvents: {
            _total: 173,
            tmr: 173,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFArd",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFArd",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-07-17T19:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-07-17",
        localTime: "15:00:00",
        dateTime: "2022-07-17T19:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-07-17-2022/event/Zu0FM1R0e5t85Mt",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFArd?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1Adu4Pz",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1Adu4Pz",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T06:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-07-07T02:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-07-06",
        localTime: "19:00:00",
        dateTime: "2022-07-07T02:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://sfcurran.com/",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-san-francisco-california-07-06-2022/event/Zu0FM1R0e5tBAQT",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/437-1-4-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1Adu4Pz?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Curran Theatre",
          type: "venue",
          id: "Z6r9jZA7Fe",
          test: false,
          locale: "en-us",
          postalCode: "94102",
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
            line1: "445 Geary St",
          },
          location: {
            longitude: "-122.419502",
            latitude: "37.779499",
          },
          dmas: [
            {
              id: 382,
            },
          ],
          upcomingEvents: {
            _total: 173,
            tmr: 173,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFAqz",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFAqz",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-07-06T17:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-07-06",
        localTime: "13:00:00",
        dateTime: "2022-07-06T17:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-07-06-2022/event/Zu0FM1R0e5t85UT",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFAqz?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1Adu4x9",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1Adu4x9",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T06:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-25T02:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-24",
        localTime: "19:00:00",
        dateTime: "2022-06-25T02:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://sfcurran.com/",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-san-francisco-california-06-24-2022/event/Zu0FM1R0e5tBAW1",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/437-1-4-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1Adu4x9?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Curran Theatre",
          type: "venue",
          id: "Z6r9jZA7Fe",
          test: false,
          locale: "en-us",
          postalCode: "94102",
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
            line1: "445 Geary St",
          },
          location: {
            longitude: "-122.419502",
            latitude: "37.779499",
          },
          dmas: [
            {
              id: 382,
            },
          ],
          upcomingEvents: {
            _total: 173,
            tmr: 173,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFKb3",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFKb3",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T06:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-07-02T02:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-07-01",
        localTime: "19:00:00",
        dateTime: "2022-07-02T02:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://sfcurran.com/",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-san-francisco-california-07-01-2022/event/Zu0FM1R0e5t84E7",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/437-1-4-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFKb3?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Curran Theatre",
          type: "venue",
          id: "Z6r9jZA7Fe",
          test: false,
          locale: "en-us",
          postalCode: "94102",
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
            line1: "445 Geary St",
          },
          location: {
            longitude: "-122.419502",
            latitude: "37.779499",
          },
          dmas: [
            {
              id: 382,
            },
          ],
          upcomingEvents: {
            _total: 173,
            tmr: 173,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1Ad387J",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1Ad387J",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T06:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-06-26T21:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-06-26",
        localTime: "14:00:00",
        dateTime: "2022-06-26T21:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://sfcurran.com/",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-san-francisco-california-06-26-2022/event/Zu0FM1R0e5t7aFf",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/437-1-4-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1Ad387J?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Curran Theatre",
          type: "venue",
          id: "Z6r9jZA7Fe",
          test: false,
          locale: "en-us",
          postalCode: "94102",
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
            line1: "445 Geary St",
          },
          location: {
            longitude: "-122.419502",
            latitude: "37.779499",
          },
          dmas: [
            {
              id: 382,
            },
          ],
          upcomingEvents: {
            _total: 173,
            tmr: 173,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFAqp",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFAqp",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-07-05T23:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-07-05",
        localTime: "19:00:00",
        dateTime: "2022-07-05T23:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-07-05-2022/event/Zu0FM1R0e5t85Ug",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFAqp?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1Adu4xd",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1Adu4xd",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T06:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-07-02T20:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-07-02",
        localTime: "13:00:00",
        dateTime: "2022-07-02T20:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "https://sfcurran.com/",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-san-francisco-california-07-02-2022/event/Zu0FM1R0e5tBAWt",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/437-1-4-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1Adu4xd?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Curran Theatre",
          type: "venue",
          id: "Z6r9jZA7Fe",
          test: false,
          locale: "en-us",
          postalCode: "94102",
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
            line1: "445 Geary St",
          },
          location: {
            longitude: "-122.419502",
            latitude: "37.779499",
          },
          dmas: [
            {
              id: 382,
            },
          ],
          upcomingEvents: {
            _total: 173,
            tmr: 173,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZA7Fe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFAqM",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFAqM",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-07-03T17:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-07-03",
        localTime: "13:00:00",
        dateTime: "2022-07-03T17:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-07-03-2022/event/Zu0FM1R0e5t85U9",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFAqM?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFAqy",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFAqy",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-07-09T17:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-07-09",
        localTime: "13:00:00",
        dateTime: "2022-07-09T17:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-07-09-2022/event/Zu0FM1R0e5t85UX",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFAqy?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFAqb",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFAqb",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-07-07T23:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-07-07",
        localTime: "19:00:00",
        dateTime: "2022-07-07T23:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-07-07-2022/event/Zu0FM1R0e5t85UE",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFAqb?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Harry Potter and the Cursed Child",
    type: "event",
    id: "Z7r9jZ1AdFAqO",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFAqO",
    locale: "en-us",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
        width: 2426,
        height: 1365,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "1900-01-01T18:00:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2022-07-09T23:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2022-07-09",
        localTime: "19:00:00",
        dateTime: "2022-07-09T23:00:00Z",
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
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l6",
          name: "Performance Art",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7l1",
          name: "Performance Art",
        },
        family: false,
      },
    ],
    outlets: [
      {
        url: "http://www.lyricbroadway.com",
        type: "venueBoxOffice",
      },
      {
        url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-new-york-new-york-07-09-2022/event/Zu0FM1R0e5t85U_",
        type: "tmMarketPlace",
      },
    ],
    seatmap: {
      staticUrl:
        "https://content.resale.ticketmaster.com/maps/584-1-1-main.gif",
    },
    _links: {
      self: {
        href: "/discovery/v2/events/Z7r9jZ1AdFAqO?locale=en-us",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Lyric Theatre - NY",
          type: "venue",
          id: "Z6r9jZkaAe",
          test: false,
          locale: "en-us",
          postalCode: "10036",
          timezone: "America/New_York",
          city: {
            name: "New York",
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
            line1: "213 W 42nd St",
          },
          location: {
            longitude: "-73.990196",
            latitude: "40.7593",
          },
          dmas: [
            {
              id: 345,
            },
          ],
          upcomingEvents: {
            _total: 247,
            tmr: 247,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z6r9jZkaAe?locale=en-us",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Harry Potter and the Cursed Child (NY)",
          type: "attraction",
          id: "K8vZ917p1_0",
          test: false,
          url: "https://www.ticketmaster.com/harry-potter-and-the-cursed-child-tickets/artist/2395774",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_SOURCE",
              width: 2426,
              height: 1365,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7na",
                name: "Arts & Theatre",
              },
              genre: {
                id: "KnvZfZ7v7l1",
                name: "Theatre",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7lt",
                name: "Drama",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAAv",
                name: "Undefined",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 617,
            tmr: 420,
            ticketmaster: 197,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917p1_0?locale=en-us",
            },
          },
        },
      ],
    },
  },
];

module.exports = artEvents;
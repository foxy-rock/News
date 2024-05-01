const splide = new Splide(".splide", {
  type: "loop",
  autoplay: "start",
  pagination: 0,
  arrows: 0,
  perPage: 4,
  gap: 12,

  breakpoints: {
    1050: {
      perPage: 3,
    },
    776: {
      perPage: 2,
    },
    500: {
      perPage: 1,
    },
  },
});

splide.mount();

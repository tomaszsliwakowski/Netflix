export default function selectionFilter({ series, films }) {
  return {
    series: [
      {
        title: "Documentaries",
        data: series
          .filter((item) => item.genre === "documentaries")
          .splice(0, 6),
      },
      {
        title: "Comedies",
        data: series.filter((item) => item.genre === "comedies").splice(0, 6),
      },
      {
        title: "Childre",
        data: series.filter((item) => item.genre === "children").splice(0, 6),
      },
      {
        title: "Crime",
        data: series.filter((item) => item.genre === "crime").splice(0, 6),
      },
      {
        title: "Feel Good",
        data: series.filter((item) => item.genre === "feel-good").splice(0, 6),
      },
    ],
    films: [
      {
        title: "Drama",
        data: films.filter((item) => item.genre === "drama").splice(0, 5),
      },
      {
        title: "Thriller",
        data: films.filter((item) => item.genre === "thriller").splice(0, 5),
      },
      {
        title: "Children",
        data: films.filter((item) => item.genre === "children").splice(0, 5),
      },
      {
        title: "Suspense",
        data: films.filter((item) => item.genre === "suspense").splice(0, 5),
      },
      {
        title: "Romance",
        data: films.filter((item) => item.genre === "romance").splice(0, 5),
      },
    ],
  };
}

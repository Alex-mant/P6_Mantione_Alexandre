export const filterBy = (medias) => {
  const navList = document.getElementById("nav-list");
  let mediasFiltered = medias;

  navList.addEventListener("change", () => {
    let currentFilter = navList.value;

    if (currentFilter === "pop") {
      return (mediasFiltered = mediasFiltered.sort(function compare(a, b) {
        if (a.likes > b.likes) return -1;
        if (a.likes < b.likes) return 1;
      }));
    }
    if (currentFilter === "date") {
      return (mediasFiltered = mediasFiltered.sort(function compare(a, b) {
        if (a.date < b.date) return -1;
        if (a.date > b.date) return 1;
      }));
    }
    if (currentFilter === "title") {
      return (mediasFiltered = mediasFiltered.sort(function compare(a, b) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
      }));
    }
  });
  return mediasFiltered;
};

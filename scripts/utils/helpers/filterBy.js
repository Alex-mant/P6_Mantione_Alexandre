export const filterBy = (medias) => {
  const selected = document.querySelector(".selected");
  const options = document.querySelectorAll(".option");
  let mediasFiltered = medias;
  
  options.forEach(opt => {
    opt.addEventListener("click", () => {

      if (selected.innerText === "Popularité") {
        return (mediasFiltered = mediasFiltered.sort(function compare(a, b) {
          if (a.likes > b.likes) return -1;
          if (a.likes < b.likes) return 1;
        }));
      }
      if (selected.innerText === "Date") {
        return (mediasFiltered = mediasFiltered.sort(function compare(a, b) {
          if (a.date < b.date) return -1;
          if (a.date > b.date) return 1;
        }));
      }
      if (selected.innerText === "Titre") {
        return (mediasFiltered = mediasFiltered.sort(function compare(a, b) {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
        }));
      }
    });
  })
  return mediasFiltered;
};

export const filterBy = (medias) => {
  const currentOpt = document.querySelector(".currentOpt");
  const opt2 = document.querySelector(".opt2");
  const opt3 = document.querySelector(".opt3");
  const options = [currentOpt, opt2, opt3];
  let mediasFiltered = medias;

  // Tri par défaut en popularité
  mediasFiltered = mediasFiltered.sort(function compare(a, b){
    if (a.likes > b.likes) return -1;
    if (a.likes < b.likes) return 1;
  });  
  
  options.forEach(opt => {
    opt.addEventListener("click", () => {
      if (currentOpt.innerText === "Popularité") {
        return (mediasFiltered = mediasFiltered.sort(function compare(a, b) {
          if (a.likes > b.likes) return -1;
          if (a.likes < b.likes) return 1;
        }));
      }
      if (currentOpt.innerText === "Date") {
        return (mediasFiltered = mediasFiltered.sort(function compare(a, b) {
          if (a.date < b.date) return -1;
          if (a.date > b.date) return 1;
        }));
      }
      if (currentOpt.innerText === "Titre") {
        return (mediasFiltered = mediasFiltered.sort(function compare(a, b) {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
        }));
      }
    });
  })
  return mediasFiltered;
};

export const getSelectValue = () => {
    const navList = document.getElementById("nav-list");
    navList.addEventListener("change", () =>{
        let currentFilter = navList.value;
        // console.log(currentFilter);
        return currentFilter;
    });
}
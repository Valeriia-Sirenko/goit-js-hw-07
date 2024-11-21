const items = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${items.length}`);

const titles = document.querySelectorAll("#categories h2");
titles.forEach((title) => {
  title.classList.add("categories-title");
});

const mainList = document.getElementById("categories");
mainList.classList.add("categories-list");

items.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const count = item.querySelectorAll("ul li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${count}`);

  const sublist = item.querySelector("ul");
  if (sublist) {
    sublist.classList.add("categories-sublist");

    const listItems = sublist.querySelectorAll("li");
    listItems.forEach((listItem) => {
      listItem.classList.add("categories-sublist-item");
    });
  }
});

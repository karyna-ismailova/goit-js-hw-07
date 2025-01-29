const allCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);
allCategories.forEach((item) => {
    const title = item.querySelector('h2').textContent;
    const amount = item.querySelectorAll('li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${amount}`);
    

} )

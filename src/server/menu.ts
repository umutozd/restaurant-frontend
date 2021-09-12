export interface Menu {
  categories: Category[];
}

export interface Category {
  name: string;
  image: string;
  items: MenuItem[];
}

export interface MenuItem {
  name: string;
  image: string;
  price: number;
}

export function getMenu(): Menu {
  const data = require("./menu.json");
  const menu: Menu = { categories: [] };
  data.forEach((category: any) => {
    const categoryReal: Category = {
      items: [],
      image: category.image,
      name: category.name,
    };
    category.items.forEach((product: any) => {
      categoryReal.items.push({
        name: product.name,
        image: product.image,
        price: product.price,
      });
    });
    menu.categories.push(categoryReal);
  });
  return menu;
}

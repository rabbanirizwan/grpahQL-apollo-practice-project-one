exports.Query = {
  hello: () => {
    return " World";
  },
  products: (parent, args, context) => {
    const { products, reviews } = context;
    const { filter } = args;
    let filteredProducts = products;

    if (filter?.onSale === true) {
      filteredProducts = filteredProducts.filter((val) => val.onSale);
    }

    if ([1, 2, 3, 4, 5].includes(filter?.avgRating)) {
      filteredProducts = filteredProducts.filter((product) => {
        let numOfReviews = 0;
        let sumOfRating = 0;

        reviews.forEach((review) => {
          if (review.productId === product.id) {
            sumOfRating += review.rating;
            numOfReviews++;
          }
        });

        const avgProductRating = sumOfRating / numOfReviews;
        return avgProductRating >= filter?.avgRating;
      });
    }

    return filteredProducts;
  },

  product: (parent, args, context) => {
    const { products } = context;
    return products.find((val) => val.id === args.id);
  },

  categories: (parent, args, context) => {
    const { categories } = context;
    return categories;
  },

  category: (parent, args, context) => {
    const { categories } = context;
    return categories.find((val) => val.id === args.id);
  },
};

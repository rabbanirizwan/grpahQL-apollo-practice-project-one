exports.Category = {
  products: (parent, args, context) => {
    const { products, reviews } = context;
    const categoryId = parent.id;
    const { filter } = args;
    let filterBySale = products;
    filterBySale.filter((product) => product.categoryId == categoryId);

    if (filter?.onSale === true) {
      filterBySale = filterBySale.filter((product) => product.onSale);
    }

    if ([1, 2, 3, 4, 5].includes(filter?.avgRating)) {
      filterBySale = filterBySale.filter((product) => {
        let sumRating = 0;
        let sumReviews = 0;
        reviews.forEach((review) => {
          if (review.productId === product.id) {
            sumRating += review.rating;
            sumReviews++;
          }
        });

        const avgRatingProduct = sumRating / sumReviews;

        return avgRatingProduct >= filter?.avgRating;
      });
    }

    return filterBySale;
  },
};

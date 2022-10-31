exports.Product = {
  category: (parent, args, context) => {
    const { categories } = context;
    const categoryId = parent.categoryId;
    return categories.find((category) => category.id === categoryId);
  },
  reviews:(parent,args,context)=>{
      const {id} = parent;
      const {reviews} = context;
      return reviews.filter(val=>val.productId == id)
  }
};

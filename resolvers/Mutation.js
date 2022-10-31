const { v4: uuid } = require("uuid");

exports.Mutation = {
  addCategory: (parent, args, context) => {
    const {
      input: { name },
    } = args;

    const { categories } = context;
    const newCategory = {
      id: uuid(),
      name: name,
    };

    categories.push(newCategory);

    return newCategory;
  },

  addProduct:(parent,args,context)=>{
      const {products} = context;
  }
};

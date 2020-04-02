module.exports = () => {
  const notes = Array(30)
    .fill("")
    .map((_, i) => ({
      id: i + 1,
      name: `Note ${i + 1}`,
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam ratione esse consequatur enim commodi distinctio? Ipsum asperiores eius fugiat dolore atque libero unde tenetur dolorum mollitia. Eveniet perspiciatis tenetur quos!`
    }));
  return { notes };
};

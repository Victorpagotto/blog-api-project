module.exports = (seq, dt) => {
  const Category = seq.define('Category', {
    id: {
      type: dt.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dt.INTEGER,
      allowNull: false,
    }
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'categories',
  })

  return Category;
};
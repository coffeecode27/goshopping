import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class products extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    productid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    category: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'categories',
        key: 'categoryid'
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'products',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "products_pkey",
        unique: true,
        fields: [
          { name: "productid" },
        ]
      },
    ]
  });
  }
}

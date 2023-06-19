import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class itemproducts extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    cartid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    product: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'products',
        key: 'productid'
      }
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    subtotal: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    users: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'users',
        key: 'userid'
      }
    }
  }, {
    sequelize,
    tableName: 'itemproducts',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "itemproducts_pkey",
        unique: true,
        fields: [
          { name: "cartid" },
        ]
      },
    ]
  });
  }
}

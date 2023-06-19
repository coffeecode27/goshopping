import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class orderlineitem extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    orderline_id: {
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
    orders: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'orders',
        key: 'orderid'
      }
    }
  }, {
    sequelize,
    tableName: 'orderlineitem',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "orderlineitem_pkey",
        unique: true,
        fields: [
          { name: "orderline_id" },
        ]
      },
    ]
  });
  }
}

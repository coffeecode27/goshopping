import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class orders extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    orderid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    orderno: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "(PO-"
    },
    users: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'users',
        key: 'userid'
      }
    },
    totalprice: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'orders',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "orders_pkey",
        unique: true,
        fields: [
          { name: "orderid" },
        ]
      },
    ]
  });
  }
}

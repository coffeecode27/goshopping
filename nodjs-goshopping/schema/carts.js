import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class carts extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    cart: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'carts',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "carts_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class categories extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    categoryid: {
      type: DataTypes.UUID,
      allowNull: true,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    categoryname: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'categories',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "categories_pkey",
        unique: true,
        fields: [
          { name: "categoryid" },
        ]
      },
    ]
  });
  }
}

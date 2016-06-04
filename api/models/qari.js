'use strict';
module.exports = function(sequelize, DataTypes) {
  const Qari = sequelize.define('qari', {
    name: DataTypes.STRING,
    arabic_name: DataTypes.STRING,
    relative_path: DataTypes.STRING,
    file_formats: DataTypes.STRING,
    section: DataTypes.BOOLEAN,
    home: DataTypes.BOOLEAN,
    description: DataTypes.TEXT,
    torrent_filename: DataTypes.STRING,
    torrent_info_hash: DataTypes.STRING,
    torrent_seeders: DataTypes.INTEGER,
    torrent_leechers: DataTypes.INTEGER
  }, {
    timestamps: false,
    paranoid: true,
    tableName: 'qaris',
    underscored: true,
    classMethods: {
      associate(models) {
        this.hasMany(models.audioFile, {foreignKey: 'qari_id'});
        this.belongsToMany(models.surah, {through: models.audioFile, foreignKey: 'sura_number'});
      }
    }
  });
  return Qari;
};

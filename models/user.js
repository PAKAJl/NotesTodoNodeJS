export default (sequelize, DataTypes) =>{
    const User = sequelize.define('User', {
        username : DataTypes.STRING,
        password : DataTypes.STRING
    }) 
    User.associate = (models) => {
        User.hasMany(models.Note, {
            foreignKey: 'userId',
            as: 'notes'
        });
    };
    return User
}
export default (sequelize, DataTypes) =>{
    const Note = sequelize.define('Note', {
        text : DataTypes.STRING,
        isCompleted : DataTypes.BOOLEAN,
        userId : DataTypes.INTEGER
    }) 
    Note.associate = (models) =>{
        Note.belongsTo(models.User, {
            foreingKey: "userId",
            as: 'user'
        })
    }
    return Note
}
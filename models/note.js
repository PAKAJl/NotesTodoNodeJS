export default (sequelize, DataTypes) =>{
    const Note = sequelize.define('Note', {
        text : DataTypes.STRING,
        isCompleted : DataTypes.BOOLEAN,
        userId : DataTypes.INTEGER
    }) 
    console.log('Инициализируем модель ');
    return Note
}
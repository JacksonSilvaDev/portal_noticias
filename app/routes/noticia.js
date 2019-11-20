module.exports = (app) => {
    app.get('/noticia', (req, res) => {

        var connection = app.config.dbConnection()
        var noticiaModel = app.app.models.noticiasModel;
        noticiaModel.getNoticia(connection, (error, result) => {
            res.render("noticias/noticia", {
                noticia: result
            })
        })
    })
}
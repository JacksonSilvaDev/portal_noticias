module.exports.noticias = (app, req, res) => {

    var connection = app.config.dbConnection()
    var noticiasModel = new app.app.models.noticiasModel(connection);

    noticiasModel.getNoticias((error, result) => {
        res.render("noticias/noticias", {
            noticias: result
        })
    });
}

module.exports.noticia = (app, req, res) => {
    var connection = app.config.dbConnection()
    var noticiaModel = new app.app.models.noticiasModel(connection);

    var id = req.query.id_noticias;
    noticiaModel.getNoticia(id, (error, result) => {
        res.render("noticias/noticia", {
            noticia: result
        })
    })
}
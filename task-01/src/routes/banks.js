module.exports = function(application) {
    application.get('/', function(req, res) {
        application.src.controllers.banks.index(application, req, res)
    })
}

module.exports.index = function(application, req, res) {
    var banksModel = new application.src.models.banks()

    banksModel.getLastBanks(function(err, result) {
        res.render("banks/index", {banks : result})
    })
}

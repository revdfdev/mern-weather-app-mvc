
module.exports = function(app) {
    app.use('/api/v1/current-weather', require('./routes.current'));
    app.use('/api/v1/city', require('./routes.cities'));
}
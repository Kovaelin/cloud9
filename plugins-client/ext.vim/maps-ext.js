module.exports = function setup(options, imports, register) {
    imports["client-plugins"].register("maps", __dirname, register);
};
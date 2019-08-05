module.exports = function (context, req) {
    var timestamp = new Date().toISOString();
    context.res = {
        body: timestamp
    };
    context.done();
};
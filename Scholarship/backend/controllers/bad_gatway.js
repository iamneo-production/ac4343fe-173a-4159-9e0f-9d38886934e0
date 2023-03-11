const {  responseMessage } = require("../utils/response");

const BAD_GATEWAY = async ( req, res ) => {
    return res.status(404).json({success : false, message : responseMessage.badGateway });
}
module.exports = BAD_GATEWAY;
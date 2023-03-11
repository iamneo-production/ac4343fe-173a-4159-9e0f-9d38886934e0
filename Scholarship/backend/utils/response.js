const responseMessage = {
    badRequest  : "Bad request error occur!",
    serverError: "Some server error occured",
    unauthorisedAccess: "Unauthorized access!",
    alreadyRegistered: "Account Id already exists.",
    invalidToken: "Invalid token used!",
    wrongPassword: "Wrong password entered.",
    differentToken: "Don't try to create a different token!",
    tokenNotFound: "No token found in 'authorization' header",
    loginSuccess: "Logged in successfully. Save the token for access to your account.",
    registerSuccess: "Registered in successfully.",
    badGateway: "Unknown route discovered. Check for correct URL and method.",
    noDataFound: "No such data found",
   
}

module.exports = { responseMessage };

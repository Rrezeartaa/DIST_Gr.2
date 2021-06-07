const isValidEmail = function(email) {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
  };
  
  /**
     * validatePassword helper method
     * @param {string} password
     * @returns {Boolean} True or False
     */
  const validatePassword = function (password){
    if (password.length <= 5) {
      return false;
    } return true;
  };
  
  
 
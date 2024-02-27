/** @format */

const log = {
  information: function (infoMessage) {
    console.log("information message", infoMessage);
  },
  fail: function (failMessage) {
    console.log("fail message is ", failMessage);
  },
};

module.exports = log;

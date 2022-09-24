const statusList = {

};

const statusHandler = (status) => statusList[status] || 500;

const returner = (status, info, object) => {
  if (object) return { status, result: { info } };
  return { status, result: info };
};

module.exports = {
  statusHandler,
  returner,
};
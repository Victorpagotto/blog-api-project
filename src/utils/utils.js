const statusList = {
  OK_FOUND: 200,
  NOT_FOUND: 404,
  BAD_REQUEST: 401,
  SERVER_ERROR: 500,
};

const statusHandler = (status) => statusList[status] || 500;

const resultHandler = (status, info, object) => {
  if (object) return { status, result: { info } };
  return { status, result: info };
};

module.exports = {
  statusHandler,
  resultHandler,
};
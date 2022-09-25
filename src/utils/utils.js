const statusList = {
  OK_FOUND: 200,
  OK_CREATED: 201,
  NOT_FOUND: 404,
  BAD_REQUEST: 401,
  BAD_FORMAT: 400,
  SERVER_ERROR: 500,
  CONFLICT: 409,
  NOT_CONT: 204,
};

const statusHandler = (status) => statusList[status] || 500;

const resultHandler = (status, info, isObject) => {
  if (isObject) return { status: statusHandler(status), result: info };
  if (Array.isArray(info)) return { status: statusHandler(status), result: info };
  return { status: statusHandler(status), result: { ...info } };
};

const payloader = (info) => ({
  id: info.id,
  displayName: info.displayName,
  image: info.image || '',
});

module.exports = {
  statusHandler,
  resultHandler,
  payloader,
};
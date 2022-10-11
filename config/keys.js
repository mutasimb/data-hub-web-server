const
  {
    NODE_ENV,
    DBHOST,
    DBPORT,
    DBNAME,
    DBUSER,
    DBPASS
  } = process.env;

module.exports = {
  mongoUri: NODE_ENV === 'production'
    ? `mongodb+srv://${DBUSER}:${DBPASS}@${DBHOST}/${DBNAME}?retryWrites=true&w=majority`
    : `mongodb://${DBHOST}:${DBPORT}/${DBNAME}`
};

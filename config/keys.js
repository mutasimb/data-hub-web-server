const
  {
    DBHOST,
    DBPORT,
    DBNAME
  } = process.env;

module.exports = {
  mongoUri: `mongodb://${ DBHOST }:${ DBPORT }/${ DBNAME }`
};

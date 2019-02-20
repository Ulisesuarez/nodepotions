const env = {
  database: 'pociones_db',
  username: 'pociones',
  password: 'Mulhacen',
  host: 'http://adminer.randion.es',
  dialect: 'postgres',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};
 
module.exports = env;
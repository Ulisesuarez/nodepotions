const env = {
  database: 'pociones_db',
  username: 'pociones',
  password: 'Mulhacen',
  host: 'randion.es',
  port: 5432,
  dialect: 'postgres',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};
 
module.exports = env;
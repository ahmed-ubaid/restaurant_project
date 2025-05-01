const mysql = require('mysql2/promise');
const dotenv=require('dotenv')
dotenv.config();
class mysqlServices{

  constructor(connection){
      this.connection=connection
  }
  static async createInstance(){
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });
    return new mysqlServices(connection);
  }
  static async run(methodCallback) {
    const dbService = await mysqlServices.createInstance();
    const rows=await methodCallback.call(dbService); 
    return rows 
  }
  /*async fetchData(){
      try {
          const [rows] = await this.connection.execute('SELECT * FROM emp_records');
          await this.connection.end();
          return rows;
      } catch (error) {
          console.error('Error:', error);
      } 
  }*/

  async fetchReservationData(){
    try{
      const [rows]=await this.connection.execute('SELECT * FROM reservations')
      await this.connection.end()
      return rows
    }catch(error){
      console.log('Some error occured',error)
    }
  }

 
}





module.exports= mysqlServices
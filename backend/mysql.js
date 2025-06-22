const CryptoJS = require('crypto-js');
const mysql = require('mysql2/promise');
const UtilityClass= require("./functions/UtilityClass");
const utility=new UtilityClass()


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
  
  static async run(methodCallback, ...args) {
    const dbService = await mysqlServices.createInstance();
    
    return await methodCallback.apply(dbService, args);
    
  }

  async saveReservation(ReservationName,NumberOfSeats,LevelOfReservation,DateOfReservation,TimeOfReservation,email){
    try{
      const res_id=CryptoJS.SHA256(`${email}${Date.now()}`).toString(CryptoJS.enc.Hex)

      const [rows]=await this.connection.execute(
        `INSERT INTO reservations (res_id, ReservationName, NumberOfSeats, LevelOfReservation, DateOfReservation, TimeOfReservation,email)
        VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [res_id, ReservationName, NumberOfSeats, LevelOfReservation, DateOfReservation, TimeOfReservation,email]
      );

      //utility.sendEmail(email,res_id.slice(-6))

      console.log(`${ReservationName},${NumberOfSeats},${LevelOfReservation},${DateOfReservation},${TimeOfReservation},${email} inserted`)

      await this.connection.end()
      return rows
    }catch(error){
      console.log('Some error occured',error)
    }
  }


  async fetchReservationData(){
    try{
      const [rows]=await this.connection.execute('SELECT * FROM reservations')
      await this.connection.end()
      return rows
    }catch(error){
      console.log('Some error occured',error)
    }
  }

  async cancelReservation(reId){
    try{
      await this.connection.execute('SET SQL_SAFE_UPDATES = 0;')
      
      const [rows] = await this.connection.execute(
      'DELETE FROM reservations WHERE res_id = ?',
      [reId]
    );
      
      await this.connection.execute('SET SQL_SAFE_UPDATES = 1;')
      
      await this.connection.end()
      
      return rows
    }catch(error){
      console.log('some error ocrued',error)
    }
  }
}





module.exports= mysqlServices


/*
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });
    
    const res_id=CryptoJS.SHA256(`${ReservationName,NumberOfSeats,LevelOfReservation,DateOfReservation,TimeOfReservation}`).toString(CryptoJS.enc.Hex)

    await this.connection.execute(`INSERT INTO reservations(res_id,ReservationName,NumberOfSeats,LevelOfReservation,DateOfReservation,TimeOfReservation) VALUES ${res_id,ReservationName,NumberOfSeats,LevelOfReservation,DateOfReservation,TimeOfReservation}`)

    console.log(`${ReservationName,NumberOfSeats,LevelOfReservation,DateOfReservation,TimeOfReservation} inserted`)

    await this.connection.end()
    
*/
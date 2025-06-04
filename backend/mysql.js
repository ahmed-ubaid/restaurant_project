const CryptoJS = require('crypto-js');
const mysql = require('mysql2/promise');



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

  async saveReservation(ReservationName,NumberOfSeats,LevelOfReservation,DateOfReservation,TimeOfReservation){
    try{
      const res_id=CryptoJS.SHA256(`${ReservationName,NumberOfSeats,LevelOfReservation,DateOfReservation,TimeOfReservation}`).toString(CryptoJS.enc.Hex)

      const [rows]=await this.connection.execute(
      `INSERT INTO reservations (res_id, ReservationName, NumberOfSeats, LevelOfReservation, DateOfReservation, TimeOfReservation)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [res_id, ReservationName, NumberOfSeats, LevelOfReservation, DateOfReservation, TimeOfReservation]
    );

      console.log(`${ReservationName},${NumberOfSeats},${LevelOfReservation},${DateOfReservation},${TimeOfReservation}} inserted`)

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
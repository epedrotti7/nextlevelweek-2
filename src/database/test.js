const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //inserir dados
    proffyValue = {
    name: "Eliton Dioni",
    avatar: "https://avatars0.githubusercontent.com/u/52468845?s=460&u=6435cab7649d2a5aa3abe500581290bcf07f929d&v=4",
    whatsapp: "051999644409" , 
    bio:"Criador do framework ReactJS, deu aula em Harward e criou o jogo League of Legends. Respeito Apenas!", 
    }
    
    classValue = {
        subject: "React",
        cost: "1500,00",
        // o proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados apos cadastrarmos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})


    //Consultar os dados

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log (selectedProffys)

    //consultar as classes de um determinado professor 
    //e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    // console.log (selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

    // console.log (selectClassesSchedules)



})
import addressModel from "../models/addressModel.js";
import DbConnect from "../../config/Database.js";

const viloyatlar = [
    'Toshkent',
    'Andijon',
    'Farg\'ona',
    'Namangan',
    'Samarqand',
    'Buxoro',
    'Xorazm',
    'Navoiy',
    'Qashqadaryo',
    'Surxondaryo',
    'Jizzax',
    'Sirdaryo',
    'Qoraqalpog\'iston Respublikasi'
];


async function migration() {
    try {
        await DbConnect()

        for (let viloyat of viloyatlar) {
            const exists = await addressModel.findOne({name : viloyat})
            if(!exists) {
                const result = await addressModel.create({ name: viloyat })
            }
        }
        const all = await addressModel.find()
        const cityIds = all.map(({ _id }) => String(_id))
        console.log(cityIds)
    } catch (error) {
        console.log("Xatolik:", error.message)
    } finally {
        process.exit(0) 
    }
}



export default migration
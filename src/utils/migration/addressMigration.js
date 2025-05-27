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


async function migration(){
    try {
        await DbConnect()
        console.log(process.env)

        for(let viloyat of viloyatlar){
            const result = await addressModel.create({name:viloyat})
            console.log(result)
        }
        const all = await addressModel.find()
        const cityIds = all.map(({_id}) => String(_id))
        console.log(cityIds)
    } catch (error) {
        console.log(error.message)        
    }
}


export default migration
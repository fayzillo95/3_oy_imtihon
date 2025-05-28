import { CustomError } from "../errors/Vlaidatio.error.js";

const isKabisa = (year) => {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    if (year % 4 === 0) return true;
    return false;
};

export const birthdayTest = (birthDay) => {
    console.log(birthDay)
    if (!/^\d{4}-\d{2}-\d{2}$/.test(birthDay)) {
        throw new CustomError( "Tug'ilgan sana formati yyyy-mm-dd bo'lishi kerak", 400);
    }

    const [y, m, d] = birthDay.split("-").map(Number);

    if ([y, m, d].includes(NaN)) {
        throw new CustomError( "Tug'ilgan sana noto'g'ri kiritilgan", 400);
    }

    if (y < 1900 || y > new Date().getFullYear()) {
        throw new CustomError( "Tug'ilgan yil 1900 yildan katta va hozirgi yildan kichik bo'lishi kerak", 400);
    }

    if (m < 1 || m > 12) {
        throw new CustomError( "Tug'ilgan oy 1 dan 12 gacha bo'lishi kerak", 400);
    }

    const oyKunlari = [31, (isKabisa(y) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (d < 1 || d > oyKunlari[m - 1]) {
        throw new CustomError( `Tug'ilgan kun ${m}-oy uchun 1 dan ${oyKunlari[m - 1]} gacha bo'lishi kerak`, 400);
    }

    const birthdayDate = new Date(`${y}-${m}-${d}`);
    const today = new Date();
    if (birthdayDate > today) {
        throw new CustomError( "Tug'ilgan sana kelajakda bo'lishi mumkin emas", 400);
    }

    return true;
};

# Loyihaning nomi: Avtomobil va Filial Boshqaruv API

## Muallif
**Fayzillo Ummatov**  
Telegram: [@Fayzillo_Ummatov](https://t.me/Fayzillo_Ummatov)  
Telefon: +99896102141  
Email: fayzilloummatov63@gmail.com  

---

## Loyihaning maqsadi
Ushbu loyiha filiallar, xodimlar, avtomobillar, ruxsatnomalar va foydalanuvchilarni boshqarish uchun RESTful API taqdim etadi.  
JWT orqali autentifikatsiya, rol va ruxsatlar tizimi bilan himoyalangan.

---
# Digital Ocean API Collection

Ushbu Postman to‘plami `Digital Ocean` API'lari bilan ishlash uchun tuzilgan bo‘lib, foydalanuvchilarni ro‘yxatdan o‘tkazish, login qilish, ruxsatnomalar va rollarni yaratish, hamda filiallarni boshqarish imkonini beradi.

## Asosiy Guruhlar

### 1. Superadmin

#### 📌 `login FayzilloDeveloperAdmin`
- **URL:** `POST /api/users/v2/login`
- **Ma'lumotlar:** 
    `username`, `FayzilloDeveloperAdmin`
    `password` , `developerAdmin`


## Loglar va Swagger

### 📄 Server Loglar
- **URL:** [http://139.59.115.151:15975/api/serverlog/looger.log](http://139.59.115.151:15975/api/serverlog/looger.log)

### 📄 User Loglar
- **URL:** [http://139.59.115.151:15975/api/userlog/looger.log](http://139.59.115.151:15975/api/userlog/looger.log)

### 🧹 Clear Log
- **URL:** [http://139.59.115.151:15975/api/clearlog](http://139.59.115.151:15975/api/clearlog)

### 📘 Swagger API hujjatlari
- **URL:** [http://139.59.115.151:15975/api-docs](http://139.59.115.151:15975/api-docs)

---

## Foydalanish

### Muhim o‘zgaruvchilar:
- `{{onlinehost}}` – server hosti (masalan, `139.59.115.151`)
- `{{port}}` – server porti (masalan, `15975`)
- `{{admintoken}}` – token (Bearer Auth uchun)
- `{{f2token}}` - yordamchi admin tokeni
---

📁 [To‘plam havolasi](https://fayzillo.postman.co/workspace/Fayzillo's-Workspace~b340ca22-82a7-4ccf-8dad-67af269e6d54/collection/44048719-7ba89de6-03ae-42e3-b10d-6dc5003be7bd?action=share&source=collection_link&creator=44048719)




## API Endpoints

| Metod | Endpoint                                    | Ta’rif                                      |
|-------|---------------------------------------------|---------------------------------------------|
| POST  | /api/users/v1/register                      | Foydalanuvchini ro'yxatdan o'tkazish        |
| POST  | /api/users/v2/login                         | Foydalanuvchini tizimga kirishi             |
| PUT   | /api/users/v3/update                        | Foydalanuvchi ma'lumotlarini yangilash      |
| DELETE| /api/users/v4/delete                        | Foydalanuvchini tizimdan chiqarish          |
| GET   | /api/users/v5/getall                        | Barcha foydalanuvchilar ro'yxati            |
|-------|---------------------------------------------|---------------------------------------------|
## Super admin Apis 
| Metod | Endpoint                                    | Ta’rif                                      |
|-------|---------------------------------------------|---------------------------------------------|
| POST  | /api/v1/users/role                          | Rol yaratish (Admin uchun)                  |
| POST  | /api/v2/branchs/staff                       | Filial xodimini yaratish (Admin uchun)      |
| GET   | /api/v3/branchs/staffs/all/:id              | Filialdagi barcha xodimlarni olish (Admin)  |
|-------|---------------------------------------------|---------------------------------------------|
## Branch Apis
| Metod | Endpoint                                    | Ta’rif                                      |
|-------|---------------------------------------------|---------------------------------------------|
| POST  | /api/branchs/v1/open                        | Filial yaratish                             |
| PUT   | /api/branchs/v2/update/:id                  | Filial ma'lumotlarini yangilash             |
| DELETE| /ai/branchs/v3/closed/:id                   | Filialni yopish                             |
| GET   | /api/branchs/v4/getall                      | Barcha filiallarni olish                    |
| GET   | /api/branchs/v5/getsingle/infoall/:id       | Filial haqida to'liq ma'lumot olish         |
| GET   | /address/all                                | Barcha manzillar ro'yxatini olish           |
|-------|---------------------------------------------|---------------------------------------------|

## Cars Ais
| Metod | Endpoint                                    | Ta’rif                                      |
|-------|---------------------------------------------|---------------------------------------------|
| POST  | /api/cars/v1/create                         | Avtomobil yaratish                          |
| PUT   | /api/cars/v2/update/:id                     | Avtomobil ma'lumotlarini yangilash          |
| DELETE| /api/cars/v3/delete/:id                     | Avtomobilni o'chirish                       |
| GET   | /api/cars/v4/getall                         | Barcha avtomobillar ro'yxati                |
## Permission Apis
| Metod | Endpoint                                    | Ta’rif                                      |
|-------|---------------------------------------------|---------------------------------------------|
| POST  | /api/permissions/v1/create                  |  Ruxsatnoma yaratish                        |
| PUT   | /api/permissions/v2/update/:id              |  Ruxsatnomani yangilash                     |
| DELETE| /api/permissions/v3/remove/:id              |  Ruxsatnomani o'chirish                     |
| GET   | /api/permissions/v4/getall                  |  Barcha ruxsatnomalarni olish               |
|-------|---------------------------------------------|---------------------------------------------|

---

## Validatsiyalar

**Branch**  
| Key  | Value | options
|----------|---------------|------------------------|
| name | string | required  
| address_id | string (24 belgidan) | required  

**Cars**  
| Key       | Type   | Options   |
|--------------|-----------|---------------------------|
| name:        |  string,  |   required  |
| branch_id:   |  string   |   (24 belgidan), required |  
| rusm:        |  string,  |   min 3  |
| color:       |  string,  |   min 3  |
| price:       |  number,  |   required | 
| img:         |  image/...  |   buffer  | 

**Permission**  
| Key  |  value |  options |
|-----------|---------------|---------------|
| branch_id: | string (24 belgidan)  |  required  
| user_id:  |  string (24 belgidan)  | required  
| actions | string | POST GET .... |
| model | string | cars staffs |

**User**  
| Key  |  value |  options |
|-----------|---------------|---------------|
| username   | string, alfanumerik |  3-100 belgidan  
| password   | string,  |  8-32 belgidan  
| r_password  |  password  | bilan mos bo'lishi kerak  
| birth_day | string | YYYY-MM-DD  

---


## Swagger

API hujjatlari swagger orqali:  
GET
http://139.59.115.151:15975/api-docs

## Manzillar
GET
http://139.59.115.151:15975/address/all

## Branch ma'lumotlari 
GET
http://139.59.115.151:15975/api/branchs/v5/getsingle/infoall/:branch_id

## STAFF lar
GET   super admin
http://139.59.115.151:15975/api/v3/branchs/staffs/all/:branch_id

Create staff super admin
http://139.59.115.151:15975/api/v2/branchs/staff



---

## Javob formati

### Muvaffaqiyatli javob:

```json
{
  "success": true,
  "data": {...},
  "message": "Amal bajarildi"
}

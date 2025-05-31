## Users

### Register (User)
**URL**: `/api/register`  
**Method**: `POST`  
**Auth required**: ❌

#### Request JSON:
```json
{
  "username": "user1",
  "password": "1234",
  "email": "user1@example.com"
}
```

#### Response:
```json
{
  "msg": "User created successfully"
}
```

---

### Login (User)
**URL**: `/api/login`  
**Method**: `POST`  
**Auth required**: ❌

#### Request JSON:
```json
{
  "username": "user1",
  "password": "1234"
}
```

#### Response:
```json
{
  "access_token": "JWT-TOKEN"
}
```

---

### Get Profile (User)
**URL**: `/api/profile`  
**Method**: `GET`  
**Auth required**: ✅ (User Token)

#### Headers:
```
Authorization: Bearer USER_TOKEN
```

#### Response:
```json
{
  "username": "user1",
  "email": "user1@example.com"
}
```

---

## Admin

### Register (Admin)
**URL**: `/api/admin/register`  
**Method**: `POST`  
**Auth required**: ❌

#### Request JSON:
```json
{
  "username": "admin1",
  "password": "adminpass",
  "email": "admin1@example.com"
}
```

#### Response:
```json
{
  "msg": "Admin created successfully"
}
```

---

### Login (Admin)
**URL**: `/api/admin/login`  
**Method**: `POST`  
**Auth required**: ❌

#### Request JSON:
```json
{
  "username": "admin1",
  "password": "adminpass"
}
```

#### Response:
```json
{
  "access_token": "ADMIN-JWT-TOKEN"
}
```

---

### Get Admin Profile
**URL**: `/api/admin/profile`  
**Method**: `GET`  
**Auth required**: ✅ (Admin Token)

#### Headers:
```
Authorization: Bearer ADMIN_TOKEN
```

#### Response:
```json
{
  "username": "admin1",
  "email": "admin1@example.com"
}
```
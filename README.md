#Mid-Term

----
1. System Description
```
Sistem ini dirancang untuk memberikan Anda pengalaman interaktif dalam menjelajahi video dan berinteraksi dengan komunitas, sambil menemukan produk-produk yang dapat memenuhi kebutuhan dan minat Anda.
Kami hadirkan sebuah lingkungan di mana Anda dapat mengeksplorasi konten video yang menarik, memperoleh pandangan dari pengguna lain melalui komentar, serta menemukan produk-produk terkait yang dapat meningkatkan pengalaman Anda.
```

----
2. Folder Structure
* **app.js**
* **model/**
  - product.model.js
  - video.model.js
  - comment.model.js
* **routes/**
  - product.route.js
  - video.route.js
  - comment.route.js
* **controllers/**
  - products.controller.js
  - videos.controller.js
  - comments.controller.js

----
3. API Structure list

#Videos
* videos object
```
{
  _id: ObjectId,
  title: String,
  url_video: String,
  product: ObjectId
}
```
**GET / or /videos**
----
  Returns all videos in the database system.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  videos: [
           {<videos_object>},
           {<videos_object>},
           {<videos_object>},
           ...
         ]
}
```
* **Error Response:**  
  * **Code:** 400  
  **Content:** `{ error : error.message }`


**GET /videos/:id**
----
  Returns the specified videos, show related product and all related comment.
* **URL Params**  
  *Required:* `id=ObjectId`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json
* **Success Response:** 
* **Code:** 201  
  **Content:**  `[
    {<video_object>},
    {<detailProduct_ob>},
    {<comments_object>}
  ]` 
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Page Not Found" }`  
  OR  
  * **Code:** 500  
  **Content:** `{ message: "Terjadi kesalahan saat mencari data." }`

**POST /videos**
----
  Creates a new videos and returns the new object.
* **URL Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
  {
    title: string,
    url_video: string,
    product: ObjectId
  }
```
* **Success Response:**  
* **Code:** 201  
  **Content:**  `{ <videos_object> }`
  * **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Page Not Found" }`  
  OR  
  * **Code:** 400 
  **Content:** `{ error: error.message }`

**POST /videos/:id/comment**
----
  Creates a new comment for the related video and returns the video detail.
* **URL Params**  
  *Required:* `id=ObjectId`
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
  {
    username: string,
    comment: string,
    video: ObjectId
  }
```
* **Success Response:**  
* **Code:** 201  
  **Content:**  `{ <comment_object> }`
  * **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Page Not Found" }`  
  OR  
  * **Code:** 400 
  **Content:** `{ error: error.message }`

  **DELETE /users/:id**
----
  Deletes the specified video.
* **URL Params**  
  *Required:* `id=ObjectId`
* **Data Params**                                                                                                   
  None
* **Headers**  
  Content-Type: application/json
* **Success Response:** 
  * **Code:** 201 
  * **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Page Not Found" }`  
  OR  
  * **Code:** 400 
  **Content:** `{ error: error.message }`
----


#Products
* products object
```
{
  _id: ObjectId,
  title: String,
  price: Integer,
  link_product: String
}
```
**GET /products**
----
  Returns all products in the database system.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  products: [
           {<products_object>},
           {<products_object>},
           {<products_object>},
           ...
         ]
}
```
* **Error Response:**
* **Code:** 404  
  **Content:** `{ error : "Page Not Found" }`  
  OR  
  * **Code:** 400  
  **Content:** `{ error : error.message }`


**GET /products/:id**
----
  Returns the specified products object.
* **URL Params**  
  *Required:* `id=ObjectId`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json
* **Success Response:** 
* **Code:** 201  
  **Content:**  `[{<product_object>}]` 
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Page Not Found" }`  
  OR  
  * **Code:** 500  
  **Content:** `{ message: "Terjadi kesalahan saat mencari data." }`

**POST /products**
----
  Creates a new product and returns the new object.
* **URL Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
  {
    title: String,
    price: Integer,
    link_product: String
  }
```
* **Success Response:**  
* **Code:** 201  
  **Content:**  `{ <product_object> }`
  * **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Page Not Found" }`  
  OR  
  * **Code:** 400 
  **Content:** `{ error: error.message }`

  **DELETE /users/:id**
----
  Deletes the specified product.
* **URL Params**  
  *Required:* `id=ObjectId`
* **Data Params**                                                                                                   
  None
* **Headers**  
  Content-Type: application/json
* **Success Response:** 
  * **Code:** 201 
  * **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Page Not Found" }`  
  OR  
  * **Code:** 400 
  **Content:** `{ error: error.message }`
----

#comments
* comments object
```
{
  _id: ObjectId,
  username: String,
  comment: String,
  video: ObjectId,
}
```
**GET /comments**
----
  Returns all comments in the database system.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  comments: [
           {<comments_object>},
           {<comments_object>},
           {<comments_object>},
           ...
         ]
}
```
* **Error Response:**
* **Code:** 404  
  **Content:** `{ error : "Page Not Found" }`  
  OR  
  * **Code:** 400  
  **Content:** `{ error : error.message }`


**GET /comments/:id**
----
  Returns the specified comments object.
* **URL Params**  
  *Required:* `id=ObjectId`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json
* **Success Response:** 
* **Code:** 201  
  **Content:**  `[{<product_object>}]` 
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Page Not Found" }`  
  OR  
  * **Code:** 500  
  **Content:** `{ message: "Terjadi kesalahan saat mencari data." }`

**POST /comments**
----
  Creates a new product and returns the new object.
* **URL Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
  {
    username: String,
    comment: String,
    video: ObjectId
  }
```
* **Success Response:**  
* **Code:** 201  
  **Content:**  `{ <product_object> }`
  * **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Page Not Found" }`  
  OR  
  * **Code:** 400 
  **Content:** `{ error: error.message }`

  **DELETE /users/:id**
----
  Deletes the specified product.
* **URL Params**  
  *Required:* `id=ObjectId`
* **Data Params**                                                                                                   
  None
* **Headers**  
  Content-Type: application/json
* **Success Response:** 
  * **Code:** 201 
  * **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Page Not Found" }`  
  OR  
  * **Code:** 400 
  **Content:** `{ error: error.message }`
----

4. How To Run
 - make sure you already install NodeJS, ExpressJS, MongoDb, Mongoose, dotenv and nodemon on your pc or you can pull node_modules from my repository project
 - open terminal and go to directory where you save my project or just use git bash on the folder.
 - run command : "npm start".
 - open "http://localhost:3000/" on your browser.

# 🛒 E-commerce Backend API

This project is a **RESTful API** for an E-commerce application, built with **Node.js**, **Express.js**, and **MongoDB (Mongoose)**.  
It supports **Users, Products, Categories, and Cart management**.

---

## 🚀 Features
- CRUD APIs for **Products** and **Categories**
- Add to Cart & manage Cart items
- MongoDB schema using **Mongoose**
- CORS enabled (ready for frontend integration)
- Deployable on **Render / Railway / Vercel**

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/ecommerce-backend.git
cd ecommerce-backend
```
2️⃣ Install dependencies
```bash
npm install
```
3️⃣ Configure Environment Variables

Create a .env file in the root directory with the following:
```bash
PORT=4000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/ecommerce
```
4️⃣ Start the server
```bash
npm run dev
```
🗄️ Database Schema (Mongoose Models)
🔹 User
```bash
{
  name: String,
  email: String,
  password: String,
  createdAt: Date,
  updatedAt: Date
}
```
🔹 Category
```bash
{
  name: String,
  createdAt: Date,
  updatedAt: Date
}
```
🔹 Product

```bash
{
  productName: String,
  brandName: String,
  category: ObjectId (ref: Category),
  productImage: [String],
  description: String,
  price: Number,
  sellingPrice: Number,
  createdAt: Date,
  updatedAt: Date
}
```
🌐 Hosted API

Base URL (example if deployed):
```bash
https://ecommerce-backend.onrender.com/api

```
📖 API Documentation
🔹 Product Routes

| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| GET    | `/api/products`     | Get all products     |
| GET    | `/api/products/:id` | Get product by ID    |
| POST   | `/api/products`     | Create a new product |
| PUT    | `/api/products/:id` | Update product by ID |
| DELETE | `/api/products/:id` | Delete product by ID |

🔹 Category Routes
| Method | Endpoint          | Description        |
| ------ | ----------------- | ------------------ |
| GET    | `/api/categories` | Get all categories |
| POST   | `/api/categories` | Add new category   |

🔹 Cart Routes
| Method | Endpoint        | Description           |
| ------ | --------------- | --------------------- |
| POST   | `/api/cart`     | Add item to cart      |
| GET    | `/api/cart`     | Get all cart items    |
| DELETE | `/api/cart/:id` | Remove item from cart |



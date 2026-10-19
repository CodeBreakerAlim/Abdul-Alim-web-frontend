import axios from 'axios'

// ব্যাকএন্ডের ঠিকানা। .env ফাইলে VITE_API_URL দিন (নিচে README দেখুন)
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
  timeout: 30000, // ফ্রি হোস্টিং ঘুম থেকে উঠতে সময় নিতে পারে
})

export default api

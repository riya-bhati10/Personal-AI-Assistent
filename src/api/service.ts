<<<<<<< HEAD
 
=======
import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Change to your API base URL

export const fetchExampleData = async () => {
  const response = await axios.get(`${API_BASE_URL}/example`);
  return response.data;
};

// Add more API functions here as needed 
>>>>>>> ab54480d2ab155df70aa9ffdb4f2f54af9516efd

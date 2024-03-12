import axios from "axios";
import { faker } from '@faker-js/faker';

const API = "https://spo.ultrapivomode.space/api/product"


const generateRandomProduct = () => {
  return {
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    photos: [
      {url: "https://funik.ru/wp-content/uploads/2018/10/f1fda080713507f02387.jpg"},
      {url: "https://fanibani.ru/wp-content/uploads/2022/12/134199f94c3700a77c12703a6b4c879a.jpeg"},
      {url: "https://funik.ru/wp-content/uploads/2018/10/e4254cf201e8a64a25bd.jpg"}
  ],
    description: faker.commerce.productDescription(),
    type: faker.helpers.arrayElement(['Метал', 'Пластик', 'Карбон', 'Мама Никиты']),
    country: faker.helpers.arrayElement(['США', 'Россия', 'Япония', 'Германия']),
    color: faker.color.human(),
    brand: faker.helpers.arrayElement(['BWM', 'Toyota', 'Ferrari', 'Ford', 'Nissan', 'Pagani', 'Lamborgini', 'Lada', 'Subaru', 'Dodge', 'Tesla']),
  };
};

const sendProductToApi = async (productData: any) => {
  try{
    const response = await axios.post(API, productData);
    console.log('Product sent to API:', response.data);
  } catch(error){
    console.error(error)
  }
};

const numberOfProducts = 100;

for (let i = 0; i < numberOfProducts; i++) {
  const randomProduct = generateRandomProduct();
  sendProductToApi(randomProduct);
}

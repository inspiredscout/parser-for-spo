import axios from "axios";
import { faker } from '@faker-js/faker';

const API = "{URL}"


const generateRandomProduct = () => {
  return {
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    photos: [
      {url: faker.image.urlPicsumPhotos({ height: 600, width: 600 })},
      {url: faker.image.urlPicsumPhotos({ height: 600, width: 600 })},
      {url: faker.image.urlPicsumPhotos({ height: 600, width: 600 })}
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

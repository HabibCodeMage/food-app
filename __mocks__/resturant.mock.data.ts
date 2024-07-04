import Restaurant from "@/modules/common/interfaces/restaurants.interface";

const mockData: Restaurant[] = [
  {
    id: "1",
    index: 1,
    rating: 4.5,
    promotion: "gift",
    isNew: true,
    categoryId: "1",
    minCookTime: 10,
    maxCookTime: 20,
    restaurant: "Restaurant A",
    name: "Restaurant Name A",
    imageUrl: "https://example.com/imageA.jpg",
  },
  {
    id: "2",
    index: 2,
    rating: 4.0,
    promotion: null,
    isNew: false,
    categoryId: "2",
    minCookTime: 15,
    maxCookTime: 25,
    restaurant: "Restaurant B",
    name: "Restaurant Name B",
    imageUrl: "https://example.com/imageB.jpg",
  },
  // Add more mock data as needed
];

export default mockData;

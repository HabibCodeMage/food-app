interface Restaurant {
  id: string;
  index: number;
  rating: number;
  promotion: "gift" | "1+1" | "discount" | null;
  isNew: boolean;
  categoryId: string;
  minCookTime: number;
  maxCookTime: number;
  restaurant: string;
  name: string;
  imageUrl: string;
}

export default Restaurant;

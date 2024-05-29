import { Idimensions } from "./idimensions"
import { Imeta } from "./imeta"
import { Ireview } from "./ireview"

export interface Iproduct {


    id: number
    title: string
    description: string
    category: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    tags: string[]
    brand: string
    sku: string
    weight: number
    dimensions: Idimensions
    warrantyInformation: string
    shippingInformation: string
    availabilityStatus: string
    reviews: Ireview[]
    returnPolicy: string
    minimumOrderQuantity: number
    meta: Imeta
    thumbnail: string
    images: string[]
  }









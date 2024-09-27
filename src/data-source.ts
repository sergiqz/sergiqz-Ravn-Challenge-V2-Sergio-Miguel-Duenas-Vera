import { DataSource } from 'typeorm'
import { User } from './entities/User'
import { Product } from './entities/Product'
import { Category } from './entities/Category'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'sergio1997',
  database: 'snack_shop',
  synchronize: true,
  logging: true,
  entities: [User, Product, Category],
})

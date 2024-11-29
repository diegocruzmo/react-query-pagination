export interface Character {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: Gender
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created: Date
  edited: Date
  url: string
}

export interface Page {
  characters: Character[]
  nextPage: string
}

export interface FetchedData {
  results: Character[]
  next: string | null
}

export enum Gender {
  Hermaphrodite = 'hermaphrodite',
  Male = 'male'
}

export interface CharactersType {
  id: number
  title: string
}

export interface Data {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: Users[]
  support: Support
}

export interface User {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

export interface Support {
  url: string
  text: string
}

export interface Usr {
  data: Data
  support: Support
}

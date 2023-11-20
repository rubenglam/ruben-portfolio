export interface Project {
  icon?: string
  title: string
  description: string
  externalLink?: string
  role: string
  items?: TechnologieType[]
}

export interface Technologie {
  icon?: string
  title: string
  description: string
  items?: string[]
}

export interface Experience {
  time: string
  title: string
  description: string
  logo?: string
}

export enum TechnologieType {
  JavaScript,
  TypeScript,
  React,
  Angular,
  NodeJS,
  Express,
  TailwindCSS,
  NET,
  NextJS,
  Astro
}

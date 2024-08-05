export interface ResumeData {
        id: number,
        name: string,
        date: string,
        description: string
}
export interface Services {
        id: number,
        name: string,
        icon: string,
}
export interface Skills {
        id: number
        name: string
        value: number
}
export interface Contact {
        id: number
        img: string
        name: string
        detail: string
        link:string
}
export interface Menu {
        name: string
        url:string
}
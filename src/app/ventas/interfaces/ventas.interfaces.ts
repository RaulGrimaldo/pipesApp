

export enum Categoria {
    A, B, B15, C, D
}

export interface Juego {

    nombre: string;
    disponible: boolean;
    categoria: Categoria;
} 
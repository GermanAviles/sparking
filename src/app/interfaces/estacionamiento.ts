export interface Estacionamiento {

    nombre?:string,
    capacidad?:number,
    disponible?: boolean,
    latitud: number,
    longitud: number,
    tarifa?:number,
    tipo_cobro?:string,
    key$?: string

}
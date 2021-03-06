export interface Facility {
    id: number
    name : i18n
    location : {
        crs : {
            type : string
            properties : {
                name : string
            }
        }
        bbox : number[]
        type : string
        coordinates : []
    },
    pricingMethod: string
    type: string
}

interface i18n {
    fi : string
    sv : string
    en : string
}
export interface Utilization {
    capacity: number
    spacesAvailable: number
}

export interface DetailedFacility {
    id : number
    builtCapacity: {
        CAR: number
    }
    openingHours: {
        openNow : boolean
    }
}


export type FilterTypes = 'FREE' | 'FREETWELWEHOURS' | 'CUSTOM'
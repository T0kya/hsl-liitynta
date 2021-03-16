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

export interface OpeningHours {
    from: string
    until: string
}

interface Pricing {
    capacityType: string
dayType: string
maxCapacity: number
price: {fi: string, sv: string, en: string}
time: OpeningHours
usage: string
}
export interface DetailedFacility extends Facility {
    id : number
    builtCapacity: {
        CAR: number
    }
    openingHours: {
        byDayType: {
            SUNDAY: OpeningHours,
            SATURDAY: OpeningHours,
            BUSINESS_DAY: OpeningHours
        }
        openNow : boolean
    }
    services: string[]
    pricing: Pricing[]
    paymentInfo: {
        paymentMethods: string[]
    }
}


export type FilterTypes = '12H' | '247' | 'CUSTOM'
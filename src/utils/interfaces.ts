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
    }
   type: string
}

interface i18n {
    fi : string
    sv : string
    en : string
}

interface FacilityPricing {
    usage: string
    capacityType: string
    maxCapacity: number
    dayType: string
    time: {
        from: string
        until: string
    }
    price: string | null
    priceExtra: string | null
    priceOther: string | null
}

interface UnvailableCapacity {
    capacityType: string
        usage: string
        capacity: number
}

export interface DetailedFacility {
    id: number
    name: i18n
    pricingMethod: string
    dayType: string
    builtCapacity: {
        ELECTRIC_CAR: number
        DISABLED: number
        CAR: number
    }
    pricing: FacilityPricing[]
    unavailableCapacities: UnvailableCapacity[]
    services: string[]
    openingHours: {
        openNow: boolean
    }    
}

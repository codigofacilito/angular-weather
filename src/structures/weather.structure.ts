export interface Weather{
    name ?: string;
    cod ?: number;
    icon ?: string;
    description ?: string;
    temp ?: number;
    main ?: string;
    minMaxTemp ?: MinMaxInterface
}

interface MinMaxInterface{
    date ?: number;
    day ?: number;
    month ?: number;
    min ?: number;
    max ?:number;
}


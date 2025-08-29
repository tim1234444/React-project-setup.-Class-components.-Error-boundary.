export type Country = {
  iso_code: string;
  data: {
    co2: number;
    co2_per_capita: number;
    year: number;
    population: number;
    methane: number;
    oil_co2: number;
    temperature_change_from_co2: number;
  }[];
};
export type Tag =
  | 'co2'
  | 'co2_per_capita'
  | 'year'
  | 'population'
  | 'methane'
  | 'oil_co2'
  | 'temperature_change_from_co2';

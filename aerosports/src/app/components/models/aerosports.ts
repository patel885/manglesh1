export interface Aerosports {
    location:     string;
    desc:         string;
    headerimage:  string;
    smallerimage: string;
    isactive:     boolean;
    meta:         string;
    title:        string;
    data:         Data;
    children?:    Aerosports[];
}

export interface Data {
    path: string;
    type: string;
}

export const PageTypes = {
    Birthday: 'birthday',
    OpenJumps: 'openjumps',
    Aeroslam :'aeroslam'
};
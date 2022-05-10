export interface Aerosports {
    location:     string;
    desc:         string;
    headerimage:  string;
    smallerimage: string;
    isactive:     boolean;
    meta:         string;
    title:        string;
    data:         Data;
    section1:     string;
    children?:    Aerosports[];
}

export interface BirthDayPackages {
    plantitle:     string;
    category:         string;
    price:  string;
    period: string;
    includes:     string;
    
}

export interface Config {
    location:     string;
    key:         string;
    value:  string;
    
}

export interface Data {
    path: string;
    type: string;
}

export const PageTypes = {
    PartiesEvents: 'partiesevents',
    Attractions: 'attractions',
    Programs: 'programs',
    PricingPromos: 'pricingpromos',
    GroupEvents: 'groupsevents',
    Aboutus: 'aboutus',
    Blogs: 'blogs',
    Attractionsub: 'attractionssub',
    Aboutussub: 'aboutussub',
    Partieseventssub: 'partieseventssub',
    Campprograms: 'campprograms',
    Programssub: 'programssub',
   BirthdayParties: 'kids-birthday-parties',
    Groupseventssub: 'groupseventssub',
    Faq:'faq'
};
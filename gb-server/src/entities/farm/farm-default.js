import { Food } from "../food/food";

export const farmDefault = {
    id: '',
    farmName: 'Tegridy Farms',
    owners: ['Randy Marsh'],
    crops: [new Food(), new Food()],
    description: 'A Colorado farm.',
    sells: {
        morsel: 4,
        morsel: 6
    },
    opens: '1-1-1999',
    closes: '1-1-1999',
    location: [200, 200],
    url: 'www.tegridyfarms.com'
}
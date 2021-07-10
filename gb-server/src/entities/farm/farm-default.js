export default function buildMakefarmDefault({ Id, makeFood }) {
    return function makefarmDefault() {
        return {
            id: Id.makeId(),
            farmName: 'Tegridy Farms',
            owners: ['Randy Marsh'],
            crops: [makeFood(), makeFood()],
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
    }
}
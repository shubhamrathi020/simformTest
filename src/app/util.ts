export interface USER {
    firstName: string;
    lastName: string;
    email: string;
    contact: number,
    address?: string;
    userName: string;
    password: string;
    notes?: Note[]
}

export interface Note {
    id:number;
    title: string;
    description: string;
}

export var users = [
    {
        firstName: 'User',
        lastName: '1',
        userName: 'user1',
        password: 'user1@123',
        email: 'user1@gmail.com',
        contact: 1111111111,
        address: 'ABC Nagar, Jaipur',
        notes: [
            { id:1,title: "Title 1", description: "Title 1 description" },
            { id:2,title: "Title 2", description: "Title 2 description" },
            { id:3,title: "Title 3", description: "Title 3 description" },
        ]
    },
    {
        firstName: 'User', lastName: '2', userName: 'user2', password: 'user2@123', email: 'user2@gmail.com', contact: 2222222222, address: 'PQR Nagar, Kota',
        notes: [
            { id:1,title: "Title 1", description: "Title 1 description" },
            { id:2,title: "Title 2", description: "Title 2 description" },
            { id:3,title: "Title 3", description: "Title 3 description" },
        ]
    },
    {
        firstName: 'User', lastName: '3', userName: 'user3', password: 'user3@123', email: 'user3@gmail.com', contact: 3333333333, address: 'XYZ Nagar, Delhi',
        notes: [
            { id:1,title: "Title 1", description: "Title 1 description Title 1 description Title 1 description Title 1 description Title 1 description Title 1 description Title 1 description Title 1 description Title 1 description Title 1 description Title 1 description Title 1 description" },
            { id:2,title: "Title 2", description: "Title 2 description" },
            { id:3,title: "Title 3", description: "Title 3 description" },
        ]
    }
]

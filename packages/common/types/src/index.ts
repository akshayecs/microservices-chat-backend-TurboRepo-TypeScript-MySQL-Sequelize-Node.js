export interface User {
    id: number;
    name: string;
    email: string;
}

export interface Message {
    id: number;
    senderId: number;
    receiverId?: number;
    groupId?: number;
    content: string;
    createdAt: Date;
}

export interface Group {
    id: number;
    name: string;
}

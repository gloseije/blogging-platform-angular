export interface User {
    fullName: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    id: number;
  }
  
  export interface UserLogin {
    user: {
      fullName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      id: number;
    };
    token: {
      type: string;
      name: null;
      token: string;
      abilities: string[];
      lastUsedAt: null;
      expiresAt: null;
    };
  }
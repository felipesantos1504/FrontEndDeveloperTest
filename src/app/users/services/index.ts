import { UsersHttpService } from './users-http/users-http.service';
import { UsersService } from './users/users.service';

/**
 * Variável utilizada para importar os serviços em um só lugar
 */
export const usersServices: any = [
    UsersService,
    UsersHttpService
];

import { EditComponent } from './edit/edit.component';
import { UsersComponent } from './users/users.component';

/**
 * Variável utilizada para importar as paginas em um só lugar
 */
export const usersPages: any = [
    EditComponent,
    UsersComponent
];

/**
 * @description exportar todas as pastas neste arquivo
 * @example export * from './auth/auth.service';
 * @example export * from './pax/pax.pipe';
 * @example export * from './navbar/navbar.component';
 */

export * from './edit/edit.component';
export * from './users/users.component';

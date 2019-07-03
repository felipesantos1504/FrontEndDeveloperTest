import { LoginComponent } from './login/login.component';

/**
 * Variável utilizada para importar as paginas em um só lugar
 */
export const authPages: any = [
    LoginComponent
];

/**
 * @description exportar todas as pastas neste arquivo
 * @example export * from './auth/auth.service';
 * @example export * from './pax/pax.pipe';
 * @example export * from './navbar/navbar.component';
 */


export * from './login/login.component';

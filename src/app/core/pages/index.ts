import { NotFoundComponent } from './not-found/not-found.component';
import { CoreComponent } from 'core/core.component';

/**
 * Variável utilizada para importar os componentes em um só lugar
 */
export const corePages: any = [
    CoreComponent,
    NotFoundComponent
];


/**
 * @description exportar todas as pastas neste arquivo
 * @example export * from './auth/auth.service';
 * @example export * from './pax/pax.pipe';
 * @example export * from './navbar/navbar.component';
 */

export * from 'core/core.component';
export * from './not-found/not-found.component';

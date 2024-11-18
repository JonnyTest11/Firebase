import { Component, inject } from "@angular/core";
import { Router, RouterLink, RouterModule } from "@angular/router";
import { AuthStateService } from "../data-service/auth-state.service";

@Component({
    standalone: true,
    imports: [RouterModule, RouterLink],
    selector: 'app-layout',
    template: `
        <header class="h-[80px] mb-8 w-full max-w-screen-lg mx-auto px-4">
            <nav class="flex items-center justify-between h-full">
                <a class="text-2xl font-bold" routerLink="/tasks">Ng Task</a>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 
                dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" (click)="logOut()">Salir</button>
            </nav>
        </header>
        <router-outlet/>
    `,
})
export default class LayoutComponent {
    private _authState = inject(AuthStateService);
    private _router = inject(Router);

    async logOut() {
        await this._authState.logOut();
        this._router.navigateByUrl('/auth/sign-in');
    }
}
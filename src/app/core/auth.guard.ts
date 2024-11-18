import { inject } from "@angular/core";
import { CanActivateChildFn, Router } from "@angular/router";
import { AuthStateService } from "../shared/data-service/auth-state.service";
import { map } from "rxjs";

export const privateGuard = (): CanActivateChildFn => {
    return () => {
        const router = inject(Router);
        const authState = inject(AuthStateService);

        return authState.authState$.pipe(
            map(state => {
                console.log(state);
                
                if (!state) {
                    router.navigateByUrl('/auth/sign-in');
                    return false
                }
                return true;
            })
        );
    }
}

export const publicGuard = (): CanActivateChildFn => {
    return () => {
        const router = inject(Router);
        const authState = inject(AuthStateService);

        return authState.authState$.pipe(
            map(state => {
                if (state) {
                    router.navigateByUrl('/tasks');
                    return false
                }
                return true;
            })
        );
    }
}
import { Routes } from "@angular/router";

export default [
    {
        path: '',
        loadComponent: () => import('./tasks-list/tasks-list.component'),
    },
    {
        path: 'new',
        loadComponent: () => import('./tasks-form/tasks-form.component'),
    },
    {
        path: 'edit/:idTask',
        loadComponent: () => import('./tasks-form/tasks-form.component'),
    }
] as Routes
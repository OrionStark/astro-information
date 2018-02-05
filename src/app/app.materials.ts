import { NgModule } from '@angular/core';
import { MatButtonModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatDialogModule,
        MatIconModule,
        MatCardModule,
        MatDatepickerModule,
        MatTableModule,
        MatSidenavModule,
        MatExpansionModule,
        MatNativeDateModule,
        MatMenuModule } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatDatepickerModule,
        MatTableModule,
        MatSidenavModule,
        MatDialogModule,
        MatExpansionModule,
        MatNativeDateModule,
        MatMenuModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule,
        MatCardModule,
        MatDatepickerModule,
        MatTableModule,
        MatSidenavModule,
        MatExpansionModule,
        MatNativeDateModule,
        MatMenuModule
    ]
})
export class MaterialsComponent {}
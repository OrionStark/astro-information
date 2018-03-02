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
        MatPaginatorModule,
        MatSidenavModule,
        MatExpansionModule,
        MatNativeDateModule,
        MatMenuModule,
        MatTooltipModule } from '@angular/material';

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
        MatPaginatorModule,
        MatDialogModule,
        MatExpansionModule,
        MatNativeDateModule,
        MatMenuModule,
        MatTooltipModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule,
        MatCardModule,
        MatPaginatorModule,
        MatDatepickerModule,
        MatTableModule,
        MatSidenavModule,
        MatExpansionModule,
        MatNativeDateModule,
        MatMenuModule,
        MatTooltipModule
    ]
})
export class MaterialsComponent {}

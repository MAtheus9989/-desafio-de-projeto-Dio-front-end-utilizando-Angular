import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { BookstoreAppComponent } from './components/bookstore-app/bookstore-app.component';

import { ProductListComponent } from './components/bookstore-app/product-list/product-list.component';
import { FiltersComponent } from './components/bookstore-app/filters/filters.component';
import { ProductItemComponent } from './components/bookstore-app/product-list/product-item/product-item.component';
import { BooksService } from './components/bookstore-app/product-list/product-list.component.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    BookstoreAppComponent,
    ProductListComponent,
    FiltersComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }

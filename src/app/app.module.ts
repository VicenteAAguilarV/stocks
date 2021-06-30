import { ManageComponent } from './components/manage/manage.component';
import { StocksService } from './services/stocks.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { FormsModule } from '@angular/forms';
import { AppRoutes } from './app.routes';

@NgModule({
 declarations: [
 AppComponent,
 SummaryComponent,
 ManageComponent
 ],
 imports: [
 BrowserModule,
 HttpClientModule,
 FormsModule,
 AppRoutes
 ],
 providers: [StocksService],
 bootstrap: [AppComponent]
})
export class AppModule { }
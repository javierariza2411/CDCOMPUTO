import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, from } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ProductoService } from '../services/serviceRest';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  constructor(private productoService: ProductoService) { 


    this.productoService.getProductos().subscribe((data: any[]) => {
      this.listaArticulos = data;

    })
  }

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  public listaArticulos: any = null;


  ngOnInit() {


      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    }

  private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();

      return this.listaArticulos.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }

}






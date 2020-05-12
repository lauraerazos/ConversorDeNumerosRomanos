import { TestBed } from '@angular/core/testing';

import { NumerosRomanosService } from './numeros-romanos.service';

describe('NumerosRomanosService', () => {
  let service: NumerosRomanosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(NumerosRomanosService);
  });

  it('should be created', () => {
    //const service: NumerosRomanosService = TestBed.get(NumerosRomanosService);
    expect(service).toBeTruthy();
  });

  it('Convetir número 1', () => {
    expect(service.transformarUnidades(1, "uni")).toEqual('I');
  });

  it('Convetir número 2', () => {
    expect(service.transformarUnidades(2, "uni")).toEqual('II');
  });

  it('Convetir número 3', () => {
    expect(service.transformarUnidades(3, "uni")).toEqual('III');
  });

  it('Convetir número 4', () => {
    expect(service.transformarUnidades(4, "uni")).toEqual('IV');
  });

  it('Convetir número 5', () => {
    expect(service.transformarUnidades(5, "uni")).toEqual('V');
  });

  it('Convetir número 6', () => {
    expect(service.transformarUnidades(6, "uni")).toEqual('VI');
  });

  it('Convetir número 7', () => {
    expect(service.transformarUnidades(7, "uni")).toEqual('VII');
  });

  it('Convetir número 8', () => {
    expect(service.transformarUnidades(8, "uni")).toEqual('VIII');
  });

  it('Convetir número 9', () => {
    expect(service.transformarUnidades(9, "uni")).toEqual('IX');
  });

  it('Convetir número 10', () => {
    expect(service.convertir10()).toEqual('X');
  });

  it('Convetir número 50', () => {
    expect(service.convertir50()).toEqual('L');
  });

  it('Convetir número 100', () => {
    expect(service.convertir100()).toEqual('C');
  });

  it('Convetir número 500', () => {
    expect(service.convertir500()).toEqual('D');
  });

  it('Convetir número 1000', () => {
    expect(service.convertirRomano(1000)).toEqual('M');
  });

  it('Convetir número 10', () => {
    expect(service.convertirRomano(10)).toEqual('X');
  });

  it('Convetir número 26', () => {
    expect(service.convertirRomano(26)).toEqual('XXVI');
  });

  it('Convetir número 38', () => {
    expect(service.convertirRomano(38)).toEqual('XXXVIII');
  });

  it('Convetir número 47', () => {
    expect(service.convertirRomano(47)).toEqual('XLVII');
  });

  it('Convetir número 53', () => {
    expect(service.convertirRomano(53)).toEqual('LIII');
  });

  it('Convetir número 163', () => {
    expect(service.convertirRomano(163)).toEqual('CLXIII');
  });

  it('Convetir número 571', () => {
    expect(service.convertirRomano(571)).toEqual('DLXXI');
  });

  it('Convetir número 315', () => {
    expect(service.convertirRomano(315)).toEqual('CCCXV');
  });

  it('Convetir número 816', () => {
    expect(service.convertirRomano(816)).toEqual('DCCCXVI');
  });

  it('Convetir número 999', () => {
    expect(service.convertirRomano(999)).toEqual('CMXCIX');
  });

  it('Convetir número 950', () => {
    expect(service.convertirRomano(950)).toEqual('CML');
  });

  it('Convetir número 749', () => {
    expect(service.convertirRomano(749)).toEqual('DCCXLIX');
  });

  it('Convetir número 472', () => {
    expect(service.convertirRomano(472)).toEqual('CDLXXII');
  });

  it('Convetir número 499', () => {
    expect(service.convertirRomano(499)).toEqual('CDXCIX');
  });

  it('Convert the number 888', () => {
    expect(service.convertirRomano(888)).toEqual('DCCCLXXXVIII');
  });

  it('Convert the number 995', () => {
    expect(service.convertirRomano(995)).toEqual('CMXCV');
  });

  it('Convert the number 833', () => {
    expect(service.convertirRomano(833)).toEqual('DCCCXXXIII');
  });

  it('Convert the number 294', () => {
    expect(service.convertirRomano(294)).toEqual('CCXCIV');
  });

  it('Convert the number 504', () => {
    expect(service.convertirRomano(504)).toEqual('DIV');
  });

  it('Convert the number 342', () => {
    expect(service.convertirRomano(342)).toEqual('CCCXLII');
  });
});
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SharedServiceService} from './shared-service.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Assigment5'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Assigment5');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('Assigment5 app is running!');
  });


  
  let component: AppComponent;
  let service: SharedServiceService;
  let check: any;


  
  beforeEach(() => {
    service = new SharedServiceService();
    component = new AppComponent(service);
  });


  afterEach(()=>{
    service = null;
    component = null;
  });
  
  it('should be created component', () => {
    expect(component).toBeTruthy();
  });
  it('check if varibale is positive in', () => {
    check= spyOn(service, 'ispositive').and.returnValue(false);
    expect(component.isAlreadyPositive()).toBeFalsy();
    expect(service.ispositive).toHaveBeenCalled();

  });
  it('do positive', () => {
    check= spyOn(service, 'doPositive').and.returnValue(true);
    expect(component.doPositive()).toBeTruthy();
    expect(service.doPositive).toHaveBeenCalled();
  });
  it('do negative', () => {
    check= spyOn(service, 'donegative').and.returnValue(true);
    expect(component.donegative()).toBeTruthy();
    expect(service.donegative).toHaveBeenCalled();
  });
  it('is negative', () => {
    check= spyOn(service, 'isnagative').and.returnValue(true);
    expect(component.isAlreadyNegative()).toBeTruthy();
    expect(service.isnagative).toHaveBeenCalled();
  });
 
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StubService } from 'src/app/services/stub.service';

import { StubComponent } from './stub.component';

const serviceStub: Partial<StubService> = {
  name: 'Boothstomper'
};



describe('StubComponent', () => {
  let component: StubComponent;
  let service: StubService;
  let fixture: ComponentFixture<StubComponent>;
  let msgDisplay: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ StubComponent ],
      providers: [
        {
          provide: StubService,
          useValue: serviceStub
        }
      ]
    });

    fixture = TestBed.createComponent(StubComponent);
    component = fixture.componentInstance;

    msgDisplay = fixture.nativeElement.querySelector('span');
    service = TestBed.inject(StubService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  describe('status', () => {
    it("should be on a mission", () => {
      service.isBusy = true;
      fixture.detectChanges();
      expect(msgDisplay.textContent).toContain('Boothstomper is on a mission');
    });
    it('should be available', () => {
      service.isBusy = false;
      fixture.detectChanges();
      expect(msgDisplay.textContent).toContain('Boothstomper is available');
    });
  });
});

